import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  size?: "default" | "large";
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  size = "default",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent/90 active:scale-[0.98]",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30",
  };
  const sizes = {
    default: "px-6 py-3 text-sm sm:text-base",
    large: "px-8 py-4 text-base sm:text-lg",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
