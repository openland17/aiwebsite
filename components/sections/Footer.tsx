"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  e.preventDefault();
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="font-heading text-sm font-bold tracking-wide text-neutral-900">
              MJS
            </span>
            <p className="mt-1 text-sm text-neutral-600">
              Brisbane, Australia
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-neutral-600 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-neutral-200 pt-8 text-center text-xs text-neutral-500">
          &copy; 2026 MJS Consulting
        </p>
      </div>
    </footer>
  );
}
