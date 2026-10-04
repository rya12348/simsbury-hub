// update-events.js
// Runs every morning in GitHub Actions (and you can run it by hand: node update-events.js).
// It reads the calendar feeds listed in sources.json, and rewrites ONLY the
// "AUTO-EVENTS" block and the LAST_UPDATED line inside data.js.
// Everything else in data.js (your hand-written events, places, town links) is left alone.
//
// Rules this script follows:
//  - Only reads feeds you list in sources.json (no page scraping).
//  - Checks each site's robots.txt first and skips anything the site asks robots not to fetch.
//  - Keeps only: title, date, time, place, and a link back to the original. No descriptions are copied.
//  - If a feed is down, it keeps that feed's old events instead of deleting them.
//  - Needs no API keys and no npm packages (Node 18 or newer).

"use strict";
const fs = require("fs");
const vm = require("vm");

const DATA_FILE = "data.js";
const SOURCES_FILE = "sources.json";
const START = "// AUTO-EVENTS-START";
const END = "// AUTO-EVENTS-END";
const DAYS_AHEAD = 120;
const MAX_PER_SOURCE = 60;
const DRY_RUN = process.env.DRY_RUN === "1"; // DRY_RUN=1 prints results but does not change data.js
const UA = "SimsburyHubBot/1.0 (free community site; +https://github.com/" + (process.env.GITHUB_REPOSITORY || "simsbury-hub") + ")";

// ---------- small helpers ----------
const tz = (opts, d) => new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", hourCycle: "h23", ...opts }).format(d);
const todayNY = () => tz({ year: "numeric", month: "2-digit", day: "2-digit" }, new Date()); // YYYY-MM-DD
const addDays = (iso, n) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const clean = (s, max) => String(s || "").replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
const unescapeIcs = (s) => s.replace(/\\n/gi, " ").replace(/\\([,;\\])/g, "$1");
// Some feeds put HTML in the text (<p>Town Hall</p>). Turn it into plain text.
const decode = (s) => s.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#0*39;|&apos;/gi, "'");
const stripHtml = (s) => decode(String(s).replace(/<\/p>\s*<p[^>]*>/gi, ", ").replace(/<br\s*\/?>/gi, ", ").replace(/<[^>]*>/g, " "));
const cleanPlace = (s) => stripHtml(s).replace(/\s+/g, " ").replace(/^[\s,-]+/, "").replace(/\s*-?\s*Simsbury,?\s*CT\s*\d{5}\s*$/i, "").replace(/[,\s-]+$/, "").trim();
// sources.json can say: "categoryRules": [{ "words": ["commission", "board"], "category": "meetings" }]
const pickCategory = (title, s) => {
  const t = title.toLowerCase();
  for (const r of s.categoryRules || []) if (r.words.some((w) => t.includes(w.toLowerCase()))) return r.category;
  return s.category || "community";
};
const isHttps = (s) => { try { return new URL(s).protocol === "https:"; } catch { return false; } };

// ---------- robots.txt ----------
function robotsAllows(txt, path) {
  const groups = [];
  let cur = null, lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const i = line.indexOf(":");
    if (i < 0) continue;
    const key = line.slice(0, i).trim().toLowerCase(), val = line.slice(i + 1).trim();
    if (key === "user-agent") {
      if (!cur || !lastWasAgent) { cur = { agents: [], rules: [] }; groups.push(cur); }
      cur.agents.push(val.toLowerCase()); lastWasAgent = true;
    } else {
      lastWasAgent = false;
      if (cur && (key === "allow" || key === "disallow")) cur.rules.push({ allow: key === "allow", path: val });
    }
  }
  const mine = groups.filter((g) => g.agents.some((a) => a !== "*" && UA.toLowerCase().includes(a)));
  const use = mine.length ? mine : groups.filter((g) => g.agents.includes("*"));
  let best = { len: -1, allow: true };
  for (const g of use) for (const r of g.rules) {
    if (!r.path) continue; // "Disallow:" with nothing after it means everything is allowed
    const re = new RegExp("^" + r.path.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\\\$$/, "$"));
    if (re.test(path) && (r.path.length > best.len || (r.path.length === best.len && r.allow))) best = { len: r.path.length, allow: r.allow };
  }
  return best.allow;
}

async function allowedByRobots(url) {
  const u = new URL(url);
  try {
    const r = await fetch(u.origin + "/robots.txt", { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(20000) });
    if (r.status === 404) return true; // no robots.txt = no rules
    if (!r.ok) return false;           // can't tell, so be polite and skip
    return robotsAllows(await r.text(), u.pathname + u.search);
  } catch { return false; }
}

// ---------- iCal parsing ----------
function parseIcs(text) {
  const lines = text.replace(/\r\n?/g, "\n").replace(/\n[ \t]/g, "").split("\n");
  const events = [];
  let cur = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") cur = {};
    else if (line === "END:VEVENT") { if (cur) events.push(cur); cur = null; }
    else if (cur) {
      const i = line.indexOf(":");
      if (i < 0) continue;
      cur[line.slice(0, i).split(";")[0].toUpperCase()] = line.slice(i + 1);
    }
  }
  return events;
}

// "20261024", "20261024T130000", or "20261024T170000Z"  ->  { date: "2026-10-24", time: "1:00 PM" } in Simsbury time
function toLocal(v) {
  const m = String(v || "").match(/^(\d{4})(\d\d)(\d\d)(?:T(\d\d)(\d\d)(\d\d)?(Z)?)?$/);
  if (!m) return null;
  let [, y, mo, d, h, mi, , z] = m;
  if (h === undefined) return { date: `${y}-${mo}-${d}`, time: "All day" };
  if (z) {
    const dt = new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi));
    const date = tz({ year: "numeric", month: "2-digit", day: "2-digit" }, dt);
    [h, mi] = tz({ hour: "2-digit", minute: "2-digit" }, dt).split(":");
    return { date, time: fmtTime(+h, mi) };
  }
  return { date: `${y}-${mo}-${d}`, time: fmtTime(+h, mi) };
}
const fmtTime = (h, mi) => `${h % 12 || 12}:${mi} ${h < 12 ? "AM" : "PM"}`;

// ---------- main ----------
(async () => {
  const sources = JSON.parse(fs.readFileSync(SOURCES_FILE, "utf8")).filter((s) => s.enabled);
  if (!sources.length) { console.log("No enabled sources in sources.json. Nothing to do."); return; }

  const code = fs.readFileSync(DATA_FILE, "utf8");
  const a = code.indexOf(START), b = code.indexOf(END);
  if (a < 0 || b < a) throw new Error(`data.js is missing the ${START} / ${END} lines.`);

  // old auto events (kept for feeds that fail today) and hand-written events (used to avoid duplicates)
  let oldAuto = [];
  try { oldAuto = JSON.parse(code.slice(a, b).replace(/^[^[]*/, "").replace(/;\s*$/, "")); } catch { console.log("Could not read old auto events; starting fresh."); }
  const manual = vm.runInNewContext(code.replace(/const AUTO_EVENTS[\s\S]*?(?=\n\/\/ AUTO-EVENTS-END)/, "const AUTO_EVENTS = [];").replace(/\nconst EVENTS[^\n]*/, "") + "\n;MANUAL_EVENTS");

  const today = todayNY(), last = addDays(today, DAYS_AHEAD);
  const fresh = [];
  const failed = [];

  for (const s of sources) {
    try {
      if (!isHttps(s.url)) throw new Error("url must start with https://");
      if (!(await allowedByRobots(s.url))) throw new Error("robots.txt does not allow this, or could not be read");
      const res = await fetch(s.url, { headers: { "User-Agent": UA, Accept: "text/calendar, text/plain, */*" }, signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const raw = parseIcs(await res.text());
      if (!raw.length) throw new Error("feed had no events (is this really an iCal feed?)");
      const mine = [];
      let recurring = 0;
      for (const e of raw) {
        if (e.RRULE) { recurring++; continue; } // repeating events are skipped: their dates are not expanded here
        const when = toLocal(e.DTSTART);
        const title = clean(stripHtml(unescapeIcs(e.SUMMARY || "")), 120);
        if (!when || !title || isNaN(new Date(when.date)) || when.date < today || when.date > last) continue;
        mine.push({
          title, date: when.date, time: when.time,
          place: clean(cleanPlace(unescapeIcs(e.LOCATION || "")), 80) || s.name,
          category: pickCategory(title, s),
          link: isHttps(e.URL) ? e.URL : s.pageUrl,
          src: s.id
        });
      }
      // keep the SOONEST events, not just the first ones the feed happens to list
      mine.sort((x, y) => x.date.localeCompare(y.date));
      const kept = Math.min(mine.length, MAX_PER_SOURCE);
      fresh.push(...mine.slice(0, kept));
      console.log(`OK   ${s.id}: ${kept} events kept (of ${mine.length} found), ${recurring} repeating events skipped`);
    } catch (err) {
      failed.push(s.id);
      console.log(`FAIL ${s.id}: ${err.message}`);
    }
  }

  if (failed.length === sources.length) { console.log("Every source failed. Leaving data.js unchanged."); process.exitCode = 1; return; }

  // keep yesterday's events from sources that failed today
  const carried = oldAuto.filter((e) => failed.includes(e.src) && e.date >= today);
  const seen = new Set(manual.map((e) => e.date + norm(e.title)));
  const links = new Set(manual.map((e) => e.link));
  const merged = [];
  for (const e of [...fresh, ...carried]) {
    const key = e.date + norm(e.title);
    if (seen.has(key) || (links.has(e.link) && e.link !== sources.find((s) => s.id === e.src)?.pageUrl)) continue;
    seen.add(key); merged.push(e);
  }
  merged.sort((x, y) => x.date.localeCompare(y.date) || x.title.localeCompare(y.title));

  const block = `${START}\nconst AUTO_EVENTS = ${JSON.stringify(merged, null, 2)};\n`;
  const out = (code.slice(0, a) + block + code.slice(b)).replace(/const LAST_UPDATED = "[^"]*";/, `const LAST_UPDATED = "${today}";`);
  console.log(`${merged.length} automatic events total.`);
  if (DRY_RUN) { console.log(JSON.stringify(merged, null, 2)); return; }
  fs.writeFileSync(DATA_FILE, out);
  console.log("data.js updated.");
})().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
