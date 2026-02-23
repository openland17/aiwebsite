"use client";

import { Clock, Mail, MessageSquare } from "lucide-react";
import FadeContent from "@/components/ui/FadeContent";

const CARDS = [
  {
    icon: Clock,
    title: "Missed after-hours bookings",
    description:
      "Customers who want to book at 9pm on Sunday just can't. They close the tab and move on.",
  },
  {
    icon: Mail,
    title: "Enquiries that go cold",
    description:
      "Custom orders and catering requests sit in an inbox until someone follows up — by then the customer has gone elsewhere.",
  },
  {
    icon: MessageSquare,
    title: "Staff time on repeat questions",
    description:
      "Hours spent answering the same questions about hours, allergens and availability — every single day.",
  },
] as const;

export function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-white/5 bg-[#0D0D12] pt-24 pb-24 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <FadeContent
            duration={0.6}
            threshold={0.1}
            className="lg:w-1/2"
          >
            <p className="text-xs uppercase tracking-widest text-accent">
              THE PROBLEM
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white lg:text-5xl">
              Every missed enquiry is revenue you&apos;ll never see
            </h2>
            <p className="mt-8 max-w-md text-white/60">
              Most hospitality businesses lose bookings and orders every single
              day — not because they have a bad product, but because customers
              can&apos;t reach them when they want to buy.
            </p>
          </FadeContent>

          {/* Right side — 3 cards */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            {CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeContent
                  key={card.title}
                  duration={0.5}
                  delay={i * 0.1}
                  threshold={0.1}
                >
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-8">
                    <Icon className="mb-3 h-6 w-6 text-accent" aria-hidden />
                    <h3 className="text-base font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">
                      {card.description}
                    </p>
                  </div>
                </FadeContent>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
