import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export function Card({
  children,
  className,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8",
        bordered && "border border-border-subtle bg-white/[0.02]",
        className
      )}
    >
      {children}
    </div>
  );
}
