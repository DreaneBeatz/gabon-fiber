import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function PageWrap({ children }: { children: React.ReactNode }) {
  const ref = useReveal();
  return <div ref={ref}>{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  compact = false,
  mini = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: string;
  compact?: boolean;
  mini?: boolean;
}) {
  const heightClass = mini ? "min-h-[42vh] pt-[140px] pb-16" : compact ? "min-h-[58vh] pt-[160px] pb-20" : "min-h-[88vh] pt-[180px] pb-24";
  return (
    <section className={`relative ${heightClass} flex items-end overflow-hidden`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/85 to-ink-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-black/80 via-transparent to-transparent" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-14 w-full">
        <div className="max-w-3xl">
          <div className="s-label reveal mb-6">{eyebrow}</div>
          <h1 className="s-title reveal d1 text-[clamp(48px,8vw,120px)] text-white mb-6">{title}</h1>
          {subtitle && <p className="s-body reveal d2 max-w-xl !text-base !text-white/70">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
