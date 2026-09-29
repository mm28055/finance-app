// Checkpoint types and pure helpers, safe to import in the browser (no data file).
export type CheckpointMetric =
    | 'revenueYoY' | 'ebitdaMargin' | 'patYoY' | 'revenue' | 'ebitda' | 'pat' | 'orderBook'
    | 'fyRevenueGrowth' | 'fyEbitdaMargin';
export type CheckpointStatus = 'pending' | 'met' | 'partly' | 'missed' | 'dropped';

export interface Checkpoint {
    id: string;
    company: string;          // the company's key in its note (its stored name)
    sector: string;
    text: string;             // what we expect, in plain words
    metric?: CheckpointMetric;
    op?: '>=' | '<=' | 'between';
    target?: number | [number, number];
    due: string;              // "Q2 FY27", "H1 FY27", "Q4 FY27" (full year)
    ifMet?: string;
    ifMissed?: string;
    createdOn: string;        // yyyy-mm-dd
    status: CheckpointStatus;
    actual?: string;          // "15.2%", "₹412cr", or a short phrase for judged ones
    resolvedOn?: string;
    resolvedBy?: 'auto' | 'review';
    outcome?: string;         // one line: what followed (e.g. "Moved to own")
}

/** Quarter order: "Q2 FY27" → 272; half-years map onto their closing quarter (H1 → Q2, H2 → Q4). */
export function dueRank(due: string): number {
    const m = due.match(/^([QH])([1-4]) FY(\d{2})$/);
    if (!m) return -1;
    const q = m[1] === 'H' ? (m[2] === '1' ? 2 : 4) : Number(m[2]);
    return Number(m[3]) * 10 + q;
}

/** met / partly / missed for a numeric check. "Partly": within a point (percent measures) or 10% (amounts). */
export function judge(actual: number, op: NonNullable<Checkpoint['op']>, target: Checkpoint['target'], percent: boolean): Exclude<CheckpointStatus, 'pending' | 'dropped'> {
    const slack = (t: number) => (percent ? 1 : Math.abs(t) * 0.1);
    if (op === 'between' && Array.isArray(target)) {
        const [lo, hi] = target;
        if (actual >= lo && actual <= hi) return 'met';
        return actual >= lo - slack(lo) && actual <= hi + slack(hi) ? 'partly' : 'missed';
    }
    const t = Array.isArray(target) ? target[0] : (target as number);
    if (op === '>=') return actual >= t ? 'met' : actual >= t - slack(t) ? 'partly' : 'missed';
    return actual <= t ? 'met' : actual <= t + slack(t) ? 'partly' : 'missed';
}

export const PERCENT_METRICS = new Set<CheckpointMetric>(['revenueYoY', 'ebitdaMargin', 'patYoY', 'fyRevenueGrowth', 'fyEbitdaMargin']);

export function formatTarget(c: Checkpoint): string {
    if (!c.op || c.target === undefined) return '';
    const pct = c.metric ? PERCENT_METRICS.has(c.metric) : false;
    const f = (v: number) => (pct ? `${v}%` : `₹${v.toLocaleString('en-IN')}cr`);
    if (c.op === 'between' && Array.isArray(c.target)) return `${f(c.target[0])}–${f(c.target[1])}`;
    const t = Array.isArray(c.target) ? c.target[0] : c.target;
    return `${c.op === '>=' ? 'at least' : 'at most'} ${f(t)}`;
}
