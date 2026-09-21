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
