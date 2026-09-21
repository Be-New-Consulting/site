export interface Experience {
  period: string
  role: string
  context: string
  highlights: string[]
}

export interface Certification {
  name: string
  org: string
}

export const experiences: Experience[] = [
  {
    period: "Mai 2022 – Présent",
    role: "Test Manager / Deployment Manager",
    context: "Groupe e-commerce français — Système de produits sponsorisés",
    highlights: [
      "Pilotage transverse de 4 équipes sur la stratégie de test et l'automatisation",
      "Gestion des recettes transverses et de la qualité de livraison",
      "Mise en place de contrôles qualité sur les migrations de données à grande échelle",
      "Expérimentation d'une usine agentique pour la création de tests de non-régression",
      "-50 % de time-to-market grâce à l'amélioration des tests de non-régression",
      "Passage d'un rythme de releases mensuelles à une ou deux par semaine",
      "150 tests API et 100 tests front automatisés, tests de mutation, usage industrialisé d'Xray",
      "Management d'une équipe QA dédiée, jusqu'à 4 ETP",
      "Accompagnement transverse d'une vingtaine de développeurs sur 4 pays (France, Maroc, Inde, Colombie)",
      "Déploiement de la marque blanche chez de nouveaux distributeurs partenaires",
    ],
  },
  {
    period: "Nov. 2021 – Mai 2022",
    role: "Test Manager",
    context: "Groupe e-commerce français — Équipe système",
    highlights: [
      "Cadrage de périmètres de test",
      "Définition et exécution de la stratégie de recette",
      "Reporting et évaluation de l'effort d'automatisation",
    ],
  },
  {
    period: "Oct. 2019 – Oct. 2021",
    role: "Test Leader / Scrum Master",
    context: "Groupe télécom français — DSI",
    highlights: [
      "Qualification et modernisation d'un système de gestion de la facturation",
      "Encadrement d'une équipe d'automaticiens",
      "Pilotage agile (Scrum Master)",
    ],
  },
  {
    period: "Janv. 2019 – Sept. 2019",
    role: "Test Leader",
    context: "Groupe télécom français",
    highlights: [
      "Pilotage des activités de test pour des projets d'évolution logicielle",
    ],
  },
  {
    period: "Oct. 2018 – Oct. 2019",
    role: "Test Leader",
    context: "Filiale mobile d'un groupe bancaire français",
    highlights: [
      "Pilotage de la recette UX d'une application bancaire mobile",
    ],
  },
  {
    period: "Avr. 2017 – Sept. 2018",
    role: "Test Manager",
    context: "Groupe de distribution postale français",
    highlights: [
      "Mise en place d'un centre de services de test",
      "Management d'équipes de recette manuelle et automatisée sur 10 applications",
    ],
  },
  {
    period: "Avr. 2016 – Mars 2017",
    role: "Chef de projet test",
    context: "Application de liquidation retraite — Régimes indépendants",
    highlights: [
      "Pilotage et exécution de la recette sur les évolutions applicatives",
    ],
  },
  {
    period: "Juin 2013 – Mars 2016",
    role: "Consultant test senior",
    context: "Clients e-commerce français",
    highlights: [
      "Recette fonctionnelle des évolutions et non-régression",
      "Recette transverse lors du déploiement d'un nouveau processus logistique",
    ],
  },
  {
    period: "Avr. 2012 – Mai 2013",
    role: "Consultant test",
    context: "Missions multiples",
    highlights: [
      "Conseil en test et administration système",
    ],
  },
]

export const certifications: Certification[] = [
  { name: "ISTQB Foundation", org: "ISTQB" },
  { name: "ISTQB Agile", org: "ISTQB" },
  { name: "ISTQB Test Manager", org: "ISTQB" },
  { name: "TMap Test Engineer", org: "Sogeti" },
]

export const skills = {
  testing: [
    "Stratégie de test",
    "Organisation des activités de test",
    "Conception de tests",
    "Automatisation (Selenium, Cypress, Playwright)",
    "Tests API (Postman, Newman)",
    "Non-régression et E2E",
    "Data quality",
  ],
  management: [
    "Pilotage transverse multi-équipes",
    "Reporting et dashboarding",
    "Gestion d'environnements de test",
    "Méthodologies Agile / Scaled / Waterfall",
    "Support équipes distribuées",
    "Conformité et auditabilité (RGPD, AI Act)",
  ],
  tech: [
    "CI/CD",
    "Python",
    "TypeScript / React",
    "SQL / PostgreSQL / MongoDB",
    "Azure",
    "IA appliquée au test",
  ],
}

export const domains = [
  "E-commerce",
  "Télécommunications",
  "Banque / Finance",
  "Services publics",
  "Distribution",
]

export const contactCta = { label: "Échangeons", href: "/#contact" }
