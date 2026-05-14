import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/mentions-legales")({
  component: () => (
    <LegalPage
      eyebrow="Légal"
      title={<>Mentions <em>Légales</em></>}
      image={IMG.heroGov}
      sections={[
        { t: "Éditeur", d: <p>Gabon Fiber SA — Société Anonyme. Siège social : Boulevard Triomphal, BP 10000, Libreville, Gabon. Directeur de la publication : Lauric Owono Engongah, Directeur Général.</p> },
        { t: "Contact", d: <p>contact@gabon-fiber.ga — Boulevard Triomphal, BP 10000, Libreville, Gabon.</p> },
        { t: "Hébergement", d: <p>Le présent site est hébergé sur infrastructure cloud sécurisée, conforme aux standards internationaux de disponibilité et de sécurité.</p> },
        { t: "Propriété intellectuelle", d: <p>L'ensemble du contenu (textes, images, vidéos, marques, logos) est la propriété exclusive de Gabon Fiber SA ou de ses partenaires. Toute reproduction sans autorisation préalable écrite est interdite.</p> },
        { t: "Responsabilité", d: <p>Gabon Fiber SA s'efforce d'assurer l'exactitude des informations diffusées sans pouvoir en garantir l'exhaustivité ou l'absence d'erreurs. La responsabilité de l'éditeur ne saurait être engagée pour tout dommage résultant de l'utilisation du site.</p> },
        { t: "Droit applicable", d: <p>Les présentes mentions sont régies par le droit gabonais. Tout litige relève de la compétence exclusive des juridictions gabonaises.</p> },
      ]}
    />
  ),
  head: () => ({ meta: [{ title: "Mentions légales — Gabon Fiber SA" }] }),
});
