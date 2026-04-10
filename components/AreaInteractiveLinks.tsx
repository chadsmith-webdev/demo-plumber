"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AreaServiceLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
      {links.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#1a2235",
            border: "1px solid rgba(200,115,42,0.12)",
            borderRadius: 10,
            padding: "1.125rem 1.25rem",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,115,42,0.4)";
            (e.currentTarget as HTMLElement).style.color = "#f0ede8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,115,42,0.12)";
          }}
        >
          <span style={{ color: "#c8c4c0", fontWeight: 500, fontSize: "0.9rem" }}>{service.label}</span>
          <ArrowRight size={14} style={{ color: "#c8732a", flexShrink: 0 }} />
        </Link>
      ))}
    </div>
  );
}

export function OtherAreaLinks({ areas }: { areas: { slug: string; name: string }[] }) {
  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      {areas.map((a) => (
        <Link
          key={a.slug}
          href={`/areas/${a.slug}`}
          style={{
            background: "#1a2235",
            border: "1px solid rgba(200,115,42,0.12)",
            borderRadius: 8,
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            color: "#a8a4a0",
            textDecoration: "none",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#f0ede8";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,115,42,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#a8a4a0";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,115,42,0.12)";
          }}
        >
          {a.name}, AR
        </Link>
      ))}
    </div>
  );
}
