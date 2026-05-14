import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/actualites")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Actualités — Gabon Fiber SA" },
      { name: "description", content: "Communiqués, étapes du projet, partenariats stratégiques et publications financières." },
    ],
  }),
});

const CATS = ["Tout", "Institutionnel", "Infrastructure", "Partenariat", "Finance", "Communiqués"] as const;
type Cat = typeof CATS[number];

const ARTICLES: { id: number; cat: Exclude<Cat, "Tout">; t: string; date: string; img: string; ex: string; hero?: boolean }[] = [
  {
    id: 1,
    cat: "Institutionnel",
    t: "Gabon Fiber SA officiellement constituée",
    date: "Janvier 2025",
    img: IMG.heroNews,
    hero: true,
    ex: "L'État gabonais et la SPIN annoncent la constitution officielle de Gabon Fiber SA, opérateur de gros neutre du backbone fibre national. La société prendra le relais de la DSP Axione à son terme en novembre 2026.",
  },
  { id: 2, cat: "Infrastructure", t: "Phase 1 Extension vers Mouila", date: "Mars 2025", img: IMG.news1, ex: "Lancement officiel des travaux Phase 1 reliant Lambaréné à Mouila — 350 km supplémentaires." },
  { id: 3, cat: "Partenariat", t: "Accord stratégique avec Gabon Télécom", date: "Avril 2025", img: IMG.news2, ex: "Apport en nature confirmé. Gabon Télécom détiendra 20-25% du capital de GFSA." },
  { id: 4, cat: "Finance", t: "52 milliards FCFA levés", date: "Mai 2025", img: IMG.news3, ex: "Bouclage financier finalisé avec AFD, BEI, BDEAC et Global Gateway UE." },
  { id: 5, cat: "Communiqués", t: "Rapport Q1 2025 — 99,94% disponibilité", date: "Juin 2025", img: IMG.news4, ex: "Premier rapport trimestriel : objectifs SLA dépassés, MTTR moyen 2h47." },
  { id: 6, cat: "Infrastructure", t: "Nouveau data center PoP Franceville", date: "Juillet 2025", img: IMG.news5, ex: "Mise en service du PoP Franceville modernisé : capacité × 4, redondance N+1." },
];

function NewsPage() {
  const [cat, setCat] = useState<Cat>("Tout");
  const filtered = ARTICLES.filter((a) => cat === "Tout" || a.cat === cat);
  const hero = filtered.find((a) => a.hero);
  const rest = filtered.filter((a) => !a.hero);

  return (
    <PageWrap>
      <PageHero
        eyebrow="Actualités"
        title={<>Nos Dernières<br /><em>Nouvelles</em></>}
        image={IMG.heroNews}
        mini
      />

      <section className="bg-off-white text-slate-ink py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex flex-wrap gap-3 mb-12">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`font-display font-bold text-[12px] uppercase tracking-widest px-5 py-2.5 border transition-all ${
                  cat === c
                    ? "bg-blue-deep text-white border-blue-deep"
                    : "bg-white text-slate-ink border-gray-line hover:border-blue-mid hover:text-blue-mid"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {hero && (
            <article className="reveal grid lg:grid-cols-2 bg-white mb-10 group cursor-pointer overflow-hidden">
              <div className="aspect-[16/11] lg:aspect-auto overflow-hidden">
                <img src={hero.img} alt={hero.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex gap-4 mb-5">
                  <span className="font-mono text-[10px] tracking-widest text-blue-mid uppercase">{hero.cat}</span>
                  <span className="font-mono text-[10px] tracking-widest text-slate-light uppercase">{hero.date}</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase text-slate-ink leading-tight mb-5 group-hover:text-blue-mid transition-colors">
                  {hero.t}
                </h2>
                <p className="text-slate-light leading-relaxed mb-7">{hero.ex}</p>
                <span className="font-display font-bold uppercase text-blue-mid text-sm tracking-widest">Lire l'article →</span>
              </div>
            </article>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((a, i) => (
              <article key={a.id} className={`reveal d${(i % 4) + 1} bg-white group cursor-pointer overflow-hidden`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.img} alt={a.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex gap-4 mb-3">
                    <span className="font-mono text-[10px] tracking-widest text-blue-mid uppercase">{a.cat}</span>
                    <span className="font-mono text-[10px] tracking-widest text-slate-light uppercase">{a.date}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-xl uppercase text-slate-ink leading-tight mb-3 group-hover:text-blue-mid transition-colors">{a.t}</h3>
                  <p className="text-slate-light text-sm leading-relaxed">{a.ex}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-light font-mono text-sm uppercase tracking-wider">
              Aucun article dans cette catégorie.
            </div>
          )}
        </div>
      </section>
    </PageWrap>
  );
}
