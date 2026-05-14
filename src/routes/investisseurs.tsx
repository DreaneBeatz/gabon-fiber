import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/Ticker";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/investisseurs")({
  component: InvestPage,
  head: () => ({
    meta: [
      { title: "Investisseurs — TRI 16,9% — Gabon Fiber SA" },
      { name: "description", content: "Performance projetée : TRI 14,6% projet / 16,9% actionnaire, EBITDA ~45%, concession 15-20 ans." },
    ],
  }),
});

const FUNDING = [
  { p: "25%", v: "13 Mds FCFA", l: "Fonds propres actionnaires", bg: "bg-blue-deep", fg: "text-white", sub: "text-blue-sky" },
  { p: "60%", v: "31 Mds FCFA", l: "Dette institutionnelle AFD, BEI, BDEAC", bg: "bg-blue-mid", fg: "text-white", sub: "text-blue-sky" },
  { p: "15%", v: "7,8 Mds FCFA", l: "Dons Global Gateway UE", bg: "bg-white/10 border border-white/20", fg: "text-white", sub: "text-blue-light" },
];

const KPI = [
  ["14,6%", "TRI Projet", "(avant effet de levier)"],
  ["16,9%", "TRI Actionnaire", "(avec effet de levier)"],
  ["~45%", "EBITDA Moyen", "(infrastructure récurrente)"],
  ["15-20", "Ans Horizon", "(durée concession)"],
];

const MODELS = [
  { t: "Sources de revenus", items: ["Capacité & transit wholesale", "Colocation & POP hébergement", "Interconnexion internationale", "Services managés NOC", "Frais raccordement opérateurs"] },
  { t: "Protections contractuelles", items: ["Tarifs régulés ARCEP indexés", "Contrats wholesale moyen-long terme", "SLA avec pénalités automatiques", "Exclusivité backbone 15-20 ans", "Garantie de l'État sur biens"] },
  { t: "Profil de risque", items: ["Marché captif licencié", "Demande structurellement croissante", "Régulateur indépendant ARCEP", "Pas de risque concurrence retail"] },
  { t: "Opportunités de sortie", items: ["Cession secondaire entre PE (Y5+)", "IPO BVMAC potentielle (Y8+)", "Rachat partiel par État", "Distribution dividendes récurrents"] },
];

function InvestPage() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Espace investisseurs"
        title={<>TRI <em>16,9%</em><br />Sur 15-20 Ans</>}
        image={IMG.heroInvest}
        compact
      />
      <Ticker />

      {/* Financement */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-16">
            <div className="s-label !text-blue-mid mb-6">Financement</div>
            <h2 className="s-title text-5xl md:text-6xl !text-slate-ink mb-6">52 Mds FCFA<br /><em className="!text-blue-mid">Bouclés</em></h2>
            <p className="s-body !text-slate-light !text-base">
              Structure financière diversifiée combinant fonds propres, dette institutionnelle et subventions européennes. CAPEX construction : 44 Mds FCFA (67 M€ HT).
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {FUNDING.map((f, i) => (
              <div key={f.l} className={`reveal d${i + 1} ${f.bg} ${f.fg} p-10 min-h-[260px] flex flex-col justify-between`}>
                <div>
                  <div className={`font-mono text-[12px] tracking-widest uppercase mb-2 ${f.sub}`}>{f.p}</div>
                  <div className="font-display font-extrabold text-4xl mb-3">{f.v}</div>
                </div>
                <div className="font-display font-bold uppercase text-sm leading-snug">{f.l}</div>
              </div>
            ))}
          </div>
          <div className="reveal bg-blue-deep text-white p-8 flex flex-wrap items-center justify-between gap-4">
            <span className="font-display font-bold uppercase tracking-widest text-sm">Total Investissement</span>
            <span className="font-display font-extrabold text-3xl">52 Mds FCFA · ~80 M€ HT</span>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-navy-deep py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-14">
            <div className="s-label mb-6">Performance projetée</div>
            <h2 className="s-title text-5xl text-white">Indicateurs <em>financiers</em></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-blue-light/10">
            {KPI.map(([v, t, s], i) => (
              <div key={t} className={`reveal d${i + 1} bg-ink-black p-10 border-l-4 border-blue-light`}>
                <div className="font-display font-extrabold text-6xl text-blue-light leading-none mb-4">{v}</div>
                <div className="font-display font-bold uppercase text-white text-lg">{t}</div>
                <div className="font-mono text-[11px] tracking-wider text-white/50 uppercase mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modèle commercial */}
      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-14">
            <div className="s-label !text-blue-mid mb-6">Modèle commercial</div>
            <h2 className="s-title text-5xl !text-slate-ink">Architecture <em className="!text-blue-mid">économique</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {MODELS.map((m, i) => (
              <div key={m.t} className={`reveal d${(i % 4) + 1} bg-white p-10 border-t-2 border-blue-mid`}>
                <h3 className="font-display font-extrabold text-2xl uppercase text-slate-ink mb-6">{m.t}</h3>
                <ul className="space-y-3">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-slate-ink text-[15px]">
                      <span className="text-blue-mid font-bold">→</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <Link to="/contact" className="btn-p btn-on-light">Échanger avec la direction →</Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
