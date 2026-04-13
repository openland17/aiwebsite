"use client";

import { Cpu, Brain, Wrench, DollarSign } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const FEATURES = [
  {
    icon: Cpu,
    title: "Dedicated Mac Mini",
    description: "32GB RAM, always-on, runs on your network",
  },
  {
    icon: Brain,
    title: "Local AI Models",
    description: "Qwen, Llama, or Claude API fallback. Your choice",
  },
  {
    icon: Wrench,
    title: "Installed & Configured",
    description: "We source the hardware, install everything, train your team",
  },
  {
    icon: DollarSign,
    title: "Flat Package Price",
    description: "$8,000 to $10,000 all-in",
  },
] as const;

export function OpenClaw() {
  return (
    <section id="openclaw" className="bg-[#050505] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
            Product
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            OpenClaw. AI on your hardware.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            A dedicated AI system running 24/7 on your local network. No cloud
            dependency. No per-seat fees. Your data stays yours.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.15} inViewMargin="-50px">
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.02)] p-8 md:p-12">
            <FlickeringGrid
              className="absolute inset-0 z-0"
              squareSize={4}
              gridGap={6}
              color="#3b82f6"
              maxOpacity={0.15}
              flickerChance={0.02}
            />
            <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)]">
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-10">
              <a
                href="https://calendly.com/mjs-consulting/ai-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Book a Call to Learn More
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
