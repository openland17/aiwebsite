import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="text-muted">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="rounded-xl bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent/90"
      >
        Back to home
      </Link>
    </div>
  );
}
