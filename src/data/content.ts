export const hero = {
  title: "Qualité logicielle et IA appliquée",
  tagline:
    "Je fiabilise les produits existants, sécurise leurs démonstrations et accompagne leur montée en charge.",
  description:
    "J\u2019aide les équipes à sécuriser leurs parcours critiques, automatiser les contrôles et exploiter l\u2019IA avec discernement pour livrer plus vite sans sacrifier la qualité.",
  ctas: {
    realisations: { label: "Voir les réalisations", href: "#realisations" },
    parcours: { label: "Parcours", href: "/parcours" },
    contact: { label: "Échanger", href: "#contact" },
  },
}

export const problems = {
  title: "Les défis que je relève",
  items: [
    {
      icon: "⚠️",
      title: "Démonstrations à sécuriser",
      description:
        "Les régressions non détectées peuvent compromettre une démonstration décisive. Sécuriser les parcours critiques protège la confiance des clients et investisseurs.",
    },
    {
      icon: "🔍",
      title: "Manque de couverture automatisée",
      description:
        "Les tests manuels ne suffisent plus à suivre le rythme des livraisons. Les zones non couvertes deviennent des sources de risque.",
    },
    {
      icon: "🗄️",
      title: "Données et migrations difficiles à contrôler",
      description:
        "Les migrations de données sont complexes et les anomalies impossibles à détecter manuellement sur des volumes conséquents.",
    },
    {
      icon: "🤖",
      title: "IA sans dispositif d\u2019évaluation",
      description:
        "L\u2019IA est utilisée sans mesure de qualité, sans validation humaine systématique. Les résultats sont imprévisibles et non reproductibles.",
    },
  ],
}

export const caseMigration = {
  badge: "Étude de cas",
  title: "Sécurisation de migrations à très grande échelle",
  context:
    "Sécurisation de la migration de six années de données provenant de quatre plateformes et de plusieurs technologies sources vers PostgreSQL.",
  scope: [
    "KPI produits",
    "KPI mots-clés",
    "Référentiel des offres",
    "Référentiel des produits",
  ],
  sources: ["SQL", "API", "MongoDB", "PostgreSQL (cible)", "Programme de contrôle en Python", "CI/CD", "Dashboard Azure"],
  volume: [
    { value: "~1 To", label: "de données contrôlées" },
    { value: "100+ Mds", label: "de lignes" },
    { value: "~1 Md", label: "de documents MongoDB" },
  ],
  approach: [
    "Contrôles déterministes et reproductibles",
    "Comptages et agrégats de KPI",
    "Rapprochements entre sources et cibles",
    "Stratégie de contrôle adaptée à la volumétrie",
  ],
  approachDetail:
    "Sur la plateforme principale, le rapatriement d\u2019un trimestre nécessitait environ quatre heures. La validation automatisée d\u2019une période migrée prenait environ trente minutes. Sur les plateformes moins volumineuses, l\u2019intégralité des éléments pouvait être contrôlée sans saturer la mémoire des pods.",
  results: [
    "Outil développé et testé en préproduction en 8 à 10 jours",
    "Au moins 4 anomalies critiques détectées dans le programme de migration",
    "Anomalies préexistantes identifiées dans les données sources",
    "Processus reproductible sur une volumétrie impossible à vérifier manuellement",
    "Résultats exploitables pour sécuriser les décisions de go/no-go",
  ],
  role: [
    "Conception de la stratégie de contrôle",
    "Développement de l\u2019outil Python de validation",
    "Définition des rapprochements et agrégats",
    "Analyse et restitution des anomalies détectées",
  ],
}

export const caseAgentic = {
  badge: "Expérimentation",
  title: "Usine agentique de tests de non-régression",
  objective:
    "Accélérer la création de tests de non-régression automatisés tout en conservant le pilotage et la validation du QA.",
  scope: "Tests E2E de trois pages de suivi : campagnes, annonces, produits et mots-clés.",
  techContext: [
    "Application C# et React",
    "Playwright avec C#",
    "Plusieurs modèles d\u2019IA sélectionnés selon les besoins",
    "Expérimentation réalisée par les développeurs de l\u2019équipe",
    "Agents intégrés au workflow par l\u2019intermédiaire du QA",
  ],
  pipeline: [
    { step: 1, label: "Revue documentaire", description: "Agent analysant la documentation fonctionnelle existante" },
    { step: 2, label: "Inspection en direct", description: "Agent explorant l\u2019application en conditions réelles" },
    { step: 3, label: "Consolidation du plan de test", description: "Synthèse des observations en scénarios structurés" },
    { step: 4, label: "Génération du code", description: "Agent produisant le code Playwright à partir du plan" },
    { step: 5, label: "Test de robustesse", description: "Agent éprouvant la solidité des tests générés" },
    { step: 6, label: "Évaluation", description: "Agent comparant le code produit au plan de test initial" },
    { step: 7, label: "Validation humaine", description: "Revue, arbitrage et validation finale par le QA", isHuman: true },
  ],
  keyMessage:
    "Les agents prennent en charge l\u2019analyse, la génération et la comparaison. Le QA conserve la responsabilité des risques, des arbitrages et de la validation.",
  result:
    "L\u2019expérimentation a permis d\u2019économiser plusieurs jours de développement sur le périmètre expérimenté.",
  evolution:
    "Stryker et les tests de mutation sont une piste d\u2019évolution envisagée pour renforcer la confiance dans les tests produits.",
  role: [
    "Conception de la chaîne d\u2019agents",
    "Intégration au workflow QA existant",
    "Définition des critères d\u2019évaluation",
    "Arbitrage et validation finale",
  ],
}

export const method = {
  title: "Les quatre premières semaines",
  subtitle: "Un exemple de démarrage concret, adaptable à votre contexte.",
  steps: [
    { number: 1, title: "Semaine 1 — Comprendre", description: "Cartographier le produit, les risques métier et les incidents récents" },
    { number: 2, title: "Semaine 2 — Sécuriser", description: "Stabiliser les parcours critiques et les démonstrations" },
    { number: 3, title: "Semaine 3 — Automatiser", description: "Déployer un premier filet de tests automatisés et l\u2019intégrer à la CI" },
    { number: 4, title: "Semaine 4 — Mesurer et transmettre", description: "Mesurer les résultats, prioriser la suite et transférer les pratiques à l\u2019équipe" },
  ],
}

export const profileSummary = {
  title: "Parcours",
  highlights: [
    { value: "14+", label: "ans en qualité logicielle" },
    { value: "4", label: "équipes pilotées en transverse" },
    { value: "2023", label: "indépendant" },
  ],
  skills: [
    "Stratégie de test",
    "Automatisation E2E & API",
    "Data quality",
    "CI/CD",
    "Développement",
    "IA appliquée",
  ],
  certifications: ["ISTQB Foundation", "ISTQB Agile", "ISTQB Test Manager", "TMap Test Engineer"],
  cta: { label: "Voir le parcours détaillé", href: "/parcours" },
}

export const contact = {
  title: "Échangeons",
  message:
    "Vous avez un produit en pleine croissance ? Échangeons sur les parcours à sécuriser en priorité.",
  linkedin: {
    label: "Me contacter sur LinkedIn",
    href: "https://www.linkedin.com/in/fabiencostes/",
  },
}

export const footer = {
  brand: "Be New Consulting",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fabiencostes/" },
    { label: "CV complet", href: "https://cv.fcostes.fr/" },
    { label: "Code source", href: "https://github.com/Be-New-Consulting/competences" },
  ],
}
