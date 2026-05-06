import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange">
        404
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-navy px-6 py-3 text-sm font-medium text-white no-underline hover:bg-navy-hover hover:text-white hover:no-underline"
      >
        Back to home
      </Link>
    </div>
  );
}
