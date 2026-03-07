All components below are self-contained. Paste each into the file path shown.
Run `npm install framer-motion clsx tailwind-merge` first.

---

## 1. `components/magicui/shimmer-button.tsx`

```tsx
"use client";
import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "100px",
  shimmerDuration = "3s",
  background = "rgba(109, 40, 217, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      {...props}
    >
      {/* Shimmer */}
      <div
        className={cn(
          "absolute inset-0 overflow-visible [container-type:size]",
        )}
      >
        <div className="absolute inset-0 h-[100cqh] animate-[shimmer-slide_var(--speed)_ease-in-out_infinite_alternate] [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-[spin-around_calc(var(--speed)*2)_infinite_linear] absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {/* Cut */}
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
      {/* Content */}
      <span className="relative z-10 text-sm font-medium">{children}</span>
    </button>
  );
}
```

Add to `globals.css`:
```css
@keyframes shimmer-slide {
  to { transform: translate(calc(100cqw - 100%), 0); }
}
@keyframes spin-around {
  0% { transform: translateZ(0) rotate(0); }
  15%, 35% { transform: translateZ(0) rotate(90deg); }
  65%, 85% { transform: translateZ(0) rotate(270deg); }
  100% { transform: translateZ(0) rotate(360deg); }
}
```

---

## 2. `components/magicui/border-beam.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#7c3aed",
  colorTo = "#06b6d4",
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--border-width": borderWidth,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "[background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(var(--angle),transparent_20%,var(--color-from),var(--color-to),transparent_80%)_border-box]",
        "[animation:border-beam-rotate_calc(var(--duration)*1s)_linear_infinite]",
        "[animation-delay:var(--delay)]",
        className
      )}
    />
  );
}
```

Add to `globals.css`:
```css
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes border-beam-rotate {
  to { --angle: 360deg; }
}
```

---

## 3. `components/magicui/animated-gradient-text.tsx`

```tsx
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
        "cursor-pointer backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]",
        className
      )}
    >
      <span
        className={cn(
          "inline animate-gradient bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
          "[--bg-size:300%]"
        )}
      >
        {children}
      </span>
    </div>
  );
}
```

Add to `globals.css`:
```css
@keyframes gradient {
  to { background-position: var(--bg-size, 300%) 0; }
}
.animate-gradient {
  animation: gradient 8s linear infinite;
}
```

---

## 4. `components/magicui/word-rotate.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordRotate({ words, duration = 2500, className }: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words, duration]);

  return (
    <div className="overflow-hidden inline-flex">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={cn("inline-block", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
```

---

## 5. `components/magicui/blur-fade.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: { hidden: { y: number }; visible: { y: number } };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  blur?: string;
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isVisible = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={combinedVariants}
        transition={{ delay: 0.04 + delay, duration, ease: "easeOut" }}
        className={cn("w-full", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 6. `components/magicui/marquee.tsx`

```tsx
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",
              reverse && "[animation-direction:reverse]",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
```

Add to `globals.css`:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}
.animate-marquee { animation: marquee var(--duration) linear infinite; }
.animate-marquee-vertical { animation: marquee-vertical var(--duration) linear infinite; }
```

---

## 7. `components/magicui/magic-card.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface MagicCardProps {
  children?: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#1e1b4b",
  gradientOpacity = 0.8,
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function onMouseLeave() {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }

  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`;

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative flex overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f]",
        className
      )}
    >
      <div className="relative z-10 w-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background, opacity: gradientOpacity }}
      />
    </div>
  );
}
```

---

## 8. `components/magicui/number-ticker.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    });
  }, [springValue, decimalPlaces]);

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums text-black dark:text-white tracking-wider", className)}
    />
  );
}
```

---

## 9. `components/magicui/retro-grid.tsx`

```tsx
import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
  cellSize?: number;
  opacity?: number;
  lightLineColor?: string;
  darkLineColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}: RetroGridProps) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        className
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [opacity:var(--opacity)] [width:600vw]"
          style={{
            backgroundImage: `linear-gradient(to right, ${lightLineColor} 1px, transparent 0), linear-gradient(to bottom, ${lightLineColor} 1px, transparent 0)`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>
  );
}
```

Add to `globals.css`:
```css
@keyframes grid {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
.animate-grid { animation: grid 15s linear infinite; }
```

---

## 10. `components/magicui/shine-border.tsx`

```tsx
"use client";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface ShineBorderProps {
  className?: string;
  shineColor?: string | string[];
  borderWidth?: number;
  duration?: number;
}

export function ShineBorder({
  className,
  shineColor = ["#7c3aed", "#06b6d4", "#a78bfa"],
  borderWidth = 1,
  duration = 14,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(ellipse at 0% 0%, ${Array.isArray(shineColor) ? shineColor.join(", ") : shineColor}, transparent 50%)`,
          backgroundSize: "300% 300%",
          "--shine-color": Array.isArray(shineColor) ? shineColor.join(", ") : shineColor,
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]",
        "[background:conic-gradient(from_var(--border-angle),transparent_20%,var(--shine-color))_border-box]",
        "[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]",
        "[mask-composite:xor]",
        "animate-[shine-rotate_var(--duration)_linear_infinite]",
        className
      )}
    />
  );
}
```

Add to `globals.css`:
```css
@property --border-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes shine-rotate {
  to { --border-angle: 360deg; }
}
```

---

## 11. `components/reactbits/BlurText.tsx`

```tsx
"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "characters";
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
  variant?: Variants;
}

const buildVariants = (direction: "top" | "bottom"): Variants => ({
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
    y: direction === "top" ? -20 : 20,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
});

export default function BlurText({
  text,
  delay = 100,
  className,
  animateBy = "words",
  direction = "bottom",
  onAnimationComplete,
  variant,
}: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const variants = variant || buildVariants(direction);

  return (
    <motion.p
      ref={ref}
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onAnimationComplete={onAnimationComplete}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ delay: i * (delay / 1000) }}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.25em" : "0" }}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.p>
  );
}
```

---

## 12. `components/reactbits/Aurora.tsx`

```tsx
"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  speed?: number;
  blend?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ["#3A1C71", "#D76D77", "#FFAF7B"],
  amplitude = 1.0,
  speed = 0.5,
  blend = 0.5,
  className,
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const parseColor = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = (timestamp: number) => {
      timeRef.current = timestamp * 0.001 * speed;
      const t = timeRef.current;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      const numLayers = 3;
      for (let layer = 0; layer < numLayers; layer++) {
        const offset = (layer / numLayers) * Math.PI * 2;
        const colorIdx = layer % colorStops.length;
        const nextColorIdx = (layer + 1) % colorStops.length;
        const c1 = parseColor(colorStops[colorIdx]);
        const c2 = parseColor(colorStops[nextColorIdx]);
        const mix = (Math.sin(t + offset) + 1) / 2;

        const r = Math.round(lerp(c1.r, c2.r, mix));
        const g = Math.round(lerp(c1.g, c2.g, mix));
        const b = Math.round(lerp(c1.b, c2.b, mix));

        const cx = W * (0.3 + 0.4 * Math.sin(t * 0.7 + offset));
        const cy = H * (0.3 + 0.4 * Math.cos(t * 0.5 + offset * 1.3));
        const radius = W * (0.4 + 0.2 * amplitude * Math.sin(t * 0.3 + offset));

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `rgba(${r},${g},${b},${blend})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [colorStops, amplitude, speed, blend]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
    />
  );
}
```

---

## 13. `components/reactbits/Particles.tsx`

```tsx
"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
  size?: number;
  speed?: number;
}

export default function Particles({
  className,
  quantity = 60,
  color = "#ffffff",
  size = 1.5,
  speed = 0.3,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: quantity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      alpha: Math.random() * 0.6 + 0.1,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const hex = color.replace("#", "");
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [quantity, color, size, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
    />
  );
}
```

---

## 14. `components/reactbits/SplitText.tsx`

```tsx
"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitBy?: "words" | "characters";
  from?: "bottom" | "top" | "left" | "right";
  threshold?: number;
}

export default function SplitText({
  text,
  className,
  delay = 50,
  duration = 0.5,
  ease = "easeOut",
  splitBy = "words",
  from = "bottom",
  threshold = 0.1,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const elements = splitBy === "words" ? text.split(" ") : text.split("");

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -20 : from === "right" ? 20 : 0,
      y: from === "top" ? -20 : from === "bottom" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ delay: i * (delay / 1000) }}
          className="inline-block"
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.span>
  );
}
```

---

## 15. `components/reactbits/Magnet.tsx`

```tsx
"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagnetProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  range?: number;
}

export default function Magnet({
  children,
  className,
  strength = 40,
  range = 100,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < range) {
      setPos({ x: (dx / dist) * strength * (1 - dist / range), y: (dy / dist) * strength * (1 - dist / range) });
    }
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.1 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
```

---

## 16. `lib/utils.ts` (if you don't already have it)

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## globals.css — all animations combined

Add these to your `app/globals.css` (or `styles/globals.css`):

```css
/* Border beam */
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes border-beam-rotate {
  to { --angle: 360deg; }
}

/* Shine border */
@property --border-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes shine-rotate {
  to { --border-angle: 360deg; }
}

/* Shimmer button */
@keyframes shimmer-slide {
  to { transform: translate(calc(100cqw - 100%), 0); }
}
@keyframes spin-around {
  0% { transform: translateZ(0) rotate(0); }
  15%, 35% { transform: translateZ(0) rotate(90deg); }
  65%, 85% { transform: translateZ(0) rotate(270deg); }
  100% { transform: translateZ(0) rotate(360deg); }
}

/* Gradient text */
@keyframes gradient {
  to { background-position: var(--bg-size, 300%) 0; }
}
.animate-gradient { animation: gradient 8s linear infinite; }

/* Marquee */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}
.animate-marquee { animation: marquee var(--duration) linear infinite; }
.animate-marquee-vertical { animation: marquee-vertical var(--duration) linear infinite; }

/* Retro grid */
@keyframes grid {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
.animate-grid { animation: grid 15s linear infinite; }
```

---