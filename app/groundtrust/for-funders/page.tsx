import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Funders",
  description:
    "Access a verified pipeline of Indigenous and community-led conservation projects with radical transparency and real-time impact tracking.",
};

const benefits = [
  {
    icon: "✅",
    title: "Verified pipeline",
    desc: "Every project is reviewed by an accredited land trust and supported by satellite monitoring data. No vetting from scratch.",
  },
  {
    icon: "📍",
    title: "Radical transparency",
    desc: "Real-time fund tracking shows exactly where your dollars go, what they're enabling, and what ecological outcomes are being measured.",
  },
  {
    icon: "🔗",
    title: "Direct relationships",
    desc: "Connect with stewardship teams directly — not their grant administrators. Build the long-term relationships that produce lasting impact.",
  },
  {
    icon: "🗺️",
    title: "Portfolio view",
    desc: "Manage all your conservation investments in one place. Filter by geography, ecosystem, Indigenous nation, and funding type.",
  },
  {
    icon: "📈",
    title: "Ecological intelligence",
    desc: "GiveRise aggregates satellite, sensor, and community-reported data to give you an honest picture of conservation outcomes.",
  },
  {
    icon: "🏛️",
    title: "Land trust oversight",
    desc: "An accredited land trust partner maintains long-term oversight of every funded project, providing the accountability funders need.",
  },
];

const differences = [
  {
    label: "Traditional conservation philanthropy",
    points: [
      "6–18 month grant cycles",
      "Intermediaries between funder and steward",
      "Impact reports written by grantees — unverified",
      "Overhead skimmed at each layer",
      "Funded organizations, not communities",
    ],
    dark: true,
  },
  {
    label: "GiveRise",
    points: [
      "Projects listed continuously; fund when ready",
      "Direct relationship with the stewards you fund",
      "Impact data from satellite monitoring + community check-ins",
      "Zero intermediary overhead",
      "Fund the communities doing the work",
    ],
    dark: false,
  },
];

export default function ForFundersPage() {
  return (
    <div className="bg-bone text-earth">
      {/* Hero */}
      <section
        className="pt-40 pb-28 px-6"
        style={{
          background: "linear-gradient(160deg, #0f1a15 0%, #2d4a3e 60%, #3d6b5a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-clay" />
            For Conservation Funders
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-bone leading-tight mb-6 tracking-tight max-w-2xl">
            See exactly where{" "}
            <span className="font-semibold italic" style={{ color: "#e8dcc8" }}>
              every dollar
            </span>{" "}
            lands.
          </h1>
          <p
            className="font-sans text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(232,220,200,0.75)" }}
          >
            A verified pipeline of Indigenous and community-led conservation
            projects — with the transparency, accountability, and direct
            relationships that traditional philanthropy can&apos;t offer.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone transition-all"
              style={{ background: "#c4713b", boxShadow: "0 4px 24px rgba(196,113,59,0.3)" }}
            >
              Explore Projects →
            </button>
            <Link
              href="/groundtrust/how-it-works"
              className="font-sans font-medium text-base px-8 py-4 rounded-xl transition-all"
              style={{
                color: "rgba(232,220,200,0.8)",
                border: "1px solid rgba(232,220,200,0.2)",
              }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-3 tracking-tight">
            What funders get
          </h2>
          <p className="font-sans text-stone mb-12 max-w-lg">
            Infrastructure built for serious conservation investors.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-bone-cream rounded-2xl p-7 border border-earth/5 hover:border-clay/20 transition-colors"
              >
                <div className="text-3xl mb-5">{b.icon}</div>
                <h3 className="font-sans font-bold text-base text-earth mb-2">
                  {b.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 px-6 bg-bone-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth mb-3 tracking-tight">
            A different kind of conservation funding
          </h2>
          <p className="font-sans text-stone mb-12 max-w-lg">
            Not a replacement for existing philanthropy — an upgrade in how it
            reaches communities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {differences.map((col) => (
              <div
                key={col.label}
                className={`rounded-2xl p-8 border ${
                  col.dark
                    ? "bg-forest-deep text-bone border-white/5"
                    : "bg-bone border-clay/20"
                }`}
              >
                <h3
                  className={`font-sans text-xs font-semibold uppercase tracking-widest mb-6 ${
                    col.dark ? "text-clay" : "text-clay"
                  }`}
                >
                  {col.label}
                </h3>
                <ul className="space-y-3">
                  {col.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                          col.dark ? "bg-stone" : "bg-clay"
                        }`}
                      />
                      <span
                        className={`font-sans text-sm leading-relaxed ${
                          col.dark ? "text-bone/60" : "text-earth"
                        }`}
                      >
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bone text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl font-light text-earth mb-4 tracking-tight">
            Join as a funder partner
          </h2>
          <p className="font-sans text-stone mb-8">
            GiveRise launches in 2026. Get early access to the project pipeline
            and help shape the platform.
          </p>
          <button
            className="font-sans font-semibold text-base px-8 py-4 rounded-xl text-bone"
            style={{ background: "#c4713b" }}
          >
            Join the Waitlist →
          </button>
          <p className="font-sans text-xs text-stone/60 mt-4">
            We&apos;re accepting a limited cohort of founding funders.
          </p>
        </div>
      </section>
    </div>
  );
}
