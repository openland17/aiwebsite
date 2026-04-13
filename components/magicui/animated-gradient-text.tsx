import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm",
        "cursor-pointer backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
        className
      )}
    >
      <span
        className={cn(
          "inline animate-gradient bg-gradient-to-r from-[#3b82f6] via-[#93c5fd] to-[#3b82f6] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
          "[--bg-size:300%]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
