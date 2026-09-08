// Flags companies listed on NSE Emerge / BSE SME, which the app shows as an
// "SME" marker next to the name.
//
// The source of truth is each exchange's own scrip list, matched on ISIN — not a
// name or ticker guess, and not a market-cap heuristic. Both lists carry ISINs,
// so a company is SME if and only if it appears in one of them today.
//
// Re-runnable and self-correcting: it clears the flag on companies that have
// left the SME boards, so a graduation to the main board is picked up too.
//
//   npx tsx scripts/mark-sme.ts             # report + apply
//   npx tsx scripts/mark-sme.ts --dry-run   # report only
import 'dotenv/config';
import { prisma } from '../lib/prisma';

const DRY_RUN = process.argv.includes('--dry-run');

// NSE publishes Emerge as a CSV whose 6th column is the ISIN.
const NSE_SME_CSV = 'https://nsearchives.nseindia.com/emerge/corporates/content/SME_EQUITY_L.csv';
// BSE files SME scrips under groups M and MT; the API returns JSON per group.
const BSE_GROUPS = ['M', 'MT'];
const BSE_LIST = (group: string) =>
    `https://api.bseindia.com/BseIndiaAPI/api/ListofScripData/w?Group=${group}&segment=Equity&status=Active&industry=&Scripcode=`;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';

async function nseEmergeIsins(): Promise<Set<string>> {
    const res = await fetch(NSE_SME_CSV, { headers: { 'User-Agent': UA } });
    if (!res.ok) throw new Error(`NSE Emerge list: HTTP ${res.status}`);
    const rows = (await res.text()).split('\n').slice(1);
    const isins = rows
        .map(line => line.split(',').map(c => c.trim()))
        .map(cols => cols.find(c => /^INE[0-9A-Z]{9}$/.test(c)))
        .filter(Boolean) as string[];
    return new Set(isins);
}

async function bseSmeIsins(): Promise<Set<string>> {
    const out = new Set<string>();
    for (const group of BSE_GROUPS) {
        const res = await fetch(BSE_LIST(group), {
            headers: { 'User-Agent': UA, Referer: 'https://www.bseindia.com/' },
        });
        if (!res.ok) throw new Error(`BSE group ${group}: HTTP ${res.status}`);
        for (const row of (await res.json()) as any[]) {
            if (row?.ISIN_NUMBER) out.add(String(row.ISIN_NUMBER).trim());
        }
    }
    return out;
}

async function main() {
    const [nse, bse] = await Promise.all([nseEmergeIsins(), bseSmeIsins()]);
    console.log(`Exchange lists: NSE Emerge ${nse.size}, BSE SME ${bse.size}`);

    const companies = await prisma.company.findMany({
        select: { id: true, name: true, isin: true, isSme: true },
    });

    const toSet: typeof companies = [];
    const toClear: typeof companies = [];
    for (const c of companies) {
        const isSme = !!c.isin && (nse.has(c.isin) || bse.has(c.isin));
        if (isSme && !c.isSme) toSet.push(c);
        if (!isSme && c.isSme) toClear.push(c);
    }

    console.log(`\nMarking SME (${toSet.length}):`);
    for (const c of toSet) console.log(`  + ${c.name.trim()} (${nse.has(c.isin!) ? 'NSE Emerge' : 'BSE SME'})`);
    console.log(`\nClearing (${toClear.length}):`);
    for (const c of toClear) console.log(`  - ${c.name.trim()} — no longer on an SME board`);

    if (DRY_RUN) return console.log('\n(dry run — nothing written)');

    if (toSet.length) await prisma.company.updateMany({ where: { id: { in: toSet.map(c => c.id) } }, data: { isSme: true } });
    if (toClear.length) await prisma.company.updateMany({ where: { id: { in: toClear.map(c => c.id) } }, data: { isSme: false } });

    const total = await prisma.company.count({ where: { isSme: true } });
    console.log(`\n✅ ${total} of ${companies.length} companies flagged as SME.`);
}

main()
    .catch(e => { console.error(e.message); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
