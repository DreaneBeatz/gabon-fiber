const TICKER_WORDS = [
  "Backbone National",
  "Accès Ouvert",
  "Souveraineté Numérique",
  "Wholesale Exclusif",
  "3 350 km",
  "Open Access",
  "PPP Concessif",
  "Le Carrefour des Réseaux",
];

export function Ticker() {
  const items = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="bg-[#0082C6] border-y border-[#27AAE1]/40 overflow-hidden py-4">
      <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-headline font-bold text-[18px] uppercase tracking-[0.12em] text-white" style={{ fontFamily: "var(--font-headline)" }}>
              {w}
            </span>
            <span className="text-[#DDDB00] text-xl">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
