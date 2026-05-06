import { BUSINESS } from "@/lib/constants";

const COMPLIANCE = [
  "Australian-registered ABN. GST-registered.",
  "Professional Indemnity and Public Liability insurance held.",
  "GST tax invoices issued for all engagements.",
  "Mutual NDAs available on request.",
] as const;

export function Footer() {
  return (
    <footer className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              07
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Compliance
            </h2>
          </div>

          <div className="max-w-3xl">
            <ul className="space-y-2 text-body text-ink-muted">
              {COMPLIANCE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-body text-ink">
              ABN: {BUSINESS.abn}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-rule pt-8 text-xs text-ink-dim md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.legalName}. Brisbane,
            Australia.
          </p>
          <p>ABN {BUSINESS.abn}</p>
        </div>
      </div>
    </footer>
  );
}
