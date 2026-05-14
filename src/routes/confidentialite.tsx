import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/confidentialite")({
  component: () => (
    <LegalPage
      eyebrow="Légal"
      title={<>Politique de <em>Confidentialité</em></>}
      image={IMG.heroGov}
      sections={[
        { t: "Données collectées", d: <p>Lors de l'utilisation du formulaire de contact : nom, prénom, société, email, téléphone, profil et message. Aucune donnée sensible n'est collectée.</p> },
        { t: "Finalité", d: <p>Les données sont utilisées exclusivement pour répondre à vos demandes commerciales, institutionnelles ou médiatiques. Aucune cession à des tiers n'est effectuée.</p> },
        { t: "Durée de conservation", d: <p>Les données de contact sont conservées 36 mois maximum après le dernier échange, puis supprimées ou anonymisées.</p> },
        { t: "Vos droits", d: <p>Vous disposez d'un droit d'accès, de rectification, d'opposition, d'effacement et de portabilité. Pour exercer ces droits : contact@gabon-fiber.ga.</p> },
        { t: "Cookies", d: <p>Le site utilise uniquement des cookies techniques nécessaires au fonctionnement. Aucun cookie publicitaire ou de profilage n'est déposé.</p> },
      ]}
    />
  ),
  head: () => ({ meta: [{ title: "Confidentialité — Gabon Fiber SA" }] }),
});
