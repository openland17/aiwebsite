"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const STATEMENTS = [
  {
    title: "Fixed scope, fixed timeline.",
    body:
      "We agree on what you're getting before a line of code is written.",
  },
  {
    title: "Working software in 7 days.",
    body: "You see real progress in week one, not a Gantt chart.",
  },
  {
    title: "Most projects ship in 1 to 2 weeks.",
    body:
      "Bigger builds are scoped in phases so you see value early.",
  },
  {
    title: "Ongoing support is optional.",
    body: "Monthly retainer or pay-as-you-go. No lock-in.",
  },
] as const;

export function Engagement() {
  return (
    <section id="engagement" className="bg-[#0a0a0a] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            Engagement
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            How engagements work
          </h2>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2">
          {STATEMENTS.map((item, i) => (
            <BlurFade
              key={item.title}
              inView
              delay={i * 0.08}
              inViewMargin="-50px"
            >
              <div className="h-full bg-[#0a0a0a] p-8">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {item.body}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
