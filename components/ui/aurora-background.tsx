"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps
  extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({
  className,
  children,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent-secondary/25 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent)_0%,transparent_50%)] opacity-30" />
      {children}
    </div>
  );
}
