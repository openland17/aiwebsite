type CaseSpec = {
  label: string;
  value: string;
};

type CaseStudy = {
  client: string;
  industry: string;
  build: string;
  description: string;
  specs?: CaseSpec[];
  roi?: string;
  note?: string;
};

const HEADLINE_CASE: CaseStudy = {
  client: "Engage Group",
  industry: "Construction (commercial finishes), Brisbane",
  build: "PARC Finishes Estimator",
  description:
    "A custom estimating tool with AI-powered plan analysis. Senior estimators were spending 4 to 8 hours per quote on commercial finishes takeoffs. The deployed system reads commercial plans, extracts the finishes scope, performs takeoffs against the materials database, and outputs a draft quote for senior review. Post-deployment estimator time per quote: 30 to 60 minutes.",
  specs: [
    { label: "Build duration", value: "3 weeks" },
    { label: "Investment", value: "$5,500" },
    { label: "Year-one return", value: "$49,920" },
    { label: "Year-one ROI", value: "9.1×" },
  ],
  roi: "4 hours saved per quote × 3 quotes per week × 52 weeks = 624 hours per year. At a loaded estimator cost of $80/hour: $49,920 annual labour value recovered. Year two onwards: same value at near-zero marginal cost.",
};

const OTHER_CASES: CaseStudy[] = [
  {
    client: "Atlas",
    industry: "AI billing analyst SaaS for ANZ accounting firms",
    build: "In progress",
    description:
      "Automated WIP capture, matter classification, and approximately 60-second timesheet approval. First design partner: Exant Advisory.",
  },
  {
    client: "BBC Foundation",
    industry: "Brisbane Boys' College",
    build: "Donor intelligence platform",
    description:
      "Capital campaign prospect scoring. Replaced months of manual donor research with a queryable database scoring prospects on a 0 to 100 capacity model. Approximately 1,000 records processed.",
  },
  {
    client: "CamoNet",
    industry: "Public computer-vision model",
    build: "DINOv2-based military camouflage classifier",
    description:
      "Published on Hugging Face. Over 22 million downloads, among the most-used Australian-built vision models.",
    note: "Included to demonstrate technical depth; not a typical client engagement.",
  },
  {
    client: "CrashRisk QLD",
    industry: "Queensland Department of Transport and Main Roads open data",
    build: "Severity and fatality classifiers",
    description:
      "Public dataset of 181,000 rows. End-to-end machine learning pipeline from data preparation through model evaluation.",
  },
  {
    client: "ToolKeep and Bowser",
    industry: "Consumer mobile applications",
    build: "Two iOS apps, live on the Apple App Store",
    description:
      "Production Swift and React Native, with real-time government API integration.",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-rule bg-background-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              02
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Selected work
            </h2>
          </div>

          <div className="max-w-3xl">
            <article className="border border-rule bg-background p-8 md:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-dim">
                Headline case
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {HEADLINE_CASE.client}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {HEADLINE_CASE.industry}
              </p>
              <p className="mt-6 text-base font-medium text-ink">
                {HEADLINE_CASE.build}
              </p>
              <p className="mt-3 text-body text-ink-muted">
                {HEADLINE_CASE.description}
              </p>

              {HEADLINE_CASE.specs && (
                <dl className="mt-8 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-4">
                  {HEADLINE_CASE.specs.map((spec) => (
                    <div key={spec.label} className="bg-background p-5">
                      <dt className="text-xs uppercase tracking-[0.1em] text-ink-dim">
                        {spec.label}
                      </dt>
                      <dd className="mt-2 text-lg font-semibold text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {HEADLINE_CASE.roi && (
                <div className="mt-6 border-l-2 border-orange pl-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-dim">
                    ROI calculation
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {HEADLINE_CASE.roi}
                  </p>
                </div>
              )}
            </article>

            <figure className="mt-12 border-l-2 border-navy pl-6">
              <blockquote className="text-lg leading-relaxed text-ink">
                <p>
                  Matt did discovery work to understand our setup and
                  priorities, recommended a solution based on organisational
                  fit, and completed the initial setup. Highly recommended.
                </p>
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-muted">
                <span className="font-medium text-ink">Cathy Stacey</span>,
                Director of Development, Brisbane Boys&apos; College. January
                2026.
              </figcaption>
            </figure>

            <div className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-dim">
                Additional work
              </p>
              <ol className="mt-6 divide-y divide-rule border-t border-rule">
                {OTHER_CASES.map((c) => (
                  <li key={c.client} className="py-7">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-ink">
                        {c.client}
                      </h3>
                      <span className="text-sm text-ink-dim">
                        {c.industry}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-ink">
                      {c.build}
                    </p>
                    <p className="mt-2 text-body text-ink-muted">
                      {c.description}
                    </p>
                    {c.note && (
                      <p className="mt-2 text-sm italic text-ink-dim">
                        {c.note}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
