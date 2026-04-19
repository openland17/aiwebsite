"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const CARDS = [
  {
    tag: "01",
    title: "Operational tools",
    description:
      "Custom web apps that replace the spreadsheets your business runs on.",
    examples: "Finishes Manager · Ops Dashboard · Claims Portal",
  },
  {
    tag: "02",
    title: "Workflow automation",
    description:
      "Manual data entry, reconciliation, reporting. Systems that run themselves.",
    examples: "POS to Xero sync · Roster to payroll · Invoice triage",
  },
  {
    tag: "03",
    title: "AI-powered intelligence",
    description:
      "Document extraction, smart matching, predictive insights.",
    examples: "Prospect scoring · PDF extraction · Anomaly detection",
  },
] as const;

export function CustomSolutions() {
  return (
    <section
      id="what-we-build"
      className="bg-neutral-50 px-6 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <BlurFade inView inViewMargin="-100px">
          <div className="flex flex-wrap items-baseline justify-between gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
                Capabilities
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                What we build
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-600">
              Three categories. Most projects blend all three.
            </p>
          </div>
        </BlurFade>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <BlurFade key={card.title} inView delay={i * 0.1} inViewMargin="-50px">
              <div className="flex h-full flex-col bg-white px-7 py-8">
                <div className="font-mono text-[11px] tracking-[0.15em] text-accent">
                  {card.tag}
                </div>
                <h3 className="mt-5 font-heading text-[22px] font-bold tracking-tight text-neutral-900">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {card.description}
                </p>
                <div className="mt-6 border-t border-neutral-200 pt-4 font-mono text-[11px] leading-relaxed text-neutral-500">
                  {card.examples}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
