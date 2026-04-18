"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Problem() {
  return (
    <section className="bg-black px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            The pattern
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl">
            Your business runs on spreadsheets, group chats, and software that
            almost fits.
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.12} inViewMargin="-100px">
          <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-7">
            <p className="text-base leading-relaxed text-foreground">
              Every operations-heavy business hits the same wall. The
              off-the-shelf tools don&apos;t quite work how you work.
              Spreadsheets become load-bearing. Critical processes live in
              someone&apos;s head.
            </p>
            <p className="mt-5 border-t border-white/[0.06] pt-5 text-[13px] text-foreground-dim">
              You know there&apos;s a better way to run this. You just
              don&apos;t have time to build it.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
