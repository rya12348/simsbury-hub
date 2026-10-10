// ALL SITE CONTENT LIVES IN THIS FILE.
// Real Simsbury info, gathered 2026-10-04 from the public pages linked on each item.
// Anything with "CHECK" in a comment or text is something I could not fully confirm - open the link and verify it.
// Event dates are fixed (YYYY-MM-DD). Past events hide themselves automatically.

const LAST_UPDATED = "2026-10-04";

const EVENTS = [
  { title: "Second Friday Networking and Ribbon Cutting (Lucky Gut + Farmington Valley Lifestyle Magazine)", date: "2026-10-09", time: "7:30 AM", place: "The Lucky Gut Collective, 10 Wilcox St", category: "community",
    link: "https://www.simsburycoc.com/events/details/second-friday-morning-networking-event-ribbon-cutting-the-lucky-gut-farmington-valley-lifestyle-magazine-4078" },
  { title: "Walk & Talk for Hope: Community Festival for Mental Health", date: "2026-10-10", time: "10:00 AM", place: "Simsbury Meadows Performing Arts Center", category: "family",
    link: "https://www.simsburycoc.com/events/details/walk-talk-for-hope-a-community-festival-for-mental-health-4080" },
  { title: "Revolutionary Taverns 1760-1775 (Historical Society talk)", date: "2026-10-16", time: "6:30 PM", place: "Simsbury Public Library (registration required)", category: "community",
    link: "https://simsbury.librarycalendar.com/event/tavern-talk-shs-90735" },
  { title: "Blacksmithing Class (Historical Society, $95)", date: "2026-10-17", time: "9:00 AM", place: "Griswold-Ensign Blacksmith Shop", category: "community",
    link: "https://simsburyhistory.org/events-programs/" },
  { title: "Murder at 3 Corner Pond: A Colonial Tale (runs Oct 22-25)", date: "2026-10-22", time: "See link (CHECK show times)", place: "Meeting House", category: "family",
    link: "https://simsburyhistory.org/events-programs/" },
  { title: "Spooktacular 2026", date: "2026-10-24", time: "1:00 PM", place: "Simsbury Meadows Performing Arts Center", category: "family",
    link: "https://www.simsburycoc.com/events/details/spooktacular-2026-3776" },
  { title: "Food For Thought: The Thanksgiving Story (Historical Society)", date: "2026-11-05", time: "7:00 PM", place: "Simsbury Public Library (registration required)", category: "community",
    link: "https://simsbury.librarycalendar.com/event/simsbury-historical-society-presents-food-thought-thanksgiving-story-79666" },
  { title: "5th Annual Nutmeg Ukulele Festival", date: "2026-11-07", time: "8:00 AM (doors open, CHECK)", place: "Eno Memorial Hall", category: "music",
    link: "https://www.simsburymeadows.org/" },
  { title: "Slate and Sled Painting (Historical Society)", date: "2026-11-21", time: "10:00 AM", place: "Ellsworth Visitor Center", category: "community",
    link: "https://simsburyhistory.org/events-programs/" },
  { title: "Holiday Sip & Shop (Historical Society)", date: "2026-12-02", time: "6:00 PM", place: "Ellsworth Visitor Center", category: "community",
    link: "https://simsburyhistory.org/events-programs/" },
  { title: "Children's Holiday Tea Party (Historical Society)", date: "2026-12-05", time: "2:00 PM", place: "Phelps Tavern", category: "family",
    link: "https://simsburyhistory.org/events-programs/" }
];

const PLACES = [
  // New in 2026
  { name: "Birdie & The Barrel", type: "restaurant", address: "100 Old Farms Rd (Simsbury Farms golf course)", description: "All-day food and drink at the town golf course. Opened around May 2026.", isNew: true,
    link: "https://patch.com/connecticut/simsbury/simsbury-opens-new-restaurant-its-municipal-golf-course" },
  { name: "Chipotle Mexican Grill", type: "restaurant", address: "1263 Hopmeadow St", description: "Simsbury's first Chipotle, with a pickup lane for digital orders. Opened August 2026.", isNew: true,
    link: "https://patch.com/connecticut/simsbury/major-mexican-food-chain-opens-new-shop-simsbury" },
  { name: "Sycamore Vintage Home Goods", type: "store", address: "2 Railroad St", description: "Vintage furniture, art, lamps, glassware, and pottery. Opened early 2026. CHECK hours before visiting.", isNew: true,
    link: "https://patch.com/connecticut/simsbury/my-grandma-had-new-simsbury-store-specializes-all-things-vintage" },
  // Local places from the Chamber of Commerce restaurant guide (not new)
  { name: "Blossom Cafe", type: "restaurant", address: "6 Wilcox St", description: "Asian fusion brunch. Opened in 2024. CHECK that it is still open.", isNew: false,
    link: "https://patch.com/connecticut/simsbury/unique-asian-fusion-brunch-restaurant-opening-apr-21-simsbury" },
  { name: "Metro Bis", type: "restaurant", address: "690 Hopmeadow St", description: "Listed in the Chamber of Commerce restaurant guide.", isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Plan B Burger Bar", type: "restaurant", address: "4 Railroad St", description: "Listed in the Chamber of Commerce restaurant guide.", isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Popover Bistro & Bakery", type: "restaurant", address: "928 Hopmeadow St", description: "Listed in the Chamber of Commerce restaurant guide.", isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Brookside Bagels", type: "restaurant", address: "563 Hopmeadow St", description: "Listed in the Chamber of Commerce restaurant guide.", isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Millwright's", type: "restaurant", address: "77 West St", description: "Listed in the Chamber of Commerce restaurant guide.", isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide" }
];

const TOWN = [
  { name: "Town of Simsbury website", description: "Official town news, calendar, and departments.", link: "https://www.simsbury-ct.gov/" },
  { name: "Town calendar", description: "Meetings and town events.", link: "https://www.simsbury-ct.gov/calendar.aspx?CID=14" },
  { name: "Parks and Recreation", description: "Parks, trails, and programs.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Bulky waste, recycling, and landfill", description: "What the recycling center takes and household hazardous waste info.", link: "https://www.simsbury-ct.gov/700/Bulky-Waste-Recycling-Landfill-Household" },
  { name: "Assessor's Office", description: "Property assessments.", link: "https://www.simsbury-ct.gov/392/Assessors-Office" },
  { name: "Tax Collector", description: "Pay or look up property taxes.", link: "https://www.simsbury-ct.gov/372/Tax-Collector" },
  { name: "Official tax calculator", description: "The town's own tax calculator. Compare it with the estimator below.", link: "https://www.simsbury-ct.gov/tax-office/pages/tax-calculator" },
  { name: "Tourism", description: "Visit Simsbury.", link: "https://www.simsbury-ct.gov/371/Tourism" },
  { name: "Simsbury Public Library", description: "Programs and resources.", link: "https://www.simsburylibrary.info/" },
  { name: "Library events calendar", description: "Library programs and events.", link: "https://simsbury.librarycalendar.com/events/month" },
  { name: "Simsbury Public Schools", description: "News and contacts.", link: "https://www.simsbury.k12.ct.us/" },
  { name: "School district calendar", description: "School days and half days.", link: "https://www.simsbury.k12.ct.us/district/district-calendar" },
  { name: "Granby-Simsbury Chamber of Commerce events", description: "Local business and community events.", link: "https://www.simsburycoc.com/events" },
  { name: "Simsbury Meadows Performing Arts Center", description: "Outdoor concerts and shows.", link: "https://www.simsburymeadows.org/" },
  { name: "Simsbury Historical Society", description: "History programs and events.", link: "https://simsburyhistory.org/events-programs/" }
];
