"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function ReviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "#080b11",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(200, 115, 42, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="badge badge-copper" style={{ marginBottom: "1rem" }}>
            Google Reviews
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
            What NW Arkansas Homeowners Say
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span style={{ color: "#f0ede8", fontWeight: 700, fontSize: "1.0625rem" }}>{BUSINESS.rating}</span>
            <span style={{ color: "#6b6760", fontSize: "0.875rem" }}>({BUSINESS.reviewCount}+ reviews)</span>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {BUSINESS.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] as const }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: "#1a2235",
                border: "1px solid rgba(200, 115, 42, 0.15)",
                borderRadius: 14,
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.1875rem" }}>
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p
                style={{
                  color: "#c8c4c0",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid rgba(200, 115, 42, 0.1)", paddingTop: "0.875rem" }}>
                <p style={{ color: "#f0ede8", fontWeight: 700, fontSize: "0.875rem", marginBottom: "0.125rem" }}>
                  {review.author}
                </p>
                <p style={{ color: "#6b6760", fontSize: "0.8125rem" }}>{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <a
            href="https://g.page/ozark-plumbing-co/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ fontSize: "0.875rem" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a Google Review
          </a>
        </motion.div>
      </div>
    </section>
  );
}
