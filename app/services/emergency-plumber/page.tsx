import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle, Clock, Shield, Zap, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema, buildServiceSchema, buildBreadcrumbSchema } from "@/lib/schema";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Emergency Plumber Near Me | 24/7 NW Arkansas | Ozark Plumbing Co.",
  description:
    "Emergency plumber in Springdale, Rogers, Bentonville & Fayetteville, AR — available 24/7/365. Burst pipes, sewage backups, no hot water. Avg 45-min response. Call (479) 555-0182.",
  alternates: { canonical: `${BUSINESS.website}/services/emergency-plumber` },
  openGraph: {
    title: "24/7 Emergency Plumber — NW Arkansas | Ozark Plumbing Co.",
    description:
      "Licensed emergency plumber serving NW Arkansas 24 hours a day. Avg 45-min response to Rogers, Bentonville, Fayetteville & Springdale. Call now.",
    images: [{ url: "/images/emergency.jpg", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What counts as a plumbing emergency?",
    a: "Burst or frozen pipes, sewage backups, active flooding, no hot water in winter, an overflowing toilet, a water heater leaking near electrical equipment, or any situation where water is visibly damaging your home. If you're unsure, call — we'd rather assess a non-emergency than let water damage spread.",
  },
  {
    q: "How fast can you respond to an emergency plumbing call in NW Arkansas?",
    a: "Our average response time is under 45 minutes across the NW Arkansas metro. From our Springdale base, we reach Rogers and Fayetteville in 20–30 minutes, Bentonville in 30–40 minutes, and Bella Vista in 45–55 minutes under normal conditions.",
  },
  {
    q: "Do you charge extra for emergency service at night or on weekends?",
    a: "We charge a transparent after-hours dispatch fee — quoted before we send anyone out. No surprise charges on the invoice. The price we state before arrival is exactly what you pay.",
  },
  {
    q: "What should I do while waiting for the emergency plumber?",
    a: "Immediately locate your main water shutoff valve and turn it off if water is actively flooding. For a water heater issue, set the thermostat to 'Pilot' or 'Vacation' mode. If you smell gas, evacuate and call your gas company (Arkansas Western Gas: 1-800-GAS-9090) before calling us.",
  },
  {
    q: "Can you handle sewer backups and sewage emergencies?",
    a: "Yes. Sewage emergencies require immediate dispatch due to health hazards. We carry full sewer cleaning equipment on emergency vehicles and can address blockages, backups, and broken sewer lines on an emergency basis.",
  },
];

const emergencyTypes = [
  { label: "Burst & Broken Pipes", icon: "💧", detail: "Immediate shutoff assistance + same-visit repair" },
  { label: "Sewage Backups", icon: "🚽", detail: "Health hazard — highest priority dispatch" },
  { label: "No Hot Water", icon: "🔥", detail: "Same-day water heater repair or replacement" },
  { label: "Overflowing Toilets", icon: "🪠", detail: "Fast blockage clearing before damage spreads" },
  { label: "Under-Slab Leaks", icon: "🏠", detail: "Electronic detection before any excavation" },
  { label: "Frozen Pipes", icon: "🧊", detail: "Thawing + preventive wrapping to avoid burst" },
  { label: "Gas Line Concerns", icon: "⚠️", detail: "Turn off gas first — we fix the plumbing side" },
  { label: "Water Heater Failure", icon: "🌡️", detail: "Repair or replace — stocked vans, same day" },
];

const serviceAreas = [
  { name: "Rogers", slug: "rogers", time: "20–30 min" },
  { name: "Bentonville", slug: "bentonville", time: "30–40 min" },
  { name: "Fayetteville", slug: "fayetteville", time: "25–35 min" },
  { name: "Springdale", slug: "springdale", time: "Under 20 min" },
  { name: "Bella Vista", slug: "bella-vista", time: "45–55 min" },
];

export default function EmergencyPlumberPage() {
  const faqSchema = buildFaqSchema(faqs);
  const serviceSchema = buildServiceSchema(
    "Emergency Plumbing",
    "24/7 emergency plumber serving Northwest Arkansas — Springdale, Rogers, Bentonville, Fayetteville, and Bella Vista.",
    `${BUSINESS.website}/services/emergency-plumber`
  );
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.website },
    { name: "Services", url: `${BUSINESS.website}/services` },
    { name: "Emergency Plumbing", url: `${BUSINESS.website}/services/emergency-plumber` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "6rem 1.5rem",
          background: "linear-gradient(135deg, #0a0d14 0%, #1a0808 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-emergency" />
        <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />

        {/* Pulsing emergency background image */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <Image src="/images/emergency.jpg" alt="" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,13,20,0.95), rgba(30,5,5,0.8))" }} />

        <div className="container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <Link href="/services" style={{ color: "#6b6760", textDecoration: "none" }}>Services</Link>
            <span>/</span>
            <span style={{ color: "#a8a4a0" }}>Emergency Plumbing</span>
          </nav>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span className="badge badge-emergency">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} className="animate-pulse-emergency" />
              Available Now — 24/7
            </span>
            <span className="badge badge-copper">Avg 45-Min Response</span>
          </div>

          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
              fontWeight: 900,
              color: "#f0ede8",
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
              maxWidth: 700,
            }}
          >
            Emergency Plumber in{" "}
            <span style={{ background: "linear-gradient(135deg, #ef4444, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Northwest Arkansas
            </span>
            {" "}— Open Right Now
          </h1>

          <p style={{ color: "#a8a4a0", fontSize: "clamp(1rem, 2vw, 1.125rem)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 600 }}>
            Burst pipes at 2am. Sewage backup on Sunday. Water heater failure before Thanksgiving. It happens — and Ozark Plumbing Co. is the only plumber you need to call. Licensed, stocked, and rolling in under 45 minutes.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ fontSize: "1.25rem", padding: "1.25rem 3rem" }} id="emergency-call-button">
              <Phone size={22} />
              Call {BUSINESS.phone}
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#6b6760", fontSize: "0.875rem" }}>
              <Shield size={15} style={{ color: "#10b981" }} />
              {BUSINESS.license}
            </div>
          </div>

          {/* Response time grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.75rem" }}>
            {serviceAreas.map((area) => (
              <div
                key={area.slug}
                style={{
                  background: "rgba(220, 38, 38, 0.08)",
                  border: "1px solid rgba(220, 38, 38, 0.2)",
                  borderRadius: 10,
                  padding: "0.875rem 1rem",
                }}
              >
                <p style={{ color: "#f0ede8", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.25rem", fontFamily: "Montserrat, sans-serif" }}>
                  {area.name}
                </p>
                <p style={{ color: "#ef4444", fontSize: "0.75rem", fontWeight: 600 }}>⏱ {area.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "0.75rem" }}>
              Every Plumbing Emergency, Handled
            </h2>
            <p style={{ color: "#6b6760", maxWidth: 480, margin: "0 auto" }}>
              Our emergency vans are stocked for the most common crisis calls so we can resolve most issues on the first visit.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {emergencyTypes.map(({ label, icon, detail }) => (
              <div
                key={label}
                style={{
                  background: "#1a2235",
                  border: "1px solid rgba(200, 115, 42, 0.12)",
                  borderRadius: 12,
                  padding: "1.25rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <p style={{ color: "#f0ede8", fontWeight: 700, fontSize: "0.9375rem", marginBottom: "0.25rem", fontFamily: "Montserrat, sans-serif" }}>{label}</p>
                  <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do section */}
      <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "3rem" }}>
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#f0ede8", marginBottom: "1.25rem" }}>
                What To Do Right Now
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { step: "1", action: "Turn off your main water shutoff valve", detail: "Usually near the water meter or where the main line enters your home." },
                  { step: "2", action: "Call Ozark Plumbing Co.", detail: `${BUSINESS.phone} — we answer every call, no answering service.` },
                  { step: "3", action: "Remove valuables from affected areas", detail: "Move electronics, furniture, and documents away from water." },
                  { step: "4", action: "Take photos for insurance", detail: "Document water damage before cleanup begins." },
                ].map(({ step, action, detail }) => (
                  <div key={step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #c8732a, #e8933a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.875rem", color: "white" }}>
                      {step}
                    </div>
                    <div>
                      <p style={{ color: "#f0ede8", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.25rem" }}>{action}</p>
                      <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "#f0ede8", marginBottom: "1.25rem" }}>
                Why Ozark Plumbing Co.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  "Real plumber answers — never an answering service",
                  "Stocked vans handle 95% of repairs on first visit",
                  "Upfront pricing quoted before dispatch",
                  "Average 45-minute response across NW Arkansas",
                  "15+ years of emergency experience in this region",
                  "Licensed, bonded & insured — " + BUSINESS.license,
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle size={16} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#c8c4c0", fontSize: "0.9rem" }}>{point}</span>
                  </div>
                ))}
              </div>
              <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ marginTop: "2rem" }}>
                <Phone size={18} />
                Call {BUSINESS.phone} Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "#f0ede8" }}>
              Emergency Plumbing — FAQ
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, rgba(220,38,38,0.1), #0a0d14)", borderTop: "1px solid rgba(220,38,38,0.2)", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "1rem" }}>
            Don&apos;t wait. Every minute counts.
          </h2>
          <p style={{ color: "#a8a4a0", marginBottom: "1.75rem" }}>
            Water damage compounds quickly. Our average dispatch time is under 15 minutes after your call.
          </p>
          <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ fontSize: "1.25rem", padding: "1.125rem 3rem" }}>
            <Phone size={22} />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
