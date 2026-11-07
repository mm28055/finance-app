/**
 * Counts the Gemini tokens each script uses, so the cost of each nightly job can be read off
 * (scripts/gemini-usage.ts). Added 7 Nov 2026 to measure the jobs before deciding whether any
 * should move to the owner's Claude plan.
 *
 * Every answer that comes through lib/gemini.ts (and every batch answer collected by
 * lib/call-batch.ts) is added to a tally for this process. When a script under scripts/ ends,
 * the tally is added to SystemConfig GEMINI_USAGE: one row per day, script and model, kept 60 days.
 * Nothing is recorded for the website itself (chat, card opens).
 */

export interface UsageRow {
    day: string;          // IST date, YYYY-MM-DD
    job: string;          // script name, e.g. sync-filings
    model: string;        // the model Google says answered (modelVersion)
    batch: boolean;       // half price
    calls: number;
    input: number;        // prompt tokens
    output: number;       // answer tokens, without thinking
    thinking: number;     // thinking tokens (billed as output)
    searches: number;     // Google Search queries made by grounded answers
}

const KEY = 'GEMINI_USAGE';
const KEEP_DAYS = 60;

const script = process.argv[1] || '';
// Only scripts are measured, never the Next.js server.
const JOB = !process.env.NEXT_RUNTIME && /[\\/]scripts[\\/]/.test(script)
    ? script.replace(/^.*[\\/]/, '').replace(/\.(tmp\.)?[cm]?[jt]s$/, '')
    : null;

const tally = new Map<string, UsageRow>();
let hooked = false;

function istDay(): string {
    return new Date(Date.now() + 330 * 60000).toISOString().slice(0, 10);
}

/** Adds one answer's usage. `response` is the API's response object (the part with usageMetadata). */
export function recordGeminiUsage(response: any, fallbackModel: string, batch = false, job: string | null = JOB) {
    if (!JOB || !job || !response) return;
    const u = response.usageMetadata || {};
    const model = String(response.modelVersion || fallbackModel);
    const searches = (response.candidates || []).reduce((n: number, c: any) => n + (c?.groundingMetadata?.webSearchQueries?.length || 0), 0);
    const day = istDay();
    const k = `${day}|${job}|${model}|${batch}`;
    const row = tally.get(k) || { day, job, model, batch, calls: 0, input: 0, output: 0, thinking: 0, searches: 0 };
    row.calls++;
    row.input += u.promptTokenCount || 0;
    row.output += u.candidatesTokenCount || 0;
    row.thinking += u.thoughtsTokenCount || 0;
    row.searches += searches;
    tally.set(k, row);
    if (!hooked) {
        hooked = true;
        // beforeExit runs once the script's own work is done (it does not run on process.exit()).
        process.once('beforeExit', () => { flushGeminiUsage().catch(e => console.warn(`[Gemini usage] not saved: ${e.message}`)); });
    }
}

/** Adds this process's tally to the stored log. Safe to call more than once. */
export async function flushGeminiUsage() {
    if (!tally.size) return;
    const rows = [...tally.values()];
    tally.clear();
    const { prisma } = await import('./prisma');
    const cur = await prisma.systemConfig.findUnique({ where: { key: KEY } });
    let log: UsageRow[] = [];
    try { log = cur ? JSON.parse(cur.value) : []; } catch { log = []; }
    for (const r of rows) {
        const same = log.find(l => l.day === r.day && l.job === r.job && l.model === r.model && l.batch === r.batch);
        if (same) for (const f of ['calls', 'input', 'output', 'thinking', 'searches'] as const) same[f] += r[f];
        else log.push(r);
    }
    const cutoff = new Date(Date.now() - KEEP_DAYS * 86400000).toISOString().slice(0, 10);
    log = log.filter(l => l.day >= cutoff);
    const value = JSON.stringify(log);
    await prisma.systemConfig.upsert({ where: { key: KEY }, update: { value }, create: { key: KEY, value } });
    await prisma.$disconnect();
    console.log(`[Gemini usage] ${rows.reduce((n, r) => n + r.calls, 0)} answers recorded for ${rows[0].job}.`);
}
