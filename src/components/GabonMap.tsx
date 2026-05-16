interface City {
  id: string;
  name: string;
  cx: number;
  cy: number;
  status: "actif" | "phase1" | "phase2" | "phase3";
  star?: boolean;
}

const CITIES: City[] = [
  { id: "lbv", name: "Libreville", cx: 110, cy: 180, status: "actif", star: true },
  { id: "pog", name: "Port-Gentil", cx: 90, cy: 270, status: "actif" },
  { id: "oye", name: "Oyem", cx: 240, cy: 110, status: "actif" },
  { id: "lbq", name: "Lambaréné", cx: 170, cy: 290, status: "actif" },
  { id: "fcv", name: "Franceville", cx: 360, cy: 360, status: "actif" },
  { id: "klm", name: "Koulamoutou", cx: 280, cy: 340, status: "actif" },
  { id: "mou", name: "Mouila", cx: 190, cy: 380, status: "phase1" },
  { id: "tch", name: "Tchibanga", cx: 130, cy: 450, status: "phase2" },
  { id: "mkk", name: "Makokou", cx: 320, cy: 200, status: "phase2" },
  { id: "ndd", name: "Ndendé", cx: 220, cy: 460, status: "phase3" },
];

const STATUS_LABEL: Record<City["status"], string> = {
  actif: "POP Actif",
  phase1: "Phase 1 (en cours)",
  phase2: "Phase 2 (planifié)",
  phase3: "Phase 3 (planifié)",
};

import { useState } from "react";

export function GabonMap({ size = "lg" }: { size?: "sm" | "lg" }) {
  const [active, setActive] = useState<City | null>(null);
  const isLg = size === "lg";

  return (
    <div className="relative">
      <svg viewBox="0 0 480 560" className={`w-full ${isLg ? "max-h-[640px]" : "max-h-[420px]"}`}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Gabon silhouette (stylized) */}
        <path
          d="M 70 110 L 140 90 L 220 80 L 290 95 L 360 130 L 410 180 L 420 250 L 400 320 L 380 390 L 340 460 L 270 500 L 180 510 L 110 480 L 70 420 L 50 340 L 55 250 L 60 180 Z"
          fill="rgba(26,122,191,0.08)"
          stroke="rgba(58,174,224,0.35)"
          strokeWidth="1.5"
        />

        {/* Existing backbone — solid */}
        <path
          d="M 110 180 L 90 270 L 170 290 L 280 340 L 360 360 M 110 180 L 240 110 M 280 340 L 240 110"
          fill="none"
          stroke="#3aaee0"
          strokeWidth="2.5"
          filter="url(#glow)"
          opacity="0.9"
        />

        {/* Extensions — dashed */}
        <path
          d="M 280 340 L 320 200 M 170 290 L 190 380 L 130 450 M 190 380 L 220 460"
          fill="none"
          stroke="#6dcff6"
          strokeWidth="2"
          strokeDasharray="6 5"
          opacity="0.65"
        />

        {/* Cities */}
        {CITIES.map((c) => (
          <g key={c.id} className="cursor-pointer" onClick={() => setActive(c)}>
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.star ? 9 : 6}
              fill={c.status === "actif" ? "#27ae60" : "#c9a84c"}
              stroke="#fff"
              strokeWidth="1.5"
            />
            {c.status === "actif" && c.star && (
              <circle cx={c.cx} cy={c.cy} r="14" fill="none" stroke="#27ae60" strokeWidth="1" className="pulse-dot" />
            )}
            <text
              x={c.cx + 12}
              y={c.cy + 4}
              fill="#fff"
              fontFamily="Barlow Condensed"
              fontSize={isLg ? "13" : "10"}
              fontWeight="600"
              className="select-none"
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-5 mt-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-blue-light" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Existant 1 700 km</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-blue-sky" style={{ borderTop: "2px dashed #6dcff6", background: "transparent" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Extensions +1 650 km</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-active" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP actif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP planifié</span>
        </div>
      </div>

      {active && (
        <div className="absolute top-4 right-4 bg-navy-deep border border-blue-light/30 px-5 py-4 rounded-sm shadow-2xl min-w-[200px]">
          <button onClick={() => setActive(null)} className="absolute top-2 right-2 text-white/40 hover:text-white text-sm">×</button>
          <div className="font-mono text-[10px] tracking-wider text-blue-light uppercase mb-1">
            {STATUS_LABEL[active.status]}
          </div>
          <div className="font-display font-bold text-xl uppercase text-white">{active.name}</div>
        </div>
      )}
    </div>
  );
}
