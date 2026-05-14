import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, PageWrap } from "@/components/PageBits";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Gabon Fiber SA" },
      { name: "description", content: "Échangez avec nos équipes opérateurs, investisseurs, institutions ou médias. NOC 24/7." },
    ],
  }),
});

function ContactPage() {
  const [lang, setLang] = useState<"FR" | "EN">("FR");
  const [sent, setSent] = useState(false);

  return (
    <PageWrap>
      <PageHero
        eyebrow="Contact"
        title={<>Parlons De<br />Votre <em>Projet</em></>}
        image={IMG.heroContact}
        mini
      />

      <section className="bg-off-white text-slate-ink py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <div className="s-label !text-blue-mid mb-6">Coordonnées</div>
            <h2 className="s-title text-4xl !text-slate-ink mb-10">Nos <em className="!text-blue-mid">contacts</em></h2>
            <div className="space-y-6">
              {[
                ["Adresse", "Boulevard Triomphal\nBP 10000, Libreville, Gabon"],
                ["Direction Générale", "Lauric Owono Engongah\nDirecteur Général"],
                ["Email", "contact@gabon-fiber.ga"],
                ["NOC", "24/7 — 365 j/an\nSupervision proactive"],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-gray-line pt-5">
                  <div className="font-mono text-[10px] tracking-widest text-blue-mid uppercase mb-2">{t}</div>
                  <div className="font-display font-bold text-lg uppercase text-slate-ink whitespace-pre-line leading-snug">{d}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-blue-deep text-white p-6">
              <div className="s-label !text-blue-sky mb-3">Langues</div>
              <div className="font-display font-extrabold text-2xl uppercase">Français · English</div>
              <p className="text-white/70 text-sm mt-2">Communications institutionnelles et commerciales bilingues.</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12">
            <div className="flex gap-2 mb-8 border-b border-gray-line">
              {(["FR", "EN"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`font-display font-bold uppercase text-sm tracking-widest px-5 py-3 -mb-px border-b-2 transition-colors ${
                    lang === l ? "border-blue-mid text-blue-mid" : "border-transparent text-slate-light"
                  }`}
                >
                  {l === "FR" ? "Français" : "English"}
                </button>
              ))}
            </div>

            {sent ? (
              <div className="py-20 text-center">
                <div className="font-display font-extrabold text-3xl uppercase text-blue-deep mb-3">Merci !</div>
                <p className="text-slate-light">Votre message a bien été enregistré. Nous reviendrons vers vous sous 48h.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={lang === "FR" ? "Prénom" : "First name"} name="firstname" required />
                  <Field label={lang === "FR" ? "Nom" : "Last name"} name="lastname" required />
                </div>
                <Field label={lang === "FR" ? "Société / Organisation" : "Company / Organization"} name="company" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label={lang === "FR" ? "Téléphone" : "Phone"} name="phone" />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-slate-light uppercase block mb-2">
                    {lang === "FR" ? "Profil" : "Profile"}
                  </label>
                  <select required className="w-full border border-gray-line px-4 py-3 bg-white text-slate-ink font-body text-[15px] focus:outline-none focus:border-blue-mid">
                    <option value="">{lang === "FR" ? "— Sélectionner —" : "— Select —"}</option>
                    <option>{lang === "FR" ? "Opérateur / FAI" : "Operator / ISP"}</option>
                    <option>{lang === "FR" ? "Investisseur / Bailleur" : "Investor / Lender"}</option>
                    <option>{lang === "FR" ? "Institution publique" : "Public institution"}</option>
                    <option>{lang === "FR" ? "Partenaire sous-régional" : "Sub-regional partner"}</option>
                    <option>{lang === "FR" ? "Journaliste / Média" : "Journalist / Media"}</option>
                    <option>{lang === "FR" ? "Autre" : "Other"}</option>
                  </select>
                </div>
                <Field label={lang === "FR" ? "Objet" : "Subject"} name="subject" required />
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-slate-light uppercase block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-gray-line px-4 py-3 bg-white text-slate-ink font-body text-[15px] focus:outline-none focus:border-blue-mid resize-none"
                  />
                </div>
                <button type="submit" className="btn-p btn-on-light">
                  {lang === "FR" ? "Envoyer le message →" : "Send message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageWrap>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-widest text-slate-light uppercase block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-gray-line px-4 py-3 bg-white text-slate-ink font-body text-[15px] focus:outline-none focus:border-blue-mid"
      />
    </div>
  );
}
