"use client";

import { Search, Code, Upload, TrendingUp } from "lucide-react";

const STEPS = [
  {
    step: 1,
    icon: Search,
    title: "We learn your business",
    description:
      "Your menu, bookings, locations, and team workflow. We do the research.",
  },
  {
    step: 2,
    icon: Code,
    title: "We build your assistant",
    description:
      "Custom built, branded to your business, tested end to end before you see it.",
  },
  {
    step: 3,
    icon: Upload,
    title: "We go live on your site",
    description:
      "One line of code added to your site. Your developer can do it in 5 minutes.",
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Orders come in automatically",
    description:
      "Bookings, orders and enquiries captured 24/7. You wake up to confirmed revenue.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent">
          THE PROCESS
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Live on your site in a week
        </h2>

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Connecting line on desktop */}
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
                <Icon className="mt-2 h-8 w-8 text-accent" aria-hidden />
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
