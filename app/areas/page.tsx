import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { AREAS } from "@/lib/areas";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Plumber Service Areas | Rogers, Bentonville, Fayetteville, Springdale | Ozark Plumbing Co.",
  description:
    "Ozark Plumbing Co. serves a 25-mile radius from Springdale, AR — including Rogers, Bentonville, Fayetteville, and Bella Vista. 24/7 emergency plumbing across NW Arkansas.",
  alternates: { canonical: `${BUSINESS.website}/areas` },
};

export default function AreasPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.website },
    { name: "Service Areas", url: `${BUSINESS.website}/areas` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" /><div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760", justifyContent: "center" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#a8a4a0" }}>Service Areas</span>
          </nav>
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}><MapPin size={11} />25-Mile Service Radius</span>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
            Plumbing Service Areas —{" "}
            <span className="text-gradient-copper">Northwest Arkansas</span>
          </h1>
          <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 600, margin: "0 auto 2.5rem" }}>
            Based in Springdale, AR — we serve all of Benton and Washington Counties with licensed, 24/7 plumbing service. Quick response to every city in the NW Arkansas metro.
          </p>
          <a href={BUSINESS.phoneHref} className="btn btn-emergency">
            <Phone size={17} />
            Emergency? Call Now — {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Area cards */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {AREAS.map((area) => (
              <div
                key={area.slug}
                style={{
                  background: area.slug === "springdale" ? "linear-gradient(135deg, rgba(200,115,42,0.08), #1a2235)" : "#1a2235",
                  border: `1px solid ${area.slug === "springdale" ? "rgba(200,115,42,0.35)" : "rgba(200,115,42,0.12)"}`,
                  borderRadius: 16,
                  padding: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div>
                    <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#f0ede8", fontSize: "1.3125rem", marginBottom: "0.25rem" }}>
                      {area.name}, AR
                    </h2>
                    <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>{area.county} · Pop. {area.population}</p>
                  </div>
                  {area.slug === "springdale" && (
                    <span className="badge badge-copper">Home Base</span>
                  )}
                </div>
                <p style={{ color: "#a8a4a0", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>{area.description}</p>
                <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.375rem", alignItems: "center" }}>
                    <Clock size={13} style={{ color: "#c8732a" }} />
                    <span style={{ color: "#6b6760", fontSize: "0.8125rem" }}>{area.distance}</span>
                  </div>
                  <span style={{ color: "#6b6760", fontSize: "0.8125rem" }}>·</span>
                  {area.zip.map((z) => (
                    <span key={z} style={{ background: "rgba(200,115,42,0.08)", border: "1px solid rgba(200,115,42,0.15)", borderRadius: 5, padding: "0.125rem 0.5rem", fontSize: "0.75rem", color: "#a8a4a0" }}>{z}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <Link href={`/areas/${area.slug}`} className="btn btn-copper" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem", flex: 1, justifyContent: "center" }}>
                    View {area.name} <ArrowRight size={14} />
                  </Link>
                  <a href={BUSINESS.phoneHref} className="btn btn-outline" style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}>
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0d14", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#f0ede8", marginBottom: "1rem" }}>
            Don&apos;t see your city listed?
          </h2>
          <p style={{ color: "#a8a4a0", lineHeight: 1.75, marginBottom: "1.75rem" }}>
            We serve a full 25-mile radius from our Springdale, AR shop — including Lowell, Cave Springs, Centerton, Highfill, Farmington, Prairie Grove, Elkins, Siloam Springs, and Gentry. Call us to confirm coverage for your exact address.
          </p>
          <a href={BUSINESS.phoneHref} className="btn btn-copper">
            <Phone size={16} />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
