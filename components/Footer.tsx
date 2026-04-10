import Link from "next/link";
import { Phone, MapPin, Clock, Shield, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const serviceLinks = [
  { label: "Emergency Plumbing", href: "/services/emergency-plumber" },
  { label: "Water Heater Services", href: "/services/water-heater" },
  { label: "Drain Cleaning", href: "/services/drain-cleaning" },
  { label: "Sewer Line Repair", href: "/services/sewer-line" },
  { label: "Leak Detection", href: "/services/leak-detection" },
  { label: "Whole-Home Repiping", href: "/services/repiping" },
];

const areaLinks = [
  { label: "Rogers, AR", href: "/areas/rogers" },
  { label: "Bentonville, AR", href: "/areas/bentonville" },
  { label: "Fayetteville, AR", href: "/areas/fayetteville" },
  { label: "Springdale, AR", href: "/areas/springdale" },
  { label: "Bella Vista, AR", href: "/areas/bella-vista" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080b11", borderTop: "1px solid rgba(200, 115, 42, 0.15)" }}>
      {/* Emergency CTA strip */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(200, 115, 42, 0.1))",
          borderBottom: "1px solid rgba(220, 38, 38, 0.2)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#f0ede8", marginBottom: "0.5rem" }}>
            Plumbing emergency? Don&apos;t wait.
          </p>
          <p style={{ color: "#a8a4a0", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
            Licensed plumbers on call right now — nights, weekends, holidays.
          </p>
          <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}>
            <Phone size={20} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container" style={{ padding: "4rem 1.5rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem 2rem" }}>
          {/* Company info */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #c8732a, #e8933a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2a4 4 0 0 1 0 5.66L7 14.66A4 4 0 0 1 1.34 9L8.34 2A4 4 0 0 1 14 2Z" />
                  <path d="m10 10 8 8" />
                  <path d="m14 14 4 4" />
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.9375rem", color: "#f0ede8", lineHeight: 1.1 }}>Ozark Plumbing Co.</div>
                <div style={{ fontSize: "0.625rem", color: "#c8732a", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Springdale, AR</div>
              </div>
            </div>
            <p style={{ color: "#6b6760", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Licensed, insured plumbers serving Northwest Arkansas since 2009. 24/7 emergency response throughout Benton &amp; Washington Counties.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a href={BUSINESS.phoneHref} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#a8a4a0", fontSize: "0.875rem", textDecoration: "none" }}>
                <Phone size={14} style={{ color: "#c8732a", flexShrink: 0 }} />
                {BUSINESS.phone}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#a8a4a0", fontSize: "0.875rem" }}>
                <MapPin size={14} style={{ color: "#c8732a", flexShrink: 0, marginTop: 2 }} />
                {BUSINESS.address.full}
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#a8a4a0", fontSize: "0.875rem" }}>
                <Clock size={14} style={{ color: "#c8732a", flexShrink: 0, marginTop: 2 }} />
                <div>
                  {BUSINESS.hours.map((h) => (
                    <div key={h.days}>{h.days}: {h.hours}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c8732a", marginBottom: "1.25rem" }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-secondary transition-colors duration-200"
                    style={{ fontSize: "0.875rem", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c8732a", marginBottom: "1.25rem" }}>
              Service Areas
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-text-secondary transition-colors duration-200"
                    style={{ fontSize: "0.875rem", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust signals */}
          <div>
            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#c8732a", marginBottom: "1.25rem" }}>
              Why Choose Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: Shield, label: "Licensed & Insured", sub: BUSINESS.license },
                { icon: Star, label: `${BUSINESS.rating}★ Google Rating`, sub: `${BUSINESS.reviewCount}+ verified reviews` },
                { icon: Clock, label: "24/7 Emergency Service", sub: "365 days a year" },
                { icon: MapPin, label: "NW Arkansas Based", sub: `Since ${BUSINESS.founded}` },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} style={{ display: "flex", gap: "0.625rem" }}>
                  <Icon size={15} style={{ color: "#c8732a", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ color: "#a8a4a0", fontSize: "0.8125rem", fontWeight: 600, margin: 0 }}>{label}</p>
                    <p style={{ color: "#6b6760", fontSize: "0.75rem", margin: 0 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(200, 115, 42, 0.1)", padding: "1.25rem 1.5rem" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved. · {BUSINESS.license}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/contact" style={{ color: "#6b6760", fontSize: "0.8125rem", textDecoration: "none" }}>Contact</Link>
            <Link href="/about" style={{ color: "#6b6760", fontSize: "0.8125rem", textDecoration: "none" }}>About</Link>
            <Link href="/services" style={{ color: "#6b6760", fontSize: "0.8125rem", textDecoration: "none" }}>Services</Link>
            <a href="https://localsearchally.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem", textDecoration: "none", color: "#6b6760" }}>
              Built by <span style={{ color: "#f0ede8" }}>Local Search</span> <span style={{ color: "#7bafd4" }}>Ally</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
