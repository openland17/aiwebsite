import { CONTACT } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="border-b border-rule bg-background-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
              05
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Contact
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-body text-ink-muted">
              The fastest way to start a conversation is by email. A 30-minute
              call can be arranged once initial scope is understood.
            </p>

            <dl className="mt-10 divide-y divide-rule border-y border-rule">
              <div className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="text-sm font-medium uppercase tracking-[0.1em] text-ink-dim">
                  {CONTACT.role}
                </dt>
                <dd className="text-body text-ink">{CONTACT.principal}</dd>
              </div>
              <div className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="text-sm font-medium uppercase tracking-[0.1em] text-ink-dim">
                  Email
                </dt>
                <dd className="text-body">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-navy hover:text-navy-hover"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="text-sm font-medium uppercase tracking-[0.1em] text-ink-dim">
                  Phone
                </dt>
                <dd className="text-body">
                  <a
                    href={`tel:${CONTACT.phoneIntl}`}
                    className="text-navy hover:text-navy-hover"
                  >
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8">
                <dt className="text-sm font-medium uppercase tracking-[0.1em] text-ink-dim">
                  Location
                </dt>
                <dd className="text-body text-ink">
                  {CONTACT.location}. Clients across Australia.
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center bg-navy px-7 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-hover hover:text-white hover:no-underline"
              >
                Send an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
