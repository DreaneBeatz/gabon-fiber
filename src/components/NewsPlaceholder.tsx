import { Logo } from "./Nav";

export function NewsPlaceholder({ category }: { category: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020366 0%, #0082C6 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(39,170,225,0.6), transparent 50%), radial-gradient(circle at 70% 70%, rgba(221,219,0,0.25), transparent 50%)",
        }}
      />
      <div className="relative flex flex-col items-center">
        <Logo className="w-16 h-16 mb-4" />
        <div className="font-display font-bold text-white text-[14px] tracking-[0.18em] uppercase">
          GABON FIBER SA
        </div>
        <div
          className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 gf-shape-badge"
          style={{ background: "#DDDB00", color: "#020366" }}
        >
          {category}
        </div>
      </div>
    </div>
  );
}
