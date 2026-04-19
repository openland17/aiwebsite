"use client";

import { CONTACT, AUDIT_URL } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-50 py-32 md:py-40 lg:py-48"
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <h2 className="font-heading text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Get a free venue audit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Built for Brisbane hospitality groups running 2+ venues. 60
            minutes, on-site or over video. You&apos;ll get back the three
            biggest automation opportunities: what to fix, what it takes, what
            to ignore. No pitch.
          </p>

          <div className="mx-auto mt-12 max-w-xl border-t border-neutral-200 pt-8 text-left">
            <p className="text-sm font-medium text-neutral-900">
              Not in hospitality?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Construction, property, or professional services — email{" "}
              <a
                href="mailto:matt@mjs-consulting.com.au"
                className="rounded text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                matt@mjs-consulting.com.au
              </a>{" "}
              directly.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-neutral-900 px-10 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Get a Free Audit
            </a>
          </div>

          <p className="mt-6 text-sm text-neutral-600">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {CONTACT.email}
            </a>
            <span aria-hidden className="mx-2 text-neutral-400">
              ·
            </span>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="rounded transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {CONTACT.phone}
            </a>
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
