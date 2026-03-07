"use client";

import { Cog, Wrench, Brain } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";

const CARDS = [
  {
    icon: Cog,
    title: "Process Automation",
    body: "Replace manual workflows with intelligent systems. Data entry, reconciliation, reporting — automated end to end.",
  },
  {
    icon: Wrench,
    title: "Custom Business Tools",
    body: "Web apps built for exactly how your business works. Not off-the-shelf software that almost fits — tools designed around your process.",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    body: "Document extraction, smart matching, predictive insights. Your data working harder so your team doesn't have to.",
  },
] as const;

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <BlurFade inView inViewMargin="-100px">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            WHAT WE DO
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Custom AI solutions for how your business actually works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Not off-the-shelf SaaS. We build tools tailored to your operations,
            your data, and your team.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <BlurFade key={card.title} inView delay={i * 0.15} inViewMargin="-50px">
                <MagicCard
                  gradientColor="#dbeafe"
                  gradientOpacity={0.6}
                  className="h-full shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="p-8 text-left">
                    <Icon className="h-8 w-8 text-accent" aria-hidden />
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{card.body}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
