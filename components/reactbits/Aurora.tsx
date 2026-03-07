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
  colorStops = ["#1B2A4A", "#2563EB", "#1B2A4A"],
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
