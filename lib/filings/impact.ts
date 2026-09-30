// Which material filings can move a company's share price. Judged by Gemini Flash in batches,
// with the company's 12-month sales and market value so "large" is relative to its size.
// Used by the nightly filings job (new filings) and once to mark the existing digest.
import { geminiScreen } from '../gemini';
import type { MaterialFiling } from './types';

export interface SizeInfo { sales?: number | null; mcap?: number | null }

const RULES = `These filings were already judged material. Now pick only the ones an investor would expect to MOVE THE SHARE
PRICE on the day ("high"). Be strict: typically only about one in four is "high".
"high" when:
- Record or sharply higher/lower monthly or quarterly sales, production or volumes (e.g. "highest ever monthly turnover").
- Any promoter or promoter-group purchase or sale of shares, however small; any new pledge, increase or release.
- A fund, institution or large investor taking or dropping a stake of about 2% or more.
- An order or contract worth about 10% or more of yearly sales (use the sales given), or a first order that opens a big new market.
- Commercial production or commissioning of a plant or project that is large for the company's size; a big delay or cancellation.
- Appointment or exit of the CEO, MD, CFO or chairman (not other directors, company secretaries or business heads).
- A credit-rating upgrade or downgrade (not a reaffirmation or a routine outlook note); an auditor resigning or qualifying.
- Fund-raises, preferential issues, QIPs, rights or warrants of 5% or more dilution; buybacks; bonus or split.
- Acquisitions, disposals, demergers or mergers with outside parties that are large for the company (not internal subsidiary mergers).
- Large legal, tax or regulatory outcomes (big demands, bans, US FDA outcomes); fires or plant shutdowns.
- A change to guidance or outlook.
Everything else is "normal".`;

/** Marks each filing high/normal with a one-line reason. Filings already marked are left alone. */
export async function classifyImpact(filings: MaterialFiling[], size: (company: string) => SizeInfo, batch = 30): Promise<number> {
    const todo = filings.filter(f => !f.impact);
    let done = 0;
    for (let i = 0; i < todo.length; i += batch) {
        const chunk = todo.slice(i, i + batch);
        const lines = chunk.map((f, j) => {
            const s = size(f.company);
            const sz = [s.sales ? `sales 12m ₹${Math.round(s.sales)}cr` : '', s.mcap ? `market value ₹${Math.round(s.mcap)}cr` : ''].filter(Boolean).join(', ');
            return `${j}. ${f.company}${sz ? ` (${sz})` : ''} | ${f.category} | ${f.headline} | ${f.summary}`;
        }).join('\n');
        const prompt = `${RULES}

Classify each filing below. Reply with JSON only: [{"i": <number>, "impact": "high" | "normal", "why": "<at most 12 words>"}].

${lines}`;
        try {
            const res = await geminiScreen.generateContent(prompt);
            const raw = res.response.text();
            const arr = JSON.parse(raw.slice(raw.indexOf('['), raw.lastIndexOf(']') + 1)) as { i: number; impact: string; why?: string }[];
            for (const r of arr) {
                const f = chunk[r.i];
                if (!f) continue;
                f.impact = r.impact === 'high' ? 'high' : 'normal';
                if (r.why) f.impactWhy = String(r.why).slice(0, 120);
                done++;
            }
        } catch (e: any) {
            console.warn(`  impact batch ${i / batch + 1} failed: ${e.message}`);
        }
    }
    return done;
}
