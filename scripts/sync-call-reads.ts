/**
 * A three-way read on each AGM and special call — positive, neutral or concerning — and one line on
 * what changed since the company's last results call. Written by Gemini Pro from the call's analysis
 * and the last results call's analysis, for calls without a read yet; shown only in the Filings
 * panel's Calls tab (AGMs and special calls), never on the company row or card. Never touches the
 * database. Writes lib/calls-read/reads.json, keyed "<company>|<slot>".
 *
 *   npx tsx scripts/sync-call-reads.ts            (calls of the last 60 days without a read)
 *   npx tsx scripts/sync-call-reads.ts --days=400
 */
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';
import { generalSlotDate } from '../lib/doc-label';
import type { CallRead, CallReadsStore } from '../lib/calls-read/types';

const FILE = path.join(process.cwd(), 'lib/calls-read/reads.json');
const arg = (n: string) => process.argv.find(a => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=');
const todayIst = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
const ask = async (prompt: string): Promise<string> =>
    (await geminiPro.generateContent({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2 } })).response.text();

async function main() {
    const store: CallReadsStore = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { reads: {} };
    const since = Date.now() - Number(arg('days') || 60) * 86400000;
    const general = await prisma.analysis.findMany({
        where: { quarter: { q: 'GEN' }, company: { isVisible: true } },
        select: { companyId: true, investorBrief: true, summary: true, company: { select: { name: true } }, quarter: { select: { name: true } } },
    });
    const todo = general.filter(a => {
        const d = generalSlotDate(a.quarter.name);
        return d && d.getTime() >= since && !store.reads[`${a.company.name}|${a.quarter.name}`];
    });
    console.log(`${todo.length} AGMs and special calls to read`);
    let done = 0;
    for (const a of todo) {
        const key = `${a.company.name}|${a.quarter.name}`;
        const last = (await prisma.analysis.findMany({
            where: { companyId: a.companyId, quarter: { q: { not: 'GEN' } } },
            select: { summary: true, investorBrief: true, guidanceText: true, quarter: { select: { name: true, year: true, q: true } } },
        })).sort((x, y) => (y.quarter.year - x.quarter.year) || y.quarter.q.localeCompare(x.quarter.q))[0];
        const prompt = `${a.company.name} held a ${/^AGM/.test(a.quarter.name) ? 'shareholders\' meeting (AGM)' : 'special call or investor meeting'} (${a.quarter.name}).

ANALYSIS OF THIS CALL:
${(a.investorBrief || a.summary || '').slice(0, 7000)}

ANALYSIS OF THE LAST RESULTS CALL (${last?.quarter.name || 'none on record'}):
${last ? (last.summary || last.investorBrief || '').slice(0, 4000) : 'None.'}
${last?.guidanceText ? `Guidance then: ${last.guidanceText.slice(0, 1200)}` : ''}

For a long-term investor, give:
1. "read": "positive", "neutral" or "concerning" — positive when something new helps the case (guidance raised, a large order, a plant on time, debt falling); concerning when something new hurts it (a target cut, a delay, a vague answer on debt or governance, a large dilution); neutral when it repeats what was known.
2. "change": one plain sentence on what changed since the last results call, with the figure if there is one ("Raised the FY27 revenue target to ₹530cr from ₹500cr"), or "Nothing new versus the <quarter> call" when nothing changed.

Answer with JSON only: {"read": "...", "change": "..."}`;
        try {
            const raw = await ask(prompt);
            const j = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
            const read: CallRead['read'] = ['positive', 'neutral', 'concerning'].includes(j.read) ? j.read : 'neutral';
            store.reads[key] = { read, change: String(j.change || '').trim(), on: todayIst() };
            done++;
            console.log(`   ${key}: ${read} — ${store.reads[key].change}`);
            fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
        } catch (e: any) {
            console.log(`   ${key}: failed (${e.message})`);
        }
    }
    // Reads for calls no longer held (pruned after a year) go too.
    const live = new Set(general.map(a => `${a.company.name}|${a.quarter.name}`));
    for (const k of Object.keys(store.reads)) if (!live.has(k)) delete store.reads[k];
    fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
    console.log(`Read ${done}.`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
