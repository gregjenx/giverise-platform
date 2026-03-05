"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COLORS } from "@/lib/colors";

const navLinks = [
  { href: "/groundtrust/how-it-works", label: "How It Works" },
  { href: "/groundtrust/for-stewards", label: "For Stewards" },
  { href: "/groundtrust/for-funders", label: "For Funders" },
  { href: "/groundtrust/for-land-trusts", label: "For Land Trusts" },
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
        padding: scrolled ? "10px 0" : "18px 0",
        background: scrolled ? "rgba(250,247,242,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        transition: "all 0.4s ease",
        borderBottom: scrolled ? "1px solid rgba(45,74,62,0.1)" : "none",
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
        {/* Wordmark */}
        <Link
          href="/groundtrust"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 2 }}
        >
          <div style={{ lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 21,
                color: scrolled ? "#2d4a3e" : COLORS.cream,
                letterSpacing: "-0.025em",
                transition: "color 0.4s ease",
              }}
            >
              Ground
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: 21,
                color: scrolled ? "#2d4a3e" : COLORS.cream,
                letterSpacing: "-0.025em",
                transition: "color 0.4s ease",
              }}
            >
              trust
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 11,
              color: scrolled ? "#9a948a" : "rgba(232,220,200,0.4)",
              letterSpacing: "0.01em",
              transition: "color 0.4s ease",
              lineHeight: 1,
            }}
          >
            by{" "}
            <a
              href="/"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: scrolled ? COLORS.clay : "rgba(232,220,200,0.55)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.amber)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? COLORS.clay
                  : "rgba(232,220,200,0.55)")
              }
            >
              GiveRise.ai
            </a>
          </div>
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
                color: scrolled ? "#3d6b5a" : "rgba(245,240,232,0.8)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.clay)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "#3d6b5a"
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
            color: scrolled ? "#2d4a3e" : COLORS.cream,
            padding: 8,
            transition: "color 0.4s",
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
            background: scrolled ? "rgba(250,247,242,0.98)" : COLORS.deep,
            borderTop: `1px solid ${scrolled ? "rgba(45,74,62,0.1)" : "rgba(196,113,59,0.15)"}`,
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
                color: scrolled ? "#2d4a3e" : COLORS.cream,
                textDecoration: "none",
                padding: "14px 0",
                borderBottom: `1px solid ${scrolled ? "rgba(45,74,62,0.08)" : "rgba(245,240,232,0.06)"}`,
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
