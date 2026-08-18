import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, relative } from 'node:path'
import sharp from 'sharp'

const root = join(process.cwd(), 'public')
const files = []
const manifest = []

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full)
      continue
    }
    if (/\.(jpe?g|png)$/i.test(entry.name) && !/logo/i.test(entry.name)) files.push(full)
  }
}

walk(root)

for (const file of files) {
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp')
  mkdirSync(dirname(out), { recursive: true })
  const image = sharp(file).rotate()
  const meta = await image.metadata()
  await image
    .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(out)
  const outStat = statSync(out)
  const outMeta = await sharp(out).metadata()
  manifest.push({
    from: relative(root, file).replace(/\\/g, '/'),
    to: relative(root, out).replace(/\\/g, '/'),
    in: `${meta.width}x${meta.height}`,
    out: `${outMeta.width}x${outMeta.height}`,
    kb: Math.round(outStat.size / 1024),
  })
}

writeFileSync(join(process.cwd(), 'scripts', 'image-manifest.json'), JSON.stringify(manifest, null, 2))
console.table(manifest)
console.log('converted', manifest.length)
