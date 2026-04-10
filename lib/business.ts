export const BUSINESS = {
  name: "Ozark Plumbing Co.",
  legalName: "Ozark Plumbing Co. LLC",
  phone: "(479) 555-0182",
  phoneHref: "tel:+14795550182",
  phoneRaw: "+14795550182",
  email: "service@ozarkplumbingco.com",
  website: "https://ozarkplumbingco.com",
  address: {
    street: "1147 W Sunset Ave",
    city: "Springdale",
    state: "AR",
    zip: "72762",
    country: "US",
    full: "1147 W Sunset Ave, Springdale, AR 72762",
  },
  geo: {
    lat: 36.1867,
    lng: -94.1288,
  },
  hours: [
    { days: "Monday–Friday", hours: "7:00 AM – 7:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Emergency Only" },
  ],
  openingHoursSpec: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    { dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
  ],
  founded: 2009,
  yearsInBusiness: new Date().getFullYear() - 2009,
  owner: "Marcus Briley",
  license: "AR Lic. #PB-0042817",
  rating: 4.9,
  reviewCount: 312,
  priceRange: "$$",
  tagline: "Expert Plumbing. Fast Response. Done Right.",
  description:
    "Ozark Plumbing Co. is Northwest Arkansas's trusted full-service plumber. Licensed, insured, and available 24/7 for emergency plumbing in Springdale, Rogers, Bentonville, Fayetteville, and Bella Vista.",
  stats: [
    { label: "Jobs Completed", value: "2,500+", raw: 2500 },
    { label: "Avg Google Rating", value: "4.9★", raw: 4.9 },
    { label: "Avg Response Time", value: "45 min", raw: 45 },
    { label: "Years Serving NWA", value: "15+", raw: 15 },
  ],
  reviews: [
    {
      author: "Sarah M.",
      location: "Rogers, AR",
      rating: 5,
      text: "Called at 11pm for a burst pipe under the kitchen sink. Marcus had someone out in under 40 minutes. Completely professional, fixed it fast, and the price was fair. This is my plumber for life.",
      date: "2024-11-08",
    },
    {
      author: "David K.",
      location: "Bentonville, AR",
      rating: 5,
      text: "Replaced our 14-year-old water heater with a tankless Rinnai unit. The crew was clean, thorough, and explained everything. Hot water on demand now — total game changer for our family.",
      date: "2025-01-14",
    },
    {
      author: "Jennifer R.",
      location: "Fayetteville, AR",
      rating: 5,
      text: "I've used three different plumbers over the years and Ozark Plumbing is hands-down the best. Showed up on time, diagnosed the sewer issue quickly, and gave me a no-nonsense estimate. Highly recommend.",
      date: "2025-02-22",
    },
    {
      author: "Tom & Lisa B.",
      location: "Springdale, AR",
      rating: 5,
      text: "We've had them out twice in two years — once for drain cleaning and once for a water line repair. Both times: on time, honest, and done right. That's rare these days.",
      date: "2025-03-05",
    },
    {
      author: "Carlos V.",
      location: "Bella Vista, AR",
      rating: 5,
      text: "Had a mysterious water pressure issue the whole house. They came out with a camera, found a partial blockage in the main line, cleared it same day. Couldn't be happier.",
      date: "2025-03-19",
    },
  ],
} as const;

export type BusinessInfo = typeof BUSINESS;
