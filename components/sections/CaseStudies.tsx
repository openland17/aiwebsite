"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";

const CASE_STUDIES = [
  {
    industry: "CONSTRUCTION",
    name: "Finishes Management Platform",
    client: "Brisbane property developer",
    description:
      "Replaced an unmanageable finishes spreadsheet for a multi-unit luxury residential build. Custom selection tool with real-time pricing, per-unit tracking, and supplier-ready output.",
    stats: [
      { value: "3", label: "tools shipped" },
      { value: "7 days", label: "to production" },
    ],
  },
  {
    industry: "HOSPITALITY",
    name: "Operations Platform",
    client: "Brisbane hospitality group",
    description:
      "Connected four disconnected systems into a single operational view. POS, reservations, ordering, and rostering on one screen instead of four logins.",
    stats: [
      { value: "4", label: "systems unified" },
      { value: "7 days", label: "to production" },
    ],
  },
  {
    industry: "NONPROFIT",
    name: "Prospect Intelligence",
    client: "Major Australian educational foundation",
    description:
      "Built a queryable donor intelligence database that scored the full prospect list on a 0 to 100 capacity model. Replaced months of manual research with a single dashboard.",
    stats: [
      { value: "1,000+", label: "records processed" },
      { value: "Months to minutes", label: "research time" },
    ],
  },
] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-dim">
            Work
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Real systems. Real operations.
          </h2>
          <p className="mt-4 max-w-xl text-foreground-muted">
            Production tools shipped to real businesses. Not demos, not proofs
            of concept.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <BlurFade key={study.name} inView delay={i * 0.1} inViewMargin="-50px">
              <MagicCard className="h-full">
                <div className="flex h-full flex-col p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {study.industry}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-white">
                    {study.name}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-muted">
                    {study.client}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">
                    {study.description}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[rgba(255,255,255,0.06)] pt-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-heading text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-foreground-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
