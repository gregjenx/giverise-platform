"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const C = {
  charcoal: "#1c1f1e",
  dark: "#141716",
  slate: "#2a3f36",
  forest: "#3d6b5a",
  clay: "#c4713b",
  amber: "#d4943a",
  warm: "#f8f6f2",
  sand: "#efeae2",
  cream: "#faf8f4",
  muted: "#6b6960",
  light: "#9a948a",
};

export default function PatternsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrolled = scrollY > 40;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "14px 0" : "22px 0",
          background: scrolled ? "rgba(250,248,244,0.94)" : "transparent",
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
          <Link
            href="/"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: C.charcoal,
              textDecoration: "none",
              letterSpacing: "-0.03em",
            }}
          >
            GiveRise<span style={{ color: C.clay }}>.ai</span>
          </Link>

          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link
              href="/patterns"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: C.clay,
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Patterns at Scale
            </Link>
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
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
                  ((e.target as HTMLAnchorElement).style.color = C.charcoal)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = C.muted)
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer
        style={{
          padding: "48px 32px",
          background: C.dark,
          borderTop: "1px solid rgba(248,246,242,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#faf8f4",
              }}
            >
              GiveRise<span style={{ color: C.clay }}>.ai</span>
            </span>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                color: "rgba(248,246,242,0.3)",
                marginTop: 6,
              }}
            >
              Technology infrastructure for land conservation.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Patterns at Scale", "Services", "Groundtrust", "About"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: "rgba(248,246,242,0.35)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color = C.clay)
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "rgba(248,246,242,0.35)")
                  }
                >
                  {link}
                </a>
              )
            )}
          </div>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              color: "rgba(248,246,242,0.2)",
              width: "100%",
              textAlign: "center",
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid rgba(248,246,242,0.04)",
            }}
          >
            © 2026 GiveRise.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
