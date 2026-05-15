const TICKER_WORDS = [
  "Connecter l'avenir",
  "Backbone National",
  "Open Access",
  "Souveraineté Numérique",
  "Wholesale Exclusif",
  "3 350 km",
  "PPP Concessif",
  "TRI 16,9%",
  "Le Carrefour des Réseaux",
];

export function Ticker() {
  const items = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="overflow-hidden py-4 border-y" style={{ background: "#0082C6", borderColor: "rgba(255,255,255,0.18)" }}>
      <div className="ticker-track flex items-center gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display font-bold text-[16px] uppercase tracking-[0.14em] text-white">
              {w}
            </span>
            <span className="text-xl" style={{ color: "#DDDB00" }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
