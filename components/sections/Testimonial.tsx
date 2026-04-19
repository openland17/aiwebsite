"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function Testimonial() {
  return (
    <section id="testimonial" className="bg-neutral-50 py-32 md:py-40 lg:py-48">
      <div className="mx-auto max-w-3xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <figure className="text-center">
            <blockquote>
              <p className="font-heading text-xl font-medium leading-relaxed text-neutral-900 sm:text-2xl">
                Matt did discovery work to understand our setup and priorities,
                recommended a solution based on organisational fit, and
                completed the initial setup. Highly recommended.
              </p>
            </blockquote>

            <figcaption className="mt-10">
              <cite className="not-italic">
                <span className="block text-sm font-medium text-neutral-900">
                  Cathy Stacey
                </span>
                <span className="mt-1 block text-sm text-neutral-600">
                  Director of Development
                </span>
                <span className="block text-sm text-neutral-600">
                  Brisbane Boys&apos; College
                </span>
              </cite>
              <p className="mt-3 text-xs text-neutral-500">January 2026</p>
            </figcaption>
          </figure>
        </BlurFade>
      </div>
    </section>
  );
}
