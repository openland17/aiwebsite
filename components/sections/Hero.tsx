"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Particles from "@/components/reactbits/Particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

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

      {/* Globe — right-aligned on desktop, hidden on mobile */}
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
              Operational Intelligence &middot; Brisbane
            </span>
          </AnimatedGradientText>
        </motion.div>

        <h1 className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <BlurText
            text="We build the systems your business runs on."
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
          Custom operational software, AI-powered intelligence, and
          production-grade tools — delivered in weeks, not months. For
          construction, property, and hospitality.
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
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              background="rgba(59, 130, 246, 1)"
              borderRadius="12px"
              className="w-full px-8 py-4 text-base sm:w-auto"
            >
              Book a Discovery Call
            </ShimmerButton>
          </a>
          <Link
            href="#case-studies"
            onClick={scrollTo("#case-studies")}
            className="w-full rounded-xl border border-white/10 px-6 py-3 text-center font-medium text-white/70 transition-all hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            See Case Studies &darr;
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#case-studies"
        onClick={scrollTo("#case-studies")}
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
