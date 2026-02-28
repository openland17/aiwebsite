"use client";

import { InlineWidget } from "react-calendly";
import { CheckCircle2, Mail, Phone } from "lucide-react";

const BULLETS = [
  "See a working demo tailored to your industry",
  "Get a clear idea of what's possible in your first week",
  "Walk away with a plan, whether you proceed or not",
] as const;

export function BookDemo() {
  return (
    <section
      id="contact"
      className="bg-[#0D0D12] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              BOOK A DEMO
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              See it live in 30 minutes
            </h2>
            <p className="mt-6 text-white/60">
              Pick a time and I&apos;ll show you exactly what an AI assistant
              looks like for your business. No pitch deck, no pressure — just a
              live demo built around what you actually need.
            </p>
            <ul className="mt-8 space-y-4">
              {BULLETS.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2 text-sm text-white/50">
              <a
                href="mailto:zephyrsystemsau@gmail.com"
                className="flex items-center gap-2 transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D12] rounded"
                aria-label="Email"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                zephyrsystemsau@gmail.com
              </a>
              <a
                href="tel:+61407733940"
                className="flex items-center gap-2 transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D12] rounded"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                +61 407 733 940
              </a>
            </div>
          </div>

          {/* Right column — Calendly embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <InlineWidget
              url="https://calendly.com/zephyr-systems/ai-demo"
              styles={{
                height: "650px",
                borderRadius: "16px",
                overflow: "hidden",
              }}
              pageSettings={{
                backgroundColor: "0D0D12",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "4F6EF7",
                textColor: "ffffff",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
