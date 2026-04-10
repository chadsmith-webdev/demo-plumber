import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

const service = SERVICES.find((s) => s.slug === "leak-detection")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: `${BUSINESS.website}/services/leak-detection` } };

export default function LeakDetectionPage() {
  const schemas = [
    buildFaqSchema(service.faq as { q: string; a: string }[]),
    buildServiceSchema(service.name, service.description, `${BUSINESS.website}/services/leak-detection`),
    buildBreadcrumbSchema([{ name: "Home", url: BUSINESS.website }, { name: "Services", url: `${BUSINESS.website}/services` }, { name: service.name, url: `${BUSINESS.website}/services/leak-detection` }]),
  ];

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" /><div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link><span>/</span>
            <Link href="/services" style={{ color: "#6b6760", textDecoration: "none" }}>Services</Link><span>/</span>
            <span style={{ color: "#a8a4a0" }}>{service.name}</span>
          </nav>
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Non-Invasive Detection</span>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: 700 }}>{service.headline}</h1>
          <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: 600 }}>{service.description}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2.25rem" }}>
            {service.benefits.map((b) => <div key={b} style={{ display: "flex", gap: "0.625rem" }}><CheckCircle size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} /><span style={{ color: "#c8c4c0", fontSize: "0.9rem" }}>{b}</span></div>)}
          </div>
          <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />{BUSINESS.phone}</a>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "0.75rem", textAlign: "center" }}>Warning Signs of a Hidden Leak</h2>
          <p style={{ color: "#6b6760", textAlign: "center", maxWidth: 480, margin: "0 auto 2.5rem" }}>The earlier you catch a hidden leak, the less it costs. Here are the signs most homeowners miss:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {[
              { sign: "Water bill spike with no usage change", action: "Check meter, call us immediately" },
              { sign: "Warm or hot spots on the floor", action: "Likely a slab leak — call today" },
              { sign: "Water meter spinning with all fixtures off", action: "Emergency — shut off main, call us" },
              { sign: "Persistent mold or mildew smell", action: "Behind-wall moisture — needs inspection" },
              { sign: "Peeling paint or bubbling drywall", action: "Active moisture behind walls" },
              { sign: "Low water pressure throughout home", action: "Possible main line leak" },
            ].map(({ sign, action }) => (
              <div key={sign} style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.12)", borderRadius: 10, padding: "1.25rem" }}>
                <p style={{ color: "#f0ede8", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{sign}</p>
                <p style={{ color: "#c8732a", fontSize: "0.8125rem", fontWeight: 500 }}>→ {action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>Leak Detection FAQ</h2>
          <FaqAccordion items={service.faq as { q: string; a: string }[]} />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#080b11", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#f0ede8", marginBottom: "1rem" }}>Suspect a hidden leak? Find it before it destroys your home.</h2>
          <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ fontSize: "1rem" }}><Phone size={16} />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  );
}
