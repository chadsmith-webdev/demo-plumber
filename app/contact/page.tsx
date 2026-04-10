"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, CheckCircle, Send } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SERVICES_LIST = [
  "Emergency Plumbing",
  "Water Heater Installation/Replacement",
  "Drain Cleaning",
  "Sewer Line Repair",
  "Leak Detection",
  "Whole-Home Repiping",
  "Other / Not Sure",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "", city: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #0a0d14, #111827)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }} className="bg-radial-copper" /><div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <span className="badge badge-copper" style={{ marginBottom: "1.25rem" }}>Get in Touch</span>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 900, color: "#f0ede8", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Contact <span className="text-gradient-copper">Ozark Plumbing Co.</span>
          </h1>
          <p style={{ color: "#a8a4a0", fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: 500, margin: "0 auto" }}>
            For emergencies, call directly — we answer 24/7. For quotes and scheduled work, use the form below.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "5rem 1.5rem", background: "#080b11" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]" style={{ gap: "4rem", alignItems: "start" }}>
            {/* Contact info */}
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#f0ede8", fontSize: "1.375rem", marginBottom: "2rem" }}>
                Reach Us Directly
              </h2>

              {/* Emergency CTA */}
              <div style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.25)", borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
                <p style={{ color: "#fca5a5", fontWeight: 700, fontSize: "0.8125rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                  🚨 Plumbing Emergency?
                </p>
                <p style={{ color: "#a8a4a0", fontSize: "0.875rem", marginBottom: "1rem" }}>Don&apos;t fill out a form — call us now.</p>
                <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ width: "100%", justifyContent: "center" }}>
                  <Phone size={18} />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                {[
                  { icon: Phone, label: "Phone", value: BUSINESS.phone, href: BUSINESS.phoneHref },
                  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                  { icon: MapPin, label: "Address", value: BUSINESS.address.full, href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", gap: "0.875rem" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(200,115,42,0.12)", border: "1px solid rgba(200,115,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={17} style={{ color: "#c8732a" }} />
                    </div>
                    <div>
                      <p style={{ color: "#6b6760", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.125rem" }}>{label}</p>
                      <a href={href} target={href.startsWith("https://maps") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#f0ede8", fontSize: "0.9375rem", textDecoration: "none" }}>{value}</a>
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div style={{ display: "flex", gap: "0.875rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(200,115,42,0.12)", border: "1px solid rgba(200,115,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={17} style={{ color: "#c8732a" }} />
                  </div>
                  <div>
                    <p style={{ color: "#6b6760", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Hours</p>
                    {BUSINESS.hours.map((h) => (
                      <p key={h.days} style={{ color: "#a8a4a0", fontSize: "0.875rem", marginBottom: "0.125rem" }}>
                        <span style={{ color: "#f0ede8", fontWeight: 500 }}>{h.days}:</span> {h.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "2rem", padding: "1.25rem", background: "#1a2235", borderRadius: 10, border: "1px solid rgba(200,115,42,0.12)" }}>
                <p style={{ color: "#a8a4a0", fontSize: "0.8125rem" }}>{BUSINESS.license}</p>
                <p style={{ color: "#6b6760", fontSize: "0.75rem", marginTop: "0.25rem" }}>Licensed, bonded & insured in the state of Arkansas</p>
              </div>
            </div>

            {/* Quote form */}
            <div style={{ background: "#1a2235", border: "1px solid rgba(200,115,42,0.2)", borderRadius: 16, padding: "2.5rem" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <CheckCircle size={56} style={{ color: "#10b981", margin: "0 auto 1.5rem" }} />
                  <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#f0ede8", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Request Received!</h2>
                  <p style={{ color: "#a8a4a0", marginBottom: "1.5rem" }}>We&apos;ll be in touch within 2 business hours. For emergencies, please call {BUSINESS.phone}.</p>
                  <a href={BUSINESS.phoneHref} className="btn btn-copper"><Phone size={16} />Call Now</a>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "#f0ede8", fontSize: "1.375rem", marginBottom: "0.5rem" }}>Request a Free Estimate</h2>
                  <p style={{ color: "#6b6760", fontSize: "0.875rem", marginBottom: "2rem" }}>We respond to all estimate requests within 2 business hours.</p>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                      <div>
                        <label className="label" htmlFor="contact-name">Your Name *</label>
                        <input id="contact-name" className="input-field" type="text" placeholder="John Smith" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="label" htmlFor="contact-phone">Phone Number *</label>
                        <input id="contact-phone" className="input-field" type="tel" placeholder="(479) 555-0000" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="label" htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" className="input-field" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="label" htmlFor="contact-city">Your City</label>
                      <input id="contact-city" className="input-field" type="text" placeholder="Rogers, Bentonville, Fayetteville..." value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                    </div>
                    <div>
                      <label className="label" htmlFor="contact-service">Service Needed</label>
                      <select id="contact-service" className="input-field" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                        <option value="">Select a service...</option>
                        {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label" htmlFor="contact-message">Describe the Issue</label>
                      <textarea id="contact-message" className="input-field" rows={4} placeholder="Tell us what's happening — as much detail helps us prepare..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                    </div>
                    <button type="submit" className="btn btn-copper" style={{ justifyContent: "center", fontSize: "1rem", padding: "1rem" }}>
                      <Send size={17} />
                      Send Request
                    </button>
                    <p style={{ color: "#6b6760", fontSize: "0.75rem", textAlign: "center" }}>
                      For plumbing emergencies, call <a href={BUSINESS.phoneHref} style={{ color: "#c8732a" }}>{BUSINESS.phone}</a> directly.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
