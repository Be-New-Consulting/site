import { copyFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '..', 'dist')

// Copy index.html to parcours/index.html so direct access works on static hosts
mkdirSync(resolve(dist, 'parcours'), { recursive: true })
copyFileSync(resolve(dist, 'index.html'), resolve(dist, 'parcours', 'index.html'))

console.log('✓ Pre-rendered: dist/parcours/index.html')
