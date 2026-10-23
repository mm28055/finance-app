// Takes checked picture drafts (one <slug>.json per company), applies their source-backed
// corrections to lib/projects/capacity.json and projects.json, stamps each picture with the
// fingerprint of the corrected facts, and writes lib/projects/pictures.json. Logs every
// correction to research/pictures/corrections-<date>.md.
// Usage: npx tsx scripts/pictures/apply.ts <draftDir> [--dry]
import fs from 'fs';
import path from 'path';
import { pictureFingerprint } from '../../lib/projects/fingerprint';
import type { Capacity, Project, CapacityPictureData } from '../../lib/projects/types';
import type { Checkpoint } from '../../lib/checkpoints/types';

type Correction = { target: string; field: string; from: string; to: string; why: string; quote?: string; sourceRef?: string };
type Draft = CapacityPictureData & { skip?: boolean; why?: string; corrections?: Correction[]; draftNotes?: string; verify?: unknown };

const dir = process.argv[2];
const dry = process.argv.includes('--dry');
const today = new Date().toISOString().slice(0, 10);
const CAP = 'lib/projects/capacity.json', PRJ = 'lib/projects/projects.json', PIC = 'lib/projects/pictures.json', CPS = 'lib/checkpoints/checkpoints.json';
const capStore = JSON.parse(fs.readFileSync(CAP, 'utf8')) as { capacity: Capacity[] };
const prjStore = JSON.parse(fs.readFileSync(PRJ, 'utf8')) as { projects: Project[] };
const picStore = JSON.parse(fs.readFileSync(PIC, 'utf8')) as { pictures: CapacityPictureData[] };
const checkpoints = (JSON.parse(fs.readFileSync(CPS, 'utf8')) as { checkpoints: Checkpoint[] }).checkpoints;
// The stored files use Windows line endings and one-space indents; keep them byte-identical.
const crlf = (o: unknown) => (JSON.stringify(o, null, 1) + '\n').replace(/\n/g, '\r\n');
const lc = (s: string) => s.trim().toLowerCase();
const factsFor = (co: string) => ({
    cap: capStore.capacity.find(c => lc(c.company) === lc(co)),
    prj: prjStore.projects.filter(p => lc(p.company) === lc(co)),
    cps: checkpoints.filter(c => lc(c.company) === lc(co)),
});
const fp = (co: string) => { const f = factsFor(co); return pictureFingerprint(f.cap, f.prj, f.cps); };

const drafts: Draft[] = fs.readdirSync(dir).filter(f => f.endsWith('.json') && !f.startsWith('_')).map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
const log: string[] = [`# Capacity data corrections from the picture checks, ${today}`, ''];
const failed: string[] = [];
const out = new Map(picStore.pictures.map(p => [lc(p.company), p]));
let applied = 0, stale = 0, skipped = 0;

for (const d of drafts) {
    // A skip has no picture but may still carry corrections; those apply only where the stored text
    // still reads exactly as quoted ("from"), so a skip needs no fingerprint.
    if (d.skip) skipped++;
    else if (d.fingerprint !== fp(d.company)) { stale++; failed.push(`${d.company}: facts changed since the draft was made (redo it)`); continue; }
    const done: string[] = [];
    for (const c of d.corrections || []) {
        const project = prjStore.projects.find(p => p.id === c.target.replace(/^project:/, '') && lc(p.company) === lc(d.company));
        const obj = c.target === 'capacity' ? factsFor(d.company).cap as unknown as Record<string, unknown> | undefined
            : project as unknown as Record<string, unknown> | undefined;
        const cur = obj?.[c.field];
        // A project's revisions are a dated list; a correction rewrites the text of the one it quotes.
        if (obj && c.field === 'revisions' && Array.isArray(cur)) {
            const rev = (cur as { on: string; text: string }[]).find(r => r.text === c.from || (c.from && r.text.includes(c.from)));
            if (!rev) { failed.push(`${d.company}: ${c.target}.revisions has no entry reading "${c.from}"`); continue; }
            rev.text = rev.text === c.from ? c.to : rev.text.replace(c.from, c.to);
            obj.updatedOn = today;
            applied++;
            done.push(`- ${c.target}.revisions (${rev.on}): "${c.from}" → "${c.to}" — ${c.why}${c.quote ? ` (${c.sourceRef || 'source'}: "${c.quote}")` : ''}`);
            continue;
        }
        if (!obj || (cur !== undefined && typeof cur !== 'string')) { failed.push(`${d.company}: can't apply ${c.target}.${c.field}`); continue; }
        let next: string | undefined;
        if (cur === undefined || cur === c.from) next = c.to;
        else if (c.from && (cur as string).includes(c.from)) next = (cur as string).replace(c.from, c.to);
        if (next === undefined) { failed.push(`${d.company}: ${c.target}.${c.field} no longer reads "${c.from}"`); continue; }
        obj[c.field] = next;
        if (c.target !== 'capacity') obj.updatedOn = today;
        applied++;
        done.push(`- ${c.target}.${c.field}: "${c.from}" → "${c.to}" — ${c.why}${c.quote ? ` (${c.sourceRef || 'source'}: "${c.quote}")` : ''}`);
    }
    if (done.length) log.push(`## ${d.company}`, ...done, '');
    if (d.skip) { out.delete(lc(d.company)); continue; }
    const { corrections: _c, draftNotes: _n, verify: _v, skip: _s, why: _w, ...pic } = d;
    out.set(lc(d.company), { ...pic, fingerprint: fp(d.company) });
}

const pictures = [...out.values()].sort((a, b) => a.company.localeCompare(b.company));
console.log(`${pictures.length} pictures, ${skipped} skipped, ${applied} corrections applied, ${stale} stale`);
failed.forEach(f => console.log('  ! ' + f));
if (!dry) {
    fs.writeFileSync(CAP, crlf(capStore));
    fs.writeFileSync(PRJ, crlf(prjStore));
    fs.writeFileSync(PIC, JSON.stringify({ pictures }, null, 1) + '\n');
    fs.mkdirSync('research/pictures', { recursive: true });
    fs.writeFileSync(`research/pictures/corrections-${today}.md`, log.join('\n') + (failed.length ? `\n## Not applied\n${failed.map(f => '- ' + f).join('\n')}\n` : ''));
}
