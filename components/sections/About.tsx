"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function About() {
  return (
    <section id="about" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
            About
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Why MJS
          </h2>
          <p className="mt-8 text-base leading-relaxed text-foreground-muted">
            MJS Consulting is run by Matt Smith, a Brisbane-based software
            consultant who builds operational tools for businesses across
            Australia. We focus on construction, property, and hospitality
            because that&apos;s where we have the strongest track record, but
            the underlying problem is the same across operations-heavy
            industries. No middlemen, no offshore teams, no project managers
            between you and the person writing the code. You talk to the
            builder. The builder ships the work.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
