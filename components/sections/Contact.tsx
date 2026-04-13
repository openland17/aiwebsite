"use client";

import { Mail, Phone } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { CONTACT } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";
import Aurora from "@/components/reactbits/Aurora";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-40">
      <Aurora
        colorStops={["#0a0a2e", "#1e3a5f", "#0a0a2e"]}
        blend={0.25}
        amplitude={0.6}
        speed={0.3}
        className="pointer-events-none opacity-40"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground-muted">
              Book a 20-minute call. We&apos;ll map your biggest operational
              bottlenecks and give you a clear plan, whether you work with us or
              not.
            </p>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.15} inViewMargin="-100px">
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)]">
            <InlineWidget
              url="https://calendly.com/mjs-consulting/ai-demo"
              styles={{
                height: "650px",
                overflow: "hidden",
              }}
              pageSettings={{
                backgroundColor: "000000",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "3b82f6",
                textColor: "e5e7eb",
              }}
            />
          </div>
        </BlurFade>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-muted">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
