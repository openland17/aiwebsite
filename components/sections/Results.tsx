"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Fingerprint, BarChart3 } from "lucide-react";

const CARDS = [
  {
    icon: Zap,
    stat: "Weeks, not months",
    label: "Most solutions live within 1–2 weeks",
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
    label: "See what's happening now",
    subtext:
      "Dashboards and tools that show you what's happening now, not last month.",
  },
] as const;

function StatCard({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
    >
      <Icon className="h-8 w-8 text-accent" aria-hidden />
      <p className="mt-4 text-xl font-bold text-gray-900">{card.stat}</p>
      <p className="mt-1 font-medium text-muted">{card.label}</p>
      <p className="mt-3 text-sm text-gray-500">{card.subtext}</p>
    </motion.div>
  );
}

export function Results() {
  return (
    <section id="results" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent">
          WHY IT WORKS
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Results that matter
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We build tools that deliver measurable impact from day one.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <StatCard key={card.stat} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
