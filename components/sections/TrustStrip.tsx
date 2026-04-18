"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const VERTICALS = [
  { name: "Hospitality", sub: "POS, reservations, ops" },
  { name: "Construction", sub: "Finishes, claims, progress" },
  { name: "Property", sub: "Portfolio, leasing" },
  { name: "Professional Services", sub: "Intake, intelligence" },
] as const;

export function TrustStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <BlurFade inView inViewMargin="-80px">
          <div className="mb-6 flex items-center gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
              Working across
            </p>
            <div aria-hidden className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <div key={v.name} className="bg-black px-6 py-5">
                <div className="font-heading text-base font-semibold text-white">
                  {v.name}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-dim">
                  {v.sub}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
