# Dossier de compétences — Be New Consulting

Site public présentant le dossier de compétences de Fabien Costes (Be New Consulting).  
Positionné **QA / qualité logicielle + développement et IA appliquée**.

## Stack technique

- React 18 + TypeScript
- Vite 5
- React Router (BrowserRouter + pré-rendu statique)
- CSS avec variables de thème
- Vitest + React Testing Library (tests unitaires)
- Playwright (tests E2E)

## Commandes

```bash
# Installation
npm install

# Développement
npm run dev

# Build production (inclut le pré-rendu de /parcours)
npm run build

# Prévisualisation du build
npm run preview

# Tests unitaires
npm run test

# Tests E2E (nécessite un build préalable)
npm run build
npm run test:e2e

# Lint
npm run lint
```

## Structure

```
├── public/              # Assets statiques (logo)
├── src/
│   ├── components/      # Composants réutilisables (Nav, Footer, Layout, AgenticPipeline)
│   ├── data/            # Données éditoriales centralisées
│   ├── pages/           # Pages (Home, Parcours)
│   ├── styles/          # Variables CSS, global, composants
│   ├── __tests__/       # Tests unitaires
│   ├── main.tsx         # Point d'entrée
│   └── App.tsx          # Routeur
├── e2e/                 # Tests Playwright
├── scripts/             # Scripts de build (pré-rendu)
└── .github/workflows/   # CI/CD (deploy via SFTP sur YunoHost)
```

## Déploiement

Le push sur `main` déclenche automatiquement :
1. Installation des dépendances
2. Tests unitaires
3. Build production
4. Upload de `dist/` via SFTP sur YunoHost

## Routage statique

Le site est hébergé sur un serveur YunoHost sans fallback SPA.  
Le script `scripts/prerender.js` copie `dist/index.html` vers `dist/parcours/index.html` au build,
ce qui permet l'accès direct à `/parcours`.
