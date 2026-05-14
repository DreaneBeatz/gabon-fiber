const TICKER_WORDS = [
  "Backbone National",
  "Accès Ouvert",
  "Souveraineté",
  "Wholesale Exclusif",
  "3 350 km",
  "SLA 99,9%",
  "PPP Concessif",
  "TRI 16,9%",
  "ARCEP",
  "Le Carrefour des Réseaux",
];

export function Ticker() {
  const items = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="bg-blue-deep border-y border-blue-light/20 overflow-hidden py-4">
      <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display font-bold text-[18px] uppercase tracking-[0.12em] text-white">
              {w}
            </span>
            <span className="text-blue-sky text-xl">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
