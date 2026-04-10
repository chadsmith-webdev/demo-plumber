import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

const service = SERVICES.find((s) => s.slug === "sewer-line")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription, alternates: { canonical: `${BUSINESS.website}/services/sewer-line` } };

export default function SewerLinePage() {
  const schemas = [
    buildFaqSchema(service.faq as { q: string; a: string }[]),
    buildServiceSchema(service.name, service.description, `${BUSINESS.website}/services/sewer-line`),
    buildBreadcrumbSchema([{ name: "Home", url: BUSINESS.website }, { name: "Services", url: `${BUSINESS.website}/services` }, { name: service.name, url: `${BUSINESS.website}/services/sewer-line` }]),
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
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Sewer Specialists</span>
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
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2.5rem", textAlign: "center" }}>Our Sewer Line Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { step: "01", title: "Camera Inspection", detail: "We run a live video camera through the line to diagnose the issue before touching a shovel." },
              { step: "02", title: "Diagnosis & Quote", detail: "We explain what we found and present your repair options — with upfront, itemized pricing." },
              { step: "03", title: "Permit & Plan", detail: "We pull all required city permits and schedule work at your convenience." },
              { step: "04", title: "Repair or Replace", detail: "Trenchless lining, pipe bursting, or traditional excavation — whichever your situation calls for." },
              { step: "05", title: "Inspection & Restore", detail: "We schedule the city inspection and restore your yard and property after completion." },
            ].map(({ step, title, detail }) => (
              <div key={step} style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.12)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "2rem", color: "rgba(200,115,42,0.3)", marginBottom: "0.75rem", lineHeight: 1 }}>{step}</div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#f0ede8", fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "#6b6760", fontSize: "0.875rem", lineHeight: 1.6 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "2rem", textAlign: "center" }}>Sewer Line FAQ</h2>
          <FaqAccordion items={service.faq as { q: string; a: string }[]} />
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem", background: "#080b11", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#f0ede8", marginBottom: "1rem" }}>Suspect a sewer problem? Don&apos;t guess. Get a camera inspection.</h2>
          <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ fontSize: "1rem" }}><Phone size={16} />{BUSINESS.phone}</a>
        </div>
      </section>
    </>
  );
}
