/**
 * Daily check, after the 4pm price sync: finds companies whose written call has drifted
 * far from today's price since its note was written (an "own" that has become
 * stretched, a "wait"/"pass" that has come to fit) and adds them to lib/corporate-actions/needs-attention.json, which is read at the
 * start of each working session so the call gets a fresh look before the quarterly
 * refresh. It also lists companies moved to another sector, or sitting in a sector whose
 * note does not cover them. Nothing on the site changes by itself.
 *
 *   npx tsx scripts/check-call-drift.ts            (writes new entries)
 *   npx tsx scripts/check-call-drift.ts --dry-run  (prints only)
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { allSectorOverviews, companyCallInfo, livePriceCheck, writtenPriceCheck, movedSinceNote, extremeDrift } from '../lib/sector-overviews';

const FILE = path.join(process.cwd(), 'lib', 'corporate-actions', 'needs-attention.json');

async function main() {
    const dryRun = process.argv.includes('--dry-run');
    const info = companyCallInfo(allSectorOverviews());
    // The chat's search passages carry a copy of each company's sector. A company moved by any route
    // (the site, a script, the database) is brought back in step here, so the sector chat keeps
    // finding its call transcripts.
    if (!dryRun) {
        const fixed = await prisma.$executeRaw`UPDATE "TranscriptChunk" t SET sector = c.sector FROM "Company" c WHERE c.id = t."companyId" AND t.sector <> c.sector`;
        if (fixed) console.log(`${fixed} search passages moved to their company's current sector`);
    }
    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        select: { name: true, sector: true, marketCap: true, peRatio: true, currentPrice: true, ticker: true, isin: true },
    });

    // A small daily snapshot of every company (sector, price, market value, P/E), committed
    // by the 4pm job, so the weekly Claude review can check notes without database access.
    if (!dryRun) {
        const snap = companies
            .map(c => ({
                name: c.name.trim(), sector: c.sector, ticker: c.ticker, isin: c.isin,
                price: c.currentPrice === null ? null : Number(c.currentPrice),
                marketCap: c.marketCap === null ? null : Number(c.marketCap),
                peRatio: c.peRatio === null ? null : Number(c.peRatio),
            }))
            .sort((a, b) => a.sector.localeCompare(b.sector) || a.name.localeCompare(b.name));
        fs.writeFileSync(path.join(process.cwd(), 'lib', 'corporate-actions', 'companies.json'),
            JSON.stringify({ updated: new Date().toISOString().slice(0, 10), companies: snap }, null, 1) + '\n');
    }

    const drifts: { company: string; sector: string; call: string; check: string; why: string }[] = [];
    for (const co of companies) {
        const ci = info.get(co.name.trim().toLowerCase());
        if (!ci) continue;
        const live = {
            marketCap: co.marketCap === null ? null : Number(co.marketCap),
            peRatio: co.peRatio === null ? null : Number(co.peRatio),
        };
        const check = livePriceCheck(ci, live);
        const why = extremeDrift(ci.call, writtenPriceCheck(ci), check, movedSinceNote(ci, live));
        if (why) drifts.push({ company: co.name, sector: ci.sector, call: ci.call, check, why });
    }

    // Sector moves: a company whose note is in another sector, or a company in a sector
    // whose note does not cover it (new, or moved from Misc). Misc and the portfolio have
    // no notes by design.
    const coverage: { company: string; sector: string; subject: string; why: string }[] = [];
    for (const co of companies) {
        if (/^(misc|zportfolio)$/i.test(co.sector.trim())) continue;
        const ci = info.get(co.name.trim().toLowerCase());
        if (ci && ci.sector.toLowerCase() !== co.sector.toLowerCase()) {
            coverage.push({ company: co.name, sector: co.sector, subject: `Moved sector: ${ci.sector} → ${co.sector}`, why: `Move its section from the ${ci.sector} note to the ${co.sector} note.` });
        } else if (!ci) {
            coverage.push({ company: co.name, sector: co.sector, subject: `Not in the ${co.sector} note`, why: `Add a company section to the ${co.sector} note (or write the note if the sector has none).` });
        }
    }
    // New calls since the note: a results call for a later quarter than the note covers, or an
    // AGM / special call held after the note was written. The weekly review updates just that
    // company with what is new.
    const qRank = (q: string) => { const m = q.match(/^Q([1-4]) FY(\d{2})$/); return m ? Number(m[2]) * 10 + Number(m[1]) : -1; };
    const transcripts = await prisma.transcript.findMany({
        where: { company: { isVisible: true } },
        select: { sourceEventDate: true, createdAt: true, quarter: { select: { name: true, q: true } }, company: { select: { name: true, sector: true } } },
    });
    for (const t of transcripts) {
        const ci = info.get(t.company.name.trim().toLowerCase());
        if (!ci) continue;
        if (t.quarter.q !== 'GEN') {
            if (qRank(t.quarter.name) > qRank(ci.asOfQuarter)) {
                coverage.push({ company: t.company.name.trim(), sector: t.company.sector, subject: `New results call: ${t.quarter.name}`,
                    why: `The ${t.quarter.name} results call is in (the note covers ${ci.asOfQuarter}). Update this company only with what is new: guidance, margins, order book, capex, surprises; change the call if the evidence warrants.` });
            }
        } else {
            const held = t.sourceEventDate || t.createdAt;
            if (held.toISOString().slice(0, 10) > ci.lastUpdated) {
                coverage.push({ company: t.company.name.trim(), sector: t.company.sector, subject: `New ${t.quarter.name}`,
                    why: `${t.quarter.name} (held after the note was written). Add any new guidance, targets or plans to this company's section.` });
            }
        }
    }

    console.log(`${coverage.length} companies need a note change for their sector:`);
    for (const c of coverage) console.log(`  ${c.company} | ${c.subject}`);

    console.log(`${drifts.length} companies in extreme drift:`);
    for (const d of drifts) console.log(`  ${d.sector} | ${d.company} | ${d.call} → ${d.check}`);
    if (dryRun) { await prisma.$disconnect(); return; }

    const list: any[] = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : [];
    const today = new Date().toISOString().slice(0, 10);
    let added = 0;
    for (const d of drifts) {
        // One open entry per company and drift state; a later change of state is a new entry.
        // Once raised (open or handled), the same company and state is not raised again; a change
        // of state (a different call or price check) is a new subject and is raised.
        const exists = list.some(e => e.company === d.company && e.subject === `Call drift: ${d.call} → ${d.check}`);
        if (exists) continue;
        list.push({ company: d.company, sector: d.sector, subject: `Call drift: ${d.call} → ${d.check}`, why: `${d.why}. Revisit the call.`, addedOn: today });
        added++;
    }
    for (const c of coverage) {
        // Same rule: a handled "New results call: Q2 FY27" is not raised again; Q3 FY27 is a new subject.
        if (list.some(e => e.company === c.company && e.subject === c.subject)) continue;
        list.push({ company: c.company, sector: c.sector, subject: c.subject, why: c.why, addedOn: today });
        added++;
    }
    if (added) fs.writeFileSync(FILE, JSON.stringify(list, null, 2) + '\n');
    console.log(`${added} new entries written to needs-attention.json`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
