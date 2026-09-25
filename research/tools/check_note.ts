// Cloud-safe note checker (no database).
// Usage: npx tsx research/tools/check_note.ts <exportName> <file-without-.ts> <sector-slug>
// Checks: verdict names match the company list in research/tasks/<slug>.md; every company is in
// myGrowth and named in the closing; bold markers balanced; no hard-coded "P/E 28"-style multiples;
// and prints each company's price label (Fits / Full / Stretched) from the P/E at writing,
// using the same rule as the live table on the site.
import * as fs from 'fs';
import * as path from 'path';

const [exp, file, slug] = process.argv.slice(2);
const root = path.join(__dirname, '..', '..');
const mod = require(path.join(root, 'lib', 'sector-overviews', file));
const o = mod[exp];
if (!o) throw new Error(`export ${exp} not found in ${file}`);

const task = fs.readFileSync(path.join(root, 'research', 'tasks', slug + '.md'), 'utf-8');
const listed = [...task.matchAll(/^\d+\.\s+(.+?)\s+\|/gm)].map(m => m[1].trim());

const vn: string[] = o.verdicts.map((v: any) => v.company);
const unmatched = vn.filter(n => !listed.includes(n));
const uncovered = listed.filter(n => !vn.includes(n));

const STOP = new Set(['india', 'industries', 'limited', 'ltd', 'the', 'and', 'of', 'engineering', 'systems', 'technologies', 'tech']);
const keys = (n: string) => {
    const words = n.replace(/[().&]/g, ' ').split(/\s+/).filter(Boolean);
    const first = words.find(w => !STOP.has(w.toLowerCase())) || words[0];
    return [n, n.replace(/\s*\(.*\)$/, ''), first, words.slice(0, 2).join(' ')];
};
const closing = [...(o.closing?.body || []), o.closing?.bottomLine || ''].join(' ');
const notInClosing = vn.filter(n => !keys(n).some(k => closing.includes(k)));

const json = JSON.stringify(o);
const bold = (json.match(/\*\*/g) || []).length;
const multiples = [...JSON.stringify(o.sections).matchAll(/.{30}(P\/E|EV\/EBITDA) (of )?(about )?\d[\d.]*x?.{20}/g)].map(m => m[0]);

const my = o.valuation?.myGrowth || {};
const noGrowthKey = vn.filter(n => !(n in my));

console.log(`${o.sector}: ${vn.length} verdicts / ${listed.length} companies in task`);
console.log(`  unmatched: ${unmatched.join(', ') || 'none'}`);
console.log(`  uncovered: ${uncovered.join(', ') || 'none'}`);
console.log(`  not in closing: ${notInClosing.join(', ') || 'none'}`);
console.log(`  missing from myGrowth: ${noGrowthKey.join(', ') || 'none'}`);
console.log(`  bold markers: ${bold} (${bold % 2 ? 'UNBALANCED' : 'balanced'})`);
console.log(`  possible hard-coded multiples: ${multiples.length ? '\n    ' + multiples.join('\n    ') : 'none'}`);

// Price labels, same rule as the site: needed = (PE × 0.1726)^0.1 − 1; Fits if mine − needed ≥ −2, Full if ≥ −6.
console.log('\n  Company | call | my growth | needs | label');
const inputs = o.valuation?.inputs || {};
for (const v of o.verdicts) {
    const inp = inputs[v.company];
    const pe = inp?.peAtWriting;
    const g = my[v.company];
    const loss = inp?.lossMaking || (inp?.ttmEbitda != null && inp.ttmEbitda <= 0);
    let needed: number | null = null, label = '—';
    if (pe && pe > 0 && !loss) {
        needed = (Math.pow(pe * 0.1726, 0.1) - 1) * 100;
        if (g != null) { const gap = g - needed; label = gap >= -2 ? 'Fits' : gap >= -6 ? 'Full' : 'Stretched'; }
    }
    const call = (closing.match(new RegExp(`\\*\\*${v.company.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^*]*:\\s*(\\w+)`)) || [])[1] || '?';
    console.log(`  ${v.company} | ${call} | ${g ?? '—'} | ${needed == null ? '—' : needed.toFixed(1) + '%'} | ${label}${!inp ? ' (NOT IN VALUATION INPUTS)' : ''}`);
}
