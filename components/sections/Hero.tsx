"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Particles from "@/components/reactbits/Particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const Globe = dynamic(() => import("@/components/ui/Globe"), { ssr: false });

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 pb-24"
    >
      <Particles
        quantity={40}
        color="#ffffff"
        size={0.8}
        speed={0.15}
        className="opacity-30"
      />

      {/* Globe: right-aligned on desktop, hidden on mobile */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[15%] md:block">
        <div className="h-[700px] w-[700px] opacity-40">
          <Globe />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedGradientText>
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              OpenClaw Setup as a Service
            </span>
          </AnimatedGradientText>
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <BlurText
            text="AI that runs on your network. Installed in days."
            delay={80}
            animateBy="words"
            direction="top"
            className="inline"
          />
        </h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-foreground-muted sm:text-lg"
        >
          A dedicated AI system on your hardware. No cloud dependency,
          no per-seat licensing, no recurring costs. We source the machine,
          install everything, and train your team.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href="https://calendly.com/mjs-consulting/ai-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-white px-8 py-3.5 text-center text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 sm:w-auto"
          >
            Book a Discovery Call
          </a>
          <Link
            href="#openclaw"
            onClick={scrollTo("#openclaw")}
            className="w-full rounded-lg border border-white/15 bg-white/[0.02] px-8 py-3.5 text-center text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:text-white sm:w-auto"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#openclaw"
        onClick={scrollTo("#openclaw")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full"
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
