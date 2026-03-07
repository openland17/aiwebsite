"use client";

import { InlineWidget } from "react-calendly";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";

const BULLETS = [
  "Map your biggest automation opportunities",
  "Get a clear plan — whether you work with us or not",
  "See examples relevant to your industry",
] as const;

export function BookCall() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <BlurFade inView inViewMargin="-100px">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                GET IN TOUCH
              </p>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Let&apos;s talk about what&apos;s slowing your business down
              </h2>
              <p className="mt-6 text-muted">
                Book a 20-minute call. We&apos;ll map your biggest automation
                opportunities and give you a clear plan — whether you work with
                us or not.
              </p>
              <ul className="mt-8 space-y-4">
                {BULLETS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-2 text-sm text-muted">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {CONTACT.email}
                </a>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2} inViewMargin="-100px">
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <InlineWidget
                url="https://calendly.com/mjs-consulting/ai-demo"
                styles={{
                  height: "650px",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "2563EB",
                  textColor: "1F2937",
                }}
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
