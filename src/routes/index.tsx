import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageWrap } from "@/components/PageBits";
import { HeroAnimated } from "@/components/HeroAnimated";
import { BackboneCounter } from "@/components/BackboneCounter";
import { NewsPlaceholder } from "@/components/NewsPlaceholder";
import { Ticker } from "@/components/Ticker";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gabon Fiber SA — Connecter l'avenir" },
      {
        name: "description",
        content:
          "Opérateur de gros neutre du backbone fibre national du Gabon. 1 700 km existants, +1 650 km d'extensions, 3 350 km cible. Open access, souveraineté numérique.",
      },
    ],
  }),
});

const PILIERS = [
  {
    n: "01",
    t: "Couverture Nationale",
    d: "Connecter toutes les provinces du Gabon d'ici 2029.",
  },
  {
    n: "02",
    t: "Neutralité",
    d: "Opérateur de gros exclusif, aucune offre retail, accès équitable.",
  },
  {
    n: "03",
    t: "Souveraineté Numérique",
    d: "Infrastructure stratégique, biens de retour à l'État.",
  },
  {
    n: "04",
    t: "Financement Privé",
    d: "PPP concessif, modèle bankable, TRI 16,9% actionnaire.",
  },
];

const FIN_KPIS = [
  { v: "52 Mds FCFA", u: "Investissement total (~80 M€ HT)" },
  { v: "13 Mds FCFA", u: "Fonds propres (25%)" },
  { v: "31 Mds FCFA", u: "Dette institutionnelle (60%)" },
  { v: "7,8 Mds FCFA", u: "Dons Global Gateway UE (15%)" },
  { v: "14,6%", u: "TRI Projet" },
  { v: "16,9%", u: "TRI Actionnaire (15–20 ans)" },
  { v: "~45%", u: "EBITDA moyen cible" },
  { v: "1 650 km", u: "Extensions à financer (4 ans)" },
];

const PROFILS = [
  {
    t: "Fonds de Private Equity",
    d: "Le slot investisseur financier est ouvert pour un ticket de 4 à 6 milliards FCFA (30 à 40% du capital). TRI actionnaire de 16,9% sur 15 à 20 ans dans un secteur régulé à revenus récurrents.",
    cta: "Demander le mémorandum",
  },
  {
    t: "Banques d'Affaires",
    d: "Nous recherchons un conseil financier pour accompagner la structuration de la levée, la négociation avec les bailleurs institutionnels et la mise en place du tour de table.",
    cta: "Nous contacter",
  },
  {
    t: "Institutions Financières (DFI / Multilatéraux)",
    d: "AFD, BEI, BDEAC et institutions similaires peuvent intervenir sous forme de prêts concessionnels, garanties ou subventions. 60% du plan dédié à la dette institutionnelle.",
    cta: "Nous contacter",
  },
  {
    t: "Opérateurs Télécoms",
    d: "Entrée au capital par apport en nature (fourreaux, équipements, droits de passage), sur le modèle Gabon Telecom (20–25% du capital). Engagements take-or-pay envisageables.",
    cta: "Nous contacter",
  },
  {
    t: "Institutions Publiques & Gouvernements",
    d: "Partenariats publics-privés structurés, fonds dédiés à la connectivité ou mandats de financement à discuter avec les autorités mandataires.",
    cta: "Nous contacter",
  },
];

const ACTU = [
  {
    cat: "Institutionnel",
    t: "Création officielle de Gabon Fiber SA",
    d: "Date à confirmer",
    ex: "Gabon Fiber SA est officiellement constituée en société anonyme de droit gabonais. La société est appelée à reprendre l'exploitation du backbone fibre national à l'expiration de la DSP Axione en novembre 2026.",
  },
  {
    cat: "Gouvernance",
    t: "Premier Conseil d'Administration de Gabon Fiber SA",
    d: "Date à confirmer",
    ex: "Le premier Conseil d'Administration s'est tenu à Libreville. Il a acté les premières orientations stratégiques et validé les grandes lignes du plan de développement du backbone national.",
  },
  {
    cat: "Infrastructure",
    t: "Visite du backbone fibre national par M. le Ministre",
    d: "Date à confirmer",
    ex: "M. le Ministre en charge du Numérique a effectué une visite des installations du backbone fibre national, accompagné de l'équipe de direction. Visite illustrant l'engagement de l'État dans l'infrastructure numérique.",
  },
];

const SHARES = [
  { n: "SPIN (État)", p: 35, c: "#0082C6" },
  { n: "Gabon Télécom", p: 22, c: "#27AAE1" },
  { n: "Private Equity", p: 35, c: "#65AEE0" },
  { n: "Apport opérateur (GVA)", p: 5, c: "#59BE98" },
  { n: "Axione (mgmt)", p: 3, c: "#969EAA" },
];

function Home() {
  return (
    <PageWrap>
      <HeroAnimated />
      <Ticker />

      {/* === AMBITIONS === */}
      <section id="ambitions" className="py-28" style={{ background: "#f0f7ff", color: "#020366" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-4 reveal">
              <div className="s-label dark mb-5">Ambitions</div>
              <h2 className="s-title text-5xl md:text-6xl">
                Notre <em style={{ color: "#0082C6" }}>raison<br />d'être</em>
              </h2>
            </div>
            <div className="lg:col-span-8 reveal d2">
              <blockquote
                className="gf-shape-lg p-10 md:p-12 relative"
                style={{ background: "#fff", borderLeft: "4px solid #DDDB00" }}
              >
                <div
                  className="absolute -top-6 left-8 font-display font-bold text-7xl leading-none"
                  style={{ color: "#DDDB00" }}
                >
                  «
                </div>
                <p className="text-xl md:text-2xl leading-relaxed font-body" style={{ color: "#020366" }}>
                  Opérer et développer le backbone national de la République Gabonaise en fibre optique, avec les principes
                  d'<strong>opérateur de gros</strong>, de <strong>neutralité</strong> et de <strong>non-discrimination</strong>.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILIERS.map((p, i) => (
              <div
                key={p.n}
                className={`reveal d${i + 1} gf-shape p-8 transition-transform hover:-translate-y-1`}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,130,198,0.15)",
                  boxShadow: "0 8px 24px -16px rgba(0,130,198,0.3)",
                }}
              >
                <div
                  className="font-mono text-[11px] tracking-[0.22em] mb-4"
                  style={{ color: "#0082C6" }}
                >
                  — {p.n}
                </div>
                <h3 className="font-display font-bold text-xl uppercase mb-3" style={{ color: "#020366" }}>
                  {p.t}
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: "#536B79" }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BACKBONE === */}
      <section id="backbone" className="py-28" style={{ background: "#020366" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
            <div className="reveal">
              <div className="s-label mb-5">Backbone</div>
              <h2 className="s-title text-5xl md:text-6xl text-white">
                Du <em>backbone</em><br />à l'extension<br />nationale
              </h2>
            </div>
            <p className="reveal d2 s-body">
              1 700 km opérationnels aujourd'hui. +1 650 km en construction sur 4 phases pour atteindre <strong style={{ color: "#DDDB00" }}>3 350 km</strong> et désenclaver les zones intérieures.
              Cliquez sur une phase pour voir le tracé et la projection en temps réel.
            </p>
          </div>

          <div className="reveal">
            <BackboneCounter />
          </div>
        </div>
      </section>

      {/* === ACTUALITES === */}
      <section id="actualites" className="py-28" style={{ background: "#fff", color: "#020366" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="reveal">
              <div className="s-label dark mb-5">Actualités</div>
              <h2 className="s-title text-5xl md:text-6xl">
                Dernières <em style={{ color: "#0082C6" }}>nouvelles</em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ACTU.map((a, i) => (
              <article
                key={a.t}
                className={`reveal d${i + 1} gf-shape overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1`}
                style={{ background: "#fff", border: "1px solid rgba(0,130,198,0.15)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <NewsPlaceholder category={a.cat} />
                </div>
                <div className="p-7">
                  <div className="flex gap-4 mb-3">
                    <span
                      className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 gf-shape-badge"
                      style={{ background: "#DDDB00", color: "#020366" }}
                    >
                      {a.cat}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#536B79" }}>
                      {a.d}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase leading-tight mb-3" style={{ color: "#020366" }}>
                    {a.t}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "#536B79" }}>
                    {a.ex}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === GOUVERNANCE === */}
      <section id="gouvernance" className="py-28" style={{ background: "#f0f7ff", color: "#020366" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 reveal">
              <div className="s-label dark mb-5">Gouvernance</div>
              <h2 className="s-title text-5xl md:text-6xl mb-6">
                Structure du <em style={{ color: "#0082C6" }}>capital</em>
              </h2>
              <p className="text-[15.5px] leading-[1.75] mb-6" style={{ color: "#536B79" }}>
                Société anonyme de droit gabonais, Gabon Fiber SA repose sur un partenariat public-privé associant
                l'État, l'opérateur historique, des investisseurs financiers et des opérateurs techniques.
              </p>
              <a href="#investisseurs" className="btn-b">Investissez avec nous →</a>
            </div>

            <div className="lg:col-span-7 reveal d2 space-y-4">
              {SHARES.map((s) => (
                <div key={s.n} className="gf-shape p-5" style={{ background: "#fff", border: "1px solid rgba(0,130,198,0.12)" }}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="font-display font-bold uppercase text-[14px] tracking-wide" style={{ color: "#020366" }}>
                      {s.n}
                    </div>
                    <div className="font-display font-bold text-2xl" style={{ color: s.c }}>
                      {s.p}%
                    </div>
                  </div>
                  <div className="h-2 w-full bg-[#dde8ef] gf-shape-badge overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{ width: `${s.p * 2.5}%`, background: s.c, maxWidth: "100%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === INVESTISSEURS === */}
      <section id="investisseurs" className="py-28 relative overflow-hidden" style={{ background: "#020366" }}>
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(221,219,0,0.18), transparent 50%), radial-gradient(circle at 20% 80%, rgba(39,170,225,0.25), transparent 50%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-14">
          <div className="text-center mb-16 reveal">
            <div className="s-label mb-5 justify-center inline-flex">Investissez</div>
            <h2 className="s-title text-5xl md:text-7xl text-white mb-5">
              Investissez dans<br /><em>Gabon Fiber SA</em>
            </h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Une opportunité unique d'infrastructure en Afrique centrale.
            </p>
          </div>

          {/* Données financières */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {FIN_KPIS.map((k, i) => (
              <div
                key={k.u}
                className={`reveal d${(i % 4) + 1} gf-shape p-6`}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(39,170,225,0.2)",
                }}
              >
                <div
                  className="font-display font-bold text-2xl md:text-3xl leading-tight mb-2"
                  style={{ color: "#DDDB00" }}
                >
                  {k.v}
                </div>
                <div className="font-mono text-[10.5px] tracking-wider text-white/65 uppercase leading-snug">
                  {k.u}
                </div>
              </div>
            ))}
          </div>

          {/* Profils investisseurs */}
          <div className="mb-20">
            <h3 className="s-title text-3xl md:text-4xl text-white mb-10 text-center">
              Profils <em>investisseurs</em>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROFILS.map((p, i) => (
                <div
                  key={p.t}
                  className={`reveal d${(i % 4) + 1} gf-shape-lg p-7 flex flex-col`}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(39,170,225,0.22)",
                  }}
                >
                  <div
                    className="font-mono text-[10px] tracking-[0.22em] uppercase mb-3"
                    style={{ color: "#DDDB00" }}
                  >
                    Profil {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-display font-bold text-xl uppercase text-white mb-4 leading-tight">
                    {p.t}
                  </h4>
                  <p className="text-[14px] leading-[1.65] text-white/75 mb-6 flex-1">{p.d}</p>
                  <a
                    href="mailto:invest@gabonfibersa.ga"
                    className="font-display font-bold text-[12px] uppercase tracking-[0.08em] hover:opacity-80 transition-opacity"
                    style={{ color: "#DDDB00" }}
                  >
                    {p.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc NDA */}
          <div
            className="reveal gf-shape-xl p-10 md:p-14 max-w-5xl mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(39,170,225,0.12), rgba(2,3,102,0.6))",
              border: "1px solid #DDDB00",
            }}
          >
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase mb-4" style={{ color: "#DDDB00" }}>
              Processus confidentiel
            </div>
            <h3 className="s-title text-3xl md:text-4xl text-white mb-6">
              Comment accéder au mémorandum<br />d'<em>information ?</em>
            </h3>
            <ol className="space-y-4 mb-8 text-white/85 text-[15px] leading-[1.7]">
              <li className="flex gap-4">
                <span className="font-display font-bold text-2xl flex-shrink-0" style={{ color: "#DDDB00" }}>01</span>
                <span>Manifestez-vous en envoyant un email à <a href="mailto:invest@gabonfibersa.ga" className="underline" style={{ color: "#DDDB00" }}>invest@gabonfibersa.ga</a> en précisant votre profil.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display font-bold text-2xl flex-shrink-0" style={{ color: "#DDDB00" }}>02</span>
                <span>Gabon Fiber SA vous adressera un NDA (accord de non-divulgation) standard à signer.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-display font-bold text-2xl flex-shrink-0" style={{ color: "#DDDB00" }}>03</span>
                <span>Après signature, vous recevrez le mémorandum d'information complet (IM).</span>
              </li>
            </ol>
            <p className="text-[13px] italic text-white/60 mb-6">
              Aucun document confidentiel n'est partagé avant signature du NDA.
            </p>
            <a href="mailto:invest@gabonfibersa.ga" className="btn-y">
              invest@gabonfibersa.ga →
            </a>
          </div>
        </div>
      </section>

      {/* === CONTACT === */}
      <ContactSection />
    </PageWrap>
  );
}

function ContactSection() {
  const [tab, setTab] = useState<"general" | "investor">("general");

  return (
    <section id="contact" className="py-28" style={{ background: "#fff", color: "#020366" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5 reveal">
            <div className="s-label dark mb-5">Contact</div>
            <h2 className="s-title text-5xl md:text-6xl mb-6">
              Échangeons<br /><em style={{ color: "#0082C6" }}>ensemble</em>
            </h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "#536B79" }}>
              Choisissez le formulaire adapté à votre demande. Les sollicitations investisseurs sont traitées en priorité, sous 48h.
            </p>
            <div className="space-y-3 text-[14px]" style={{ color: "#020366" }}>
              <div><strong>Adresse :</strong> Libreville, Gabon</div>
              <div>
                <strong>Email général :</strong>{" "}
                <a href="mailto:contact@gabonfibersa.ga" className="hover:underline" style={{ color: "#0082C6" }}>
                  contact@gabonfibersa.ga
                </a>
              </div>
              <div>
                <strong>Email investisseurs :</strong>{" "}
                <a href="mailto:invest@gabonfibersa.ga" className="hover:underline font-bold" style={{ color: "#DDDB00", background: "#020366", padding: "2px 8px", borderRadius: "0 8px 0 8px" }}>
                  invest@gabonfibersa.ga
                </a>
              </div>
              <div><strong>Téléphone :</strong> 011 24 76 15</div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal d2">
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setTab("general")}
                className={`gf-shape-btn px-5 py-2.5 font-display font-bold text-[12px] uppercase tracking-wider transition-all border ${
                  tab === "general"
                    ? "text-white"
                    : "text-[#536B79] border-[#dde8ef] hover:border-[#0082C6]"
                }`}
                style={{
                  background: tab === "general" ? "#0082C6" : "#fff",
                  borderColor: tab === "general" ? "#0082C6" : undefined,
                }}
              >
                Contact général
              </button>
              <button
                onClick={() => setTab("investor")}
                className={`gf-shape-btn px-5 py-2.5 font-display font-bold text-[12px] uppercase tracking-wider transition-all border ${
                  tab === "investor"
                    ? "text-[#020366]"
                    : "text-[#536B79] border-[#dde8ef] hover:border-[#DDDB00]"
                }`}
                style={{
                  background: tab === "investor" ? "#DDDB00" : "#fff",
                  borderColor: tab === "investor" ? "#DDDB00" : undefined,
                }}
              >
                Investisseurs
              </button>
            </div>

            {tab === "general" ? <GeneralForm /> : <InvestorForm />}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase mb-2" style={{ color: "#536B79" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full gf-shape-btn px-4 py-3 bg-white border border-[#dde8ef] text-[14px] text-[#020366] focus:border-[#0082C6] focus:outline-none transition-colors";

function GeneralForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="gf-shape-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
      style={{ background: "#f0f7ff", border: "1px solid rgba(0,130,198,0.15)" }}
    >
      <Field label="Prénom"><input required className={inputCls} /></Field>
      <Field label="Nom"><input required className={inputCls} /></Field>
      <Field label="Société"><input className={inputCls} /></Field>
      <Field label="Email"><input type="email" required className={inputCls} /></Field>
      <Field label="Profil">
        <select className={inputCls}>
          <option>Opérateur / FAI</option>
          <option>Institutionnel</option>
          <option>Presse</option>
          <option>Autre</option>
        </select>
      </Field>
      <Field label="Objet"><input className={inputCls} /></Field>
      <div className="md:col-span-2">
        <Field label="Message"><textarea rows={5} required className={inputCls} /></Field>
      </div>
      <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4">
        {sent && <div className="font-mono text-[12px] uppercase tracking-wider" style={{ color: "#59BE98" }}>✓ Message bien reçu</div>}
        <button type="submit" className="btn-b ml-auto">Envoyer →</button>
      </div>
    </form>
  );
}

function InvestorForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="gf-shape-lg p-8"
      style={{ background: "#020366", border: "1px solid #DDDB00" }}
    >
      <h3 className="font-display font-bold text-xl uppercase text-white mb-2">
        Demande d'information investisseurs
      </h3>
      <p className="text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
        Votre demande sera traitée sous 48h. Un NDA vous sera envoyé avant tout partage de document. Email :{" "}
        <a href="mailto:invest@gabonfibersa.ga" className="underline" style={{ color: "#DDDB00" }}>
          invest@gabonfibersa.ga
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <DarkField label="Prénom"><input required className={darkInputCls} /></DarkField>
        <DarkField label="Nom"><input required className={darkInputCls} /></DarkField>
        <DarkField label="Société / Fonds"><input required className={darkInputCls} /></DarkField>
        <DarkField label="Email"><input type="email" required className={darkInputCls} /></DarkField>
        <DarkField label="Téléphone"><input className={darkInputCls} /></DarkField>
        <DarkField label="Type d'investisseur">
          <select className={darkInputCls}>
            <option>Fonds de Private Equity</option>
            <option>Banque d'affaires</option>
            <option>DFI / Multilatéral</option>
            <option>Opérateur télécom</option>
            <option>Institution publique</option>
            <option>Autre</option>
          </select>
        </DarkField>
        <div className="md:col-span-2">
          <DarkField label="Message"><textarea rows={5} required className={darkInputCls} /></DarkField>
        </div>
        <div className="md:col-span-2 flex items-center justify-between flex-wrap gap-4">
          {sent && <div className="font-mono text-[12px] uppercase tracking-wider" style={{ color: "#DDDB00" }}>✓ Demande bien reçue</div>}
          <button type="submit" className="btn-y ml-auto">Envoyer ma demande →</button>
        </div>
      </div>
    </form>
  );
}

const darkInputCls =
  "w-full gf-shape-btn px-4 py-3 text-[14px] text-white focus:border-[#DDDB00] focus:outline-none transition-colors";

function DarkField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase mb-2" style={{ color: "rgba(221,219,0,0.85)" }}>
        {label}
      </span>
      <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(39,170,225,0.25)", borderRadius: "0 14px 0 14px" }}>
        {children}
      </div>
    </label>
  );
}
