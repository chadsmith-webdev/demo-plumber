"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { BUSINESS } from "@/lib/business";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{
            position: "fixed",
            bottom: "1.75rem",
            right: "1.5rem",
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
          }}
        >
          {/* Dismiss button */}
          <AnimatePresence>
            {expanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setDismissed(true)}
                style={{
                  background: "rgba(17, 24, 39, 0.9)",
                  border: "1px solid rgba(200, 115, 42, 0.2)",
                  borderRadius: 8,
                  padding: "0.4rem 0.75rem",
                  color: "#6b6760",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                aria-label="Dismiss call button"
              >
                <X size={12} />
                Dismiss
              </motion.button>
            )}
          </AnimatePresence>

          {/* Tooltip label */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "#111827",
                  border: "1px solid rgba(200, 115, 42, 0.25)",
                  borderRadius: 12,
                  padding: "0.875rem 1.125rem",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  textAlign: "right",
                  minWidth: 200,
                }}
              >
                <p style={{ fontSize: "0.75rem", color: "#6b6760", marginBottom: "0.25rem", fontWeight: 500 }}>
                  Available 24/7 for emergencies
                </p>
                <p style={{ color: "#f0ede8", fontWeight: 800, fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}>
                  {BUSINESS.phone}
                </p>
                <p style={{ fontSize: "0.7rem", color: "#6b6760", marginTop: "0.25rem" }}>
                  Avg response: 45 min
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="btn btn-emergency"
                  style={{ marginTop: "0.75rem", width: "100%", justifyContent: "center", padding: "0.75rem 1rem", fontSize: "0.875rem" }}
                >
                  <Phone size={15} />
                  Call Now
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <div style={{ position: "relative" }}>
            {/* Pulse rings */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "rgba(220, 38, 38, 0.4)",
                animation: "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
              }}
            />
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "rgba(220, 38, 38, 0.25)",
                animation: "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s infinite",
              }}
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setExpanded(!expanded)}
              aria-label="Call Ozark Plumbing Co."
              id="sticky-call-button"
              style={{
                position: "relative",
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #dc2626, #ef4444)",
                border: "3px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 32px rgba(220, 38, 38, 0.5), 0 0 0 1px rgba(220,38,38,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "white",
              }}
            >
              <motion.div
                animate={{ rotate: expanded ? 135 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <Phone size={26} strokeWidth={2.5} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
