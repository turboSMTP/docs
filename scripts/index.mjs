#!/usr/bin/env bun
// RFC tooling for this repo. Run without args for the command list.
import { readFileSync, writeFileSync, readdirSync, renameSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const RFC_DIR = join(ROOT, 'rfcs');
const README = join(ROOT, 'README.md');
const STATUSES = ['proposed', 'accepted', 'rejected', 'superseded'];
const BEGIN = '<!-- BEGIN DECISION LOG -->';
const END = '<!-- END DECISION LOG -->';

// Flat frontmatter (key: value). ponytail: scalars only, no YAML parser needed.
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const out = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    out[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  return out;
}

function loadRfcs() {
  const errors = [];
  const rfcs = [];
  for (const file of readdirSync(RFC_DIR).sort()) {
    if (!/^\d{4}-.+\.md$/.test(file)) continue; // ignore draft-*, template, etc.
    if (file.startsWith('0000-')) continue;     // template
    const fm = parseFrontmatter(readFileSync(join(RFC_DIR, file), 'utf8'));
    if (!fm) { errors.push(`${file}: no frontmatter`); continue; }
    for (const k of ['id', 'title', 'status', 'date'])
      if (!fm[k]) errors.push(`${file}: missing frontmatter field "${k}"`);
    if (fm.status && !STATUSES.includes(fm.status))
      errors.push(`${file}: invalid status "${fm.status}" (allowed: ${STATUSES.join('/')})`);
    const fileNum = file.slice(0, 4);
    if (fm.id && fm.id.padStart(4, '0') !== fileNum)
      errors.push(`${file}: id "${fm.id}" does not match filename number ${fileNum}`);
    rfcs.push({ ...fm, file });
  }
  const seen = new Set();
  for (const r of rfcs) {
    if (seen.has(r.id)) errors.push(`duplicate id ${r.id}`);
    seen.add(r.id);
  }
  return { rfcs, errors };
}

function renderTable(rfcs) {
  if (!rfcs.length) return '_No RFCs yet._';
  const rows = rfcs
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(r => `| [${r.id}](rfcs/${r.file}) | ${r.title} | ${r.status} | ${r.date} |`);
  return ['| RFC | Title | Status | Date |', '|-----|-------|--------|------|', ...rows].join('\n');
}

function rebuild(readmeText, rfcs) {
  const block = `${BEGIN}\n${renderTable(rfcs)}\n${END}`;
  const re = new RegExp(`${BEGIN}[\\s\\S]*?${END}`);
  if (!re.test(readmeText)) throw new Error(`README is missing the ${BEGIN} / ${END} markers`);
  return readmeText.replace(re, block);
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// On main, create + switch to rfc/<slug> so the draft lands on a feature branch.
// Off main (or no git) we leave the current branch alone. ponytail: slug is [a-z0-9-], shell-safe.
function ensureBranch(slug) {
  let current;
  try { current = execSync('git rev-parse --abbrev-ref HEAD', { cwd: ROOT, encoding: 'utf8' }).trim(); }
  catch { return; } // not a git repo — just scaffold the file
  if (current !== 'main') return;
  const branch = `rfc/${slug}`;
  try {
    execSync(`git switch -c ${branch}`, { cwd: ROOT, stdio: 'pipe' });
    console.log(`switched to new branch ${branch}`);
  } catch {
    try { execSync(`git switch ${branch}`, { cwd: ROOT, stdio: 'pipe' }); console.log(`switched to existing branch ${branch}`); }
    catch { console.warn(`could not create branch ${branch}; staying on main`); }
  }
}

// Scaffolds rfcs/draft-<slug>.md from the template with title + today's date.
function newRfc(title) {
  if (!title) { console.error('Usage: index.mjs new "RFC title"'); process.exit(2); }
  const slug = slugify(title);
  if (!slug) { console.error('Title has no usable characters for a slug.'); process.exit(2); }
  ensureBranch(slug);
  const dest = join(RFC_DIR, `draft-${slug}.md`);
  if (existsSync(dest)) { console.error(`Already exists: rfcs/draft-${slug}.md`); process.exit(1); }
  const today = new Date().toISOString().slice(0, 10);
  const text = readFileSync(join(RFC_DIR, '0000-template.md'), 'utf8')
    .replace(/^title:[^\n]*/m, `title: ${title}`)
    .replace(/^date:[^\n]*/m, `date: ${today}`)
    .replace(/^# .*/m, `# ${title}`);
  writeFileSync(dest, text);
  console.log(`created rfcs/draft-${slug}.md`);
}

// Renames the single rfcs/draft-*.md to rfcs/<NNNN>-<slug>.md and stamps its id.
function assign(prNumber) {
  if (!/^\d+$/.test(prNumber || '')) { console.error('Usage: index.mjs assign <pr-number>'); process.exit(2); }
  const id = prNumber.padStart(4, '0');
  const drafts = readdirSync(RFC_DIR).filter(f => /^draft-.+\.md$/.test(f));
  if (drafts.length === 0) { console.log('No draft RFC to assign.'); return; }
  if (drafts.length > 1) { console.error('Multiple draft RFCs found, refusing: ' + drafts.join(', ')); process.exit(1); }
  const draft = drafts[0];
  const slug = draft.replace(/^draft-/, '').replace(/\.md$/, '');
  const src = join(RFC_DIR, draft);
  const dest = `${id}-${slug}.md`;
  writeFileSync(src, setId(readFileSync(src, 'utf8'), id));
  renameSync(src, join(RFC_DIR, dest));
  console.log(`assigned ${draft} -> ${dest}`);
}

const setId = (text, id) => text.replace(/^id:[^\n]*/m, `id: ${id}`);
const accept = (text) => text.replace(/^status:[ \t]*proposed[ \t]*$/m, 'status: accepted');

// On merge to main, every still-proposed RFC is decided → accepted.
// (A rejected idea is recorded by setting status: rejected before merge; left untouched.)
function acceptAll() {
  let changed = 0;
  for (const file of readdirSync(RFC_DIR)) {
    if (!/^\d{4}-.+\.md$/.test(file) || file.startsWith('0000-')) continue;
    const p = join(RFC_DIR, file);
    const text = readFileSync(p, 'utf8');
    const next = accept(text);
    if (next !== text) { writeFileSync(p, next); changed++; }
  }
  console.log(`accepted ${changed} RFC(s).`);
}

function selftest() {
  const fm = parseFrontmatter('---\nid: 0007\ntitle: "Hi: there"\nstatus: accepted\ndate: 2026-06-30\n---\nbody');
  console.assert(fm.id === '0007' && fm.title === 'Hi: there' && fm.status === 'accepted', 'frontmatter parse');
  const t = renderTable([{ id: '0007', title: 'X', status: 'accepted', date: '2026-06-30', file: '0007-x.md' }]);
  console.assert(t.includes('0007') && t.includes('rfcs/0007-x.md'), 'table render');
  const out = rebuild(`a\n${BEGIN}\nold\n${END}\nb`, []);
  console.assert(out.includes('No RFCs yet') && !out.includes('old'), 'rebuild replace');
  const idset = setId('---\nid: 0000\ntitle: X\n---\n', '0007');
  console.assert(idset.includes('id: 0007') && !idset.includes('id: 0000'), 'id assign');
  console.assert(accept('status: proposed\ndate: x') === 'status: accepted\ndate: x', 'accept flip');
  console.assert(accept('status: rejected') === 'status: rejected', 'accept leaves rejected');
  console.assert(slugify('Pick First OSS Targets!') === 'pick-first-oss-targets', 'slugify');
  console.log('selftest ok');
}

// Validate all RFCs, exit 1 on errors. Used by check + write.
function validate() {
  const { rfcs, errors } = loadRfcs();
  if (errors.length) {
    console.error('RFC validation failed:\n' + errors.map(e => '  - ' + e).join('\n'));
    process.exit(1);
  }
  return rfcs;
}

const HELP = `RFC tooling — usage: node scripts/index.mjs <command>

  new "Title"     scaffold rfcs/draft-<slug>.md (+ create rfc/<slug> branch if on main)
  assign <pr#>    rename the draft to <NNNN>-<slug>.md + set id (CI, on PR open)
  check           validate all RFC frontmatter
  write           regenerate the README decision log
  accept          flip every proposed RFC to accepted (CI, on merge)
  selftest        run the internal assertions`;

const [cmd, ...rest] = process.argv.slice(2);
switch (cmd) {
  case 'new': newRfc(rest.join(' ').trim()); break;
  case 'assign': assign(rest[0]); break;
  case 'accept': acceptAll(); break;
  case 'selftest': selftest(); break;
  case 'check': { console.log(`OK: ${validate().length} RFC(s) valid.`); break; }
  case 'write': {
    const current = readFileSync(README, 'utf8');
    const next = rebuild(current, validate());
    if (next !== current) { writeFileSync(README, next); console.log('Decision log updated.'); }
    else console.log('Decision log already up to date.');
    break;
  }
  default:
    console.error(HELP);
    process.exit(cmd ? 2 : 0);
}
