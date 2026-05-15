import { Link } from "@tanstack/react-router";
import { Logo } from "./Nav";

const NAV = [
  ["Ambitions", "#ambitions"],
  ["Backbone", "#backbone"],
  ["Actualités", "#actualites"],
  ["Gouvernance", "#gouvernance"],
  ["Investissez", "#investisseurs"],
  ["Contact", "#contact"],
] as const;

export function Footer() {
  return (
    <footer className="border-t" style={{ background: "#020366", borderColor: "rgba(39,170,225,0.18)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Identité + contact */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo />
              <div className="font-display font-bold text-[15px] tracking-[0.04em] text-white">
                GABON FIBER SA
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-white/70 mb-6">
              Opérateur de gros neutre du backbone fibre optique national. Successeur de la DSP Axione, au service de la souveraineté numérique du Gabon.
            </p>
            <ul className="space-y-1.5 text-[13px] text-white/80">
              <li>Libreville, Gabon</li>
              <li>
                <a href="mailto:contact@gabonfibersa.ga" className="font-mono text-[12.5px] hover:text-[#DDDB00] transition-colors" style={{ color: "#27AAE1" }}>
                  contact@gabonfibersa.ga
                </a>
              </li>
              <li className="font-mono text-[12.5px] text-white/80">011 24 76 15</li>
            </ul>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <div className="s-label mb-5" style={{ color: "rgba(221,219,0,0.85)" }}>Navigation</div>
            <ul className="space-y-2.5">
              {NAV.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Légal */}
          <div>
            <div className="s-label mb-5" style={{ color: "rgba(221,219,0,0.85)" }}>Légal</div>
            <ul className="space-y-2.5">
              <li>
                <Link to="/mentions-legales" className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/accessibilite" className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors">
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <div className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
            © {new Date().getFullYear()} Gabon Fiber SA — Tous droits réservés
          </div>
          <div className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
            Le carrefour des réseaux
          </div>
        </div>
      </div>
    </footer>
  );
}
