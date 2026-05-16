import { createFileRoute } from "@tanstack/react-router";
import { Ticker } from "@/components/Ticker";
import { PageHero, PageWrap } from "@/components/PageBits";
import { GabonMap } from "@/components/GabonMap";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/reseau")({
  component: NetworkPage,
  head: () => ({
    meta: [
      { title: "Réseau — 3 350 km de fibre — Gabon Fiber SA" },
      { name: "description", content: "Backbone fibre national : 1 700 km existants + 1 650 km d'extensions, 10+ POPs, câbles sous-marins SAT-3 / ACE / MainOne." },
    ],
  }),
});

const PHASES = [
  { n: "Backbone", l: "Existant", v: "1 700", u: "km" },
  { n: "P1", l: "Phase 1", v: "+ 350", u: "km" },
  { n: "P2", l: "Phase 2", v: "+ 450", u: "km" },
  { n: "P3+P4", l: "Phases 3 & 4", v: "+ 850", u: "km" },
];

const POPS: [string, "Actif" | "P1" | "P2" | "P3"][] = [
  ["Libreville", "Actif"],
  ["Port-Gentil", "Actif"],
  ["Oyem", "Actif"],
  ["Lambaréné", "Actif"],
  ["Franceville", "Actif"],
  ["Koulamoutou", "Actif"],
  ["Mouila", "P1"],
  ["Tchibanga", "P2"],
  ["Makokou", "P2"],
  ["Ndendé", "P3"],
];

function NetworkPage() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Infrastructure"
        title={<>3 350 km<br />De <em>Fibre</em></>}
        subtitle="Le backbone national : existant + extensions, vers une couverture intégrale du territoire."
        image={IMG.heroNetwork}
        compact
      />
      <Ticker />

      {/* Carte interactive */}
      <section className="bg-navy-deep py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-12">
            <div className="s-label mb-6">Carte du réseau</div>
            <h2 className="s-title text-5xl md:text-6xl text-white">10 villes <em>connectées</em></h2>
          </div>
          <div className="reveal d2 bg-ink-black p-6 md:p-12 border border-blue-light/15">
            <GabonMap />
          </div>
        </div>
      </section>

      {/* Phases & POPs */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="reveal s-label !text-blue-mid mb-6">Phases</div>
            <h2 className="reveal d1 s-title text-4xl !text-slate-ink mb-10">Calendrier <em className="!text-blue-mid">d'extension</em></h2>
            <div className="space-y-4">
              {PHASES.map((p, i) => (
                <div key={p.n} className={`reveal d${i + 1} bg-white border-l-4 border-blue-mid p-6 flex items-center justify-between`}>
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-blue-mid uppercase">{p.l}</div>
                    <div className="font-display font-extrabold text-2xl uppercase text-slate-ink">{p.n}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-extrabold text-3xl text-blue-deep leading-none">{p.v}</div>
                    <div className="font-mono text-[10px] uppercase text-slate-light tracking-wider mt-1">{p.u}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="reveal s-label !text-blue-mid mb-6">POPs</div>
            <h2 className="reveal d1 s-title text-4xl !text-slate-ink mb-10">10 <em className="!text-blue-mid">points de présence</em></h2>
            <div className="bg-white divide-y divide-gray-line">
              {POPS.map(([city, status], i) => (
                <div key={city} className={`reveal d${(i % 4) + 1} flex items-center justify-between px-6 py-4`}>
                  <span className="font-display font-bold text-lg uppercase text-slate-ink">{city}</span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 ${
                      status === "Actif"
                        ? "bg-active/10 text-active"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    {status === "Actif" ? "Actif" : `Phase ${status[1]}`}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 reveal d4 bg-blue-deep text-white p-7">
              <div className="s-label !text-blue-sky mb-4">Câbles sous-marins</div>
              <div className="font-display font-extrabold text-2xl uppercase mb-2">SAT-3 · ACE · MainOne</div>
              <p className="text-white/75 text-sm leading-relaxed">
                Interconnexion internationale via les principaux câbles atlantiques. Redondance et capacité internationale garanties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
