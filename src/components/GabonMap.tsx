import { useState } from "react";

interface City {
  id: string;
  name: string;
  cx: number;
  cy: number;
  status: "actif" | "extension";
  star?: boolean;
}

const CITIES: City[] = [
  { id: "lbv", name: "Libreville", cx: 110, cy: 180, status: "actif", star: true },
  { id: "pog", name: "Port-Gentil", cx: 90, cy: 270, status: "actif" },
  { id: "oye", name: "Oyem", cx: 240, cy: 110, status: "actif" },
  { id: "lbq", name: "Lambaréné", cx: 170, cy: 290, status: "actif" },
  { id: "fcv", name: "Franceville", cx: 360, cy: 360, status: "actif" },
  { id: "klm", name: "Koulamoutou", cx: 280, cy: 340, status: "actif" },
  { id: "mou", name: "Mouila", cx: 190, cy: 380, status: "extension" },
  { id: "tch", name: "Tchibanga", cx: 130, cy: 450, status: "extension" },
  { id: "mkk", name: "Makokou", cx: 320, cy: 200, status: "extension" },
  { id: "ndd", name: "Ndendé", cx: 220, cy: 460, status: "extension" },
];

// Phases : chaque phase contient des paths à allumer (id de tracé)
export interface PhaseDef {
  key: string;
  label: string;
  km: number;
  color: string;
  paths: string[]; // id de paths d'extension à activer
}

export const PHASES: PhaseDef[] = [
  { key: "base", label: "Réseau existant", km: 1700, color: "#0082C6", paths: [] },
  { key: "p1", label: "Phase 1 — Mouila / Tchibanga", km: 2120, color: "#27AAE1", paths: ["ext-mouila", "ext-tchibanga"] },
  { key: "p2", label: "Phase 2 — Port-Gentil / Yombi", km: 2500, color: "#65AEE0", paths: ["ext-mouila", "ext-tchibanga", "ext-yombi"] },
  { key: "p3", label: "Phase 3 — Ndendé / Koulamoutou", km: 2880, color: "#59BE98", paths: ["ext-mouila", "ext-tchibanga", "ext-yombi", "ext-ndende"] },
  { key: "p4", label: "Phase 4 — Makokou / Kélé", km: 3350, color: "#DDDB00", paths: ["ext-mouila", "ext-tchibanga", "ext-yombi", "ext-ndende", "ext-makokou", "ext-kele"] },
];

const EXTENSIONS: { id: string; d: string }[] = [
  { id: "ext-mouila", d: "M 170 290 L 190 380" },
  { id: "ext-tchibanga", d: "M 190 380 L 130 450" },
  { id: "ext-yombi", d: "M 90 270 L 170 290" },
  { id: "ext-ndende", d: "M 190 380 L 220 460" },
  { id: "ext-makokou", d: "M 240 110 L 320 200" },
  { id: "ext-kele", d: "M 320 200 L 360 360" },
];

export function GabonMap({
  size = "lg",
  activePaths = [],
}: {
  size?: "sm" | "lg";
  activePaths?: string[];
}) {
  const [active, setActive] = useState<City | null>(null);
  const isLg = size === "lg";

  return (
    <div className="relative">
      <svg viewBox="0 0 480 560" className={`w-full ${isLg ? "max-h-[640px]" : "max-h-[420px]"}`}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="yglow">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Silhouette Gabon */}
        <path
          d="M 70 110 L 140 90 L 220 80 L 290 95 L 360 130 L 410 180 L 420 250 L 400 320 L 380 390 L 340 460 L 270 500 L 180 510 L 110 480 L 70 420 L 50 340 L 55 250 L 60 180 Z"
          fill="rgba(0,130,198,0.06)"
          stroke="rgba(39,170,225,0.35)"
          strokeWidth="1.5"
        />

        {/* Backbone existant — bleu plein */}
        <path
          d="M 110 180 L 90 270 L 170 290 L 280 340 L 360 360 M 110 180 L 240 110 M 280 340 L 240 110"
          fill="none"
          stroke="#0082C6"
          strokeWidth="3"
          filter="url(#glow)"
          opacity="0.95"
        />

        {/* Extensions — tirets jaunes (visible si activé) */}
        {EXTENSIONS.map((e) => {
          const isActive = activePaths.includes(e.id);
          return (
            <path
              key={e.id}
              d={e.d}
              fill="none"
              stroke="#DDDB00"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              opacity={isActive ? 0.9 : 0.18}
              filter={isActive ? "url(#yglow)" : undefined}
              style={{ transition: "opacity 0.6s ease" }}
            />
          );
        })}

        {/* Villes */}
        {CITIES.map((c) => (
          <g key={c.id} className="cursor-pointer" onClick={() => setActive(c)}>
            <circle
              cx={c.cx}
              cy={c.cy}
              r={c.star ? 9 : 6}
              fill={c.status === "actif" ? "#59BE98" : "#DDDB00"}
              stroke="#fff"
              strokeWidth="1.5"
            />
            {c.status === "actif" && c.star && (
              <circle cx={c.cx} cy={c.cy} r="14" fill="none" stroke="#59BE98" strokeWidth="1" className="pulse-dot" />
            )}
            <text
              x={c.cx + 12}
              y={c.cy + 4}
              fill="#fff"
              fontFamily="Helvetica Neue, Arial"
              fontSize={isLg ? "12" : "10"}
              fontWeight="600"
              className="select-none"
            >
              {c.name}
            </text>
          </g>
        ))}
      </svg>

      <div className="flex flex-wrap gap-5 mt-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[3px]" style={{ background: "#0082C6" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Existant 1 700 km</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0" style={{ borderTop: "2px dashed #DDDB00" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">Extensions +1 650 km</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#59BE98" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP actif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#DDDB00" }} />
          <span className="font-mono text-white/70 uppercase tracking-wider text-[10px]">PoP planifié</span>
        </div>
      </div>

      {active && (
        <div className="absolute top-4 right-4 px-5 py-4 shadow-2xl min-w-[200px] gf-shape"
             style={{ background: "#020366", border: "1px solid rgba(39,170,225,0.3)" }}>
          <button onClick={() => setActive(null)} className="absolute top-2 right-2 text-white/40 hover:text-white text-sm">×</button>
          <div className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: "#DDDB00" }}>
            {active.status === "actif" ? "PoP Actif" : "PoP Planifié"}
          </div>
          <div className="font-display font-bold text-xl uppercase text-white">{active.name}</div>
        </div>
      )}
    </div>
  );
}
