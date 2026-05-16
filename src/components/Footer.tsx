import { Logo } from "./Nav";

const NAV = [
  ["Ambitions", "#ambitions"],
  ["Backbone", "#backbone"],
  ["Actualités", "#actualites"],
  ["Gouvernance", "#gouvernance"],
  ["Investissez", "#investisseurs"],
  ["Contact", "#contact"],
] as const;

const LEGAL = [
  ["Mentions légales", "/mentions-legales"],
  ["Confidentialité", "/confidentialite"],
  ["Accessibilité", "/accessibilite"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[#010234] border-t border-[#27AAE1]/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-5">
              <Logo className="h-14 w-auto bg-white/95 px-2 py-1 gf-shape-sm" />
            </div>
            <p className="s-body !text-[13px] !leading-[1.7] mb-6">
              Opérateur de gros neutre du backbone fibre optique national. Successeur de la DSP Axione, au service de la souveraineté numérique du Gabon.
            </p>
            <ul className="space-y-2 text-[13px] text-white/75">
              <li>Libreville, Gabon</li>
              <li>
                <a href="mailto:contact@gabonfibersa.ga" className="font-mono text-[12px] text-[#DDDB00] hover:underline">
                  contact@gabonfibersa.ga
                </a>
              </li>
              <li className="font-mono text-[12px] text-white/70">011 24 76 15</li>
            </ul>
          </div>

          <div>
            <div className="s-label !text-[#DDDB00]/80 mb-5">Navigation</div>
            <ul className="space-y-2.5">
              {NAV.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-headline font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors" style={{ fontFamily: "var(--font-headline)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="s-label !text-[#DDDB00]/80 mb-5">Légal</div>
            <ul className="space-y-2.5">
              {LEGAL.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="font-headline font-semibold text-[13px] uppercase tracking-[0.06em] text-white/75 hover:text-[#DDDB00] transition-colors" style={{ fontFamily: "var(--font-headline)" }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
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
