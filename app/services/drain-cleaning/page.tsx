import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

const service = SERVICES.find((s) => s.slug === "drain-cleaning")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `${BUSINESS.website}/services/drain-cleaning` },
};

export default function DrainCleaningPage() {
  const schemas = [
    buildFaqSchema(service.faq as { q: string; a: string }[]),
    buildServiceSchema(service.name, service.description, `${BUSINESS.website}/services/drain-cleaning`),
    buildBreadcrumbSchema([{ name: "Home", url: BUSINESS.website }, { name: "Services", url: `${BUSINESS.website}/services` }, { name: service.name, url: `${BUSINESS.website}/services/drain-cleaning` }]),
  ];

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" />
        <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link><span>/</span>
            <Link href="/services" style={{ color: "#6b6760", textDecoration: "none" }}>Services</Link><span>/</span>
            <span style={{ color: "#a8a4a0" }}>{service.name}</span>
          </nav>
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Drain Specialists</span>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: 700 }}>
            {service.headline}
          </h1>
          <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 600 }}>{service.description}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2.25rem" }}>
            {service.benefits.map((b) => (
              <div key={b} style={{ display: "flex", gap: "0.625rem" }}>
                <CheckCircle size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#c8c4c0", fontSize: "0.9rem" }}>{b}</span>
              </div>
            ))}
          </div>
          <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />{BUSINESS.phone}</a>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2.5rem", textAlign: "center" }}>
            Signs You Need Professional Drain Cleaning
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { sign: "Slow-draining sinks or tubs", urgency: "Schedule soon" },
              { sign: "Multiple drains clogged at once", urgency: "Call today" },
              { sign: "Gurgling sounds from drains or toilets", urgency: "Call today" },
              { sign: "Sewage smell from drains", urgency: "Emergency" },
              { sign: "Water backing up into fixtures", urgency: "Emergency" },
              { sign: "Drains that re-clog within weeks", urgency: "Root cause inspection" },
            ].map(({ sign, urgency }) => (
              <div key={sign} style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.12)", borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: "#f0ede8", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.375rem" }}>{sign}</p>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: urgency === "Emergency" ? "#ef4444" : urgency === "Call today" ? "#f59e0b" : "#10b981" }}>
                  → {urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>Drain Cleaning FAQ</h2>
          <FaqAccordion items={service.faq as { q: string; a: string }[]} />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#080b11", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#f0ede8", marginBottom: "1rem" }}>Slow drain? Don&apos;t wait for a total blockage.</h2>
          <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ fontSize: "1rem" }}><Phone size={16} />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  );
}
