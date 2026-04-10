"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, Shield, Star, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0a0d14",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Layered overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,13,20,0.95) 0%, rgba(10,13,20,0.75) 60%, rgba(10,13,20,0.5) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(200, 115, 42, 0.1) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.4 }} className="bg-grid" />

      {/* Animated copper line bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2 }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, transparent, #c8732a, transparent)" }} />
      </div>

      <div className="container" style={{ position: "relative", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 760 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Emergency indicator */}
            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  background: "rgba(220, 38, 38, 0.12)",
                  border: "1px solid rgba(220, 38, 38, 0.35)",
                  borderRadius: 9999,
                  padding: "0.5rem 1.125rem",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ef4444",
                    display: "inline-block",
                  }}
                  className="animate-pulse-emergency"
                />
                <span style={{ color: "#fca5a5", fontWeight: 600, fontSize: "0.8125rem", letterSpacing: "0.05em" }}>
                  NOW DISPATCHING · 24/7 Emergency Service
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)",
                fontWeight: 900,
                color: "#f0ede8",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              NW Arkansas&apos;s{" "}
              <span className="text-gradient-copper">24/7 Emergency</span>
              {" "}Plumber
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{
                color: "#a8a4a0",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
                maxWidth: 600,
              }}
            >
              Burst pipe? No hot water? Sewage backup? Ozark Plumbing Co. dispatches a licensed plumber in under 45 minutes — day, night, weekends, and holidays — across Rogers, Bentonville, Fayetteville, Springdale, and Bella Vista.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
            >
              <a
                href={BUSINESS.phoneHref}
                className="btn btn-emergency"
                style={{ fontSize: "1.125rem", padding: "1.125rem 2.5rem" }}
                id="hero-call-button"
              >
                <Phone size={20} />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/services/emergency-plumber"
                className="btn btn-outline"
                style={{ fontSize: "1rem" }}
              >
                Emergency Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
            >
              {[
                { icon: Shield, label: "Licensed & Insured", sub: BUSINESS.license },
                { icon: Star, label: `${BUSINESS.rating}★ Google Rating`, sub: `${BUSINESS.reviewCount}+ reviews` },
                { icon: Clock, label: "45-Min Response", sub: "Avg across NW Arkansas" },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: "rgba(200, 115, 42, 0.15)",
                      border: "1px solid rgba(200, 115, 42, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: "#c8732a" }} />
                  </div>
                  <div>
                    <p style={{ color: "#f0ede8", fontWeight: 600, fontSize: "0.8125rem", margin: 0, lineHeight: 1.2 }}>{label}</p>
                    <p style={{ color: "#6b6760", fontSize: "0.7rem", margin: 0 }}>{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#6b6760",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
        className="hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: 1, height: 40, background: "linear-gradient(to bottom, transparent, rgba(200,115,42,0.6))" }}
        />
        Scroll
      </motion.div>
    </section>
  );
}
