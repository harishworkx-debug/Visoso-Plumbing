import anaheim from "@/assets/loc-anaheim.jpg";
import orange from "@/assets/loc-orange.jpg";
import santaAna from "@/assets/loc-santa-ana.jpg";
import fullerton from "@/assets/loc-fullerton.jpg";
import gardenGrove from "@/assets/loc-garden-grove.jpg";
import buenaPark from "@/assets/loc-buena-park.jpg";
import orangeCounty from "@/assets/loc-orange-county.jpg";
import yorbaLinda from "@/assets/loc-yorba-linda.jpg";
import placentia from "@/assets/loc-placentia.jpg";
import westAnaheim from "@/assets/loc-west-anaheim.jpg";

export interface Location {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  zips: string[];
  drive: string;
  housingEra: string;
  landmarks: string[];
  neighborhoods: string[];
  localIssues: string[];
  intro: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "anaheim",
    name: "Anaheim",
    image: anaheim,
    imageAlt: "Sunny Anaheim California residential street with palm trees and a plumbing service van",
    zips: ["92801", "92802", "92804", "92805", "92806", "92807", "92808"],
    drive: "We are based in Anaheim, so response times here are the fastest in our service area.",
    housingEra: "post-war tract homes from the 1950s and 60s alongside 1990s hillside development",
    landmarks: ["Disneyland Resort", "Angel Stadium", "Honda Center", "Anaheim Packing District", "Anaheim Convention Center"],
    neighborhoods: ["West Anaheim", "Anaheim Hills", "Downtown Anaheim", "Platinum Triangle", "Colony Historic District"],
    localIssues: [
      "Galvanized supply piping in 1950s and 60s tract homes closing up with corrosion",
      "Slab leaks in single-story slab-on-grade construction across West Anaheim",
      "Clay sewer laterals with root intrusion in older Colony District properties",
      "Hard water scale shortening water heater life across the whole city",
      "Hillside homes in Anaheim Hills with pressure regulator failures from elevation swings",
    ],
    intro: [
      "Anaheim is our home city. Our trucks are stocked and dispatched from here, our technicians know which neighborhoods sit on slab and which have crawlspaces, and we have worked on the full range of Anaheim housing stock — from mid-century Colony bungalows to Anaheim Hills two-story homes and Platinum Triangle apartment buildings.",
      "That local knowledge shortens diagnosis time considerably. When a West Anaheim homeowner describes a warm spot on the floor, we already suspect a hot-side slab leak in original copper. When a Colony District customer describes a main line that clogs every spring, we already suspect roots at a clay joint. Knowing the pattern means we bring the right equipment on the first visit.",
    ],
  },
  {
    slug: "orange",
    name: "Orange",
    image: orange,
    imageAlt: "Old Towne Orange California historic homes with a plumber carrying a toolbox",
    zips: ["92865", "92866", "92867", "92868", "92869"],
    drive: "Orange is a short drive east of our Anaheim base, typically well inside our fastest response band.",
    housingEra: "historic craftsman and Victorian homes in Old Towne plus 1970s and 80s tracts",
    landmarks: ["Old Towne Orange Plaza", "Chapman University", "The Outlets at Orange", "UCI Medical Center", "Hart Park"],
    neighborhoods: ["Old Towne", "Orange Park Acres", "El Modena", "Santiago Hills", "Villa Park border"],
    localIssues: [
      "Original cast iron drain lines in Old Towne homes reaching end of life",
      "Knob-and-tube era homes with mismatched plumbing retrofits from multiple decades",
      "Root intrusion from mature street trees throughout the historic district",
      "Undersized gas piping in older homes when adding modern appliances",
      "Well-side hard water scaling in Orange Park Acres properties",
    ],
    intro: [
      "Plumbing in Orange means respecting the age of the housing stock. Old Towne homes are protected, beautiful, and frequently plumbed with a century of accumulated retrofits — a little galvanized here, a copper repair there, cast iron drains below. Working in these homes requires patience and a willingness to open as little as possible.",
      "Our Orange customers also include Chapman-area rentals, Santiago Hills family homes and Orange Park Acres properties on larger lots with long service runs. Each has its own failure patterns, and we bring equipment suited to the property rather than a one-size approach.",
    ],
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    image: santaAna,
    imageAlt: "Santa Ana California neighborhood with ranch homes and a plumber working at a water main",
    zips: ["92701", "92703", "92704", "92705", "92706", "92707"],
    drive: "Santa Ana is directly south of Anaheim and firmly inside our daily service route.",
    housingEra: "dense mid-century housing, historic Floral Park estates and extensive multi-family property",
    landmarks: ["Downtown Santa Ana Artists Village", "Discovery Cube", "Santa Ana Zoo", "MainPlace Mall", "Bowers Museum"],
    neighborhoods: ["Floral Park", "French Park", "Wilshire Square", "South Coast Metro", "Delhi"],
    localIssues: [
      "Multi-family properties with shared main lines and grease-related backups",
      "Historic Floral Park homes with original cast iron and galvanized systems",
      "High-density blocks where a single lateral failure affects several households",
      "Water heaters installed without expansion tanks or seismic strapping",
      "Aging apartment fixture stock generating chronic leaks and high water bills",
    ],
    intro: [
      "Santa Ana keeps us busy with both single-family and multi-unit work. Denser housing means shared drainage, and shared drainage means a small habit in one unit becomes everyone's backup. We handle a great deal of building-wide jetting and camera work here for owners and property managers who are tired of monthly emergency call-outs.",
      "The historic districts are a different world again. Floral Park and French Park homes deserve careful work, and we treat original finishes, hardwood and plaster with the caution they require while modernizing the systems hidden behind them.",
    ],
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    image: fullerton,
    imageAlt: "Fullerton California hillside home with a technician checking an outdoor water heater",
    zips: ["92831", "92832", "92833", "92835"],
    drive: "Fullerton sits just north of us and is covered daily by our north Orange County route.",
    housingEra: "1920s Spanish revival, mid-century ranch and hillside homes near the university",
    landmarks: ["Cal State Fullerton", "Downtown Fullerton", "Fullerton Arboretum", "Muckenthaler Cultural Center", "Craig Regional Park"],
    neighborhoods: ["Sunny Hills", "Raymond Hills", "Golden Hill", "Amerige Heights", "Downtown Fullerton"],
    localIssues: [
      "Hillside properties with pressure regulator and pressure-related pipe failures",
      "1920s Spanish revival homes with original galvanized supply lines",
      "Student rental housing with heavy fixture wear and frequent drain issues",
      "Mature tree root intrusion in older Golden Hill sewer laterals",
      "Tankless conversions requiring gas line resizing in older construction",
    ],
    intro: [
      "Fullerton mixes some of the most beautiful older homes in north Orange County with hillside properties where elevation creates its own plumbing behavior. Pressure that is fine at the bottom of a hill can be well above safe limits further along the system, and homes without a functioning regulator quietly destroy their own fixtures and water heaters.",
      "We also do a lot of work in Fullerton's rental market near the university, where high occupancy accelerates wear on fixtures and drains. Landlords appreciate flat-rate pricing and documented service records for their maintenance files.",
    ],
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    image: gardenGrove,
    imageAlt: "Garden Grove California family neighborhood with a plumber greeting a homeowner",
    zips: ["92840", "92841", "92843", "92844", "92845"],
    drive: "Garden Grove is minutes southwest of our Anaheim base.",
    housingEra: "expansive 1950s and 60s single-story tract housing on slab",
    landmarks: ["Christ Cathedral", "Garden Grove Park", "Historic Main Street", "Korean Business District", "Village Green"],
    neighborhoods: ["West Garden Grove", "Historic Main Street", "Little Saigon border", "Twin Lakes", "Chapman-Brookhurst corridor"],
    localIssues: [
      "Slab-on-grade construction making copper slab leaks the most common major call",
      "Kitchen drain lines in 1960s homes undersized for modern disposal use",
      "Original cast iron drain systems reaching structural failure",
      "Water heaters in tight garage closets installed without proper clearance",
      "Aging main shutoff valves that no longer close fully",
    ],
    intro: [
      "Garden Grove is dominated by single-story slab homes built during the region's post-war boom, and that construction defines the plumbing calls we get here. Copper supply lines routed under the slab have been in service for six decades, and once one pinhole appears, others typically follow within a few years.",
      "That is why we talk to Garden Grove homeowners openly about rerouting versus repeated slab repairs. Opening a floor twice costs more than routing a new line overhead once, and we would rather you spend that money one time.",
    ],
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    image: buenaPark,
    imageAlt: "Buena Park California suburban street with a technician operating a drain machine",
    zips: ["90620", "90621"],
    drive: "Buena Park is immediately northwest of Anaheim and inside our core response zone.",
    housingEra: "1960s tract housing, newer infill development and significant commercial corridors",
    landmarks: ["Knott's Berry Farm", "The Source OC", "Buena Park Downtown", "Ralph B. Clark Regional Park", "Medieval Times"],
    neighborhoods: ["Los Coyotes", "Buena Park Downtown", "Beach Boulevard corridor", "Bellehurst", "Crescent-Knott area"],
    localIssues: [
      "Heavy commercial corridor grease line demands along Beach Boulevard",
      "1960s tract homes with original galvanized branch lines",
      "Sewer laterals affected by decades of nearby construction and soil movement",
      "Restaurant kitchens requiring scheduled interceptor and jetting service",
      "Older water heaters in converted garage spaces without proper venting",
    ],
    intro: [
      "Buena Park splits neatly into two kinds of plumbing work: established residential tracts with aging supply and drain systems, and a dense hospitality and restaurant corridor where drain maintenance is a business-continuity issue rather than an inconvenience.",
      "We serve both. Residential customers get flat-rate repairs and honest advice on what can wait; commercial kitchens along Beach Boulevard get scheduled jetting and interceptor service that keeps them out of trouble with inspectors and out of an emergency call on a Friday night.",
    ],
  },
  {
    slug: "orange-county",
    name: "Orange County",
    image: orangeCounty,
    imageAlt: "Aerial view of Orange County California suburban housing and freeways at sunset",
    zips: ["Serving north and central Orange County"],
    drive: "We cover north and central Orange County daily from our Anaheim base.",
    housingEra: "everything from 1920s bungalows to brand new master-planned communities",
    landmarks: ["Disneyland Resort", "Angel Stadium", "South Coast Plaza", "John Wayne Airport", "Old Towne Orange"],
    neighborhoods: ["Anaheim", "Orange", "Santa Ana", "Fullerton", "Garden Grove", "Buena Park", "Placentia", "Yorba Linda"],
    localIssues: [
      "Regionally hard water shortening the life of water heaters and fixtures",
      "Widespread slab-on-grade construction making slab leaks a county-wide issue",
      "Aging clay and cast iron sewer laterals across pre-1980 neighborhoods",
      "Seismic requirements for water heater strapping and flexible connections",
      "High static pressure in many municipal supply zones stressing residential piping",
    ],
    intro: [
      "Orange County plumbing has regional patterns that repeat from city to city: hard water that scales heaters and fixtures, slab-on-grade construction that turns a pinhole into a floor repair, and mid-century sewer laterals now well past their design life. Recognizing those patterns is most of the diagnostic work.",
      "Visoso Plumbing serves north and central Orange County with the same flat-rate pricing, bilingual service and 24-hour emergency availability regardless of which city you are in. If you are unsure whether we reach you, call — we will tell you honestly rather than sending someone late.",
    ],
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    image: yorbaLinda,
    imageAlt: "Yorba Linda California hillside homes with a plumber inspecting an outdoor manifold",
    zips: ["92886", "92887"],
    drive: "Yorba Linda is east of Anaheim Hills and covered by our east county route.",
    housingEra: "1980s through 2000s hillside and equestrian estate development",
    landmarks: ["Richard Nixon Library", "Yorba Regional Park", "Black Gold Golf Club", "Yorba Linda Town Center", "Santa Ana River Trail"],
    neighborhoods: ["Vista del Verde", "East Lake Village", "Bryant Ranch", "Travis Ranch", "Yorba Linda Estates"],
    localIssues: [
      "Elevation-driven pressure variation requiring properly sized regulators",
      "Larger homes with long recirculation loops and pump failures",
      "Extensive irrigation systems producing hidden underground leaks",
      "Multiple water heaters or high-demand tankless systems per property",
      "Hillside soil movement stressing buried sewer and water service lines",
    ],
    intro: [
      "Yorba Linda properties tend to be larger, newer and more complex than the county average: multiple bathrooms, recirculation loops, dual water heaters, extensive irrigation and long service runs across generous lots. Complexity means more places for a system to fail quietly.",
      "Hidden irrigation and underground service leaks are especially common here, and they can waste an enormous volume of water before anyone notices anything but the bill. Our electronic leak detection equipment locates those without trenching the landscaping.",
    ],
  },
  {
    slug: "placentia",
    name: "Placentia",
    image: placentia,
    imageAlt: "Placentia California residential street with a plumber unloading a service van",
    zips: ["92870"],
    drive: "Placentia sits northeast of Anaheim, minutes from our base.",
    housingEra: "1960s and 70s family tracts with pockets of older citrus-era homes",
    landmarks: ["Old Town Placentia", "Tri-City Park", "Bradford House", "Alta Vista Country Club", "Placentia Champions Sports Complex"],
    neighborhoods: ["Old Town Placentia", "Alta Vista", "Kraemer Place", "Golden Ave corridor", "Placentia Linda area"],
    localIssues: [
      "1960s and 70s copper systems now producing first-generation pinhole leaks",
      "Original cast iron drains in older citrus-era homes",
      "Sewer laterals disturbed by long-running local rail and road construction",
      "Water heaters well past ten years still in service across the city",
      "Hard water scale reducing flow in unsoftened homes",
    ],
    intro: [
      "Placentia's housing is mostly from the 1960s and 70s, which puts its copper supply systems right at the age where pinhole leaks begin appearing. We see a steady stream of first-time slab leak calls here from homeowners who have never had a plumbing problem before.",
      "Our advice to Placentia customers is usually the same: get a pressure check and a water heater assessment while things are calm. Both are quick, both are inexpensive, and both catch the failures that otherwise arrive at midnight.",
    ],
  },
  {
    slug: "west-anaheim",
    name: "West Anaheim",
    image: westAnaheim,
    imageAlt: "West Anaheim California street with apartment buildings and a plumber testing water pressure",
    zips: ["92801", "92804"],
    drive: "West Anaheim is our immediate neighborhood — we are located here.",
    housingEra: "1950s and 60s single-story slab tracts plus substantial apartment stock",
    landmarks: ["Beach Boulevard corridor", "Twila Reid Park", "Maxwell Park", "Western High School", "Brookhurst Community Park"],
    neighborhoods: ["Brookhurst", "Beach Boulevard corridor", "Greenacre", "Dale-Lincoln", "Magnolia district"],
    localIssues: [
      "Slab leaks in original 1950s and 60s copper under single-story homes",
      "Apartment buildings with shared laterals and repeat main line backups",
      "Galvanized branch lines throttling pressure at fixtures",
      "Water heaters in exterior closets with corroded venting",
      "Kitchen lines without cleanouts making service unnecessarily invasive",
    ],
    intro: [
      "West Anaheim is literally our neighborhood — our address on West Greenacre Avenue is right here. We know these blocks, this housing stock and the water pressure on these streets, and we can usually be at a West Anaheim property faster than anyone else.",
      "The dominant issues here are slab leaks and shared-lateral backups in the apartment stock. Both benefit enormously from early detection, and both are things we handle several times a week within a couple of miles of our own front door.",
    ],
  },
];

export const LOCATION_MAP = new Map(LOCATIONS.map((l) => [l.slug, l]));

/** Services that get a dedicated landing page in every city. */
export const LOCATION_SERVICE_SLUGS = [
  "drain-cleaning",
  "leak-detection",
  "water-heater-installation",
  "gas-line-repair",
  "sewer-line-repair",
  "emergency-plumbing",
  "plumbing-repair",
  "commercial-plumbing",
];
