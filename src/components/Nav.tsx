import { useEffect, useState } from "react";
import logoUrl from "@/assets/logo-gabon-fiber.png";
import { useI18n } from "@/lib/i18n";

export function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return <img src={logoUrl} alt="Gabon Fiber" className={className} />;
}

const LINKS = [
  { href: "#accueil", key: "nav.accueil" },
  { href: "#ambitions", key: "nav.ambitions" },
  { href: "#backbone", key: "nav.backbone" },
  { href: "#actualites", key: "nav.actualites" },
  { href: "#gouvernance", key: "nav.gouvernance" },
  { href: "#investisseurs", key: "nav.investissez" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, theme, setTheme, t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[76px] flex items-center justify-between px-6 md:px-10 transition-all"
      style={{
        background: scrolled ? "rgba(2,3,102,0.96)" : "rgba(2,3,102,0.82)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(39,170,225,0.15)",
      }}
    >
      <a href="#accueil" className="flex items-center">
        <Logo className="h-12 w-auto bg-white/95 px-2 py-1 gf-shape-sm" />
      </a>

      <div className="hidden lg:flex items-center gap-6">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-headline font-semibold text-[13px] uppercase tracking-[0.08em] text-white/85 hover:text-[#DDDB00] transition-colors"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {t(l.key)}
          </a>
        ))}
        <a href="#contact" className="btn-y !py-2.5 !px-5 !text-[12px]">
          {t("nav.contact")}
        </a>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Mode clair" : "Mode sombre"}
          className="ml-2 w-9 h-9 flex items-center justify-center text-white/80 hover:text-[#DDDB00] border border-white/15 gf-shape-xs transition-colors"
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <div className="flex items-center gap-1 ml-2 border-l border-white/15 pl-4">
          {(["FR", "EN"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-mono text-[11px] tracking-wider px-1.5 py-0.5 transition-colors ${
                lang === l ? "text-[#DDDB00]" : "text-white/45 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-4 h-0.5 bg-white" />
      </button>

      {open && (
        <div className="lg:hidden absolute top-[76px] left-0 right-0 bg-[#020366] border-b border-[#27AAE1]/20 px-6 py-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-headline font-semibold text-sm uppercase tracking-[0.08em] text-white"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {t(l.key)}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-y mt-2 self-start">
            {t("nav.contact")}
          </a>
        </div>
      )}
    </nav>
  );
}
