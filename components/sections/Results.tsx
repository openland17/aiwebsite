"use client";

import { Zap, Fingerprint, BarChart3 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const CARDS = [
  {
    icon: Zap,
    stat: "Weeks, not months",
    label: "Most solutions live within 1\u20132 weeks",
    subtext:
      "We scope tight and deliver fast. No drawn-out discovery phases or six-month roadmaps.",
  },
  {
    icon: Fingerprint,
    stat: "Built for your process",
    label: "Not adapted from a template",
    subtext:
      "Designed around how you actually work. Your workflows, your data, your team.",
  },
  {
    icon: BarChart3,
    stat: "Real-time visibility",
    label: "See what\u2019s happening now",
    subtext:
      "Dashboards and tools that show you what\u2019s happening now, not last month.",
  },
] as const;

export function Results() {
  return (
    <section id="results" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <p className="text-xs uppercase tracking-widest text-accent">
            WHY IT WORKS
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Results that matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            We build tools that deliver measurable impact from day one.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <BlurFade key={card.stat} inView delay={i * 0.15} inViewMargin="-50px">
                <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <Icon className="h-8 w-8 text-accent" aria-hidden />
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    {card.stat}
                  </p>
                  <p className="mt-1 font-medium text-muted">{card.label}</p>
                  <p className="mt-3 text-sm text-gray-500">{card.subtext}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
