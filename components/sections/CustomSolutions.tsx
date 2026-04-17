"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const CARDS = [
  {
    title: "Operational tools",
    description:
      "Custom web apps that replace the spreadsheets and group chats your business runs on. Built around your exact process.",
  },
  {
    title: "Workflow automation",
    description:
      "Manual data entry, reconciliation, reporting. Replaced with systems that run themselves. Your team gets hours of their week back.",
  },
  {
    title: "AI-powered intelligence",
    description:
      "Document extraction, smart matching, predictive insights. The intelligence layer your business data has been missing.",
  },
] as const;

export function CustomSolutions() {
  return (
    <section id="what-we-build" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            Capabilities
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            What we build
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.15} inViewMargin="-50px">
          <div className="mt-16 grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="py-6 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0"
              >
                <h3 className="font-heading font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
