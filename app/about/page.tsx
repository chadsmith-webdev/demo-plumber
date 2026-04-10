import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Star, CheckCircle, Award, Users, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Ozark Plumbing Co. | Licensed Plumber Springdale AR Since 2009",
  description:
    "Ozark Plumbing Co. has served Northwest Arkansas since 2009. Owner Marcus Briley built NWA's most trusted plumbing company on honesty, fast response, and licensed craftsmanship.",
  alternates: { canonical: `${BUSINESS.website}/about` },
};

const timeline = [
  { year: "2009", event: "Founded by Marcus Briley in Springdale, AR with one service van and a promise to answer every call." },
  { year: "2012", event: "Expanded to serve all of Washington County. Added a second technician and second service van." },
  { year: "2015", event: "Expanded into Benton County — Rogers, Bentonville, and Bella Vista. Now serving 3 full counties." },
  { year: "2018", event: "Reached 1,000 completed jobs. Hired two additional licensed plumbers. Launched 24/7 emergency line." },
  { year: "2022", event: "Hit 4.9-star Google rating milestone. Added tankless water heater specialty certifications." },
  { year: "2024", event: "Completed 2,500+ total jobs. Expanded emergency fleet to ensure 45-min response SLA across NWA." },
];

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", url: BUSINESS.website },
    { name: "About", url: `${BUSINESS.website}/about` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" /><div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative" }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem", display: "flex", gap: "0.5rem", fontSize: "0.8125rem", color: "#6b6760" }}>
            <Link href="/" style={{ color: "#6b6760", textDecoration: "none" }}>Home</Link><span>/</span>
            <span style={{ color: "#a8a4a0" }}>About</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: "3rem", alignItems: "center" }}>
            <div>
              <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Est. {BUSINESS.founded} · Springdale, AR</span>
              <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                NW Arkansas&apos;s Most Trusted Plumber — Built on Honesty.
              </h1>
              <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                Ozark Plumbing Co. was founded by local plumber Marcus Briley in 2009 with a simple philosophy: answer the phone, show up on time, and do the job right. Over 15 years and 2,500+ jobs later, that philosophy still drives every call we take.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />{BUSINESS.phone}</a>
                <Link href="/contact" className="btn btn-outline">Get a Free Estimate</Link>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", background: "#1a2235", border: "1px solid rgba(200,115,42,0.2)" }}>
              <Image src="/images/team.jpg" alt="Marcus Briley, owner of Ozark Plumbing Co. in Springdale, AR" fill style={{ objectFit: "cover" }} sizes="(max-width: 1024px) 100vw, 40vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,13,20,0.7) 0%, transparent 40%)" }} />
              <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem" }}>
                <p style={{ color: "#f0ede8", fontWeight: 800, fontFamily: "Montserrat, sans-serif", fontSize: "1.0625rem" }}>Marcus Briley</p>
                <p style={{ color: "#c8732a", fontSize: "0.8125rem", fontWeight: 600 }}>Owner & Master Plumber · {BUSINESS.license}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "4rem 1.5rem", background: "linear-gradient(135deg, #111827, #1a2235)", borderTop: "1px solid rgba(200,115,42,0.15)", borderBottom: "1px solid rgba(200,115,42,0.15)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {BUSINESS.stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg, #c8732a, #f2a44a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>
                  {stat.value}
                </div>
                <p style={{ color: "#6b6760", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Values */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "4rem", marginBottom: "5rem" }}>
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#f0ede8", marginBottom: "1.25rem" }}>Our Story</h2>
              <p style={{ color: "#a8a4a0", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Marcus Briley grew up in Washington County and spent his apprenticeship learning the specific plumbing challenges of NW Arkansas homes — from the aging galvanized pipes in older Fayetteville bungalows to the modern PEX systems in Bentonville&apos;s new construction neighborhoods.
              </p>
              <p style={{ color: "#a8a4a0", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                In 2009, he opened Ozark Plumbing Co. with one truck and a goal to be the plumber he&apos;d always wanted as a homeowner — someone who answers his own phone, shows up when promised, and prices honestly.
              </p>
              <p style={{ color: "#a8a4a0", lineHeight: 1.8 }}>
                Today, Ozark Plumbing Co. employs a team of licensed plumbers serving over 2,500 homeowners and businesses across NW Arkansas — maintaining the same standards Marcus set on day one.
              </p>
            </div>
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", color: "#f0ede8", marginBottom: "1.25rem" }}>Our Values</h2>
              {[
                { icon: Phone, title: "We Answer", detail: "A real licensed plumber answers every call — no call centers, no voicemail jail." },
                { icon: Clock, title: "We Show Up", detail: "When we say 45 minutes, we mean 45 minutes. Your time is as valuable as ours." },
                { icon: Shield, title: "We Price Honestly", detail: "Flat-rate, itemized estimates before any work begins. No hourly billing surprises." },
                { icon: Award, title: "We Stand Behind Our Work", detail: "Every completed job comes with a 5-year labor warranty, no questions asked." },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(200,115,42,0.12)", border: "1px solid rgba(200,115,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} style={{ color: "#c8732a" }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#f0ede8", fontSize: "1rem", marginBottom: "0.25rem" }}>{title}</h3>
                    <p style={{ color: "#6b6760", fontSize: "0.875rem", lineHeight: 1.6 }}>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#f0ede8", marginBottom: "3rem", textAlign: "center" }}>15 Years of Serving NW Arkansas</h2>
            <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, transparent, rgba(200,115,42,0.4), transparent)", transform: "translateX(-50%)" }} className="hidden md:block" />
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {timeline.map((item, i) => (
                  <div key={item.year}>
                    {/* Mobile: simple year + text row */}
                    <div className="flex items-start gap-4 md:hidden">
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #c8732a, #e8933a)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "0.6875rem", color: "white", flexShrink: 0 }}>
                        {item.year}
                      </div>
                      <p style={{ color: "#a8a4a0", fontSize: "0.9rem", lineHeight: 1.65, paddingTop: "0.625rem" }}>{item.event}</p>
                    </div>
                    {/* Desktop: alternating zigzag grid */}
                    <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 60px 1fr", alignItems: "center", gap: "1.5rem" }}>
                      <div style={{ textAlign: i % 2 === 0 ? "right" : "left", order: i % 2 === 0 ? 0 : 2 }}>
                        <p style={{ color: "#a8a4a0", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.event}</p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}>
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #c8732a, #e8933a)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "0.6875rem", color: "white", flexShrink: 0 }}>
                          {item.year}
                        </div>
                      </div>
                      <div style={{ order: i % 2 === 0 ? 2 : 0 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 1.5rem", background: "#0a0d14", textAlign: "center", borderTop: "1px solid rgba(200,115,42,0.1)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#f0ede8", marginBottom: "1rem" }}>
            Ready to work with NW Arkansas&apos;s most trusted plumber?
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={BUSINESS.phoneHref} className="btn btn-copper" style={{ fontSize: "1.125rem", padding: "1.125rem 2.5rem" }}><Phone size={18} />{BUSINESS.phone}</a>
            <Link href="/contact" className="btn btn-outline">Get a Free Estimate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
