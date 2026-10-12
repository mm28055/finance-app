/**
 * Call analysis and profiles written by Claude instead of Gemini.
 *
 * The pipeline's own prompts are used unchanged; only the model differs. Two steps:
 *
 *   npx tsx scripts/claude-analysis.ts --export --only="Usha Martin,Goodluck India" --dir=<folder>
 *       For every results-call transcript of those companies that has no analysis yet, writes
 *       <id>.prompt.md (the analysis prompt with the previous quarter's context, plus the guidance
 *       rules) and, per company, <ticker>.profile.prompt.md for its newest call. manifest.json
 *       lists them with the answer file each one expects.
 *
 *   (Claude reads each prompt and writes <id>.answer.json / <ticker>.profile.md.)
 *
 *   npx tsx scripts/claude-analysis.ts --import --dir=<folder>
 *       Saves every answer found exactly as a Gemini answer would be saved (Screener figures,
 *       YoY, guidance, chat index), then the profiles.
 *
 * --redo (on both steps) rewrites calls that already have an analysis: export includes them and
 * import replaces their analysis. Profiles are left alone on a redo.
 *
 * Store the transcripts first without analysis:
 *   npx tsx scripts/sync-exchange-transcripts.ts --only="..." --store-only --no-prune
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { processTranscript } from '../lib/sync-service';
import { parseAnalysisText } from '../lib/ai-analyst';
import { GUIDANCE_PROMPT, parseGuidanceJson, lastYearRevenue } from '../lib/guidance-extract';
import { buildProfilePrompt, saveProfile } from '../lib/profile-service';
import { GENERAL_Q, quarterScore } from '../lib/quarters';

const arg = (k: string) => process.argv.find(a => a.startsWith(`--${k}=`))?.split('=').slice(1).join('=');
const dir = arg('dir');
const redo = process.argv.includes('--redo');
if (!dir) throw new Error('--dir=<folder> is required');

interface Item { kind: 'analysis' | 'profile'; id: string; company: string; quarter: string; prompt: string; answer: string }

const GUIDANCE_ADDENDUM = (company: string, quarter: string, lastYear: string | null) => `

---
**ALSO: GUIDANCE READ**
After writing the investor_brief, read it as described below and add the result to your JSON
under a third key, "guidance". The "BRIEF" referred to is the investor_brief you just wrote.

${GUIDANCE_PROMPT(company, quarter, '(the investor_brief above)', lastYear).replace(/\nBRIEF\n[\s\S]*$/, '')}

FINAL RESPONSE FORMAT
{
  "structured_data": { ... },
  "investor_brief": "...",
  "guidance": { "growth_min": ..., "growth_max": ..., "fy": ..., "basis": ..., "quote": ... }
}
`;

async function exportPrompts() {
    const only = (arg('only') || '').split(',').map(s => s.trim()).filter(Boolean);
    if (!only.length) throw new Error('--only="Name,Name" is required');
    fs.mkdirSync(dir!, { recursive: true });
    const items: Item[] = [];
    for (const name of only) {
        const co = await prisma.company.findFirst({ where: { name } });
        if (!co) { console.log(`${name}: not found`); continue; }
        const ts = await prisma.transcript.findMany({
            where: { companyId: co.id, quarter: { q: { not: GENERAL_Q } } },
            include: { quarter: true },
        });
        ts.sort((a, b) => quarterScore(a.quarter.name) - quarterScore(b.quarter.name));
        const lastYear = await lastYearRevenue(co.id);
        for (const t of ts.filter(t => redo || !t.hasAnalysis)) {
            const r: any = await processTranscript(t.id, { promptOnly: true, ignoreExisting: redo });
            if (!r?.prompt) { console.log(`${name} ${t.quarter.name}: no prompt (${r?.error || r?.status})`); continue; }
            const prompt = `${t.id}.prompt.md`;
            fs.writeFileSync(path.join(dir!, prompt), r.prompt + GUIDANCE_ADDENDUM(co.name.trim(), t.quarter.name, lastYear));
            items.push({ kind: 'analysis', id: t.id, company: co.name, quarter: t.quarter.name, prompt, answer: `${t.id}.answer.json` });
        }
        const newest = ts[ts.length - 1];
        if (newest && !redo) {
            const p = await buildProfilePrompt(co.id, newest.quarter.name);
            if ('reason' in p) console.log(`${name}: no profile prompt (${p.reason})`);
            else {
                const key = co.ticker.replace(/[^a-z0-9]/gi, '_');
                fs.writeFileSync(path.join(dir!, `${key}.profile.prompt.md`), p.prompt);
                items.push({ kind: 'profile', id: co.id, company: co.name, quarter: newest.quarter.name, prompt: `${key}.profile.prompt.md`, answer: `${key}.profile.md` });
            }
        }
    }
    fs.writeFileSync(path.join(dir!, 'manifest.json'), JSON.stringify(items, null, 2));
    for (const i of items) console.log(`${i.company} | ${i.quarter} | ${i.kind} | ${i.prompt}`);
}

async function importAnswers() {
    const items: Item[] = JSON.parse(fs.readFileSync(path.join(dir!, 'manifest.json'), 'utf8'));
    // Analyses first, oldest quarter first, so a later quarter's YoY and context find the earlier one.
    for (const i of items.filter(i => i.kind === 'analysis')) {
        const file = path.join(dir!, i.answer);
        if (!fs.existsSync(file)) { console.log(`${i.company} | ${i.quarter} | no answer yet`); continue; }
        const text = fs.readFileSync(file, 'utf8');
        try {
            const aiResult = parseAnalysisText(text);
            if (!aiResult.investor_brief) throw new Error('answer has no investor_brief');
            const raw = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
            const guidance = raw.guidance ? parseGuidanceJson(JSON.stringify(raw.guidance)) : null;
            const r: any = await processTranscript(i.id, { aiResult, guidance, ignoreExisting: redo });
            console.log(`${i.company} | ${i.quarter} | ${r?.status === 'SKIPPED_EXISTING' ? 'already analysed' : r?.success ? 'saved' : `failed (${r?.error})`}`);
        } catch (e: any) {
            console.log(`${i.company} | ${i.quarter} | failed (${e.message})`);
        }
    }
    for (const i of items.filter(i => i.kind === 'profile')) {
        const file = path.join(dir!, i.answer);
        if (!fs.existsSync(file)) { console.log(`${i.company} | profile | no answer yet`); continue; }
        try {
            const chars = await saveProfile(i.id, i.quarter, fs.readFileSync(file, 'utf8'));
            console.log(`${i.company} | profile ${i.quarter} | saved (${chars} chars)`);
        } catch (e: any) {
            console.log(`${i.company} | profile | failed (${e.message})`);
        }
    }
}

(async () => {
    if (process.argv.includes('--export')) await exportPrompts();
    else if (process.argv.includes('--import')) await importAnswers();
    else throw new Error('--export or --import');
    await prisma.$disconnect();
})();
