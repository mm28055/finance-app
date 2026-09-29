import { CHECKPOINTS, dueRank, formatTarget, type Checkpoint } from "@/lib/checkpoints";
import { STATUS_STYLE } from "@/components/checkpoint-status";

export const metadata = { title: "Scorecard · Manish Dashboard" };

// Results-season scorecard: every expectation the notes set, grouped by the quarter
// that settles it, with how many came true. Hit rate counts "partly" as half.
function hitRate(list: Checkpoint[]) {
    const met = list.filter(c => c.status === 'met').length;
    const partly = list.filter(c => c.status === 'partly').length;
    const missed = list.filter(c => c.status === 'missed').length;
    const judged = met + partly + missed;
    return { met, partly, missed, judged, rate: judged ? Math.round(((met + partly / 2) / judged) * 100) : null };
}

function Row({ c }: { c: Checkpoint }) {
    const s = STATUS_STYLE[c.status];
    const Icon = s.icon;
    const target = formatTarget(c);
    return (
        <li className="flex items-start gap-2 py-2 border-b border-gray-100 last:border-0 text-xs">
            <Icon className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${s.cls}`} />
            <div className="flex-1 min-w-0">
                <p className="text-gray-700"><span className="font-semibold text-gray-800">{c.company}</span> · {c.text}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">
                    {c.sector}
                    {c.actual ? ` · actual ${c.actual}` : ''}
                    {target ? ` · expected ${target}` : ''}
                    {c.resolvedBy ? ` · judged ${c.resolvedBy === 'auto' ? 'from filed results' : 'in review'}` : ''}
                    {c.outcome ? ` · ${c.outcome}` : ''}
                </p>
                {c.revisions?.map(r => (
                    <p key={r.on + r.text} className="text-[10px] text-violet-500 mt-0.5">Management changed this ({r.on}): {r.text}</p>
                ))}
            </div>
        </li>
    );
}

export default function Scorecard() {
    const live = CHECKPOINTS;
    const overall = hitRate(live);
    const quarters = [...new Set(live.map(c => c.due.replace(/^H1 /, 'Q2 ').replace(/^H2 /, 'Q4 ')))]
        .sort((a, b) => dueRank(a) - dueRank(b)); // soonest first: the season in progress on top
    const order = { missed: 0, partly: 1, met: 2, pending: 3 } as const;

    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Scorecard</h1>
                    <p className="text-gray-400 text-xs">What the notes expected, and what happened</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>

            <div className="max-w-4xl flex flex-col gap-6">
                <div className="flex flex-wrap gap-6 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    {[
                        ['Hit rate', overall.rate == null ? '—' : `${overall.rate}%`],
                        ['Met', String(overall.met)],
                        ['Partly', String(overall.partly)],
                        ['Missed', String(overall.missed)],
                        ['Pending', String(live.length - overall.judged)],
                    ].map(([k, v]) => (
                        <div key={k}>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">{k}</p>
                            <p className="text-xl font-semibold text-gray-800 tabular-nums">{v}</p>
                        </div>
                    ))}
                    <p className="basis-full text-[11px] text-gray-400">
                        Numbers are checked automatically each evening once a quarter&apos;s results are filed; the rest are judged in the weekly review. Partly counts as half.
                    </p>
                </div>

                {quarters.map(q => {
                    const list = live
                        .filter(c => c.due.replace(/^H1 /, 'Q2 ').replace(/^H2 /, 'Q4 ') === q)
                        .sort((a, b) => order[a.status] - order[b.status] || a.company.localeCompare(b.company));
                    const hr = hitRate(list);
                    const settled = list.filter(c => c.status !== 'pending');
                    const pending = list.filter(c => c.status === 'pending');
                    return (
                        <section key={q} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                            <div className="flex items-baseline justify-between mb-2">
                                <h2 className="text-sm font-semibold text-gray-800">{q}</h2>
                                <span className="text-[11px] text-gray-500 tabular-nums">
                                    {hr.judged ? `${hr.rate}% hit · ${hr.met} met, ${hr.partly} partly, ${hr.missed} missed · ` : ''}{pending.length} pending
                                </span>
                            </div>
                            {settled.length > 0 && <ul>{settled.map(c => <Row key={c.id} c={c} />)}</ul>}
                            {pending.length > 0 && (
                                <details className="mt-1">
                                    <summary className="text-xs text-gray-500 cursor-pointer select-none">Pending ({pending.length})</summary>
                                    <ul>{pending.map(c => <Row key={c.id} c={c} />)}</ul>
                                </details>
                            )}
                        </section>
                    );
                })}
                {!quarters.length && <p className="text-sm text-gray-400">No checkpoints yet.</p>}
            </div>
        </main>
    );
}
