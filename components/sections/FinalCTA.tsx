"use client";

import { Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-accent-dark py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark via-accent-dark/95 to-accent-dark" />
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
          href="https://calendly.com/zephyr-systems/ai-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block w-full max-w-xs rounded-xl bg-accent px-8 py-4 text-center text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-accent-dark sm:w-auto"
        >
          Book a Call
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
