import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | GiveRise.ai",
  description:
    "A transparent, trust-centered process from first connection to lasting conservation outcomes.",
};

const steps = [
  {
    number: "01",
    tag: "Stewards",
    title: "A steward lists their project",
    description:
      "Indigenous communities and land-based organizations create a project profile on their own terms. They control what they share — from high-level conservation goals to detailed ecological context. No grant-writing infrastructure required. No minimum project size. No 501(c)(3) needed.",
    details: [
      "Free to list — always",
      "Full control over your data",
      "Guided process, not a form",
      "Support for multiple languages planned",
    ],
  },
  {
    number: "02",
    tag: "Land Trusts",
    title: "A land trust partner verifies the project",
    description:
      "A vetted, accredited land trust reviews the project's boundaries, legal standing, and conservation value. GiveRise supplements this with satellite-based monitoring data. This step provides funders with confidence — without extracting authority from the community doing the work.",
    details: [
      "Land trusts confirm, not control",
      "Satellite + community verification combined",
      "No bottlenecks or approval delays",
      "Dispute resolution process available",
    ],
  },
  {
    number: "03",
    tag: "Funders",
    title: "Funders discover aligned projects",
    description:
      "Conservation funders browse a curated feed of verified stewardship projects. Filter by region, ecosystem type, funding need, Indigenous nation, or community size. Project profiles are designed to build understanding, not just make a pitch.",
    details: [
      "Advanced multi-factor filtering",
      "Full impact transparency reports",
      "No cold-pitch dynamic",
      "Portfolio analytics for funders",
    ],
  },
  {
    number: "04",
    tag: "Platform",
    title: "GiveRise facilitates the introduction",
    description:
      "When a funder expresses interest, GiveRise coordinates a warm introduction on the steward's terms. Stewards choose whether to engage, how much to share, and when. The relationship develops at a pace the community sets — not the funder's timeline.",
    details: [
      "Steward-controlled pacing",
      "Structured conversation guides",
      "Cultural protocol support",
      "No unsolicited contact allowed",
    ],
  },
  {
    number: "05",
    tag: "All Parties",
    title: "Funding flows, stewardship continues",
    description:
      "GiveRise streamlines grant administration, donor reporting, and impact documentation — cutting the administrative burden on stewardship teams. The land trust maintains long-term oversight to ensure conservation outcomes are honored.",
    details: [
      "Streamlined grant reporting",
      "Real-time impact dashboards",
      "Long-term accountability built in",
      "Community-controlled impact metrics",
    ],
  },
];

const principles = [
  {
    title: "Sovereignty First",
    body: "Indigenous communities determine what they share, with whom, and when. GiveRise never extracts data or pressures stewards into disclosure.",
  },
  {
    title: "Verified, Not Gatekept",
    body: "Verification ensures credibility without creating bottlenecks. Land trusts serve as witnesses and partners — not approvers who can block projects.",
  },
  {
    title: "Relationships Over Transactions",
    body: "Funding is a byproduct of trust. GiveRise optimizes for long-term alignment and relationship-building, not the speed of grant disbursement.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-bone text-earth">
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6"
        style={{
          background: "linear-gradient(165deg, #0f1a15 0%, #2d4a3e 50%, #3d6b5a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold text-clay uppercase tracking-widest mb-4">
            Process Overview
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-bone leading-tight mb-5 tracking-tight">
            How GiveRise Works
          </h1>
          <p className="font-sans text-lg text-bone/70 leading-relaxed max-w-xl mx-auto">
            A transparent, trust-centered process from first connection to
            lasting conservation outcomes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-12"
            >
              <div className="pt-1">
                <div className="font-sans text-6xl font-bold text-forest/10 leading-none">
                  {step.number}
                </div>
                <span className="mt-3 inline-block px-2.5 py-1 rounded-md text-xs font-semibold font-sans bg-bone-cream text-forest border border-forest/10">
                  {step.tag}
                </span>
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-earth mb-3 leading-snug">
                  {step.title}
                </h2>
                <p className="font-sans text-stone leading-relaxed mb-6 text-base">
                  {step.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 font-sans text-sm text-earth">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="bg-bone-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-earth text-center mb-3 tracking-tight">
            Guiding Principles
          </h2>
          <p className="font-sans text-stone text-center mb-12 max-w-lg mx-auto text-base">
            Every decision we make traces back to these commitments.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-bone rounded-2xl p-8 border border-earth/5"
              >
                <h3 className="font-serif text-lg font-semibold text-earth mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-stone leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-3xl font-light text-earth mb-4 tracking-tight">
            Ready to get started?
          </h2>
          <p className="font-sans text-stone mb-8">
            Find the right path for your role in the conservation ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/for-stewards"
              className="font-sans px-5 py-2.5 bg-forest text-bone rounded-full text-sm font-semibold hover:bg-forest-canopy transition-colors"
            >
              For Stewards
            </Link>
            <Link
              href="/for-funders"
              className="font-sans px-5 py-2.5 bg-clay text-bone rounded-full text-sm font-semibold hover:bg-clay-amber transition-colors"
            >
              For Funders
            </Link>
            <Link
              href="/for-land-trusts"
              className="font-sans px-5 py-2.5 border-2 border-forest text-forest rounded-full text-sm font-semibold hover:bg-bone-cream transition-colors"
            >
              For Land Trusts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
