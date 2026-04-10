"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Zap, Flame, Droplets, ArrowDownToLine, ScanSearch, Replace, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Flame,
  Droplets,
  ArrowDownToLine,
  ScanSearch,
  Replace,
};

export default function ServiceCardGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "5rem 1.5rem", background: "#080b11", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }} className="bg-grid" />
      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="badge badge-copper" style={{ marginBottom: "1rem" }}>Our Services</span>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#f0ede8",
              marginBottom: "0.75rem",
            }}
          >
            Expert Plumbing for Every Situation
          </h2>
          <p style={{ color: "#6b6760", fontSize: "0.9375rem", maxWidth: 520, margin: "0 auto" }}>
            From middle-of-the-night emergencies to planned upgrades — Ozark Plumbing Co. handles it all.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            const isEmergency = service.slug === "emergency-plumber";

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  style={{
                    display: "block",
                    height: "100%",
                    background: isEmergency
                      ? "linear-gradient(135deg, rgba(220,38,38,0.12), rgba(17,24,39,1))"
                      : "#1a2235",
                    border: `1px solid ${isEmergency ? "rgba(220,38,38,0.3)" : "rgba(200,115,42,0.15)"}`,
                    borderRadius: 14,
                    padding: "1.75rem",
                    textDecoration: "none",
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = isEmergency
                      ? "0 8px 40px rgba(220,38,38,0.2)"
                      : "0 8px 40px rgba(200,115,42,0.18)";
                    (e.currentTarget as HTMLElement).style.borderColor = isEmergency
                      ? "rgba(220,38,38,0.6)"
                      : "rgba(200,115,42,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = isEmergency
                      ? "rgba(220,38,38,0.3)"
                      : "rgba(200,115,42,0.15)";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: isEmergency ? "rgba(220,38,38,0.2)" : "rgba(200, 115, 42, 0.15)",
                      border: `1px solid ${isEmergency ? "rgba(220,38,38,0.3)" : "rgba(200,115,42,0.25)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} style={{ color: isEmergency ? "#ef4444" : "#c8732a" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.0625rem",
                      color: "#f0ede8",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {service.name}
                    {isEmergency && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.6875rem",
                          background: "rgba(220,38,38,0.2)",
                          color: "#ef4444",
                          border: "1px solid rgba(220,38,38,0.3)",
                          borderRadius: 9999,
                          padding: "0.1875rem 0.5rem",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        24/7
                      </span>
                    )}
                  </h3>
                  <p style={{ color: "#6b6760", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    {service.tagline}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: isEmergency ? "#ef4444" : "#c8732a", fontSize: "0.875rem", fontWeight: 600 }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
