import { BUSINESS } from "./business";

const BASE_URL = BUSINESS.website;

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${BASE_URL}/#organization`,
        name: BUSINESS.name,
        legalName: BUSINESS.legalName,
        url: BASE_URL,
        telephone: BUSINESS.phoneRaw,
        email: BUSINESS.email,
        description: BUSINESS.description,
        foundingDate: String(BUSINESS.founded),
        priceRange: BUSINESS.priceRange,
        image: `${BASE_URL}/images/team.jpg`,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/logo.png`,
          width: 300,
          height: 80,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.city,
          addressRegion: BUSINESS.address.state,
          postalCode: BUSINESS.address.zip,
          addressCountry: BUSINESS.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        openingHoursSpecification: BUSINESS.openingHoursSpec.map((spec) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: spec.dayOfWeek,
          opens: spec.opens,
          closes: spec.closes,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: BUSINESS.rating,
          reviewCount: BUSINESS.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        areaServed: [
          { "@type": "City", name: "Springdale", containedInPlace: { "@type": "State", name: "Arkansas" } },
          { "@type": "City", name: "Rogers", containedInPlace: { "@type": "State", name: "Arkansas" } },
          { "@type": "City", name: "Bentonville", containedInPlace: { "@type": "State", name: "Arkansas" } },
          { "@type": "City", name: "Fayetteville", containedInPlace: { "@type": "State", name: "Arkansas" } },
          { "@type": "City", name: "Bella Vista", containedInPlace: { "@type": "State", name: "Arkansas" } },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plumbing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing", url: `${BASE_URL}/services/emergency-plumber` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Installation & Replacement", url: `${BASE_URL}/services/water-heater` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning", url: `${BASE_URL}/services/drain-cleaning` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair", url: `${BASE_URL}/services/sewer-line` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection", url: `${BASE_URL}/services/leak-detection` } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Whole-Home Repiping", url: `${BASE_URL}/services/repiping` } },
          ],
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: BUSINESS.name,
        description: BUSINESS.description,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Plumber",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
      },
    },
    areaServed: [
      { "@type": "City", name: "Springdale" },
      { "@type": "City", name: "Rogers" },
      { "@type": "City", name: "Bentonville" },
      { "@type": "City", name: "Fayetteville" },
      { "@type": "City", name: "Bella Vista" },
    ],
    serviceType: name,
  };
}

export function buildAreaLocalBusinessSchema(city: {
  name: string;
  state: string;
  zip: readonly string[];
  geo: { lat: number; lng: number };
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${BASE_URL}/areas/${city.slug}/#organization`,
    name: BUSINESS.name,
    url: `${BASE_URL}/areas/${city.slug}`,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    image: `${BASE_URL}/images/team.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: city.name,
      addressRegion: city.state,
      postalCode: city.zip[0],
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Arkansas" },
    },
    openingHoursSpecification: BUSINESS.openingHoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.dayOfWeek,
      opens: spec.opens,
      closes: spec.closes,
    })),
  };
}

export function buildReviewSchema() {
  return BUSINESS.reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.text,
    itemReviewed: {
      "@type": "Plumber",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS.name,
    },
  }));
}
