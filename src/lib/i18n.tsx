import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "FR" | "EN";
type Theme = "dark" | "light";

const DICT: Record<string, { FR: string; EN: string }> = {
  "nav.accueil": { FR: "Accueil", EN: "Home" },
  "nav.ambitions": { FR: "Ambitions", EN: "Ambitions" },
  "nav.backbone": { FR: "Backbone", EN: "Backbone" },
  "nav.actualites": { FR: "Actualités", EN: "News" },
  "nav.gouvernance": { FR: "Gouvernance", EN: "Governance" },
  "nav.investissez": { FR: "Investissez", EN: "Invest" },
  "nav.contact": { FR: "Contact", EN: "Contact" },
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
