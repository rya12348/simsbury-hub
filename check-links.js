// check-links.js
// Runs every night in GitHub Actions (or by hand: node check-links.js).
// Reads every link in data.js (events, places, trails, town links), visits each one once,
// and writes link-report.md. It never changes data.js.
//
// What counts as what:
//  - DEAD:    page not found (404/410), or the site could not be reached (bad address, timeout).
//  - WARNING: the site answered with an error or refused the robot (403, 429, 5xx). The link may be fine
//             for real visitors, so these are listed but do not count as broken.
// Needs no API keys and no npm packages (Node 18 or newer).

"use strict";
const fs = require("fs");
const vm = require("vm");

const UA = "SimsburyHubLinkCheck/1.0 (free community site; +https://github.com/" + (process.env.GITHUB_REPOSITORY || "simsbury-hub") + ")";
const SKIP_HOSTS = /(^|\.)(facebook|instagram|twitter|x|linkedin|yelp)\.com$/i; // these block robots, so checking is pointless
const CONCURRENCY = 4;
const PAUSE_MS = 300;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function collectLinks() {
  const code = fs.readFileSync("data.js", "utf8");
  const d = vm.runInNewContext(code + "\n;({ EVENTS, PLACES, TOWN, COMPLETE_TRAILS })");
  const map = new Map(); // url -> ["Place: Name", ...]
  const add = (url, label) => {
    if (!url || !/^https?:\/\//i.test(url)) return;
    if (!map.has(url)) map.set(url, []);
    map.get(url).push(label);
  };
  (d.EVENTS || []).forEach((e) => add(e.link, "Event: " + e.title));
  (d.PLACES || []).forEach((p) => add(p.link, "Place: " + p.name));
  (d.TOWN || []).forEach((t) => add(t.link, "Town: " + t.name));
  (d.COMPLETE_TRAILS || []).forEach((t) => add(t.link, "Trail: " + t.name));
  return map;
}

async function tryFetch(url, method) {
  return fetch(url, { method, redirect: "follow", headers: { "User-Agent": UA, Accept: "text/html,*/*" }, signal: AbortSignal.timeout(20000) });
}

async function check(url) {
  let host = "";
  try { host = new URL(url).hostname; } catch { return { kind: "dead", note: "not a valid web address" }; }
  if (SKIP_HOSTS.test(host)) return { kind: "skipped", note: "social or review site (blocks robots)" };

  let last = "";
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      let res = await tryFetch(url, "HEAD");
      if (res.status >= 400) res = await tryFetch(url, "GET"); // some sites refuse HEAD requests
      if (res.ok) return { kind: "ok" };
      if (res.status === 404 || res.status === 410) return { kind: "dead", note: "HTTP " + res.status + " (page not found)" };
      last = "HTTP " + res.status;
      if (res.status === 403 || res.status === 429 || res.status === 999) return { kind: "warn", note: last + " (site may be blocking robots)" };
    } catch (err) {
      last = (err.cause && err.cause.code) || err.name || "network error";
    }
    if (attempt === 1) await sleep(5000); // one retry before judging
  }
  // Still failing after a retry. Server errors are warnings; unreachable sites are dead.
  if (/^HTTP 5/.test(last)) return { kind: "warn", note: last + " (server error, may be temporary)" };
  return { kind: "dead", note: last + " (site could not be reached)" };
}

(async () => {
  const links = collectLinks();
  const urls = [...links.keys()];
  if (process.env.LIST_ONLY === "1") { console.log(urls.length + " unique links"); urls.forEach((u) => console.log(u)); return; }

  const results = new Map();
  let next = 0;
  async function worker() {
    while (next < urls.length) {
      const url = urls[next++];
      results.set(url, await check(url));
      await sleep(PAUSE_MS);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const by = (k) => urls.filter((u) => results.get(u).kind === k);
  const dead = by("dead"), warn = by("warn"), ok = by("ok"), skipped = by("skipped");
  const section = (title, list) => list.length
    ? `## ${title} (${list.length})\n\n` + list.map((u) => `- ${u}\n  - ${results.get(u).note}\n  - Used by: ${links.get(u).join("; ")}`).join("\n") + "\n\n"
    : "";

  const today = new Date().toISOString().slice(0, 10);
  const report = `# Simsbury Hub link check, ${today}\n\n` +
    `${urls.length} links checked: ${ok.length} fine, ${dead.length} broken, ${warn.length} warnings, ${skipped.length} skipped.\n\n` +
    section("Broken links", dead) + section("Warnings (probably fine, worth a look)", warn) +
    (dead.length ? "To fix a link, edit its `link:` value in data.js. If a business has closed, remove its listing.\n" : "Nothing needs fixing.\n");
  fs.writeFileSync("link-report.md", report);

  console.log(report);
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `dead=${dead.length}\n`);
})().catch((e) => { console.error("ERROR:", e.message); process.exit(1); });
