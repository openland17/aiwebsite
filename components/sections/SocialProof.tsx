"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Croissant,
  Dumbbell,
  ShoppingBag,
  Pill,
  PartyPopper,
} from "lucide-react";

const PILLS = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafes" },
  { icon: Croissant, label: "Bakeries & Patisseries" },
  { icon: Dumbbell, label: "Fitness & Wellness" },
  { icon: ShoppingBag, label: "Specialty Retail" },
  { icon: Pill, label: "Healthcare & Pharmacy" },
  { icon: PartyPopper, label: "Events & Functions" },
] as const;

export function SocialProof() {
  return (
    <section className="border-y border-white/[0.08] bg-white/[0.02] py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/40">
          Trusted by businesses across Brisbane
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {PILLS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-white/50" />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
