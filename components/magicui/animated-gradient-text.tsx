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
        "group relative mx-auto flex max-w-fit items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm",
        "cursor-pointer backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]",
        className
      )}
    >
      <span
        className={cn(
          "inline animate-gradient bg-gradient-to-r from-[#2563EB] via-[#60a5fa] to-[#2563EB] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
          "[--bg-size:300%]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
