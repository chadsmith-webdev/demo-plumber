"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  tinted?: boolean;
}

function FaqCard({ item, index, tinted }: { item: FaqItem; index: number; tinted: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 1, 0.5, 1] as const }}
    >
      <motion.div
        animate={{
          borderColor: open ? "rgba(200, 115, 42, 0.45)" : "rgba(200, 115, 42, 0.15)",
          backgroundColor: open ? (tinted ? "#1f2d45" : "#1a2235") : (tinted ? "#1a2235" : "#111827"),
        }}
        transition={{ duration: 0.2 }}
        style={{
          borderRadius: 12,
          border: "1px solid rgba(200, 115, 42, 0.15)",
          overflow: "hidden",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
          aria-expanded={open}
          id={`faq-button-${index}`}
        >
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
              fontSize: "0.9375rem",
              color: open ? "#f0ede8" : "#c8c4c0",
              lineHeight: 1.4,
              transition: "color 0.2s",
            }}
          >
            {item.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] as const }}
            style={{ color: "#c8732a", flexShrink: 0 }}
          >
            <ChevronDown size={18} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] as const }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  padding: "0 1.5rem 1.5rem",
                  borderTop: "1px solid rgba(200, 115, 42, 0.1)",
                  paddingTop: "1rem",
                }}
              >
                <p style={{ color: "#a8a4a0", lineHeight: 1.75, fontSize: "0.9375rem" }}>{item.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function FaqAccordion({ items, tinted = false }: FaqAccordionProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {items.map((item, index) => (
        <FaqCard key={item.q} item={item} index={index} tinted={tinted} />
      ))}
    </div>
  );
}
