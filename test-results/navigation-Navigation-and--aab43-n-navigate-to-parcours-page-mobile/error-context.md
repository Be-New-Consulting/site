# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation and content >> can navigate to parcours page
- Location: e2e\navigation.spec.ts:10:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/parcours"]')
    - locator resolved to 3 elements. Proceeding with the first one: <a href="/parcours" class="nav-link ">Parcours</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p class="hero-name">Fabien Costes</p> from <main id="main-content">…</main> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <p class="hero-name">Fabien Costes</p> from <main id="main-content">…</main> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    13 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <nav class="nav page-container" aria-label="Navigation principale">…</nav> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <nav class="nav page-container" aria-label="Navigation principale">…</nav> intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="hero-name">Fabien Costes</p> from <main id="main-content">…</main> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <p class="hero-name">Fabien Costes</p> from <main id="main-content">…</main> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="nav page-container" aria-label="Navigation principale">…</nav> intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="hero-name">Fabien Costes</p> from <main id="main-content">…</main> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - navigation "Navigation principale" [ref=e4]:
      - link "Be New Consulting" [ref=e5] [cursor=pointer]:
        - /url: /
      - button "Ouvrir le menu" [ref=e7] [cursor=pointer]
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Réalisations" [ref=e11] [cursor=pointer]:
            - /url: /#realisations
        - listitem [ref=e12]:
          - link "Parcours" [ref=e13] [cursor=pointer]:
            - /url: /parcours
        - listitem [ref=e14]:
          - link "Contact" [ref=e15] [cursor=pointer]:
            - /url: /#contact
  - main [ref=e16]:
    - generic [ref=e18]:
      - paragraph [ref=e19]: Fabien Costes
      - heading "Qualité logicielle et IA appliquée" [level=1] [ref=e20]
      - blockquote [ref=e21]: Je transforme les produits fragiles en solutions fiables, démontrables et industrialisables.
      - paragraph [ref=e22]: J’aide les équipes à sécuriser leurs parcours critiques, automatiser les contrôles et exploiter l’IA avec discernement pour livrer plus vite sans sacrifier la qualité.
      - generic [ref=e23]:
        - link "Voir les réalisations" [ref=e24] [cursor=pointer]:
          - /url: "#realisations"
        - link "Parcours" [ref=e25] [cursor=pointer]:
          - /url: /parcours
    - generic [ref=e27]:
      - heading "Les problèmes que je résous" [level=2] [ref=e29]
      - generic [ref=e30]:
        - article [ref=e31]:
          - generic [ref=e32]: ⚠️
          - heading "Démonstrations instables" [level=3] [ref=e33]
          - paragraph [ref=e34]: Les démonstrations tombent au mauvais moment, les régressions surprennent en production. La confiance des clients et investisseurs s’érode.
        - article [ref=e35]:
          - generic [ref=e36]: 🔍
          - heading "Manque de couverture automatisée" [level=3] [ref=e37]
          - paragraph [ref=e38]: Les tests manuels ne suffisent plus à suivre le rythme des livraisons. Les zones non couvertes deviennent des sources de risque.
        - article [ref=e39]:
          - generic [ref=e40]: 🗄️
          - heading "Données et migrations difficiles à contrôler" [level=3] [ref=e41]
          - paragraph [ref=e42]: Les migrations de données sont complexes et les anomalies impossibles à détecter manuellement sur des volumes conséquents.
        - article [ref=e43]:
          - generic [ref=e44]: 🤖
          - heading "IA sans dispositif d’évaluation" [level=3] [ref=e45]
          - paragraph [ref=e46]: L’IA est utilisée sans mesure de qualité, sans validation humaine systématique. Les résultats sont imprévisibles et non reproductibles.
    - generic [ref=e48]:
      - generic [ref=e49]: Étude de cas
      - heading "Sécurisation de migrations à très grande échelle" [level=2] [ref=e50]
      - paragraph [ref=e51]: Sécurisation de la migration de six années de données provenant de quatre plateformes et de plusieurs technologies sources vers PostgreSQL.
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]: ~1 To
          - generic [ref=e55]: de données migrées
        - generic [ref=e56]:
          - generic [ref=e57]: 100+ Mds
          - generic [ref=e58]: de lignes
        - generic [ref=e59]:
          - generic [ref=e60]: ~1 Md
          - generic [ref=e61]: de documents MongoDB
      - generic [ref=e62]:
        - generic [ref=e63]:
          - heading "Périmètre migré" [level=3] [ref=e64]
          - list [ref=e65]:
            - listitem [ref=e66]: KPI produits
            - listitem [ref=e67]: KPI mots-clés
            - listitem [ref=e68]: Référentiel des offres
            - listitem [ref=e69]: Référentiel des produits
        - generic [ref=e70]:
          - heading "Sources et environnement" [level=3] [ref=e71]
          - list [ref=e72]:
            - listitem [ref=e73]: SQL
            - listitem [ref=e74]: API
            - listitem [ref=e75]: MongoDB
            - listitem [ref=e76]: PostgreSQL (cible)
            - listitem [ref=e77]: Programme de contrôle en Python
            - listitem [ref=e78]: CI/CD
            - listitem [ref=e79]: Dashboard Azure
      - generic [ref=e80]:
        - heading "Approche" [level=3] [ref=e81]
        - list [ref=e82]:
          - listitem [ref=e83]: Contrôles déterministes et reproductibles
          - listitem [ref=e84]: Comptages et agrégats de KPI
          - listitem [ref=e85]: Rapprochements entre sources et cibles
          - listitem [ref=e86]: Stratégie de contrôle adaptée à la volumétrie
        - paragraph [ref=e87]: Sur la plateforme principale, le rapatriement d’un trimestre nécessitait environ quatre heures. La validation automatisée d’une période migrée prenait environ trente minutes. Sur les plateformes moins volumineuses, l’intégralité des éléments pouvait être contrôlée sans saturer la mémoire des pods.
      - generic [ref=e88]:
        - heading "Résultats" [level=3] [ref=e89]
        - list [ref=e90]:
          - listitem [ref=e91]: ✓ Outil développé et testé en préproduction en 8 à 10 jours
          - listitem [ref=e92]: ✓ Au moins 4 anomalies critiques détectées dans le programme de migration
          - listitem [ref=e93]: ✓ Anomalies préexistantes identifiées dans les données sources
          - listitem [ref=e94]: ✓ Processus reproductible sur une volumétrie impossible à vérifier manuellement
          - listitem [ref=e95]: ✓ Résultats exploitables pour sécuriser les décisions de go/no-go
    - generic [ref=e97]:
      - generic [ref=e98]: Expérimentation
      - heading "Usine agentique de tests de non-régression" [level=2] [ref=e99]
      - paragraph [ref=e100]: Accélérer la création de tests de non-régression automatisés tout en conservant le pilotage et la validation du QA.
      - generic [ref=e101]:
        - generic [ref=e102]:
          - heading "Périmètre expérimenté" [level=3] [ref=e103]
          - paragraph [ref=e104]: "Tests E2E de trois pages de suivi : campagnes, annonces, produits et mots-clés."
        - generic [ref=e105]:
          - heading "Contexte technique" [level=3] [ref=e106]
          - list [ref=e107]:
            - listitem [ref=e108]: Application C# et React
            - listitem [ref=e109]: Playwright avec C#
            - listitem [ref=e110]: Plusieurs modèles d’IA sélectionnés selon les besoins
            - listitem [ref=e111]: Expérimentation réalisée par les développeurs de l’équipe
            - listitem [ref=e112]: Agents intégrés au workflow par l’intermédiaire du QA
      - generic [ref=e113]:
        - heading "Chaîne agentique" [level=3] [ref=e114]
        - list "Chaîne agentique" [ref=e115]:
          - listitem [ref=e116]:
            - generic [ref=e117]: "1"
            - generic [ref=e118]:
              - heading "Revue documentaire" [level=4] [ref=e119]
              - paragraph [ref=e120]: Agent analysant la documentation fonctionnelle existante
          - listitem [ref=e122]:
            - generic [ref=e123]: "2"
            - generic [ref=e124]:
              - heading "Inspection en direct" [level=4] [ref=e125]
              - paragraph [ref=e126]: Agent explorant l’application en conditions réelles
          - listitem [ref=e128]:
            - generic [ref=e129]: "3"
            - generic [ref=e130]:
              - heading "Consolidation du plan de test" [level=4] [ref=e131]
              - paragraph [ref=e132]: Synthèse des observations en scénarios structurés
          - listitem [ref=e134]:
            - generic [ref=e135]: "4"
            - generic [ref=e136]:
              - heading "Génération du code" [level=4] [ref=e137]
              - paragraph [ref=e138]: Agent produisant le code Playwright à partir du plan
          - listitem [ref=e140]:
            - generic [ref=e141]: "5"
            - generic [ref=e142]:
              - heading "Test de robustesse" [level=4] [ref=e143]
              - paragraph [ref=e144]: Agent éprouvant la solidité des tests générés
          - listitem [ref=e146]:
            - generic [ref=e147]: "6"
            - generic [ref=e148]:
              - heading "Évaluation" [level=4] [ref=e149]
              - paragraph [ref=e150]: Agent comparant le code produit au plan de test initial
          - listitem [ref=e152]:
            - generic [ref=e153]: 👤
            - generic [ref=e154]:
              - heading "Validation humaine" [level=4] [ref=e155]
              - paragraph [ref=e156]: Revue, arbitrage et validation finale par le QA
      - blockquote [ref=e157]: Les agents prennent en charge l’analyse, la génération et la comparaison. Le QA conserve la responsabilité des risques, des arbitrages et de la validation.
      - generic [ref=e158]:
        - paragraph [ref=e159]: L’expérimentation permet d’économiser plusieurs jours de développement sur la création des TNR.
        - paragraph [ref=e160]: Stryker et les tests de mutation sont une piste d’évolution envisagée pour renforcer la confiance dans les tests produits.
    - generic [ref=e162]:
      - heading "Méthode d’intervention" [level=2] [ref=e164]
      - paragraph [ref=e165]: Une approche pragmatique, adaptée au rythme d’une start-up.
      - generic [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]: "1"
          - generic [ref=e169]:
            - heading "Comprendre" [level=3] [ref=e170]
            - paragraph [ref=e171]: Cartographier le produit et les risques métier
        - generic [ref=e172]:
          - generic [ref=e173]: "2"
          - generic [ref=e174]:
            - heading "Sécuriser" [level=3] [ref=e175]
            - paragraph [ref=e176]: Stabiliser les parcours critiques et les démonstrations
        - generic [ref=e177]:
          - generic [ref=e178]: "3"
          - generic [ref=e179]:
            - heading "Automatiser" [level=3] [ref=e180]
            - paragraph [ref=e181]: Construire un premier filet de tests automatisés
        - generic [ref=e182]:
          - generic [ref=e183]: "4"
          - generic [ref=e184]:
            - heading "Intégrer" [level=3] [ref=e185]
            - paragraph [ref=e186]: Intégrer les contrôles dans la CI/CD
        - generic [ref=e187]:
          - generic [ref=e188]: "5"
          - generic [ref=e189]:
            - heading "Accélérer" [level=3] [ref=e190]
            - paragraph [ref=e191]: Introduire des accélérateurs IA mesurables et évaluables
        - generic [ref=e192]:
          - generic [ref=e193]: "6"
          - generic [ref=e194]:
            - heading "Transmettre" [level=3] [ref=e195]
            - paragraph [ref=e196]: Transférer les pratiques à l’équipe
    - generic [ref=e198]:
      - heading "Parcours" [level=2] [ref=e200]
      - generic [ref=e201]:
        - generic [ref=e202]:
          - generic [ref=e203]: 14+
          - generic [ref=e204]: ans en qualité logicielle
        - generic [ref=e205]:
          - generic [ref=e206]: "4"
          - generic [ref=e207]: équipes pilotées en transverse
        - generic [ref=e208]:
          - generic [ref=e209]: "2023"
          - generic [ref=e210]: indépendant
      - generic [ref=e211]:
        - generic [ref=e212]:
          - heading "Compétences clés" [level=3] [ref=e213]
          - generic [ref=e214]:
            - generic [ref=e215]: Stratégie de test
            - generic [ref=e216]: Automatisation E2E & API
            - generic [ref=e217]: Data quality
            - generic [ref=e218]: CI/CD
            - generic [ref=e219]: Développement
            - generic [ref=e220]: IA appliquée
        - generic [ref=e221]:
          - heading "Certifications" [level=3] [ref=e222]
          - list [ref=e223]:
            - listitem [ref=e224]: ISTQB Foundation
            - listitem [ref=e225]: ISTQB Agile
            - listitem [ref=e226]: ISTQB Test Manager
            - listitem [ref=e227]: TMap Test Engineer
      - link "Voir le parcours détaillé" [ref=e229] [cursor=pointer]:
        - /url: /parcours
    - generic [ref=e231]:
      - heading "Échangeons" [level=2] [ref=e233]
      - paragraph [ref=e234]: Vous avez un produit prometteur, mais encore fragile ? Échangeons sur les parcours à sécuriser en priorité.
      - link "Me contacter sur LinkedIn" [ref=e235] [cursor=pointer]:
        - /url: https://www.linkedin.com/in/fabiencostes/
  - contentinfo [ref=e236]:
    - generic [ref=e237]:
      - generic [ref=e238]: Be New Consulting
      - list [ref=e240]:
        - listitem [ref=e241]:
          - link "LinkedIn" [ref=e242] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/fabiencostes/
        - listitem [ref=e243]:
          - link "CV complet" [ref=e244] [cursor=pointer]:
            - /url: https://cv.fcostes.fr/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('Navigation and content', () => {
  4  |   test('home page loads with hero content', async ({ page }) => {
  5  |     await page.goto('/')
  6  |     await expect(page.locator('text=Fabien Costes')).toBeVisible()
  7  |     await expect(page.locator('text=Qualité logicielle et IA appliquée')).toBeVisible()
  8  |   })
  9  | 
  10 |   test('can navigate to parcours page', async ({ page }) => {
  11 |     await page.goto('/')
> 12 |     await page.click('a[href="/parcours"]')
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  13 |     await expect(page).toHaveURL('/parcours')
  14 |     await expect(page.locator('text=Parcours professionnel')).toBeVisible()
  15 |   })
  16 | 
  17 |   test('direct access to /parcours works', async ({ page }) => {
  18 |     await page.goto('/parcours')
  19 |     await expect(page.locator('text=Parcours professionnel')).toBeVisible()
  20 |     await expect(page.locator('text=ISTQB Foundation')).toBeVisible()
  21 |   })
  22 | 
  23 |   test('can navigate back from parcours to home', async ({ page }) => {
  24 |     await page.goto('/parcours')
  25 |     await page.click('a:has-text("Retour")')
  26 |     await expect(page.locator('text=Fabien Costes')).toBeVisible()
  27 |   })
  28 | 
  29 |   test('migration case study figures are visible', async ({ page }) => {
  30 |     await page.goto('/')
  31 |     await expect(page.locator('text=~1 To')).toBeVisible()
  32 |     await expect(page.locator('text=100+ Mds')).toBeVisible()
  33 |   })
  34 | 
  35 |   test('agentic case is marked as experimentation', async ({ page }) => {
  36 |     await page.goto('/')
  37 |     await expect(page.locator('.badge--experiment')).toBeVisible()
  38 |   })
  39 | 
  40 |   test('internal links work correctly', async ({ page }) => {
  41 |     await page.goto('/')
  42 |     const linkedInLink = page.locator('a[href="https://www.linkedin.com/in/fabiencostes/"]').first()
  43 |     await expect(linkedInLink).toBeVisible()
  44 | 
  45 |     const cvLink = page.locator('a[href="https://cv.fcostes.fr/"]').first()
  46 |     await expect(cvLink).toBeVisible()
  47 |   })
  48 | 
  49 |   test('no console errors on home', async ({ page }) => {
  50 |     const errors: string[] = []
  51 |     page.on('console', (msg) => {
  52 |       if (msg.type() === 'error') errors.push(msg.text())
  53 |     })
  54 |     await page.goto('/')
  55 |     await page.waitForLoadState('networkidle')
  56 |     expect(errors).toHaveLength(0)
  57 |   })
  58 | 
  59 |   test('no console errors on parcours', async ({ page }) => {
  60 |     const errors: string[] = []
  61 |     page.on('console', (msg) => {
  62 |       if (msg.type() === 'error') errors.push(msg.text())
  63 |     })
  64 |     await page.goto('/parcours')
  65 |     await page.waitForLoadState('networkidle')
  66 |     expect(errors).toHaveLength(0)
  67 |   })
  68 | })
  69 | 
  70 | test.describe('Mobile navigation', () => {
  71 |   test('burger menu opens navigation on mobile', async ({ page }) => {
  72 |     await page.setViewportSize({ width: 375, height: 667 })
  73 |     await page.goto('/')
  74 |     const toggle = page.locator('button[aria-label="Ouvrir le menu"]')
  75 |     await expect(toggle).toBeVisible()
  76 |     await toggle.click()
  77 |     const nav = page.locator('.nav-links--open')
  78 |     await expect(nav).toBeVisible()
  79 |   })
  80 | })
  81 | 
```