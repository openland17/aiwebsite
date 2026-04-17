"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Problem() {
  return (
    <section className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            You&apos;re running your business on spreadsheets, group chats, and
            software that almost fits.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground-muted">
            Every operations-heavy business hits the same wall. The
            off-the-shelf tools don&apos;t quite work how you work. Spreadsheets
            become load-bearing. Critical processes live in someone&apos;s head.
            You know there&apos;s a better way to run this. You just don&apos;t
            have time to build it.
          </p>
          <p className="mt-6 text-sm text-foreground-dim">
            Primarily construction, property, and hospitality. The pattern
            travels. If this sounds like your business, we should talk.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
