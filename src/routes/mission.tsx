import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/Ticker";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/mission")({
  component: MissionPage,
  head: () => ({
    meta: [
      { title: "Notre Mission — Gabon Fiber SA" },
      { name: "description", content: "Connecter le Gabon entier. Successeur de la DSP Axione, opérateur wholesale neutre, 5 objectifs spécifiques OS1-OS5." },
    ],
  }),
});

const OS = [
  { n: "OS1", t: "Maintenir & Exploiter", d: "Garantir la continuité du backbone existant 1 700 km, taux de disponibilité 99,9%, MTTR < 4h." },
  { n: "OS2", t: "Étendre la Couverture", d: "Construire +1 650 km de fibre sur 4 phases (P1 à P4) pour désenclaver l'intérieur du pays." },
  { n: "OS3", t: "Garantir l'Accès Ouvert", d: "Tarifs transparents, non-discrimination, équité totale entre opérateurs licenciés." },
  { n: "OS4", t: "Mobiliser le Financement", d: "52 Mds FCFA sécurisés (fonds propres + AFD/BEI/BDEAC + Global Gateway UE)." },
  { n: "OS5", t: "Souveraineté Numérique", d: "Biens de retour à l'État, contrôle ARCEP, infrastructure stratégique nationale." },
];

const VALUES = [
  { t: "Neutralité", d: "Aucune offre retail. Égalité de traitement entre tous les opérateurs détaillants licenciés." },
  { t: "Souveraineté", d: "Infrastructure stratégique nationale, biens de retour à l'État en fin de concession." },
  { t: "Service Public", d: "Couverture étendue, désenclavement numérique, tarifs régulés ARCEP." },
];

const TEAM = [
  { i: "LO", n: "Lauric Owono Engongah", r: "Directeur Général" },
  { i: "DT", n: "Direction Technique", r: "Réseau & Opérations" },
  { i: "DF", n: "Direction Financière", r: "Finance & Trésorerie" },
  { i: "DC", n: "Direction Commerciale", r: "Wholesale & Comptes Clés" },
  { i: "DJ", n: "Direction Juridique", r: "Régulation & Conformité" },
  { i: "DR", n: "Direction RH", r: "Talents & Organisation" },
];

function MissionPage() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Notre mission"
        title={<>Connecter le<br /><em>Gabon Entier</em></>}
        subtitle="De la DSP Axione à Gabon Fiber SA : continuité, extension, souveraineté."
        image={IMG.heroMission}
        compact
      />
      <Ticker />

      {/* Contexte */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="s-label !text-blue-mid mb-6">Genèse</div>
            <h2 className="s-title text-5xl !text-slate-ink mb-8">Fin DSP Axione<br /><em className="!text-blue-mid">Nov. 2026</em></h2>
            <p className="s-body !text-slate-light !text-base mb-5">
              La Délégation de Service Public confiée à Axione Gabon arrive à terme en novembre 2026. L'État gabonais et la SPIN ont arbitré pour une continuité opérée par une nouvelle structure : Gabon Fiber SA.
            </p>
            <p className="s-body !text-slate-light !text-base mb-10">
              GFSA hérite de l'exploitation du backbone existant via affermage et porte le programme d'extension nationale comme propriétaire des nouveaux biens.
            </p>
            <Link to="/gouvernance" className="btn-p btn-on-light">Modèle PPP →</Link>
          </div>
          <div className="reveal d2">
            <img src={IMG.heroNetwork} alt="Infrastructure" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* OS */}
      <section className="bg-ink-black py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-16">
            <div className="s-label mb-6">Objectifs spécifiques</div>
            <h2 className="s-title text-5xl md:text-6xl text-white">5 piliers <em>opérationnels</em></h2>
          </div>
          <div className="space-y-px bg-blue-light/10">
            {OS.map((o, i) => (
              <div key={o.n} className={`reveal d${(i % 4) + 1} bg-navy-deep grid md:grid-cols-[120px_1fr_2fr] gap-8 p-8 md:p-10 items-start`}>
                <div className="font-display font-extrabold text-3xl text-blue-light">{o.n}</div>
                <div className="font-display font-extrabold text-2xl uppercase text-white">{o.t}</div>
                <p className="s-body !text-[15px]">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-16">
            <div className="s-label !text-blue-mid mb-6">Nos valeurs</div>
            <h2 className="s-title text-5xl !text-slate-ink">Trois <em className="!text-blue-mid">principes</em> fondateurs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <div key={v.t} className={`reveal d${i + 1} bg-white p-10 border-t-2 border-blue-mid`}>
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-blue-mid mb-6" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="font-display font-extrabold text-2xl uppercase text-slate-ink mb-3">{v.t}</h3>
                <p className="text-slate-light text-[15px] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPP */}
      <section className="py-28" style={{ background: "linear-gradient(135deg, #0a4f7e 0%, #1a7abf 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="s-label !text-white/70 mb-6">Modèle</div>
            <h2 className="s-title text-5xl text-white mb-8">PPP Concessif</h2>
            <p className="text-white/85 text-[16px] leading-relaxed">
              Gabon Fiber SA exploite l'infrastructure dans un cadre concessif strict : la SPIN reste propriétaire du backbone existant, GFSA construit et possède les extensions qui deviendront biens de retour à l'État.
            </p>
          </div>
          <div className="reveal d2 grid grid-cols-2 gap-px bg-white/15">
            {[
              ["État Gabonais", "Concédant"],
              ["SPIN", "Patrimoine"],
              ["Gabon Fiber SA", "Opérateur"],
              ["Opérateurs / FAI", "Clients"],
            ].map(([t, s], i) => (
              <div key={t} className={`reveal d${i + 1} bg-blue-deep p-8`}>
                <div className="font-mono text-[10px] tracking-widest text-blue-sky mb-2">{`0${i + 1}`}</div>
                <div className="font-display font-extrabold text-xl uppercase text-white">{t}</div>
                <div className="text-white/60 text-sm mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-ink-black py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-16">
            <div className="s-label mb-6">Équipe</div>
            <h2 className="s-title text-5xl text-white">Direction <em>exécutive</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-blue-light/10">
            {TEAM.map((m, i) => (
              <div key={m.n} className={`reveal d${(i % 4) + 1} bg-navy-deep p-10 flex items-center gap-6`}>
                <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-blue-light to-blue-deep flex items-center justify-center font-display font-extrabold text-xl text-white">
                  {m.i}
                </div>
                <div>
                  <div className="font-display font-extrabold text-lg uppercase text-white leading-tight">{m.n}</div>
                  <div className="font-mono text-[11px] tracking-wider text-blue-light uppercase mt-1">{m.r}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link to="/contact" className="btn-p">Contacter l'équipe →</Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
