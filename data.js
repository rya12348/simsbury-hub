// ALL SITE CONTENT LIVES IN THIS FILE.
// Event dates are fixed (YYYY-MM-DD). Past events hide themselves automatically.
// Fields on PLACES entries are optional: hours, liveMusic, phone, details, link, isNew.

const LAST_UPDATED = "2026-10-05";

// Hand-written events.
const MANUAL_EVENTS = [
  { title: "Second Friday Networking and Ribbon Cutting (Lucky Gut + Farmington Valley Lifestyle Magazine)", date: "2026-10-09", time: "7:30 AM", place: "The Lucky Gut Collective, 10 Wilcox St", category: "community", link: "https://www.simsburycoc.com/events/details/second-friday-morning-networking-event-ribbon-cutting-the-lucky-gut-farmington-valley-lifestyle-magazine-4078" },
  { title: "Walk & Talk for Hope: Community Festival for Mental Health", date: "2026-10-10", time: "10:00 AM", place: "Simsbury Meadows Performing Arts Center", category: "family", link: "https://www.simsburycoc.com/events/details/walk-talk-for-hope-a-community-festival-for-mental-health-4080" },
  { title: "Revolutionary Taverns 1760-1775 (Historical Society talk)", date: "2026-10-16", time: "6:30 PM", place: "Simsbury Public Library (registration required)", category: "community", link: "https://simsbury.librarycalendar.com/event/tavern-talk-shs-90735" },
  { title: "Blacksmithing Class (Historical Society, $95)", date: "2026-10-17", time: "9:00 AM", place: "Griswold-Ensign Blacksmith Shop", category: "community", link: "https://simsburyhistory.org/events-programs/" },
  { title: "Murder at 3 Corner Pond: A Colonial Tale (runs Oct 22-25)", date: "2026-10-22", time: "6:30 PM", place: "Meeting House", category: "family", link: "https://simsburyhistory.org/events-programs/" },
  { title: "Spooktacular 2026", date: "2026-10-24", time: "1:00 PM", place: "Simsbury Meadows Performing Arts Center", category: "family", link: "https://www.simsburycoc.com/events/details/spooktacular-2026-3776" },
  { title: "Food For Thought: The Thanksgiving Story (Historical Society)", date: "2026-11-05", time: "7:00 PM", place: "Simsbury Public Library (registration required)", category: "community", link: "https://simsbury.librarycalendar.com/event/simsbury-historical-society-presents-food-thought-thanksgiving-story-79666" },
  { title: "5th Annual Nutmeg Ukulele Festival", date: "2026-11-07", time: "8:00 AM", place: "Eno Memorial Hall", category: "music", link: "https://www.simsburymeadows.org/" },
  { title: "Slate and Sled Painting (Historical Society)", date: "2026-11-21", time: "10:00 AM", place: "Ellsworth Visitor Center", category: "community", link: "https://simsburyhistory.org/events-programs/" },
  { title: "Holiday Sip & Shop (Historical Society)", date: "2026-12-02", time: "6:00 PM", place: "Ellsworth Visitor Center", category: "community", link: "https://simsburyhistory.org/events-programs/" },
  { title: "Children's Holiday Tea Party (Historical Society)", date: "2026-12-05", time: "2:00 PM", place: "Phelps Tavern", category: "family", link: "https://simsburyhistory.org/events-programs/" }
];

// AUTO-EVENTS-START
const AUTO_EVENTS = [];
// AUTO-EVENTS-END

const EVENTS = [...MANUAL_EVENTS, ...AUTO_EVENTS];

const PLACES = [
  // ===== RESTAURANTS, CAFES, PUBS & SWEETS =====
  // Names, addresses, phones and sites from the Granby-Simsbury Chamber restaurant guide.
  { name: "Abigail's Grille & Wine Bar", type: "restaurant", address: "4 Hartford Rd", phone: "860-264-1580", description: "Grille and wine bar. The Chamber lists a Tuesday night discount.", link: "https://www.abigailsgrill.com/" },
  { name: "Ana's Kitchen", type: "cafe and bakery", address: "712 Hopmeadow St", phone: "860-658-2930", description: "Neighborhood kitchen and cafe.", details: "Delivery, takeout, curbside pickup.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Andy's Italian Kitchen", type: "restaurant", address: "926 Hopmeadow St", phone: "860-676-0800", description: "Italian kitchen in the center of town.", details: "Delivery, takeout, pickup.", link: "https://www.andysitaliankitchen.com/" },
  { name: "Antonio's Restaurant", type: "restaurant", address: "1185 Hopmeadow St", phone: "860-651-3333", description: "Neighborhood Italian restaurant.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Benny's of Simsbury", type: "restaurant", address: "562 Hopmeadow St", phone: "860-651-3700", description: "Local eatery. See the website for the menu.", details: "Delivery and curbside pickup.", link: "https://www.bennysofsimsbury.com/" },
  { name: "Brookside Bagels", type: "cafe and bakery", address: "563 Hopmeadow St", phone: "860-651-1492", description: "Bagels, cream cheese, and breakfast sandwiches.", link: "https://brooksidebagelsct.com/" },
  { name: "Cracker Barrel Pub", type: "pub", address: "30 Main St, Tariffville", phone: "860-651-0598", description: "Neighborhood pub in Tariffville.", link: "https://crackerbarrelpub.com/" },
  { name: "Evergreens Restaurant (Simsbury Inn)", type: "restaurant", address: "397 Hopmeadow St", phone: "860-651-5700", description: "The dining room at the Simsbury Inn.", link: "https://www.simsburyinn.com/dining-en.html" },
  { name: "Farley Mac's", type: "pub", address: "1616 Hopmeadow St", phone: "860-325-5162", description: "Pub with takeout.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Fitzgerald's Foods", type: "market and deli", address: "710 Hopmeadow St", phone: "860-658-2271", description: "Independent grocery with a hot bar.", link: "http://www.fitzgeraldsfoods.com/" },
  { name: "The Coffee Spot", type: "cafe and bakery", address: "750 Hopmeadow St", description: "Coffee, tea, and donuts in a Victorian house on Hopmeadow Street." },
  { name: "Harvest Cafe & Bakery", type: "cafe and bakery", address: "1390 Hopmeadow St", phone: "860-658-5000", hours: "Mon-Sat 6:30 AM-2:30 PM; Sun 7:00 AM-2:00 PM", description: "Cafe and bakery.", link: "https://www.harvestcafebakery.com/" },
  { name: "Jason's House", type: "restaurant", address: "1396 Hopmeadow St", phone: "860-651-7936", description: "Chinese restaurant.", link: "https://www.jasonshouseonline.com/" },
  { name: "Joe Pizza", type: "pizza", address: "2 Wilcox St", phone: "860-217-0312", description: "Pizza shop.", link: "http://www.joe-pizza.com/" },
  { name: "Lisa's Luna Pizza", type: "pizza", address: "530 Bushy Hill Rd", phone: "860-651-1820 (takeout), 860-651-6591 (delivery)", description: "Pizza with takeout and delivery.", link: "https://lunapizzasimsbury.com/" },
  { name: "Little India", type: "restaurant", address: "1416 Hopmeadow St", phone: "860-392-8134", description: "Indian restaurant.", link: "https://www.littleindiact.com/" },
  { name: "Little Mazen Pizza", type: "pizza", address: "1362 Hopmeadow St", phone: "860-658-1111", description: "Pizza shop.", link: "https://www.littlemazenpizza.com/" },
  { name: "Main Moon Chinese Restaurant", type: "restaurant", address: "773 Hopmeadow St", phone: "860-651-4937", description: "Chinese restaurant.", link: "https://www.mainmoonchinese.com/" },
  { name: "Manny's of Simsbury Pizza", type: "pizza", address: "244 Farms Village Rd", phone: "860-658-0002", description: "Pizza shop.", details: "Takeout and curbside pickup.", link: "http://mannysimsburypizza.com/" },
  { name: "Maple Tree Cafe", type: "pub", address: "781 Hopmeadow St", phone: "860-651-1297", description: "Neighborhood pub and restaurant.", liveMusic: "Live bands on Friday and Saturday nights.", link: "https://www.mapletreecafe.com/" },
  { name: "Marco's Family Restorante", type: "restaurant", address: "32 Main St, Tariffville", phone: "860-651-4214", description: "Italian family restaurant in Tariffville.", link: "http://www.ristorantemarcos.com/" },
  { name: "Meadow Asian Cuisine", type: "restaurant", address: "532 Hopmeadow St", phone: "860-408-9800", description: "Asian restaurant.", link: "http://www.meadowrestaurant.com/" },
  { name: "Metro Bis", type: "restaurant", address: "690 Hopmeadow St", phone: "860-651-1908", hours: "Tue-Sat 12:00 PM-3:00 PM, 5:30 PM-10:00 PM", description: "American bistro in the historic Ensign House.", details: "Takeout and curbside pickup. Kitchen closes 2:30 PM at lunch and 8:30 PM at dinner.", link: "https://metrobis.com/" },
  { name: "Millwright's", type: "restaurant", address: "77 West St", phone: "860-651-5500", hours: "Tue-Sat 5:00 PM-10:00 PM; Sun 11:00 AM-2:00 PM, 5:00 PM-10:00 PM", description: "Fine dining in a historic mill, with menus built on New England ingredients.", details: "Heated outdoor seating on the bridge and heated individual greenhouses in back.", link: "https://www.millwrightsrestaurant.com/" },
  { name: "Oishi Japanese Cuisine", type: "restaurant", address: "244 Farms Village Rd", phone: "860-658-8680", description: "Japanese restaurant in West Simsbury.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Old Well Tavern", type: "pub", address: "20 Tariffville Rd", phone: "860-651-0050", description: "Tavern on Tariffville Road.", link: "https://theoldwelltavernsimsburyct.com/" },
  { name: "Peachwave", type: "sweets", address: "710 Hopmeadow St", phone: "860-217-1913", description: "Frozen yogurt.", details: "Delivery through Grubhub.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Pepperoni's Pizza", type: "pizza", address: "1400 Hopmeadow St", phone: "860-658-5669", description: "Pizza shop.", link: "http://www.pepperonispizzaco.com" },
  { name: "People's Choice Pizza & Iron Horse Sports Pub", type: "pub", address: "836 Hopmeadow St", phone: "860-651-0090", description: "Pizza and a sports pub under one roof.", link: "http://www.ironhorsesportspub.com/" },
  { name: "Plan B Burger Bar", type: "pub", address: "4 Railroad St", phone: "860-658-4477", description: "Burgers ground in house, 14 rotating draft lines, and close to 100 bottles.", details: "Takeout, curbside pickup, delivery. Ask about School Night Suppers family meals.", link: "https://burgersbeerbourbon.com/simsbury/" },
  { name: "Popover Bistro & Bakery", type: "cafe and bakery", address: "928 Hopmeadow St", phone: "860-413-2392", description: "Bistro and bakery known for popovers.", details: "Takeout window, online ordering, grab-and-go soups and pot pies.", link: "https://www.popoversimsbury.com/" },
  { name: "Present Company", type: "restaurant", address: "2 Tunxis St, Tariffville", phone: "860-658-7890", description: "Restaurant in Tariffville.", link: "https://www.presentcompanyct.com/" },
  { name: "Red Stone Pub", type: "pub", address: "10 Jim Gallagher Way", phone: "860-217-1744", description: "Pub with daily food and drink specials.", liveMusic: "Per an older Chamber guide, confirm by phone: trivia Tuesday 7 PM, acoustic with John Mayock Wednesday 7 PM.", link: "http://www.redstonepubs.com/" },
  { name: "Soma Grille", type: "restaurant", address: "731 Hopmeadow St", phone: "860-217-0937", description: "Grille on Hopmeadow Street.", link: "https://www.somagrille.com/" },
  { name: "Table 570 Asian Fusion", type: "restaurant", address: "570 Hopmeadow St", phone: "860-651-4888", description: "Asian fusion restaurant.", link: "https://www.table570.com/" },
  { name: "Tan Wong Restaurant", type: "restaurant", address: "135 West St", phone: "860-651-4838", description: "Chinese restaurant." },
  { name: "The Winged Bear", type: "restaurant", address: "775 Hopmeadow St", phone: "860-658-2295", description: "Restaurant on Hopmeadow Street.", link: "http://www.thewingedbear.com/" },
  // Not on the Chamber guide. Carried over from the old list, not yet confirmed.
  { name: "Birdie & The Barrel", type: "restaurant", address: "100 Old Farms Rd (Simsbury Farms)", description: "Casual food and drink at the municipal golf course.", isNew: true, link: "https://patch.com/connecticut/simsbury/simsbury-opens-new-restaurant-its-municipal-golf-course" },
  { name: "Dom's Coffee", type: "cafe and bakery", address: "20 Tower Ave", description: "Espresso bar and bakery.", link: "https://domscoffee.com/" },
  { name: "Dom's Creamery", type: "sweets", address: "20 Tower Ave", description: "Gelato, ice cream, and crepes.", link: "https://domscreamery.com/" },
  { name: "Blossom Cafe", type: "cafe and bakery", address: "6 Wilcox St", description: "Brunch cafe with boba tea.", link: "https://www.simsburycoc.com/restaurant-guide" },
  { name: "Lisa's Crown & Hammer", type: "pub", address: "3 Main St, Tariffville", description: "Pub and dining room in Tariffville.", link: "https://www.crownandhammer.com/" },
  { name: "Tulmeadow Farm Store & Ice Cream", type: "sweets", address: "255 Farms Village Rd", description: "Farm stand and ice cream shop.", link: "https://www.tulmeadowfarmstore.com/" },
  { name: "Chipotle Mexican Grill", type: "restaurant", address: "1263 Hopmeadow St", description: "Fast-casual burritos and bowls.", isNew: true, link: "https://patch.com/connecticut/simsbury/major-mexican-food-chain-opens-new-shop-simsbury" },
  { name: "Lucky Gut Collective", type: "cafe and bakery", address: "10 Wilcox St", description: "Fermented food market and kombucha bar.", isNew: true, link: "https://www.theluckygut.com/" },
  { name: "Metro Prime Meats & Gourmet Foods", type: "market and deli", address: "140 Albany Tpke", description: "Meat market, seafood counter, and prepared foods." },
  { name: "La Joya Mexican Kitchen", type: "restaurant", address: "834 Hopmeadow St", description: "Mexican restaurant.", link: "https://www.lajoyamexican.com/" },

  // ===== SHOPS, BOUTIQUES & RETAIL =====
  // Hours come from public listings and have not all been confirmed with the businesses.
  {"name": "Big Y World Class Market", "type": "grocery", "address": "1313 Hopmeadow St", "description": "Full-service supermarket with produce, meats, deli, and prepared foods.", "hours": "Mon-Sun 7:00 AM-9:00 PM"},
  {"name": "Stop & Shop", "type": "grocery", "address": "498 Bushy Hill Rd", "description": "Grocery chain with a pharmacy.", "hours": "Mon-Sat 7:00 AM-10:00 PM; Sun 7:00 AM-9:00 PM", "details": "Pharmacy: Mon-Fri 9 AM-7 PM, Sat-Sun 9 AM-5 PM."},
  {"name": "A Spoonful of Britain", "type": "grocery", "address": "124 Hopmeadow St (Riverdale Farms)", "description": "British teas, sweets, scones, pottery, and pantry imports."},
  {"name": "Cumberland Farms", "type": "grocery", "description": "Convenience store and gas station chain."},
  {"name": "Pride", "type": "grocery", "address": "1340 Hopmeadow St", "description": "Local convenience store and gas station with fresh baked goods.", "hours": "Mon-Sun 5:30 AM-10:00 PM"},
  {"name": "Sunrise Convenience Store", "type": "grocery", "address": "1225 Hopmeadow St", "description": "Family-owned convenience store known for its deli and Boar's Head sandwiches."},
  {"name": "Simsbury Quick Mart", "type": "grocery", "address": "12 Albany Tpke, West Simsbury", "description": "Local convenience store."},
  {"name": "CVS Pharmacy", "type": "pharmacy", "address": "714 Hopmeadow St", "description": "Pharmacy and convenience store.", "hours": "Mon-Sun 8:00 AM-10:00 PM", "details": "Pharmacy: Mon-Fri 8 AM-8 PM, Sat 9 AM-6 PM, Sun 10 AM-5 PM."},
  {"name": "Walgreens", "type": "pharmacy", "address": "540 Bushy Hill Rd", "description": "Pharmacy and convenience store.", "details": "Pharmacy: Mon-Fri 9 AM-9 PM, Sat 9 AM-6 PM, Sun 10 AM-6 PM."},
  {"name": "Simsbury Pharmacy Inc", "type": "pharmacy", "address": "1418 Hopmeadow St", "description": "Independent pharmacy with prescriptions and personal care items.", "hours": "Mon-Fri 9:00 AM-7:00 PM; Sat 9:00 AM-3:00 PM"},
  {"name": "Hopmeadow Apothecary & Medical", "type": "pharmacy", "address": "1300 Hopmeadow St", "description": "Pharmacy with medical equipment and compounding."},
  {"name": "Head-Over-Heels Boutique", "type": "clothing and boutiques", "address": "124 Hopmeadow St (Riverdale Farms)", "description": "Designer women's shoes, clothing, jewelry, and accessories."},
  {"name": "Milk & Honey CT", "type": "clothing and boutiques", "address": "1618 Hopmeadow St", "description": "Mother and daughter owned shop with sustainable women's clothing, home goods, art, and gifts.", "hours": "Tue-Sat 11:00 AM-7:00 PM; Sun 12:00 PM-4:00 PM"},
  {"name": "Kindred & Crew", "type": "clothing and boutiques", "address": "926 Hopmeadow St", "description": "Locally owned boutique with women's clothing, jewelry, gifts, and home decor.", "hours": "Sun 11:00 AM-3:00 PM; Mon 11:00 AM-5:00 PM; Wed-Fri 11:00 AM-5:00 PM; Sat 10:30 AM-4:00 PM"},
  {"name": "AvaGrace Gift & Greeting Card", "type": "clothing and boutiques", "address": "926 Hopmeadow St", "description": "Apparel, accessories, jewelry, and gifts for home and baby.", "hours": "Mon-Fri 10:00 AM-5:00 PM; Sat 10:00 AM-4:00 PM"},
  {"name": "My Lily of the Valley", "type": "clothing and boutiques", "address": "542 1/2 Hopmeadow St", "description": "Children's boutique with handmade clothing, accessories, and shoes.", "details": "Open 7 days, hours vary."},
  {"name": "Caccie's Bridal Closet", "type": "clothing and boutiques", "address": "1380 Hopmeadow St", "description": "Bridal gowns, bridesmaid and prom dresses, and tuxedos.", "hours": "Mon-Wed 3:00 PM-7:00 PM; Fri 3:00 PM-7:00 PM; Sat 11:00 AM-6:00 PM"},
  {"name": "Men's Wearhouse", "type": "clothing and boutiques", "address": "6 Albany Tpke, West Simsbury", "description": "Suits, dress shoes, and tuxedo rentals."},
  {"name": "Bob's Stores", "type": "clothing and boutiques", "address": "504 Bushy Hill Rd", "description": "Casualwear, activewear, and footwear for the family."},
  {"name": "Journeys", "type": "clothing and boutiques", "address": "730 Hopmeadow St", "description": "Footwear and apparel for teens and young adults."},
  {"name": "The Bleu Willow", "type": "clothing and boutiques", "description": "Local boutique named among the area's best by Patch."},
  {"name": "Vincent Sports Shop", "type": "clothing and boutiques", "address": "783 Hopmeadow St", "description": "Athletic gear, footwear, and team uniforms."},
  {"name": "Welden Hardware / Valley Home Hardware & Garden Centre", "type": "home and garden", "address": "10 Station St", "description": "Family-owned hardware store since 1889 and garden center.", "details": "Sources disagree on hours (about 8 AM-5:30 PM weekdays, Saturday to 5 PM). Call to confirm."},
  {"name": "Tractor Supply Co.", "type": "home and garden", "address": "1603 Hopmeadow St", "description": "Farm and ranch supplies, pet food, lawn and garden, and hardware.", "hours": "Mon-Sat 8:00 AM-9:00 PM; Sun 9:00 AM-7:00 PM"},
  {"name": "Bosco's Garden Center", "type": "home and garden", "address": "1376 Hopmeadow St", "description": "Family-owned nursery, garden center, and seasonal gift shop."},
  {"name": "Warner Nursery & Garden Center", "type": "home and garden", "address": "76 Riverside Rd", "description": "Plants and gardening supplies for over 40 years."},
  {"name": "Bidwell's Yard, Garden & Pet", "type": "home and garden", "address": "133 Hopmeadow St", "description": "Lawn and garden supplies and pet food.", "hours": "Mon-Sat 9:00 AM-5:00 PM; Sun 10:00 AM-2:00 PM"},
  {"name": "Holloways Appliance Center", "type": "home and garden", "address": "1430 Hopmeadow St", "description": "Family-owned appliances and mattresses since 1949.", "hours": "Mon-Fri 10:00 AM-6:00 PM; Sat 10:00 AM-4:00 PM"},
  {"name": "Sycamore Vintage Home Goods", "type": "home and garden", "address": "2 Railroad St", "description": "Vintage furniture, art, lamps, glassware, and pottery.", "hours": "Mon-Tue 12:00 PM-5:00 PM; Thu-Fri 12:00 PM-5:00 PM; Sat-Sun 10:00 AM-4:00 PM", "link": "https://patch.com/connecticut/simsbury/my-grandma-had-new-simsbury-store-specializes-all-things-vintage", "isNew": true},
  {"name": "HomeGoods", "type": "home and garden", "address": "500 Bushy Hill Rd", "description": "Off-price home decor and furnishings."},
  {"name": "The Weekend Home", "type": "home and garden", "address": "Downtown Simsbury", "description": "Home decor shop open weekends only.", "hours": "Fri-Sat 10:00 AM-4:00 PM; Sun 12:00 PM-3:00 PM"},
  {"name": "Action Carpet & Floor Covering", "type": "home and garden", "address": "1394 Hopmeadow St", "description": "Family-run flooring showroom for carpet, hardwood, and vinyl.", "hours": "Mon-Fri 10:00 AM-5:30 PM; Sat 9:00 AM-3:00 PM"},
  {"name": "Mahers Paint & Wallpaper", "type": "home and garden", "address": "1231 Hopmeadow St", "description": "Benjamin Moore paint store since 1972.", "hours": "Mon-Fri 7:30 AM-5:30 PM; Sat 7:30 AM-5:00 PM"},
  {"name": "Thomas Mach Interiors", "type": "home and garden", "address": "Simsbury", "description": "Interior design showroom and retail store.", "hours": "Mon-Fri 10:00 AM-4:00 PM; Sat 10:00 AM-2:00 PM"},
  {"name": "Necker's Toyland", "type": "gifts and specialty", "address": "1591 Hopmeadow St", "description": "Family-owned toy store for over 70 years.", "hours": "Mon 9:30 AM-5:30 PM; Wed-Sat 9:30 AM-5:30 PM; Sun 10:00 AM-4:00 PM", "details": "Closed Tuesdays.", "link": "https://neckerstoyland.com/"},
  {"name": "SubherbanLivin", "type": "gifts and specialty", "address": "10 Jim Gallagher Way, Unit 20", "description": "Gifts from local entrepreneurs, with proceeds reinvested in the community.", "hours": "Wed-Sun 10:00 AM-4:00 PM"},
  {"name": "The Silver Dahlia", "type": "gifts and specialty", "address": "926 Hopmeadow St, Ste 7", "description": "Gift shop.", "hours": "Wed 10:00 AM-6:00 PM; Sat 10:00 AM-5:00 PM; Sun 11:00 AM-5:00 PM"},
  {"name": "Wisdom of the Ages", "type": "gifts and specialty", "address": "1618 Hopmeadow St", "description": "Gift shop.", "hours": "Tue 12:00 PM-6:00 PM; Thu 12:00 PM-7:00 PM; Fri 12:00 PM-6:00 PM; Sat 11:00 AM-5:00 PM"},
  {"name": "Bill Selig Jewelers", "type": "gifts and specialty", "address": "712 Hopmeadow St", "description": "Custom engagement rings, designer jewelry, and watch repair.", "hours": "Tue-Wed 10:00 AM-5:30 PM; Thu 10:00 AM-6:30 PM; Sat 10:00 AM-4:00 PM", "details": "Friday hours vary.", "link": "https://www.billseligjewelers.com/"},
  {"name": "Sarah Byrnes Jeweler", "type": "gifts and specialty", "address": "924 Hopmeadow St, Ste 1", "description": "Jewelry store.", "hours": "Tue-Fri 10:00 AM-5:00 PM; Sat 10:00 AM-4:00 PM"},
  {"name": "Riches Jewelers", "type": "gifts and specialty", "address": "Simsbury", "description": "Jewelry store.", "hours": "Tue-Fri 10:00 AM-5:00 PM; Sat 10:00 AM-3:00 PM"},
  {"name": "Horan's Flowers & Gifts", "type": "gifts and specialty", "address": "920 Hopmeadow St", "description": "Florist with custom arrangements and gifts.", "hours": "Mon-Fri 8:30 AM-5:30 PM; Sat 8:30 AM-2:00 PM"},
  {"name": "A Girl at Heart", "type": "gifts and specialty", "address": "926 Hopmeadow St", "description": "Consignment shop for American Girl dolls, furniture, and accessories.", "hours": "Thu-Sat 10:00 AM-5:00 PM"},
  {"name": "Party City", "type": "gifts and specialty", "address": "530 Bushy Hill Rd (inside Staples)", "description": "Party supplies."},
  {"name": "Torpedoes Smoke Shop", "type": "gifts and specialty", "address": "922 Hopmeadow St", "description": "Tobacco and smoke shop since 1995."},
  {"name": "Polish Pottery Plus", "type": "gifts and specialty", "address": "Simsbury", "description": "Hand-painted Polish pottery, dinnerware, and houseware."},
  {"name": "Simsbury Cards & Comics", "type": "gifts and specialty", "address": "Simsbury", "description": "Sports card and comic shop.", "hours": "Mon-Tue 11:00 AM-4:00 PM; Wed-Fri 11:00 AM-6:00 PM; Sat 10:00 AM-4:00 PM; Sun 12:00 PM-4:00 PM"},
  {"name": "Silver Eagle Wargame Supplies", "type": "gifts and specialty", "address": "8 Neal Dr", "description": "Wargaming hobby shop.", "hours": "Tue-Thu 5:00 PM-10:00 PM; Sat-Sun 12:00 PM-10:00 PM"},
  {"name": "Imagine It Framed", "type": "gifts and specialty", "address": "544 Hopmeadow St", "description": "Custom picture framing.", "hours": "Mon-Fri 9:30 AM-5:30 PM; Sat 10:00 AM-4:00 PM"},
  {"name": "Cotton Candy Fabrics", "type": "books and hobbies", "address": "926 Hopmeadow St", "description": "Community quilt shop with designer quilting fabrics.", "hours": "Sun 10:00 AM-4:00 PM; Tue-Wed 9:00 AM-5:00 PM; Thu 9:00 AM-7:00 PM"},
  {"name": "Martocchio Music", "type": "books and hobbies", "address": "1 Massaco St", "description": "Family-owned instrument sales and rentals, accessories, and sheet music.", "hours": "Mon-Thu 9:00 AM-5:00 PM; Fri 9:00 AM-6:00 PM; Sat 9:00 AM-1:00 PM"},
  {"name": "Morning Star Christian Book & Music Store", "type": "books and hobbies", "address": "928 Hopmeadow St", "description": "Christian books, CDs, and DVDs."},
  {"name": "Courtney's Bookshop", "type": "books and hobbies", "address": "230 Bushy Hill Rd", "description": "New and used books for adults and children."},
  {"name": "Staples", "type": "electronics and office", "address": "15 Albany Tpke, West Simsbury", "description": "Office supplies, technology, and copy and print.", "hours": "Mon-Fri 8:00 AM-8:00 PM; Sat 9:00 AM-7:00 PM; Sun 10:00 AM-6:00 PM"},
  {"name": "Best Buy", "type": "electronics and office", "address": "44A Albany Tpke, West Simsbury", "description": "Consumer electronics and appliances, with Geek Squad."},
  {"name": "The UPS Store", "type": "electronics and office", "address": "542 Hopmeadow St", "description": "Packing, shipping, printing, and mailboxes.", "hours": "Mon-Fri 8:00 AM-6:30 PM; Sat 9:00 AM-5:00 PM"},
  {"name": "Digital Saviors", "type": "electronics and office", "address": "928 Hopmeadow St", "description": "Electronics store and computer repair."},
  {"name": "Teleprompt TV", "type": "electronics and office", "address": "27 Elaine Dr", "description": "Television and electronics repair.", "hours": "Mon-Fri 9:00 AM-6:00 PM"},
  {"name": "Second Chance Shop", "type": "consignment and thrift", "address": "12 Station St", "description": "Volunteer-run thrift boutique benefiting The Village.", "hours": "Tue-Wed 10:00 AM-2:00 PM; Fri-Sat 10:00 AM-2:00 PM"},
  {"name": "ReVive Boutique Consignment", "type": "consignment and thrift", "address": "1384 Hopmeadow St", "description": "Consignment shop.", "hours": "Tue-Thu 11:00 AM-4:00 PM; Fri 11:00 AM-2:00 PM; Sat 11:00 AM-3:00 PM"},
  {"name": "Touch Of Class Consignment", "type": "consignment and thrift", "address": "524 Hopmeadow St", "description": "Consignment and thrift shop."},
  {"name": "Teenage Wasteland Consignments", "type": "consignment and thrift", "address": "141 West St", "description": "Used clothing consignment."},
  {"name": "The Wine House", "type": "wine and spirits", "address": "1356 Hopmeadow St", "description": "Boutique wines, artisanal spirits, and local craft beer."},
  {"name": "West Street Wines & Spirits", "type": "wine and spirits", "address": "131 West St", "description": "Neighborhood wine and spirits shop with craft beer.", "hours": "Mon-Thu 9:00 AM-8:00 PM; Fri 9:00 AM-9:00 PM; Sat-Sun 12:00 PM-5:00 PM", "link": "https://weststreetwine.com/"},
  {"name": "Valley Fine Wines Super Liquors", "type": "wine and spirits", "address": "828 Hopmeadow St", "description": "Wines and craft beer.", "hours": "Mon-Sat 8:00 AM-9:00 PM; Sun 10:00 AM-6:00 PM"},
  {"name": "Signature Wine & Spirits", "type": "wine and spirits", "address": "564 Hopmeadow St", "description": "Liquor store.", "hours": "Mon-Sat 9:00 AM-9:00 PM; Sun 10:00 AM-6:00 PM"},
  {"name": "Harvest Wine & Spirits", "type": "wine and spirits", "address": "712 Hopmeadow St", "description": "Liquor store."},
  {"name": "Wine ETC Simsbury", "type": "wine and spirits", "address": "Simsbury", "description": "Liquor store.", "hours": "Mon-Thu 10:00 AM-7:00 PM; Fri 10:00 AM-8:00 PM; Sat 10:00 AM-6:00 PM"},
  {"name": "Emmons Tropical Fish & Ponds", "type": "pet", "address": "Simsbury", "description": "Tropical fish and pond supplies.", "hours": "Mon-Sat 10:00 AM-6:00 PM; Sun 10:00 AM-5:00 PM"},
  {"name": "William III Antiques", "type": "antiques", "address": "21 Wolcott Rd", "description": "Antique store.", "hours": "Thu-Fri 11:00 AM-5:00 PM; Sat 10:00 AM-3:30 PM"},
  {"name": "Farms Village Antiques", "type": "antiques", "address": "250 Farms Village Rd, West Simsbury", "description": "Antique store."},
  {"name": "Rosedale Farms & Vineyards", "type": "farm and market", "address": "25 E Weatogue St", "description": "Family farm since 1920 with produce, estate wine, and baked goods.", "liveMusic": "Music series on summer and fall weekend afternoons (call the farm to confirm)."},
  {"name": "Riverdale Farms Shopping", "type": "shopping centers", "address": "124 Hopmeadow St", "description": "Shops and services in restored 19th-century farm buildings.", "link": "https://www.riverdalefarms.com/"},
  {"name": "Simsmore Square", "type": "shopping centers", "address": "540 Hopmeadow St", "description": "Downtown shopping complex with boutiques, studios, and cafes."},

  // ===== STAYS, PARKS, HISTORIC SITES & THINGS TO DO =====
  { name: "Simsbury Inn", type: "stay", address: "397 Hopmeadow St", phone: "860-651-5700", description: "Hotel in the center of town with the Evergreens restaurant.", link: "https://www.simsburyinn.com/" },
  { name: "Simsbury 1820 House", type: "stay", address: "731 Hopmeadow St", description: "Historic inn on Hopmeadow Street." },
  { name: "Heublein Tower & Talcott Mountain State Park", type: "attraction", address: "Summit Ridge Dr (off Route 185)", description: "165-foot tower on the ridge with views across four states.", hours: "Park: 8:00 AM to sunset. Tower: seasonal hours vary, call the park office at 860-242-1158.", liveMusic: "Hike to the Mic fall music event.", link: "https://ctparks.com/parks/talcott-mountain-state-park" },
  { name: "Simsbury Meadows Performing Arts Center", type: "attraction", address: "22 Iron Horse Blvd", description: "Outdoor amphitheater with symphony, concerts, and festivals.", liveMusic: "Summer concert series and the I Love Music Festival.", link: "https://www.simsburymeadows.org/" },
  { name: "Theatre Guild of Simsbury", type: "attraction", description: "Community theater group formed in 1972.", link: "https://www.simsburymeadows.org/" },
  { name: "Old Drake Hill Flower Bridge", type: "attraction", address: "1 Drake Hill Rd", description: "1892 iron bridge with flower boxes over the Farmington River, open to walkers.", hours: "Always open to pedestrians", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Simsbury Historical Society & Phelps Tavern", type: "attraction", address: "800 Hopmeadow St", description: "Historic campus with preserved buildings and the 1720 Phelps Tavern Museum.", link: "https://simsburyhistory.org/" },
  { name: "Stratton Brook State Park", type: "attraction", address: "149 Farms Village Rd", description: "Swimming pond, fishing, accessible trail, and a covered bridge.", link: "https://www.ct.gov/deep/" },
  { name: "Flamig Farm", type: "attraction", address: "7 Shingle Mill Rd", description: "Family petting farm since 1907 with animals, pony rides, and hayrides.", link: "https://www.flamigfarm.com/" },
  { name: "Pinchot Sycamore Park", type: "attraction", address: "Hartford Rd (Route 185 at Farmington River)", description: "Home of the largest tree in Connecticut, a giant American sycamore.", hours: "Sunrise to sunset", link: "https://www.simsbury-ct.gov/" },
  { name: "International Skating Center of Connecticut", type: "attraction", address: "1375 Hopmeadow St", description: "Twin-rink skating facility with public skate, figure skating, and hockey.", link: "https://www.isccskate.com/" },
  { name: "Simsbury Farms Recreation Complex", type: "attraction", address: "100 Old Farms Rd", description: "Golf course, pools, tennis, and ice rink run by the town.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Farmington Canal Heritage Trail (Simsbury Section)", type: "attraction", address: "Paved trail parallel to Hopmeadow St", description: "Paved rail trail for walking, running, and biking. Simsbury was Connecticut's first Bicycle Friendly community.", hours: "Sunrise to sunset", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Simsbury Free Bike", type: "attraction", description: "Free summer bike sharing nonprofit based along the trail.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" }
];

const TOWN = [
  { name: "Town of Simsbury website", description: "Official town news, calendar, and municipal departments.", link: "https://www.simsbury-ct.gov/" },
  { name: "Town calendar", description: "Official schedule for board meetings and public hearings.", link: "https://www.simsbury-ct.gov/calendar.aspx?CID=14" },
  { name: "Parks and Recreation", description: "Park facilities, pool schedules, trails, and seasonal programs.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Bulky waste, recycling, and landfill", description: "Transfer station guidelines, recycling info, and hazardous waste dates.", link: "https://www.simsbury-ct.gov/700/Bulky-Waste-Recycling-Landfill-Household" },
  { name: "Assessor's Office", description: "Property assessment records and motor vehicle tax lists.", link: "https://www.simsbury-ct.gov/392/Assessors-Office" },
  { name: "Tax Collector", description: "Pay online or look up current mill rate and real estate taxes.", link: "https://www.simsbury-ct.gov/372/Tax-Collector" },
  { name: "Tourism & Visitors", description: "Guides for visiting Simsbury landmarks, restaurants, and trails.", link: "https://www.simsbury-ct.gov/371/Tourism" },
  { name: "Simsbury Public Library", description: "Borrowing, digital databases, meeting rooms, and public programs.", link: "https://www.simsburylibrary.info/" },
  { name: "Library events calendar", description: "Full schedule of adult, teen, and children's library programs.", link: "https://simsbury.librarycalendar.com/events/month" },
  { name: "Simsbury Public Schools", description: "School district news, administration contacts, and school boards.", link: "https://www.simsbury.k12.ct.us/" },
  { name: "School district calendar", description: "Official school year calendar, holidays, and half days.", link: "https://www.simsbury.k12.ct.us/district/district-calendar" },
  { name: "Granby-Simsbury Chamber of Commerce", description: "Local business directory, ribbon cuttings, and commercial events.", link: "https://www.simsburycoc.com/events" },
  { name: "Simsbury Land Trust", description: "14 trails, a free Walkbook of maps, hikes, and the 12-Hike Challenge.", link: "https://simsburylandtrust.org/slt/" },
  { name: "Simsbury Historical Society", description: "Preserving local history with exhibits, tours, and tavern events.", link: "https://simsburyhistory.org/events-programs/" }
];

// ===== TRAILS =====
// Simsbury Land Trust trails are the official list of 14. Lengths and climbs marked "see map" are not confirmed.
const COMPLETE_TRAILS = [
  // --- STATE PARKS & FORESTS ---
  { name: "Talcott Mountain State Park (Heublein Tower Trail)", length: "2.5 miles round-trip", difficulty: "Moderate - Strenuous", elevation: "450 ft gain", parking: "Route 185, Simsbury, CT", dogs: "Allowed (On leash)", highlights: "165-ft historic tower, 360-degree foliage views, rocky ridge walk.", link: "https://ctparks.com/parks/talcott-mountain-state-park" },
  { name: "Stratton Brook State Park Loop & Rail Trail", length: "1.8 miles loop", difficulty: "Easy (Wheelchair Accessible)", elevation: "50 ft gain", parking: "149 Farms Village Rd", dogs: "Allowed (On leash)", highlights: "Covered wooden bridge, fishing pond, crushed stone accessible trail.", link: "https://www.ct.gov/deep" },
  { name: "Penwood State Park (Simsbury Ridge Trails)", length: "3.5 miles main ridge path", difficulty: "Moderate", elevation: "300 ft gain", parking: "Route 185 (Penwood Main Lot)", dogs: "Allowed (On leash)", highlights: "Lake Louise overlook, paved access path, Metacomet ridge route.", link: "https://www.ct.gov/deep" },
  { name: "Great Pond State Forest", length: "1.2 miles loop", difficulty: "Easy", elevation: "Flat", parking: "Great Pond Rd gravel pull-off", dogs: "Allowed (On leash)", highlights: "CT's smallest state forest around a glacial kettle pond.", link: "https://www.ct.gov/deep" },
  { name: "Massacoe State Forest (Bushy Hill & West Mountain Sections)", length: "2.0 miles combined network", difficulty: "Moderate", elevation: "180 ft gain", parking: "Bushy Hill Rd / West Mountain Rd", dogs: "Allowed (On leash)", highlights: "Two separate forest parcels with pine plantations and wetlands.", link: "https://www.ct.gov/deep" },
  { name: "Nod Brook Management Area Trails", length: "2.5 miles network", difficulty: "Easy", elevation: "Flat", parking: "Route 10 / Tower Business Park dirt road", dogs: "Allowed (On leash / hunting dog training site)", highlights: "Open river floodplain, fields, and ponds along the Farmington River.", link: "https://www.ct.gov/deep" },

  // --- MCLEAN GAME REFUGE ---
  { name: "McLean Game Refuge (Firetown & Trout Pond Trails)", length: "20+ miles interconnected trails", difficulty: "Easy to Moderate", elevation: "100 - 400 ft gain", parking: "Firetown Rd / Barndoor Hills Rd / Canton Rd", dogs: "STRICTLY NO DOGS ALLOWED", highlights: "4,400-acre preserve with kettle ponds, trout streams, and pine groves.", link: "https://mcleangamerefuge.org/" },

  // --- SIMSBURY LAND TRUST (14 official trails) ---
  { name: "60 Westledge Road Trails (Simsbury Land Trust)", length: "Part of the West Mountain network", difficulty: "Moderate - Challenging", elevation: "See SLT map", parking: "Small lot near 60 Westledge Rd (Rte 309), West Simsbury", dogs: "Allowed (On leash)", highlights: "Connects to the West Mountain and Cathles trails. Sunrise to sunset only.", link: "https://simsburylandtrust.org/slt/60-westledge-road/" },
  { name: "West Mountain Trails (Simsbury Land Trust)", length: "5.0 miles trail network", difficulty: "Challenging", elevation: "400 ft gain", parking: "Westledge Rd (Rte 309) across from Pasture Ln", dogs: "Allowed (On leash)", highlights: "Hop Brook gorge, stone mill dam remnants, steep traprock ridge climb.", link: "https://simsburylandtrust.org/slt/west-mountain-trails/" },
  { name: "Cathles Preserve Trails (Simsbury Land Trust)", length: "2 miles of blazed trails", difficulty: "Moderate - Difficult", elevation: "Steep in places, uneven rocky footing", parking: "Cul-de-sac at the end of North Saddle Ridge Rd", dogs: "Allowed (On leash)", highlights: "47-acre preserve with a waterfall, a fault-line hidden valley, and ridge views of West Simsbury. No trail access to McLean from here.", link: "https://simsburylandtrust.org/slt/cathles/" },
  { name: "Tanager Hill Preserve (Simsbury Land Trust)", length: "1.8 miles", difficulty: "Moderate", elevation: "220 ft gain", parking: "East Weatogue St (Tanager Hill lot)", dogs: "Allowed (On leash)", highlights: "High meadows, bird nesting habitat, views of West Mountain. A wet section has an alternate route.", link: "https://simsburylandtrust.org/slt/tanager-hill-the-ellsworth-property/" },
  { name: "Owen-Mortimer Trail (Simsbury Land Trust)", length: "1.1 miles", difficulty: "Easy - Moderate", elevation: "80 ft gain", parking: "East Weatogue St", dogs: "Allowed (On leash)", highlights: "Woodland path with boardwalk and bridges, near Penwood State Park.", link: "https://simsburylandtrust.org/slt/owen-mortimer/" },
  { name: "James Property Trails (Simsbury Land Trust)", length: "1.5 miles", difficulty: "Moderate", elevation: "160 ft gain", parking: "East Weatogue St trailhead", dogs: "Allowed (On leash)", highlights: "Eastern ridge climb connecting to the Metacomet Trail.", link: "https://simsburylandtrust.org/slt/james-property/" },
  { name: "Wagner Woods & Hall Farm Trails (Simsbury Land Trust)", length: "2.5 miles network", difficulty: "Easy - Moderate", elevation: "100 ft gain", parking: "Great Pond Rd (South lot) or Old Farms Rd (Hall Farm)", dogs: "Allowed (On leash)", highlights: "Meadows, historic farmland, and forest trails toward Great Pond.", link: "https://simsburylandtrust.org/slt/wagner-woods/" },
  { name: "Tulmeadow Farm & Woodlot Trails (Simsbury Land Trust)", length: "1.9 miles", difficulty: "Easy", elevation: "90 ft gain", parking: "255 Farms Village Rd (Tulmeadow Farm lot)", dogs: "Allowed (On leash)", highlights: "Woodlot trails beside working farm fields and the ice cream stand.", link: "https://simsburylandtrust.org/slt/tulmeadow-farm-and-woodlot/" },
  { name: "Rosedale Farm Trail (Simsbury Land Trust)", length: "See SLT Walkbook", difficulty: "Easy", elevation: "See SLT map", parking: "Rosedale Farms, East Weatogue St", dogs: "Allowed (On leash)", highlights: "Farm and meadow walking on protected farmland east of the river.", link: "https://simsburylandtrust.org/slt/rosedale/" },
  { name: "Bog Walk Boardwalk Trail (Simsbury Land Trust)", length: "0.4 miles out & back", difficulty: "Easy (Flat)", elevation: "Flat", parking: "West Mountain Rd (Bog Walk lot)", dogs: "Allowed (On leash)", highlights: "Boardwalk through a kettle bog with rare bog plants.", link: "https://simsburylandtrust.org/slt/bog/" },
  { name: "Ketchin Quarry Trail (Simsbury Land Trust)", length: "0.6 miles", difficulty: "Easy", elevation: "60 ft gain", parking: "Near Talcott Mountain State Park / Metacom Rd", dogs: "Allowed (On leash)", highlights: "Old brownstone and traprock quarry in the woods.", link: "https://simsburylandtrust.org/slt/ketchin-quarry-2/" },
  { name: "Glover Property Trail (Simsbury Land Trust)", length: "1.0 mile loop", difficulty: "Easy", elevation: "50 ft gain", parking: "East Weatogue St", dogs: "Allowed (On leash)", highlights: "Meadow paths and floodplain forest near the Farmington River.", link: "https://simsburylandtrust.org/slt/glover/" },
  { name: "Case Property Trail (Simsbury Land Trust)", length: "0.5 miles out & back", difficulty: "Easy", elevation: "Flat", parking: "Hopmeadow St near town center", dogs: "Allowed (On leash)", highlights: "Short woodland walk near the center of town.", link: "https://simsburylandtrust.org/slt/case/" },
  { name: "Knapp Property Trail (Simsbury Land Trust)", length: "0.7 miles", difficulty: "Easy", elevation: "40 ft gain", parking: "Firetown Rd trailhead", dogs: "Allowed (On leash)", highlights: "Woodland connector beside farmland.", link: "https://simsburylandtrust.org/slt/knapp/" },
  { name: "LaSalette Trail (Simsbury Land Trust with Traprock Ridge Land Conservancy)", length: "See SLT map", difficulty: "Moderate", elevation: "See SLT map", parking: "See SLT map", dogs: "Allowed (On leash)", highlights: "A joint trail listed by the Land Trust on the Simsbury and Traprock Ridge preserves.", link: "https://simsburylandtrust.org/slt/" },

  // --- TOWN OF SIMSBURY PARKS & OPEN SPACE ---
  { name: "Onion Mountain Park Trails", length: "1.5 miles", difficulty: "Moderate - Steep", elevation: "320 ft gain", parking: "West Mountain Rd pull-off", dogs: "Allowed (On leash)", highlights: "Steep climb to a rocky ledge overlooking West Simsbury.", link: "https://www.simsbury-ct.gov/" },
  { name: "Belden Forest Old-Growth Trail", length: "0.8 miles loop", difficulty: "Easy", elevation: "80 ft gain", parking: "Simsbury Public Library lower lot", dogs: "Allowed (On leash)", highlights: "Old-growth forest with large white pines near downtown.", link: "https://www.simsbury-ct.gov/" },
  { name: "Tariffville Gorge & Cowles Park", length: "2.2 miles loop", difficulty: "Moderate", elevation: "210 ft gain", parking: "Main St Park Lot, Tariffville", dogs: "Allowed (On leash)", highlights: "Whitewater views on the Farmington River and mountain biking singletrack.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Ethel Walker School Woods / Town Forest", length: "4.1 miles network", difficulty: "Easy - Moderate", elevation: "120 ft gain", parking: "Town Forest Rd trailhead", dogs: "Allowed (On leash)", highlights: "Pine plantation trails, fire roads, and equestrian woods.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Simsbury Farms Rec Complex Trail Loop", length: "2.0 miles loop", difficulty: "Easy", elevation: "110 ft gain", parking: "100 Old Farms Rd main lot", dogs: "Allowed (On leash)", highlights: "Paved and gravel path around the golf course and orchards. Also in the Land Trust Walkbook.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },

  // --- RIVERWALKS & REGIONAL TRAILS ---
  { name: "Farmington Canal Heritage Trail (Simsbury Section)", length: "8.4 miles in Simsbury", difficulty: "Easy (Paved)", elevation: "Flat paved trail", parking: "Iron Horse Blvd / Drake Hill Rd / Tariffville Rd", dogs: "Allowed (On leash)", highlights: "Paved rail trail linking downtown cafes and shops.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Pinchot Sycamore & Farmington River Walk", length: "0.5 miles path", difficulty: "Easy", elevation: "Flat", parking: "Route 185 bridge park lot", dogs: "Allowed (On leash)", highlights: "CT's largest tree and a canoe launch on the Farmington River.", link: "https://www.simsbury-ct.gov/" },
  { name: "Old Drake Hill Flower Bridge & River Walk", length: "0.6 miles path", difficulty: "Easy", elevation: "Flat", parking: "1 Drake Hill Rd lot", dogs: "Allowed (On leash)", highlights: "1892 iron bridge lined with flower boxes over the Farmington River.", link: "https://www.simsbury-ct.gov/384/Parks-and-Recreation" },
  { name: "Metacomet Trail (Simsbury Section)", length: "11.2 miles through Simsbury", difficulty: "Moderate - Strenuous", elevation: "Varies along ridge", parking: "Route 185 / Route 309 trailheads", dogs: "Allowed (On leash)", highlights: "Blue-blazed New England Trail along the traprock ridgeline.", link: "https://www.ctwoodlands.org/" }
];
