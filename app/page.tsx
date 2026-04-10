import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Star, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildFaqSchema } from "@/lib/schema";
import HeroSection from "@/components/HeroSection";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import ReviewSection from "@/components/ReviewSection";
import StatsSection from "@/components/StatsSection";
import FaqAccordion from "@/components/FaqAccordion";
import AreaGrid from "@/components/AreaGrid";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumber in Springdale AR | Licensed & Insured | Ozark Plumbing Co.",
  description:
    "Ozark Plumbing Co. — Northwest Arkansas's trusted plumber since 2009. Emergency plumbing, water heater replacement, drain cleaning & more. Serving Rogers, Bentonville, Fayetteville & Springdale. Call (479) 555-0182.",
  alternates: { canonical: BUSINESS.website },
};

const homeFaqs = [
  {
    q: "How quickly can Ozark Plumbing Co. respond to an emergency in NW Arkansas?",
    a: "Our average emergency response time is under 45 minutes across all of Northwest Arkansas — including Rogers, Bentonville, Fayetteville, Springdale, and Bella Vista. We maintain fully stocked service vans so we can handle most repairs on the first visit.",
  },
  {
    q: "Are you licensed and insured in Arkansas?",
    a: `Yes. Ozark Plumbing Co. holds ${BUSINESS.license} and carries full general liability and workers' compensation insurance. We'll provide proof of insurance on request before any work begins.`,
  },
  {
    q: "Do you offer same-day plumbing service?",
    a: "Same-day service is available Monday through Saturday for most scheduled calls in the NW Arkansas area. Emergency calls are dispatched 24/7 without exception.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve a 25-mile radius from our Springdale, AR base — covering Rogers, Bentonville, Fayetteville, Bella Vista, and all surrounding communities in Benton and Washington Counties.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes — we provide free, no-obligation estimates for all scheduled work. Emergency dispatch involves a service fee, which we quote before arrival. There are no hidden charges or surprise additions.",
  },
];

export default function HomePage() {
  const faqSchema = buildFaqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <ServiceCardGrid />
      <StatsSection />
      <WhyUsSection />
      <AreaGrid />
      <ReviewSection />

      {/* FAQ */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="badge badge-copper" style={{ marginBottom: "1rem" }}>Common Questions</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 800, color: "#f0ede8" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      <FinalCta />
    </>
  );
}

function WhyUsSection() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
          <div>
            <span className="badge badge-copper" style={{ marginBottom: "1rem" }}>Why Choose Us</span>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#f0ede8", marginBottom: "1rem" }}>
              NW Arkansas&apos;s Most Trusted Plumber
            </h2>
            <p style={{ color: "#a8a4a0", lineHeight: 1.75, marginBottom: "2rem" }}>
              For over 15 years, Ozark Plumbing Co. has been the plumber NW Arkansas homeowners call first. We answer our own phones, show up on time, and price honestly — every time.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                "Dispatched from Springdale — shortest drive times in the area",
                "Fully stocked vans handle 95% of repairs on the first visit",
                "Upfront flat-rate pricing — no hourly billing surprises",
                "Owner Marcus Briley personally oversees every emergency call",
                "5-year labor warranty on all completed work",
              ].map((point) => (
                <div key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle size={18} style={{ color: "#10b981", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: "#c8c4c0", fontSize: "0.9375rem" }}>{point}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={BUSINESS.phoneHref} className="btn btn-copper">
                <Phone size={16} />
                {BUSINESS.phone}
              </a>
              <Link href="/about" className="btn btn-outline">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", background: "#1a2235", border: "1px solid rgba(200, 115, 42, 0.2)" }}>
              <Image
                src="/images/team.jpg"
                alt="Marcus Briley, owner of Ozark Plumbing Co., Springdale AR"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,13,20,0.6) 0%, transparent 40%)" }} />
            </div>

            <div className="hidden sm:block" style={{ position: "absolute", bottom: "1.5rem", left: "-1.5rem", background: "#111827", border: "1px solid rgba(200, 115, 42, 0.25)", borderRadius: 12, padding: "1rem 1.25rem", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.0625rem" }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <div>
                  <p style={{ color: "#f0ede8", fontWeight: 800, fontSize: "0.875rem", margin: 0 }}>{BUSINESS.rating} Google Rating</p>
                  <p style={{ color: "#6b6760", fontSize: "0.75rem", margin: 0 }}>{BUSINESS.reviewCount}+ reviews</p>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" style={{ position: "absolute", top: "1.5rem", right: "-1rem", background: "#111827", border: "1px solid rgba(200, 115, 42, 0.25)", borderRadius: 12, padding: "0.875rem 1.125rem", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Shield size={18} style={{ color: "#10b981" }} />
                <div>
                  <p style={{ color: "#f0ede8", fontWeight: 700, fontSize: "0.8125rem", margin: 0 }}>Licensed &amp; Insured</p>
                  <p style={{ color: "#6b6760", fontSize: "0.7rem", margin: 0 }}>{BUSINESS.license}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(135deg, #0a0d14 0%, #111827 50%, #0a0d14 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(200,115,42,0.1) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
      <div className="container" style={{ position: "relative" }}>
        <span className="badge badge-emergency" style={{ marginBottom: "1.5rem" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} className="animate-pulse-emergency" />
          Available Right Now
        </span>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "#f0ede8",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          Stop the leak.{" "}
          <span className="text-gradient-copper">Get help now.</span>
        </h2>
        <p style={{ color: "#a8a4a0", fontSize: "clamp(1rem, 2vw, 1.125rem)", marginBottom: "2.5rem", maxWidth: 520, margin: "0 auto 2.5rem" }}>
          Northwest Arkansas&apos;s fastest-responding plumber — on call 24 hours a day, 365 days a year.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ fontSize: "1.125rem", padding: "1.125rem 2.75rem" }}>
            <Phone size={20} />
            Call {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn btn-outline" style={{ fontSize: "1rem" }}>
            Request a Quote
          </Link>
        </div>
        <p style={{ color: "#6b6760", fontSize: "0.8125rem", marginTop: "1.5rem" }}>
          {BUSINESS.license} · Serving NW Arkansas since {BUSINESS.founded}
        </p>
      </div>
    </section>
  );
}
