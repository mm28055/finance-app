"use client";
import React from 'react';
import { companyHref } from '@/lib/company-link';
import type { Idea, BenchIdea, Scores, Conviction } from '@/lib/top-ideas/types';

export type IdeaRow = Idea & {
    rank: number;
    mcapNow: number | null;
    baseNow: number | null;
    badNow: number | null;
    /** Return a year if the market still pays today's P/E at the sale (profit growth plus dividends only). */
    samePeReturn: number;
    /** Market value at which the normal case earns the target, ₹cr. */
    qualifiesBelow: number;
    call?: string;
    inPortfolio: boolean;
};
export type BenchRow = BenchIdea & { mcapNow: number | null; baseNow: number | null; qualifiesBelow: number | null; call?: string };

const CONVICTION_TONE: Record<Conviction, string> = {
    High: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Medium: 'bg-[#EAF2FB] text-[#4A7AAF] border-[#CFE0F2]',
    Starter: 'bg-amber-50 text-amber-700 border-amber-200',
    'On a dip': 'bg-gray-50 text-gray-600 border-gray-200',
};
const CONVICTION_BLURB: Record<Conviction, string> = {
    High: 'clears 25% with room, and the bad case still makes money',
    Medium: 'close to 25%, or clears it with one weak spot',
    Starter: 'clears 25% but carries a real flag: start small, add on proof',
    'On a dip': "worth owning, but short of 25% at today's price: buy below the value shown",
};
const SCORE_LABEL: Record<keyof Scores, string> = {
    balanceSheet: 'Balance sheet',
    earningsQuality: 'Profit into cash',
    management: 'Management',
    moatRunway: 'Moat and runway',
};
const WEIGHTS_KEY = 'top12Weights';

const pct = (x: number | null | undefined, digits = 1) => x == null ? '—' : `${x >= 0 ? '' : '−'}${Math.abs(x).toFixed(digits)}%`;
const cr = (x: number | null | undefined) => x == null ? '—' : `₹${Math.round(x).toLocaleString('en-IN')}cr`;
const returnTone = (x: number | null, target: number) => x == null ? 'text-gray-400' : x >= target ? 'text-emerald-700' : x >= target - 5 ? 'text-amber-700' : 'text-rose-600';

function Bullets({ title, items, tone = 'text-gray-700' }: { title: string; items: string[]; tone?: string }) {
    if (!items?.length) return null;
    return (
        <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">{title}</p>
            <ul className={`list-disc pl-4 space-y-1 text-xs leading-relaxed ${tone}`}>
                {items.map(t => <li key={t}>{t}</li>)}
            </ul>
        </div>
    );
}

function ScoreBars({ scores, why }: { scores: Scores; why: Record<keyof Scores, string> }) {
    return (
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-6 gap-y-2">
            {(Object.keys(SCORE_LABEL) as (keyof Scores)[]).map(k => (
                <div key={k} title={why[k]}>
                    <div className="flex items-center justify-between text-[11px] text-gray-600">
                        <span>{SCORE_LABEL[k]}</span>
                        <span className="tabular-nums text-gray-500">{scores[k]}/5</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full mt-0.5">
                        <div className={`h-1.5 rounded-full ${scores[k] >= 4 ? 'bg-emerald-500' : scores[k] === 3 ? 'bg-[#6B9FCC]' : 'bg-amber-500'}`} style={{ width: `${scores[k] * 20}%` }} />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{why[k]}</p>
                </div>
            ))}
        </div>
    );
}

function IdeaCard({ r, target }: { r: IdeaRow; target: number }) {
    const growthNote = `${cr(r.profitBase.value)} (${r.profitBase.label}) to ${cr(r.base.fy30Profit)} in FY30, about ${r.base.profitCagr.toFixed(0)}% a year`;
    return (
        <section id={`idea-${r.rank}`} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm scroll-mt-4">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-sm font-semibold text-gray-400 tabular-nums">{r.rank}.</span>
                <a href={companyHref(r.company)} target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-800 hover:text-[#4A7AAF]">{r.company}</a>
                <span className="text-[11px] text-gray-400">{r.theme === r.sector ? r.theme : `${r.theme} · ${r.sector}`}</span>
                <span className={`ml-auto px-2 py-0.5 rounded-md border text-[10px] font-semibold ${CONVICTION_TONE[r.conviction]}`} title={CONVICTION_BLURB[r.conviction]}>{r.conviction} conviction</span>
            </div>
            <p className="text-[13px] text-gray-700 mt-2 leading-relaxed">{r.oneLine}</p>
            {r.call && r.call !== 'own' && r.call !== 'follow' && (
                <p className="text-[11px] text-rose-600 mt-1">Its sector note now says {r.call}: this idea is due a fresh look.</p>
            )}

            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-3 mt-3 bg-gray-50 rounded-lg p-3">
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">Normal case, a year</p>
                    <p className={`text-lg font-semibold tabular-nums ${returnTone(r.baseNow, target)}`}>{pct(r.baseNow)}</p>
                    <p className="text-[10px] text-gray-500 leading-snug">Profit {growthNote}; sold at {r.base.exitPe}× profit. {r.base.exitPeWhy}</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">Bad case, a year</p>
                    <p className={`text-lg font-semibold tabular-nums ${returnTone(r.badNow, target)}`}>{pct(r.badNow)}</p>
                    <p className="text-[10px] text-gray-500 leading-snug">{r.bad.what} FY30 profit {cr(r.bad.fy30Profit)}, sold at {r.bad.exitPe}×.</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400">Price</p>
                    <p className="text-lg font-semibold tabular-nums text-gray-800">{cr(r.mcapNow)}</p>
                    <p className="text-[10px] text-gray-500 leading-snug">
                        Market value today ({cr(r.mcapAtPick)} when picked, {pct(r.base.annualReturn)} a year then).
                        {r.dilution > 0 ? ` Allows for about ${Math.round(r.dilution * 100)}% more shares.` : ''}
                        {r.divYield > 0 ? ` Includes a ${r.divYield.toFixed(1)}% dividend.` : ''}
                    </p>
                    <p className={`text-[10px] mt-1 leading-snug ${r.mcapNow != null && r.mcapNow <= r.qualifiesBelow ? 'text-emerald-700' : 'text-gray-500'}`}>
                        Clears {target}% below about {cr(r.qualifiesBelow)}.
                    </p>
                </div>
            </div>

            <p className="text-[11px] text-gray-500 mt-2">
                If the market still paid today&apos;s P/E in March 2030, profit growth alone would give about <b className="tabular-nums text-gray-700">{pct(r.samePeReturn)}</b> a year;
                the normal case assumes {r.base.exitPe}× instead, the multiple a company expected to grow about {r.base.growthAfterFy30}% a year after FY30 usually gets.
            </p>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-3">
                <Bullets title="Why own it" items={r.whyOwn} />
                <Bullets title="What has to go right" items={r.mustGoRight} />
                <Bullets title="What would end the case" items={r.breaksIt} tone="text-rose-700" />
                <Bullets title="Check in the next results" items={r.nextChecks} />
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100">
                <ScoreBars scores={r.scores} why={r.scoreWhy} />
            </div>
            {r.tailRisk && <p className="text-[11px] text-rose-600 mt-3"><span className="font-semibold">Tail risk:</span> {r.tailRisk}</p>}
            <details className="mt-2">
                <summary className="text-[11px] text-gray-500 cursor-pointer select-none">Every weak point ({r.worstFacts.length})</summary>
                <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[11px] text-gray-600">{r.worstFacts.map(t => <li key={t}>{t}</li>)}</ul>
            </details>
        </section>
    );
}

// The page body: the twelve as a table with your own weights (kept in this browser only), then a
// card per idea, the reserve list and the change log.
export function Top12Board({ ideas, bench, target, limits, method, sellBy, asOf, changes }: {
    ideas: IdeaRow[]; bench: BenchRow[]; target: number; limits: { stock: number; theme: number };
    method: string[]; sellBy: string; asOf: string; changes: { date: string; text: string }[];
}) {
    const [weights, setWeights] = React.useState<Record<string, number>>({});
    React.useEffect(() => {
        try { setWeights(JSON.parse(localStorage.getItem(WEIGHTS_KEY) || '{}')); } catch { /* private window */ }
    }, []);
    const setWeight = (company: string, v: string) => {
        const n = Math.max(0, Math.min(100, Number(v) || 0));
        const next = { ...weights, [company]: n };
        if (!n) delete next[company];
        setWeights(next);
        try { localStorage.setItem(WEIGHTS_KEY, JSON.stringify(next)); } catch { /* private window */ }
    };

    const total = ideas.reduce((s, r) => s + (weights[r.company] || 0), 0);
    const byTheme = new Map<string, number>();
    ideas.forEach(r => byTheme.set(r.theme, (byTheme.get(r.theme) || 0) + (weights[r.company] || 0)));
    const overStock = ideas.filter(r => (weights[r.company] || 0) > limits.stock);
    const overTheme = [...byTheme].filter(([, w]) => w > limits.theme);
    const weighted = total > 0 ? ideas.reduce((s, r) => s + (weights[r.company] || 0) * (r.baseNow ?? 0), 0) / 100 : null;
    const sellYear = new Date(sellBy).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-xs text-gray-600 leading-relaxed">
                <p>
                    Twelve companies from the dashboard that I think can earn about <b>{target}% a year</b> if bought today and sold in {sellYear}.
                    Returns are worked out from what each company should earn in FY30 and the price-to-profit multiple (P/E) the market is likely
                    to pay for it then, which depends on how much growth it still has ahead. They are recomputed from today&apos;s market value, so they change with the price.
                    These are researched ideas for your own checking, not advice: you choose what to buy and how much.
                </p>
                <details className="mt-2">
                    <summary className="cursor-pointer select-none text-gray-500">How these were chosen</summary>
                    <div className="mt-2 space-y-2">{method.map(p => <p key={p}>{p}</p>)}</div>
                </details>
                <p className="mt-2 text-[11px] text-gray-400">Chosen {new Date(asOf).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}; rechecked in each Sunday and Wednesday review.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-xs">
                    <thead>
                        <tr className="text-[10px] uppercase tracking-wider text-gray-400 border-b border-gray-100">
                            <th className="text-left font-medium px-3 py-2">#</th>
                            <th className="text-left font-medium px-2 py-2">Company</th>
                            <th className="text-left font-medium px-2 py-2 max-md:hidden">Theme</th>
                            <th className="text-left font-medium px-2 py-2 max-md:hidden">Conviction</th>
                            <th className="text-right font-medium px-2 py-2" title="Return a year from today's price">Normal</th>
                            <th className="text-right font-medium px-2 py-2" title="Return a year if the likely disappointment happens">Bad</th>
                            <th className="text-right font-medium px-3 py-2">Your weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ideas.map(r => {
                            const w = weights[r.company] || 0;
                            return (
                                <tr key={r.company} className="border-b border-gray-50 last:border-0">
                                    <td className="px-3 py-1.5 text-gray-400 tabular-nums">{r.rank}</td>
                                    <td className="px-2 py-1.5">
                                        <a href={`#idea-${r.rank}`} className="font-medium text-gray-800 hover:text-[#4A7AAF]">{r.company}</a>
                                        {r.inPortfolio && <span className="ml-1.5 px-1 rounded bg-gray-100 text-[9px] text-gray-500" title="In your portfolio">held</span>}
                                    </td>
                                    <td className="px-2 py-1.5 text-gray-500 max-md:hidden">{r.theme}</td>
                                    <td className="px-2 py-1.5 max-md:hidden"><span className={`px-1.5 py-0.5 rounded border text-[10px] font-semibold whitespace-nowrap ${CONVICTION_TONE[r.conviction]}`}>{r.conviction}</span></td>
                                    <td className={`px-2 py-1.5 text-right tabular-nums font-semibold ${returnTone(r.baseNow, target)}`}>{pct(r.baseNow)}</td>
                                    <td className={`px-2 py-1.5 text-right tabular-nums ${returnTone(r.badNow, target)}`}>{pct(r.badNow)}</td>
                                    <td className="px-3 py-1 text-right">
                                        <input
                                            type="number" min={0} max={100} step={1} inputMode="decimal"
                                            value={w || ''} placeholder="0"
                                            onChange={e => setWeight(r.company, e.target.value)}
                                            className={`w-14 px-1.5 py-0.5 rounded border text-right tabular-nums outline-none focus:border-[#6B9FCC] ${w > limits.stock ? 'border-rose-300 text-rose-600' : 'border-gray-200 text-gray-700'}`}
                                        />
                                        <span className="text-gray-400 ml-0.5">%</span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="px-3 py-2 border-t border-gray-100 text-[11px] text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                    <span>Invested <b className="tabular-nums text-gray-700">{total.toFixed(0)}%</b>{total < 100 ? ` · cash ${(100 - total).toFixed(0)}%` : ''}</span>
                    {weighted != null && <span>Your mix&apos;s normal case: <b className="tabular-nums text-gray-700">{pct(weighted, 1)}</b> a year on the invested part</span>}
                    {total > 100 && <span className="text-rose-600">Weights add up to more than 100%.</span>}
                    {overStock.map(r => <span key={r.company} className="text-rose-600">{r.company} is above your {limits.stock}% limit for one stock.</span>)}
                    {overTheme.map(([t, w]) => <span key={t} className="text-rose-600">{t} is {w.toFixed(0)}%, above your {limits.theme}% limit for one sector.</span>)}
                    {total > 0 && <span className="basis-full text-gray-400">By theme: {[...byTheme].filter(([, w]) => w > 0).map(([t, w]) => `${t} ${w.toFixed(0)}%`).join(' · ')}. Weights are saved in this browser only.</span>}
                </div>
            </div>

            {ideas.map(r => <IdeaCard key={r.company} r={r} target={target} />)}

            {bench.length > 0 && (
                <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-800">Reserve list</h2>
                    <p className="text-[11px] text-gray-400 mb-2">Good businesses that miss the twelve today, mostly on price. Each shows the market value at which its normal case would earn {target}% a year.</p>
                    <ul>
                        {bench.map(b => (
                            <li key={b.company} className="py-2 border-b border-gray-100 last:border-0 text-xs">
                                <div className="flex flex-wrap items-baseline gap-x-2">
                                    <a href={companyHref(b.company)} target="_blank" rel="noreferrer" className="font-semibold text-gray-800 hover:text-[#4A7AAF]">{b.company}</a>
                                    <span className="text-[11px] text-gray-400">{b.theme}</span>
                                    <span className={`ml-auto tabular-nums ${returnTone(b.baseNow, target)}`}>{pct(b.baseNow)} a year at today&apos;s price</span>
                                </div>
                                <p className="text-gray-600 mt-0.5">{b.why}</p>
                                {b.qualifiesBelow != null && (
                                    <p className="text-[11px] text-gray-500 mt-0.5">
                                        Qualifies below about {cr(b.qualifiesBelow)} of market value; today {cr(b.mcapNow)}
                                        {b.mcapNow != null && b.mcapNow <= b.qualifiesBelow ? <span className="text-emerald-700 font-semibold"> · now inside the range</span> : ''}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {changes.length > 0 && (
                <section className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-800 mb-2">Changes</h2>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                        {changes.map(c => <li key={c.date + c.text}><span className="text-gray-400 tabular-nums mr-2">{c.date}</span>{c.text}</li>)}
                    </ul>
                </section>
            )}
        </div>
    );
}
