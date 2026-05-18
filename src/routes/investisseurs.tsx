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

const INVESTOR_PROFILES = [
  {
    title: "Institutions financières de développement",
    description: "Le déploiement du BNG s'inscrit pleinement dans les mandats d'inclusion numérique, de connectivité régionale et de diversification économique portés par les IFD opérant en Afrique subsaharienne. La structure concessionnaire garantit un ancrage souverain, tandis que les principes d'open access ouvrent la voie à un marché concurrentiel bénéficiant à l'ensemble de la population. Un co-financement mixte public-privé est envisageable, avec éligibilité aux instruments de garantie.",
  },
  {
    title: "Fonds de private equity et de croissance",
    description: "Le slot investisseur financier est actuellement ouvert pour un ticket de 4 à 6 milliards FCFA (30 à 40% du capital). Gabon Fiber SA offre un TRI actionnaire de 16,9% sur 15 à 20 ans dans un secteur régulé à revenus récurrents. La position de monopole de facto sur le backbone, les synergies avec les opérateurs régionaux dans le cadre de potentiels groupement d'intérêt économique et les relais de croissance liés aux extensions planifiées créent des leviers de création de valeur sur l'horizon typique d'un fonds PE.",
  },
  {
    title: "Fonds souverains",
    description: "Pour des fonds souverains cherchant à diversifier leur exposition géographique en Afrique subsaharienne, Gabon Fiber offre un actif d'infrastructure régulé, à revenus récurrents et long terme. Le portage par une convention de concession d'État réduit le risque et offre une visibilité sur les flux de trésorerie. L'alignement stratégique avec les plans de diversification post-pétrole du Gabon renforce la légitimité de l'engagement.",
  },
  {
    title: "Opérateurs télécoms",
    description: "Une entrée au capital par apport en nature (fourreaux, équipements, droits de passage) est possible, sur le modèle de l'apport Gabon Telecom (20–25% du capital). Des engagements d'achat de capacités (take-or-pay) sont également envisageables.",
  },
  {
    title: "Agences de crédit export",
    description: "Les marchés de fourniture d'équipements intégrés dans le projet sont susceptibles de générer des flux d'exportation depuis des pays membres d'ECA ou ceux possédant les leurs. La garantie ECA peut couvrir les risques sur la durée du financement, facilitant l'accès à des conditions de taux compétitives pour un projet dans la zone CEMAC.",
  },
  {
    title: "Banques d'affaires",
    description: "Gabon Fiber représente une opportunité de conseil et d'arrangement sur un financement de projet d'infrastructure numérique structurant en Afrique centrale. La complexité du montage mêlant dette senior, garanties souveraines, potentielles tranches en devises appelle des banques d'affaires capables de structurer des financements hybrides. La convention de concession offre une base contractuelle solide pour la modélisation des flux et la sécurisation des créanciers.",
  },
  {
    title: "Banques commerciales",
    description: "Les banques disposent d'une connaissance poussée du terrain pour accompagner Gabon Fiber dans ses besoins de financement opérationnel et de court terme. Les facilités de crédit revolving, les lettres de crédit documentaires et les garanties de bonne exécution sont autant d'instruments où la banque commerciale locale joue un rôle central.",
  },
  {
    title: "Investisseurs institutionnels",
    description: "La nature réglementée et à long terme de l'actif Gabon Fiber, portée par une concession d'État répond aux critères d'allocation des grands investisseurs institutionnels à la recherche d'actifs infrastructure décorrélés des marchés financiers. Les flux de revenus prévisibles, indexés sur l'utilisation du réseau, offrent un profil de rendement/risque adapté aux passifs de long terme des fonds de pension et des compagnies d'assurance.",
  },
  {
    title: "Fonds d'infrastructure",
    description: "Le backbone national gabonais constitue un actif d'infrastructure numérique en phase de maturité opérationnelle, avec des revenus concédés, une demande captive des opérateurs télécoms nationaux (Airtel, Gabon Télécom), des fournisseurs d'accès internet et un potentiel d'extensions planifiées. Ce profil brownfield à composante greenfield sur les extensions est particulièrement adapté aux stratégies de fonds infrastructure ciblant des rendements ajustés au risque sur des marchés émergents à fort potentiel de connectivité.",
  },
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

      {/* Profils investisseurs */}
      <section className="bg-navy-deep py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-16">
            <div className="s-label mb-6">Opportunités multiples</div>
            <h2 className="s-title text-5xl text-white mb-6">Un projet,<br /><em>des partenaires</em></h2>
            <p className="s-body !text-[15.5px]">
              Que vous soyez arrangeur de dette, institution de développement, fonds d'infrastructure ou conseil spécialisé, Gabon Fiber offre un point d'entrée unique sur la transformation numérique d'un État souverain d'Afrique centrale.
            </p>
          </div>
          <div className="space-y-4">
            {INVESTOR_PROFILES.map((profile, i) => (
              <div key={profile.title} className={`reveal d${(i % 4) + 1} bg-white/[0.04] border border-blue-light/30 gf-shape-md p-8 hover:border-blue-light/50 transition-colors`}>
                <h3 className="font-display font-extrabold text-xl uppercase text-white mb-4">{profile.title}</h3>
                <p className="text-white/80 text-[15px] leading-relaxed">{profile.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 reveal">
            <Link to="/contact" className="btn-y">Nous contacter →</Link>
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
