"use client";

import { FileText, RefreshCw, Compass } from "lucide-react";

const MODELS = [
  {
    icon: FileText,
    title: "Project-based",
    description:
      "Defined scope, fixed deliverable, clear timeline. You know exactly what you're getting and when.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing retainer",
    description:
      "Embedded in your business with continuous improvement. Your tools evolve as your operations do.",
  },
  {
    icon: Compass,
    title: "Discovery session",
    description:
      "One-off strategic session to map your automation opportunities and build a clear action plan.",
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="bg-light py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-accent">
          PRICING
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
          Every business is different
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We scope each engagement based on what you need and what will deliver
          the most value. Book a call to discuss your situation.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-accent" aria-hidden />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {model.title}
                </h3>
                <p className="mt-3 text-gray-600">{model.description}</p>
              </div>
            );
          })}
        </div>

        <a
          href="https://calendly.com/zephyr-systems/ai-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-[1.02] hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
}
