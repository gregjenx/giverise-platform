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
  title: "The Routing Problem | Patterns at Scale",
  description:
    "River watersheds as a model for conservation funding — why money that exists never reaches the communities that need it.",
};

export default function TheRoutingProblemPage() {
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
                transition: "color 0.3s",
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
              River Watersheds
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
              The Routing Problem
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
              Rivers don&apos;t move water through a single channel from source
              to sea. They distribute it — through tributaries, deltas, and
              floodplains — reaching every corner of the landscape. Conservation
              funding has the opposite problem.
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
              The conservation funding system has a routing problem, not a
              capital problem. More than $7 billion flows into land protection
              every year in the United States alone. The organizations doing the
              most effective stewardship work — Indigenous land managers,
              community-based conservation groups, grassroots land trusts — see
              almost none of it. The main channel runs wide and deep, but it
              never branches into the places where it&apos;s needed most.
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
              What makes a watershed functional isn&apos;t the main river —
              it&apos;s the capillary network of tributaries, seasonal streams,
              and groundwater channels that carry water into every corner of the
              landscape. Without that branching infrastructure, precipitation
              concentrates in a few channels and flashes to the sea. The uplands
              stay dry. The same dynamic plays out in conservation finance: money
              accumulates in major institutions and established intermediaries
              while the communities closest to the land operate with almost no
              liquidity at all.
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
              The technology design challenge is identical to the hydrology
              challenge: how do you build distribution infrastructure that
              reaches every part of the landscape without requiring each node to
              be a major institution first? A river doesn&apos;t ask a stream to
              prove it&apos;s a river before including it in the watershed. The
              verification logic works in the other direction — small inputs
              aggregate toward the main channel, gaining credibility through
              connection and flow rather than institutional form. That&apos;s
              the model Groundtrust is built on: distribution first, then
              accountability, not the other way around.
            </p>
          </Reveal>

          {/* Divider */}
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
                transition: "color 0.3s",
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
