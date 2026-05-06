const CERTIFICATIONS = [
  "Salesforce Administrator",
  "Agentforce Specialist",
  "PSPO I",
  "ServiceNow BPA",
  "Stanford Machine Learning",
] as const;

export function About() {
  return (
    <section id="about" className="border-b border-rule bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              05
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              About
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-body text-ink-muted">
              MJS Consulting is operated by Matt Smith. Six years in software
              development, with prior background in Queensland Government
              enterprise IT at the Department of Justice and Attorney-General.
              Concurrent advanced machine learning certification at the
              University of New South Wales and a Master of Information
              Technology in Artificial Intelligence at the Queensland University
              of Technology, in progress.
            </p>

            <div className="mt-10 border-t border-rule pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-dim">
                Certifications held
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={cert} className="flex items-center gap-x-6">
                    <span>{cert}</span>
                    {i < CERTIFICATIONS.length - 1 && (
                      <span aria-hidden className="text-rule-strong">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
