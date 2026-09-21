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
    period: "Mai 2022 \u2013 Pr\u00e9sent",
    role: "Test Manager / Deployment Manager",
    context: "Groupe e-commerce fran\u00e7ais \u2014 Syst\u00e8me de produits sponsoris\u00e9s",
    highlights: [
      "Pilotage transverse de 4 \u00e9quipes sur la strat\u00e9gie de test et l\u2019automatisation",
      "Gestion des recettes transverses et de la qualit\u00e9 de livraison",
      "Mise en place de contr\u00f4les qualit\u00e9 sur les migrations de donn\u00e9es \u00e0 grande \u00e9chelle",
      "Exp\u00e9rimentation d\u2019une usine agentique pour la cr\u00e9ation de tests de non-r\u00e9gression",
    ],
  },
  {
    period: "Nov. 2021 \u2013 Mai 2022",
    role: "Test Manager",
    context: "Groupe e-commerce fran\u00e7ais \u2014 \u00c9quipe syst\u00e8me",
    highlights: [
      "Cadrage de p\u00e9rim\u00e8tres de test",
      "D\u00e9finition et ex\u00e9cution de la strat\u00e9gie de recette",
      "Reporting et \u00e9valuation de l\u2019effort d\u2019automatisation",
    ],
  },
  {
    period: "Oct. 2019 \u2013 Oct. 2021",
    role: "Test Leader / Scrum Master",
    context: "Groupe t\u00e9l\u00e9com fran\u00e7ais \u2014 DSI",
    highlights: [
      "Qualification et modernisation d\u2019un syst\u00e8me de gestion de la facturation",
      "Encadrement d\u2019une \u00e9quipe d\u2019automaticiens",
      "Pilotage agile (Scrum Master)",
    ],
  },
  {
    period: "Janv. 2019 \u2013 Sept. 2019",
    role: "Test Leader",
    context: "Groupe t\u00e9l\u00e9com fran\u00e7ais",
    highlights: [
      "Pilotage des activit\u00e9s de test pour des projets d\u2019\u00e9volution logicielle",
    ],
  },
  {
    period: "Oct. 2018 \u2013 Oct. 2019",
    role: "Test Leader",
    context: "Filiale mobile d\u2019un groupe bancaire fran\u00e7ais",
    highlights: [
      "Pilotage de la recette UX d\u2019une application bancaire mobile",
    ],
  },
  {
    period: "Avr. 2017 \u2013 Sept. 2018",
    role: "Test Manager",
    context: "Groupe de distribution postale fran\u00e7ais",
    highlights: [
      "Mise en place d\u2019un centre de services de test",
      "Management d\u2019\u00e9quipes de recette manuelle et automatis\u00e9e sur 10 applications",
    ],
  },
  {
    period: "Avr. 2016 \u2013 Mars 2017",
    role: "Chef de projet test",
    context: "Application de liquidation retraite \u2014 R\u00e9gimes ind\u00e9pendants",
    highlights: [
      "Pilotage et ex\u00e9cution de la recette sur les \u00e9volutions applicatives",
    ],
  },
  {
    period: "Juin 2013 \u2013 Mars 2016",
    role: "Consultant test senior",
    context: "Clients e-commerce fran\u00e7ais",
    highlights: [
      "Recette fonctionnelle des \u00e9volutions et non-r\u00e9gression",
      "Recette transverse lors du d\u00e9ploiement d\u2019un nouveau processus logistique",
    ],
  },
  {
    period: "Avr. 2012 \u2013 Mai 2013",
    role: "Consultant test",
    context: "Missions multiples",
    highlights: [
      "Conseil en test et administration syst\u00e8me",
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
    "Strat\u00e9gie de test",
    "Organisation des activit\u00e9s de test",
    "Conception de tests",
    "Automatisation (Selenium, Cypress, Playwright)",
    "Tests API (Postman, Newman)",
    "Non-r\u00e9gression et E2E",
    "Data quality",
  ],
  management: [
    "Pilotage transverse multi-\u00e9quipes",
    "Reporting et dashboarding",
    "Gestion d\u2019environnements de test",
    "M\u00e9thodologies Agile / Scaled / Waterfall",
    "Support \u00e9quipes distribu\u00e9es",
  ],
  tech: [
    "CI/CD",
    "Python",
    "TypeScript / React",
    "SQL / PostgreSQL / MongoDB",
    "Azure",
    "IA appliqu\u00e9e au test",
  ],
}

export const domains = [
  "E-commerce",
  "T\u00e9l\u00e9communications",
  "Banque / Finance",
  "Services publics",
  "Distribution",
]

export const contactCta = { label: "\u00c9changeons", href: "/#contact" }
