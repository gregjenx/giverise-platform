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
  { href: "/projects", label: "Projects" },
  { href: "/patterns", label: "Patterns at Scale" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrolled = scrollY > 50;

  return (
    <>
      <style>{`
        .sitenav-links { display: flex; }
        .sitenav-hamburger { display: none; }
        .sitenav-mobile-backdrop { display: none; }
        .sitenav-mobile-menu { display: none; }
        @media (max-width: 767px) {
          .sitenav-links { display: none !important; }
          .sitenav-hamburger { display: flex !important; }
          .sitenav-mobile-backdrop { display: block !important; }
          .sitenav-mobile-menu { display: block !important; }
        }
      `}</style>
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

          {/* Desktop links */}
          <div className="sitenav-links" style={{ gap: 36, alignItems: "center" }}>
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

          {/* Mobile hamburger */}
          <button
            className="sitenav-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
              flexDirection: "column",
              justifyContent: "center",
              width: 36,
              height: 36,
            }}
            aria-label="Toggle mobile menu"
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                borderRadius: 1,
                background: C.charcoal,
                transition: "all 0.3s ease",
                transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                borderRadius: 1,
                background: C.charcoal,
                transition: "all 0.3s ease",
                marginTop: 5,
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                borderRadius: 1,
                background: C.charcoal,
                transition: "all 0.3s ease",
                marginTop: 5,
                transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile backdrop */}
        <div
          className="sitenav-mobile-backdrop"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            opacity: mobileOpen ? 1 : 0,
            pointerEvents: mobileOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Mobile menu */}
        <div
          className="sitenav-mobile-menu"
          style={{
            background: "rgba(250,248,244,0.98)",
            borderTop: "1px solid rgba(28,31,30,0.06)",
            padding: mobileOpen ? "20px 32px 28px" : "0 32px",
            maxHeight: mobileOpen ? 500 : 0,
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
            overflow: "hidden",
            transition: "max-height 0.3s ease, opacity 0.3s ease, transform 0.3s ease, padding 0.3s ease",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Outfit', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: C.charcoal,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: "1px solid rgba(28,31,30,0.06)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: 20,
              width: "100%",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              background: C.charcoal,
              color: C.cream,
              borderRadius: 8,
              padding: "14px 24px",
              textDecoration: "none",
              textAlign: "center" as const,
              transition: "background 0.2s",
            }}
          >
            Work With Us
          </Link>
        </div>
      </nav>
    </>
  );
}
