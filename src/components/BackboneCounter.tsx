import { useEffect, useRef, useState } from "react";
import { GabonMap, PHASES } from "./GabonMap";

function useCounter(target: number, duration = 1200) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

export function BackboneCounter() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggered = useRef(false);

  // Auto-démarre via IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !triggered.current) {
            triggered.current = true;
            // Démo : déroule jusqu'à phase 1 automatiquement
            setTimeout(() => setPhaseIdx(1), 400);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const phase = PHASES[phaseIdx];
  const km = useCounter(phase.km, 1100);

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Compteur + boutons phases */}
      <div>
        <div
          className="gf-shape-lg p-10 mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(0,130,198,0.15), rgba(2,3,102,0.4))",
            border: "1px solid rgba(39,170,225,0.25)",
          }}
        >
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: "#DDDB00" }}>
            {phase.label}
          </div>
          <div className="flex items-end gap-3">
            <div
              className="counter-num text-7xl md:text-8xl leading-none"
              style={{ color: phase.color }}
            >
              {km.toLocaleString("fr-FR")}
            </div>
            <div className="font-display font-bold text-2xl text-white/80 mb-3">km</div>
          </div>
          <div className="mt-6 h-1 w-full bg-white/10 gf-shape-badge overflow-hidden">
            <div
              className="h-full transition-all duration-700"
              style={{
                width: `${(phase.km / 3350) * 100}%`,
                background: phase.color,
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PHASES.map((p, i) => (
            <button
              key={p.key}
              onClick={() => setPhaseIdx(i)}
              className={`gf-shape-btn px-4 py-3 text-left transition-all border ${
                i === phaseIdx
                  ? "border-transparent text-[#020366]"
                  : "border-white/15 text-white/80 hover:border-[#DDDB00]/60 hover:text-white"
              }`}
              style={{
                background: i === phaseIdx ? p.color : "rgba(255,255,255,0.04)",
              }}
            >
              <div className="font-mono text-[10px] tracking-wider uppercase opacity-80">
                {p.key === "base" ? "Existant" : p.key.toUpperCase()}
              </div>
              <div className="font-display font-bold text-sm leading-tight mt-1">
                {p.km.toLocaleString("fr-FR")} km
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Carte */}
      <div
        className="gf-shape-lg p-6 md:p-8"
        style={{ background: "#020366", border: "1px solid rgba(39,170,225,0.2)" }}
      >
        <GabonMap size="sm" activePaths={phase.paths} />
      </div>
    </div>
  );
}
