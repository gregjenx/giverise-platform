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

export const metadata = {
  title: "Verification at Scale | Patterns at Scale",
  description:
    "Leaf venation and land stewardship monitoring — how nature solves the problem of reaching every point from a single source.",
};

export default function VerificationAtScalePage() {
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
          padding: "160px 32px 80px",
          borderBottom: "1px solid rgba(28,31,30,0.07)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <Link
              href="/patterns"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: C.muted,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 48,
                letterSpacing: "0.01em",
              }}
            >
              ← Patterns at Scale
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: C.clay,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div style={{ width: 28, height: 1.5, background: C.clay }} />
              Leaf Venation
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h1
              style={{
                fontSize: "clamp(38px, 5vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.07,
                color: C.charcoal,
                letterSpacing: "-0.03em",
                marginBottom: 32,
              }}
            >
              Verification at Scale
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: 1.65,
                color: C.forest,
                fontWeight: 300,
                fontStyle: "italic",
                borderLeft: `3px solid ${C.clay}`,
                paddingLeft: 24,
              }}
            >
              A leaf must deliver water and nutrients to every one of its cells
              from a single entry point at the stem. It does this through a
              branching network that reaches every point of its surface without
              redundant plumbing. Land stewardship verification faces the
              exact same geometry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <section style={{ padding: "80px 32px 120px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 19,
                lineHeight: 1.8,
                color: C.charcoal,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Leaf venation is a hierarchical distribution system. A major
              midrib branches into secondary veins, which branch into finer
              veins still, until the network reaches every photosynthesizing
              cell on the leaf surface. No cell is more than a few cell-widths
              from a vein. No vein extends further than necessary. The geometry
              minimizes total path length while maximizing coverage — a solution
              that millions of years of selection pressure produced independently
              in almost every vascular plant lineage.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 19,
                lineHeight: 1.8,
                color: C.charcoal,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Conservation funders face a version of this problem. A foundation
              committing capital to land stewardship needs confidence that the
              work is happening as described — that the boundaries are real, the
              community is genuinely doing the stewardship, and that the
              ecological value is what the project profile claims. Today, this
              verification either doesn&apos;t happen at all, or it happens
              through expensive, slow, case-by-case site visits that can&apos;t
              scale. The existing verification infrastructure has no branching
              network — it&apos;s a single pipe that reaches a handful of
              well-capitalized organizations and stops.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 19,
                lineHeight: 1.8,
                color: C.charcoal,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              The leaf model suggests a different architecture. Satellite
              monitoring provides the primary vein — continuous, high-coverage
              ecological data that requires no human presence on the ground.
              Accredited land trust partners provide the secondary structure,
              adding contextual knowledge and legal standing to each project
              within their region. Community check-ins and photo documentation
              form the finest branches, extending verification into the
              day-to-day reality of stewardship work. The result is a system
              where every project can be verified without requiring any single
              actor to be everywhere at once.
            </p>
          </Reveal>

          <div
            style={{
              margin: "64px 0",
              height: 1,
              background: "rgba(28,31,30,0.08)",
            }}
          />

          <Reveal>
            <Link
              href="/patterns"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                color: C.muted,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              ← Back to Patterns at Scale
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
