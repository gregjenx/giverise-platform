"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const C = {
  charcoal: "#1c1f1e",
  slate: "#2a3f36",
  clay: "#c4713b",
  cream: "#faf8f4",
  muted: "#6b6960",
};

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/groundtrust", label: "Groundtrust" },
  { href: "/patterns", label: "Patterns" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrolled = scrollY > 50;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 0" : "22px 0",
        background: scrolled ? "rgba(250,248,244,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,31,30,0.06)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: C.charcoal,
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          GiveRise<span style={{ color: C.clay }}>.ai</span>
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: C.muted,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = C.charcoal)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = C.muted)
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              background: C.charcoal,
              color: C.cream,
              borderRadius: 8,
              padding: "10px 24px",
              letterSpacing: "0.01em",
              transition: "all 0.3s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C.slate;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.charcoal;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Work With Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
