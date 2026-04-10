import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, Clock, Star, Shield } from "lucide-react";
import { AREAS, AREA_SLUGS } from "@/lib/areas";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildAreaLocalBusinessSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";
import { AreaServiceLinks, OtherAreaLinks } from "@/components/AreaInteractiveLinks";

export async function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const area = AREAS.find((a) => a.slug === city);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [...area.keywords],
    alternates: { canonical: `${BUSINESS.website}/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${BUSINESS.website}/areas/${area.slug}`,
      images: [{ url: "/images/service-area.jpg", width: 1200, height: 630 }],
    },
  };
}

const serviceLinks = [
  { label: "Emergency Plumbing", href: "/services/emergency-plumber" },
  { label: "Water Heater Services", href: "/services/water-heater" },
  { label: "Drain Cleaning", href: "/services/drain-cleaning" },
  { label: "Sewer Line Repair", href: "/services/sewer-line" },
  { label: "Leak Detection", href: "/services/leak-detection" },
  { label: "Whole-Home Repiping", href: "/services/repiping" },
];

export default async function CityAreaPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = AREAS.find((a) => a.slug === city);
  if (!area) notFound();

  const otherAreas = AREAS.filter((a) => a.slug !== area.slug);
  const faqSchema = buildFaqSchema(area.faq as unknown as { q: string; a: string }[]);
  const localBizSchema = buildAreaLocalBusinessSchema({
    name: area.name,
    state: area.state,
    zip: area.zip,
    geo: area.geo,
    slug: area.slug,
  });
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.website },
    { name: "Service Areas", url: `${BUSINESS.website}/areas` },
    { name: `${area.name}, AR`, url: `${BUSINESS.website}/areas/${area.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(135deg, #0a0d14 0%, #111827 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" />
        <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/areas" style={{ color: "#6b6760", textDecoration: "none" }}>Service Areas</Link>
            <span>/</span>
            <span style={{ color: "#a8a4a0" }}>{area.name}, AR</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: "4rem", alignItems: "start" }}>
            {/* Left */}
            <div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <span className="badge badge-copper">
                  <MapPin size={11} />
                  {area.county}
                </span>
                <span className="badge badge-green">
                  <Clock size={11} />
                  {area.distance}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 900,
                  color: "#f0ede8",
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
              >
                {area.headline}
              </h1>

              <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                {area.intro}
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <a href={BUSINESS.phoneHref} className="btn btn-emergency" id={`call-button-${area.slug}`}>
                  <Phone size={17} />
                  Call {BUSINESS.phone}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Request a Quote
                </Link>
              </div>

              {/* Zip codes */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {area.zip.map((zip) => (
                  <span
                    key={zip}
                    style={{
                      background: "rgba(200, 115, 42, 0.08)",
                      border: "1px solid rgba(200, 115, 42, 0.2)",
                      borderRadius: 6,
                      padding: "0.25rem 0.625rem",
                      fontSize: "0.8125rem",
                      color: "#a8a4a0",
                      fontWeight: 500,
                    }}
                  >
                    {zip}
                  </span>
                ))}
                <span style={{ color: "#6b6760", fontSize: "0.8125rem", alignSelf: "center" }}>ZIP codes served</span>
              </div>
            </div>

            {/* Right: Info card */}
            <div className="lg:sticky lg:top-24" style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.2)", borderRadius: 16, padding: "2rem" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#f0ede8", fontSize: "1rem", marginBottom: "1.25rem" }}>
                Ozark Plumbing Co. in {area.name}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "1.5rem" }}>
                {[
                  { icon: Clock, label: `Response time: ${area.slug === "springdale" ? "Under 20 min" : area.distance}` },
                  { icon: Shield, label: BUSINESS.license },
                  { icon: Star, label: `${BUSINESS.rating}★ on Google (${BUSINESS.reviewCount}+ reviews)` },
                  { icon: Phone, label: BUSINESS.phone },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: "flex", gap: "0.625rem" }}>
                    <Icon size={15} style={{ color: "#c8732a", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#a8a4a0", fontSize: "0.875rem" }}>{label}</span>
                  </div>
                ))}
              </div>
              <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ width: "100%", justifyContent: "center" }}>
                <Phone size={16} />
                Call Now — 24/7
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "0.75rem" }}>
            Plumbing Services in {area.name}, AR
          </h2>
          <p style={{ color: "#6b6760", marginBottom: "2.5rem" }}>
            We bring the same licensed, prompt service to {area.name} that we provide throughout NW Arkansas.
          </p>
          <AreaServiceLinks links={serviceLinks} />
        </div>
      </section>

      {/* Local landmarks / geo signals */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "1rem" }}>
            We Know {area.name}
          </h2>
          <p style={{ color: "#a8a4a0", lineHeight: 1.75, marginBottom: "1.5rem" }}>
            Our plumbers have worked in neighborhoods near {area.landmarks.join(", ")}, and throughout all of {area.county}. Local knowledge means fewer wrong turns and faster service.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {area.landmarks.map((landmark) => (
              <span
                key={landmark}
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(200,115,42,0.15)",
                  borderRadius: 8,
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.8125rem",
                  color: "#a8a4a0",
                }}
              >
                📍 {landmark}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>
            Plumbing Questions — {area.name}, AR
          </h2>
          <FaqAccordion items={area.faq as unknown as { q: string; a: string }[]} tinted />
        </div>
      </section>

      {/* Other areas */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0d14", borderTop: "1px solid rgba(200,115,42,0.1)" }}>
        <div className="container">
          <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#6b6760", fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
            Other Service Areas
          </h3>
          <OtherAreaLinks areas={otherAreas} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #111827, #0a0d14)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "1rem" }}>
            Ready to serve {area.name} — right now.
          </h2>
          <p style={{ color: "#a8a4a0", marginBottom: "1.75rem" }}>
            Licensed plumbers on call 24/7 for {area.name} and all of {area.county}.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ fontSize: "1.125rem", padding: "1.125rem 2.75rem" }}>
              <Phone size={20} />
              Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
