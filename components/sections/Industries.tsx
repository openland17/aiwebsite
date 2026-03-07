"use client";

import { HardHat, UtensilsCrossed, Briefcase, Building2 } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const INDUSTRIES = [
  {
    icon: HardHat,
    name: "Construction & Property Development",
    description:
      "Finish scheduling, cost reconciliation, claim analysis, budget tracking",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality & Food Service",
    description:
      "Booking automation, order capture, customer enquiry handling",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description:
      "Workflow automation, document processing, reporting dashboards",
  },
  {
    icon: Building2,
    name: "Small & Medium Business",
    description:
      "Operations streamlining, spreadsheet replacement, process digitisation",
  },
] as const;

export function Industries() {
  return (
    <section id="industries" className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            INDUSTRIES
          </p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Built for businesses that run on process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            We work across industries where manual processes, spreadsheets, and
            disconnected tools are holding the business back.
          </p>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.name} inView delay={i * 0.1} inViewMargin="-50px">
                <div className="rounded-xl border border-gray-100 bg-white p-6 text-center transition-all hover:border-accent/30 hover:shadow-sm">
                  <Icon
                    className="mx-auto h-10 w-10 text-accent"
                    aria-hidden
                  />
                  <h3 className="mt-4 font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
