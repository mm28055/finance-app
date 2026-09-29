"use client";
import React from 'react';

type Holder = { name: string; values: Record<string, number> };
type Data = { periods: string[]; groups: Record<string, Holder[]> };

const GROUP_LABEL: Record<string, string> = {
    promoters: 'Promoters',
    foreign_institutions: 'Foreign institutions (FII)',
    domestic_institutions: 'Domestic institutions (DII)',
    public: 'Public',
};

const pct = (v: number) => `${Number(v.toFixed(2))}%`;

// The named shareholders behind "Who owns it": everyone above 1% in each group, with the
// change on the previous quarter and who came in or left. Loaded when the tab is opened.
export function HolderNames({ companyId }: { companyId: string }) {
    const [data, setData] = React.useState<Data | null | 'error'>(null);
    React.useEffect(() => {
        fetch(`/api/companies/${companyId}/holders`)
            .then(r => (r.ok ? r.json() : Promise.reject()))
            .then(setData)
            .catch(() => setData('error'));
    }, [companyId]);

    if (data === null) return <p className="text-[11px] text-gray-400 py-4 text-center">Loading shareholders…</p>;
    if (data === 'error') return <p className="text-[11px] text-gray-400 py-4 text-center">Shareholder names unavailable.</p>;
    const latest = data.periods[data.periods.length - 1];
    const prev = data.periods[data.periods.length - 2];
    const any = Object.values(data.groups).some(g => g.length);
    if (!latest || !any) return <p className="text-[11px] text-gray-400 py-4 text-center">No shareholder above 1% is named.</p>;

    const cols = data.periods.slice(-8);
    const short = (p: string) => p.replace(/\s+\d{2}(\d{2})$/, " '$1");
    const cell = (v: number | undefined) => (v === undefined ? '–' : pct(v));

    return (
        <div className="flex flex-col gap-3">
            {Object.entries(GROUP_LABEL).map(([key, label]) => {
                const list = data.groups[key] || [];
                const current = list.filter(h => h.values[latest] !== undefined).sort((a, b) => b.values[latest] - a.values[latest]);
                const exited = prev ? list.filter(h => h.values[latest] === undefined && h.values[prev] !== undefined) : [];
                if (!current.length && !exited.length) return null;
                return (
                    <div key={key}>
                        <p className="text-[10px] font-semibold text-gray-500 mb-1">{label}</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-[11px] tabular-nums">
                                <thead>
                                    <tr className="text-[10px] text-gray-400">
                                        <th className="text-left font-medium py-0.5 pr-2 sticky left-0 bg-white" />
                                        {cols.map(c => <th key={c} className={`text-right font-medium py-0.5 px-1.5 whitespace-nowrap ${c === latest ? 'text-gray-600' : ''}`}>{short(c)}</th>)}
                                        <th className="text-right font-medium py-0.5 pl-1.5 whitespace-nowrap">Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...current, ...exited].map(h => {
                                        const now = h.values[latest];
                                        const was = prev ? h.values[prev] : undefined;
                                        const out = now === undefined;
                                        const change = now !== undefined && was !== undefined ? now - was : null;
                                        return (
                                            <tr key={h.name} className={`border-t border-gray-50 ${out ? 'text-gray-400' : ''}`}>
                                                <td className="py-1 pr-2 text-gray-700 sticky left-0 bg-white min-w-[10rem]">
                                                    {h.name}
                                                    {prev && !out && was === undefined && <span className="ml-1.5 px-1 rounded bg-emerald-50 text-emerald-600 text-[9px] font-semibold">NEW</span>}
                                                    {out && <span className="ml-1.5 px-1 rounded bg-rose-50 text-rose-400 text-[9px] font-semibold">EXITED</span>}
                                                </td>
                                                {cols.map(c => (
                                                    <td key={c} className={`py-1 px-1.5 text-right whitespace-nowrap ${c === latest ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                                                        {c === latest && out ? 'below 1%' : cell(h.values[c])}
                                                    </td>
                                                ))}
                                                <td className={`py-1 pl-1.5 text-right whitespace-nowrap ${change === null || Math.abs(change) < 0.01 ? 'text-gray-300' : change > 0 ? 'text-emerald-600' : 'text-rose-400'}`}>
                                                    {change === null || Math.abs(change) < 0.01 ? '–' : `${change > 0 ? '+' : ''}${Number(change.toFixed(2))}`}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            })}
            <p className="text-[10px] text-gray-400">
                Change is {latest} against {prev ?? 'the quarter before'}. Only holders above 1% are named in the filing; "–" means below 1% that quarter, and "exited" means below 1% now, not necessarily sold out.
            </p>
        </div>
    );
}
