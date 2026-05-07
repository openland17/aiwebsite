const TESTIMONIALS = [
  {
    quote:
      "Matt at MJS Consulting has been a genuine pleasure to work with. He's helped us integrate AI across operations, reporting and marketing in ways that have made a real difference to the business. Highly recommended.",
    name: "Jared Lawler",
    role: "Owner, FORM",
    date: "May 2026",
  },
  {
    quote:
      "Matt did discovery work to understand our setup and priorities, recommended a solution based on organisational fit, and completed the initial setup. Highly recommended.",
    name: "Cathy Stacey",
    role: "Director of Development, Brisbane Boys' College",
    date: "January 2026",
  },
] as const;

export function References() {
  return (
    <section
      id="references"
      className="border-b border-rule bg-background-muted py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              02
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              References
            </h2>
          </div>

          <div className="max-w-3xl space-y-12">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border-l-2 border-navy pl-6">
                <blockquote className="text-lg leading-relaxed text-ink">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-4 text-sm text-ink-muted">
                  <span className="font-medium text-ink">{t.name}</span>,{" "}
                  {t.role}. {t.date}.
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
