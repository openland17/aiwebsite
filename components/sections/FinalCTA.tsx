"use client";

import { Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import Aurora from "@/components/reactbits/Aurora";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-accent-dark py-40">
      <Aurora
        colorStops={["#1B2A4A", "#2563EB", "#1e3a5f"]}
        blend={0.35}
        amplitude={0.7}
        speed={0.4}
        className="pointer-events-none opacity-60"
      />
      <div className="absolute inset-0 bg-accent-dark/50" aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Let&apos;s talk about what&apos;s slowing your business down
        </h2>
        <p className="mt-6 text-center text-base text-white/60 sm:text-lg">
          Book a 20-minute call. We&apos;ll map your biggest automation
          opportunities and give you a clear plan — whether you work with us or
          not.
        </p>
        <a
          href="https://calendly.com/mjs-consulting/ai-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block"
        >
          <ShimmerButton
            shimmerColor="#ffffff"
            background="rgba(37, 99, 235, 1)"
            borderRadius="12px"
            className="px-10 py-4 text-lg font-semibold"
          >
            Book a Call
          </ShimmerButton>
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition hover:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-dark rounded"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 transition hover:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-accent-dark rounded"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
}
