import { execFileSync } from 'node:child_process'
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const projects = JSON.parse(await readFile(join(root, 'scripts/project-sites.json'), 'utf8'))
const temporary = await mkdtemp(join(tmpdir(), 'wanseo-projects-'))
const run = (command, args, cwd, env = {}) => execFileSync(command, args, {
  cwd, stdio: 'inherit', env: { ...process.env, ...env },
})

async function updateMetadata(directory, previousUrl, nextUrl) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await updateMetadata(path, previousUrl, nextUrl)
    else if (/\.(html|xml|txt|json)$/.test(entry.name)) {
      const content = await readFile(path, 'utf8')
      if (content.includes(previousUrl)) await writeFile(path, content.replaceAll(previousUrl, nextUrl))
    }
  }
}

try {
  for (const project of projects) {
    if (!/^[a-z0-9-]+$/.test(project.id) || !/^[a-f0-9]{40}$/.test(project.revision)) {
      throw new Error('Project path and pinned revision must be valid')
    }
    const source = join(temporary, project.id)
    const base = `/${project.id}/`
    console.log(`Building ${project.id} at ${base}`)
    run('git', ['init', source], root)
    run('git', ['fetch', '--depth=1', project.repository, project.revision], source)
    run('git', ['checkout', '--detach', 'FETCH_HEAD'], source)
    run('npm', ['ci', '--no-audit', '--no-fund'], source)
    run('npm', ['run', 'build', '--', '--base', base], source, project.publicEnv)
    const output = join(source, 'dist')
    await updateMetadata(output, project.previousUrl, `https://wanseojo.com${base}`)
    await cp(output, join(root, 'dist', project.id), { recursive: true })
  }
} finally {
  await rm(temporary, { recursive: true, force: true })
}
