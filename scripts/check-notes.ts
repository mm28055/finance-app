/**
 * Checks sector notes before publishing:
 *  - every verdict names a company in that sector, and every company in the sector has a verdict;
 *  - every company is named in the closing;
 *  - bold markers are balanced;
 *  - every live figure placeholder ({pe:Company|x} etc.) names a company in that note's
 *    valuation inputs, with a known field.
 * Company list: the database when DATABASE_URL is set, else lib/corporate-actions/companies.json
 * (the snapshot the 4pm job commits), so it also works where there is no database access.
 *
 *   npx tsx scripts/check-notes.ts            (all notes)
 *   npx tsx scripts/check-notes.ts Pharma     (one sector, by its sector name)
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { allSectorOverviews, type SectorOverview } from '../lib/sector-overviews';

const TOKEN = /\{(\w+):([^|{}]+)(?:\|([^{}]*))?\}/g;
const FIELDS = new Set(['pe', 'ev', 'need', 'mine', 'mcap', 'label', 'Label', 'count', 'Count']);
const COUNT_ARGS = new Set(['fits', 'full', 'stretched', 'live']);
const STOP = new Set(['india', 'industries', 'limited', 'ltd', 'the', 'and', 'of', 'engineering', 'engineers', 'systems', 'technologies', 'tech', 'electronics']);

function strings(o: any, out: string[] = []): string[] {
    if (typeof o === 'string') out.push(o);
    else if (Array.isArray(o)) o.forEach(x => strings(x, out));
    else if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) if (k !== 'buckets' && k !== 'valuation') strings(v, out);
    return out;
}
const keys = (n: string) => {
    const words = n.replace(/[().&]/g, ' ').split(/\s+/).filter(Boolean);
    const first = words.find(w => !STOP.has(w.toLowerCase())) || words[0];
    return [n, n.replace(/\s*\(.*\)$/, ''), first, words.slice(0, 2).join(' ')];
};

async function companiesBySector(): Promise<Map<string, string[]>> {
    let list: { name: string; sector: string }[];
    if (process.env.DATABASE_URL) {
        const { prisma } = await import('../lib/prisma');
        list = await prisma.company.findMany({ where: { isVisible: true }, select: { name: true, sector: true } });
        await prisma.$disconnect();
    } else {
        list = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'lib', 'corporate-actions', 'companies.json'), 'utf8')).companies;
    }
    const m = new Map<string, string[]>();
    for (const c of list) m.set(c.sector.toLowerCase(), [...(m.get(c.sector.toLowerCase()) || []), c.name.trim()]);
    return m;
}

(async () => {
    const only = process.argv[2]?.toLowerCase();
    const bySector = await companiesBySector();
    let problems = 0;
    for (const ov of allSectorOverviews() as SectorOverview[]) {
        if (only && ov.sector.toLowerCase() !== only) continue;
        const notes = ov.buckets?.length ? ov.buckets.map(b => b.note) : [ov];
        const inSector = bySector.get(ov.sector.toLowerCase()) || [];
        const covered = new Set<string>();
        const out: string[] = [];
        for (const note of notes) {
            const vn = note.verdicts.map(v => v.company);
            vn.forEach(n => covered.add(n.trim().toLowerCase()));
            const unmatched = vn.filter(n => !inSector.some(c => c.toLowerCase() === n.trim().toLowerCase()));
            const closing = [...(note.closing?.body || []), ...((note.closing as any)?.lists || []).flatMap((l: any) => l.items)].join(' ');
            const missing = vn.filter(n => !keys(n).some(k => closing.includes(k)));
            if (unmatched.length) out.push(`  ${note.title}: verdict for a company not in this sector: ${unmatched.join(', ')}`);
            if (missing.length) out.push(`  ${note.title}: not named in the closing: ${missing.join(', ')}`);
            const inputs = (note.valuation?.inputs || {}) as Record<string, unknown>;
            for (const s of strings(note)) {
                if ((s.match(/\*\*/g) || []).length % 2) out.push(`  ${note.title}: unbalanced bold: ${s.slice(0, 70)}`);
                for (const m of s.matchAll(TOKEN)) {
                    const [tok, field, arg] = m;
                    const bad = !FIELDS.has(field) ? 'unknown field'
                        : field === 'count' || field === 'Count' ? (COUNT_ARGS.has(arg.trim()) ? '' : 'bad count')
                        : field === 'mcap' ? '' : inputs[arg.trim()] ? '' : 'company not in valuation inputs';
                    if (bad) out.push(`  ${note.title}: ${tok} — ${bad}`);
                }
            }
        }
        const uncovered = inSector.filter(c => !covered.has(c.toLowerCase()));
        if (uncovered.length) out.push(`  company in the sector with no verdict: ${uncovered.join(', ')}`);
        if (out.length) { problems += out.length; console.log(`${ov.sector}:`); out.forEach(l => console.log(l)); }
    }
    console.log(problems ? `${problems} problems` : 'All notes pass.');
    process.exit(problems ? 1 : 0);
})();
