"use client";

import { Search, PenTool, Code, LifeBuoy } from "lucide-react";

const STEPS = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We learn how your business actually operates. The manual processes, the spreadsheets, the pain points.",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description:
      "We map the solution architecture. You see exactly what we're building before we write a line of code.",
  },
  {
    step: 3,
    icon: Code,
    title: "Build",
    description:
      "Custom-built, tested end to end. Typically live within 1–2 weeks.",
  },
  {
    step: 4,
    icon: LifeBuoy,
    title: "Support",
    description:
      "Ongoing refinement. Your business changes, your tools evolve with it.",
  },
] as const;

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-accent-dark py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300">
          HOW WE WORK
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          From discovery to delivery
        </h2>

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-8 hidden border-t border-white/10 md:block"
            aria-hidden
          />
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                <span
                  className="text-6xl font-bold text-white/[0.08]"
                  aria-hidden
                >
                  {item.step}
                </span>
                <Icon className="mt-2 h-8 w-8 text-blue-300" aria-hidden />
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
