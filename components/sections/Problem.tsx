"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Problem() {
  return (
    <section className="bg-white px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-6xl items-start gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
            The pattern
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-neutral-900 text-balance sm:text-4xl">
            Spreadsheets. Group chats. Software that almost fits.
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.12} inViewMargin="-100px">
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-7">
            <p className="text-base leading-relaxed text-neutral-800">
              Off-the-shelf tools don&apos;t fit how you work. Spreadsheets
              become load-bearing. Critical processes live in someone&apos;s
              head.
            </p>
            <p className="mt-5 border-t border-neutral-200 pt-5 text-[13px] text-neutral-500">
              You know there&apos;s a better way. You just don&apos;t have time
              to build it.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
