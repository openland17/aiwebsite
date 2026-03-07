"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import Particles from "@/components/reactbits/Particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { WordRotate } from "@/components/magicui/word-rotate";

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-accent-dark px-6 pt-20 pb-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark via-accent-dark/95 to-accent-dark/90" />
      <Particles
        quantity={50}
        color="#60a5fa"
        size={1.2}
        speed={0.2}
        className="opacity-40"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedGradientText>
            AI Automation Consulting — Brisbane, QLD
          </AnimatedGradientText>
        </motion.div>

        <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          <BlurText
            text="AI Automation, Built Around How You Work"
            delay={100}
            animateBy="words"
            direction="top"
            className="inline"
          />
        </h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg md:text-xl"
        >
          Custom AI tools that automate your operations, replace your
          spreadsheets, and give you real-time visibility — for{" "}
          <WordRotate
            words={[
              "construction",
              "hospitality",
              "professional services",
              "property development",
            ]}
            duration={2500}
            className="text-blue-300 font-medium"
          />
        </motion.p>

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
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              background="rgba(37, 99, 235, 1)"
              borderRadius="12px"
              className="w-full px-8 py-4 text-base sm:w-auto"
            >
              Book a Discovery Call
            </ShimmerButton>
          </a>
          <Link
            href="#what-we-do"
            onClick={scrollTo("#what-we-do")}
            className="w-full rounded-xl border border-white/20 px-6 py-3 text-center font-medium text-white/80 transition-all hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-dark sm:w-auto"
          >
            See Our Work ↓
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#what-we-do"
        onClick={scrollTo("#what-we-do")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-dark rounded-full"
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
