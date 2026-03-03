"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COLORS } from "@/lib/colors";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-stewards", label: "For Stewards" },
  { href: "/for-funders", label: "For Funders" },
  { href: "/for-land-trusts", label: "For Land Trusts" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 50;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(15, 26, 21, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.4s ease",
        borderBottom: scrolled ? `1px solid rgba(196, 113, 59, 0.15)` : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${COLORS.canopy}, ${COLORS.clay})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              color: COLORS.bone,
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            }}
          >
            G
          </div>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: scrolled ? COLORS.cream : COLORS.bone,
              letterSpacing: "-0.02em",
            }}
          >
            GiveRise<span style={{ color: COLORS.clay }}>.ai</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: scrolled ? COLORS.sand : "rgba(245,240,232,0.8)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.clay)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? COLORS.sand
                  : "rgba(245,240,232,0.8)")
              }
            >
              {link.label}
            </Link>
          ))}
          <button
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              background: COLORS.clay,
              color: COLORS.bone,
              border: "none",
              borderRadius: 8,
              padding: "10px 22px",
              cursor: "pointer",
              letterSpacing: "0.01em",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.amber;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.clay;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Join the Waitlist
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: COLORS.cream,
            padding: 8,
          }}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: COLORS.deep,
            borderTop: `1px solid rgba(196,113,59,0.15)`,
            padding: "20px 24px 28px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: COLORS.cream,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: `1px solid rgba(245,240,232,0.06)`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            style={{
              marginTop: 20,
              width: "100%",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              background: COLORS.clay,
              color: COLORS.bone,
              border: "none",
              borderRadius: 8,
              padding: "14px 22px",
              cursor: "pointer",
            }}
          >
            Join the Waitlist
          </button>
        </div>
      )}
    </header>
  );
}
