"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "span" | "p";
}

export function BlurText({
  text,
  className,
  delay = 0,
  duration = 0.8,
  as: Component = "h1",
}: BlurTextProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <Component className={cn("overflow-hidden", className)}>
      <motion.span
        className="inline-block"
        initial={{
          filter: "blur(12px)",
          opacity: 0.3,
        }}
        animate={{
          filter: hasAnimated ? "blur(0px)" : "blur(12px)",
          opacity: hasAnimated ? 1 : 0.3,
        }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {text}
      </motion.span>
    </Component>
  );
}
