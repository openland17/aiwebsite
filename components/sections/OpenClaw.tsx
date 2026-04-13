"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const BENTO_CARDS = [
  {
    title: "Dedicated Mac Mini",
    description:
      "Apple M4, 32GB RAM, 512GB SSD. Always on, always available. Sits on your network, runs your AI workloads without touching the cloud.",
    span: 2,
    hasGrid: true,
    isPrice: false,
  },
  {
    title: "Your choice of AI models",
    description:
      "Qwen, Llama, DeepSeek, or Claude API fallback. Models run locally on the hardware. Your data never leaves your premises.",
    span: 1,
    hasGrid: false,
    isPrice: false,
  },
  {
    title: "Installed and configured",
    description:
      "We source the hardware, install the OS and models, configure Docker sandboxing, set up Telegram or Slack integration, and train your team.",
    span: 1,
    hasGrid: false,
    isPrice: false,
  },
  {
    title: "$8,000 to $10,000",
    description:
      "Hardware, software, installation, configuration, and training. All-in. No monthly fees, no per-seat charges, no surprise invoices.",
    span: 2,
    hasGrid: false,
    isPrice: true,
  },
] as const;

export function OpenClaw() {
  return (
    <section id="openclaw" className="bg-[#050505] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <BlurFade inView inViewMargin="-100px">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim">
            The Product
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            OpenClaw. AI on your hardware.
          </h2>
          <p className="mt-4 max-w-2xl text-foreground-muted">
            A turnkey AI deployment. We source a dedicated Mac Mini, install
            local AI models, configure it for your workflows, and train your
            team. Runs 24/7 on your network.
          </p>
        </BlurFade>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {BENTO_CARDS.map((card, i) => (
            <BlurFade
              key={card.title}
              inView
              delay={i * 0.08}
              inViewMargin="-50px"
              className={card.span === 2 ? "md:col-span-2" : ""}
            >
              <div className="relative h-full overflow-hidden rounded-xl border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-8 transition-colors duration-300 hover:border-white/[0.12]">
                {card.hasGrid && (
                  <FlickeringGrid
                    className="absolute inset-0 z-0"
                    squareSize={4}
                    gridGap={6}
                    color="#3b82f6"
                    maxOpacity={0.12}
                    flickerChance={0.02}
                  />
                )}
                <div className="relative z-10">
                  <h3
                    className={`font-heading font-bold text-white ${
                      card.isPrice ? "text-3xl sm:text-4xl" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground-muted">
                    {card.description}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade inView delay={0.4} inViewMargin="-50px">
          <div className="mt-10 text-center">
            <a
              href="https://calendly.com/mjs-consulting/ai-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Book a Call
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
