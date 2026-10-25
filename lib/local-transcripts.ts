// -----------------------------------------------------------------------------
// A copy of every call transcript's text on this computer, for research.
//
// Research that reads many calls (sector notes, capacity pictures, growth checks)
// used to pull the full texts from Supabase each time, and that repeated reading
// is what used up the free plan's egress. syncLocalTranscripts() downloads only
// calls that are new or changed since the last sync (it compares a short
// fingerprint of each text, worked out in the database), and removes calls the
// database no longer holds. Reading after that costs no egress at all.
//
// Lives in .local-transcripts/ (git-ignored): one .txt per call plus index.json.
// Text only, about 45 KB a call (~65 MB for ~1,500 calls).
//
//   import { syncLocalTranscripts, readLocalTranscripts } from '../lib/local-transcripts';
//   await syncLocalTranscripts();
//   const calls = readLocalTranscripts({ company: 'Pitti' });   // newest first
// -----------------------------------------------------------------------------
import fs from 'fs';
import path from 'path';
import { prisma } from './prisma';

export const LOCAL_DIR = path.join(process.cwd(), '.local-transcripts');
const INDEX = path.join(LOCAL_DIR, 'index.json');

export interface LocalCall {
    id: string;
    companyId: string;
    company: string;
    sector: string | null;
    quarter: string;          // "Q2 FY27", "AGM 12-08-2026", "Special call ..."
    q: string;                // "Q1".."Q4" or "GEN"
    callDate: string | null;  // ISO date of the call, when known
    createdAt: string;
    source: string | null;    // the filing it came from (NSE/BSE/Screener link)
    hash: string;             // md5 of the text, to spot changes
}

function loadIndex(): LocalCall[] {
    try { return JSON.parse(fs.readFileSync(INDEX, 'utf8')); } catch { return []; }
}

/** Brings the local copy up to date. Downloads only new or changed texts. */
export async function syncLocalTranscripts(opts: { quiet?: boolean } = {}): Promise<{ added: number; changed: number; removed: number; total: number }> {
    fs.mkdirSync(LOCAL_DIR, { recursive: true });
    const before = new Map(loadIndex().map(c => [c.id, c]));

    // Light listing: no texts, just who/when and a fingerprint of each text.
    const rows = await prisma.$queryRaw<any[]>`
        SELECT t.id, t."companyId", c.name AS company, c.sector, qu.name AS quarter, qu.q,
               t."sourceEventDate", t."createdAt", t."filePath", md5(t."rawText") AS hash
        FROM "Transcript" t
        JOIN "Company" c ON c.id = t."companyId"
        JOIN "Quarter" qu ON qu.id = t."quarterId"
        WHERE t."rawText" IS NOT NULL`;

    const index: LocalCall[] = rows.map(r => ({
        id: r.id, companyId: r.companyId, company: String(r.company).trim(), sector: r.sector,
        quarter: r.quarter, q: r.q,
        callDate: r.sourceEventDate ? new Date(r.sourceEventDate).toISOString().slice(0, 10) : null,
        createdAt: new Date(r.createdAt).toISOString(), source: r.filePath, hash: r.hash,
    }));

    const fileOf = (id: string) => path.join(LOCAL_DIR, `${id}.txt`);
    const need = index.filter(c => before.get(c.id)?.hash !== c.hash || !fs.existsSync(fileOf(c.id)));
    let added = 0, changed = 0;
    // Fetch texts in small batches so one slow call never holds a huge reply.
    for (let i = 0; i < need.length; i += 50) {
        const batch = need.slice(i, i + 50);
        const texts = await prisma.transcript.findMany({ where: { id: { in: batch.map(c => c.id) } }, select: { id: true, rawText: true } });
        for (const t of texts) {
            fs.writeFileSync(fileOf(t.id), t.rawText || '', 'utf8');
            if (before.has(t.id)) changed++; else added++;
        }
    }

    const keep = new Set(index.map(c => c.id));
    let removed = 0;
    for (const f of fs.readdirSync(LOCAL_DIR)) {
        if (f.endsWith('.txt') && !keep.has(f.slice(0, -4))) { fs.unlinkSync(path.join(LOCAL_DIR, f)); removed++; }
    }
    fs.writeFileSync(INDEX, JSON.stringify(index, null, 1), 'utf8');
    if (!opts.quiet) console.log(`Local transcripts: ${index.length} calls (${added} new, ${changed} changed, ${removed} removed).`);
    return { added, changed, removed, total: index.length };
}

/**
 * Calls from the local copy, newest first, each with its text. Filters match a
 * company name or sector loosely (case-insensitive substring). Run
 * syncLocalTranscripts() first in a fresh session.
 */
export function readLocalTranscripts(filter: { company?: string; companyId?: string; sector?: string } = {}): (LocalCall & { text: string })[] {
    const has = (v: string | null, s?: string) => !s || (v || '').toLowerCase().includes(s.toLowerCase());
    return loadIndex()
        .filter(c => (!filter.companyId || c.companyId === filter.companyId) && has(c.company, filter.company) && has(c.sector, filter.sector))
        .sort((a, b) => (b.callDate || b.createdAt).localeCompare(a.callDate || a.createdAt))
        .map(c => ({ ...c, text: fs.readFileSync(path.join(LOCAL_DIR, `${c.id}.txt`), 'utf8') }));
}
