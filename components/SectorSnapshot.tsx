"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { EnrichedCompany } from './SectorList';

interface SectorSnapshotProps {
    sectorName: string;
    companies: EnrichedCompany[];
}

export function SectorSnapshot({ sectorName, companies }: SectorSnapshotProps) {
    const [viewMode, setViewMode] = React.useState<'QUARTERLY' | 'YTD'>('QUARTERLY');

    // The quarter most companies here have reported; anyone still on an older
    // one is marked, so a March quarter isn't ranked as if it were June's.
    const quarterRank = (q?: string) => {
        const m = q?.match(/^Q([1-4]) FY(\d{2})$/);
        return m ? Number(m[2]) * 10 + Number(m[1]) : -1;
    };
    const newestQ = (companies || []).reduce<string | undefined>(
        (best, co) => (quarterRank(co.financialsQuarter) > quarterRank(best) ? co.financialsQuarter : best), undefined);

    const data = (companies || []).map(co => {
        let name = co.name || "N/A";
        // Clean common suffixes to save space
        name = name.replace(/ (Limited|Ltd|Corporation|Corp|Technologies|Tech|Systems|India)\.?/gi, '').trim();
        const stale = !!co.financialsQuarter && !!newestQ && co.financialsQuarter !== newestQ;
        const base = name.length > (stale ? 14 : 20) ? name.substring(0, stale ? 12 : 18) + '…' : name;
        const truncatedName = stale ? `${base} (${co.financialsQuarter!.replace(' FY', "'")})` : base;

        return {
            name: truncatedName,
            // Quarter Data
            revenueQ: co.financials?.revenue?.currentQ || 0,
            ebitdaQ: co.financials?.ebitda?.currentQ || 0,
            patQ: co.financials?.pat?.currentQ || 0,

            // YTD Data
            revenueYTD: co.financials?.revenue?.ytd || 0,
            ebitdaYTD: co.financials?.ebitda?.ytd || 0,
            patYTD: co.financials?.pat?.ytd || 0,

            // Margins (Common)
            margin: co.financials?.ebitdaMargin?.currentQ || 0,

            // Sorting Metric (Dynamic)
            sortVal: viewMode === 'QUARTERLY'
                ? (co.financials?.revenue?.currentQ || 0)
                : (co.financials?.revenue?.ytd || 0)
        };
    }).sort((a, b) => b.sortVal - a.sortVal);

    const fmt = (val: number) => {
        if (Math.abs(val) >= 1000) return `₹${(val / 1000).toFixed(1)}k`;
        return `₹${val.toFixed(0)}`;
    };

    // Calculate dynamic height based on number of items
    const minHeight = 220;
    const itemHeight = 36; // Increased height per bar for better spacing
    const dynamicHeight = Math.max(minHeight, data.length * itemHeight + 60);

    const MiniChart = ({ dataKey, color, title, showAxis = false, showMargin = false }: any) => (
        <div className="flex-1" style={{ height: '100%', minWidth: 0 }}>
            <div className={`text-[9px] text-gray-500 uppercase font-semibold mb-2 border-b border-gray-100 pb-1 ${!showAxis ? 'ml-0' : ''}`}>
                {title}
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 0, right: 60, left: 10, bottom: 20 }}
                >
                    <XAxis type="number" hide />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={130} // Consistent width for alignment
                        tick={{ fill: '#4B5563', fontSize: 9, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                        hide={!showAxis}
                    />
                    <Tooltip
                        cursor={{ fill: '#F9FAFB' }}
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', fontSize: '10px', borderRadius: '8px', zIndex: 100 }}
                    />
                    <Bar dataKey={dataKey} fill={color} radius={[0, 4, 4, 0]} barSize={18}>
                        <LabelList
                            dataKey={dataKey}
                            position="right"
                            content={(props: any) => {
                                const { value, index, x, y, width, height } = props;
                                const row = data[index];
                                // Show margin relative to Revenue? Or just raw margin if margin column?
                                // Logic: If referencing row.revenueQ or revenueYTD based on mode
                                const rev = viewMode === 'QUARTERLY' ? row.revenueQ : row.revenueYTD;
                                const marginVal = showMargin && rev ? ((value / rev) * 100).toFixed(1) + '%' : '';

                                // Losses draw leftwards from zero, so the label goes just
                                // right of the zero line, in red, never on top of the bar.
                                const negative = Number(value) < 0;
                                return (
                                    <text x={Math.max(x, x + width) + 4} y={y + height / 2 + 1} fill={negative ? '#B42323' : color} fontSize={8} fontWeight={700} dominantBaseline="middle">
                                        {fmt(value)} {showMargin && marginVal && <tspan fill="#6B7280" fontWeight={400}>({marginVal})</tspan>}
                                    </text>
                                );
                            }}
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div className="mb-3 ml-5 bg-white border border-gray-200 rounded-xl overflow-hidden animate-in slide-in-from-top-1 duration-200 shadow-sm">
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B9FCC]"></span>
                    {sectorName} Leaderboard
                </h3>

                {/* View Toggle */}
                <div className="flex bg-gray-200/50 p-0.5 rounded-lg">
                    <button
                        onClick={() => setViewMode('QUARTERLY')}
                        className={`text-[9px] px-2 py-0.5 rounded-md font-medium transition-all ${viewMode === 'QUARTERLY'
                            ? 'bg-white text-gray-700 shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        Quarterly
                    </button>
                    <button
                        onClick={() => setViewMode('YTD')}
                        className={`text-[9px] px-2 py-0.5 rounded-md font-medium transition-all ${viewMode === 'YTD'
                            ? 'bg-white text-gray-700 shadow-sm'
                            : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        YTD view
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 px-3 pb-3 pt-4" style={{ height: 'auto', minHeight: `${dynamicHeight}px` }}>
                {viewMode === 'QUARTERLY' ? (
                    <>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="revenueQ" color="#4A90E2" title="Revenue (Q)" showAxis={true} />
                        </div>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="ebitdaQ" color="#10B981" title="EBITDA (Q)" showMargin={true} />
                        </div>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="patQ" color="#F59E0B" title="PAT (Q)" showMargin={true} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="revenueYTD" color="#6366F1" title="Revenue (YTD)" showAxis={true} />
                        </div>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="ebitdaYTD" color="#10B981" title="EBITDA (YTD)" showMargin={true} />
                        </div>
                        <div className="flex-1" style={{ height: dynamicHeight }}>
                            <MiniChart dataKey="patYTD" color="#F59E0B" title="PAT (YTD)" showMargin={true} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
