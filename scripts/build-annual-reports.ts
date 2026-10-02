/**
 * Builds the ANNUAL REPORT tab's store from the research files already written for the sector
 * notes. Each file is one company's research; the parts of it that came from the company's annual
 * report (auditor's remarks, related-party dealings, contingent liabilities, management's outlook,
 * red flags) are pulled out, with the year of the report that was read. No annual report is read
 * again here.
 *
 *   npx tsx scripts/build-annual-reports.ts --dir "<folder holding <sector>/deep/NN-Company.md>"
 *   ... --only "Sansera Engineering"      (one company)
 *   ... --concurrency 4
 *
 * Only reports for the financial year just ended count: FY26 (year to March 2026), or CY25 for
 * companies whose year is the calendar year. A company researched from an older report, or from an
 * IPO prospectus, is written to the store's `skipped` list instead, with the reason.
 * Resumable: companies already in the store are skipped.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';
import type { AnnualReport } from '../lib/annual-reports/types';

const FILE = path.join(__dirname, '..', 'lib', 'annual-reports', 'reports.json');
const arg = (k: string) => { const i = process.argv.indexOf(`--${k}`); return i >= 0 ? process.argv[i + 1] : undefined; };
const DIR = arg('dir');
const slug = (name: string) => name.replace(/[^A-Za-z0-9]+/g, '_');

const PROMPT = (company: string, text: string) => `Below is an analyst's research file on the Indian listed company "${company}". Parts of it come from
the company's ANNUAL REPORT (the auditor's report, the notes on related parties and contingent liabilities, the management
discussion). Pull out ONLY those parts, for an investor who wants to see what the annual report showed.

Rules:
- Use only what the file says. Never add facts, figures or interpretation of your own. If the file has nothing on a heading,
  give null for it.
- "year": which annual report the analyst read, exactly as the file states it (look at the Sources list and the text):
  "FY26" (year ended March 2026), "FY25" (March 2025), "CY25" (calendar year 2025) and so on. If the file says the IPO
  prospectus stood in for an annual report, or no annual report was read, give "none".
- "yearEvidence": the few words in the file that show which report it was.
- "url": the link to that annual report if the file gives one, else null.
- Write for a non-technical reader: plain English, short sentences, ₹ and crore, keep every figure the file gives.
- Each text field is at most about 90 words. "flags" are red flags or points of concern only (at most 5, each one sentence);
  leave out routine or reassuring items.

Reply with JSON only:
{"year": "...", "yearEvidence": "...", "url": "..." or null,
 "auditor": "<the auditor's opinion and any remarks, qualifications, emphasis of matter or CARO points>" or null,
 "relatedParties": "<related-party dealings: who, what, how much>" or null,
 "contingent": "<contingent liabilities, disputed tax or legal claims, guarantees, commitments>" or null,
 "outlook": "<what management says in the report about the year ahead: plans, capex, targets, risks it names>" or null,
 "other": "<anything else taken from the annual report that matters: segment results, loss-making subsidiaries, pledges, pay of the promoters or managers, exceptional items>" or null,
 "flags": ["..."]}

RESEARCH FILE
${text}`;

async function main() {
    if (!DIR) throw new Error('Pass --dir');
    const store: { updated: string; reports: AnnualReport[]; skipped: { company: string; year: string; why: string }[] } =
        fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { updated: '', reports: [], skipped: [] };

    // Research files, newest first, keyed by the company-name slug in the file name ("07-Sansera_Engineering.md").
    const files = new Map<string, string>();
    const all = fs.readdirSync(DIR).flatMap(d => {
        const p = path.join(DIR, d, 'deep');
        return fs.existsSync(p) ? fs.readdirSync(p).filter(f => /^\d+-.+\.md$/.test(f)).map(f => path.join(p, f)) : [];
    }).sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
    for (const f of all) { const k = path.basename(f).replace(/^\d+-/, '').replace(/\.md$/, ''); if (!files.has(k)) files.set(k, f); }

    const only = arg('only');
    const companies = await prisma.company.findMany({ where: { isVisible: true, ...(only ? { name: only } : {}) }, select: { name: true, sector: true, aliases: true }, orderBy: { name: 'asc' } });
    const have = new Set([...store.reports.map(r => r.company), ...store.skipped.map(s => s.company)]);
    const todo = companies.map(c => {
        const names = [c.name, ...(c.aliases || '').split(/[,;|]/)].map(s => s.trim()).filter(Boolean);
        const file = names.map(n => files.get(slug(n))).find(Boolean);
        return { c, file };
    }).filter(x => x.file && (only || !have.has(x.c.name)));
    console.log(`${files.size} research files; ${companies.length} companies; ${todo.length} to read (${have.size} already done)`);

    const save = () => {
        store.updated = new Date().toISOString();
        store.reports.sort((a, b) => a.company.localeCompare(b.company));
        // The folder syncs to OneDrive and other tools touch the repo, so a write can fail for a
        // moment; a failed save is simply retried at the next one (the results stay in memory).
        try {
            fs.mkdirSync(path.dirname(FILE), { recursive: true });
            fs.writeFileSync(FILE, JSON.stringify(store, null, 1) + '\n');
        } catch (e: any) { console.warn(`  save failed (${e.code || e.message}); will retry`); }
    };
    let done = 0;
    const work = async ({ c, file }: typeof todo[number]) => {
        const text = fs.readFileSync(file!, 'utf8').slice(0, 60000);
        try {
            const raw: string = (await geminiPro.generateContent(PROMPT(c.name, text))).response.text();
            const j = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
            const year = String(j.year || 'none').toUpperCase().replace(/\s+/g, '');
            const str = (v: any) => (typeof v === 'string' && v.trim() && !/^null$/i.test(v.trim()) ? v.trim() : undefined);
            const has = str(j.auditor) || str(j.relatedParties) || str(j.contingent) || str(j.outlook) || str(j.other);
            store.reports = store.reports.filter(r => r.company !== c.name);
            store.skipped = store.skipped.filter(s => s.company !== c.name);
            if (!/^(FY26|CY25|CY2025|FY2026)$/.test(year)) store.skipped.push({ company: c.name, year, why: String(j.yearEvidence || '').slice(0, 160) });
            else if (!has) store.skipped.push({ company: c.name, year, why: 'The research file has nothing taken from the annual report.' });
            else store.reports.push({
                company: c.name, sector: c.sector, year: year.startsWith('CY') ? 'CY25' : 'FY26',
                ...(str(j.url) && /^https?:\/\//.test(str(j.url)!) ? { url: str(j.url) } : {}),
                ...(str(j.auditor) ? { auditor: str(j.auditor) } : {}), ...(str(j.relatedParties) ? { relatedParties: str(j.relatedParties) } : {}),
                ...(str(j.contingent) ? { contingent: str(j.contingent) } : {}), ...(str(j.outlook) ? { outlook: str(j.outlook) } : {}),
                ...(str(j.other) ? { other: str(j.other) } : {}),
                flags: Array.isArray(j.flags) ? j.flags.map((f: any) => String(f).trim()).filter(Boolean).slice(0, 5) : [],
                researchedOn: fs.statSync(file!).mtime.toISOString().slice(0, 10),
            });
        } catch (e: any) {
            console.warn(`  ${c.name}: failed (${e.message.slice(0, 80)}); will be tried again on the next run`);
        }
        if (++done % 10 === 0 || done === todo.length) { save(); console.log(`${done}/${todo.length} read; ${store.reports.length} reports, ${store.skipped.length} skipped`); }
    };
    const queue = [...todo];
    await Promise.all(Array.from({ length: Number(arg('concurrency') || 4) }, async () => { for (let x = queue.shift(); x; x = queue.shift()) await work(x); }));
    save();
    const noFile = companies.filter(c => !store.reports.some(r => r.company === c.name) && !store.skipped.some(s => s.company === c.name));
    console.log(`DONE: ${store.reports.length} reports; ${store.skipped.length} skipped; ${noFile.length} companies with no research file`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
