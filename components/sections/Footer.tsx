"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
] as const;

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  e.preventDefault();
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-bold tracking-wide text-sm text-gray-900">
              MJS CONSULTING
            </p>
            <p className="mt-2 text-sm text-muted">
              Based in Brisbane. Working with businesses across Australia.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-muted transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {CONTACT.phone}
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-gray-100 pt-8 text-center text-xs text-gray-400">
          &copy; 2026 MJS Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
