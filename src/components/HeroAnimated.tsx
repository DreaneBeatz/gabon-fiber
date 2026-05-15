import { useMemo } from "react";

const HERO_STATS = [
  { v: "1 700 km", u: "Backbone existant" },
  { v: "+1 650 km", u: "Extensions prévues" },
  { v: "3 350 km", u: "Cible totale" },
  { v: "Open Access", u: "Modèle wholesale neutre" },
];

export function HeroAnimated() {
  // 10 lignes fibre, distribuées
  const lines = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        top: 8 + i * 9 + (i % 2) * 3,
        duration: 7 + ((i * 1.7) % 8),
        delay: -(i * 1.4),
      })),
    []
  );

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden"
    >
      <div className="hero-bg-animated">
        {lines.map((l, i) => (
          <div
            key={i}
            className="fiber-line"
            style={{
              top: `${l.top}%`,
              animationDuration: `${l.duration}s`,
              animationDelay: `${l.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14 w-full">
        <div className="max-w-4xl">
          <div
            className="reveal mb-6 font-display font-bold uppercase tracking-[0.32em] text-[14px] md:text-[16px]"
            style={{ color: "#DDDB00" }}
          >
            Connecter l'avenir
          </div>
          <h1 className="s-title reveal d1 text-[clamp(48px,9vw,140px)] text-white mb-7">
            Le <em>Carrefour</em><br />Des Réseaux
          </h1>
          <p className="s-body reveal d2 max-w-2xl mb-10 !text-[17px]">
            Successeur de la DSP Axione, Gabon Fiber SA opère le backbone fibre national en mode wholesale exclusif. Neutralité, accès ouvert, souveraineté numérique.
          </p>
          <div className="reveal d3 flex flex-wrap gap-4">
            <a href="#investisseurs" className="btn-y">Espace investisseurs →</a>
            <a href="#backbone" className="btn-g">Découvrir le backbone</a>
          </div>
        </div>

        <div className="reveal d4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 max-w-5xl border-t border-white/15 pt-9">
          {HERO_STATS.map((s) => (
            <div key={s.u} className="gf-shape p-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(39,170,225,0.18)" }}>
              <div
                className="font-display font-bold text-3xl md:text-4xl leading-none mb-2"
                style={{ color: "#DDDB00" }}
              >
                {s.v}
              </div>
              <div className="font-mono text-[10.5px] tracking-wider text-white/65 uppercase">
                {s.u}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
