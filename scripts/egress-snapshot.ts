/**
 * Which database reads use up Supabase egress? Postgres counts, per query shape,
 * how often it ran and how many rows it returned (pg_stat_statements, a running
 * total since Feb 2026). This saves that count and, when an earlier save exists,
 * prints what each query shape returned in between, with a rough size.
 *
 *   npx tsx scripts/egress-snapshot.ts        save now; compare with the last save
 *
 * Saves go to .egress-snapshots/ (git-ignored). Sizes are estimates: rows times the
 * table's average row width, with full call texts counted at their average length.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';

const DIR = path.join(process.cwd(), '.egress-snapshots');

(async () => {
    fs.mkdirSync(DIR, { recursive: true });
    const rows = await prisma.$queryRawUnsafe<any[]>(`SELECT s.userid::regrole::text || '|' || s.dbid || '|' || s.queryid AS id, calls::bigint AS calls, rows::bigint AS rows, left(regexp_replace(query, '\\s+', ' ', 'g'), 400) AS query FROM pg_stat_statements s WHERE query ILIKE 'select%'`);
    const widths = new Map((await prisma.$queryRawUnsafe<any[]>(`SELECT tablename, sum(avg_width)::int AS w FROM pg_stats WHERE schemaname = 'public' GROUP BY 1`)).map(r => [r.tablename, r.w]));
    const [{ kb }] = await prisma.$queryRawUnsafe<any[]>(`SELECT (avg(length("rawText")) / 1000)::int AS kb FROM "Transcript"`);
    const now = new Date();
    const snap = { at: now.toISOString(), rows: rows.map(r => ({ id: r.id, calls: Number(r.calls), rows: Number(r.rows), query: r.query })) };

    const earlier = fs.readdirSync(DIR).filter(f => f.endsWith('.json')).sort().pop();
    fs.writeFileSync(path.join(DIR, `${now.toISOString().replace(/[:.]/g, '-')}.json`), JSON.stringify(snap));
    if (!earlier) { console.log(`Saved the first count (${rows.length} query shapes). Run again later to see what was read in between.`); return prisma.$disconnect(); }

    const prev = JSON.parse(fs.readFileSync(path.join(DIR, earlier), 'utf8'));
    const was = new Map<string, any>(prev.rows.map((r: any) => [r.id, r]));
    const bytesPerRow = (q: string) => {
        if (/"rawText"/.test(q) && !/md5\(/.test(q)) return kb * 1000;                       // full call texts
        const t = q.match(/FROM "(?:public"\.")?(\w+)"/)?.[1] || '';
        return (widths.get(t) || 200) + (/JOIN/.test(q) ? 100 : 0);
    };
    const diff = snap.rows.map(r => {
        const p = was.get(r.id) || { calls: 0, rows: 0 };
        const dRows = r.rows - p.rows;
        return { calls: r.calls - p.calls, rows: dRows, mb: dRows * bytesPerRow(r.query) / 1e6, query: r.query };
    }).filter(d => d.calls > 0).sort((a, b) => b.mb - a.mb);
    const total = diff.reduce((s, d) => s + d.mb, 0);
    console.log(`Since ${prev.at} (about ${total.toFixed(0)} MB read in all, rough):\n`);
    for (const d of diff.slice(0, 15)) console.log(`${d.mb.toFixed(1).padStart(8)} MB  ${String(d.calls).padStart(6)} runs  ${String(d.rows).padStart(8)} rows  ${d.query.replace(/"public"\./g, '').slice(0, 170)}`);
    await prisma.$disconnect();
})();
