"use client";

import { Search, PenTool, Code, LifeBuoy } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const STEPS = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We sit down with you and learn how your business actually runs. The real workflows, not the org chart.",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description:
      "We map exactly what we're building before any code is written. You sign off on the scope.",
  },
  {
    step: 3,
    icon: Code,
    title: "Build",
    description:
      "Working software in your hands inside 1 to 2 weeks. Tested end to end.",
  },
  {
    step: 4,
    icon: LifeBuoy,
    title: "Support",
    description:
      "Ongoing refinement as your business changes. Monthly retainer or pay-as-you-go.",
  },
] as const;

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-[#0a0a0a] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            Process
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            From discovery to production.
          </h2>
        </BlurFade>

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-8 hidden border-t border-white/[0.05] md:block"
            aria-hidden
          />
          {STEPS.map((item, i) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.step} inView delay={i * 0.12} inViewMargin="-50px">
                <div className="relative flex flex-col items-center text-center">
                  <span
                    className="font-heading text-6xl font-bold text-white/[0.04]"
                    aria-hidden
                  >
                    {item.step}
                  </span>
                  <Icon className="mt-2 h-8 w-8 text-accent" aria-hidden />
                  <h3 className="mt-4 font-heading font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
