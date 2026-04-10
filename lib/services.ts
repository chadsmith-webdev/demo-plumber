export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  headline: string;
  tagline: string;
  description: string;
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
  faq: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumber",
    name: "Emergency Plumbing",
    shortName: "Emergency",
    icon: "Zap",
    color: "#DC2626",
    headline: "24/7 Emergency Plumber in Northwest Arkansas",
    tagline: "When a pipe bursts at 2am, we answer.",
    description:
      "Burst pipes, sewage backups, no hot water — plumbing emergencies don't wait for business hours. Ozark Plumbing Co. dispatches a licensed plumber within minutes, 24 hours a day, 365 days a year across all of NW Arkansas.",
    benefits: [
      "Average 45-minute response time across NW Arkansas",
      "Fully stocked service vans — no waiting for parts",
      "Upfront pricing before any work begins",
      "Licensed, insured technicians on every emergency call",
    ],
    metaTitle: "Emergency Plumber Near Me | 24/7 NW Arkansas | Ozark Plumbing Co.",
    metaDescription:
      "Emergency plumber in Springdale, Rogers, Bentonville & Fayetteville, AR. 24/7 response, 45-min avg arrival. Burst pipes, sewage backups, no hot water. Call (479) 555-0182.",
    image: "/images/emergency.jpg",
    faq: [
      {
        q: "What counts as a plumbing emergency?",
        a: "Burst or frozen pipes, sewage backups, active flooding, no hot water in winter, overflowing toilets, and suspected gas line leaks are all plumbing emergencies. If in doubt, call — we'd rather assess a non-emergency than let water damage spread through your home.",
      },
      {
        q: "How fast can you arrive for a plumbing emergency near me in NW Arkansas?",
        a: "Our average response time across Northwest Arkansas is under 45 minutes. From our Springdale base, we reach Rogers and Fayetteville in 20–30 minutes, Bentonville in 30–40 minutes, and Bella Vista in 45–55 minutes under normal conditions.",
      },
      {
        q: "Do you charge extra for emergency plumbing at night or on weekends?",
        a: "We charge a transparent after-hours service fee that we'll quote before dispatching. There are no surprise additions when the invoice arrives — the price we quote is the price you pay.",
      },
      {
        q: "What should I do while waiting for an emergency plumber?",
        a: "First, locate your main water shutoff valve and turn it off if there's active flooding. For a water heater issue, set the thermostat to 'Pilot' mode. If you smell gas, leave the building immediately and call your gas company before calling us.",
      },
      {
        q: "Do you handle plumbing emergencies in commercial buildings?",
        a: "Yes — we service both residential and commercial properties across NW Arkansas. Call the same emergency number; we'll dispatch the right crew with commercial-grade equipment.",
      },
    ],
  },
  {
    slug: "water-heater",
    name: "Water Heater Services",
    shortName: "Water Heaters",
    icon: "Flame",
    color: "#C8732A",
    headline: "Water Heater Installation & Replacement in NW Arkansas",
    tagline: "Tank or tankless — installed right, the first time.",
    description:
      "From tankless upgrades to traditional tank replacement, Ozark Plumbing Co. handles all major water heater brands and configurations. We stock the most common units for same-day installation across Rogers, Bentonville, Fayetteville, Springdale, and Bella Vista.",
    benefits: [
      "Same-day installation in most cases",
      "Tank and tankless water heater specialists",
      "Energy-efficient upgrades that reduce utility bills 20–30%",
      "10-year manufacturer warranties on select models",
    ],
    metaTitle: "Water Heater Replacement Rogers AR | Tank & Tankless | Ozark Plumbing Co.",
    metaDescription:
      "Water heater installation & replacement in Rogers, Bentonville, Fayetteville & Springdale, AR. Same-day service. Tank & tankless specialists. Call (479) 555-0182.",
    image: "/images/water-heater.jpg",
    faq: [
      {
        q: "How long does a water heater last?",
        a: "Traditional tank water heaters last 8–12 years. Tankless water heaters last 15–20+ years with annual maintenance. If your unit is over 10 years old and showing symptoms (rusty water, rumbling, inconsistent temperature), replacement is almost always more cost-effective than continued repair.",
      },
      {
        q: "Should I get a tankless or traditional water heater?",
        a: "Tankless heaters cost more upfront but deliver unlimited hot water on demand and typically cost 20–30% less to operate annually. For families of 3 or more, the efficiency payback period is 5–7 years. We'll walk you through both options with real numbers during a free assessment.",
      },
      {
        q: "What water heater brands do you install?",
        a: "We install and service Rheem, Bradford White, A.O. Smith, Rinnai, Navien, and Noritz — the most reliable, warrantied brands available in the NW Arkansas market.",
      },
      {
        q: "How long does water heater installation take?",
        a: "Standard tank-to-tank replacement typically takes 2–3 hours. Upgrading to a tankless system can take 4–6 hours depending on venting and gas line modifications required.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    shortName: "Drain Cleaning",
    icon: "Droplets",
    color: "#0EA5E9",
    headline: "Professional Drain Cleaning in NW Arkansas",
    tagline: "Slow drains. Total blockages. We clear them all.",
    description:
      "From persistent kitchen clogs to whole-house drain blockages, Ozark Plumbing Co. uses professional hydro-jetting and camera inspection to fully restore your drain lines — not just poke a temporary hole through the problem.",
    benefits: [
      "Camera inspection to identify the root cause — literally",
      "Hydro-jet cleaning at 4,000 PSI for complete line clearing",
      "Same-day service available throughout NW Arkansas",
      "Grease, tree roots, mineral buildup — we clear it all",
    ],
    metaTitle: "Drain Cleaning Fayetteville AR | Hydro-Jet Service | Ozark Plumbing Co.",
    metaDescription:
      "Professional drain cleaning in Fayetteville, Rogers, Bentonville & Springdale, AR. Hydro-jetting & camera inspection. Same-day service available. Call (479) 555-0182.",
    image: "/images/drain-cleaning.jpg",
    faq: [
      {
        q: "Why do my drains keep clogging after I snake them myself?",
        a: "Consumer snake tools punch a temporary hole through a clog without clearing pipe wall buildup. Recurring clogs usually signal a deeper problem: tree root intrusion, grease coating on pipe walls, or a structural issue like an offset joint. Camera inspection identifies the real cause.",
      },
      {
        q: "What's the difference between snaking and hydro-jetting?",
        a: "Snaking mechanically breaks through a clog. Hydro-jetting uses 4,000 PSI water pressure to scour the entire pipe interior, removing all grease, scale, and debris. For recurring problems or slow drains throughout the house, hydro-jetting provides a dramatically more thorough result.",
      },
      {
        q: "How much does drain cleaning cost in NW Arkansas?",
        a: "Basic drain cleaning typically starts around $150–$300. Hydro-jetting main lines runs $400–$700 depending on line length and access. We provide fixed pricing upfront — no hourly surprises.",
      },
    ],
  },
  {
    slug: "sewer-line",
    name: "Sewer Line Repair",
    shortName: "Sewer Line",
    icon: "ArrowDownToLine",
    color: "#8B5CF6",
    headline: "Sewer Line Repair & Replacement in NW Arkansas",
    tagline: "Trenchless options available. Your yard stays intact.",
    description:
      "Sewer line failure is among the most disruptive plumbing problems. Ozark Plumbing Co. uses video camera inspection, trenchless pipe rehabilitation, and precision excavation to restore your sewer system with minimal disruption to your property.",
    benefits: [
      "Video camera inspection before any digging begins",
      "Trenchless CIPP pipe lining to restore old lines",
      "Full sewer line replacement when needed",
      "Permitted and inspected — code-compliant every time",
    ],
    metaTitle: "Sewer Line Repair Bentonville AR | Trenchless Options | Ozark Plumbing Co.",
    metaDescription:
      "Sewer line repair & replacement in NW Arkansas. Camera inspection, trenchless lining, full replacement. Serving Bentonville, Rogers, Springdale, Fayetteville. Call (479) 555-0182.",
    image: "/images/emergency.jpg",
    faq: [
      {
        q: "How do I know if I have a sewer line problem?",
        a: "Warning signs include multiple drains backing up simultaneously, gurgling sounds from your toilet after running a sink, sewage odor in the yard or basement, or an unusually lush and green strip of grass (indicating a leaking sewer fertilizing the ground above it).",
      },
      {
        q: "What is trenchless sewer repair and do I qualify?",
        a: "Trenchless methods — pipe lining (CIPP) and pipe bursting — let us replace or restore sewer lines with minimal excavation. A flexible liner is pulled through your existing pipe and cured in place, creating a new pipe within the old one. This works for most residential sewer lines in good-enough structural condition.",
      },
      {
        q: "How long does sewer line repair take?",
        a: "Trenchless repairs typically complete in 1 day. Traditional excavation and replacement can take 2–4 days depending on depth, length, and soil conditions. We coordinate with the city for permits and inspections.",
      },
    ],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortName: "Leak Detection",
    icon: "ScanSearch",
    color: "#10B981",
    headline: "Precision Leak Detection Across NW Arkansas",
    tagline: "Find hidden leaks before the damage becomes catastrophic.",
    description:
      "A slow hidden leak can cause thousands of dollars in structural damage before it becomes visible. Ozark Plumbing Co. uses acoustic listening equipment and pressure testing to pinpoint leaks inside walls, under slabs, and underground — with surgical precision.",
    benefits: [
      "Non-invasive acoustic and electronic detection",
      "Thermal imaging for under-slab and in-wall leaks",
      "Precise location means minimal wall or floor damage",
      "Same-day leak detection available",
    ],
    metaTitle: "Leak Detection NW Arkansas | Under-Slab & Hidden Leaks | Ozark Plumbing Co.",
    metaDescription:
      "Professional leak detection in Rogers, Bentonville, Fayetteville & Springdale, AR. Non-invasive, pinpoint accurate. Protect your home from hidden water damage. Call (479) 555-0182.",
    image: "/images/team.jpg",
    faq: [
      {
        q: "How can I tell if I have a hidden water leak?",
        a: "Signs include a water bill that's suddenly higher without increased usage, warm spots on your floor (under-slab hot water leak), peeling paint or bubbling drywall, persistent mold odor, or your water meter spinning when all fixtures are off.",
      },
      {
        q: "Can you detect leaks under concrete slabs without breaking the floor?",
        a: "Yes. We use electronic acoustic listening devices and thermal imaging cameras to locate under-slab leaks with precision. We only cut concrete once we know exactly where the leak is — minimizing damage and cost.",
      },
      {
        q: "How accurate is your leak detection?",
        a: "Our electronic detection equipment can locate leaks within 12 inches in most residential settings. Combined with pressure testing, we achieve location accuracy that minimizes unnecessary demolition and saves on repair costs.",
      },
    ],
  },
  {
    slug: "repiping",
    name: "Whole-Home Repiping",
    shortName: "Repiping",
    icon: "Replace",
    color: "#F59E0B",
    headline: "Whole-Home Repiping in NW Arkansas",
    tagline: "Old galvanized pipes destroying your water quality? We fix that.",
    description:
      "Older NW Arkansas homes with galvanized, polybutylene, or lead pipes face chronic low pressure, rust-tainted water, and recurring leaks. Ozark Plumbing Co. replaces entire home water systems with modern copper or PEX piping — improving pressure, water quality, and home value.",
    benefits: [
      "Full copper or PEX pipe replacement throughout the home",
      "Dramatically improved water pressure from day one",
      "Eliminates rusty, discolored, or off-tasting water",
      "Licensed, inspected, and backed by a 5-year labor warranty",
    ],
    metaTitle: "Whole-Home Repiping Bentonville AR | Copper & PEX | Ozark Plumbing Co.",
    metaDescription:
      "Whole-home repiping in NW Arkansas. Replace galvanized, lead or polybutylene pipes with copper or PEX. Serving Springdale, Bentonville, Rogers & Fayetteville. Call (479) 555-0182.",
    image: "/images/water-heater.jpg",
    faq: [
      {
        q: "How long does whole-home repiping take?",
        a: "A typical 2,000 sq ft home takes 2–3 days. We work systematically room by room, minimizing the duration you're without running water each day. Most families remain in the home throughout the project.",
      },
      {
        q: "Should I choose copper or PEX piping?",
        a: "Copper is the proven gold standard: long-lasting (50+ years), naturally antimicrobial, and widely compatible. PEX is more flexible, freeze-resistant, quieter, and costs 20–30% less to install. We'll recommend the best option based on your home's layout, water chemistry, and your budget.",
      },
      {
        q: "Does repiping require permits?",
        a: "Yes — whole-home repiping requires a plumbing permit from the city or county. We handle all permit acquisition and schedule the required inspections. You get a code-compliant, inspected system every time.",
      },
    ],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
