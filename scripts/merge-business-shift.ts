/**
 * Merges the business-shift write-ups from research/business-shift/out/*.json into lib/business-shift/shifts.json,
 * after checking each one, and adds each company's "what to watch" milestones to lib/checkpoints/checkpoints.json
 * (id <slug>-shift-<n>; settled by hand in the weekly review, as they have no metric).
 *
 * Usage: npx tsx scripts/merge-business-shift.ts [--dry]
 */
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import type { BusinessShift } from '../lib/business-shift/types';

const DRY = process.argv.includes('--dry');
const IN = 'research/business-shift/out';
const OUT = 'lib/business-shift/shifts.json';
const CP = 'lib/checkpoints/checkpoints.json';
const DUE = /^[QH][1-4] FY\d{2}$/;
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const today = new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);

/** Problems that stop a write-up going live; an empty list means it can. */
function check(s: BusinessShift, names: Set<string>): string[] {
    const bad: string[] = [];
    if (!names.has(s.company)) bad.push(`not a company on the dashboard: "${s.company}"`);
    for (const k of ['headline', 'now', 'future', 'confidenceWhy'] as const) if (!s[k] || typeof s[k] !== 'string') bad.push(`missing ${k}`);
    if (!['transformational', 'meaningful', 'modest'].includes(s.shift)) bad.push(`shift "${s.shift}"`);
    if (!['high', 'medium', 'low'].includes(s.confidence)) bad.push(`confidence "${s.confidence}"`);
    const segs = new Set(s.segments.map(x => x.name));
    if (!s.mix?.length || !s.mix.some(m => /E$/.test(m.year)) || s.mix.filter(m => !/E$/.test(m.year)).length < 1) bad.push('mix needs at least one actual year and the FY29E projection');
    for (const m of s.mix || []) {
        const sum = m.parts.reduce((a, p) => a + p.pct, 0);
        if (Math.abs(sum - 100) > 2) bad.push(`${m.year} shares add to ${sum}`);
        const rev = m.parts.reduce((a, p) => a + p.revenue, 0);
        if (m.total && Math.abs(rev - m.total) / m.total > 0.03) bad.push(`${m.year} segment revenue ${Math.round(rev)} vs total ${m.total}`);
        for (const p of m.parts) if (!segs.has(p.segment)) bad.push(`${m.year}: segment "${p.segment}" not in the segment list`);
    }
    for (const w of s.watch || []) if (!DUE.test(w.due)) bad.push(`watch due "${w.due}"`);
    return bad;
}

/**
 * The shift label from the numbers, one rule for every company (the researchers' own labels varied):
 * transformational if a growing line becomes the largest (gaining 15 points or more), a line under 15% reaches a
 * third, or a line gains 25 points or more; meaningful if a line gains 10 points or more, at least doubles its share
 * to 20% or more, or the main line loses 10 points or more; otherwise modest. A top line that changes only because
 * the old one shrinks (HBL's Kavach) is not a new business.
 */
function shiftFromMix(s: BusinessShift): BusinessShift['shift'] {
    const now = s.mix.filter(m => !/E$/.test(m.year)).pop()!, later = s.mix.find(m => /E$/.test(m.year))!;
    const pct = (m: typeof now, seg: string) => m.parts.find(p => p.segment === seg)?.pct ?? 0;
    const top = (m: typeof now) => [...m.parts].sort((a, b) => b.pct - a.pct)[0]?.segment;
    const newTop = top(later);
    if (newTop && newTop !== top(now) && pct(later, newTop) - pct(now, newTop) >= 15) return 'transformational';
    let label: BusinessShift['shift'] = 'modest';
    for (const p of later.parts) {
        if (/^other/i.test(p.segment)) continue;
        const from = pct(now, p.segment), to = p.pct;
        // A third from a small base, or 25 points or more (Titagarh's passenger trains, 17% to 48%).
        if ((from < 15 && to >= 33) || to - from >= 25) return 'transformational';
        if (to - from >= 10 || (to >= 20 && to >= 2 * from)) label = 'meaningful';
    }
    // Several new lines growing together: the main line losing 10 points or more while its own revenue still grows
    // (Jupiter's wagons, 69% to 56%) — not a main line that is simply shrinking (HBL's Kavach).
    const core = top(now)!;
    const rev = (m: typeof now) => m.parts.find(p => p.segment === core)?.revenue ?? 0;
    if (pct(now, core) - pct(later, core) >= 10 && rev(later) >= rev(now)) label = 'meaningful';
    return label;
}

(async () => {
    const names = new Set((await prisma.company.findMany({ where: { isVisible: true }, select: { name: true } })).map(c => c.name));
    const sectors = new Map((await prisma.company.findMany({ select: { name: true, sector: true } })).map(c => [c.name, c.sector]));
    const files = fs.existsSync(IN) ? fs.readdirSync(IN).filter(f => f.endsWith('.json')) : [];
    const good: BusinessShift[] = [];
    for (const f of files) {
        const s: BusinessShift = JSON.parse(fs.readFileSync(path.join(IN, f), 'utf8'));
        const bad = check(s, names);
        if (bad.length) { console.log(`✗ ${f}: ${bad.join('; ')}`); continue; }
        const shift = shiftFromMix(s);
        good.push({ ...s, shift, asOf: s.asOf || today });
        console.log(`✓ ${s.company}: ${shift}${shift !== s.shift ? ` (researcher said ${s.shift})` : ''}, ${s.confidence} — ${s.headline}`);
    }

    // Keep write-ups already live that this run did not replace.
    const store = JSON.parse(fs.readFileSync(OUT, 'utf8')) as { updated: string; shifts: BusinessShift[] };
    const merged = new Map(store.shifts.map(s => [s.company, s]));
    for (const s of good) merged.set(s.company, s);
    store.shifts = [...merged.values()].sort((a, b) => a.company.localeCompare(b.company));
    store.updated = today;

    // Each watch item becomes a tracked expectation (replacing this company's earlier shift items).
    const raw = fs.readFileSync(CP, 'utf8');
    const cp = JSON.parse(raw) as { checkpoints: any[] };
    let added = 0;
    for (const s of good) {
        const prefix = `${slug(s.company)}-shift-`;
        cp.checkpoints = cp.checkpoints.filter(c => !(c.id.startsWith(prefix) && c.status === 'pending'));
        s.watch.forEach((w, i) => {
            const id = `${prefix}${i + 1}`;
            if (cp.checkpoints.some(c => c.id === id)) return; // already settled; keep it
            cp.checkpoints.push({ id, company: s.company, sector: sectors.get(s.company) || '', text: w.text, due: w.due, createdOn: today, status: 'pending', source: 'business-shift' });
            added++;
        });
    }
    console.log(`\n${good.length} of ${files.length} write-ups pass; ${store.shifts.length} live; ${added} watch items as expectations`);
    if (!DRY) {
        fs.writeFileSync(OUT, JSON.stringify(store, null, 1) + '\n');
        const indent = (raw.match(/\n( +)"/) || [, ' '])[1]!.length;
        let out = JSON.stringify(cp, null, indent) + (raw.endsWith('\n') ? '\n' : '');
        if (raw.includes('\r\n')) out = out.replace(/\n/g, '\r\n');
        fs.writeFileSync(CP, out);
    }
    await prisma.$disconnect();
})();
