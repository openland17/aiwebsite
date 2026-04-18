"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

const VERTICALS = [
  "Hospitality",
  "Construction",
  "Property",
  "Professional Services",
] as const;

export function TrustStrip() {
  return (
    <section className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-80px">
          <p className="text-center font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            Working with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-foreground-muted sm:text-base">
            {VERTICALS.map((name, i) => (
              <span key={name} className="flex items-center gap-x-3">
                <span>{name}</span>
                {i < VERTICALS.length - 1 && (
                  <span aria-hidden className="text-foreground-dim">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
