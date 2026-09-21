import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '..', 'dist')

const base = 'https://competences.benew-consulting.com'

const pages = [
  {
    path: 'parcours',
    title: 'Parcours professionnel — Fabien Costes | Be New Consulting',
    description: 'Plus de 14 ans en qualité logicielle — de consultant test à pilote transverse, aujourd\u2019hui indépendant. Parcours, compétences et certifications.',
  },
  {
    path: 'mentions-legales',
    title: 'Mentions légales — Be New Consulting',
    description: 'Mentions légales du site Be New Consulting : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.',
  },
]

const html = readFileSync(resolve(dist, 'index.html'), 'utf-8')

for (const page of pages) {
  let output = html
  output = output.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  output = output.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${page.description}"`
  )
  output = output.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${page.title}"`
  )
  output = output.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${page.description}"`
  )
  output = output.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${base}/${page.path}/"`
  )
  output = output.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${base}/${page.path}/"`
  )

  mkdirSync(resolve(dist, page.path), { recursive: true })
  writeFileSync(resolve(dist, page.path, 'index.html'), output)
  console.log(`✓ Pre-rendered: dist/${page.path}/index.html`)
}

// sitemap.xml et robots.txt sont generes depuis la meme source que le
// pre-rendu : ajouter une route ou changer de domaine ne se fait qu'ici.
const urls = ['', ...pages.map((page) => `${page.path}/`)]

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${base}/${url}</loc></url>`),
  '</urlset>',
  '',
].join('\n')

writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
console.log(`✓ Generated: dist/sitemap.xml (${urls.length} URLs)`)

const robots = ['User-agent: *', 'Allow: /', '', `Sitemap: ${base}/sitemap.xml`, ''].join('\n')

writeFileSync(resolve(dist, 'robots.txt'), robots)
console.log('✓ Generated: dist/robots.txt')
