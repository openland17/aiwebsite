const LIMITATIONS = [
  "Strategy consulting, advisory retainers, or AI training programs.",
  "Subscription software, hosted platforms, or licensed products.",
  "Engagements with insufficient projected ROI to justify a custom build (typically below approximately $30,000 in annual value created or recovered).",
  "Problems primarily related to sales, hiring, organisational structure, or culture.",
  "General-purpose chatbots or conversational interfaces without a defined operational function.",
] as const;

export function ScopeLimitations() {
  return (
    <section
      id="scope"
      className="border-b border-rule bg-background-muted py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              04
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Scope limitations
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-body text-ink-muted">
              The following are outside the scope of MJS engagements:
            </p>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {LIMITATIONS.map((item) => (
                <li
                  key={item}
                  className="py-5 text-body text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-body text-ink-muted">
              If an initial call identifies that the client&apos;s primary need
              falls within these limitations, no proposal is issued.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
