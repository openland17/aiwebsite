const ENGAGEMENT_TYPES = [
  {
    title: "Internal tools and process automation",
    description:
      "Custom applications that automate or augment a defined business process.",
  },
  {
    title: "Document and data processing",
    description:
      "Automatic ingestion, classification, and extraction from PDFs and other unstructured inputs.",
  },
  {
    title: "Analytics and scoring systems",
    description:
      "Lead prioritisation, customer scoring, churn prediction, donor intelligence, and risk classification.",
  },
  {
    title: "AI capabilities added to existing software",
    description:
      "CRM enrichment, accounting platform extensions, and internal tool augmentation.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="border-b border-rule bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              01
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              What MJS does
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-body text-ink-muted">
              MJS Consulting builds custom software and integrates AI
              capabilities into existing business tools. The deliverable is
              production software, deployed to the client&apos;s environment,
              with full source code transferred on completion.
            </p>

            <dl className="mt-12 divide-y divide-rule border-t border-rule">
              {ENGAGEMENT_TYPES.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 py-6 md:grid-cols-[260px_1fr] md:gap-8"
                >
                  <dt className="text-base font-medium text-ink">
                    {item.title}
                  </dt>
                  <dd className="text-body text-ink-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
