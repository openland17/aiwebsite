"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AUDIT_URL } from "@/lib/constants";
import { HeroVisual } from "@/components/sections/HeroVisual";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const STATS = [
  { value: "14", unit: "days", label: "Typical ship time" },
  { value: "7", unit: "days", label: "Working software" },
  { value: "0", unit: "", label: "Middlemen" },
] as const;

function scrollTo(hash: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-start overflow-hidden bg-white px-6 pb-20 pt-24 md:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] -top-[10%] h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12), transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[20%] -right-[10%] h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
        <div>
          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500"
          >
            Custom operational software
          </motion.p>

          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 font-heading text-4xl font-bold leading-[1.03] tracking-tight text-neutral-900 text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Software built for how your business{" "}
            <em className="not-italic bg-gradient-to-b from-neutral-900 to-neutral-500 bg-clip-text text-transparent">
              actually works.
            </em>
          </motion.h1>

          <motion.p
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            Operational tools for Brisbane construction, property, and
            hospitality groups. Shipped in 1 to 2 weeks. Fixed scope, fixed
            price, no middlemen.
          </motion.p>

          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-neutral-900 px-8 py-3.5 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            >
              Get a Free Audit
            </a>
            <Link
              href="#case-studies"
              onClick={scrollTo("#case-studies")}
              className="w-full rounded-lg border border-neutral-300 bg-white px-8 py-3.5 text-center text-sm font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-400 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            >
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-14 grid max-w-xl grid-cols-3 border-t border-neutral-200 pt-6"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl font-bold leading-none tracking-tight text-neutral-900">
                  {s.value}
                  {s.unit && (
                    <span className="ml-1 text-sm font-normal text-neutral-600">
                      {s.unit}
                    </span>
                  )}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hidden lg:block lg:justify-self-end"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
