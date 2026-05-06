"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onClose?: () => void
) {
  if (href.startsWith("#")) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    onClose?.();
  }
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-rule bg-background/95 backdrop-blur">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="text-sm font-semibold tracking-tight text-ink no-underline hover:text-ink hover:no-underline"
          aria-label="MJS Consulting, return to top"
        >
          MJS Consulting
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-ink-muted no-underline transition-colors hover:text-navy hover:no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-ink-muted hover:text-ink md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-rule bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between border-b border-rule px-6">
              <span className="text-sm font-semibold tracking-tight text-ink">
                MJS Consulting
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-ink-muted hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href, () => setMobileOpen(false));
                  }}
                  className="border-b border-rule py-4 text-base text-ink no-underline last:border-b-0 hover:text-navy hover:no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
