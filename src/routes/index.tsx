import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/Ticker";
import { PageWrap } from "@/components/PageBits";
import { GabonMap } from "@/components/GabonMap";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gabon Fiber SA — Le Carrefour des Réseaux" },
      { name: "description", content: "Opérateur de gros neutre du backbone fibre optique national. 3 350 km, accès ouvert, souveraineté numérique." },
    ],
  }),
});

const STATS_HERO = [
  { v: "3 350", u: "km de fibre" },
  { v: "52", u: "Mds FCFA" },
  { v: "16,9%", u: "TRI Actionnaire" },
  { v: "99,9%", u: "SLA" },
];

const MISSIONS = [
  { n: "01", t: "Accès Ouvert", d: "Tarifs transparents, non-discrimination, équité opérateurs." },
  { n: "02", t: "Souveraineté", d: "Biens de retour à l'État, contrôle ARCEP, infra nationale." },
  { n: "03", t: "Service Public", d: "Couverture étendue, désenclavement numérique." },
  { n: "04", t: "Financement Privé", d: "PPP concessif, 52 Mds FCFA, AFD/BEI/BDEAC." },
];

const SERVICES = [
  { n: "01", t: "Capacité & Transit", d: "Lambdas, Ethernet, IP transit haute disponibilité.", img: IMG.srv1 },
  { n: "02", t: "Colocation / POPs", d: "Hébergement carrier-grade dans 10+ villes.", img: IMG.srv2 },
  { n: "03", t: "Interconnexion", d: "SAT-3, ACE, MainOne, Gabon-IX.", img: IMG.srv3 },
  { n: "04", t: "Services Gérés NOC", d: "Supervision 24/7, monitoring proactif.", img: IMG.srv4 },
  { n: "05", t: "Qualité & SLA", d: "99,9% disponibilité, MTTR < 4h, pénalités.", img: IMG.srv5 },
  { n: "06", t: "Partenariats", d: "Accords FAI, opérateurs, sous-régionaux.", img: IMG.srv6 },
];

const KPIS = [
  { v: "3 350", u: "Km cible" },
  { v: "52 Mds", u: "FCFA investis" },
  { v: "~45%", u: "EBITDA moyen" },
  { v: "16,9%", u: "TRI Actionnaire" },
];

const NEWS = [
  { cat: "Institutionnel", t: "Gabon Fiber SA officiellement constituée", d: "Janv. 2025", img: IMG.news1 },
  { cat: "Infrastructure", t: "Phase 1 : extension vers Mouila lancée", d: "Mars 2025", img: IMG.news2 },
  { cat: "Finance", t: "52 Mds FCFA bouclés avec AFD, BEI et BDEAC", d: "Mai 2025", img: IMG.news3 },
];

function Home() {
  return (
    <PageWrap>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[140px] pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.heroHome} alt="" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-black via-ink-black/85 to-ink-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-transparent" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-14 w-full">
          <div className="max-w-4xl">
            <div className="s-label reveal mb-7">Opérateur de référence — Gabon</div>
            <h1 className="s-title reveal d1 text-[clamp(56px,10vw,160px)] text-white mb-8">
              Le <em>Carrefour</em><br />Des Réseaux
            </h1>
            <p className="s-body reveal d2 max-w-2xl mb-10 !text-[17px] !text-white/75">
              Successeur de la DSP Axione, Gabon Fiber SA opère le backbone fibre national en mode wholesale exclusif. Neutralité, accès ouvert, souveraineté.
            </p>
            <div className="reveal d3 flex flex-wrap gap-4">
              <Link to="/services" className="btn-p">Nos solutions →</Link>
              <Link to="/investisseurs" className="btn-g">Investisseurs</Link>
            </div>
          </div>
          <div className="reveal d4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 max-w-4xl border-t border-white/10 pt-10">
            {STATS_HERO.map((s) => (
              <div key={s.u}>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-blue-light leading-none">{s.v}</div>
                <div className="font-mono text-[11px] tracking-wider text-white/50 uppercase mt-2">{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ticker />

      {/* MISSION STRIP */}
      <section className="bg-navy-deep py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-light/10">
          {MISSIONS.map((m, i) => (
            <div key={m.n} className={`reveal d${i + 1} bg-navy-deep p-10`}>
              <div className="font-mono text-[11px] tracking-widest text-blue-light mb-5">— {m.n}</div>
              <h3 className="font-display font-extrabold text-2xl uppercase text-white mb-3">{m.t}</h3>
              <p className="s-body !text-[14px]">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <img src={IMG.about} alt="Data center" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-blue-deep text-white p-6 max-w-[200px]">
              <div className="font-mono text-[11px] tracking-widest text-blue-sky mb-1">2025</div>
              <div className="font-display font-extrabold text-xl uppercase">Nouveau<br />Départ</div>
            </div>
          </div>
          <div className="reveal d2">
            <div className="s-label !text-blue-mid mb-6">Qui sommes-nous</div>
            <h2 className="s-title text-5xl md:text-6xl !text-slate-ink mb-8">
              Bâtir le<br /><em className="!text-blue-mid">Gabon Numérique</em>
            </h2>
            <p className="s-body !text-slate-light !text-base mb-5">
              La DSP Axione s'achève en novembre 2026. Gabon Fiber SA prend le relais comme opérateur de gros neutre, propriétaire des extensions et exploitant du backbone existant via affermage.
            </p>
            <p className="s-body !text-slate-light !text-base mb-10">
              Notre mission : connecter chaque région du pays, garantir l'équité d'accès aux opérateurs détaillants, et bâtir une infrastructure stratégique souveraine.
            </p>
            <div className="space-y-4">
              {[
                ["01", "Neutralité absolue", "Aucune offre retail, traitement équitable des FAI."],
                ["02", "Extension nationale", "+1 650 km de fibre construits en 4 ans."],
                ["03", "Rentabilité démontrée", "TRI 16,9% sur 15-20 ans, ~45% EBITDA."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-5 border-t border-gray-line pt-4">
                  <div className="font-mono text-blue-mid text-sm">{n}</div>
                  <div>
                    <div className="font-display font-bold uppercase text-slate-ink">{t}</div>
                    <div className="text-sm text-slate-light">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEAU PREVIEW */}
      <section className="py-32" style={{ background: "#0d1822" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="s-label mb-6">Le réseau</div>
            <h2 className="s-title text-5xl md:text-6xl text-white mb-8">
              Du <em>backbone</em><br />à l'extension<br />nationale
            </h2>
            <p className="s-body mb-10">
              1 700 km opérationnels aujourd'hui. +1 650 km en construction sur 4 phases pour atteindre 3 350 km et désenclaver les zones intérieures.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                ["1 700", "km existants"],
                ["+1 650", "km extensions"],
                ["10+", "villes connectées"],
                ["4 ans", "calendrier"],
              ].map(([v, u]) => (
                <div key={u}>
                  <div className="font-display font-extrabold text-4xl text-blue-light leading-none">{v}</div>
                  <div className="font-mono text-[11px] tracking-wider text-white/50 uppercase mt-2">{u}</div>
                </div>
              ))}
            </div>
            <Link to="/reseau" className="btn-p">Explorer le réseau →</Link>
          </div>
          <div className="reveal d2 bg-navy-deep p-8 border border-blue-light/15">
            <GabonMap size="sm" />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="reveal">
              <div className="s-label !text-blue-mid mb-6">Catalogue</div>
              <h2 className="s-title text-5xl md:text-6xl !text-slate-ink">
                Wholesale<br /><em className="!text-blue-mid">exclusivement</em>
              </h2>
            </div>
            <div className="reveal d2 flex items-end">
              <p className="s-body !text-slate-light !text-base">
                Gabon Fiber SA n'opère aucune offre retail. Notre catalogue est dédié aux opérateurs licenciés, FAI, institutionnels et grands comptes.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-line">
            {SERVICES.map((s, i) => (
              <div key={s.n} className={`reveal d${(i % 4) + 1} bg-white group hover:bg-off-white transition-colors`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="font-mono text-[11px] tracking-widest text-blue-mid mb-3">— {s.n}</div>
                  <h3 className="font-display font-extrabold text-xl uppercase text-slate-ink mb-2">{s.t}</h3>
                  <p className="text-sm text-slate-light leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-p btn-on-light">Toutes les offres →</Link>
          </div>
        </div>
      </section>

      {/* KPI BAR */}
      <section className="py-28" style={{ background: "linear-gradient(135deg, #0a4f7e 0%, #1a7abf 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-2xl mb-14">
            <div className="s-label !text-white/70 mb-5">Performance</div>
            <h2 className="s-title text-4xl md:text-5xl text-white">Chiffres clés du projet</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {KPIS.map((k, i) => (
              <div key={k.u} className={`reveal d${i + 1}`}>
                <div className="font-display font-extrabold text-6xl md:text-7xl text-white leading-none">{k.v}</div>
                <div className="font-mono text-[12px] tracking-wider text-white/70 uppercase mt-3">{k.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SPLIT */}
      <section className="grid lg:grid-cols-2">
        <Link to="/services" className="relative bg-navy-deep p-14 md:p-20 min-h-[400px] flex flex-col justify-end overflow-hidden group">
          <img src={IMG.ctaA} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity" />
          <div className="relative">
            <div className="s-label mb-6">Pour opérateurs & FAI</div>
            <h3 className="s-title text-4xl md:text-5xl text-white mb-6">Demandez<br />un <em>devis</em></h3>
            <span className="font-display font-bold uppercase text-blue-light tracking-widest text-sm">Découvrir nos services →</span>
          </div>
        </Link>
        <Link to="/investisseurs" className="relative bg-blue-deep p-14 md:p-20 min-h-[400px] flex flex-col justify-end overflow-hidden group">
          <img src={IMG.ctaB} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity" />
          <div className="relative">
            <div className="s-label !text-blue-sky mb-6">Pour investisseurs</div>
            <h3 className="s-title text-4xl md:text-5xl text-white mb-6">TRI <em className="!text-blue-sky">16,9%</em><br />sur 15-20 ans</h3>
            <span className="font-display font-bold uppercase text-blue-sky tracking-widest text-sm">Espace investisseurs →</span>
          </div>
        </Link>
      </section>

      {/* NEWS */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex flex-wrap items-end justify-between mb-14 gap-6">
            <div className="reveal">
              <div className="s-label !text-blue-mid mb-5">Actualités</div>
              <h2 className="s-title text-5xl !text-slate-ink">Dernières <em className="!text-blue-mid">nouvelles</em></h2>
            </div>
            <Link to="/actualites" className="btn-p btn-on-light">Toutes les actus →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.map((n, i) => (
              <article key={n.t} className={`reveal d${i + 1} group cursor-pointer`}>
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img src={n.img} alt={n.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-4 mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-blue-mid uppercase">{n.cat}</span>
                  <span className="font-mono text-[10px] tracking-widest text-slate-light uppercase">{n.d}</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl uppercase text-slate-ink leading-tight group-hover:text-blue-mid transition-colors">{n.t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
