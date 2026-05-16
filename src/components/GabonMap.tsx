interface City {
  id: string;
  name: string;
  cx: number;
  cy: number;
  status: "actif" | "phase1" | "phase2" | "phase3" | "phase4";
  star?: boolean;
}

const CITIES: City[] = [
  { id: "lbv", name: "Libreville", cx: 110, cy: 180, status: "actif", star: true },
  { id: "pog", name: "Port-Gentil", cx: 90, cy: 270, status: "phase2" },
  { id: "oye", name: "Oyem", cx: 240, cy: 110, status: "actif" },
  { id: "lbq", name: "Lambaréné", cx: 170, cy: 290, status: "actif" },
  { id: "fcv", name: "Franceville", cx: 360, cy: 360, status: "actif" },
  { id: "klm", name: "Koulamoutou", cx: 280, cy: 340, status: "phase3" },
  { id: "mou", name: "Mouila", cx: 190, cy: 380, status: "phase1" },
  { id: "tch", name: "Tchibanga", cx: 130, cy: 450, status: "phase1" },
  { id: "mkk", name: "Makokou", cx: 320, cy: 200, status: "phase4" },
  { id: "ndd", name: "Ndendé", cx: 220, cy: 460, status: "phase3" },
];

const STATUS_LABEL: Record<City["status"], string> = {
  actif: "PoP Actif",
  phase1: "Phase 1 — Mouila / Tchibanga",
  phase2: "Phase 2 — Port-Gentil / Yombi",
  phase3: "Phase 3 — Ndendé / Koulamoutou",
  phase4: "Phase 4 — Makokou / Kélé",
};

import { useState } from "react";

export function GabonMap({ size = "lg", activePhase = 0 }: { size?: "sm" | "lg"; activePhase?: 0 | 1 | 2 | 3 | 4 }) {
  const [active, setActive] = useState<City | null>(null);
  const isLg = size === "lg";

  const phaseFill = (p: City["status"]) => {
    if (p === "actif") return "#0082C6";
    const idx = Number(p.replace("phase", ""));
    return activePhase >= idx ? "#DDDB00" : "rgba(221,219,0,0.35)";
  };

  return (
    <div className="relative">
      <svg viewBox="0 0 480 560" className={`w-full ${isLg ? "max-h-[640px]" : "max-h-[420px]"}`}>
        <defs>
          <filter id="gfglow">
            <feGaussianBlur stdDeviation="2.8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 70 110 L 140 90 L 220 80 L 290 95 L 360 130 L 410 180 L 420 250 L 400 320 L 380 390 L 340 460 L 270 500 L 180 510 L 110 480 L 70 420 L 50 340 L 55 250 L 60 180 Z"
          fill="rgba(0,130,198,0.10)"
          stroke="rgba(39,170,225,0.35)"
          strokeWidth="1.5"
        />

        {/* Existing backbone — solid */}
        <path
          d="M 110 180 L 90 270 L 170 290 L 280 340 L 360 360 M 110 180 L 240 110 M 280 340 L 240 110"
          fill="none"
          stroke="#0082C6"
          strokeWidth="3"
          filter="url(#gfglow)"
        />

        {/* Phase 1 — Mouila / Tchibanga */}
        <path
          d="M 170 290 L 190 380 L 130 450"
          fill="none"
          stroke={activePhase >= 1 ? "#DDDB00" : "#DDDB00"}
          strokeOpacity={activePhase >= 1 ? 1 : 0.35}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          filter={activePhase >= 1 ? "url(#gfglow)" : undefined}
        />
        {/* Phase 2 — Port-Gentil / Yombi */}
        <path
          d="M 90 270 L 60 320 L 130 330"
          fill="none"
          stroke="#DDDB00"
          strokeOpacity={activePhase >= 2 ? 1 : 0.35}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          filter={activePhase >= 2 ? "url(#gfglow)" : undefined}
        />
        {/* Phase 3 — Ndendé / Koulamoutou */}
        <path
          d="M 190 380 L 220 460 M 280 340 L 220 460"
          fill="none"
          stroke="#DDDB00"
          strokeOpacity={activePhase >= 3 ? 1 : 0.35}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          filter={activePhase >= 3 ? "url(#gfglow)" : undefined}
        />
        {/* Phase 4 — Makokou / Kélé */}
        <path
          d="M 240 110 L 320 200 M 320 200 L 360 360"
          fill="none"
          stroke="#DDDB00"
          strokeOpacity={activePhase >= 4 ? 1 : 0.35}
          strokeWidth="2.5"
          strokeDasharray="6 5"
          filter={activePhase >= 4 ? "url(#gfglow)" : undefined}
        />

        {CITIES.map((c) => (
          <g key={c.id} className="cursor-pointer" onClick={() => setActive(c)}>
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.star ? 9 : 6}
              fill={phaseFill(c.status)}
              stroke="#fff"
              strokeWidth="1.5"
            />
            {c.status === "actif" && c.star && (
              <circle cx={c.cx} cy={c.cy} r="14" fill="none" stroke="#27AAE1" strokeWidth="1" className="pulse-dot" />
            )}
            <text
              x={c.cx + 12}
              y={c.cy + 4}
              fill="#fff"
              fontFamily="Barlow Condensed"
              fontSize={isLg ? "13" : "10"}
              fontWeight="700"
              className="select-none"
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap gap-5 mt-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[3px] bg-[#0082C6]" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Existant 1 700 km</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-[3px]" style={{ borderTop: "2px dashed #DDDB00" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Extensions +1 650 km</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0082C6]" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP actif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DDDB00]" />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP phase</span>
        </div>
      </div>

      {active && (
        <div className="absolute top-4 right-4 bg-[#020366] border border-[#27AAE1]/40 px-5 py-4 gf-shape-sm shadow-2xl min-w-[220px]">
          <button onClick={() => setActive(null)} className="absolute top-2 right-2 text-white/40 hover:text-white text-sm">×</button>
          <div className="font-mono text-[10px] tracking-wider text-[#DDDB00] uppercase mb-1">
            {STATUS_LABEL[active.status]}
          </div>
          <div className="font-headline font-bold text-xl uppercase text-white" style={{ fontFamily: "var(--font-headline)" }}>{active.name}</div>
        </div>
      )}
    </div>
  );
}
