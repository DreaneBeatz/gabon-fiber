import { createFileRoute, Link } from "@tanstack/react-router";
import { Ticker } from "@/components/Ticker";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services Wholesale — Gabon Fiber SA" },
      { name: "description", content: "Capacité, transit, colocation, interconnexion, NOC 24/7, SLA 99,9% — offres opérateurs et institutionnels." },
    ],
  }),
});

const ROWS = [
  {
    n: "01",
    t: "Capacité & Transit",
    img: IMG.srv1,
    d: "Lambdas point-à-point, Ethernet wholesale et IP transit national. Bande passante évolutive de 1 Gbps à 100 Gbps+, avec routage optimisé et redondance multi-chemins.",
    f: ["Lambda 10/100 Gbps", "Ethernet wholesale", "IP transit BGP", "Multi-chemins"],
  },
  {
    n: "02",
    t: "Colocation / POPs",
    img: IMG.srv2,
    d: "Hébergement carrier-grade dans nos 10+ POPs nationaux. Espaces sécurisés, alimentation redondante, climatisation, supervision 24/7.",
    f: ["Baies 42U sécurisées", "Alimentation N+1", "Climatisation précision", "Accès 24/7 contrôlé"],
  },
  {
    n: "03",
    t: "Interconnexion",
    img: IMG.srv3,
    d: "Atterrissement des câbles sous-marins internationaux et peering local. Accès direct aux principales artères atlantiques.",
    f: ["SAT-3", "ACE", "MainOne", "Gabon-IX peering"],
  },
  {
    n: "04",
    t: "Services Gérés NOC",
    img: IMG.srv4,
    d: "Network Operations Center 24/7/365. Supervision proactive, gestion d'incidents, déploiement, maintenance préventive.",
    f: ["Supervision 24/7", "Détection proactive", "Tickets prioritaires", "Astreinte sur site"],
  },
  {
    n: "05",
    t: "Qualité & SLA",
    img: IMG.srv5,
    d: "Garanties contractuelles fortes alignées sur les standards internationaux. Reporting mensuel transparent et pénalités automatiques.",
    f: ["99,9% disponibilité", "MTTR < 4h", "Pénalités automatiques", "Reporting mensuel"],
  },
  {
    n: "06",
    t: "Partenariats Stratégiques",
    img: IMG.srv6,
    d: "Accords-cadres avec opérateurs licenciés, FAI, intégrateurs et opérateurs sous-régionaux pour étendre la portée wholesale.",
    f: ["Accords FAI", "Opérateurs sous-régionaux", "Intégrateurs IT", "Roaming données"],
  },
];

function ServicesPage() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Catalogue wholesale"
        title={<>Offres <em>Opérateurs</em><br />& Institutionnels</>}
        image={IMG.heroServices}
        compact
      />
      <Ticker />

      <section className="bg-off-white text-slate-ink py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal max-w-3xl mb-20">
            <div className="s-label !text-blue-mid mb-6">6 lignes de service</div>
            <h2 className="s-title text-5xl md:text-6xl !text-slate-ink">Pour les opérateurs<br /><em className="!text-blue-mid">de demain</em></h2>
          </div>
          <div className="space-y-24">
            {ROWS.map((r, i) => (
              <div key={r.n} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="reveal">
                  <img src={r.img} alt={r.t} className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className="reveal d2">
                  <div className="font-mono text-[11px] tracking-widest text-blue-mid mb-4">— {r.n}</div>
                  <h3 className="s-title text-4xl md:text-5xl !text-slate-ink mb-5">{r.t}</h3>
                  <p className="text-slate-light text-[15.5px] leading-[1.85] mb-7">{r.d}</p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {r.f.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-slate-ink text-sm">
                        <span className="text-blue-mid font-bold mt-0.5">→</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-p btn-on-light">Demander un devis →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28" style={{ background: "linear-gradient(135deg, #0a4f7e 0%, #1a7abf 100%)" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="reveal text-center max-w-2xl mx-auto mb-14">
            <div className="s-label !text-white/70 !justify-center !flex mb-5">SLA</div>
            <h2 className="s-title text-5xl text-white">Engagements <em>contractuels</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["99,9%", "Disponibilité"],
              ["< 4h", "MTTR critique"],
              ["24/7", "NOC supervision"],
            ].map(([v, u], i) => (
              <div key={u} className={`reveal d${i + 1} bg-white/10 backdrop-blur p-12 border border-white/15 text-center`}>
                <div className="font-display font-extrabold text-7xl text-white leading-none">{v}</div>
                <div className="font-mono text-[12px] tracking-widest text-white/75 uppercase mt-4">{u}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <Link to="/contact" className="btn-p !bg-white !text-blue-deep !border-white">Demander un devis personnalisé →</Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
