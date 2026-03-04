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
  title: "Connective Tissue | Patterns at Scale",
  description:
    "Mycelial networks and organizational infrastructure — what fungi teach us about coordination without centralization.",
};

export default function ConnectiveTissuePage() {
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
              Mycelial Networks
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
              Connective Tissue
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
              A forest is not a collection of trees. It&apos;s a single
              networked organism, and most of its coordination infrastructure
              lives underground — invisible, distributed, and essential to
              everything growing above it.
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
              Mycorrhizal fungi connect root systems across acres of forest
              floor, transferring carbon, water, phosphorus, and chemical
              distress signals between trees that have no other way of
              communicating. A Douglas fir under drought stress can receive
              water from a neighbor. A seedling in deep shade can receive
              sugars from the canopy. The network doesn&apos;t have a center. It
              has nodes — and the nodes are only as useful as the connections
              between them.
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
              Most conservation organizations have no equivalent infrastructure.
              Land trusts that should be natural partners operate in near-total
              isolation — running incompatible databases, duplicating
              verification processes, and building relationships that could be
              shared at scale through slow, expensive, bilateral contact. The
              resources exist. The will to coordinate exists. What&apos;s missing
              is the mycelium: a lightweight, ambient layer that makes
              coordination cheap enough to happen continuously rather than as a
              special project.
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
              The design lesson from mycelium is subtle: the connective tissue
              isn&apos;t just infrastructure — it&apos;s intelligence. A
              well-designed network doesn&apos;t just move resources, it routes
              them to where they&apos;re needed. It senses, adapts, and
              prioritizes. Platform design that takes this seriously doesn&apos;t
              build a database that organizations submit data to. It builds a
              layer that actively surfaces the connections already latent in the
              system — matching stewards to funders who share their priorities,
              flagging redundant efforts across organizations, identifying where
              a single shared tool would replace a dozen incompatible ones.
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
