import type { Location } from "@/data/locations";

export interface LocalInsightPoint {
  title: string;
  desc: string;
}

export interface ServiceLocalInsight {
  eyebrow: string;
  heading: string;
  description: string;
  points: LocalInsightPoint[];
  cardTitle: string;
  cardDescription: string;
  cardHighlights: string[];
}

export function getServiceLocalInsights(serviceSlug: string, location: Location): ServiceLocalInsight {
  const locName = location.name;
  const housingEra = location.housingEra;

  switch (serviceSlug) {
    case "drain-cleaning":
      return {
        eyebrow: `Drain & Sewer Conditions in ${locName}`,
        heading: `Why Drains Back Up in ${locName} Homes`,
        description: `Homes across ${locName} feature ${housingEra}. Over decades of use, these specific drain infrastructure factors commonly trigger recurring backups:`,
        points: [
          {
            title: "Mature Tree Root Infiltration",
            desc: `Aggressive root systems from established neighborhood trees seek moisture and penetrate clay or cast-iron sewer joints, creating recurrent main line blockages across ${locName}.`,
          },
          {
            title: "Aging Cast Iron & Galvanized Scale",
            desc: `Older kitchen and laundry branch lines develop heavy calcified grease and mineral scale, choking a 2-inch pipe down to a pencil-thin opening.`,
          },
          {
            title: "HD Video Camera Diagnostics",
            desc: `Instead of guessing where the blockage sits, our self-leveling sewer cameras inspect the pipe interior in real time to locate bellies, cracks, or heavy root intrusion.`,
          },
          {
            title: "Hydro Jetting vs. Mechanical Snaking",
            desc: `While standard cabling punches a hole through soft clogs, high-pressure hydro jetting scours the interior pipe walls clean of grease, sludge, and accumulated sediment.`,
          },
          {
            title: "Preventative Cleanout Access",
            desc: `Many older slab homes in ${locName} lack accessible exterior ground-level cleanouts. We install code-compliant dual cleanouts for clean, non-invasive maintenance.`,
          },
        ],
        cardTitle: `Preventing Drain Emergencies in ${locName}`,
        cardDescription: `Harsh store-bought chemical drain openers eat away at older metallic pipes without clearing deep obstructions. Visoso Plumbing clears ${locName} drains mechanically and safely with upfront flat rates and guaranteed results.`,
        cardHighlights: [
          "HD sewer camera inspection",
          "Motorized auger & hydro jetting",
          "Exterior cleanout installations",
          "Safe for older pipes (no chemicals)",
        ],
      };

    case "emergency-plumbing":
      return {
        eyebrow: `Emergency Preparedness in ${locName}`,
        heading: `Urgent Plumbing Failures & Immediate Action in ${locName}`,
        description: `Plumbing emergencies can cause thousands in structural and drywall damage within minutes. Here is how to protect your ${locName} home while our emergency truck is dispatched:`,
        points: [
          {
            title: "Main Water Shutoff Location",
            desc: `In most single-story slab properties in ${locName}, your main water shutoff is located near the front exterior hose bib or in a ground box by the street meter. Turn it clockwise to halt incoming water.`,
          },
          {
            title: "Isolating Active Slab & Wall Leaks",
            desc: `If you hear hissing behind drywall or notice hot floor tiles, close the cold-water inlet valve above your water heater and switch off your water heater breaker immediately.`,
          },
          {
            title: "Stop Drain Use During Backups",
            desc: `If sewage or wastewater bubbles up into showers or ground-floor tubs, discontinue running all faucets, laundry machines, and dishwashers to prevent cross-room flooding.`,
          },
          {
            title: "Natural Gas Odor Protocol",
            desc: `If you detect a sulfur or rotten-egg odor near a water heater or appliance, do not operate light switches. Evacuate the property immediately and call our emergency line from outside.`,
          },
          {
            title: "Rapid Local Dispatch",
            desc: `Dispatched directly from our local base, our fully stocked service vans arrive quickly throughout ${locName} equipped with shutoffs, fittings, and containment equipment.`,
          },
        ],
        cardTitle: `What to Expect During a ${locName} Emergency Call`,
        cardDescription: `We answer 24/7 with a live technician—no answering services or delayed callbacks. We stabilize active flooding first, provide an upfront flat-rate price, and perform code-compliant repairs with a full workmanship warranty.`,
        cardHighlights: [
          "24/7 live technician response",
          "Fast local dispatch to your door",
          "Upfront pricing before work begins",
          "Licensed, insured & bilingual team",
        ],
      };

    case "water-heater-repair":
    case "water-heater-installation":
      return {
        eyebrow: `Water Heater Lifespan in ${locName}`,
        heading: `Hard Water & Water Heater Maintenance in ${locName}`,
        description: `Homes in ${locName} range across ${housingEra}. Regional water hardness and seismic codes heavily influence how your water heater performs:`,
        points: [
          {
            title: "Mineral Scale & Sediment Buildup",
            desc: `Orange County's mineral-rich municipal water creates calcium carbonate buildup at the tank base, causing popping noises, reduced heating efficiency, and premature element burnouts.`,
          },
          {
            title: "Sacrificial Anode Rod Depletion",
            desc: `Without periodic anode rod replacement, harsh minerals corrode the inner tank lining, turning a minor maintenance issue into an unrepairable tank failure within 8 to 10 years.`,
          },
          {
            title: "California Seismic Safety Strapping",
            desc: `California plumbing code strictly mandates double seismic strapping (upper and lower third) and flexible utility connections to safeguard ${locName} homes during earthquake tremors.`,
          },
          {
            title: "Thermal Expansion Tank Protection",
            desc: `Closed municipal water systems trap expanding heated water. Installing an expansion tank protects your plumbing valves and prevents the T&P relief valve from leaking.`,
          },
          {
            title: "High-Efficiency Tankless Conversions",
            desc: `Upgrading to on-demand tankless units in older ${locName} homes requires proper gas line capacity sizing, dedicated electrical outlets, and direct-venting configurations.`,
          },
        ],
        cardTitle: `Reliable Hot Water in ${locName}`,
        cardDescription: `Whether your tank is leaking, producing tepid water, or due for replacement, Visoso Plumbing carries top-rated Rheem and Bradford White systems for fast, compliant installations.`,
        cardHighlights: [
          "Same-day tank replacements",
          "Seismic strapping & code compliance",
          "High-efficiency tankless options",
          "Full factory & workmanship warranty",
        ],
      };

    case "leak-detection":
    case "pipe-repair":
      return {
        eyebrow: `Pipe & Foundation Conditions in ${locName}`,
        heading: `Slab Leaks & Aging Supply Lines in ${locName}`,
        description: `With construction ranging across ${housingEra}, supply piping throughout ${locName} faces specific age and foundation stresses:`,
        points: [
          {
            title: "Under-Slab Copper Pinhole Leaks",
            desc: `Slab-on-grade homes in ${locName} often have original soft copper lines buried in concrete that develop pinhole leaks from soil chemistry, vibration, and hot water turbulence.`,
          },
          {
            title: "Non-Destructive Electronic Detection",
            desc: `Using sensitive acoustic ground microphones, thermal imaging, and pressure decay testing, we trace under-slab leaks precisely without jackhammering your flooring.`,
          },
          {
            title: "Internal Galvanized Pipe Corrosion",
            desc: `Homes built before 1970 often retain original galvanized supply pipes that rust internally, leading to restricted water volume, discolored water, and frequent valve clogs.`,
          },
          {
            title: "Overhead PEX Rerouting",
            desc: `Instead of tearing up expensive tile or hardwood flooring to patch a buried copper line, we routinely install clean overhead PEX bypasses through attics and interior walls.`,
          },
          {
            title: "Municipal Pressure Fluctuations",
            desc: `High static water pressure from street mains stresses residential joints. We test static pressure on every visit and install calibrated pressure regulator valves (PRV).`,
          },
        ],
        cardTitle: `Protect Your ${locName} Home from Water Damage`,
        cardDescription: `A warm spot on the floor, an unexplained spinning meter, or a sudden spike in your water bill points to a hidden leak. We diagnose and repair piping cleanly with upfront options.`,
        cardHighlights: [
          "Non-invasive acoustic leak detection",
          "Overhead PEX rerouting solutions",
          "Water pressure regulator testing",
          "Minimal drywall & flooring disruption",
        ],
      };

    case "sewer-line-repair":
    case "camera-inspection":
      return {
        eyebrow: `Sewer Infrastructure in ${locName}`,
        heading: `Underground Sewer Lateral Challenges in ${locName}`,
        description: `Residential sewer laterals in ${locName} connect private properties to municipal mains across ${housingEra}:`,
        points: [
          {
            title: "Clay Pipe Joint Vulnerabilities",
            desc: `Vitrified clay pipes common in older tracts have bell-and-spigot joints that shift over time due to ground settling, allowing roots and soil to penetrate the line.`,
          },
          {
            title: "Cast Iron Channeling & Bottom Rot",
            desc: `Decades of acidic wastewater corrode the bottom of cast-iron sewer laterals, creating jagged channels that snag solids and toilet paper.`,
          },
          {
            title: "High-Definition Video Mapping",
            desc: `Our camera inspection equipment records high-resolution color footage with digital sonde tracking, revealing the exact depth and location of damaged pipe sections.`,
          },
          {
            title: "Trenchless & Targeted Repairs",
            desc: `Whenever structural conditions permit, we offer trenchless pipe rehabilitation and spot repairs to avoid digging up landscaped yards, driveways, or sidewalks.`,
          },
          {
            title: "Local Municipal Connection Standards",
            desc: `We ensure all sewer lateral cleanouts and repairs comply with city public works codes and property-line connection standards across ${locName}.`,
          },
        ],
        cardTitle: `Trusted Sewer Solutions in ${locName}`,
        cardDescription: `Don't guess what is happening underground. Our video inspections give you indisputable visual evidence of your sewer line's condition before any major repair starts.`,
        cardHighlights: [
          "Full-color video recording provided",
          "Digital sonde depth mapping",
          "Trenchless repair options",
          "Code-compliant city connections",
        ],
      };

    case "gas-line-repair":
      return {
        eyebrow: `Gas Safety in ${locName}`,
        heading: `Residential Gas Line Safety & Upgrades in ${locName}`,
        description: `Gas lines in ${locName} power water heaters, furnaces, and kitchens across ${housingEra}:`,
        points: [
          {
            title: "Corroded Exterior Gas Risers",
            desc: `Outdoor meter manifolds and yard lines exposed to soil moisture and lawn irrigation can suffer exterior rust and valve seizure over the years.`,
          },
          {
            title: "Seismic Earthquake Shutoff Valves",
            desc: `Installing an automatic seismic earthquake shutoff valve on your main gas meter protects your family and home by stopping gas flow during strong seismic shocks.`,
          },
          {
            title: "Appliance Gas Line Sizing",
            desc: `Upgrading to commercial-style kitchen ranges, pool heaters, or high-capacity tankless water heaters frequently requires upgrading branch pipe capacity.`,
          },
          {
            title: "Electronic Gas Leak Detection",
            desc: `We employ combustible gas sniffers and pressure drop gauges to identify microscopic gas leaks behind appliances and inside wall cavities safely.`,
          },
          {
            title: "Permits & Safety Inspections",
            desc: `All permanent gas line modifications are pressure-tested and completed in full compliance with local building safety standards.`,
          },
        ],
        cardTitle: `Safe, Licensed Gas Plumbing in ${locName}`,
        cardDescription: `Gas repairs require certified professionals. Visoso Plumbing ensures your gas supply lines, shutoff valves, and appliance connections are airtight and fully compliant.`,
        cardHighlights: [
          "Combustible gas leak sniffing",
          "Seismic automatic shutoff valves",
          "Appliance hookups & line extensions",
          "City code & safety compliance",
        ],
      };

    default:
      // Fallback for general residential plumbing / plumbing repair
      return {
        eyebrow: `Local Plumbing Expertise in ${locName}`,
        heading: `Common Plumbing Repair Needs in ${locName}`,
        description: `Homes here range across ${housingEra}. Our local plumbers frequently diagnose and resolve these recurring residential plumbing challenges:`,
        points: location.localIssues.map((issue) => {
          const split = issue.split(" in ");
          const title = split[0] || issue;
          return {
            title,
            desc: issue,
          };
        }),
        cardTitle: `Why Homeowners in ${locName} Call Visoso`,
        cardDescription: `Our plumbers provide fast, honest residential plumbing service across the area. We always offer upfront pricing before work begins, our team respects your home by protecting floors, and we warranty our workmanship.`,
        cardHighlights: [
          "Upfront flat-rate pricing",
          "Clean, stocked service trucks",
          "English and Spanish service",
          "Workmanship warranty",
        ],
      };
  }
}
