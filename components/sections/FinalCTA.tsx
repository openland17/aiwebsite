"use client";

import Aurora from "@/components/ui/Aurora";
import { Phone, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-40"
    >
      <Aurora
        colorStops={["#1e3a5f", "#2d1b4e", "#1e3a5f"]}
        blend={0.35}
        amplitude={0.7}
        className="pointer-events-none opacity-60"
      />
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to stop losing orders after hours?
        </h2>
        <p className="mt-6 text-center text-base text-white/60 sm:text-lg">
          Book a free 20-minute demo. We&apos;ll show you exactly what it looks
          like for your business.
        </p>
        <a
          href="https://calendly.com/zephyr-systems/ai-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block w-full max-w-xs rounded-xl bg-accent px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] sm:w-auto"
          aria-label="Book a demo"
        >
          Book a Demo →
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <a
            href="tel:+61407733940"
            className="flex items-center gap-2 transition hover:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
            aria-label="Call +61 407 733 940"
          >
            <Phone className="h-4 w-4" aria-hidden />
            +61 407 733 940
          </a>
          <a
            href="mailto:zephyrsystemsau@gmail.com"
            className="flex items-center gap-2 transition hover:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" aria-hidden />
            zephyrsystemsau@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
