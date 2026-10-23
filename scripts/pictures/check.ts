// Mechanical checks on capacity pictures: the sums, the percentages, the labels against the
// numbers they label, every project and milestone present, and the fingerprint still current.
// Usage: npx tsx scripts/pictures/check.ts [--stale-ok] [pictures.json | a draft file | dir of <slug>.json drafts]
// Prints problems per company; exits 1 if any errors.
import fs from 'fs';
import path from 'path';
import { projectsFor, capacityFor, pictureFingerprint, type CapacityPictureData } from '../../lib/projects';
import { checkpointsFor } from '../../lib/checkpoints';

const num = (s: string): number[] => (s.replace(/(\d),(?=\d)/g, '$1').match(/\d+(\.\d+)?/g) || []).map(Number);
const near = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol;

export function checkPicture(p: CapacityPictureData): { errors: string[]; warnings: string[] } {
    const errors: string[] = [], warnings: string[] = [];
    const projects = projectsFor(p.company);
    const cps = checkpointsFor(p.company);
    const capacity = capacityFor(p.company);
    if (!capacity && !projects.length) errors.push('no such company in capacity/projects');
    if (p.fingerprint !== pictureFingerprint(capacity, projects, cps)) errors.push('fingerprint does not match current facts (stale)');
    if (!p.source) errors.push('no source');

    for (const l of p.lines?.items || []) {
        if (!(l.usedPct >= 0 && l.usedPct <= 100)) errors.push(`line ${l.name}: usedPct ${l.usedPct} outside 0–100`);
        if (l.usedLabel) {
            const n = num(l.usedLabel);
            if (n.length === 1 && !near(n[0], l.usedPct, 0.51)) errors.push(`line ${l.name}: label "${l.usedLabel}" vs usedPct ${l.usedPct}`);
            if (n.length >= 2 && !(l.usedPct >= Math.min(n[0], n[1]) - 0.5 && l.usedPct <= Math.max(n[0], n[1]) + 0.5)) errors.push(`line ${l.name}: usedPct ${l.usedPct} outside label range "${l.usedLabel}"`);
        }
        if (l.marker) {
            if (!(l.marker.pct >= 0 && l.marker.pct <= 100)) errors.push(`line ${l.name}: marker ${l.marker.pct} outside 0–100`);
            const m = num(l.marker.label).filter(x => x <= 100 && /%/.test(l.marker!.label));
            if (m.length && !m.some(x => near(x, l.marker!.pct, 1))) warnings.push(`line ${l.name}: marker ${l.marker.pct} not in label "${l.marker.label}"`);
        }
    }

    for (const a of p.adds || []) {
        if (a.projectId && !projects.some(x => x.id === a.projectId)) errors.push(`adds "${a.heading}": unknown project ${a.projectId}`);
        for (const b of a.bars) {
            const tag = `adds "${b.name}"`;
            if (!(b.base >= 0) || !(b.add > 0)) errors.push(`${tag}: base ${b.base} / add ${b.add} not valid`);
            const bl = num(b.baseLabel), al = num(b.addLabel);
            if (b.base > 0 && bl.length && !bl.some(x => near(x, b.base, b.base * 0.001))) errors.push(`${tag}: baseLabel "${b.baseLabel}" vs base ${b.base}`);
            if (al.length && !al.some(x => near(x, b.add, b.add * 0.001))) errors.push(`${tag}: addLabel "${b.addLabel}" vs add ${b.add}`);
            const pcts = /%/.test(b.right) ? num(b.right.split('%')[0]) : [];
            if (b.base > 0 && pcts.length) {
                const real = (b.add / b.base) * 100;
                const lo = Math.min(...pcts.slice(-2)), hi = Math.max(...pcts.slice(-2));
                if (!(real >= lo - 1.5 && real <= hi + 1.5)) errors.push(`${tag}: says ${b.right} but ${b.add}/${b.base} = +${real.toFixed(1)}%`);
            }
            const to = b.sub.match(/to (?:about |around |nearly |over )?([\d,.]+)/i);
            if (to) {
                const t = num(to[1])[0], sum = b.base + b.add;
                if (t && !near(t, sum, sum * 0.005)) {
                    const about = /about|around|nearly|over/i.test(b.sub);
                    (about && near(t, sum, sum * 0.03) && a.caveat ? warnings : errors).push(`${tag}: "${b.sub}" but ${b.base} + ${b.add} = ${sum}`);
                }
            }
        }
    }

    for (const m of p.money?.items || []) {
        if (m.projectId && !projects.some(x => x.id === m.projectId)) errors.push(`money "${m.name}": unknown project ${m.projectId}`);
        if (m.spent !== undefined && m.total !== undefined && m.spent > m.total) errors.push(`money "${m.name}": spent ${m.spent} > total ${m.total}`);
        if (m.total !== undefined && !num(m.right).some(x => near(x, m.total!, 0.01)) && !num(m.sub || '').some(x => near(x, m.total!, 0.01)) && !num(m.name).some(x => near(x, m.total!, 0.01))) errors.push(`money "${m.name}": total ₹${m.total}cr not shown in its labels`);
        if (m.spent !== undefined && m.spent > 0 && !num(m.right + ' ' + (m.sub || '')).some(x => near(x, m.spent!, 0.01))) errors.push(`money "${m.name}": spent ₹${m.spent}cr not shown in its labels`);
        const pr = projects.find(x => x.id === m.projectId);
        if (pr && m.status && m.status !== 'study' && m.status !== pr.status) errors.push(`money "${m.name}": status ${m.status} but project is ${pr.status}`);
    }

    // Every project appears; every project milestone appears exactly once in the timeline.
    const shown = new Set([...(p.adds || []).map(a => a.projectId), ...(p.money?.items || []).map(m => m.projectId)].filter(Boolean));
    const tlText = JSON.stringify(p.timeline || []) + JSON.stringify(p.notes || []);
    for (const pr of projects) if (!shown.has(pr.id) && !tlText.includes(pr.id)) errors.push(`project ${pr.id} not tied to any bar (set projectId on its money or adds entry)`);
    const ids = new Set(projects.map(x => x.id));
    const ms = cps.filter(c => c.project && ids.has(c.project)).map(c => c.id);
    const placed = (p.timeline || []).flatMap(t => t.milestones || []);
    for (const id of ms) {
        const n = placed.filter(x => x === id).length;
        if (n !== 1) errors.push(`milestone ${id} placed ${n} times (needs exactly 1)`);
    }
    for (const id of placed) if (!ms.includes(id)) errors.push(`timeline milestone ${id} is not one of this company's project milestones`);
    for (const t of p.timeline || []) if (!['done', 'next', 'later', 'maybe'].includes(t.tone)) errors.push(`timeline ${t.when}: bad tone ${t.tone}`);
    const heads = [...(p.adds || []).map(a => a.heading)];
    if (new Set(heads).size !== heads.length) errors.push('duplicate adds headings');
    if (!p.lines && !p.adds?.length && !p.money?.items.length && !p.timeline?.length) errors.push('empty picture');
    return { errors, warnings };
}

if (require.main === module) {
    const staleOk = process.argv.includes('--stale-ok');
    const target = process.argv.slice(2).find(a => !a.startsWith('--')) || 'lib/projects/pictures.json';
    let pics: CapacityPictureData[];
    if (fs.statSync(target).isDirectory()) {
        pics = fs.readdirSync(target).filter(f => f.endsWith('.json') && !f.startsWith('_')).map(f => {
            try { return JSON.parse(fs.readFileSync(path.join(target, f), 'utf8')); } catch { console.log(`${f}: not valid JSON`); return null; }
        }).filter(Boolean).filter((x: { skip?: boolean }) => !x.skip);
    } else {
        const j = JSON.parse(fs.readFileSync(target, 'utf8'));
        pics = (j.pictures || [j]).filter((x: { skip?: boolean }) => !x.skip);
    }
    let bad = 0, warn = 0;
    for (const p of pics) {
        const r = checkPicture(p);
        const stale = r.errors.filter(e => e.startsWith('fingerprint'));
        const errors = staleOk ? r.errors.filter(e => !stale.includes(e)) : r.errors;
        const warnings = staleOk ? [...r.warnings, ...stale.map(() => 'STALE: facts changed since drawn; the site shows the text version until redrawn')] : r.warnings;
        if (errors.length || warnings.length) console.log(`\n${p.company}`);
        errors.forEach(e => console.log('  ERROR ' + e));
        warnings.forEach(w => console.log('  warn  ' + w));
        if (errors.length) bad++;
        if (warnings.length) warn++;
    }
    console.log(`\n${pics.length} checked, ${bad} with errors, ${warn} with warnings`);
    process.exit(bad ? 1 : 0);
}
