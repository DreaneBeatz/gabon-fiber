import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gflogo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#27AAE1" />
          <stop offset="100%" stopColor="#0082C6" />
        </linearGradient>
      </defs>
      {/* Forme signature : arrondi haut-droit + bas-gauche */}
      <path
        d="M4 4 L32 4 Q36 4 36 8 L36 36 L8 36 Q4 36 4 32 Z"
        fill="none"
        stroke="url(#gflogo)"
        strokeWidth="1.8"
      />
      <path d="M14 14 h10 v3 h-7 v3 h6 v3 h-6 v6 h-3 z" fill="url(#gflogo)" />
      <path d="M26 14 h2.5 v16 h-2.5 z M22 22 h6 v2.5 h-6 z" fill="#DDDB00" />
    </svg>
  );
}

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#ambitions", label: "Ambitions" },
  { href: "#backbone", label: "Backbone" },
  { href: "#actualites", label: "Actualités" },
  { href: "#gouvernance", label: "Gouvernance" },
  { href: "#investisseurs", label: "Investissez" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"FR" | "EN">("FR");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-10 transition-all"
      style={{
        background: scrolled ? "rgba(2,3,102,0.96)" : "rgba(2,3,102,0.88)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(39,170,225,0.18)",
      }}
    >
      <Link to="/" hash="accueil" className="flex items-center gap-3">
        <Logo />
        <div className="leading-tight">
          <div className="font-display font-bold text-[16px] tracking-[0.04em] text-white">
            GABON FIBER SA
          </div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: "#DDDB00" }}>
            Connecter l'avenir
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-7">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-display font-semibold text-[12.5px] uppercase tracking-[0.07em] text-white/85 hover:text-[#DDDB00] transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-y !py-2.5 !px-5 !text-[12px]">
          Contact
        </a>
        <div className="flex items-center gap-1 ml-1 border-l border-white/15 pl-4">
          {(["FR", "EN"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-mono text-[11px] tracking-wider px-1.5 py-0.5 transition-colors ${
                lang === l ? "text-[#DDDB00]" : "text-white/40 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white p-2"
        aria-label="Menu"
      >
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-4 h-0.5 bg-white" />
      </button>

      {open && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 px-6 py-6 flex flex-col gap-4"
             style={{ background: "rgba(2,3,102,0.98)", borderBottom: "1px solid rgba(39,170,225,0.18)" }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display font-semibold text-sm uppercase tracking-[0.07em] text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-y mt-2 self-start">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
