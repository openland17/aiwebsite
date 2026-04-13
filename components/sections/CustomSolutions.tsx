"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const SOLUTIONS = [
  {
    title: "Process Automation",
    description:
      "Replace manual workflows with intelligent systems. Data entry, reconciliation, reporting.",
  },
  {
    title: "Custom Business Tools",
    description:
      "Production web apps built for your exact process. Not off-the-shelf software.",
  },
  {
    title: "AI-Powered Intelligence",
    description:
      "Document extraction, smart matching, predictive insights. Your data working harder.",
  },
] as const;

export function CustomSolutions() {
  return (
    <section id="solutions" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
            Custom Builds
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Beyond OpenClaw.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            We also design and build custom operational software. AI-powered
            tools, dashboards, and automation systems built around how your
            business actually works. Construction, property, hospitality.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.15} inViewMargin="-50px">
          <div className="mt-16 grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
            {SOLUTIONS.map((solution) => (
              <div key={solution.title} className="py-6 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
                <h3 className="font-heading font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
