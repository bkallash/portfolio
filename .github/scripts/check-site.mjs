#!/usr/bin/env node
// Fails the build when the site references files that are not in the repo,
// omits metadata that search engines and social cards need, or uses
// root-absolute paths that break because Pages serves the site from
// /portfolio/ instead of the domain root.

import { readdir, readFile, writeFile, mkdtemp, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'

const ROOT = path.resolve(process.argv[2] ?? process.cwd())
const SITE_BASE = 'https://bkallash.github.io/portfolio/'
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules'])
const ASSET_EXT = /\.(?:webp|png|jpe?g|gif|svg|webm|mp4|css|m?js|woff2?|ttf|otf|eot|ico|json|txt|xml|pdf)$/i

const problems = []
const fail = (file, message) => problems.push(`${file}: ${message}`)

async function htmlFiles(dir) {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) found.push(...(await htmlFiles(path.join(dir, entry.name))))
    } else if (entry.name.endsWith('.html')) {
      found.push(path.join(dir, entry.name))
    }
  }
  return found
}

function stripScriptsAndStyles(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '')
}

function inlineScripts(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(([, attrs]) => !/\bsrc=/i.test(attrs) && !/ld\+json/i.test(attrs))
    .map(([, , body]) => body)
}

function localRefs(html) {
  const refs = new Set()
  for (const [, value] of stripScriptsAndStyles(html).matchAll(/(?:href|src|poster|data-src)\s*=\s*"([^"]+)"/gi)) {
    refs.add(value)
  }
  for (const [, value] of html.matchAll(/["']([^"'\n]{3,200})["']/g)) {
    if (ASSET_EXT.test(value)) refs.add(value)
  }
  return [...refs]
}

function toRepoPath(ref, fileDir) {
  const clean = ref.split('#')[0].split('?')[0].trim()
  if (!clean) return null
  if (clean.startsWith(SITE_BASE)) return path.relative(ROOT, path.join(ROOT, clean.slice(SITE_BASE.length)))
  if (/^(?:[a-z]+:)?\/\//i.test(clean) || /^(?:mailto|tel|data|javascript):/i.test(clean)) return null
  if (clean.startsWith('/')) return { rootAbsolute: clean }
  const resolved = path.resolve(fileDir, clean)
  const relative = path.relative(ROOT, resolved)
  if (relative.startsWith('..')) return { outside: ref }
  return relative
}

async function checkFile(file) {
  const name = path.relative(ROOT, file)
  const html = await readFile(file, 'utf8')
  const dir = path.dirname(file)

  if (!/^<!DOCTYPE html>/i.test(html.trimStart())) fail(name, 'missing <!DOCTYPE html>')
  if (!/<html\b[^>]*\slang="[^"]+"/i.test(html)) fail(name, 'missing lang attribute on <html>')
  if (!/<meta\b[^>]*charset="utf-8"/i.test(html)) fail(name, 'missing <meta charset="utf-8">')
  if (!/<meta\b[^>]*name="viewport"/i.test(html)) fail(name, 'missing viewport meta tag')
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(name, 'missing or empty <title>')
  if (!/<meta\b[^>]*name="description"[^>]*content="[^"]+"/i.test(html)) fail(name, 'missing meta description')
  if (!/<link\b[^>]*rel="canonical"[^>]*href="https?:\/\/[^"]+"/i.test(html)) fail(name, 'missing canonical link')
  for (const property of ['og:title', 'og:description', 'og:url', 'og:image']) {
    if (!new RegExp(`<meta\\b[^>]*property="${property}"[^>]*content="[^"]+"`, 'i').test(html)) {
      fail(name, `missing ${property} meta tag`)
    }
  }
  if (!/<link\b[^>]*rel="icon"[^>]*href="[^"]+"/i.test(html)) fail(name, 'missing favicon link')

  for (const ref of localRefs(html)) {
    const target = toRepoPath(ref, dir)
    if (target === null) continue
    if (target.rootAbsolute) {
      fail(name, `root-absolute path "${target.rootAbsolute}" breaks the /portfolio/ subpath deploy`)
      continue
    }
    if (target.outside) {
      fail(name, `reference "${target.outside}" points outside the repository`)
      continue
    }
    const candidates = target === '' ? ['index.html'] : [target, path.join(target, 'index.html')]
    if (!candidates.some((candidate) => existsSync(path.join(ROOT, candidate)))) {
      fail(name, `missing referenced file "${ref}"`)
    }
  }

  const scripts = inlineScripts(html)
  if (scripts.length > 0) {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'site-check-'))
    try {
      for (const [index, body] of scripts.entries()) {
        await writeFile(path.join(dir, `inline-${index}.js`), body)
      }
      for (const script of await readdir(dir)) {
        try {
          execFileSync(process.execPath, ['--check', path.join(dir, script)], { stdio: 'pipe' })
        } catch (error) {
          fail(name, `inline script has a syntax error: ${String(error.stderr || error).split('\n')[0]}`)
        }
      }
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  }
}

const files = await htmlFiles(ROOT)
if (files.length === 0) {
  console.error('No HTML files found.')
  process.exit(1)
}

for (const file of files) await checkFile(file)

if (!existsSync(path.join(ROOT, '.nojekyll'))) problems.push('.nojekyll: missing (GitHub Pages would run Jekyll over the site)')

if (problems.length > 0) {
  console.error(`Site check failed with ${problems.length} problem(s):`)
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}

console.log(`Site check passed: ${files.length} HTML file(s), all local references resolve.`)
