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
                I engaged Matt as a consultant to assess and implement a work
                management solution. He did some discovery work (pre-meetings
                and an on-site session) to understand our current setup and
                priorities. His recommendation was based on organisational fit
                and our ongoing access to support, and we have ended up with
                Asana. He completed the initial set up and we are now working
                through the transposed content to refine the way we categorise
                and prioritise our workflow. Highly recommended.
              </p>
            </blockquote>

            <figcaption className="mt-10">
              <cite className="not-italic">
                <span className="block text-sm font-medium text-white">
                  Director of Development
                </span>
                <span className="mt-1 block text-sm text-foreground-muted">
                  Major Australian educational foundation
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
