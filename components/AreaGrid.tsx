"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { AREAS } from "@/lib/areas";

export default function AreaGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ padding: "5rem 1.5rem", background: "#0a0d14" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="badge badge-copper" style={{ marginBottom: "1rem" }}>
            <MapPin size={12} />
            Service Area
          </span>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#f0ede8",
              marginBottom: "0.75rem",
            }}
          >
            Serving All of Northwest Arkansas
          </h2>
          <p style={{ color: "#6b6760", fontSize: "0.9375rem", maxWidth: 520, margin: "0 auto" }}>
            Based in Springdale — quick response to every corner of Benton and Washington Counties.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {AREAS.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: i * 0.09, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/areas/${area.slug}`}
                style={{
                  display: "block",
                  background: area.slug === "springdale" ? "rgba(200,115,42,0.08)" : "#1a2235",
                  border: `1px solid ${area.slug === "springdale" ? "rgba(200,115,42,0.4)" : "rgba(200,115,42,0.12)"}`,
                  borderRadius: 12,
                  padding: "1.5rem",
                  textDecoration: "none",
                  transition: "box-shadow 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 32px rgba(200,115,42,0.16)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,115,42,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = area.slug === "springdale" ? "rgba(200,115,42,0.4)" : "rgba(200,115,42,0.12)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 700,
                        fontSize: "1.0625rem",
                        color: "#f0ede8",
                        marginBottom: "0.125rem",
                      }}
                    >
                      {area.name}
                    </h3>
                    <p style={{ color: "#6b6760", fontSize: "0.75rem" }}>{area.county}</p>
                  </div>
                  {area.slug === "springdale" && (
                    <span
                      style={{
                        fontSize: "0.625rem",
                        background: "rgba(200,115,42,0.2)",
                        color: "#e8933a",
                        border: "1px solid rgba(200,115,42,0.3)",
                        borderRadius: 9999,
                        padding: "0.1875rem 0.5rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Home Base
                    </span>
                  )}
                </div>
                <p style={{ color: "#6b6760", fontSize: "0.8125rem", lineHeight: 1.5, marginBottom: "1rem" }}>
                  {area.distance} · {area.zip.join(", ")}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#c8732a", fontSize: "0.8125rem", fontWeight: 600 }}>
                  View service area <ArrowRight size={13} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <Link href="/areas" className="btn btn-outline" style={{ fontSize: "0.9rem" }}>
            <MapPin size={15} />
            View All Service Areas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
