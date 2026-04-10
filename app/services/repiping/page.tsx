import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

const service = SERVICES.find((s) => s.slug === "repiping")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: `${BUSINESS.website}/services/repiping` } };

export default function RepipingPage() {
  const schemas = [
    buildFaqSchema(service.faq as { q: string; a: string }[]),
    buildServiceSchema(service.name, service.description, `${BUSINESS.website}/services/repiping`),
    buildBreadcrumbSchema([{ name: "Home", url: BUSINESS.website }, { name: "Services", url: `${BUSINESS.website}/services` }, { name: service.name, url: `${BUSINESS.website}/services/repiping` }]),
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
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Copper & PEX Specialists</span>
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
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2.5rem", textAlign: "center" }}>Is Your Home a Repiping Candidate?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)", borderRadius: 12, padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#ef4444", marginBottom: "1rem" }}>These Pipes Need to Go</h3>
              {["Galvanized steel (pre-1970 homes)", "Polybutylene ('poly-B', grey plastic, 1978–1995)", "Lead pipes (pre-1960 homes)", "Corroded copper showing pinhole leaks"].map((p) => (
                <div key={p} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ color: "#ef4444" }}>✕</span><span style={{ color: "#c8c4c0", fontSize: "0.9rem" }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 12, padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#10b981", marginBottom: "1rem" }}>Modern Pipe Options We Install</h3>
              {["Type L Copper — the gold standard, 50+ year lifespan", "PEX-A — flexible, freeze-resistant, quiet", "PEX-B — cost-effective, widely compatible", "CPVC — ideal for hot water lines"].map((p) => (
                <div key={p} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.625rem" }}>
                  <span style={{ color: "#10b981" }}>✓</span><span style={{ color: "#c8c4c0", fontSize: "0.9rem" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>Repiping FAQ</h2>
          <FaqAccordion items={service.faq as { q: string; a: string }[]} />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#080b11", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#f0ede8", marginBottom: "1rem" }}>Rusty water or chronic low pressure? Let&apos;s fix it for good.</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />{BUSINESS.phone}</a>
            <Link href="/contact" className="btn btn-outline">Schedule Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
