"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COPY } from "@/lib/constants";
import BlurText from "@/components/ui/BlurText";
import Aurora from "@/components/ui/Aurora";

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
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-24">
      {/* Subtle Aurora background — deep blue & purple, low opacity */}
      <Aurora
        colorStops={["#1e3a5f", "#2d1b4e", "#1e3a5f"]}
        blend={0.35}
        amplitude={0.7}
        className="pointer-events-none opacity-60"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* 1. Eyebrow pill */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
        >
          AI Automation for Hospitality & Local Business
        </motion.div>

        {/* 2. H1 with BlurText */}
        <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          <BlurText
            text={COPY.hero.headline}
            delay={100}
            animateBy="words"
            direction="top"
            className="inline"
          />
        </h1>

        {/* 3. Subheading */}
        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl"
        >
          {COPY.hero.subheading}
        </motion.p>

        {/* 4. CTA buttons */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href="https://calendly.com/zephyr-systems/ai-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-accent px-6 py-3 text-center font-medium text-white transition-all hover:scale-[1.02] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] sm:w-auto"
            aria-label="See a live demo"
          >
            See a Live Demo
          </a>
          <Link
            href="#how-it-works"
            onClick={scrollTo("#how-it-works")}
            className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white/80 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] sm:w-auto"
            aria-label="How it works, scrolls to process section"
          >
            How It Works ↓
          </Link>
        </motion.div>
      </div>

      {/* 5. Scroll indicator */}
      <motion.a
        href="#how-it-works"
        onClick={scrollTo("#how-it-works")}
        aria-label="Scroll down to How it works"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.span>
      </motion.a>
    </section>
  );
}
