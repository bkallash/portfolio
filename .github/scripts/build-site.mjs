#!/usr/bin/env node
// Stages the exact files that ship to GitHub Pages into site/, then checks
// the staged copy so a broken reference can never reach the live site.

import { cp, mkdir, rm, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const ROOT = process.cwd()
const OUT = path.join(ROOT, 'site')
const FILES = ['.nojekyll', 'apple-touch-icon.png', 'favicon.svg', 'og.png']
const DIRECTORIES = ['fonts', 'img', 'vendor']

const html = (await readdir(ROOT)).filter((name) => name.endsWith('.html'))

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

for (const file of [...FILES, ...html]) {
  if (!existsSync(path.join(ROOT, file))) throw new Error(`Missing site file: ${file}`)
  await cp(path.join(ROOT, file), path.join(OUT, file))
}

for (const directory of DIRECTORIES) {
  if (!existsSync(path.join(ROOT, directory))) throw new Error(`Missing site directory: ${directory}`)
  await cp(path.join(ROOT, directory), path.join(OUT, directory), { recursive: true })
}

const check = spawnSync(process.execPath, [path.join(ROOT, '.github/scripts/check-site.mjs'), OUT], {
  stdio: 'inherit',
})
if (check.status !== 0) process.exit(check.status ?? 1)

console.log(`Built ${html.length} page(s) into site/`)
