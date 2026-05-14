import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Ticker } from "@/components/Ticker";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/gouvernance")({
  component: GovPage,
  head: () => ({
    meta: [
      { title: "Gouvernance & Actionnariat — Gabon Fiber SA" },
      { name: "description", content: "PPP concessif, structure capitalistique : SPIN, Gabon Télécom, investisseurs PE, GVA, Axione." },
    ],
  }),
});

const SHARES = [
  { l: "SPIN / État élargi (FGIS, CDC)", v: 35, color: "#0a4f7e", note: "≤ 35%" },
  { l: "Gabon Télécom (apport en nature)", v: 22, color: "#1a7abf", note: "20-25%" },
  { l: "Investisseurs PE (slot ouvert)", v: 35, color: "#3aaee0", note: "30-40%" },
  { l: "GVA (partenaire local)", v: 5, color: "#6dcff6", note: "≈ 5%" },
  { l: "Axione (partenaire industriel)", v: 3, color: "#8fa3b1", note: "Ouvert" },
];

const PPP = [
  ["Propriété actifs", "SPIN propriétaire backbone existant (affermage). GFSA propriétaire des extensions."],
  ["Biens de retour", "Toutes les extensions deviennent biens de retour à l'État en fin de concession."],
  ["Contrôle ARCEP", "Tarifs wholesale, qualité de service et accès non-discriminatoire supervisés par l'ARCEP."],
  ["Durée", "Concession 15-20 ans, renouvelable selon performance et atteinte des OS."],
];

const ASSETS = [
  ["Réseau Existant (Affermage)", "1 700 km — propriété SPIN, exploitation par GFSA"],
  ["Extensions (Biens de retour)", "+1 650 km — construits et financés par GFSA"],
  ["Apport en nature Gabon Télécom", "20-25% du capital via apports d'actifs réseau"],
  ["Droits de passage & servitudes", "Accordés par l'État sur l'ensemble du territoire"],
];

function Bar({ value, color, label, note, delay }: { value: number; color: string; label: string; note: string; delay: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setW(value), delay);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value, delay]);
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-display font-bold text-slate-ink uppercase text-sm">{label}</span>
        <span className="font-mono text-xs text-slate-light tracking-wider">{note}</span>
      </div>
      <div className="h-3 bg-gray-line">
        <div
          className="h-full transition-all duration-[1400ms] ease-out"
          style={{ width: `${w}%`, background: color }}
        />
      </div>
    </div>
  );
}

function GovPage() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Gouvernance & actionnariat"
        title={<>Structure <em>solide</em><br />& transparente</>}
        image={IMG.heroGov}
        compact
      />
      <Ticker />

      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-14">
            <div className="s-label !text-blue-mid mb-6">Actionnariat</div>
            <h2 className="s-title text-5xl !text-slate-ink mb-6">Capital <em className="!text-blue-mid">équilibré</em></h2>
            <p className="s-body !text-slate-light !text-base">
              Une structure capitalistique qui combine présence publique stratégique, partenaire industriel historique et investisseurs privés long-terme.
            </p>
          </div>
          <div className="reveal d2 bg-white p-10">
            {SHARES.map((s, i) => (
              <Bar key={s.l} value={s.v} color={s.color} label={s.l} note={s.note} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="s-label mb-6">Modèle PPP</div>
            <h2 className="s-title text-5xl text-white mb-8">Concession <em>encadrée</em></h2>
            <p className="s-body !text-[15.5px] mb-5">
              Le partenariat public-privé concessif articule la propriété stratégique de l'État, la responsabilité opérationnelle de Gabon Fiber SA et le contrôle régulatoire de l'ARCEP.
            </p>
            <p className="s-body !text-[15.5px]">
              Cette architecture sécurise la souveraineté numérique tout en mobilisant l'efficacité du privé pour l'extension nationale.
            </p>
          </div>
          <div className="reveal d2 grid sm:grid-cols-2 gap-px bg-blue-light/10">
            {PPP.map(([t, d], i) => (
              <div key={t} className={`reveal d${i + 1} bg-ink-black p-8`}>
                <div className="font-mono text-[11px] tracking-widest text-blue-light mb-3">— 0{i + 1}</div>
                <h3 className="font-display font-extrabold text-lg uppercase text-white mb-3">{t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-14">
            <div className="s-label !text-blue-mid mb-6">Patrimoine</div>
            <h2 className="s-title text-5xl !text-slate-ink">Actifs & <em className="!text-blue-mid">droits</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {ASSETS.map(([t, d], i) => (
              <div key={t} className={`reveal d${(i % 4) + 1} bg-white border-l-4 border-blue-mid p-8`}>
                <h3 className="font-display font-extrabold text-xl uppercase text-slate-ink mb-3">{t}</h3>
                <p className="text-slate-light text-[15px] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
