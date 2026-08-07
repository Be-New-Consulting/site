import sharp from 'sharp'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f172a"/>
  <rect x="0" y="0" width="1200" height="4" fill="#38bdf8"/>

  <text x="80" y="200" font-family="Inter, system-ui, sans-serif" font-size="22"
        font-weight="500" fill="#38bdf8" letter-spacing="0.08em">FABIEN COSTES</text>

  <text x="80" y="270" font-family="Inter, system-ui, sans-serif" font-size="48"
        font-weight="700" fill="#f1f5f9">Qualité logicielle</text>
  <text x="80" y="330" font-family="Inter, system-ui, sans-serif" font-size="48"
        font-weight="700" fill="#f1f5f9">et IA appliquée</text>

  <text x="80" y="400" font-family="Inter, system-ui, sans-serif" font-size="20"
        fill="#94a3b8" letter-spacing="0.02em">Fiabiliser un produit existant, sécuriser ses démonstrations</text>
  <text x="80" y="430" font-family="Inter, system-ui, sans-serif" font-size="20"
        fill="#94a3b8" letter-spacing="0.02em">et accompagner sa montée en charge.</text>

  <rect x="80" y="480" width="48" height="3" rx="1.5" fill="#38bdf8"/>
  <text x="80" y="520" font-family="Inter, system-ui, sans-serif" font-size="16"
        font-weight="500" fill="#8293a7">Be New Consulting</text>
  <text x="80" y="545" font-family="Inter, system-ui, sans-serif" font-size="14"
        fill="#64748b">competences.benew-consulting.com</text>
</svg>`

const output = resolve(__dirname, '..', 'public', 'og-image.png')

await sharp(Buffer.from(svg))
  .png({ quality: 90 })
  .toFile(output)

console.log(`✓ Generated: ${output}`)
