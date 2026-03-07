"use client";

import {
  HardHat,
  UtensilsCrossed,
  Briefcase,
  Building2,
  Factory,
  Stethoscope,
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

const PILLS = [
  { icon: HardHat, label: "Construction" },
  { icon: Building2, label: "Property Development" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Stethoscope, label: "Healthcare" },
] as const;

function Pill({ icon: Icon, label }: { icon: typeof HardHat; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
      <Icon className="h-4 w-4 shrink-0 text-accent" />
      <span>{label}</span>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="border-y border-gray-100 bg-light py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted">
          Working with businesses across Australia
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:30s]">
        {PILLS.map((item) => (
          <Pill key={item.label} icon={item.icon} label={item.label} />
        ))}
      </Marquee>
    </section>
  );
}
