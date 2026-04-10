import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, Zap, Flame, Droplets, ArrowDownToLine, ScanSearch, Replace } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Plumbing Services in NW Arkansas | Springdale, Rogers, Bentonville | Ozark Plumbing Co.",
  description:
    "Full-service plumbing in Northwest Arkansas — emergency plumbing, water heaters, drain cleaning, sewer line repair, leak detection & repiping. Licensed & insured. Call (479) 555-0182.",
  alternates: { canonical: `${BUSINESS.website}/services` },
};

const iconMap: Record<string, React.ElementType> = {
  Zap, Flame, Droplets, ArrowDownToLine, ScanSearch, Replace,
};

export default function ServicesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.website },
    { name: "Services", url: `${BUSINESS.website}/services` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" />
        <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#a8a4a0" }}>Services</span>
          </nav>
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>All Services</span>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: 700 }}>
            Expert Plumbing Services Across{" "}
            <span className="text-gradient-copper">Northwest Arkansas</span>
          </h1>
          <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 580 }}>
            Licensed and insured since 2009 — from middle-of-the-night emergency calls to planned whole-home upgrades, Ozark Plumbing Co. handles every plumbing need across NW Arkansas.
          </p>
          <a href={BUSINESS.phoneHref} className="btn btn-emergency">
            <Phone size={18} />
            Emergency? Call Now — {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Zap;
              const isEmergency = service.slug === "emergency-plumber";
              return (
                <div
                  key={service.slug}
                  style={{
                    background: isEmergency ? "linear-gradient(135deg, rgba(220,38,38,0.1), #1a2235)" : "#1a2235",
                    border: `1px solid ${isEmergency ? "rgba(220,38,38,0.25)" : "rgba(200,115,42,0.15)"}`,
                    borderRadius: 16,
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                    <div style={{
                      width: 50, height: 50, borderRadius: 12,
                      background: isEmergency ? "rgba(220,38,38,0.15)" : "rgba(200, 115, 42, 0.15)",
                      border: `1px solid ${isEmergency ? "rgba(220,38,38,0.25)" : "rgba(200,115,42,0.25)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={24} style={{ color: isEmergency ? "#ef4444" : "#c8732a" }} />
                    </div>
                    <div>
                      <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#f0ede8", marginBottom: "0.25rem" }}>
                        {service.name}
                      </h2>
                      <p style={{ color: isEmergency ? "#fca5a5" : "#c8732a", fontSize: "0.8125rem", fontWeight: 600 }}>{service.tagline}</p>
                    </div>
                  </div>
                  <p style={{ color: "#6b6760", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: "1.5rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                    {service.benefits.slice(0, 3).map((b) => (
                      <div key={b} style={{ display: "flex", gap: "0.5rem", fontSize: "0.8125rem" }}>
                        <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                        <span style={{ color: "#a8a4a0" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className={isEmergency ? "btn btn-emergency" : "btn btn-copper"}
                    style={{ justifyContent: "center" }}
                  >
                    {isEmergency ? <><Phone size={15} /> Call Now 24/7</> : <>Learn More <ArrowRight size={15} /></>}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0d14", textAlign: "center", borderTop: "1px solid rgba(200,115,42,0.1)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#f0ede8", marginBottom: "0.75rem" }}>
            Have a question about your plumbing?
          </h2>
          <p style={{ color: "#6b6760", marginBottom: "1.75rem" }}>
            Ozark Plumbing Co. answers the phone — every time, day or night.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BUSINESS.phoneHref} className="btn btn-copper">
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn btn-outline">Get a Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
