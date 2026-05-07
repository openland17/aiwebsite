import Link from "next/link";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-rule bg-background px-6 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
          MJS Consulting
        </p>
        <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Custom AI for Australian businesses.
        </h1>
        <p className="mt-8 max-w-2xl text-body-lg text-ink-muted">
          Custom applications and AI capabilities integrated into existing
          business software. The deliverable is production software, deployed
          to the client&apos;s environment.
        </p>
        <div className="mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center bg-navy px-7 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-navy-hover hover:text-white"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
