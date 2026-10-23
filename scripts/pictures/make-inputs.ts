// Prepares one input file per company for drawing capacity pictures: the stored facts, their
// fingerprint, the company's filings and the text of its last two results calls (from the DB).
// Usage: npx tsx scripts/pictures/make-inputs.ts <outDir> [company ...]
import fs from 'fs';
import path from 'path';
import { prisma } from '../../lib/prisma';
import { PROJECTS, projectsFor, capacityFor, pictureFingerprint } from '../../lib/projects';
import capacityStore from '../../lib/projects/capacity.json';
import { checkpointsFor } from '../../lib/checkpoints';
import filingsStore from '../../lib/filings/filings.json';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const QORDER: Record<string, number> = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };

(async () => {
    const out = process.argv[2];
    if (!out) throw new Error('outDir needed');
    fs.mkdirSync(out, { recursive: true });
    // Company names as arguments, or --names <file with a JSON list of names>.
    const ni = process.argv.indexOf('--names');
    const only: string[] = ni > 0 ? JSON.parse(fs.readFileSync(process.argv[ni + 1], 'utf8')) : process.argv.slice(3);
    const caps = (capacityStore as { capacity: { company: string; sector: string }[] }).capacity;
    const names = [...new Set([...caps.map(c => c.company), ...PROJECTS.map(p => p.company)])].filter(n => !only.length || only.includes(n));
    const filings = (Array.isArray(filingsStore) ? filingsStore : ((filingsStore as { filings?: unknown[] }).filings || [])) as { company: string; date: string; headline: string; summary?: string; url?: string }[];
    const index: { company: string; sector: string; slug: string; projects: number }[] = [];
    for (const name of names) try {
        const capacity = capacityFor(name);
        const projects = projectsFor(name);
        const cps = checkpointsFor(name);
        const ids = new Set(projects.map(p => p.id));
        const milestones = cps.filter(c => c.project && ids.has(c.project)).map(c => ({ id: c.id, project: c.project, text: c.text, due: c.due, status: c.status }));
        const co = await prisma.company.findFirst({ where: { name }, select: { id: true } });
        let calls = '';
        if (co) {
            const ts = await prisma.transcript.findMany({ where: { companyId: co.id, rawText: { not: null } }, select: { rawText: true, sourceEventDate: true, quarter: { select: { name: true, year: true, q: true } } } });
            const real = ts.filter(t => QORDER[t.quarter.q]).sort((a, b) => (b.quarter.year - a.quarter.year) || (QORDER[b.quarter.q] - QORDER[a.quarter.q])).slice(0, 2);
            calls = real.map(t => `===== ${t.quarter.name} results call${t.sourceEventDate ? ' (' + t.sourceEventDate.toISOString().slice(0, 10) + ')' : ''} =====\n${t.rawText}`).join('\n\n');
        }
        const s = slug(name);
        const coFilings = filings.filter(f => f.company === name).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 25);
        fs.writeFileSync(path.join(out, `${s}.json`), JSON.stringify({ company: name, fingerprint: pictureFingerprint(capacity, projects, cps), capacity, projects, milestones, filings: coFilings }, null, 1));
        fs.writeFileSync(path.join(out, `${s}.calls.txt`), calls || '(no call transcripts stored)');
        index.push({ company: name, sector: capacity?.sector || projects[0]?.sector || '', slug: s, projects: projects.length });
    } catch (e) { console.log('FAILED', name, String(e).slice(0, 200)); }
    if (!only.length) fs.writeFileSync(path.join(out, '_index.json'), JSON.stringify(index, null, 1));
    console.log('wrote', index.length);
    await prisma.$disconnect();
    process.exit(0);
})();
