"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Emergency Plumbing", href: "/services/emergency-plumber" },
      { label: "Water Heater Services", href: "/services/water-heater" },
      { label: "Drain Cleaning", href: "/services/drain-cleaning" },
      { label: "Sewer Line Repair", href: "/services/sewer-line" },
      { label: "Leak Detection", href: "/services/leak-detection" },
      { label: "Whole-Home Repiping", href: "/services/repiping" },
    ],
  },
  {
    label: "Service Areas",
    href: "/areas",
    children: [
      { label: "Rogers, AR", href: "/areas/rogers" },
      { label: "Bentonville, AR", href: "/areas/bentonville" },
      { label: "Fayetteville, AR", href: "/areas/fayetteville" },
      { label: "Springdale, AR", href: "/areas/springdale" },
      { label: "Bella Vista, AR", href: "/areas/bella-vista" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Emergency top bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #7f1d1d, #b91c1c, #7f1d1d)",
          padding: "0.5rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#fecaca",
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
        <Zap size={14} />
        <span>24/7 Emergency Plumbing — NW Arkansas</span>
        <span style={{ opacity: 0.6 }}>·</span>
        <a
          href={BUSINESS.phoneHref}
          style={{ color: "#fca5a5", fontWeight: 800, textDecoration: "none" }}
        >
          {BUSINESS.phone}
        </a>
      </div>

      {/* Main nav */}
      <motion.header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
        }}
        animate={{
          backgroundColor: isScrolled ? "rgba(10, 13, 20, 0.95)" : "rgba(10, 13, 20, 0.7)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(8px)",
          borderBottom: isScrolled
            ? "1px solid rgba(200, 115, 42, 0.2)"
            : "1px solid rgba(200, 115, 42, 0.08)",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #c8732a, #e8933a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2a4 4 0 0 1 0 5.66L7 14.66A4 4 0 0 1 1.34 9L8.34 2A4 4 0 0 1 14 2Z" />
                <path d="m10 10 8 8" />
                <path d="m14 14 4 4" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem", color: "#f0ede8", lineHeight: 1.1 }}>
                Ozark Plumbing
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 500, fontSize: "0.625rem", color: "#c8732a", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1 }}>
                Co. · Springdale, AR
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav ref={dropdownRef} style={{ alignItems: "center", gap: "0.25rem" }} className="hidden lg:flex">
            {navLinks.map((link) => (
              <div key={link.label} style={{ position: "relative" }}>
                {link.children ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.5rem 0.875rem",
                      color: activeDropdown === link.label ? "#e8933a" : "#a8a4a0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8933a")}
                    onMouseLeave={(e) => { if (activeDropdown !== link.label) e.currentTarget.style.color = "#a8a4a0"; }}
                  >
                    {link.label}
                    <motion.span animate={{ rotate: activeDropdown === link.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "0.5rem 0.875rem",
                      color: "#a8a4a0",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8933a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a8a4a0")}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: [0.25, 1, 0.5, 1] as const }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: 220,
                        background: "#111827",
                        border: "1px solid rgba(200, 115, 42, 0.25)",
                        borderRadius: 12,
                        padding: "0.5rem",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,115,42,0.05)",
                        zIndex: 100,
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setActiveDropdown(null)}
                          style={{
                            display: "block",
                            padding: "0.625rem 1rem",
                            color: "#a8a4a0",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            borderRadius: 8,
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#f0ede8";
                            e.currentTarget.style.background = "rgba(200, 115, 42, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#a8a4a0";
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a
              href={BUSINESS.phoneHref}
              className="btn btn-copper hidden lg:inline-flex"
              style={{ padding: "0.625rem 1.25rem", fontSize: "0.9rem" }}
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center lg:hidden"
              style={{
                background: "rgba(200, 115, 42, 0.15)",
                border: "1px solid rgba(200, 115, 42, 0.3)",
                borderRadius: 8,
                padding: "0.5rem",
                color: "#e8933a",
                cursor: "pointer",
              }}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] as const }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "#0a0d14",
              padding: "5.5rem 1.5rem 2rem",
              overflowY: "auto",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  {link.children ? (
                    <div>
                      <p style={{ color: "#c8732a", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", padding: "1rem 0 0.5rem", fontFamily: "Montserrat, sans-serif" }}>
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          style={{ display: "block", padding: "0.875rem 0", color: "#f0ede8", fontSize: "1.0625rem", fontWeight: 500, borderBottom: "1px solid rgba(200,115,42,0.1)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{ display: "block", padding: "1rem 0", color: "#f0ede8", fontSize: "1.125rem", fontWeight: 600, borderBottom: "1px solid rgba(200,115,42,0.12)", fontFamily: "Montserrat, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href={BUSINESS.phoneHref} className="btn btn-emergency" style={{ justifyContent: "center" }}>
                <Phone size={18} />
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-outline" style={{ justifyContent: "center" }}>
                Request a Quote
              </Link>
            </div>

            <div style={{ marginTop: "2rem", padding: "1.25rem", background: "#1a2235", borderRadius: 12, border: "1px solid rgba(200,115,42,0.15)" }}>
              <p style={{ fontSize: "0.8125rem", color: "#6b6760", marginBottom: "0.25rem" }}>Licensed & Insured</p>
              <p style={{ fontSize: "0.875rem", color: "#a8a4a0" }}>{BUSINESS.license}</p>
              <p style={{ fontSize: "0.8125rem", color: "#6b6760", marginTop: "0.5rem" }}>{BUSINESS.address.full}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
