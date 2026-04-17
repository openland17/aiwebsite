"use client";

import { CONTACT, AUDIT_URL } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";
import Aurora from "@/components/reactbits/Aurora";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32 md:py-40 lg:py-48"
    >
      <Aurora
        colorStops={["#0a0a2e", "#1e3a5f", "#0a0a2e"]}
        blend={0.25}
        amplitude={0.6}
        speed={0.3}
        className="pointer-events-none opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <h2 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Get a free operations audit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            60 minutes, on-site or over video. We walk through your current
            workflows and send you back a written summary of the three biggest
            automation opportunities in your business. What to fix, what it
            would take, and what to ignore. No pitch at the end.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-10 py-4 text-base font-medium text-black transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book Your Audit
            </a>
          </div>

          <p className="mt-6 text-sm text-foreground-muted">
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition hover:text-white"
            >
              {CONTACT.email}
            </a>
            <span aria-hidden className="mx-2 text-foreground-dim">
              ·
            </span>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="transition hover:text-white"
            >
              {CONTACT.phone}
            </a>
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
