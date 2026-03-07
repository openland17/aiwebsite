"use client";

import { motion } from "framer-motion";
import {
  HardHat,
  UtensilsCrossed,
  Briefcase,
  Building2,
} from "lucide-react";

const PILLS = [
  { icon: HardHat, label: "Construction" },
  { icon: Building2, label: "Property Development" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Briefcase, label: "Professional Services" },
] as const;

export function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-light py-6">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted">
          Working with businesses across Australia
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
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
