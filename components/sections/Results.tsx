"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const CARDS = [
  {
    stat: null,
    isNumber: false,
    statDisplay: "2x",
    label: "average increase in after-hours enquiries",
    subtext:
      "Businesses with 24/7 automated responses capture enquiries that would have gone cold overnight.",
    statClass: "text-5xl font-bold text-accent sm:text-6xl md:text-7xl",
  },
  {
    stat: null,
    isNumber: false,
    statDisplay: "24/7",
    label: "hours your assistant is available",
    subtext:
      "While your team sleeps, your assistant is taking bookings and capturing orders.",
    statClass: "text-5xl font-bold text-white sm:text-6xl md:text-7xl",
  },
  {
    stat: null,
    isNumber: false,
    statDisplay: "1 week",
    label: "from start to live on your site",
    subtext:
      "We build, test, and deploy. You just add one line of code.",
    statClass: "text-4xl font-bold text-purple-400 sm:text-5xl",
  },
] as const;

function CountUpNumber({ value, className }: { value: number; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const tick = () => {
      const elapsed = performance.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(value * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function StatDisplay({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 text-center"
    >
      <div>
        {card.isNumber && card.stat !== null ? (
          <CountUpNumber value={card.stat} className={card.statClass} />
        ) : (
          <span className={card.statClass}>{card.statDisplay}</span>
        )}
      </div>
      <p className="mt-4 font-medium text-white">{card.label}</p>
      <p className="mt-2 text-sm text-white/60">{card.subtext}</p>
    </motion.div>
  );
}

export function Results() {
  return (
    <section id="results" className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent">
          THE NUMBERS
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          The math is simple
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Your AI assistant captures enquiries and bookings around the clock.
          More leads, more conversions, less manual follow-up.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <StatDisplay key={card.label} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
