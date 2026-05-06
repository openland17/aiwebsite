const SPECS = [
  {
    label: "Duration",
    value:
      "Typically 4 to 12 weeks from kickoff to launch, scoped per engagement.",
  },
  {
    label: "Payment terms",
    value: "50% deposit on signed proposal. 50% balance on launch.",
  },
  {
    label: "Deliverable",
    value:
      "A defined piece of production software, integrated with the client's existing tools, deployed to the client's environment.",
  },
  {
    label: "Engagement format",
    value:
      "Fixed scope. Weekly working software demonstrations. Defined acceptance criteria documented in the proposal.",
  },
  {
    label: "Performance guarantee",
    value:
      "A measurable ROI metric is agreed in writing prior to commencement. If the deployed system has not achieved the agreed metric within 90 days of launch, work continues at no additional cost until the metric is met.",
  },
  {
    label: "Client receives",
    value:
      "Full source code and intellectual property transfer on final payment. All credentials and infrastructure access. Architecture diagrams, written runbook, and evaluation reports. 30 days of post-launch support.",
  },
  {
    label: "Optional ongoing support",
    value:
      "From $3,500 per month + GST. Monitoring, model retraining, scoped iteration hours, one business day issue response, and quarterly review. Three-month minimum term. Most deployed systems operate reliably for the first year without it.",
  },
] as const;

export function Engagement() {
  return (
    <section id="engagements" className="border-b border-rule bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              03
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              How engagements work
            </h2>
          </div>

          <div className="max-w-3xl">
            <dl className="divide-y divide-rule border-y border-rule">
              {SPECS.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8"
                >
                  <dt className="text-sm font-medium uppercase tracking-[0.1em] text-ink-dim">
                    {spec.label}
                  </dt>
                  <dd className="text-body text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
