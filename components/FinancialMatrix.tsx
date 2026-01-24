import React from 'react';

// Types for the Matrix Data
export interface FinancialMetric {
    currentQ: number;
    ytd: number;
    deltaQoQ: number; // Percentage (e.g., 5.5 for 5.5%)
    deltaYoY: number;
    deltaYTD: number;
}

export interface CompanyFinancials {
    revenue: FinancialMetric;
    ebitda: FinancialMetric;
    ebitdaMargin: FinancialMetric; // Margins are also metrics here
    pat: FinancialMetric;
    patMargin: FinancialMetric;
}

const ArrowValue = ({ val }: { val: number | undefined }) => {
    if (val === undefined || val === null) return <span className="text-neutral-500">-</span>;
    const isPos = val > 0;
    const isNeg = val < 0;
    // Clamp for PAT
    const displayVal = Math.min(Math.max(val, -200), 200).toFixed(1);

    return (
        <span className={`font-mono text-xs ${isPos ? 'text-green-400' : isNeg ? 'text-red-400' : 'text-neutral-400'}`}>
            {isPos ? '↑' : isNeg ? '↓' : ''} {Math.abs(Number(displayVal))}%
        </span>
    );
};

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
        notation: "compact"
    }).format(val);
};

export const FinancialMatrix = ({ data }: { data: CompanyFinancials }) => {
    const rows = [
        { label: "Revenue", metric: data.revenue },
        { label: "EBITDA", metric: data.ebitda },
        { label: "EBITDA Mgn", metric: data.ebitdaMargin, isPercent: true },
        { label: "PAT", metric: data.pat },
        { label: "PAT Mgn", metric: data.patMargin, isPercent: true },
    ];

    return (
        <div className="bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden">
            <div className="bg-neutral-800 px-3 py-2 text-xs font-semibold text-neutral-300 border-b border-neutral-700">
                Financial Performance (Q3 FY25)
            </div>
            <table className="w-full text-sm text-left">
                <thead className="bg-neutral-900 text-neutral-500 text-xs uppercase">
                    <tr>
                        <th className="px-3 py-2">Metric</th>
                        <th className="px-3 py-2 text-right">Curr Q</th>
                        <th className="px-3 py-2 text-right">YTD</th>
                        <th className="px-3 py-2 text-right">Δ QoQ</th>
                        <th className="px-3 py-2 text-right">Δ YoY</th>
                        <th className="px-3 py-2 text-right">Δ YTD</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                    {rows.map((r, i) => (
                        <tr key={r.label} className="hover:bg-neutral-800/50">
                            <td className="px-3 py-2 font-medium text-neutral-300">{r.label}</td>
                            <td className="px-3 py-2 text-right font-mono text-neutral-200">
                                {r.isPercent ? `${r.metric.currentQ}%` : formatCurrency(r.metric.currentQ)}
                            </td>
                            <td className="px-3 py-2 text-right font-mono text-neutral-400">
                                {r.isPercent ? `${r.metric.ytd}%` : formatCurrency(r.metric.ytd)}
                            </td>
                            <td className="px-3 py-2 text-right"><ArrowValue val={r.metric.deltaQoQ} /></td>
                            <td className="px-3 py-2 text-right"><ArrowValue val={r.metric.deltaYoY} /></td>
                            <td className="px-3 py-2 text-right"><ArrowValue val={r.metric.deltaYTD} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
