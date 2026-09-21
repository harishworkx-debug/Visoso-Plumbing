export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
  imageKey: string;
  sections: { h: string; p: string[] }[];
  takeaways: string[];
  relatedService: string;
}

const d = (n: number) => new Date(Date.UTC(2026, 0, 5 + n * 9)).toISOString().slice(0, 10);

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-prevent-drain-clogs",
    title: "How To Prevent Drain Clogs In Your Anaheim Home",
    excerpt: "The habits and small hardware upgrades that keep kitchen, bath and main lines flowing for years.",
    category: "Drains",
    readMinutes: 6,
    date: d(0),
    imageKey: "drain-cleaning",
    relatedService: "drain-cleaning",
    sections: [
      {
        h: "Why drains clog in the first place",
        p: [
          "Very few clogs happen suddenly. What feels like an overnight blockage is almost always the last few grams of debris landing on a lining that has been building for months. Grease cools and coats the pipe wall, soap scum bonds to that layer, hair and food fibres catch on it, and the effective diameter of a two-inch line quietly drops to less than an inch.",
          "In Anaheim's hard water, mineral scale accelerates the process. Calcium deposits give everything else something to grip, which is why identical homes on the same street can have very different drain behaviour depending on whether they have a softener.",
        ],
      },
      {
        h: "Kitchen habits that matter most",
        p: [
          "Never pour cooking grease down a drain, even with hot water running. Hot water moves grease twenty feet down the line where it cools and hardens somewhere far more expensive to reach. Pour it into a can, let it solidify, and bin it.",
          "Use a basket strainer in every sink and empty it into the trash rather than rinsing it. A garbage disposal grinds food; it does not make food safe for a drain line. Fibrous items — celery, artichoke leaves, onion skins, coffee grounds, eggshells — should go into the trash or compost.",
        ],
      },
      {
        h: "Bathroom habits that matter most",
        p: [
          "Hair is the dominant cause of bathroom clogs, and a five-dollar hair catcher eliminates most of it. Clean it weekly rather than waiting until the shower pan holds water.",
          "Only three things belong in a toilet. Wipes labelled flushable do not break down at the speed a sewer lateral requires, and they are the single most common cause of the main line backups providers clear in older Orange County neighbourhoods.",
        ],
      },
      {
        h: "Maintenance that actually works",
        p: [
          "Once a week, run hot water at full flow through each drain for a minute. Once a month, an enzyme-based drain maintainer overnight will digest the organic film that chemical cleaners just punch a hole through.",
          "Every 18 to 24 months, have your main line professionally cleared and camera checked. It costs a fraction of an emergency backup, and the camera catches structural issues — bellies, offsets, root intrusion — while they are still cheap to address.",
        ],
      },
    ],
    takeaways: [
      "Grease and wipes cause the majority of serious blockages",
      "Strainers and hair catchers prevent most clogs for a few dollars",
      "Enzyme maintainers work; caustic chemical cleaners damage pipe",
      "Professional main line service every 18 to 24 months prevents emergencies",
    ],
  },
  {
    slug: "signs-your-water-heater-needs-replacement",
    title: "7 Signs Your Water Heater Needs Replacement",
    excerpt: "How to tell the difference between a cheap repair and a tank on borrowed time.",
    category: "Water Heaters",
    readMinutes: 7,
    date: d(1),
    imageKey: "water-heater",
    relatedService: "water-heater-installation",
    sections: [
      {
        h: "Age is the strongest predictor",
        p: [
          "Most standard tank water heaters last eight to twelve years. In hard-water areas like Anaheim, unsoftened tanks frequently reach the lower end of that range because sediment insulates the burner from the water and forces longer, hotter cycles.",
          "Find the serial number on the data plate — the first four digits usually encode the month and year of manufacture. If your unit is past ten and needs a significant part, replacement is usually the better financial decision.",
        ],
      },
      {
        h: "Rust, rumble and recovery time",
        p: [
          "Rusty hot water that runs clear on the cold side means the tank interior is corroding, usually because the sacrificial anode rod is spent. Caught early, an anode replacement extends tank life significantly; caught late, the tank shell is already thinning.",
          "Rumbling or popping during heating is sediment. A flush helps, but a heavily scaled tank has permanently lost efficiency and recovery speed.",
        ],
      },
      {
        h: "Leaks that mean stop",
        p: [
          "A drip at a fitting, valve or flex connector is a repair. Water coming from the body of the tank is not repairable — the steel shell has failed and the unit will eventually let go completely, usually all at once.",
          "If you see moisture or rust streaks on the tank body, plan replacement now rather than after your garage floods.",
        ],
      },
      {
        h: "What to install next",
        p: [
          "Replacement is the right moment to consider whether a tank still suits you. Tankless units deliver endless hot water and reclaim floor space, but need adequate gas supply and dedicated venting. Hybrid heat pump units are extremely efficient where the space and climate suit them.",
          "Whichever you choose, insist on code-correct installation: thermal expansion tank, seismic strapping, proper venting, sediment trap on the gas line and a correctly routed TPR discharge.",
        ],
      },
    ],
    takeaways: [
      "Past ten years, repair costs rarely make sense",
      "Tank-body leaks are terminal; fitting leaks are repairable",
      "Annual flushing meaningfully extends tank life",
      "Replacement is the moment to evaluate tankless or hybrid options",
    ],
  },
  {
    slug: "benefits-of-sewer-camera-inspection",
    title: "The Real Benefits Of A Sewer Camera Inspection",
    excerpt: "Why video evidence is the cheapest money you will ever spend on your sewer line.",
    category: "Sewer",
    readMinutes: 6,
    date: d(2),
    imageKey: "camera-inspection",
    relatedService: "camera-inspection",
    sections: [
      {
        h: "It replaces guessing with evidence",
        p: [
          "Every sewer recommendation should be based on something you can see. A camera inspection shows the pipe material, its condition, the exact distance to any defect and whether the problem is a blockage or a structural failure.",
          "That distinction changes the price by an order of magnitude. Roots at one joint are a spot repair; a run of crushed clay is a replacement. No one should be quoting either without footage.",
        ],
      },
      {
        h: "It prevents unnecessary excavation",
        p: [
          "Paired with a sonde locator, a camera lets us mark the depth and surface position of a defect to within inches. Excavation becomes a small targeted access hole instead of a trench across your landscaping.",
          "For homes with driveways, patios or mature planting over the sewer route, that precision is worth many times the cost of the inspection.",
        ],
      },
      {
        h: "It protects real estate transactions",
        p: [
          "A sewer lateral is not part of a standard home inspection, and it is frequently the single most expensive hidden defect in a pre-1980 property. Spending a small amount before closing can save a five-figure surprise afterwards.",
          "Recorded footage is also negotiating leverage: it is very hard to argue with video of root intrusion at forty-two feet.",
        ],
      },
    ],
    takeaways: [
      "Never accept a sewer quote without seeing footage",
      "Locating turns trenching into a targeted dig",
      "Essential due diligence for any pre-1980 property purchase",
      "Post-repair inspections verify you got what you paid for",
    ],
  },
  {
    slug: "gas-leak-warning-signs",
    title: "Gas Leak Warning Signs Every Homeowner Should Know",
    excerpt: "What to smell, hear and watch for — and exactly what to do in the first sixty seconds.",
    category: "Gas Safety",
    readMinutes: 5,
    date: d(3),
    imageKey: "gas-line",
    relatedService: "gas-line-repair",
    sections: [
      {
        h: "The signs",
        p: [
          "Natural gas is odourless, so utilities add mercaptan to give it that distinctive rotten-egg smell. If you smell it, treat it as real every single time.",
          "Other indicators include hissing near a line or appliance, yellow instead of blue burner flames, soot marks around appliances, dead vegetation in a line along a buried gas run, an unexplained jump in gas usage, and physical symptoms — headaches, dizziness, nausea, fatigue — that improve when you leave the property.",
        ],
      },
      {
        h: "What to do immediately",
        p: [
          "Leave. Do not turn lights on or off, do not use a phone inside, do not start a car in an attached garage, and do not attempt to find the leak yourself. Electrical switching creates the exact spark risk you are trying to avoid.",
          "From a safe distance outside, call the gas utility and emergency services if the smell is strong. Then call a licensed plumber to locate and repair the leak and to pressure test the system.",
        ],
      },
      {
        h: "Why testing matters more than sniffing",
        p: [
          "A spot check with soap solution only proves the fitting you sprayed is not leaking right now. A pressure decay test isolates the system and proves the entire piping network holds — which is what the utility requires before restoring service after a red tag.",
          "Any gas work should end with a documented pressure test and appliance-by-appliance verification before the technician leaves.",
        ],
      },
    ],
    takeaways: [
      "Rotten egg smell means evacuate first, investigate never",
      "Never operate switches or phones inside a suspected leak",
      "Yellow flames and soot indicate incomplete combustion",
      "Insist on a documented pressure test after any gas repair",
    ],
  },
  {
    slug: "emergency-plumbing-checklist",
    title: "The Emergency Plumbing Checklist Every Household Needs",
    excerpt: "Five minutes of preparation now saves thousands in water damage later.",
    category: "Emergency",
    readMinutes: 6,
    date: d(4),
    imageKey: "emergency-plumbing",
    relatedService: "emergency-plumbing",
    sections: [
      {
        h: "Know your shutoffs before you need them",
        p: [
          "Find your main water shutoff today. In most Anaheim homes it is near the front hose bib, in the garage, or at the meter box near the street. Turn it to confirm it actually closes — a seized valve during a burst pipe is a disaster multiplier.",
          "Locate the gas shutoff at the meter, the water heater's cold inlet valve, and the angle stops under every sink and toilet. Label them. Show everyone in the household.",
        ],
      },
      {
        h: "Build a small emergency kit",
        p: [
          "A meter key or adjustable wrench for the street valve, a bucket, old towels, a flashlight, a roll of self-fusing silicone tape and a few pipe repair clamps will let you contain most failures long enough for a plumber to arrive.",
          "Keep it somewhere you can reach in the dark without moving anything else.",
        ],
      },
      {
        h: "The first sixty seconds",
        p: [
          "Water: shut the main, cut power to any flooded area at the breaker, then call. Sewage: stop all water use in the building immediately, including the washing machine and dishwasher. Gas: leave the property before doing anything else.",
          "Photograph everything before you clean up. Insurance claims go far more smoothly with time-stamped images of the failure and the resulting damage.",
        ],
      },
    ],
    takeaways: [
      "Test your main shutoff before you need it",
      "Cut power to flooded areas before entering",
      "Stop all water use during a sewage backup",
      "Photograph damage before cleanup for insurance",
    ],
  },
  {
    slug: "california-plumbing-maintenance-guide",
    title: "A Year-Round California Plumbing Maintenance Guide",
    excerpt: "A season-by-season schedule tuned to Southern California homes and water conditions.",
    category: "Maintenance",
    readMinutes: 8,
    date: d(5),
    imageKey: "residential-plumbing",
    relatedService: "residential-plumbing",
    sections: [
      {
        h: "Spring",
        p: [
          "Check every hose bib and irrigation valve for leaks after winter dormancy, and test your backflow device if you have one. Inspect under every sink for the early dark staining that signals a slow weep.",
          "Spring is also when root growth accelerates, which is why main line backups spike. If you had a clog last year, schedule maintenance now rather than waiting for a repeat.",
        ],
      },
      {
        h: "Summer",
        p: [
          "Higher usage means higher demand on the water heater and irrigation. Flush the heater, check static pressure at a hose bib with a gauge — anything above 80 psi needs a regulator — and inspect the irrigation system for hidden underground leaks by watching the meter with everything off.",
          "Summer entertaining also stresses kitchen drains. A professional clearing before a big season of hosting is cheap insurance.",
        ],
      },
      {
        h: "Fall",
        p: [
          "Service the water heater before the heating season and inspect the anode rod if the unit is over four years old. Clean out area drains and downspout drains before the first real rain.",
          "Test your main shutoff and every angle stop. Valves that have not moved in years often will not close when you need them to.",
        ],
      },
      {
        h: "Winter",
        p: [
          "Southern California freezes are rare but not impossible in the inland valleys. Insulate exposed piping in unconditioned garages and along exterior walls, and disconnect hoses on nights with a freeze warning.",
          "Winter storms also test the drainage system. Standing water near the foundation after rain usually means an area drain has silted up.",
        ],
      },
    ],
    takeaways: [
      "Static pressure above 80 psi needs a regulator",
      "Flush the water heater annually in hard-water areas",
      "Exercise shutoff valves so they work when needed",
      "Clear area drains before the rainy season",
    ],
  },
  {
    slug: "kitchen-plumbing-tips",
    title: "Kitchen Plumbing Tips That Prevent Expensive Repairs",
    excerpt: "Small habits and hardware choices that keep the busiest plumbing in the house healthy.",
    category: "Kitchen",
    readMinutes: 6,
    date: d(6),
    imageKey: "sink-installation",
    relatedService: "sink-installation",
    sections: [
      {
        h: "Your disposal is not a trash can",
        p: [
          "Garbage disposals handle soft scraps rinsed with cold running water. They do not handle grease, fibrous vegetables, coffee grounds, bones, pasta or rice. Starches swell and form a paste that coats the pipe wall almost as effectively as grease.",
          "Always run cold water before, during and for thirty seconds after use. Cold keeps fats solid so they get chopped and carried rather than melted onto the pipe.",
        ],
      },
      {
        h: "Check under the sink monthly",
        p: [
          "Take everything out once a month and look at the cabinet floor with a flashlight. Dark rings, swollen particleboard or white mineral crust on a fitting are all early warnings of a leak that has not yet declared itself.",
          "Replace corroded angle stops proactively. They are inexpensive, and a stop that will not close turns a two-minute repair into an emergency.",
        ],
      },
      {
        h: "Dishwasher details people miss",
        p: [
          "The dishwasher drain hose needs a high loop or air gap. Without it, drain water can siphon back into the machine, which is both a hygiene issue and a common cause of that persistent smell.",
          "If the dishwasher backs up when the disposal runs, the disposal's knockout plug may never have been removed at installation — a surprisingly common oversight.",
        ],
      },
    ],
    takeaways: [
      "Cold water during disposal use keeps fats solid",
      "Starches and fibres belong in the trash",
      "Inspect under the sink monthly with a flashlight",
      "Every dishwasher needs a high loop or air gap",
    ],
  },
  {
    slug: "bathroom-plumbing-upgrades",
    title: "Bathroom Plumbing Upgrades Worth The Money",
    excerpt: "Where to spend and where to save when remodeling a bathroom in Orange County.",
    category: "Bathroom",
    readMinutes: 7,
    date: d(7),
    imageKey: "pipe-repair",
    relatedService: "residential-plumbing",
    sections: [
      {
        h: "Spend on what lives inside the wall",
        p: [
          "Valves, supply piping and drain work are the things you will never see and never want to open again. Use quality pressure-balancing or thermostatic shower valves, replace old galvanized branch lines while the wall is open, and install proper blocking and access panels.",
          "Trim can be replaced in an afternoon in ten years. Rough-in cannot.",
        ],
      },
      {
        h: "Upgrades that genuinely improve daily life",
        p: [
          "A thermostatic shower valve holds temperature when a toilet flushes elsewhere. A comfort-height toilet with a quality flush valve solves both ergonomics and repeat clogs. A recirculation loop or dedicated point-of-use heater eliminates the long wait for hot water in a distant bathroom.",
          "Good ventilation is a plumbing-adjacent upgrade that prevents more damage than most fixtures: moisture is what destroys bathrooms.",
        ],
      },
      {
        h: "Where you can safely economize",
        p: [
          "Faucet and shower trim finishes carry a large premium for appearance rather than function. Mid-range trim from a major manufacturer with readily available cartridges will outlast a designer import with unobtainable parts.",
          "Choose a brand your plumber can source parts for locally. That decision matters more in year eight than any showroom detail does on day one.",
        ],
      },
    ],
    takeaways: [
      "Prioritize valves and rough-in over visible trim",
      "Thermostatic valves are a great comfort upgrade",
      "Choose fixtures with locally available parts",
      "Ventilation prevents more damage than any fixture",
    ],
  },
  {
    slug: "drain-cleaning-benefits",
    title: "Professional Drain Cleaning vs Store-Bought Chemicals",
    excerpt: "What actually happens inside your pipes when you pour a bottle of drain cleaner.",
    category: "Drains",
    readMinutes: 5,
    date: d(8),
    imageKey: "drain-cleaning",
    relatedService: "drain-cleaning",
    sections: [
      {
        h: "What chemical cleaners really do",
        p: [
          "Caustic drain products generate heat and dissolve organic material directly around them. In a fully blocked line, most of the product sits in standing water above the clog, slowly attacking whatever it touches — including the pipe.",
          "In older galvanized and cast iron systems, that means accelerated corrosion. In PVC, repeated heat cycles soften joints. And in every system, the residual chemical makes the line hazardous for whoever opens it next.",
        ],
      },
      {
        h: "What mechanical clearing does",
        p: [
          "A cable machine with the correct cutter head physically removes the blockage and scrapes the pipe wall. Hydro jetting goes further, using controlled high pressure water to scour grease, scale and root hair back to bare pipe and flush the debris downstream.",
          "The difference is a hole punched through a clog versus a pipe restored to full diameter. One buys a couple of weeks; the other buys years.",
        ],
      },
      {
        h: "The diagnostic bonus",
        p: [
          "Professional clearing typically includes camera verification on main line work, which turns a repair into an inspection. Bellies, offsets, cracks and root intrusion all become visible while they are still inexpensive to address.",
          "Chemicals tell you nothing. A camera tells you whether you have a habit problem or a pipe problem.",
        ],
      },
    ],
    takeaways: [
      "Caustic cleaners damage older metal piping",
      "Cabling and jetting restore full pipe diameter",
      "Chemicals make the line hazardous to service",
      "Professional clearing includes diagnosis",
    ],
  },
  
      {
        h: "What a maintenance program includes",
        p: [
          "Scheduled hydro jetting of kitchen and grease lines at an interval set by what the camera actually shows. Periodic interceptor service. Annual camera inspection of the main lateral. Fixture audits to catch running flushometers that quietly waste thousands of gallons.",
          "Each visit produces a written report with photos, which also supports health inspections and property management records.",
        ],
      },
      {
        h: "Getting the interval right",
        p: [
          "High-volume kitchens commonly need quarterly jetting; lower-volume operations may be fine twice a year. Offices and retail are usually annual. The right answer comes from footage, not from a generic schedule.",
          "We start with an inspection, set an interval based on the observed build-up rate, then adjust as the data comes in.",
        ],
      },
    ],
    takeaways: [
      "Downtime costs far more than maintenance",
      "Set jetting intervals from camera evidence",
      "Fixture audits recover wasted water costs",
      "Documented visits support inspections and records",
    ],
  },
  {
    slug: "slab-leak-warning-signs",
    title: "Slab Leak Warning Signs In Southern California Homes",
    excerpt: "Why slab-on-grade construction makes hidden leaks the region's most expensive plumbing problem.",
    category: "Leaks",
    readMinutes: 6,
    date: d(10),
    imageKey: "leak-detection",
    relatedService: "leak-detection",
    sections: [
      {
        h: "Why they are so common here",
        p: [
          "Most post-war Orange County housing is slab-on-grade with copper supply lines routed beneath the concrete. Sixty years of water chemistry, soil contact and thermal expansion produce pinholes, and the hot-side line usually fails first because heat accelerates everything.",
          "Once one pinhole appears in a slab run, more typically follow within a few years — which is why the reroute conversation matters.",
        ],
      },
      {
        h: "The warning signs",
        p: [
          "A warm patch on the floor, the sound of running water with every fixture off, a water bill that jumped without a usage change, low pressure throughout the house, unexplained cracks in flooring or drywall, and a musty smell along a baseboard.",
          "A simple test: shut every fixture, note the water meter reading, wait an hour without using water, and read it again. Movement means water is leaving the system somewhere.",
        ],
      },
      {
        h: "Repair, reroute or repipe",
        p: [
          "A spot repair opens the slab at the failure point. A reroute abandons the under-slab section and runs new pipe overhead through walls and attic. A repipe replaces the whole supply system.",
          "For a first failure in otherwise healthy copper, a spot repair is reasonable. For a second failure, rerouting almost always costs less over five years than repeatedly opening the floor.",
        ],
      },
    ],
    takeaways: [
      "Warm floor spots are the classic hot-side slab leak sign",
      "The meter test confirms a leak in under an hour",
      "Second failures usually justify a reroute",
      "Electronic detection avoids exploratory demolition",
    ],
  },
  {
    slug: "tankless-water-heater-worth-it",
    title: "Is A Tankless Water Heater Worth It In Anaheim?",
    excerpt: "An honest cost, comfort and installation comparison for Orange County homes.",
    category: "Water Heaters",
    readMinutes: 7,
    date: d(11),
    imageKey: "water-heater",
    relatedService: "water-heater-installation",
    sections: [
      {
        h: "What tankless does well",
        p: [
          "Endless hot water is the headline, and for households where three showers run back to back it genuinely changes daily life. Tankless units also reclaim floor space, last considerably longer than tanks when maintained, and eliminate standby heat loss.",
          "There is no tank to fail catastrophically either, which matters when the unit lives above finished space.",
        ],
      },
      {
        h: "What it costs and demands",
        p: [
          "Installation is more involved. A tankless unit often requires a larger gas line, dedicated stainless venting and sometimes electrical work. Those requirements — not the appliance itself — are where the budget difference usually lives.",
          "Hard water is the other consideration. Anaheim water scales heat exchangers, so annual descaling is not optional and a softener or scale filter is a worthwhile companion investment.",
        ],
      },
      {
        h: "Who should stay with a tank",
        p: [
          "Small households with modest simultaneous demand, homes where gas upsizing would be disproportionately expensive, and anyone replacing on short notice with a tight budget are often better served by a quality tank plus a recirculation upgrade.",
          "There is no universally correct answer, only the right answer for your household's demand curve and your building's constraints. providers quote both so you can compare real numbers.",
        ],
      },
    ],
    takeaways: [
      "Tankless excels for high simultaneous hot water demand",
      "Gas sizing and venting drive the installation cost",
      "Annual descaling is mandatory in hard water",
      "A quality tank is often the better value for small households",
    ],
  },
  {
    slug: "water-pressure-too-high",
    title: "Is Your Water Pressure Too High? How To Check",
    excerpt: "High pressure destroys fixtures and pipes silently. A ten dollar gauge finds it in two minutes.",
    category: "Maintenance",
    readMinutes: 5,
    date: d(12),
    imageKey: "pipe-repair",
    relatedService: "pipe-repair",
    sections: [
      {
        h: "Why it matters",
        p: [
          "Excessive static pressure is one of the most common hidden causes of plumbing failure. It shortens the life of every fixture, stresses supply lines and appliance valves, accelerates pinhole formation in copper, and causes water hammer.",
          "California code generally requires a pressure regulator when supply exceeds 80 psi, and many municipal zones in north Orange County deliver well above that.",
        ],
      },
      {
        h: "How to test it",
        p: [
          "Buy an inexpensive threaded pressure gauge, attach it to an outdoor hose bib, and open the valve fully with no water running inside. Anything from 45 to 75 psi is healthy; 80 and above needs attention.",
          "Test again in the early morning. Municipal pressure often peaks overnight when demand is low, and a home that reads 78 at noon may be running at 95 at 4 a.m.",
        ],
      },
      {
        h: "The fix",
        p: [
          "A pressure reducing valve installed at the service entry solves it. Regulators are wear items with a typical life of ten to fifteen years, so an existing one that no longer holds a setting should simply be replaced.",
          "Adding a regulator creates a closed system, which means a thermal expansion tank at the water heater becomes necessary too.",
        ],
      },
    ],
    takeaways: [
      "Healthy static pressure is roughly 45 to 75 psi",
      "Test at a hose bib with everything off, including overnight",
      "Above 80 psi requires a pressure reducing valve",
      "A regulator makes a thermal expansion tank necessary",
    ],
  },
  {
    slug: "tree-roots-in-sewer-lines",
    title: "Tree Roots In Sewer Lines: Prevention And Repair",
    excerpt: "Why mature Orange County neighborhoods have root problems, and what actually solves them.",
    category: "Sewer",
    readMinutes: 6,
    date: d(13),
    imageKey: "sewer-line",
    relatedService: "sewer-line-repair",
    sections: [
      {
        h: "How roots get in",
        p: [
          "Roots do not break into healthy pipe. They find existing weaknesses — the mortar joints of old clay laterals, corroded gaps in cast iron, or separations caused by soil movement — and then expand relentlessly once inside because a sewer offers water and nutrients.",
          "Older neighbourhoods with mature street trees and clay laterals have this problem almost universally. It is not a sign of neglect; it is a sign of pipe age.",
        ],
      },
      {
        h: "Temporary versus permanent solutions",
        p: [
          "Mechanical cutting with a root saw restores flow and buys time, typically a year or two before regrowth. Foaming root treatments extend that interval by inhibiting regrowth at the entry point.",
          "The permanent solution is removing the entry point: a spot repair at the affected joint, or replacement of the compromised run. Anything else is a maintenance schedule, not a fix — which is a legitimate choice as long as you know that is what you are buying.",
        ],
      },
      {
        h: "Deciding what to do",
        p: [
          "The camera decides. If one joint has intrusion and the rest of the run is sound, spot repair. If multiple joints show intrusion and the pipe is deteriorating, replacement stops the annual cycle.",
          "providers present both options with the footage in front of you, including the honest math on how many years of annual cutting equals one replacement.",
        ],
      },
    ],
    takeaways: [
      "Roots exploit existing joints and cracks, not sound pipe",
      "Cutting buys one to two years; repair removes the cause",
      "Foaming treatments extend intervals between cuttings",
      "The camera decides between spot repair and replacement",
    ],
  },
  {
    slug: "hard-water-orange-county",
    title: "Hard Water In Orange County: What It Costs You",
    excerpt: "Scale is quietly shortening the life of every water-using appliance in your home.",
    category: "Water Quality",
    readMinutes: 6,
    date: d(14),
    imageKey: "water-heater",
    relatedService: "water-heater-repair",
    sections: [
      {
        h: "What hardness actually is",
        p: [
          "Hard water simply carries dissolved calcium and magnesium. It is not a health concern, but every time it is heated or evaporates, those minerals deposit as scale on heat exchangers, element surfaces, aerators, valve seats and shower glass.",
          "Southern California water is consistently on the hard end of the scale, which is why the effects are so visible here.",
        ],
      },
      {
        h: "Where it costs money",
        p: [
          "Scale insulates water heater burners and elements, forcing longer cycles and higher gas or electricity use while shortening equipment life. It clogs aerators and shower heads, seizes valve cartridges, damages dishwashers and washing machines, and increases soap and detergent consumption.",
          "The cumulative effect over a decade is substantially more than the cost of treating it.",
        ],
      },
      {
        h: "Treatment options",
        p: [
          "A traditional ion-exchange softener is the most effective solution and requires salt and regeneration. Salt-free conditioners do not remove hardness but alter crystal formation so scale adheres less readily; they suit households wanting lower maintenance.",
          "At minimum, flush your water heater annually and descale a tankless unit yearly. Those two habits alone recover much of the loss.",
        ],
      },
    ],
    takeaways: [
      "Scale reduces heater efficiency and lifespan",
      "Softeners remove hardness; conditioners reduce adhesion",
      "Annual flushing is the minimum defence",
      "Tankless units require yearly descaling here",
    ],
  },
  {
    slug: "toilet-running-constantly",
    title: "Why Your Toilet Runs Constantly (And How To Fix It)",
    excerpt: "A running toilet can waste hundreds of gallons a day. Most fixes take under an hour.",
    category: "Repairs",
    readMinutes: 5,
    date: d(15),
    imageKey: "residential-plumbing",
    relatedService: "plumbing-repair",
    sections: [
      {
        h: "The usual suspects",
        p: [
          "Nine times out of ten it is the flapper. Rubber degrades, warps and stops sealing, so water leaks past into the bowl and the fill valve keeps topping up the tank.",
          "The other common causes are a fill valve that no longer shuts off, a float set too high so water spills into the overflow tube, and a flapper chain either too tight to seat or too loose and catching underneath.",
        ],
      },
      {
        h: "Diagnosing in two minutes",
        p: [
          "Put a few drops of food colouring in the tank and wait fifteen minutes without flushing. Colour appearing in the bowl confirms a flapper or seat leak.",
          "If the water level sits at or above the overflow tube, the fill valve or float is the problem instead.",
        ],
      },
      {
        h: "When to call",
        p: [
          "If a new flapper and fill valve do not solve it, the flush valve seat may be pitted or the tank-to-bowl gasket may be failing. On older toilets, a full rebuild kit or replacement is often the more economical answer.",
          "Rocking toilets and water seeping around the base are different problems entirely — usually a failed wax ring or loose closet bolts — and those need attention promptly because the subfloor is at risk.",
        ],
      },
    ],
    takeaways: [
      "Food colouring confirms a flapper leak in minutes",
      "A running toilet can waste hundreds of gallons daily",
      "Flapper and fill valve solve most cases",
      "Water at the base means a failed seal, not a running valve",
    ],
  },
  {
    slug: "repipe-or-repair",
    title: "Repipe Or Repair? How To Decide",
    excerpt: "The honest decision framework for homes with recurring pinhole leaks.",
    category: "Repiping",
    readMinutes: 7,
    date: d(16),
    imageKey: "pipe-repair",
    relatedService: "pipe-repair",
    sections: [
      {
        h: "One leak is an incident, three is a pattern",
        p: [
          "A single pinhole in otherwise healthy copper is a repair. When a system produces multiple leaks in a short period, the pipe is telling you the failure mechanism is systemic — water chemistry, velocity erosion or pressure — and it will keep going.",
          "Each individual repair is cheap. Each drywall opening, paint match and displacement is not, and those costs compound quietly.",
        ],
      },
      {
        h: "What providers look at",
        p: [
          "Pipe material and age, static pressure, visible corrosion, water quality, the leak history and the condition of removed pipe sections. Cut-open pipe is remarkably informative: wall thickness tells you how much life is genuinely left.",
          "providers show you those sections. Evidence beats opinion.",
        ],
      },
      {
        h: "What a repipe involves",
        p: [
          "Planned routing to minimize wall openings, water restored each night, permits pulled where required, full pressure testing, and coordinated drywall patching. Most single family homes finish in a matter of days.",
          "PEX-A is our usual recommendation for concealed runs because it tolerates our water chemistry, resists scale and needs fewer in-wall joints. Copper remains excellent for exposed work.",
        ],
      },
    ],
    takeaways: [
      "Repeated pinholes indicate a systemic pipe problem",
      "Restoration costs often exceed the plumbing cost",
      "Removed pipe sections reveal true remaining life",
      "Most residential repipes complete within days",
    ],
  },
  {
    slug: "garbage-disposal-troubleshooting",
    title: "Garbage Disposal Troubleshooting You Can Do Safely",
    excerpt: "Humming, silence or leaking — what each symptom means and when to stop.",
    category: "Kitchen",
    readMinutes: 5,
    date: d(17),
    imageKey: "sink-installation",
    relatedService: "sink-installation",
    sections: [
      {
        h: "It hums but does not turn",
        p: [
          "The motor has power but the impeller plate is jammed. Turn the switch off, use the hex wrench in the bottom socket to rotate the plate back and forth until it moves freely, remove whatever caused the jam with tongs, then press the red reset button underneath.",
          "Never put your hand inside a disposal, even with the power off at the switch.",
        ],
      },
      {
        h: "It does nothing at all",
        p: [
          "Press the reset button first. If that does not restore it, check the breaker. If both are fine and the unit is still dead, the motor or switch has failed and replacement is usually more economical than repair.",
          "Units older than about ten years rarely justify component-level repair.",
        ],
      },
      {
        h: "It leaks",
        p: [
          "Where it leaks tells you what failed. From the sink flange at the top, the plumber's putty seal has failed and it needs re-setting. From the dishwasher hose connection, the clamp or hose is at fault. From the very bottom of the housing, the internal seal has gone and the unit needs replacing.",
          "Leaks into the cabinet damage particleboard quickly, so do not defer these.",
        ],
      },
    ],
    takeaways: [
      "Humming means jammed; use the hex wrench, never your hand",
      "Always try the reset button before assuming failure",
      "Bottom-of-housing leaks mean replacement",
      "Ten-year-old units rarely warrant repair",
    ],
  },
  {
    slug: "buying-a-home-plumbing-inspection",
    title: "Buying A Home? Get These Plumbing Checks First",
    excerpt: "The plumbing due diligence a standard home inspection does not include.",
    category: "Home Buying",
    readMinutes: 6,
    date: d(18),
    imageKey: "camera-inspection",
    relatedService: "camera-inspection",
    sections: [
      {
        h: "What a standard inspection misses",
        p: [
          "General home inspectors run fixtures, look under sinks and note visible issues. They do not camera the sewer lateral, pressure test gas lines, perform electronic leak detection or evaluate the true condition of concealed supply piping.",
          "Those four items are precisely where the expensive surprises live in Orange County housing.",
        ],
      },
      {
        h: "The four checks worth paying for",
        p: [
          "A sewer camera inspection on any pre-1980 property. A static pressure reading and regulator check. A water heater age and condition assessment. A supply piping material survey — identifying galvanized still in service, or copper old enough to be nearing pinhole territory.",
          "Together they cost a fraction of a percent of the purchase price and routinely change negotiations.",
        ],
      },
      {
        h: "Using the findings",
        p: [
          "Recorded footage and written reports are negotiating instruments. A documented root intrusion at a specific distance is a concrete repair cost, not an opinion, and sellers respond very differently to evidence.",
          "Even where you proceed regardless, you close knowing your first-year maintenance budget instead of discovering it at 11 p.m. in month three.",
        ],
      },
    ],
    takeaways: [
      "Standard inspections exclude the sewer lateral",
      "Camera any pre-1980 property before closing",
      "Check static pressure and water heater age",
      "Documented findings are negotiation leverage",
    ],
  },
  {
    slug: "why-drains-smell",
    title: "Why Your Drains Smell (And How To Stop It)",
    excerpt: "Sewer odor is always a sign of something specific. Here is how to identify which.",
    category: "Drains",
    readMinutes: 5,
    date: d(19),
    imageKey: "drain-cleaning",
    relatedService: "drain-cleaning",
    sections: [
      {
        h: "Dry traps",
        p: [
          "Every drain has a P-trap holding water that blocks sewer gas. Guest bathrooms, floor drains and rarely used fixtures evaporate dry, and the smell arrives within weeks.",
          "The fix is free: run water in every fixture for thirty seconds once a month. For floor drains that dry out repeatedly, a small amount of mineral oil on the water slows evaporation dramatically.",
        ],
      },
      {
        h: "Biofilm",
        p: [
          "A musty or sour smell that is worse in a kitchen or bathroom sink is usually biofilm coating the inside of the tailpiece and overflow. It is organic build-up, not sewer gas.",
          "Clean the overflow channel and treat the drain with an enzyme product for a few consecutive nights. Bleach kills surface bacteria but does not remove the film feeding them.",
        ],
      },
      {
        h: "Venting and structural problems",
        p: [
          "If odour persists with wet traps and clean drains, suspect the vent system. A blocked roof vent causes traps to siphon empty every time a fixture drains, and a broken vent inside a wall lets gas into the building directly.",
          "Odour outdoors near a cleanout or a lawn, meanwhile, usually means a failing lateral — and that is a camera inspection, not an air freshener.",
        ],
      },
    ],
    takeaways: [
      "Unused fixtures dry out their traps within weeks",
      "Musty sink smells are usually biofilm, not sewer gas",
      "Persistent odour with wet traps suggests a vent problem",
      "Outdoor sewer smell means inspect the lateral",
    ],
  },
];

export const POST_MAP = new Map(POSTS.map((p) => [p.slug, p]));
