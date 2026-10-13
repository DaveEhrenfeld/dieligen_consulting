import { build } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbs = (p) => path.resolve(__dirname, '..', p)

// 1. Build SSR bundle
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist-ssr',
    rollupOptions: { output: { format: 'esm' } },
  },
  logLevel: 'warn',
})

// 2. Import render function from SSR bundle
const { render } = await import(toAbs('dist-ssr/entry-server.js'))

// 3. Read client build template
const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8')

// 4. Render app to HTML string
const appHtml = render()

// 5. Inject into template and write
const html = template.replace('<!--app-html-->', appHtml)
fs.writeFileSync(toAbs('dist/index.html'), html)

console.log('Pre-render complete.')
