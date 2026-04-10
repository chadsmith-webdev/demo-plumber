import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

const service = SERVICES.find((s) => s.slug === "water-heater")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `${BUSINESS.website}/services/water-heater` },
};

export default function WaterHeaterPage() {
  const schemas = [
    buildFaqSchema(service.faq as { q: string; a: string }[]),
    buildServiceSchema(service.name, service.description, `${BUSINESS.website}/services/water-heater`),
    buildBreadcrumbSchema([
      { name: "Home", url: BUSINESS.website },
      { name: "Services", url: `${BUSINESS.website}/services` },
      { name: service.name, url: `${BUSINESS.website}/services/water-heater` },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" />
        <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#6b6760", textDecoration: "none" }}>Services</Link>
            <span>/</span>
            <span style={{ color: "#a8a4a0" }}>{service.name}</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Water Heater Specialists</span>
              <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                {service.headline}
              </h1>
              <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                {service.description}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.25rem" }}>
                {service.benefits.map((b) => (
                  <div key={b} style={{ display: "flex", gap: "0.75rem" }}>
                    <CheckCircle size={17} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#c8c4c0", fontSize: "0.9375rem" }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />{BUSINESS.phone}</a>
                <Link href="/contact" className="btn btn-outline">Free Estimate <ArrowRight size={15} /></Link>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", background: "#1a2235", border: "1px solid rgba(200,115,42,0.2)" }}>
              <Image src={service.image} alt={`${service.name} — Ozark Plumbing Co.`} fill style={{ objectFit: "cover" }} sizes="40vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of water heaters */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#f0ede8", marginBottom: "0.75rem", textAlign: "center" }}>
            Tank or Tankless — We Install Both
          </h2>
          <p style={{ color: "#6b6760", marginBottom: "3rem", textAlign: "center", maxWidth: 500, margin: "0 auto 3rem" }}>
            Every home has different needs. We&apos;ll help you choose the right system and install it right.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              {
                type: "Traditional Tank",
                cost: "$600–$1,200 installed",
                pros: ["Lower upfront cost", "Simpler to install", "Easy to repair", "Works with any home"],
                cons: ["Runs out of hot water", "Heats water 24/7", "8–12 year lifespan"],
                best: "Budget-conscious homeowners, smaller families",
              },
              {
                type: "Tankless (On-Demand)",
                cost: "$1,200–$2,500 installed",
                pros: ["Unlimited hot water", "20–30% energy savings", "15–20 year lifespan", "Space-saving"],
                cons: ["Higher upfront cost", "Requires gas line work", "Higher flow needs"],
                best: "Large families, energy efficiency goals",
              },
            ].map(({ type, cost, pros, cons, best }) => (
              <div key={type} style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.15)", borderRadius: 14, padding: "1.75rem" }}>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#f0ede8", fontSize: "1.125rem", marginBottom: "0.375rem" }}>{type}</h3>
                <p style={{ color: "#c8732a", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1.25rem" }}>{cost}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1rem" }}>
                  {pros.map((p) => <div key={p} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem" }}><span style={{ color: "#10b981" }}>✓</span><span style={{ color: "#a8a4a0" }}>{p}</span></div>)}
                  {cons.map((c) => <div key={c} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem" }}><span style={{ color: "#6b6760" }}>·</span><span style={{ color: "#6b6760" }}>{c}</span></div>)}
                </div>
                <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>Best for: <span style={{ color: "#a8a4a0" }}>{best}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>
            Water Heater FAQ
          </h2>
          <FaqAccordion items={service.faq as { q: string; a: string }[]} />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#080b11", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#f0ede8", marginBottom: "1rem" }}>
            Ready for a water heater upgrade?
          </h2>
          <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ fontSize: "1.125rem" }}><Phone size={18} />Call {BUSINESS.phone}</a>
        </div>
      </section>
    </>
  );
}
