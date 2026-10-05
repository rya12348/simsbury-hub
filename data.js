// ALL SITE CONTENT LIVES IN THIS FILE.
// Comprehensive Simsbury Directory, gathered October 2026.

const LAST_UPDATED = "2026-10-05";

// Hand-written events.
const MANUAL_EVENTS = [
  { 
    title: "Second Friday Networking and Ribbon Cutting (Lucky Gut + Farmington Valley Lifestyle Magazine)", 
    date: "2026-10-09", 
    time: "7:30 AM", 
    place: "The Lucky Gut Collective, 10 Wilcox St", 
    category: "community",
    link: "https://www.simsburycoc.com/events/details/second-friday-morning-networking-event-ribbon-cutting-the-lucky-gut-farmington-valley-lifestyle-magazine-4078" 
  },
  { 
    title: "Walk & Talk for Hope: Community Festival for Mental Health", 
    date: "2026-10-10", 
    time: "10:00 AM", 
    place: "Simsbury Meadows Performing Arts Center", 
    category: "family",
    link: "https://www.simsburycoc.com/events/details/walk-talk-for-hope-a-community-festival-for-mental-health-4080" 
  },
  { 
    title: "Revolutionary Taverns 1760-1775 (Historical Society talk)", 
    date: "2026-10-16", 
    time: "6:30 PM", 
    place: "Simsbury Public Library (registration required)", 
    category: "community",
    link: "https://simsbury.librarycalendar.com/event/tavern-talk-shs-90735" 
  },
  { 
    title: "Blacksmithing Class (Historical Society, $95)", 
    date: "2026-10-17", 
    time: "9:00 AM", 
    place: "Griswold-Ensign Blacksmith Shop", 
    category: "community",
    link: "https://simsburyhistory.org/events-programs/" 
  },
  { 
    title: "Murder at 3 Corner Pond: A Colonial Tale (runs Oct 22-25)", 
    date: "2026-10-22", 
    time: "6:30 PM", 
    place: "Meeting House", 
    category: "family",
    link: "https://simsburyhistory.org/events-programs/" 
  },
  { 
    title: "Spooktacular 2026", 
    date: "2026-10-24", 
    time: "1:00 PM", 
    place: "Simsbury Meadows Performing Arts Center", 
    category: "family",
    link: "https://www.simsburycoc.com/events/details/spooktacular-2026-3776" 
  },
  { 
    title: "Food For Thought: The Thanksgiving Story (Historical Society)", 
    date: "2026-11-05", 
    time: "7:00 PM", 
    place: "Simsbury Public Library (registration required)", 
    category: "community",
    link: "https://simsbury.librarycalendar.com/event/simsbury-historical-society-presents-food-thought-thanksgiving-story-79666" 
  },
  { 
    title: "5th Annual Nutmeg Ukulele Festival", 
    date: "2026-11-07", 
    time: "8:00 AM", 
    place: "Eno Memorial Hall", 
    category: "music",
    link: "https://www.simsburymeadows.org/" 
  },
  { 
    title: "Slate and Sled Painting (Historical Society)", 
    date: "2026-11-21", 
    time: "10:00 AM", 
    place: "Ellsworth Visitor Center", 
    category: "community",
    link: "https://simsburyhistory.org/events-programs/" 
  },
  { 
    title: "Holiday Sip & Shop (Historical Society)", 
    date: "2026-12-02", 
    time: "6:00 PM", 
    place: "Ellsworth Visitor Center", 
    category: "community",
    link: "https://simsburyhistory.org/events-programs/" 
  },
  { 
    title: "Children's Holiday Tea Party (Historical Society)", 
    date: "2026-12-05", 
    time: "2:00 PM", 
    place: "Phelps Tavern", 
    category: "family",
    link: "https://simsburyhistory.org/events-programs/" 
  }
];

// AUTO-EVENTS-START
const AUTO_EVENTS = [
  {
    "title": "Design Review Board",
    "date": "2026-10-05",
    "time": "5:30 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Diversity, Equity & Inclusion Council",
    "date": "2026-10-05",
    "time": "6:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Public Building Committee",
    "date": "2026-10-05",
    "time": "7:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Youth Service Advisory Board",
    "date": "2026-10-05",
    "time": "2:30 PM",
    "place": "Simsbury High School, 34 Farms Village Road",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Commission",
    "date": "2026-10-05",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Commission Special Meeting",
    "date": "2026-10-05",
    "time": "6:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Age-Friendly Community Subcommittee Meeting",
    "date": "2026-10-06",
    "time": "2:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Conservation Commission/Inland Wetlands and Watercourses Agency",
    "date": "2026-10-06",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Simsbury Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Open Space Committee",
    "date": "2026-10-07",
    "time": "5:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Personnel Subcommittee",
    "date": "2026-10-08",
    "time": "9:00 AM",
    "place": "Simsbury Town Hall, Main Meeting Room, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Water Pollution Control Authority",
    "date": "2026-10-08",
    "time": "7:00 PM",
    "place": "Water Pollution Control Facility Conference Room, 36 Drake Hill Road",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Housing Authority",
    "date": "2026-10-09",
    "time": "8:00 AM",
    "place": "Virginia Connolly Residence, 1600 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Education",
    "date": "2026-10-13",
    "time": "6:30 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Planning Commission",
    "date": "2026-10-13",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Selectmen",
    "date": "2026-10-14",
    "time": "5:00 PM",
    "place": "Simsbury Town Hall, Main Meeting Room, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Police Commission",
    "date": "2026-10-14",
    "time": "5:00 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Design Review Board",
    "date": "2026-10-19",
    "time": "5:30 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Public Library Board of Trustees",
    "date": "2026-10-19",
    "time": "7:00 PM",
    "place": "Weatogue Room, Simsbury Public Library, 725 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Commission",
    "date": "2026-10-19",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Aging and Disability Commission",
    "date": "2026-10-20",
    "time": "6:00 PM",
    "place": "Youth Room, Eno Memorial Hall, 754 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Finance",
    "date": "2026-10-20",
    "time": "5:45 PM",
    "place": "Main Meeting Room, Town Hall , 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Conservation Commission/Inland Wetlands and Watercourses Agency",
    "date": "2026-10-20",
    "time": "7:00 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Economic Development Commission",
    "date": "2026-10-21",
    "time": "5:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Culture, Parks and Recreation Commission",
    "date": "2026-10-22",
    "time": "6:00 PM",
    "place": "Main Meeting Room , Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Selectmen",
    "date": "2026-10-26",
    "time": "6:00 PM",
    "place": "Simsbury Town Hall, Main Meeting Room, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Education",
    "date": "2026-10-27",
    "time": "6:30 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Planning Commission",
    "date": "2026-10-27",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "LBT Strategic Planning Subcommittee",
    "date": "2026-10-28",
    "time": "2:00 PM",
    "place": "725 Hopmeadow St.",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Board of Appeals",
    "date": "2026-10-28",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Diversity, Equity & Inclusion Council",
    "date": "2026-11-02",
    "time": "6:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Public Building Committee",
    "date": "2026-11-02",
    "time": "7:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Age-Friendly Community Subcommittee Meeting",
    "date": "2026-11-03",
    "time": "2:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Open Space Committee",
    "date": "2026-11-04",
    "time": "5:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Historic District Commission",
    "date": "2026-11-05",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Sustainability Committee",
    "date": "2026-11-05",
    "time": "6:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Selectmen",
    "date": "2026-11-09",
    "time": "6:00 PM",
    "place": "Simsbury Town Hall, Main Meeting Room, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Juvenile Review Board",
    "date": "2026-11-09",
    "time": "9:30 AM",
    "place": "Eno Memorial Hall, 754 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Police Commission",
    "date": "2026-11-09",
    "time": "5:00 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Education",
    "date": "2026-11-10",
    "time": "6:30 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Planning Commission",
    "date": "2026-11-10",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Personnel Subcommittee",
    "date": "2026-11-12",
    "time": "9:00 AM",
    "place": "Simsbury Town Hall, Main Meeting Room, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Water Pollution Control Authority",
    "date": "2026-11-12",
    "time": "7:00 PM",
    "place": "Water Pollution Control Facility Conference Room, 36 Drake Hill Road",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Housing Authority",
    "date": "2026-11-13",
    "time": "8:00 AM",
    "place": "Virginia Connolly Residence, 1600 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Design Review Board",
    "date": "2026-11-16",
    "time": "5:30 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Public Library Board of Trustees",
    "date": "2026-11-16",
    "time": "7:00 PM",
    "place": "Weatogue Room, Simsbury Public Library, 725 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Commission",
    "date": "2026-11-16",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Aging and Disability Commission",
    "date": "2026-11-17",
    "time": "6:00 PM",
    "place": "Youth Room, Eno Memorial Hall, 754 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Finance",
    "date": "2026-11-17",
    "time": "5:45 PM",
    "place": "Main Meeting Room, Town Hall , 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Conservation Commission/Inland Wetlands and Watercourses Agency",
    "date": "2026-11-17",
    "time": "7:00 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Economic Development Commission",
    "date": "2026-11-18",
    "time": "5:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "LBT Strategic Planning Subcommittee",
    "date": "2026-11-18",
    "time": "2:00 PM",
    "place": "725 Hopmeadow St.",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Zoning Board of Appeals",
    "date": "2026-11-18",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Board of Education",
    "date": "2026-11-24",
    "time": "6:30 PM",
    "place": "Board of Education Conference Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Planning Commission",
    "date": "2026-11-24",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Simsbury Youth Service Advisory Board",
    "date": "2026-11-30",
    "time": "2:30 PM",
    "place": "Simsbury High School, 34 Farms Village Road",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Age-Friendly Community Subcommittee Meeting",
    "date": "2026-12-01",
    "time": "2:30 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Conservation Commission/Inland Wetlands and Watercourses Agency",
    "date": "2026-12-01",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Simsbury Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Retirement Plan Subcommittee",
    "date": "2026-12-01",
    "time": "8:00 AM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Open Space Committee",
    "date": "2026-12-02",
    "time": "5:00 PM",
    "place": "Town of Simsbury",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  },
  {
    "title": "Historic District Commission",
    "date": "2026-12-03",
    "time": "7:00 PM",
    "place": "Main Meeting Room, Town Hall, 933 Hopmeadow Street",
    "category": "meetings",
    "link": "https://www.simsbury-ct.gov/calendar.aspx?CID=14",
    "src": "town"
  }
];
// AUTO-EVENTS-END

const EVENTS = [...MANUAL_EVENTS, ...AUTO_EVENTS];

const PLACES = [
  // ==========================================
  // --- RESTAURANTS, CAFES, TEA & SWEETS ---
  // ==========================================
  {
    name: "Tea Method",
    type: "restaurant",
    address: "920 Hopmeadow St",
    description: "Specialty loose-leaf tea lounge, boba tea bar, and peaceful downtown gathering space.",
    hours: "Tue-Sat: 10:00 AM - 6:00 PM, Sun: 11:00 AM - 5:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.teamethod.com/"
  },
  {
    name: "Spoonful of Britain",
    type: "store",
    address: "124 Hopmeadow St (Riverdale Farms, Bldg 1)",
    description: "Authentic British shop offering imported teas, English sweets, scones, pottery, and traditional pantry imports.",
    hours: "Tue-Sat: 10:00 AM - 5:00 PM, Sun: 12:00 PM - 4:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.spoonfulofbritain.com/"
  },
  {
    name: "Millwright's Restaurant",
    type: "restaurant",
    address: "77 West St",
    description: "James Beard-nominated fine dining in a historic 17th-century mill with waterfall views.",
    hours: "Tue-Thu: 5:00 PM - 9:00 PM, Fri-Sat: 5:00 PM - 9:30 PM, Sun: 4:00 PM - 8:30 PM, Mon: Closed",
    liveMusic: "Occasional seasonal tasting events and chef dinners.",
    isNew: false,
    link: "https://www.millwrightsrestaurant.com/"
  },
  {
    name: "Metro Bis",
    type: "restaurant",
    address: "690 Hopmeadow St",
    description: "Modern American bistro serving seasonal dishes located inside the historic Ensign House.",
    hours: "Mon-Sat: 11:30 AM - 2:30 PM (Lunch), 5:00 PM - 9:00 PM (Dinner), Sun: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.metrobis.com/"
  },
  {
    name: "La Joya Mexican Kitchen",
    type: "restaurant",
    address: "834 Hopmeadow St",
    description: "Vibrant Mexican restaurant serving artisanal street tacos, ceviche, and craft tequila margaritas.",
    hours: "Tue-Thu: 4:00 PM - 9:00 PM, Fri-Sat: 12:00 PM - 10:00 PM, Sun: 12:00 PM - 8:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.lajoyamexican.com/"
  },
  {
    name: "Abigail's Grille & Wine Bar",
    type: "restaurant",
    address: "413 Hartford Rd",
    description: "Historic 1780 tavern offering prime steaks, fresh seafood, and fireside tavern dining.",
    hours: "Mon-Thu: 11:30 AM - 9:00 PM, Fri-Sat: 11:30 AM - 10:00 PM, Sun: 11:30 AM - 8:30 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.abigailsgrille.com/"
  },
  {
    name: "Dom's Coffee",
    type: "restaurant",
    address: "20 Tower Ave",
    description: "Specialty European-style coffee shop, espresso bar, and artisan European bakery.",
    hours: "Mon-Sun: 7:00 AM - 5:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://domscoffee.com/"
  },
  {
    name: "Dom's Creamery",
    type: "restaurant",
    address: "20 Tower Ave",
    description: "Artisan European gelato, ice cream, crepes, and sweet treats located right next to Dom's Coffee.",
    hours: "Sun-Thu: 12:00 PM - 9:00 PM, Fri-Sat: 12:00 PM - 9:30 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://domscreamery.com/"
  },
  {
    name: "Harvest Cafe & Bakery",
    type: "restaurant",
    address: "1390 Hopmeadow St",
    description: "Local breakfast favorite serving signature pancakes, eggs benedict, omelets, and fresh baked pastries.",
    hours: "Tue-Sun: 7:00 AM - 2:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.harvestcafebakery.com/"
  },
  {
    name: "Popover Bistro & Bakery",
    type: "restaurant",
    address: "928 Hopmeadow St",
    description: "Farm-to-table breakfast and lunch spot famous for warm signature popovers and gluten-free choices.",
    hours: "Mon-Sun: 7:00 AM - 3:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://popovereatery.com/"
  },
  {
    name: "Maple Tree Cafe",
    type: "restaurant",
    address: "781 Hopmeadow St",
    description: "Casual neighborhood pub serving burgers, pizza, pasta, and nightlife music entertainment.",
    hours: "Sun-Thu: 11:00 AM - 9:00 PM (Bar 'til 1:00 AM), Fri-Sat: 11:00 AM - 10:00 PM (Bar 'til 2:00 AM)",
    liveMusic: "Live bands every Friday & Saturday night; Acoustic Open Mic every Wednesday at 6:00 PM.",
    isNew: false,
    link: "https://www.mapletreecafe.com/"
  },
  {
    name: "People's Choice Pizza",
    type: "restaurant",
    address: "116 Hopmeadow St",
    description: "Casual family pizzeria for thin-crust pizza, hot grinders, wings, and late-night takeout.",
    hours: "Sun-Thu: 10:00 AM - 10:00 PM, Fri-Sat: 10:00 AM - 11:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://peopleschoicepizza.com/simsbury"
  },
  {
    name: "Pepperoni's Pizza",
    type: "restaurant",
    address: "1400 Hopmeadow St",
    description: "Neighborhood pizza parlor specializing in gourmet pies, calzones, salads, and fast delivery.",
    hours: "Mon-Sat: 10:30 AM - 10:00 PM, Sun: 10:30 AM - 9:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://pepperonispizzasimsbury.menufy.com/"
  },
  {
    name: "Simsbury Pizza & Pizzeria",
    type: "restaurant",
    address: "926 Hopmeadow St",
    description: "Family-owned downtown staple serving classic New York style thin-crust pizza and hot sandwiches.",
    hours: "Mon-Sat: 11:00 AM - 9:00 PM, Sun: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://simsburypizza.com/"
  },
  {
    name: "Antonio's Restaurant",
    type: "restaurant",
    address: "1185 Hopmeadow St",
    description: "Relaxed neighborhood Italian eatery featuring pasta, pizza, seafood, and classic family dinners.",
    hours: "Mon-Sun: 11:30 AM - 9:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://antoniossimsbury.com/"
  },
  {
    name: "Table 570 Asian Fusion",
    type: "restaurant",
    address: "570 Hopmeadow St",
    description: "Contemporary Asian fusion restaurant serving fresh sushi rolls, ramen, dim sum, and craft cocktails.",
    hours: "Mon-Thu: 11:30 AM - 9:30 PM, Fri-Sat: 11:30 AM - 10:30 PM, Sun: 12:00 PM - 9:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.table570.com/"
  },
  {
    name: "Plan B Burger Bar",
    type: "restaurant",
    address: "4 Railroad St",
    description: "Bustling pub known for certified organic beef burgers, craft beers, and extensive bourbon selections.",
    hours: "Sun-Thu: 11:30 AM - 9:00 PM, Fri-Sat: 11:30 AM - 10:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://burgersbeerbourbon.com/simsbury"
  },
  {
    name: "Blossom Cafe",
    type: "restaurant",
    address: "6 Wilcox St",
    description: "Charming brunch cafe offering Asian fusion breakfast items, souffle pancakes, and specialty boba tea.",
    hours: "Tue-Sun: 8:00 AM - 3:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.simsburycoc.com/restaurant-guide"
  },
  {
    name: "Birdie & The Barrel",
    type: "restaurant",
    address: "100 Old Farms Rd (Simsbury Farms)",
    description: "All-day casual food and drink overlooking the Simsbury Farms municipal golf course.",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    liveMusic: "Occasional outdoor terrace acoustic sets during summer.",
    isNew: true,
    link: "https://patch.com/connecticut/simsbury/simsbury-opens-new-restaurant-its-municipal-golf-course"
  },
  {
    name: "Chipotle Mexican Grill",
    type: "restaurant",
    address: "1263 Hopmeadow St",
    description: "Fast-casual Mexican chain offering burritos, bowls, and a dedicated Chipotlane pickup window.",
    hours: "Mon-Sun: 10:45 AM - 10:00 PM",
    liveMusic: "None",
    isNew: true,
    link: "https://patch.com/connecticut/simsbury/major-mexican-food-chain-opens-new-shop-simsbury"
  },
  {
    name: "Kane's Market",
    type: "restaurant",
    address: "830 Hopmeadow St",
    description: "Old-fashioned butcher shop, gourmet deli counter, ready-to-heat prepared meals, and local groceries.",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM, Sun: 8:00 AM - 4:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://kanesmarket.com/"
  },
  {
    name: "Fitzgerald's Foods Deli & Bakery",
    type: "restaurant",
    address: "710 Hopmeadow St",
    description: "Independent local supermarket featuring a full deli, hot soup bar, gourmet sandwiches, and fresh bakery.",
    hours: "Mon-Sat: 7:00 AM - 8:00 PM, Sun: 7:00 AM - 7:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://fitzgeraldsfoods.com/"
  },
  {
    name: "Tulmeadow Farm Store & Ice Cream",
    type: "restaurant",
    address: "255 Farms Village Rd",
    description: "Historic farm operating a farm stand and popular ice cream shop with over 50 gourmet ice cream flavors.",
    hours: "Daily (Spring-Fall): 11:00 AM - 9:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.tulmeadowfarmstore.com/"
  },
  {
    name: "Brookside Bagels",
    type: "restaurant",
    address: "563 Hopmeadow St",
    description: "Local bagel shop serving fresh hand-rolled bagels, homemade cream cheeses, coffee, and breakfast sandwiches.",
    hours: "Mon-Sun: 6:00 AM - 2:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.brooksidebagels.com/"
  },
  {
    name: "Farley's Pub",
    type: "restaurant",
    address: "1616 Hopmeadow St",
    description: "Friendly neighborhood tavern with draft beers, pool tables, pub food, and sports games.",
    hours: "Mon-Sun: 12:00 PM - 1:00 AM",
    liveMusic: "Occasional weekend DJs or live music.",
    isNew: false,
    link: "http://www.farleyspubct.com/"
  },
  {
    name: "Iron Horse Sports Pub",
    type: "restaurant",
    address: "21 Iron Horse Blvd",
    description: "Casual sports pub located near downtown bike trails serving wings, burgers, and draft beer.",
    hours: "Mon-Sun: 11:30 AM - 11:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://ironhorsesportspub.com/"
  },
  {
    name: "Marco's Italian Restaurant",
    type: "restaurant",
    address: "32 Main St, Tariffville",
    description: "Authentic Italian restaurant featuring over 20 from-scratch pasta dishes and seafood specialties.",
    hours: "Tue-Sun: 4:30 PM - 9:00 PM, Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.simsburyhub.com/"
  },
  {
    name: "Lisa's Crown & Hammer Restaurant",
    type: "restaurant",
    address: "3 Main St, Tariffville",
    description: "Charming pub and dining room set in an 1800s depot building serving upscale tavern comfort food.",
    hours: "Wed-Sun: 4:00 PM - 9:00 PM, Mon-Tue: Closed",
    liveMusic: "Acoustic sets on select Thursday & Saturday nights.",
    isNew: false,
    link: "https://www.crownandhammer.com/"
  },
  {
    name: "Lucky Gut Collective",
    type: "restaurant",
    address: "10 Wilcox St",
    description: "Local wellness hub, fermented food market, kombucha bar, and health-focused community space.",
    hours: "Tue-Sat: 9:00 AM - 4:00 PM, Sun-Mon: Closed",
    liveMusic: "None",
    isNew: true,
    link: "https://www.theluckygut.com/"
  },

  // ==========================================
  // --- SHOPS, BOUTIQUES & RETAIL ---
  // ==========================================
  {
    name: "Sycamore Vintage Home Goods",
    type: "store",
    address: "2 Railroad St",
    description: "Curated vintage shop featuring mid-century modern furniture, art, lamps, glassware, and home decor.",
    hours: "Thu-Sat: 11:00 AM - 5:00 PM, Sun: 12:00 PM - 4:00 PM, Mon-Wed: Closed",
    liveMusic: "None",
    isNew: true,
    link: "https://patch.com/connecticut/simsbury/my-grandma-had-new-simsbury-store-specializes-all-things-vintage"
  },
  {
    name: "Head-Over-Heels Boutique",
    type: "store",
    address: "124 Hopmeadow St (Riverdale Farms)",
    description: "Boutique carrying designer women's shoes, contemporary clothing, jewelry, and fashion accessories.",
    hours: "Tue-Sat: 10:00 AM - 5:00 PM, Sun-Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.headoverheelsct.com/"
  },
  {
    name: "Necker's Toyland",
    type: "store",
    address: "1591 Hopmeadow St",
    description: "Classic independent toy store filled with board games, craft sets, outdoor toys, and stuffed animals.",
    hours: "Mon-Sat: 9:30 AM - 5:30 PM, Sun: 11:00 AM - 4:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://neckerstoyland.com/"
  },
  {
    name: "Horan's Flowers & Gifts",
    type: "store",
    address: "920 Hopmeadow St",
    description: "Full-service floral studio offering fresh custom floral arrangements, seasonal home decor, and gifts.",
    hours: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 9:00 AM - 2:00 PM, Sun: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.horansflowers.com/"
  },
  {
    name: "Bill Selig Jewelers",
    type: "store",
    address: "712 Hopmeadow St",
    description: "Fine jeweler offering custom engagement rings, designer jewelry, watch repairs, and appraisals.",
    hours: "Tue-Fri: 10:00 AM - 5:30 PM, Sat: 10:00 AM - 4:00 PM, Sun-Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.billseligjewelers.com/"
  },
  {
    name: "Welden Hardware",
    type: "store",
    address: "10 Station St",
    description: "Historic family-owned hardware store serving Simsbury since 1889 with home repair and garden goods.",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 5:00 PM, Sun: 9:00 AM - 3:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.weldenhardware.com/"
  },
  {
    name: "Vincent Sports Shop",
    type: "store",
    address: "783 Hopmeadow St",
    description: "Local athletic outfitter carrying sports gear, athletic footwear, team uniforms, and outdoor gear.",
    hours: "Mon-Fri: 9:30 AM - 6:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://vincentsportsshop.com/"
  },
  {
    name: "The Wine House",
    type: "store",
    address: "1356 Hopmeadow St",
    description: "Specialty liquor store featuring curated boutique wines, artisanal spirits, and local craft brews.",
    hours: "Mon-Sat: 10:00 AM - 8:00 PM, Sun: 10:00 AM - 5:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.facebook.com/TheWineHouseCT"
  },
  {
    name: "West Street Wines & Spirits",
    type: "store",
    address: "131 West St",
    description: "Neighborhood wine and spirits shop offering craft beers, wines, and everyday liquor items.",
    hours: "Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 5:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://weststreetwine.com/"
  },
  {
    name: "Milk & Honey CT",
    type: "store",
    address: "1618 Hopmeadow St",
    description: "Stylish boutique featuring modern women's clothing, loungewear, candles, and unique lifestyle gifts.",
    hours: "Tue-Sat: 10:00 AM - 5:00 PM, Sun-Mon: Closed",
    liveMusic: "None",
    isNew: false,
    link: "https://www.simsburyhub.com/"
  },
  {
    name: "Rosedale Farms & Vineyards",
    type: "store",
    address: "257 E Weatogue St",
    description: "5th-generation family farm stand selling fresh farm produce, sweet corn, estate wines, and baked treats.",
    hours: "Seasonal (June-Oct): Daily 9:00 AM - 6:00 PM",
    liveMusic: "Rosedale Music Series on summer & fall weekend afternoons.",
    isNew: false,
    link: "https://www.rosedale-farms.com/"
  },
  {
    name: "Riverdale Farms Shopping Plaza",
    type: "store",
    address: "124 Hopmeadow St",
    description: "Picturesque shopping village housed in historic dairy barns featuring local art galleries, shops, and services.",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM (varies by shop)",
    liveMusic: "None",
    isNew: false,
    link: "https://www.riverdalefarms.com/"
  },
  {
    name: "Simsmore Square",
    type: "store",
    address: "540 Hopmeadow St",
    description: "Downtown outdoor shopping complex featuring home decor boutiques, health studios, cafes, and markets.",
    hours: "Mon-Sun: 9:00 AM - 6:00 PM (varies by shop)",
    liveMusic: "Hosts seasonal Farmers Markets on Thursdays.",
    isNew: false,
    link: "https://www.simsburyhub.com/"
  },

  // ==========================================
  // --- PARKS, HISTORIC SITES & RECREATION ---
  // ==========================================
  {
    name: "Heublein Tower & Talcott Mountain State Park",
    type: "attraction",
    address: "Summit Ridge Dr (off Route 185)",
    description: "165-foot historic tower on a mountain ridge offering 360-degree views across four states.",
    hours: "Park: Sunrise to Sunset. Tower: May-Oct Thu-Sun 10:00 AM - 5:00 PM.",
    liveMusic: "Annual Hike to the Mic fall music festival.",
    isNew: false,
    link: "https://www.heubleintower.org/"
  },
  {
    name: "Simsbury Meadows Performing Arts Center",
    type: "attraction",
    address: "22 Iron Horse Blvd",
    description: "Outdoor performing arts amphitheater hosting the Hartford Symphony Orchestra, concerts, and festivals.",
    hours: "Event dependent (see event schedule)",
    liveMusic: "Summer Talcott Mountain Music Festival and live outdoor concerts.",
    isNew: false,
    link: "https://www.simsburymeadows.org/"
  },
  {
    name: "Old Drake Hill Flower Bridge",
    type: "attraction",
    address: "1 Drake Hill Rd",
    description: "Historic 1892 iron bridge adorned with hanging flower boxes crossing the Farmington River; ideal for walking.",
    hours: "Open 24/7 to pedestrian traffic",
    liveMusic: "None",
    isNew: false,
    link: "https://www.flowerbridge.org/"
  },
  {
    name: "Simsbury Historical Society & Phelps Tavern",
    type: "attraction",
    address: "800 Hopmeadow St",
    description: "Two-acre historic campus with 16 preserved historic buildings including the 1720 Phelps Tavern Museum.",
    hours: "Wed-Sat: 12:00 PM - 4:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://simsburyhistory.org/"
  },
  {
    name: "Stratton Brook State Park",
    type: "attraction",
    address: "149 Farms Village Rd",
    description: "148-acre park with swimming pond, wheelchair-accessible trail, fishing, and covered wooden bridge.",
    hours: "Daily: 8:00 AM - Sunset",
    liveMusic: "None",
    isNew: false,
    link: "https://www.ct.gov/deep/"
  },
  {
    name: "Flamig Farm",
    type: "attraction",
    address: "7 Shingle Mill Rd",
    description: "Family petting farm operating since 1907 with farm animals, pony rides, hayrides, and fresh eggs.",
    hours: "Daily (Apr-Nov): 9:00 AM - 5:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.flamigfarm.com/"
  },
  {
    name: "Pinchot Sycamore Park",
    type: "attraction",
    address: "Hartford Rd (Route 185 at Farmington River)",
    description: "Park featuring the largest tree in Connecticut—a massive American Sycamore over 28 feet in circumference.",
    hours: "Daily: Sunrise to Sunset",
    liveMusic: "None",
    isNew: false,
    link: "https://www.simsbury-ct.gov/"
  },
  {
    name: "International Skating Center of Connecticut (ISCC)",
    type: "attraction",
    address: "1375 Hopmeadow St",
    description: "World-class twin-rink skating facility offering public ice skating, figure skating, and hockey leagues.",
    hours: "Daily: 6:00 AM - 10:00 PM (check public skate schedule)",
    liveMusic: "None",
    isNew: false,
    link: "https://www.isccskate.com/"
  },
  {
    name: "Simsbury Farms Recreation Complex",
    type: "attraction",
    address: "100 Old Farms Rd",
    description: "Town recreational facility featuring an 18-hole golf course, outdoor swimming pools, tennis courts, and ice rink.",
    hours: "Daily: 7:00 AM - 8:00 PM",
    liveMusic: "None",
    isNew: false,
    link: "https://www.simsburyrec.com/"
  },
  {
    name: "Farmington Canal Heritage Trail (Simsbury Section)",
    type: "attraction",
    address: "Paved trail running north-south parallel to Hopmeadow St",
    description: "Multi-use paved rail trail popular for walking, running, biking, and rollerblading through town.",
    hours: "Daily: Sunrise to Sunset",
    liveMusic: "None",
    isNew: false,
    link: "https://fcht.org/"
  }
];

const TOWN = [
  { name: "Town of Simsbury website", description: "Official town news, calendar, and municipal departments.", link: "https://www.simsbury-ct.gov/" },
  { name: "Town calendar", description: "Official schedule for board meetings and public hearings.", link: "https://www.simsbury-ct.gov/calendar.aspx?CID=14" },
  { name: "Parks and Recreation", description: "Park facilities, pool schedules, trails, and seasonal programs.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Bulky waste, recycling, and landfill", description: "Transfer station guidelines, recycling info, and hazardous waste dates.", link: "https://www.simsbury-ct.gov/700/Bulky-Waste-Recycling-Landfill-Household" },
  { name: "Assessor's Office", description: "Property assessment records and motor vehicle tax lists.", link: "https://www.simsbury-ct.gov/392/Assessors-Office" },
  { name: "Tax Collector", description: "Pay online or look up current mill rate and real estate taxes.", link: "https://www.simsbury-ct.gov/372/Tax-Collector" },
  { name: "Official tax calculator", description: "The town's tax estimator. Compare it with the estimator on this site.", link: "https://www.simsbury-ct.gov/tax-office/pages/tax-calculator" },
  { name: "Tourism & Visitors", description: "Guides for visiting Simsbury landmarks, restaurants, and trails.", link: "https://www.simsbury-ct.gov/371/Tourism" },
  { name: "Simsbury Public Library", description: "Borrowing, digital databases, meeting rooms, and public programs.", link: "https://www.simsburylibrary.info/" },
  { name: "Library events calendar", description: "Full schedule of adult, teen, and children's library programs.", link: "https://simsbury.librarycalendar.com/events/month" },
  { name: "Simsbury Public Schools", description: "School district news, administration contacts, and school boards.", link: "https://www.simsbury.k12.ct.us/" },
  { name: "School district calendar", description: "Official school year calendar, holidays, and half days.", link: "https://www.simsbury.k12.ct.us/district/district-calendar" },
  { name: "Granby-Simsbury Chamber of Commerce", description: "Local business directory, ribbon cuttings, and commercial events.", link: "https://www.simsburycoc.com/events" },
  { name: "Simsbury Meadows Performing Arts Center", description: "Outdoor concert schedules, ticket purchases, and venue info.", link: "https://www.simsburymeadows.org/" },
  { name: "Simsbury Historical Society", description: "Preserving local history with exhibits, tours, and tavern events.", link: "https://simsburyhistory.org/events-programs/" }
];