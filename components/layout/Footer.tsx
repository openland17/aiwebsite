import Link from "next/link";
import { COPY, CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-sm text-muted">
          {COPY.footer.tagline}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-muted transition hover:text-foreground"
          >
            {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="text-muted transition hover:text-foreground"
          >
            {CONTACT.phone}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-foreground"
          >
            LinkedIn
          </a>
          <Link
            href={CONTACT.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-foreground"
          >
            {CONTACT.website.replace("https://", "")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
