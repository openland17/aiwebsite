"use client";

import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-border-subtle",
        "backdrop-blur-xl bg-background/80"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="#hero"
          className="text-lg font-semibold text-foreground transition hover:text-accent"
        >
          {SITE.name}
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <CTAButton href="#demo" variant="primary" size="default">
            Book a demo
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}
