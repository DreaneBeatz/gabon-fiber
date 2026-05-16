import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoUrl from "@/assets/logo-gabon-fiber.png";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img src={logoUrl} alt="Gabon Fiber SA — Le carrefour des réseaux" className={className} />
    
  );
}

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/mission", label: "Mission" },
  { to: "/reseau", label: "Réseau" },
  { to: "/services", label: "Services" },
  { to: "/actualites", label: "Actualités" },
  { to: "/gouvernance", label: "Gouvernance" },
  { to: "/investisseurs", label: "Investisseurs" },
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
      className="fixed top-0 left-0 right-0 z-50 h-[76px] flex items-center justify-between px-6 md:px-14 transition-all"
      style={{
        background: scrolled ? "rgba(6,13,22,0.96)" : "rgba(6,13,22,0.88)",
        backdropFilter: "blur(22px)",
        borderBottom: "1px solid rgba(58,174,224,0.1)",
      }}
    >
      <Link to="/" className="flex items-center gap-3">
        <Logo />
        <div className="leading-tight">
          <div className="font-display font-extrabold text-[17px] tracking-[0.05em] text-white">
            GABON FIBER SA
          </div>
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-blue-light">
            Le carrefour des réseaux
          </div>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-7">
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="font-display font-semibold text-[13px] uppercase tracking-[0.08em] text-white/80 hover:text-blue-light transition-colors"
            activeProps={{ className: "font-display font-semibold text-[13px] uppercase tracking-[0.08em] !text-blue-light" }}
            activeOptions={{ exact: true }}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-p !py-2.5 !px-5 !text-[12px]">
          Contact
        </Link>
        <div className="flex items-center gap-1 ml-2 border-l border-white/10 pl-4">
          {(["FR", "EN"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`font-mono text-[11px] tracking-wider px-1.5 py-0.5 transition-colors ${
                lang === l ? "text-blue-light" : "text-white/40 hover:text-white"
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
        <div className="lg:hidden absolute top-[76px] left-0 right-0 bg-navy-deep border-b border-blue-light/10 px-6 py-6 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display font-semibold text-sm uppercase tracking-[0.08em] text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-p mt-2 self-start">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
