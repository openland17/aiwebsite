import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className,
  id,
  as: Component = "section",
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn("mx-auto max-w-7xl px-6 py-16 sm:py-24", className)}
    >
      {children}
    </Component>
  );
}
