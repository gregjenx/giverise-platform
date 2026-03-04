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
  title: "Field-First Design | Patterns at Scale",
  description:
    "Root systems and adaptive technology — why software built for the field has to follow conditions, not plans.",
};

export default function FieldFirstDesignPage() {
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
              Root Systems
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
              Field-First Design
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
              Roots don&apos;t follow a plan. They follow conditions — pressure,
              moisture, chemical gradients, pockets of resistance and air.
              Technology built for people working in the field has to operate
              the same way: adaptive, constraint-aware, designed for what&apos;s
              actually there.
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
              A tree&apos;s root system is one of the most efficient
              space-filling structures in nature. It doesn&apos;t map its
              territory in advance and allocate resources accordingly — it
              explores through growth. Where conditions are favorable, roots
              proliferate. Where they encounter compacted soil or stone, they
              redirect. The architecture that emerges isn&apos;t the product of
              planning; it&apos;s the record of conditions encountered over
              time. The root system knows the soil better than any survey
              because it has lived through it.
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
              Most technology is designed for average conditions in controlled
              environments: a laptop, reliable WiFi, a user with time to learn
              the interface and the institutional context to understand what
              the system is asking. Field-based conservation work exists in the
              exact opposite environment. A land steward documenting a photo
              check-in may be working on a phone with 2G signal, in a language
              that isn&apos;t the platform&apos;s primary language, under time
              pressure, without institutional support. Software designed around
              ideal conditions fails in these moments — not catastrophically,
              but persistently, and the cumulative effect is that people stop
              using it.
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
              Field-first design inverts the process. You start with the
              constraint: intermittent connectivity, small screens, unfamiliar
              interfaces, physical activity happening simultaneously. You build
              the minimum viable interaction for that context first, and
              add richness only where the field environment genuinely supports
              it. The resulting system often looks simpler than what a
              boardroom-first approach produces — fewer features, less visible
              sophistication. But like a root system shaped by real soil, it
              actually works where it needs to work.
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
