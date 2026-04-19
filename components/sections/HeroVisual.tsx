"use client";

import { useEffect, useState } from "react";

type StatRow = {
  label: string;
  value: number;
  unit: string;
  delta: string;
  trend: number[];
  accent?: boolean;
};

type VenueRow = {
  name: string;
  pos: string;
  reservations: string;
  syncOk: boolean;
};

const STATS: StatRow[] = [
  {
    label: "Covers tonight",
    value: 184,
    unit: "",
    delta: "+12",
    trend: [0.3, 0.5, 0.4, 0.7, 0.8, 0.95, 1.0],
    accent: true,
  },
  {
    label: "Revenue WTD",
    value: 48720,
    unit: "$",
    delta: "+8.4%",
    trend: [0.2, 0.35, 0.55, 0.7, 0.75, 0.82, 0.9],
  },
];

const VENUES: Omit<VenueRow, "syncOk">[] = [
  { name: "Kangaroo Point", pos: "$4,210", reservations: "42 / 60" },
  { name: "South Bank", pos: "$6,180", reservations: "58 / 72" },
  { name: "Fortitude Valley", pos: "$3,905", reservations: "31 / 48" },
  { name: "Teneriffe", pos: "$5,020", reservations: "49 / 56" },
];

function Sparkline({ data, accent }: { data: number[]; accent?: boolean }) {
  const w = 120;
  const h = 28;
  const max = Math.max(...data);
  const points = data
    .map(
      (d, i) =>
        `${(i / (data.length - 1)) * w},${h - (d / max) * (h - 2) - 1}`
    )
    .join(" ");
  const stroke = accent ? "#2563eb" : "rgba(0,0,0,0.35)";
  const fill = accent ? "rgba(37,99,235,0.15)" : "rgba(0,0,0,0.04)";
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="mt-2.5 block"
      aria-hidden
    >
      <polyline
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon fill={fill} points={`0,${h} ${points} ${w},${h}`} />
    </svg>
  );
}

export function HeroVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1400);
    return () => clearInterval(id);
  }, []);

  const venues: VenueRow[] = VENUES.map((v, i) => ({
    ...v,
    syncOk: !(i === 2 && tick % 3 === 0),
  }));

  return (
    <div
      className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]"
      aria-hidden
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
        <span className="ml-3 font-mono text-[11px] tracking-[0.08em] text-neutral-500">
          ops.mjs-consulting.com.au/dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-live-pulse rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
          <span className="font-mono text-[10px] text-neutral-500">
            LIVE
          </span>
        </span>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 gap-px bg-neutral-200">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white px-5 py-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
              {s.label}
            </div>
            <div className="mt-2 font-heading text-[28px] font-bold leading-none tracking-tight text-neutral-900">
              {s.unit}
              {s.value.toLocaleString()}
              <span className="ml-1.5 font-mono text-[11px] font-normal text-[#16a34a]">
                {s.delta}
              </span>
            </div>
            <Sparkline data={s.trend} accent={s.accent} />
          </div>
        ))}
      </div>

      {/* Venue table */}
      <div className="px-5 pb-4 pt-3.5">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] items-center border-b border-neutral-200 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
          <span>Venue</span>
          <span>POS</span>
          <span>Reservations</span>
          <span>Status</span>
        </div>
        {venues.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] items-center border-b border-neutral-100 py-2.5 text-[13px]"
          >
            <span className="font-medium text-neutral-900">{row.name}</span>
            <span className="font-mono text-[12px] text-neutral-600">
              {row.pos}
            </span>
            <span className="font-mono text-[12px] text-neutral-600">
              {row.reservations}
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  row.syncOk
                    ? "bg-[#16a34a] shadow-[0_0_6px_rgba(22,163,74,0.4)]"
                    : "bg-[#d97706] shadow-[0_0_6px_rgba(217,119,6,0.4)]"
                }`}
              />
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.1em] ${
                  row.syncOk ? "text-[#16a34a]" : "text-[#d97706]"
                }`}
              >
                {row.syncOk ? "OK" : "SYNC"}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
