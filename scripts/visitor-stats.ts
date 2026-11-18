/**
 * Visitor numbers from our own log (SiteVisit, filled by /api/visit). Manish's devices are not in it.
 *
 *   npx tsx scripts/visitor-stats.ts            (last 30 days)
 *   npx tsx scripts/visitor-stats.ts --days=7
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';

async function main() {
    const daysArg = process.argv.find((a) => a.startsWith('--days='));
    const days = daysArg ? Math.max(1, Number(daysArg.split('=')[1]) || 30) : 30;
    const since = new Date(Date.now() - days * 86_400_000);

    const rows = await prisma.siteVisit.findMany({
        where: { createdAt: { gte: since } },
        select: { visitorId: true, path: true, city: true, region: true, country: true, device: true, createdAt: true },
        orderBy: { createdAt: 'asc' },
    });
    if (!rows.length) {
        console.log(`No visits logged in the last ${days} days.`);
        return;
    }

    const first = rows[0].createdAt.toISOString().slice(0, 10);
    const visitors = new Map<string, typeof rows>();
    for (const r of rows) visitors.set(r.visitorId, [...(visitors.get(r.visitorId) ?? []), r]);

    console.log(`Last ${days} days (log has data from ${first})`);
    console.log(`Unique visitors: ${visitors.size}   Pages opened: ${rows.length}`);

    const place = (r: (typeof rows)[number]) =>
        [r.city, r.region, r.country].filter(Boolean).join(', ') || 'unknown';
    const byPlace = new Map<string, Set<string>>();
    for (const r of rows) byPlace.set(place(r), (byPlace.get(place(r)) ?? new Set()).add(r.visitorId));
    console.log('\nWhere (unique visitors):');
    [...byPlace.entries()]
        .sort((a, b) => b[1].size - a[1].size)
        .forEach(([p, s]) => console.log(`  ${String(s.size).padStart(3)}  ${p}`));

    console.log('\nEach visitor (days seen, pages, place, device):');
    [...visitors.values()]
        .sort((a, b) => b.length - a.length)
        .forEach((v) => {
            const daysSeen = new Set(v.map((r) => r.createdAt.toISOString().slice(0, 10))).size;
            console.log(`  ${String(daysSeen).padStart(3)} days  ${String(v.length).padStart(4)} pages  ${place(v[0])}  ${v[0].device ?? ''}`);
        });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
