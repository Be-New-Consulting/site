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
  title: "Trois façons de travailler ensemble",
  subtitle:
    "Trois interventions à périmètre défini, qui s’enchaînent ou se prennent séparément. J’interviens sur des engagements cadrés, en parallèle ou en relais de vos équipes.",
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
  ],
}
