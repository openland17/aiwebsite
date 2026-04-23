import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "ToolKeep",
    template: "%s — ToolKeep",
  },
  robots: { index: true, follow: true },
};

export default function ToolKeepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen bg-[#0A0A0B] text-white antialiased"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div className="mx-auto max-w-[720px] px-6 pb-32 pt-20">
        <header className="mb-12 border-b border-[#2C2C2E] pb-6">
          <Link
            href="/toolkeep/privacy"
            className="inline-flex items-center gap-2.5 text-[18px] font-semibold text-white"
          >
            <span
              aria-hidden
              className="h-3 w-3 rounded-[3px] bg-[#F59E0B]"
            />
            ToolKeep
          </Link>
          <nav className="mt-6 flex gap-6 text-sm">
            <Link
              href="/toolkeep/privacy"
              className="text-white/40 transition-colors hover:text-[#F59E0B]"
            >
              Privacy
            </Link>
            <Link
              href="/toolkeep/terms"
              className="text-white/40 transition-colors hover:text-[#F59E0B]"
            >
              Terms
            </Link>
            <Link
              href="/toolkeep/support"
              className="text-white/40 transition-colors hover:text-[#F59E0B]"
            >
              Support
            </Link>
          </nav>
        </header>

        {children}

        <footer className="mt-20 border-t border-[#2C2C2E] pt-8 text-sm text-white/40">
          Built by MJS Consulting, Brisbane, Australia.
        </footer>
      </div>
    </div>
  );
}
