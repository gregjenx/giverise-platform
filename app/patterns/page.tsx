"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";

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

const posts = [
  {
    slug: "the-routing-problem",
    number: "01",
    title: "The Routing Problem",
    tag: "River Watersheds",
    description:
      "Billions flow into land conservation every year, but almost none of it reaches the communities doing the most effective stewardship. River systems show us exactly why — and how to fix it.",
  },
  {
    slug: "connective-tissue",
    number: "02",
    title: "Connective Tissue",
    tag: "Mycelial Networks",
    description:
      "A forest coordinates across acres of land through a fungal network invisible to the eye. Most conservation organizations have no equivalent infrastructure — and it shows.",
  },
  {
    slug: "verification-at-scale",
    number: "03",
    title: "Verification at Scale",
    tag: "Leaf Venation",
    description:
      "A leaf delivers nutrients to every cell through a branching network that reaches every point of its surface. Land stewardship monitoring faces the same geometry — and the same solution.",
  },
  {
    slug: "field-first-design",
    number: "04",
    title: "Field-First Design",
    tag: "Root Systems",
    description:
      "Roots don't follow a plan. They follow conditions — pressure, moisture, resistance. Technology built for the field has to work the same way: adaptive, constraint-aware, designed for what's actually there.",
  },
  {
    slug: "branching-without-breaking",
    number: "05",
    title: "Branching Without Breaking",
    tag: "Fractal Growth",
    description:
      "The branching pattern of a river, a lung, and a tree solve the same mathematical problem. Platforms that scale without fracturing share the same underlying logic.",
  },
];

export default function PatternsIndexPage() {
  return (
    <div
      style={{
        background: C.cream,
        color: C.charcoal,
        fontFamily: "'Instrument Serif', Georgia, serif",
        overflowX: "hidden",
      }}
    >
      {/* ─── HERO ─── */}
      <section
        style={{
          padding: "160px 32px 100px",
          position: "relative",
          borderBottom: "1px solid rgba(28,31,30,0.07)",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.022,
            backgroundImage: `linear-gradient(${C.charcoal} 1px, transparent 1px), linear-gradient(90deg, ${C.charcoal} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: C.clay,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div style={{ width: 36, height: 1.5, background: C.clay }} />
              Editorial
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 400,
                lineHeight: 1.04,
                color: C.charcoal,
                letterSpacing: "-0.03em",
                marginBottom: 24,
                maxWidth: 700,
              }}
            >
              Patterns at Scale
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(17px, 1.8vw, 21px)",
                lineHeight: 1.65,
                color: C.muted,
                maxWidth: 520,
                fontWeight: 300,
              }}
            >
              How natural systems inform technology design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── POST LIST ─── */}
      <section style={{ padding: "0 32px 120px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            borderLeft: "1px solid rgba(28,31,30,0.07)",
            borderRight: "1px solid rgba(28,31,30,0.07)",
          }}
        >
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                href={`/patterns/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  style={{
                    padding: "52px 48px",
                    borderBottom: "1px solid rgba(28,31,30,0.07)",
                    display: "grid",
                    gridTemplateColumns: "56px 1fr auto",
                    gap: 40,
                    alignItems: "start",
                    transition: "background 0.35s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      C.warm;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "transparent";
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 28,
                      color: C.light,
                      lineHeight: 1.2,
                      paddingTop: 4,
                    }}
                  >
                    {post.number}
                  </span>

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        color: C.clay,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: 12,
                      }}
                    >
                      {post.tag}
                    </div>
                    <h2
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                        fontWeight: 400,
                        color: C.charcoal,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.2,
                        marginBottom: 14,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: C.muted,
                        maxWidth: 560,
                        fontWeight: 300,
                      }}
                    >
                      {post.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 22,
                      color: C.light,
                      paddingTop: 6,
                      transition: "color 0.3s, transform 0.3s",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
