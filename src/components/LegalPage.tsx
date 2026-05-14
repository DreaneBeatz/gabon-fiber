import { PageHero, PageWrap } from "./PageBits";

export function LegalPage({
  eyebrow,
  title,
  image,
  sections,
}: {
  eyebrow: string;
  title: React.ReactNode;
  image: string;
  sections: { t: string; d: React.ReactNode }[];
}) {
  return (
    <PageWrap>
      <PageHero eyebrow={eyebrow} title={title} image={image} mini />
      <section className="bg-off-white text-slate-ink py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-14 space-y-12">
          {sections.map((s, i) => (
            <div key={s.t} className={`reveal d${(i % 4) + 1} border-t border-gray-line pt-8`}>
              <h2 className="font-display font-extrabold text-2xl uppercase text-slate-ink mb-4">{s.t}</h2>
              <div className="text-slate-light leading-[1.85] text-[15.5px] space-y-3">{s.d}</div>
            </div>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}
