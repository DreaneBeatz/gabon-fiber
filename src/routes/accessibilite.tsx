import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/accessibilite")({
  component: () => (
    <LegalPage
      eyebrow="Légal"
      title={<>Déclaration d'<em>Accessibilité</em></>}
      image={IMG.heroGov}
      sections={[
        { t: "Engagement", d: <p>Gabon Fiber SA s'engage à rendre son site internet accessible conformément aux référentiels internationaux WCAG 2.1 niveau AA.</p> },
        { t: "État de conformité", d: <p>Le site est partiellement conforme au référentiel WCAG 2.1 AA. Un audit de conformité complet est en cours.</p> },
        { t: "Contenus non accessibles", d: <p>Certains contenus interactifs (cartes SVG, animations) peuvent présenter des limitations d'accessibilité. Des alternatives textuelles sont fournies dans la mesure du possible.</p> },
        { t: "Contact", d: <p>Pour signaler un défaut d'accessibilité ou demander une version alternative d'un contenu : contact@gabon-fiber.ga.</p> },
      ]}
    />
  ),
  head: () => ({ meta: [{ title: "Accessibilité — Gabon Fiber SA" }] }),
});
