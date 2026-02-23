"use client";

import {
  UtensilsCrossed,
  Croissant,
  Dumbbell,
  ShoppingBag,
  Pill,
  PartyPopper,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Cafes",
    description: "Table bookings, function enquiries, menu FAQ",
  },
  {
    icon: Croissant,
    name: "Bakeries & Patisseries",
    description: "Pre-orders, custom cakes, catering boxes",
  },
  {
    icon: Dumbbell,
    name: "Fitness & Wellness",
    description: "Class bookings, membership enquiries, facility FAQ",
  },
  {
    icon: ShoppingBag,
    name: "Specialty Retail",
    description: "Custom orders, product questions, store info",
  },
  {
    icon: Pill,
    name: "Healthcare & Pharmacy",
    description: "Appointment booking, stock enquiries, hours",
  },
  {
    icon: PartyPopper,
    name: "Events & Functions",
    description: "Venue enquiries, package selection, availability",
  },
] as const;

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-[#F8F9FF] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Built for businesses that run on relationships
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          If you take bookings, handle custom orders, or have customers asking
          the same questions — this is for you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center transition-all hover:border-accent/30 hover:shadow-sm"
              >
                <Icon className="mx-auto h-10 w-10 text-accent" aria-hidden />
                <h3 className="mt-4 font-medium text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
