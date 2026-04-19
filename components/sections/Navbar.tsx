"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, AUDIT_URL } from "@/lib/constants";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 h-16 transition-colors duration-300 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="font-heading text-sm font-bold tracking-wide text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          aria-label="MJS Consulting, go to top"
        >
          MJS
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-neutral-600 transition hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded px-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Get a Free Audit
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              aria-hidden
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white border-l border-neutral-200 md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-6">
                <span className="font-heading text-sm font-bold tracking-wide text-neutral-900">
                  MJS
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, () => setMobileOpen(false));
                    }}
                    className="rounded-lg px-4 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full rounded-lg bg-neutral-900 px-4 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/50"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Audit
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
