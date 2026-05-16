import { Link } from "@tanstack/react-router";
import { Logo } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-blue-light/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-5">
              <Logo className="h-14 w-auto bg-white/95 p-2 rounded" />
            </div>
            <p className="s-body !text-[13px] !leading-[1.7]">
              Opérateur de gros neutre du backbone fibre optique national. Successeur de la DSP Axione, au service de la souveraineté numérique du Gabon.
            </p>
          </div>

          <div>
            <div className="s-label !text-blue-light/70 mb-5">Services</div>
            <ul className="space-y-2.5">
              {[
                ["Capacité & Transit", "/services"],
                ["Colocation / POPs", "/services"],
                ["Interconnexion", "/services"],
                ["Services Gérés NOC", "/services"],
                ["Qualité & SLA", "/services"],
                ["Partenariats", "/services"],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/70 hover:text-blue-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="s-label !text-blue-light/70 mb-5">Entreprise</div>
            <ul className="space-y-2.5">
              {[
                ["Mission", "/mission"],
                ["Réseau", "/reseau"],
                ["Gouvernance", "/gouvernance"],
                ["Investisseurs", "/investisseurs"],
                ["Actualités", "/actualites"],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/70 hover:text-blue-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="s-label !text-blue-light/70 mb-5">Contact & Légal</div>
            <ul className="space-y-2.5">
              <li className="font-body text-[13px] text-white/70 leading-relaxed">
                Boulevard Triomphal<br />BP 10000, Libreville, Gabon
              </li>
              <li>
                <a href="mailto:contact@gabon-fiber.ga" className="font-mono text-[12px] text-blue-light hover:text-blue-sky transition-colors">
                  contact@gabon-fiber.ga
                </a>
              </li>
              <li>
                <Link to="/contact" className="font-display font-semibold text-[13px] uppercase tracking-[0.06em] text-white/70 hover:text-blue-light transition-colors">
                  Formulaire contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <div className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
            © {new Date().getFullYear()} Gabon Fiber SA — Tous droits réservés
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/mentions-legales" className="font-mono text-[11px] tracking-wider text-white/40 uppercase hover:text-blue-light">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="font-mono text-[11px] tracking-wider text-white/40 uppercase hover:text-blue-light">
              Confidentialité
            </Link>
            <Link to="/accessibilite" className="font-mono text-[11px] tracking-wider text-white/40 uppercase hover:text-blue-light">
              Accessibilité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
