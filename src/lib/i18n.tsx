import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "FR" | "EN";
type Theme = "dark" | "light";

const DICT: Record<string, { FR: string; EN: string }> = {
  // Nav
  "nav.accueil": { FR: "Accueil", EN: "Home" },
  "nav.ambitions": { FR: "Ambitions", EN: "Ambitions" },
  "nav.backbone": { FR: "Backbone", EN: "Backbone" },
  "nav.actualites": { FR: "Actualités", EN: "News" },
  "nav.gouvernance": { FR: "Gouvernance", EN: "Governance" },
  "nav.investissez": { FR: "Investissez", EN: "Invest" },
  "nav.contact": { FR: "Contact", EN: "Contact" },

  // Hero
  "hero.tag": { FR: "Connecter l'avenir", EN: "Connecting the future" },
  "hero.desc": {
    FR: "Gabon Fiber SA est le futur opérateur neutre de référence du backbone national gabonais en fibre optique — un projet stratégique né de la volonté de l'État de garantir sa souveraineté numérique et de doter le Gabon d'une infrastructure de connectivité digne des standards internationaux.",
    EN: "Gabon Fiber SA is the future neutral reference operator of Gabon's national fiber optic backbone — a strategic project born from the State's commitment to ensuring its digital sovereignty and providing Gabon with connectivity infrastructure that meets international standards.",
  },
  "hero.cta.invest": { FR: "Espace investisseurs →", EN: "Investor area →" },
  "hero.cta.backbone": { FR: "Découvrir le backbone", EN: "Discover the backbone" },
  "hero.stat.existing": { FR: "Backbone existant", EN: "Existing backbone" },
  "hero.stat.extensions": { FR: "Extensions prévues", EN: "Planned extensions" },
  "hero.stat.target": { FR: "Cible totale", EN: "Total target" },
  "hero.stat.wholesale": { FR: "Modèle wholesale neutre", EN: "Neutral wholesale model" },

  // Ambitions
  "amb.label": { FR: "Ambitions", EN: "Ambitions" },
  "amb.title1": { FR: "Notre", EN: "Our" },
  "amb.title2": { FR: "mission", EN: "mission" },
  "amb.quote": {
    FR: "« Opérer et développer le backbone national de la République Gabonaise en fibre optique, avec les principes d'opérateur de gros, de neutralité et de non-discrimination. »",
    EN: "“To operate and develop the Gabonese Republic's national fiber optic backbone, with the principles of wholesale operator, neutrality and non-discrimination.”",
  },
  "amb.p1.t": { FR: "Couverture Nationale", EN: "National Coverage" },
  "amb.p1.d": { FR: "Connecter toutes les provinces du Gabon d'ici 2029.", EN: "Connecting all provinces of Gabon by 2029." },
  "amb.p2.t": { FR: "Neutralité", EN: "Neutrality" },
  "amb.p2.d": { FR: "Opérateur de gros exclusif, aucune offre retail, accès équitable aux FAI.", EN: "Exclusive wholesale operator, no retail offering, fair access for ISPs." },
  "amb.p3.t": { FR: "Souveraineté Numérique", EN: "Digital Sovereignty" },
  "amb.p3.d": { FR: "Infrastructure stratégique, biens de retour à l'État.", EN: "Strategic infrastructure, assets returning to the State." },
  "amb.p4.t": { FR: "Financement Privé", EN: "Private Financing" },
  "amb.p4.d": { FR: "PPP concessif, modèle bankable, TRI 16,9% actionnaire.", EN: "Concessive PPP, bankable model, 16.9% shareholder IRR." },

  // Backbone
  "bb.label": { FR: "Backbone", EN: "Backbone" },
  "bb.title1": { FR: "Du backbone", EN: "From the backbone" },
  "bb.title2": { FR: "à l'extension nationale", EN: "to nationwide extension" },
  "bb.desc": {
    FR: "1 700 km opérationnels aujourd'hui. +1 650 km en construction sur 4 phases pour atteindre 3 350 km et désenclaver l'intérieur du pays.",
    EN: "1,700 km operational today. +1,650 km under construction over 4 phases to reach 3,350 km and open up the country's interior.",
  },
  "bb.counter": { FR: "Compteur backbone", EN: "Backbone counter" },
  "bb.ph0": { FR: "Réseau existant", EN: "Existing network" },
  "bb.ph1": { FR: "Phase 1 — Mouila / Tchibanga", EN: "Phase 1 — Mouila / Tchibanga" },
  "bb.ph2": { FR: "Phase 2 — Port-Gentil / Yombi", EN: "Phase 2 — Port-Gentil / Yombi" },
  "bb.ph3": { FR: "Phase 3 — Ndendé / Koulamoutou", EN: "Phase 3 — Ndendé / Koulamoutou" },
  "bb.ph4": { FR: "Phase 4 — Makokou / Kélé", EN: "Phase 4 — Makokou / Kélé" },

  // News
  "news.label": { FR: "Actualités", EN: "News" },
  "news.title1": { FR: "Dernières", EN: "Latest" },
  "news.title2": { FR: "nouvelles", EN: "news" },
  "news.read": { FR: "Lire →", EN: "Read →" },
  "news.soon": { FR: "À venir", EN: "Upcoming" },
  "news.c1": { FR: "Institutionnel", EN: "Institutional" },
  "news.c2": { FR: "Gouvernance", EN: "Governance" },
  "news.c3": { FR: "Infrastructure", EN: "Infrastructure" },
  "news.t1": { FR: "Création officielle de Gabon Fiber SA", EN: "Official creation of Gabon Fiber SA" },
  "news.d1": {
    FR: "Gabon Fiber SA est officiellement constituée en société anonyme de droit gabonais. La société est appelée à reprendre l'exploitation du backbone fibre national à l'expiration de la DSP Axione en novembre 2026.",
    EN: "Gabon Fiber SA is officially incorporated as a public limited company under Gabonese law. The company is set to take over operation of the national fiber backbone upon expiry of the Axione PSC in November 2026.",
  },
  "news.t2": { FR: "Premier Conseil d'Administration", EN: "First Board of Directors" },
  "news.d2": {
    FR: "Le premier Conseil d'Administration de Gabon Fiber SA s'est tenu à Libreville. Il a acté les premières orientations stratégiques de la société et validé les grandes lignes du plan de développement du backbone national.",
    EN: "Gabon Fiber SA's first Board of Directors was held in Libreville. It set out the company's initial strategic direction and approved the broad outlines of the national backbone development plan.",
  },
  "news.t3": { FR: "Visite du backbone par M. le Ministre", EN: "Minister's visit to the backbone" },
  "news.d3": {
    FR: "M. le Ministre en charge du Numérique a effectué une visite des installations du backbone fibre national, accompagné de l'équipe de direction de Gabon Fiber SA. Cette visite illustre l'engagement de l'État dans le développement de l'infrastructure numérique du pays.",
    EN: "The Minister in charge of Digital Affairs visited the national fiber backbone facilities, accompanied by Gabon Fiber SA's management team. The visit reflects the State's commitment to developing the country's digital infrastructure.",
  },

  // Governance
  "gov.label": { FR: "Gouvernance", EN: "Governance" },
  "gov.title1": { FR: "Structure du", EN: "Target" },
  "gov.title2": { FR: "capital cible", EN: "capital structure" },
  "gov.desc": {
    FR: "Structure indicative en cours de finalisation. Le slot Investisseurs financiers PE reste ouvert pour un ticket représentant 30 à 40% du capital.",
    EN: "Indicative structure being finalized. The PE financial investor slot remains open for a ticket representing 30 to 40% of capital.",
  },
  "gov.cta": { FR: "Investissez →", EN: "Invest →" },
  "gov.s1": { FR: "État élargi", EN: "Extended State" },
  "gov.s2": { FR: "Opérateurs télécoms", EN: "Telecom operators" },
  "gov.s3": { FR: "Investisseurs financiers PE", EN: "PE financial investors" },
  "gov.s4": { FR: "Partenaires industriels", EN: "Industrial partners" },
  "gov.slot": { FR: "(SLOT OUVERT)", EN: "(OPEN SLOT)" },
  "gov.n1": { FR: "≤ 35%", EN: "≤ 35%" },
  "gov.n2": { FR: "20–30%", EN: "20–30%" },
  "gov.n3": { FR: "30–40%", EN: "30–40%" },
  "gov.n4": { FR: "10% ou plus", EN: "10% or more" },

  // Investors
  "inv.label": { FR: "Investissez", EN: "Invest" },
  "inv.title1": { FR: "Investissez dans", EN: "Invest in" },
  "inv.subtitle": { FR: "Une opportunité unique d'infrastructure en Afrique centrale.", EN: "A unique infrastructure opportunity in Central Africa." },
  "inv.kpi1": { FR: "Investissement total", EN: "Total investment" },
  "inv.kpi2": { FR: "Fonds propres", EN: "Equity" },
  "inv.kpi3": { FR: "Dette institutionnelle", EN: "Institutional debt" },
  "inv.kpi4": { FR: "Dons Global Gateway UE", EN: "EU Global Gateway grants" },
  "inv.kpi5": { FR: "TRI Projet", EN: "Project IRR" },
  "inv.kpi6": { FR: "TRI Actionnaire", EN: "Shareholder IRR" },
  "inv.kpi6s": { FR: "sur 15–20 ans", EN: "over 15–20 years" },
  "inv.kpi7": { FR: "EBITDA moyen cible", EN: "Target avg. EBITDA" },
  "inv.kpi8": { FR: "Extensions à financer", EN: "Extensions to finance" },
  "inv.kpi8s": { FR: "en 4 ans", EN: "over 4 years" },
  "inv.profiles": { FR: "Profils", EN: "Investor" },
  "inv.profiles2": { FR: "investisseurs", EN: "profiles" },
  "inv.pr1.t": { FR: "Fonds de Private Equity", EN: "Private Equity Funds" },
  "inv.pr1.d": {
    FR: "Le slot investisseur financier est actuellement ouvert pour un ticket de 4 à 6 milliards FCFA (30 à 40% du capital). Gabon Fiber SA offre un TRI actionnaire de 16,9% sur 15 à 20 ans dans un secteur régulé à revenus récurrents.",
    EN: "The financial investor slot is currently open for a ticket of 4 to 6 billion FCFA (30 to 40% of capital). Gabon Fiber SA offers a 16.9% shareholder IRR over 15 to 20 years in a regulated sector with recurring revenue.",
  },
  "inv.pr1.c": { FR: "Demander le mémorandum →", EN: "Request the memorandum →" },
  "inv.pr2.t": { FR: "Banques d'Affaires", EN: "Investment Banks" },
  "inv.pr2.d": {
    FR: "Nous recherchons un conseil financier pour accompagner la structuration de la levée de fonds, la négociation avec les bailleurs institutionnels et la mise en place du tour de table.",
    EN: "We are looking for a financial advisor to support fundraising structuring, negotiations with institutional lenders, and the setup of the investor syndicate.",
  },
  "inv.contact": { FR: "Nous contacter →", EN: "Contact us →" },
  "inv.pr3.t": { FR: "Institutions Financières (DFI / Multilatéraux)", EN: "Financial Institutions (DFI / Multilateral)" },
  "inv.pr3.d": {
    FR: "AFD, BEI, BDEAC et institutions similaires peuvent intervenir sous forme de prêts concessionnels, garanties ou subventions. 60% du plan de financement est dédié à la dette institutionnelle (31 Mds FCFA).",
    EN: "AFD, EIB, BDEAC and similar institutions may intervene through concessional loans, guarantees or grants. 60% of the financing plan is dedicated to institutional debt (31 bn FCFA).",
  },
  "inv.pr4.t": { FR: "Opérateurs Télécoms", EN: "Telecom Operators" },
  "inv.pr4.d": {
    FR: "Une entrée au capital par apport en nature (fourreaux, équipements, droits de passage) est possible, sur le modèle de l'apport Gabon Telecom (20–25% du capital). Des engagements d'achat de capacités (take-or-pay) sont également envisageables.",
    EN: "Entry into capital via in-kind contribution (ducts, equipment, rights of way) is possible, on the model of the Gabon Telecom contribution (20–25% of capital). Capacity purchase commitments (take-or-pay) are also possible.",
  },
  "inv.pr5.t": { FR: "Institutions Publiques & Gouvernements", EN: "Public Institutions & Governments" },
  "inv.pr5.d": {
    FR: "Des partenariats publics-privés structurés, des fonds dédiés à la connectivité ou des mandats de financement peuvent être discutés avec les autorités mandataires concernées.",
    EN: "Structured public-private partnerships, dedicated connectivity funds or financing mandates can be discussed with the relevant mandating authorities.",
  },

  // NDA / Engagement
  "eng.label": { FR: "Processus d'engagement", EN: "Engagement process" },
  "eng.title1": { FR: "Comment accéder au", EN: "How to access the" },
  "eng.title2": { FR: "mémorandum d'information", EN: "information memorandum" },
  "eng.q": { FR: " ?", EN: "?" },
  "eng.s1": {
    FR: "Manifestez-vous en envoyant un email à",
    EN: "Express interest by sending an email to",
  },
  "eng.s1b": { FR: "en précisant votre profil.", EN: "specifying your profile." },
  "eng.s2": { FR: "Gabon Fiber vous adressera la documentation nécessaire à la mise en place du cadre de discussion.", EN: "Gabon Fiber will send you the documentation required to set up the framework for discussion." },
  "eng.s3": { FR: "Une fois le cadre de discussion posé, la documentation nécessaire vous sera transmise.", EN: "Once the framework is in place, the necessary documentation will be shared with you." },
  "eng.note": { FR: "Aucun document confidentiel n'est partagé avant la mise en place du cadre de discussion.", EN: "No confidential document is shared before the framework for discussion is in place." },
  "eng.form": { FR: "Formulaire investisseur", EN: "Investor form" },

  // Contact
  "ct.label": { FR: "Contact", EN: "Contact" },
  "ct.title1": { FR: "Échangeons avec", EN: "Get in touch with" },
  "ct.tab.gen": { FR: "Contact général", EN: "General contact" },
  "ct.tab.inv": { FR: "Investisseurs", EN: "Investors" },
  "ct.firstname": { FR: "Prénom", EN: "First name" },
  "ct.lastname": { FR: "Nom", EN: "Last name" },
  "ct.company": { FR: "Société", EN: "Company" },
  "ct.email": { FR: "Email", EN: "Email" },
  "ct.subject": { FR: "Objet", EN: "Subject" },
  "ct.message": { FR: "Message", EN: "Message" },
  "ct.send": { FR: "Envoyer →", EN: "Send →" },
  "ct.inv.notice": { FR: "Votre demande sera traitée sous 48h. Un NDA vous sera envoyé avant tout partage de document.", EN: "Your request will be handled within 48h. An NDA will be sent before any document is shared." },
  "ct.fund": { FR: "Société / Fonds", EN: "Company / Fund" },
  "ct.phone": { FR: "Téléphone", EN: "Phone" },
  "ct.type": { FR: "Type d'investisseur", EN: "Investor type" },
  "ct.type.pe": { FR: "Fonds Private Equity", EN: "Private Equity Fund" },
  "ct.type.bank": { FR: "Banque d'affaires", EN: "Investment Bank" },
  "ct.type.dfi": { FR: "DFI / Multilatéral", EN: "DFI / Multilateral" },
  "ct.type.telco": { FR: "Opérateur télécom", EN: "Telecom Operator" },
  "ct.type.pub": { FR: "Institution publique", EN: "Public Institution" },
  "ct.type.other": { FR: "Autre", EN: "Other" },
  "ct.send.inv": { FR: "Envoyer ma demande →", EN: "Send my request →" },
  "ct.sent": { FR: "✓ Message envoyé — nous vous répondrons sous 48h.", EN: "✓ Message sent — we will reply within 48h." },
  "ct.coord": { FR: "Coordonnées", EN: "Details" },
  "ct.general": { FR: "Contact général", EN: "General contact" },
  "ct.investors": { FR: "Investisseurs", EN: "Investors" },
  "ct.phoneL": { FR: "Téléphone", EN: "Phone" },

  // Footer
  "ft.desc": { FR: "Opérateur de gros neutre du backbone fibre optique national. Successeur de la DSP Axione, au service de la souveraineté numérique du Gabon.", EN: "Neutral wholesale operator of the national fiber optic backbone. Successor to the Axione PSC, in service of Gabon's digital sovereignty." },
  "ft.nav": { FR: "Navigation", EN: "Navigation" },
  "ft.legal": { FR: "Légal", EN: "Legal" },
  "ft.mentions": { FR: "Mentions légales", EN: "Legal notice" },
  "ft.confid": { FR: "Confidentialité", EN: "Privacy" },
  "ft.access": { FR: "Accessibilité", EN: "Accessibility" },
  "ft.rights": { FR: "Tous droits réservés", EN: "All rights reserved" },
  "ft.tag": { FR: "Connecter l'avenir", EN: "Connecting the future" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("FR");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const l = (localStorage.getItem("gf-lang") as Lang) || "FR";
    const th = (localStorage.getItem("gf-theme") as Theme) || "dark";
    setLangState(l);
    setThemeState(th);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.setAttribute("lang", lang.toLowerCase());
  }, [theme, lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("gf-lang", l);
  };
  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (typeof window !== "undefined") localStorage.setItem("gf-theme", t);
  };

  const t = (key: string) => DICT[key]?.[lang] ?? key;

  return <I18nCtx.Provider value={{ lang, setLang, theme, setTheme, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) return { lang: "FR" as Lang, setLang: () => {}, theme: "dark" as Theme, setTheme: () => {}, t: (k: string) => DICT[k]?.FR ?? k };
  return ctx;
}
