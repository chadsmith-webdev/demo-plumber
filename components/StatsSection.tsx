"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BUSINESS } from "@/lib/business";

function CountUp({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: "Jobs Completed", value: 2500, suffix: "+", display: "2,500+" },
  { label: "Google Rating", value: 49, suffix: "★", display: "4.9★", decimal: 10 },
  { label: "Avg Response", value: 45, suffix: " min", display: "45 min" },
  { label: "Years Serving NWA", value: 15, suffix: "+", display: "15+" },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        background: "linear-gradient(135deg, #111827, #1a2235)",
        borderTop: "1px solid rgba(200, 115, 42, 0.15)",
        borderBottom: "1px solid rgba(200, 115, 42, 0.15)",
      }}
    >
      <div className="container" ref={ref}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 900,
                  lineHeight: 1.0,
                  marginBottom: "0.5rem",
                  background: "linear-gradient(135deg, #c8732a, #f2a44a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.display}
              </div>
              <p style={{ color: "#6b6760", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
