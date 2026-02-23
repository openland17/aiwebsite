"use client";

import { Zap, ShoppingBag, MessageCircle } from "lucide-react";

const CARDS = [
  {
    icon: Zap,
    title: "Bookings + Live Payment",
    body: "Customers book and pay directly through the chat. No forms, no phone calls, no manual follow-up.",
    tag: "Workshop bookings · Event reservations · Classes",
  },
  {
    icon: ShoppingBag,
    title: "Order & Enquiry Capture",
    body: "Custom orders guided, structured and sent to your team as a ready-to-action brief. Nothing falls through the cracks.",
    tag: "Cakes · Catering · Corporate orders",
  },
  {
    icon: MessageCircle,
    title: "24/7 FAQ",
    body: "Hours, locations, allergens, availability — answered instantly across all your locations. Zero staff time.",
    tag: "Multi-location · After hours · Instant",
  },
] as const;

export function Solution() {
  return (
    <section id="solution" className="bg-[#F8F9FF] py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          WHAT WE BUILD
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          An AI assistant that does the work for you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
          Custom built for your business. Live on your site in a week. No code
          required on your end.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-accent" aria-hidden />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-600">{card.body}</p>
                <p className="mt-6 text-xs text-gray-500">{card.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
