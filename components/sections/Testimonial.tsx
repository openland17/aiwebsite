"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Testimonial() {
  return (
    <section id="testimonial" className="bg-black py-32 md:py-40 lg:py-48">
      <div className="mx-auto max-w-3xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <figure className="text-center">
            <blockquote>
              <p className="font-heading text-xl font-medium leading-relaxed text-white sm:text-2xl">
                Matt did discovery work to understand our setup and priorities,
                recommended a solution based on organisational fit, and
                completed the initial setup. We&apos;re now refining how we
                categorise and prioritise our workflow. Highly recommended.
              </p>
            </blockquote>

            <figcaption className="mt-10">
              <cite className="not-italic">
                <span className="block text-sm font-medium text-white">
                  Cathy Stacey
                </span>
                <span className="mt-1 block text-sm text-foreground-muted">
                  Director of Development
                </span>
                <span className="block text-sm text-foreground-muted">
                  Brisbane Boys&apos; College
                </span>
              </cite>
              <p className="mt-3 text-xs text-foreground-dim">January 2026</p>
            </figcaption>
          </figure>
        </BlurFade>
      </div>
    </section>
  );
}
