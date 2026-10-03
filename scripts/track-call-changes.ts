/**
 * Records every change in the notes' calls (own / follow / wait / pass / avoid). Each night it reads
 * every company's call from the sector notes, compares it with last night's snapshot, and adds each
 * difference to lib/calls-log/changes.json with the date, the share price that day and the note's
 * verdict line as the reason. The Filings panel's "Call changes" tab shows the list. It does not
 * matter who changed the call (a review or a session): the comparison catches it.
 *
 *   npx tsx scripts/track-call-changes.ts            (writes)
 *   npx tsx scripts/track-call-changes.ts --dry-run
 *
 * The first run only writes the snapshot.
 */
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { allSectorOverviews, businessFor } from '../lib/sector-overviews';
import { companyCallInfo } from '../lib/sector-overviews/calls';
import type { CallChange, CallSnapshot, CallChangesStore } from '../lib/calls-log/types';

const DIR = path.join(process.cwd(), 'lib/calls-log');
const SNAP = path.join(DIR, 'snapshot.json');
const FILE = path.join(DIR, 'changes.json');
const DRY = process.argv.includes('--dry-run');
const todayIst = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);

/** The note's verdict line for a company ("Verdict: follow. I want to see…"), as the reason. */
function verdictLine(company: string): string | undefined {
    const biz = businessFor(company);
    const line = (biz?.profile.inShort || []).find(s => /Verdict:/i.test(s));
    return line ? line.replace(/\*\*/g, '').replace(/^\s*Verdict:\s*(own|follow|wait|pass|avoid)\.?\s*/i, '').trim() || undefined : undefined;
}

async function main() {
    const info = companyCallInfo(allSectorOverviews());
    const now: CallSnapshot = { date: todayIst(), calls: {} };
    for (const v of info.values()) now.calls[v.key] = { call: v.call, sector: v.sector };

    const store: CallChangesStore = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { changes: [] };
    if (!fs.existsSync(SNAP)) {
        if (!DRY) fs.writeFileSync(SNAP, JSON.stringify(now, null, 1));
        if (!DRY && !fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
        console.log(`First run: snapshot of ${Object.keys(now.calls).length} calls written.`);
        await prisma.$disconnect();
        return;
    }
    const before: CallSnapshot = JSON.parse(fs.readFileSync(SNAP, 'utf8'));
    const names = new Set([...Object.keys(before.calls), ...Object.keys(now.calls)]);
    const found: CallChange[] = [];
    for (const company of names) {
        const a = before.calls[company]?.call ?? null, b = now.calls[company]?.call ?? null;
        if (a === b) continue;
        const co = await prisma.company.findFirst({ where: { name: company }, select: { currentPrice: true } });
        found.push({
            date: now.date, company, sector: now.calls[company]?.sector || before.calls[company]?.sector || '',
            from: a, to: b, price: co?.currentPrice ? Number(co.currentPrice) : null,
            ...(b ? { why: verdictLine(company) } : {}),
        });
    }
    for (const c of found) console.log(`   ${c.company}: ${c.from ?? 'new'} → ${c.to ?? 'dropped'}`);
    console.log(`${found.length} call changes since ${before.date}.`);
    if (!DRY) {
        store.changes = [...found, ...store.changes];
        fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
        fs.writeFileSync(SNAP, JSON.stringify(now, null, 1));
    }
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
