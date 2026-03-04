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
  title: "Branching Without Breaking | Patterns at Scale",
  description:
    "Fractal growth and platform scaling — the mathematical pattern shared by rivers, lungs, and systems that grow without fracturing.",
};

export default function BranchingWithoutBreakingPage() {
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
              Fractal Growth
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
              Branching Without Breaking
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
              The branching pattern of a river delta, a bronchial tree, and a
              coastline are not coincidental similarities. They are expressions
              of the same underlying relationship — and the platforms that scale
              without fracturing share the same underlying logic.
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
              Fractal branching solves a specific problem: how do you maximize
              surface area or reach within a constrained volume? A human lung
              achieves roughly 70 square meters of gas exchange surface within
              the confines of a chest cavity because its airways branch
              fractally — each generation of bronchi smaller than the last,
              each following the same ratio. The geometry is self-similar across
              scales. The same rule that governs the trachea governs the finest
              bronchiole. Complexity emerges from simplicity applied repeatedly.
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
              Platforms face a structurally similar problem as they grow. A
              system built for fifty land trusts in one region has to adapt to
              serve five hundred trusts across a dozen countries — different
              languages, legal structures, land tenure systems, and reporting
              requirements. Most platforms try to solve this through
              customization: special cases, configuration flags, one-off
              integrations. The codebase accumulates the scar tissue of every
              edge case. Scaling becomes increasingly expensive because every
              new branch requires rebuilding the trunk.
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
              The fractal model suggests a different path: design the simplest
              possible rule that can be applied self-similarly across scales,
              and let complexity emerge from that. A platform built on a few
              composable primitives — project profiles, verification events,
              funding relationships, reporting records — can serve a steward in
              British Columbia and a land trust in Kenya without requiring
              separate codebases for each context. The branches look different.
              The underlying rule is the same. That&apos;s what makes it
              possible to add the hundredth branch without revisiting the
              first.
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
