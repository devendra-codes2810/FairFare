// ------------------------------------------------------------------
// HOTELS DATA
// ------------------------------------------------------------------
export const hotelsData = [
  { id:1, name:'Brijrama Palace',        price:8000, cat:'premium', stars:5, loc:'Darbhanga Ghat',    amenities:'Heritage hotel · Spa · Fine dining · River view' },
  { id:2, name:'Hotel Ganges View',      price:4500, cat:'premium', stars:5, loc:'Assi Ghat',         amenities:'River view · AC · Restaurant · Rooftop' },
  { id:3, name:'Guleria Kothi',          price:3500, cat:'premium', stars:4, loc:'Shivala Ghat',      amenities:'Boutique heritage · AC · Ghat view' },
  { id:4, name:'Hotel Surya',            price:2200, cat:'mid',     stars:3, loc:'Varuna Bridge',     amenities:'AC · WiFi · Restaurant · Parking' },
  { id:5, name:'Hotel Alka',             price:1500, cat:'mid',     stars:3, loc:'Meer Ghat',         amenities:'River view · AC · Rooftop restaurant' },
  { id:6, name:'Hotel Pradeep',          price:1200, cat:'mid',     stars:3, loc:'Jagatganj',         amenities:'AC · WiFi · Parking · 24hr service' },
  { id:7, name:'Rashmi Guest House',     price:900,  cat:'budget',  stars:3, loc:'Dashashwamedh',     amenities:'Ghat view · WiFi · Basic AC' },
  { id:8, name:'Zostel Varanasi',        price:450,  cat:'budget',  stars:2, loc:'Assi Ghat',         amenities:'Dorm & private · Events · WiFi · Social' },
  { id:9, name:'Stops Hostel',           price:500,  cat:'budget',  stars:2, loc:'Assi Ghat',         amenities:'Dorm beds · WiFi · Rooftop chill area' },
  { id:10,name:'Hotel Scindia',          price:800,  cat:'budget',  stars:2, loc:'Scindia Ghat',      amenities:'Basic AC · WiFi · Ghat walkable' },
];

// ------------------------------------------------------------------
// FOOD DATA
// ------------------------------------------------------------------
export const foodData = [
  { id:1,  name:'Kashi Chaat Bhandar',   price:'₹40–100', loc:'Godaulia Chowk',         desc:'Tamatar chaat, aloo tikki, dahi puri — most famous chaat in Varanasi.',  tag:'Must try'    },
  { id:2,  name:'Blue Lassi Shop',       price:'₹60–120', loc:'Vishwanath Gali',        desc:'Thick lassi in 70+ flavors. Open since 1925. Always has a queue.',       tag:'Iconic'       },
  { id:3,  name:'Kachori Gali',          price:'₹20–50',  loc:'Near Vishwanath Temple', desc:'Hot kachori sabzi + jalebi — morning only, sold out by 10am.',           tag:'Morning only' },
  { id:4,  name:'Deena Chaat Bhandar',   price:'₹30–80',  loc:'Lanka, BHU Road',        desc:'Famous papdi chaat and banarasi style tikki. Popular with students.',    tag:'Budget'       },
  { id:5,  name:'Ram Bhandar Thandai',   price:'₹30–80',  loc:'Thatheri Bazaar',        desc:'Traditional thandai, bhang thandai (seasonal). A Varanasi classic.',     tag:'Seasonal'     },
  { id:6,  name:'Keshari Restaurant',    price:'₹100–250',loc:'Godaulia',               desc:'Dal baati churma, Banarasi thali — full meal experience.',               tag:'Sit-down'     },
  { id:7,  name:'Banarasi Paan',         price:'₹15–40',  loc:'Near all ghats',         desc:'Sweet meetha paan, saada paan — a must after any meal in Varanasi.',     tag:'Dessert'      },
  { id:8,  name:'Raj Cafe (Assi Ghat)',  price:'₹80–200', loc:'Assi Ghat',              desc:'South Indian, continental, ghat view. Great for breakfast.',             tag:'Ghat view'    },
  { id:9,  name:'Vishwanath Lassi',      price:'₹40–80',  loc:'Near KV Temple',         desc:'Quick lassi in clay matka cups. Very thick and creamy.',                 tag:'Quick bite'   },
  { id:10, name:'Varanasi Rabri Shop',   price:'₹30–70',  loc:'Dashashwamedh Road',     desc:'Thick rabri, malpua, kheer — traditional desserts done perfectly.',      tag:'Sweet'        },
];

// ------------------------------------------------------------------
// PLACES DATA
// ------------------------------------------------------------------
export const placesData = [
  { id:1, name:'Dashashwamedh Ghat',          desc:'Most famous ghat. Grand Ganga Aarti every evening ~7pm. Extremely crowded and spiritual.', timing:'24hrs | Aarti: 7pm daily',    dist:'2km from station',  fare:'₹20-40'  },
  { id:2, name:'Kashi Vishwanath Temple',     desc:'One of the 12 Jyotirlinga shrines. Entry free. New corridor built in 2021.',              timing:'3am–11pm',                     dist:'2.5km from station', fare:'₹25–40'  },
  { id:3, name:'Assi Ghat',                   desc:'Southernmost major ghat. Famous yoga hub. Best morning atmosphere in the city.',          timing:'24hrs | Yoga: 5–7am',          dist:'4km from station',  fare:'₹30–50' },
  { id:4, name:'Sarnath',                     desc:'Where Buddha gave his first sermon. Dhamek Stupa, museum, deer park — must visit.',        timing:'9am–5pm | Museum closed Fri',  dist:'10km from city',    fare:'₹50–80' },
  { id:5, name:'Ramnagar Fort',               desc:'17th century fort of Maharaja of Varanasi. Museum with vintage cars and weapons.',        timing:'9am–12pm, 2pm–5pm',            dist:'14km from ghats',   fare:'₹80–100' },
  { id:6, name:'Manikarnika Ghat',            desc:'Main cremation ghat. Fires burn 24x7. Sacred and deeply spiritual — visit respectfully.', timing:'24hrs (always active)',        dist:'2km from station',  fare:'₹20–40'  },
  { id:7, name:'BHU – Banaras Hindu Univ.',   desc:'Beautiful campus with New Vishwanath Temple (free). Peaceful, green and huge.',           timing:'6am–8pm | No phones in temple', dist:'6km from station',  fare:'₹30–50'   },
  { id:8, name:'Chunar Fort',                 desc:'Ancient fort on Ganges 35km away. Less crowded, great history and river views.',          timing:'9am–5pm',                      dist:'35km from city',    fare:'Jeep ₹125–200'},
];

// ------------------------------------------------------------------
// SCAM DATA
// ------------------------------------------------------------------
export const scamData = [
  { id:1, title:'Auto overcharging from Railway Station',   body:'Normal auto fare to Dashashwamedh Ghat is ₹80–120. Drivers demand ₹300–500 from tourists. Always confirm price before boarding.', tip:'Show this app\'s fare range. If driver refuses, walk away.' },
  { id:2, title:'Boat ride price inflation at ghats',       body:'Ghat to ghat boat is ₹150–300/hr. Boatmen quote ₹800–2000 to tourists. Government e-boats have fixed rates of ₹100–200/person.', tip:'Use government e-boats or negotiate before boarding.' },
  { id:3, title:'"Temple is closed today" trick',           body:'Locals claim the main temple is closed and offer to take you somewhere better. This is false — Kashi Vishwanath rarely closes.', tip:'Ignore such claims. Walk to the temple yourself and verify.' },
  { id:4, title:'Fake guides near ghats & temples',         body:'Unlicensed touts pose as guides and charge ₹1000–3000. Licensed UP Tourism guides carry official ID and charge ₹500–800.', tip:'Always ask for official UP Tourism guide ID before hiring.' },
  { id:5, title:'Commission-based silk shop scam',          body:'Drivers earn 20–40% commission for taking you to shops. A saree worth ₹200 costs ₹1000–3000 in these commission shops.', tip:'Never buy from shops recommended by your driver.' },
  { id:6, title:'Free gifts near temples — donation trap',  body:'People offer flowers or tilak then demand ₹500–2000 as "donation". Accepting any free gift near temples leads to this.', tip:'Politely decline all unsolicited offerings near temples.' },
  { id:7, title:'Airport taxi inflated beyond prepaid rate',body:'Official prepaid taxi ₹350–500. Unofficial taxis in parking quote ₹800–1500. There is a prepaid counter inside arrivals.', tip:'Use the official prepaid taxi counter inside the terminal only.' },
  { id:8, title:'Fake ashram spiritual scam',               body:'"Free meditation" sessions turn into demands for donations or purchases of overpriced incense, rudraksha, and oils.', tip:'Only visit reputable ashrams with proper addresses and reviews.' },
];

// ------------------------------------------------------------------
// TICKETS DATA
// ------------------------------------------------------------------
export const attractionTickets = [
  { name:'Kashi Vishwanath Temple',        indian:'Free',   foreign:'Free',   note:'Donation optional'     },
  { name:'Sarnath Museum (ASI)',           indian:'₹25',    foreign:'₹300',   note:'Camera ₹25 extra'       },
  { name:'Dhamek Stupa, Sarnath',          indian:'₹25',    foreign:'₹300',   note:'Combo with museum'      },
  { name:'Ramnagar Fort Museum',           indian:'₹15',    foreign:'₹200',   note:'Photography extra'      },
  { name:'Ganga Aarti (Dashashwamedh)',    indian:'Free',   foreign:'Free',   note:'Boat view ₹200–500'     },
  { name:'Tulsi Manas Temple',             indian:'Free',   foreign:'Free',   note:'—'                      },
  { name:'Bharat Mata Mandir',             indian:'Free',   foreign:'Free',   note:'—'                      },
  { name:'New Vishwanath Temple (BHU)',    indian:'Free',   foreign:'Free',   note:'No mobile phones'       },
  { name:'Chunar Fort',                   indian:'₹25',    foreign:'₹200',   note:'35km from city'         },
];

export const activityTickets = [
  { name:'Boat ride – ghat to ghat (1hr)', price:'₹150–300/person', status:'negotiate' },
  { name:'Sunrise boat ride',              price:'₹200–400/person', status:'negotiate' },
  { name:'E-boat (government, fixed)',     price:'₹100–200/person', status:'fixed'     },
  { name:'Licensed guide (2–3 hrs)',       price:'₹500–800',        status:'fixed'     },
  { name:'Yoga class (per session)',       price:'₹200–600',        status:'fixed'     },
  { name:'Cooking class (half day)',       price:'₹800–2000',       status:'negotiate' },
];
