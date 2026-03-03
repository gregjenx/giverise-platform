import Link from "next/link";
import { COLORS } from "@/lib/colors";

const platformLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-stewards", label: "For Stewards" },
  { href: "/for-funders", label: "For Funders" },
  { href: "/for-land-trusts", label: "For Land Trusts" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "64px 24px 40px",
        background: COLORS.deep,
        borderTop: `1px solid rgba(196, 113, 59, 0.1)`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48,
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 2" }}>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: COLORS.cream,
              marginBottom: 14,
            }}
          >
            GiveRise<span style={{ color: COLORS.clay }}>.ai</span>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "rgba(232,220,200,0.45)",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              lineHeight: 1.65,
              maxWidth: 300,
            }}
          >
            Conservation&apos;s coordination layer. Built with and for the communities who steward the land.
          </p>
          <p
            style={{
              marginTop: 16,
              fontSize: 12,
              color: "rgba(232,220,200,0.25)",
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              lineHeight: 1.6,
              maxWidth: 300,
            }}
          >
            GiveRise honors the sovereignty of Indigenous peoples and their inherent right to steward their ancestral lands.
          </p>
        </div>

        {/* Platform links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(232,220,200,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            Platform
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {platformLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-clay"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  color: "rgba(232,220,200,0.55)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              color: "rgba(232,220,200,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            Company
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-clay"
                style={{
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                  color: "rgba(232,220,200,0.55)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(245,240,232,0.06)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
            fontSize: 12,
            color: "rgba(232,220,200,0.25)",
          }}
        >
          © {new Date().getFullYear()} GiveRise.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
