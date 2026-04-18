"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AUDIT_URL } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
      className="relative flex min-h-screen items-center bg-black px-6 pt-32 pb-24 sm:pt-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted"
        >
          Custom operational software
        </motion.p>

        <motion.h1
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Software built for how your business actually works.
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          We build operational tools for construction, property, and hospitality
          businesses. Shipped in 7 days. Built around your process, not
          the other way around.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-white px-8 py-3.5 text-center text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            Get a Free Audit
          </a>
          <Link
            href="#case-studies"
            onClick={scrollTo("#case-studies")}
            className="w-full rounded-lg border border-white/15 bg-white/[0.02] px-8 py-3.5 text-center text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
