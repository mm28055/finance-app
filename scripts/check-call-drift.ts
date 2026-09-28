/**
 * Daily check, after the 4pm price sync: finds companies whose written call has drifted
 * far from today's price since its note was written (an "own" that has become
 * stretched, a "wait"/"pass" that has come to fit) and adds them to lib/corporate-actions/needs-attention.json, which is read at the
 * start of each working session so the call gets a fresh look before the quarterly
 * refresh. Nothing on the site changes by itself.
 *
 *   npx tsx scripts/check-call-drift.ts            (writes new entries)
 *   npx tsx scripts/check-call-drift.ts --dry-run  (prints only)
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { allSectorOverviews, companyCallInfo, livePriceCheck, writtenPriceCheck, extremeDrift } from '../lib/sector-overviews';

const FILE = path.join(process.cwd(), 'lib', 'corporate-actions', 'needs-attention.json');

async function main() {
    const dryRun = process.argv.includes('--dry-run');
    const info = companyCallInfo(allSectorOverviews());
    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        select: { name: true, sector: true, marketCap: true, peRatio: true },
    });

    const drifts: { company: string; sector: string; call: string; check: string; why: string }[] = [];
    for (const co of companies) {
        const ci = info.get(co.name.trim().toLowerCase());
        if (!ci) continue;
        const check = livePriceCheck(ci, {
            marketCap: co.marketCap === null ? null : Number(co.marketCap),
            peRatio: co.peRatio === null ? null : Number(co.peRatio),
        });
        const why = extremeDrift(ci.call, writtenPriceCheck(ci), check);
        if (why) drifts.push({ company: co.name, sector: ci.sector, call: ci.call, check, why });
    }

    console.log(`${drifts.length} companies in extreme drift:`);
    for (const d of drifts) console.log(`  ${d.sector} | ${d.company} | ${d.call} → ${d.check}`);
    if (dryRun) { await prisma.$disconnect(); return; }

    const list: any[] = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : [];
    const today = new Date().toISOString().slice(0, 10);
    let added = 0;
    for (const d of drifts) {
        // One open entry per company and drift state; a later change of state is a new entry.
        const exists = list.some(e => e.company === d.company && e.subject === `Call drift: ${d.call} → ${d.check}` && !e.handled);
        if (exists) continue;
        list.push({ company: d.company, sector: d.sector, subject: `Call drift: ${d.call} → ${d.check}`, why: `${d.why}. Revisit the call.`, addedOn: today });
        added++;
    }
    if (added) fs.writeFileSync(FILE, JSON.stringify(list, null, 2) + '\n');
    console.log(`${added} new entries written to needs-attention.json`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
