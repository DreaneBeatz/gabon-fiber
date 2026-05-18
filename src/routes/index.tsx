import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Ticker } from "@/components/Ticker";
import { PageWrap } from "@/components/PageBits";
import { GabonMap } from "@/components/GabonMap";
import { Logo } from "@/components/Nav";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gabon Fiber SA — Connecter l'avenir" },
      { name: "description", content: "Opérateur neutre de référence du backbone national gabonais en fibre optique. Souveraineté numérique, wholesale exclusif, 1 700 km existants, 3 350 km à terme." },
    ],
  }),
});

/* ---------------- HERO ---------------- */
function FiberBackground() {
  const lines = Array.from({ length: 12 }).map((_, i) => ({
    top: `${(i * 7 + (i % 3) * 3) % 95}%`,
    duration: `${6 + ((i * 1.4) % 9)}s`,
    delay: `${(i * 0.7) % 6}s`,
  }));
  return (
    <div className="hero-bg-animated">
      {lines.map((l, i) => (
        <span
          key={i}
          className="fiber-line"
          style={{ top: l.top, animationDuration: l.duration, animationDelay: l.delay }}
        />
      ))}
    </div>
  );
}

const HERO_STATS = [
  { v: "1 700", u: "Backbone existant", unit: "km" },
  { v: "+1 650", u: "Extensions prévues", unit: "km" },
  { v: "3 350", u: "Cible totale", unit: "km" },
  { v: "Open", u: "Modèle wholesale neutre", unit: "Access" },
];

function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-[140px] pb-20 overflow-hidden">
      <FiberBackground />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14 w-full">
        <div className="max-w-4xl">
          <div className="reveal mb-6 inline-block font-headline font-extrabold uppercase tracking-[0.18em] text-[13px] text-[#DDDB00]" style={{ fontFamily: "var(--font-headline)" }}>
            Connecter l'avenir
          </div>
          <h1 className="s-title reveal d1 text-[clamp(52px,9.5vw,150px)] text-white mb-8">
            Gabon Fiber <em>&zwnj;</em>
          </h1>
          <p className="s-body reveal d2 max-w-2xl mb-10 !text-[17px] !text-white/80">
            Gabon Fiber SA est le futur opérateur neutre de référence du backbone national gabonais en fibre optique — un projet stratégique né de la volonté de l'État de garantir sa souveraineté numérique et de doter le Gabon d'une infrastructure de connectivité digne des standards internationaux.
          </p>
          <div className="reveal d3 flex flex-wrap gap-4">
            <a href="#investisseurs" className="btn-y">Espace investisseurs →</a>
            <a href="#backbone" className="btn-g">Découvrir le backbone</a>
          </div>
        </div>
        <div className="reveal d4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20 max-w-5xl border-t border-white/15 pt-10">
          {HERO_STATS.map((s) => (
            <div key={s.u} className="gf-shape p-5 bg-white/[0.04] border border-white/10">
              <div className="font-headline font-extrabold text-4xl md:text-5xl text-[#27AAE1] leading-none" style={{ fontFamily: "var(--font-headline)" }}>
                {s.v}
                <span className="text-base md:text-lg text-white/60 ml-1.5">{s.unit}</span>
              </div>
              <div className="font-mono text-[11px] tracking-wider text-white/55 uppercase mt-3">{s.u}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AMBITIONS ---------------- */
const PILLARS = [
  { n: "01", t: "Couverture Nationale", d: "Connecter toutes les provinces du Gabon d'ici 2029." },
  { n: "02", t: "Neutralité", d: "Opérateur de gros exclusif, aucune offre retail, accès équitable aux FAI." },
  { n: "03", t: "Souveraineté Numérique", d: "Infrastructure stratégique, biens de retour à l'État." },
  { n: "04", t: "Financement Privé", d: "PPP concessif, modèle bankable, TRI 16,9% actionnaire." },
];

function Ambitions() {
  return (
    <section id="ambitions" className="bg-[#020366] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgba(39,170,225,0.25), transparent 60%)" }} />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="s-label !text-[#DDDB00] mb-6">Ambitions</div>
            <h2 className="s-title text-5xl md:text-6xl text-white">
              Notre<br /><em>mission</em>
            </h2>
          </div>
          <div className="lg:col-span-8 reveal d1">
            <blockquote className="border-l-4 border-[#DDDB00] pl-8 py-2">
              <p className="font-headline font-light text-2xl md:text-3xl leading-snug text-white" style={{ fontFamily: "var(--font-headline)" }}>
                «&nbsp;Opérer et développer le backbone national de la République Gabonaise en fibre optique, avec les principes d'opérateur de gros, de neutralité et de non-discrimination.&nbsp;»
              </p>
            </blockquote>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <div key={p.n} className={`reveal d${i + 1} gf-shape-md p-8 bg-white/[0.04] border border-[#27AAE1]/15 hover:border-[#DDDB00]/50 transition-colors`}>
              <div className="font-mono text-[11px] tracking-widest text-[#DDDB00] mb-5">— {p.n}</div>
              <h3 className="font-headline font-extrabold text-xl uppercase text-white mb-3" style={{ fontFamily: "var(--font-headline)" }}>{p.t}</h3>
              <p className="s-body !text-[14px]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BACKBONE ---------------- */
const PHASES = [
  { label: "Réseau existant", km: 1700 },
  { label: "Phase 1 — Mouila / Tchibanga", km: 2120 },
  { label: "Phase 2 — Port-Gentil / Yombi", km: 2500 },
  { label: "Phase 3 — Ndendé / Koulamoutou", km: 2880 },
  { label: "Phase 4 — Makokou / Kélé", km: 3350 },
];

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function Backbone() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const km = useCounter(PHASES[phaseIdx].km);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !triggered.current) {
          triggered.current = true;
          let i = 0;
          const cycle = () => {
            setPhaseIdx(i);
            if (i < PHASES.length - 1) {
              i++;
              setTimeout(cycle, 1500);
            }
          };
          cycle();
        }
      });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="backbone" ref={sectionRef} className="py-32" style={{ background: "linear-gradient(180deg, #010234 0%, #020366 100%)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 reveal">
            <div className="s-label !text-[#DDDB00] mb-6">Backbone</div>
            <h2 className="s-title text-5xl md:text-6xl text-white mb-6">
              Du backbone<br />à l'<em>extension nationale</em>
            </h2>
            <p className="s-body mb-8">
              1 700 km opérationnels aujourd'hui. +1 650 km en construction sur 4 phases pour atteindre 3 350 km et désenclaver l'intérieur du pays.
            </p>

            <div className="gf-shape-md bg-[#0082C6]/15 border border-[#27AAE1]/30 p-8 mb-6">
              <div className="font-mono text-[10px] tracking-widest text-[#DDDB00] uppercase mb-2">Compteur backbone</div>
              <div className="font-headline font-extrabold text-7xl md:text-8xl text-white leading-none" style={{ fontFamily: "var(--font-headline)" }}>
                {km.toLocaleString("fr-FR")}
                <span className="text-3xl md:text-4xl text-[#DDDB00] ml-2">km</span>
              </div>
              <div className="font-headline font-bold text-sm uppercase tracking-wider text-[#27AAE1] mt-3" style={{ fontFamily: "var(--font-headline)" }}>
                {PHASES[phaseIdx].label}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {PHASES.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => setPhaseIdx(i)}
                  className={`gf-shape-sm text-left px-5 py-3 border transition-all flex items-center justify-between ${
                    phaseIdx === i
                      ? "bg-[#DDDB00] text-[#020366] border-[#DDDB00]"
                      : "bg-white/[0.03] text-white/80 border-white/10 hover:border-[#DDDB00]/50"
                  }`}
                >
                  <span className="font-headline font-bold uppercase text-[13px] tracking-wider" style={{ fontFamily: "var(--font-headline)" }}>{p.label}</span>
                  <span className="font-mono text-[12px]">{p.km.toLocaleString("fr-FR")} km</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 reveal d2 bg-[#010234] gf-shape-lg p-8 border border-[#27AAE1]/20">
            <GabonMap size="lg" activePhase={phaseIdx as 0 | 1 | 2 | 3 | 4} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACTUALITÉS ---------------- */
const NEWS = [
  {
    cat: "Institutionnel",
    date: "À venir",
    t: "Création officielle de Gabon Fiber SA",
    d: "Gabon Fiber SA est officiellement constituée en société anonyme de droit gabonais. La société est appelée à reprendre l'exploitation du backbone fibre national à l'expiration de la DSP Axione en novembre 2026.",
  },
  {
    cat: "Gouvernance",
    date: "À venir",
    t: "Premier Conseil d'Administration",
    d: "Le premier Conseil d'Administration de Gabon Fiber SA s'est tenu à Libreville. Il a acté les premières orientations stratégiques de la société et validé les grandes lignes du plan de développement du backbone national.",
  },
  {
    cat: "Infrastructure",
    date: "À venir",
    t: "Visite du backbone par M. le Ministre",
    d: "M. le Ministre en charge du Numérique a effectué une visite des installations du backbone fibre national, accompagné de l'équipe de direction de Gabon Fiber SA. Cette visite illustre l'engagement de l'État dans le développement de l'infrastructure numérique du pays.",
  },
];

function NewsPlaceholder({ cat }: { cat: string }) {
  return (
    <div className="aspect-[16/10] relative overflow-hidden gf-shape-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #020366 0%, #0082C6 100%)" }}>
      <Logo className="h-16 w-auto opacity-90" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-widest uppercase text-[#DDDB00]">{cat}</span>
        <span className="font-mono text-[10px] text-white/50">GABONFIBERSA.GA</span>
      </div>
    </div>
  );
}

function Actualites() {
  return (
    <section id="actualites" className="bg-[#f4f8fc] text-[#020366] py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="flex flex-wrap items-end justify-between mb-14 gap-6">
          <div className="reveal">
            <div className="s-label !text-[#0082C6] mb-5">Actualités</div>
            <h2 className="s-title text-5xl md:text-6xl !text-[#020366]">
              Dernières <em className="!text-[#0082C6]">nouvelles</em>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((n, i) => (
            <article key={n.t} className={`reveal d${i + 1} group gf-shape-md bg-white border border-[#27AAE1]/20 overflow-hidden flex flex-col`}>
              <NewsPlaceholder cat={n.cat} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-4 mb-3">
                  <span className="gf-shape-xs px-3 py-1 font-mono text-[10px] tracking-widest text-white uppercase bg-[#0082C6]">{n.cat}</span>
                  <span className="font-mono text-[10px] tracking-widest text-[#536B79] uppercase self-center">{n.date}</span>
                </div>
                <h3 className="font-headline font-extrabold text-xl uppercase text-[#020366] leading-tight mb-3" style={{ fontFamily: "var(--font-headline)" }}>{n.t}</h3>
                <p className="text-sm text-[#536B79] leading-relaxed mb-5 flex-1">{n.d}</p>
                <span className="font-headline font-bold uppercase text-[#0082C6] tracking-widest text-xs" style={{ fontFamily: "var(--font-headline)" }}>Lire →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GOUVERNANCE ---------------- */
const SHARES = [
  { name: "État élargi", pct: 35, color: "#0082C6", note: "≤ 35%" },
  { name: "Opérateurs télécoms", pct: 25, color: "#27AAE1", note: "20–30%" },
  { name: "Investisseurs financiers PE", pct: 35, color: "#DDDB00", note: "30–40%", open: true },
  { name: "Partenaires industriels", pct: 10, color: "#59BE98", note: "10% ou plus" },
];

function Gouvernance() {
  return (
    <section id="gouvernance" className="bg-[#020366] py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <div className="s-label !text-[#DDDB00] mb-6">Gouvernance</div>
            <h2 className="s-title text-5xl md:text-6xl text-white mb-6">
              Structure du <em>capital cible</em>
            </h2>
            <p className="s-body mb-8">
              Structure indicative en cours de finalisation. Le slot Investisseurs financiers PE reste ouvert pour un ticket représentant 30 à 40% du capital.
            </p>
            <a href="#investisseurs" className="btn-y">Investissez →</a>
          </div>
          <div className="lg:col-span-7 reveal d2 space-y-4">
            {SHARES.map((s, i) => (
              <div key={s.name} className={`gf-shape-md bg-white/[0.04] border border-white/10 p-5`}>
                <div className="flex justify-between mb-2">
                  <span className="font-headline font-bold uppercase text-white tracking-wider" style={{ fontFamily: "var(--font-headline)" }}>
                    {s.name} {s.open && <span className="text-[#DDDB00] text-[11px] ml-2">(SLOT OUVERT)</span>}
                  </span>
                  <span className="font-mono text-[#DDDB00] font-bold">{s.note ?? `${s.pct}%`}</span>
                </div>
                <div className="h-2 bg-white/10 gf-shape-xs overflow-hidden">
                  <div
                    className="h-full transition-all duration-1000 gf-shape-xs"
                    style={{ width: `${s.pct * 3}%`, maxWidth: "100%", background: s.color, animationDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INVESTISSEURS ---------------- */
const FIN_KPIS = [
  { k: "Investissement total", v: "52 Mds FCFA", s: "~80 M€ HT" },
  { k: "Fonds propres", v: "13 Mds FCFA", s: "25%" },
  { k: "Dette institutionnelle", v: "31 Mds FCFA", s: "60%" },
  { k: "Dons Global Gateway UE", v: "7,8 Mds FCFA", s: "15%" },
  { k: "TRI Projet", v: "14,6%", s: "" },
  { k: "TRI Actionnaire", v: "16,9%", s: "sur 15–20 ans" },
  { k: "EBITDA moyen cible", v: "~45%", s: "" },
  { k: "Extensions à financer", v: "1 650 km", s: "en 4 ans" },
];

const PROFILES = [
  {
    t: "Fonds de Private Equity",
    d: "Le slot investisseur financier est actuellement ouvert pour un ticket de 4 à 6 milliards FCFA (30 à 40% du capital). Gabon Fiber SA offre un TRI actionnaire de 16,9% sur 15 à 20 ans dans un secteur régulé à revenus récurrents.",
    cta: "Demander le mémorandum →",
  },
  {
    t: "Banques d'Affaires",
    d: "Nous recherchons un conseil financier pour accompagner la structuration de la levée de fonds, la négociation avec les bailleurs institutionnels et la mise en place du tour de table.",
    cta: "Nous contacter →",
  },
  {
    t: "Institutions Financières (DFI / Multilatéraux)",
    d: "AFD, BEI, BDEAC et institutions similaires peuvent intervenir sous forme de prêts concessionnels, garanties ou subventions. 60% du plan de financement est dédié à la dette institutionnelle (31 Mds FCFA).",
    cta: "Nous contacter →",
  },
  {
    t: "Opérateurs Télécoms",
    d: "Une entrée au capital par apport en nature (fourreaux, équipements, droits de passage) est possible, sur le modèle de l'apport Gabon Telecom (20–25% du capital). Des engagements d'achat de capacités (take-or-pay) sont également envisageables.",
    cta: "Nous contacter →",
  },
  {
    t: "Institutions Publiques & Gouvernements",
    d: "Des partenariats publics-privés structurés, des fonds dédiés à la connectivité ou des mandats de financement peuvent être discutés avec les autorités mandataires concernées.",
    cta: "Nous contacter →",
  },
];

function Investisseurs() {
  return (
    <section id="investisseurs" className="bg-[#f4f8fc] text-[#020366] py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="max-w-3xl mb-14 reveal">
          <div className="s-label !text-[#0082C6] mb-6">Investissez</div>
          <h2 className="s-title text-5xl md:text-6xl !text-[#020366] mb-4">
            Investissez dans<br /><em className="!text-[#0082C6]">Gabon Fiber SA</em>
          </h2>
          <p className="text-lg text-[#536B79]">Une opportunité unique d'infrastructure en Afrique centrale.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {FIN_KPIS.map((k, i) => (
            <div key={k.k} className={`reveal d${(i % 4) + 1} gf-shape-md bg-white border border-[#27AAE1]/25 p-6`}>
              <div className="font-mono text-[10px] tracking-widest text-[#536B79] uppercase mb-2">{k.k}</div>
              <div className="font-headline font-extrabold text-2xl md:text-3xl text-[#020366] leading-tight" style={{ fontFamily: "var(--font-headline)" }}>{k.v}</div>
              {k.s && <div className="text-xs text-[#0082C6] mt-1 font-mono">{k.s}</div>}
            </div>
          ))}
        </div>

        {/* Profils */}
        <div className="mb-16">
          <h3 className="s-title text-3xl md:text-4xl !text-[#020366] mb-10">Profils <em className="!text-[#0082C6]">investisseurs</em></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFILES.map((p, i) => (
              <div key={p.t} className={`reveal d${(i % 3) + 1} gf-shape-lg bg-white border border-[#27AAE1]/25 p-8 flex flex-col hover:border-[#DDDB00] transition-colors`}>
                <div className="w-12 h-12 gf-shape-sm bg-[#020366] flex items-center justify-center mb-5">
                  <span className="font-headline font-extrabold text-lg text-[#DDDB00]" style={{ fontFamily: "var(--font-headline)" }}>0{i + 1}</span>
                </div>
                <h4 className="font-headline font-extrabold text-xl uppercase text-[#020366] mb-4 leading-tight" style={{ fontFamily: "var(--font-headline)" }}>{p.t}</h4>
                <p className="text-sm text-[#536B79] leading-relaxed mb-6 flex-1">{p.d}</p>
                <a href="#contact" className="font-headline font-bold uppercase text-[#0082C6] tracking-widest text-xs hover:text-[#DDDB00]" style={{ fontFamily: "var(--font-headline)" }}>{p.cta}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Processus d'engagement */}
        <div className="gf-shape-lg bg-[#020366] text-white p-10 md:p-14 reveal">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <div className="s-label !text-[#DDDB00] mb-5">Processus d'engagement</div>
              <h3 className="s-title text-3xl md:text-4xl text-white mb-6">
                Comment accéder au <em>mémorandum d'information</em> ?
              </h3>
              <ol className="space-y-3 text-white/85 text-[15px]">
                <li><span className="font-mono text-[#DDDB00] mr-3">01</span>Manifestez-vous en envoyant un email à <a href="mailto:invest@gabon-fiber.ga" className="text-[#DDDB00] underline">invest@gabon-fiber.ga</a> en précisant votre profil.</li>
                <li><span className="font-mono text-[#DDDB00] mr-3">02</span>Gabon Fiber vous adressera la documentation nécessaire à la mise en place du cadre de discussion.</li>
                <li><span className="font-mono text-[#DDDB00] mr-3">03</span>Une fois le cadre de discussion posé, la documentation nécessaire vous sera transmise.</li>
              </ol>
              <p className="mt-6 text-xs text-white/55 italic">Aucun document confidentiel n'est partagé avant la mise en place du cadre de discussion.</p>
            </div>
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <a href="mailto:invest@gabon-fiber.ga" className="btn-y w-full justify-center">invest@gabon-fiber.ga</a>
              <a href="#contact" className="btn-g w-full justify-center">Formulaire investisseur</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [tab, setTab] = useState<"general" | "investor">("general");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-[#010234] py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="reveal max-w-3xl mb-12">
          <div className="s-label !text-[#DDDB00] mb-6">Contact</div>
          <h2 className="s-title text-5xl md:text-6xl text-white mb-4">
            Échangeons avec <em>Gabon Fiber SA</em>
          </h2>
        </div>

        <div className="flex gap-2 mb-8">
          {([
            ["general", "Contact général"],
            ["investor", "Investisseurs"],
          ] as const).map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`gf-shape-sm px-6 py-3 font-headline font-bold uppercase tracking-wider text-[13px] transition-all ${
                tab === k
                  ? "bg-[#DDDB00] text-[#020366]"
                  : "bg-white/[0.04] text-white/65 border border-white/15 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-2 gf-shape-lg bg-white/[0.04] border border-[#27AAE1]/20 p-8 md:p-10 space-y-5"
          >
            {tab === "general" ? (
              <>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Prénom" name="firstname" required />
                  <Field label="Nom" name="lastname" required />
                </div>
                <Field label="Société" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Objet" name="subject" />
                <Textarea label="Message" name="message" required />
                <button type="submit" className="btn-y">Envoyer →</button>
              </>
            ) : (
              <>
                <div className="bg-[#DDDB00]/10 border border-[#DDDB00]/30 gf-shape-sm p-4 text-sm text-white/85">
                  Votre demande sera traitée sous 48h. Un NDA vous sera envoyé avant tout partage de document.
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Prénom" name="firstname" required />
                  <Field label="Nom" name="lastname" required />
                </div>
                <Field label="Société / Fonds" name="fund" required />
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Téléphone" name="phone" type="tel" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest text-[#DDDB00] uppercase mb-2">Type d'investisseur</label>
                  <select required className="w-full bg-[#010234] border border-[#27AAE1]/30 gf-shape-sm px-4 py-3 text-white">
                    <option>Fonds Private Equity</option>
                    <option>Banque d'affaires</option>
                    <option>DFI / Multilatéral</option>
                    <option>Opérateur télécom</option>
                    <option>Institution publique</option>
                    <option>Autre</option>
                  </select>
                </div>
                <Textarea label="Message" name="message" required />
                <button type="submit" className="btn-y">Envoyer ma demande →</button>
              </>
            )}
            {sent && (
              <div className="text-[#59BE98] font-mono text-sm">✓ Message envoyé — nous vous répondrons sous 48h.</div>
            )}
          </form>

          <aside className="gf-shape-lg bg-[#020366] border border-[#27AAE1]/25 p-8 space-y-6">
            <div>
              <div className="s-label !text-[#DDDB00] mb-3">Coordonnées</div>
              <p className="font-headline font-extrabold text-2xl text-white mb-1" style={{ fontFamily: "var(--font-headline)" }}>Libreville, Gabon</p>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Contact général</div>
              <a href="mailto:contact@gabonfibersa.ga" className="text-[#DDDB00] font-mono">contact@gabonfibersa.ga</a>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Investisseurs</div>
              <a href="mailto:invest@gabonfibersa.ga" className="text-[#DDDB00] font-mono">invest@gabonfibersa.ga</a>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-white/50 uppercase mb-1">Téléphone</div>
              <p className="text-white font-mono">011 24 76 15</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-widest text-[#DDDB00] uppercase mb-2">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-[#010234] border border-[#27AAE1]/30 gf-shape-sm px-4 py-3 text-white focus:border-[#DDDB00] outline-none"
      />
    </div>
  );
}
function Textarea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] tracking-widest text-[#DDDB00] uppercase mb-2">{label}{required && " *"}</label>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full bg-[#010234] border border-[#27AAE1]/30 gf-shape-sm px-4 py-3 text-white focus:border-[#DDDB00] outline-none resize-none"
      />
    </div>
  );
}

/* ---------------- PAGE ---------------- */
function Home() {
  return (
    <PageWrap>
      <Hero />
      <Ticker />
      <Ambitions />
      <Backbone />
      <Actualites />
      <Gouvernance />
      <Investisseurs />
      <Contact />
    </PageWrap>
  );
}
