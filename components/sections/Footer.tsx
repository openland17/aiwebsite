"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";

const FOOTER_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Build", href: "#solution" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  e.preventDefault();
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left */}
          <div>
            <p className="font-bold tracking-widest text-sm text-white">
              ZEPHYR <span className="text-accent">SYSTEMS</span>
            </p>
            <p className="mt-2 text-sm text-white/40">
              Based in Brisbane. Working with local businesses across QLD.
            </p>
          </div>

          {/* Centre */}
          <div className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <a
              href="mailto:mattsmith.info@gmail.com"
              className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              mattsmith.info@gmail.com
            </a>
            <a
              href="tel:+61407733940"
              className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              +61 407 733 940
            </a>
            <a
              href="https://linkedin.com/in/mattsmithtech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F] rounded"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
              linkedin.com/in/mattsmithtech
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/[0.05] pt-8 text-center text-xs text-white/20">
          © 2026 Zephyr Systems. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
