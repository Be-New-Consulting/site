export interface Offer {
  step: string
  title: string
  problem: string
  duration: string
  deliverables: string[]
  proof: string
  cta?: { label: string; href: string }
}

export const offers: {
  title: string
  subtitle: string
  items: Offer[]
} = {
  title: "Quatre façons de travailler ensemble",
  subtitle:
    "Trois interventions à périmètre défini, qui s’enchaînent ou se prennent séparément, et un suivi dans la durée pour les assistants IA. J’interviens sur des engagements cadrés, en parallèle ou en relais de vos équipes.",
  items: [
    {
      step: "Comprendre",
      title: "Diagnostic qualité",
      problem:
        "Ça casse de temps en temps, et on ne sait pas où intervenir en priorité.",
      duration: "2 à 4 semaines",
      deliverables: [
        "Cartographie des parcours critiques et des risques métier",
        "Analyse des incidents récents et de ce qu’ils révèlent",
        "Plan d’action priorisé et chiffré",
      ],
      proof:
        "La première semaine de la méthode décrite plus bas, formalisée en intervention autonome. Quatorze ans de qualité logicielle et le pilotage transverse de quatre équipes.",
      cta: { label: "Démarrer par un diagnostic", href: "/#contact" },
    },
    {
      step: "Sécuriser",
      title: "Premier filet de tests",
      problem:
        "Les tests manuels ne suivent plus le rythme des livraisons, et une régression peut ruiner une démonstration décisive.",
      duration: "1 à 3 mois",
      deliverables: [
        "Parcours critiques stabilisés en priorité",
        "Couverture end-to-end automatisée",
        "Intégration à la chaîne d’intégration continue",
        "Transfert des pratiques à l’équipe",
      ],
      proof:
        "Playwright, Cypress, Postman et Newman. Cent cinquante tests d’API et cent tests d’interface industrialisés sur une plateforme en production, avec un passage de livraisons mensuelles à une ou deux par semaine.",
    },
    {
      step: "Accélérer",
      title: "Chaîne agentique de tests",
      problem:
        "Écrire et maintenir les tests de non-régression prend plus de temps que l’équipe n’en a — et l’IA seule produit du code que personne ne sait juger.",
      duration: "Expérimentation cadrée",
      deliverables: [
        "Chaîne d’agents, de la revue documentaire à l’évaluation du code produit",
        "Intégration au workflow de test existant",
        "Critères d’évaluation explicites et mesurables",
        "Validation humaine conservée sur les arbitrages",
      ],
      proof:
        "L’expérimentation détaillée plus bas, menée en conditions réelles : plusieurs jours de développement économisés sur le périmètre traité, sans céder la responsabilité des risques à un agent.",
    },
    {
      step: "Suivre",
      title: "Suivi qualité d’un assistant IA",
      problem:
        "Votre assistant IA change à chaque livraison et à chaque changement de modèle, et personne ne sait dire si ses réponses restent justes.",
      duration: "Suivi mensuel, renforts à la demande",
      deliverables: [
        "Chaque livraison vérifiée en préproduction, avec un jeu de questions de référence et une checklist du parcours utilisateur",
        "Des tests exploratoires réguliers, pour trouver ce à quoi personne n’a pensé",
        "Un référentiel de test qui s’enrichit de vos anomalies et des questions du terrain",
        "Un rapport qualité mensuel, et un bilan semestriel à partager avec vos clients",
        "Des renforts avant une échéance (nouveau client, version majeure, changement de modèle), conclus par un avis de mise en ligne",
      ],
      proof:
        "La preuve de méthode détaillée plus bas : un assistant sourcé évalué sur des réponses de référence, où un seul changement de composant modifie un tiers des réponses sans faire bouger la moyenne. Les réponses de référence sont validées par vos experts métier, et une anomalie vous alerte sans bloquer votre livraison : vous gardez la décision de livrer.",
    },
  ],
}
