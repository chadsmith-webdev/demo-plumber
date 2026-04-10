export type Area = {
  slug: string;
  name: string;
  state: string;
  zip: string[];
  county: string;
  population: string;
  geo: { lat: number; lng: number };
  distance: string;
  landmarks: string[];
  description: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  faq: { q: string; a: string }[];
  nearbyCity: string;
};

export const AREAS: Area[] = [
  {
    slug: "rogers",
    name: "Rogers",
    state: "AR",
    zip: ["72756", "72758"],
    county: "Benton County",
    population: "68,000+",
    geo: { lat: 36.332, lng: -94.1185 },
    distance: "14 miles from Springdale",
    landmarks: ["Pinnacle Hills Promenade", "Lake Leatherwood City Park", "Rogers Heritage Museum"],
    description:
      "Trusted local plumber serving Rogers, AR. Emergency plumbing, water heater replacement, drain cleaning, and more — available 24/7.",
    headline: "Plumber in Rogers, AR — 24/7 Service",
    intro:
      "Rogers is one of NW Arkansas's fastest-growing cities, and Ozark Plumbing Co. has been keeping its homes and businesses running since 2009. From the Pinnacle Hills corridor to the historic downtown district, we know every neighborhood — and we're ready around the clock.",
    metaTitle: "Plumber Rogers AR | Emergency Plumbing & Water Heaters | Ozark Plumbing Co.",
    metaDescription:
      "Need a plumber in Rogers, AR? Ozark Plumbing Co. offers 24/7 emergency plumbing, water heater replacement, drain cleaning & more. Licensed & insured. Call (479) 555-0182.",
    keywords: ["plumber Rogers AR", "emergency plumber Rogers", "water heater Rogers AR", "drain cleaning Rogers AR"],
    faq: [
      {
        q: "Do you offer emergency plumbing in Rogers, AR?",
        a: "Yes — Ozark Plumbing Co. provides 24/7 emergency plumbing throughout all of Rogers, AR. We maintain an average response time of under 45 minutes across Benton County, including the Pinnacle Hills and Pleasant Grove areas.",
      },
      {
        q: "How much does water heater replacement cost in Rogers, AR?",
        a: "Water heater replacement in Rogers typically ranges from $800–$1,800 depending on unit type (traditional tank vs. tankless) and installation complexity. We provide free, no-pressure estimates before any work begins.",
      },
      {
        q: "Which Rogers neighborhoods do you serve?",
        a: "We serve every Rogers neighborhood: Pinnacle Hills, Pleasant Grove, Scotch & Soda, New City Road, downtown Rogers, and every surrounding community within our 14-mile service radius from Springdale.",
      },
      {
        q: "Can you fix a burst pipe at night in Rogers?",
        a: "Absolutely. We run a true 24/7 emergency line — not an answering service. When you call after hours, a licensed plumber answers and we dispatch immediately. Most Rogers calls are reached in 30–40 minutes.",
      },
    ],
    nearbyCity: "Bentonville",
  },
  {
    slug: "bentonville",
    name: "Bentonville",
    state: "AR",
    zip: ["72712", "72713"],
    county: "Benton County",
    population: "60,000+",
    geo: { lat: 36.3729, lng: -94.2088 },
    distance: "18 miles from Springdale",
    landmarks: ["Crystal Bridges Museum of American Art", "Downtown Bentonville Square", "Walmart Home Office Campus"],
    description:
      "Full-service plumber in Bentonville, AR. Serving Benton County's tech hub with emergency plumbing, water heater service, drain cleaning, and sewer repair.",
    headline: "Plumber in Bentonville, AR — Same-Day & Emergency",
    intro:
      "Bentonville has grown from a small town into a world-class city — and your plumbing needs have grown with it. Ozark Plumbing Co. serves Bentonville homes, office complexes, and retail properties with the same licensed, responsive service we've delivered across NW Arkansas for over 15 years.",
    metaTitle: "Plumber Bentonville AR | Emergency Plumber | Water Heater | Ozark Plumbing Co.",
    metaDescription:
      "Ozark Plumbing Co. serves Bentonville, AR with 24/7 emergency plumbing, water heater installation, drain cleaning & sewer repair. Same-day service. Call (479) 555-0182.",
    keywords: [
      "plumber Bentonville AR",
      "emergency plumber Bentonville",
      "water heater Bentonville,AR",
      "drain cleaning Bentonville",
    ],
    faq: [
      {
        q: "Do you offer emergency plumbing in Bentonville, AR?",
        a: "Yes — 24/7 emergency plumbing throughout Bentonville with an average 45-minute response time. We cover all Bentonville zip codes (72712, 72713) including the Orchards subdivision, Cobblestone, and the Walmart campus vicinity.",
      },
      {
        q: "Can you replace a water heater in Bentonville the same day?",
        a: "In most cases, yes. Our service vans carry the most common tank sizes and select tankless models. For standard replacements in Bentonville, same-day installation is available Monday through Saturday.",
      },
      {
        q: "Do you serve new construction neighborhoods in Bentonville?",
        a: "Absolutely. We work in Bentonville's newer developments — including the Gateway and Pinnacle Heights areas — as well as established neighborhoods near the downtown square.",
      },
    ],
    nearbyCity: "Rogers",
  },
  {
    slug: "fayetteville",
    name: "Fayetteville",
    state: "AR",
    zip: ["72701", "72703", "72704"],
    county: "Washington County",
    population: "100,000+",
    geo: { lat: 36.0625, lng: -94.1574 },
    distance: "15 miles from Springdale",
    landmarks: ["University of Arkansas campus", "Dickson Street Entertainment District", "Walker Park"],
    description:
      "Expert plumber in Fayetteville, AR. Serving U of A neighborhoods, historic homes, and new builds with same-day and emergency plumbing service.",
    headline: "Plumber in Fayetteville, AR — Emergency & Scheduled",
    intro:
      "Fayetteville's blend of historic homes, college neighborhoods, and rapid new construction creates unique plumbing demands. Ozark Plumbing Co. is Washington County's go-to plumber — experienced with aging galvanized systems in older homes and modern PEX installations in new builds alike.",
    metaTitle: "Plumber Fayetteville AR | 24/7 Emergency Plumber | Drain Cleaning | Ozark Plumbing Co.",
    metaDescription:
      "Expert plumber in Fayetteville, AR. Emergency calls, drain cleaning, water heater replacement & sewer repair. Serving U of A neighborhoods and beyond. Call (479) 555-0182.",
    keywords: [
      "plumber Fayetteville AR",
      "emergency plumber Fayetteville",
      "drain cleaning Fayetteville",
      "plumber near me Fayetteville",
    ],
    faq: [
      {
        q: "Do you serve the University of Arkansas area in Fayetteville?",
        a: "Yes — we serve the entire Fayetteville metro including the UA district, Dickson Street corridor, Hillcrest, Leverett, Wilson Park, and all surrounding neighborhoods across Washington County.",
      },
      {
        q: "Do you repair older galvanized pipes in historic Fayetteville homes?",
        a: "Absolutely. Many Fayetteville homes built before 1970 have aging galvanized or lead pipes. We specialize in repiping assessments and whole-home copper or PEX replacement to restore water quality and pressure.",
      },
      {
        q: "How quickly can you respond to a plumbing emergency in Fayetteville?",
        a: "Most Fayetteville emergency calls are reached within 45–60 minutes of your call, 24 hours a day. During off-peak hours, response can be as fast as 30 minutes from our Springdale base.",
      },
    ],
    nearbyCity: "Springdale",
  },
  {
    slug: "springdale",
    name: "Springdale",
    state: "AR",
    zip: ["72762", "72764", "72765"],
    county: "Washington County",
    population: "90,000+",
    geo: { lat: 36.1867, lng: -94.1288 },
    distance: "Home base",
    landmarks: ["Shiloh Museum of Ozark History", "Murphy Park", "Emma Avenue Arts District"],
    description:
      "Springdale's hometown plumber since 2009 — fastest response times in Washington County, 24/7 emergency service, and deep community roots.",
    headline: "Plumber in Springdale, AR — Your Local Plumber Since 2009",
    intro:
      "Ozark Plumbing Co. was born in Springdale — and 15+ years later, it's still our home. We know this city's streets, its neighborhoods, and the specific plumbing challenges that come with Washington County's soil, water, and climate. When you call, you get our fastest response and our best prices.",
    metaTitle: "Plumber Springdale AR | Local Plumbing Experts Since 2009 | Ozark Plumbing Co.",
    metaDescription:
      "Ozark Plumbing Co. is Springdale's trusted hometown plumber since 2009. 24/7 emergency service, water heaters, drain cleaning & repiping. Call (479) 555-0182.",
    keywords: [
      "plumber Springdale AR",
      "emergency plumber Springdale",
      "plumber near me Springdale",
      "Springdale plumbing company",
    ],
    faq: [
      {
        q: "How long has Ozark Plumbing Co. been serving Springdale?",
        a: "We've been Springdale's neighborhood plumber since 2009 — over 15 years of service to Washington County homeowners and businesses. Our trucks are based here, so we're always close.",
      },
      {
        q: "What areas of Springdale do you serve?",
        a: "We serve all of Springdale including Emma Avenue, Har-Ber Meadows, Murphy Park, Sonora Road corridor, Johnson (unincorporated), and every zip code in the city limits (72762, 72764, 72765).",
      },
      {
        q: "Do you offer same-day plumbing service in Springdale?",
        a: "Yes — same-day appointments are almost always available for Springdale residents. Because our shop is here, we can typically have someone at your door within 2 hours for non-emergency scheduled calls.",
      },
    ],
    nearbyCity: "Fayetteville",
  },
  {
    slug: "bella-vista",
    name: "Bella Vista",
    state: "AR",
    zip: ["72714", "72715"],
    county: "Benton County",
    population: "30,000+",
    geo: { lat: 36.4807, lng: -94.2727 },
    distance: "25 miles from Springdale",
    landmarks: ["Lake Windsor Recreation Area", "Tanyard Creek Trail System", "Bella Vista Village Club"],
    description:
      "Plumber serving Bella Vista, AR — lake homes, retirement communities, and seasonal properties. Emergency plumbing, water heaters, leak detection, and winterization.",
    headline: "Plumber in Bella Vista, AR — Lake Homes & Village Properties",
    intro:
      "Bella Vista's unique mix of lake homes, retirement communities, and seasonal properties requires a plumber with specific expertise. Ozark Plumbing Co. handles everything from water heater replacements in village condos to burst pipe emergencies in lakeside properties — 24 hours a day.",
    metaTitle: "Plumber Bella Vista AR | Lake Home Plumbing | Emergency Service | Ozark Plumbing Co.",
    metaDescription:
      "Ozark Plumbing Co. serves Bella Vista, AR — lake homes, retirement communities & vacation properties. 24/7 emergency plumbing, water heaters & winterization. Call (479) 555-0182.",
    keywords: [
      "plumber Bella Vista AR",
      "emergency plumber Bella Vista",
      "lake home plumber Bella Vista",
      "plumber near me Bella Vista",
    ],
    faq: [
      {
        q: "Do you service lake homes and vacation properties in Bella Vista?",
        a: "Yes — we regularly service lake homes, seasonal properties, and vacation rentals across Bella Vista's Lake Windsor, Lake Leatherwood, and Lake Avalon communities. We also offer pipe winterization to protect unoccupied homes.",
      },
      {
        q: "How far is Bella Vista from your Springdale shop?",
        a: "Bella Vista is the edge of our 25-mile service zone — approximately 30–35 minutes from our Springdale base under normal conditions. For 24/7 emergency calls, we dispatch immediately regardless of distance.",
      },
      {
        q: "Do you handle well pump and water pressure issues in Bella Vista?",
        a: "We handle full water system diagnostics including pressure issues, expansion tank failures, and water filtration maintenance for Bella Vista properties on private wells and village water systems.",
      },
    ],
    nearbyCity: "Bentonville",
  },
];

export const AREA_SLUGS = AREAS.map((a) => a.slug);
