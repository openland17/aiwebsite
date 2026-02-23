"use client";

import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Custom AI assistant built for your business",
  "Workshop and event booking with live payment",
  "Custom order and enquiry capture",
  "24/7 FAQ across all your locations",
  "Hosting, maintenance and support included",
  "Live on your site within one week",
  "Month to month — no lock-in contract",
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent">
          PRICING
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Simple pricing. No surprises.
        </h2>
        <p className="mt-4 text-white/60">
          Pricing is tailored to your business size, locations, and what you
          need automated. Book a call to get a quote.
        </p>

        <div className="mx-auto mt-12 w-full max-w-lg px-0 sm:px-0">
          <div className="rounded-2xl border border-white/[0.15] bg-white/[0.05] p-6 sm:p-10">
            <p className="text-sm text-white/50">
              Tailored to your business. No lock-in contracts.
            </p>

            <p className="mt-8 text-xs uppercase tracking-widest text-white/40">
              Every plan includes:
            </p>
            <ul className="mt-3 space-y-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex gap-3 text-left">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/zephyr-systems/ai-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-xl bg-accent py-3 font-medium text-white transition hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] text-center"
              aria-label="Get a custom quote"
            >
              Get a Custom Quote
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-white/30">
            Currently working with hospitality businesses across Brisbane.
          </p>
        </div>
      </div>
    </section>
  );
}
