const ENGAGEMENT_TYPES = [
  {
    title: "Internal tools and process automation",
    description:
      "Custom applications that automate or augment a defined business process. Examples include estimating tools that read commercial plans and produce draft quotes against a materials database.",
  },
  {
    title: "Document and data processing",
    description:
      "Automatic ingestion, classification, and extraction from PDFs and other unstructured inputs, with structured outputs written into the systems already in use.",
  },
  {
    title: "Analytics and scoring systems",
    description:
      "Lead prioritisation, customer scoring, churn prediction, donor intelligence, and risk classification, built on the client's data and deployed inside the client's environment.",
  },
  {
    title: "AI capabilities added to existing software",
    description:
      "CRM enrichment, accounting platform extensions, and internal tool augmentation. The capability is integrated where staff already work, not surfaced as a separate product.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="border-b border-rule bg-background py-24 md:py-32">
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
            <div className="space-y-6 text-body text-ink-muted">
              <p>
                MJS Consulting builds custom software for Australian businesses,
                with AI capabilities integrated where they add value. The work
                takes two related shapes: custom applications and tools that
                automate or augment a defined business process, and AI
                capabilities integrated into existing software, such as
                automatic PDF ingestion, document classification, and generated
                outputs from unstructured inputs.
              </p>
              <p>
                Engagements are fixed scope and fixed fee, agreed in writing
                before work begins. A measurable ROI metric is documented in the
                proposal. The deliverable is production software, deployed to
                the client&apos;s environment, with full source code and
                intellectual property transferred on final payment.
              </p>
            </div>

            <div className="mt-12 border-t border-rule">
              <p className="mt-12 text-sm font-medium uppercase tracking-[0.12em] text-ink-dim">
                Common engagement types
              </p>
              <dl className="mt-6 divide-y divide-rule">
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
      </div>
    </section>
  );
}
