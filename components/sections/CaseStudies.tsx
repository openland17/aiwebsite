"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";

const CASE_STUDIES = [
  {
    industry: "CONSTRUCTION",
    name: "PARC Finishes",
    client: "Engage Group",
    description:
      "Purpose-built finish scheduling and tracking system for large-scale construction projects. Replaced a multi-spreadsheet workflow that was costing the team hours per week in manual reconciliation.",
    stats: [
      { value: "3", label: "tools shipped" },
      { value: "2-week", label: "delivery" },
    ],
  },
  {
    industry: "HOSPITALITY",
    name: "Rise Bakery",
    client: "Rise Bakery",
    description:
      "Integrated operations platform connecting point-of-sale, booking, ordering, and workforce systems. Built to unify Lightspeed, SevenRooms, me&u, and Tanda into a single operational view.",
    stats: [
      { value: "4", label: "integrations" },
      { value: "1st", label: "paying client" },
    ],
  },
  {
    industry: "NONPROFIT",
    name: "BBC Foundation",
    client: "BBC Foundation",
    description:
      "Donor intelligence system processing 1,169 prospect records with automated scoring, capacity analysis, and strategic segmentation. Delivered as a production-ready dashboard with $429M in identified giving capacity.",
    stats: [
      { value: "1,169", label: "prospects" },
      { value: "$429M", label: "identified" },
    ],
  },
] as const;

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-black py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
            Case Studies
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Real systems. Real results.
          </h2>
          <p className="mt-4 max-w-xl text-foreground-muted">
            Production tools built for real operations — not demos, not proofs of
            concept.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <BlurFade key={study.name} inView delay={i * 0.1} inViewMargin="-50px">
              <MagicCard className="h-full">
                <div className="flex h-full flex-col p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
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
                  <div className="mt-6 flex gap-8 border-t border-[rgba(255,255,255,0.06)] pt-6">
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
