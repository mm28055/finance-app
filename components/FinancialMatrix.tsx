"use client";
import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export interface MetricData {
    currentQ: number | null;
    ytd: number | null;
    deltaQoQ: number | null;
    deltaYoY: number | null;
    deltaYTD: number | null;
}

export interface CompanyFinancials {
    revenue: MetricData;
    ebitda: MetricData;
    ebitdaMargin: MetricData;
    pat: MetricData;

    // Optional / Extra metrics
    financeCost?: MetricData;
    depreciation?: MetricData;
    volGrowth?: MetricData;

    // Simplified to single number as per user request
    orderBook?: number | null;

    guidance?: {
        revenueTarget?: number | null;
        marginTarget?: number | null;
        revenueGrowth?: number | null; // Keep for backward compat if needed, or remove
        pat?: number | null;
    }
}

export function FinancialMatrix({ financials, quarterName }: { financials?: CompanyFinancials, quarterName?: string }) {
    const metrics = [
        {
            name: "Revenue",
            data: financials?.revenue
        },
        {
            name: "EBITDA",
            data: financials?.ebitda
        },
        {
            name: "Margin",
            data: financials?.ebitdaMargin,
            isPercent: true
        },
        {
            name: "PAT",
            data: financials?.pat
        },
        {
            name: "Order Book",
            isOrderBook: true,
            val: financials?.orderBook
        }
    ];

    const fmtVal = (val: number | null | undefined, isPercent?: boolean) => {
        if (val === null || val === undefined) return "-";
        if (isPercent) return `${val}%`;
        return `₹${val.toLocaleString()}cr`;
    };

    const Percentage = ({ val, isBps }: { val: number | null | undefined, isBps?: boolean }) => {
        if (val === null || val === undefined) return <span className="text-gray-300">-</span>;
        const color = val > 0 ? "text-emerald-500" : val < 0 ? "text-red-400" : "text-gray-400";
        const Icon = val > 0 ? ArrowUpRight : val < 0 ? ArrowDownRight : Minus;

        // margin deltas might be in bps if needed, but assuming % for now based on prompt
        const suffix = isBps ? " bps" : "%";

        return (
            <div className={`flex items-center justify-end gap-0.5 font-medium ${color}`}>
                <Icon className="w-3 h-3" />
                {Math.abs(val)}{suffix}
            </div>
        );
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
                <h3 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Financials ({quarterName || 'Latest'})</h3>
                <span className="text-[9px] text-gray-400 font-medium">Consolidated</span>
            </div>

            <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-right text-xs">
                    <thead>
                        <tr className="text-gray-400 border-b border-gray-100 sticky top-0 bg-white shadow-sm z-10">
                            <th className="text-left px-4 py-2 font-medium text-[10px] bg-gray-50/50">Metric</th>
                            <th className="px-3 py-2 font-medium text-[10px] bg-gray-50/50">Current Q</th>
                            <th className="px-3 py-2 font-medium text-[10px] bg-gray-50/50">YTD</th>
                            <th className="px-3 py-2 font-medium text-[10px] bg-gray-50/50">Δ QoQ</th>
                            <th className="px-3 py-2 font-medium text-[10px] bg-gray-50/50">Δ YoY</th>
                            <th className="px-3 py-2 font-medium text-[10px] bg-gray-50/50">Δ YTD</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {metrics.map((m) => {
                            if (m.isOrderBook) {
                                // Special row for Order Book (Single Cell spanning columns or just Current Q)
                                // User asked for "Order Book" to be a single number. 
                                // We can put it in Current Q and leave others blank.
                                return (
                                    <tr key={m.name} className="hover:bg-[#F8FAFC]">
                                        <td className="text-left px-4 py-2 font-medium text-gray-700 text-[11px]">{m.name}</td>
                                        <td className="px-3 py-2 text-gray-800 font-mono text-[11px]">{fmtVal(m.val, false)}</td>
                                        <td className="px-3 py-2 text-gray-300">-</td>
                                        <td className="px-3 py-2 text-gray-300">-</td>
                                        <td className="px-3 py-2 text-gray-300">-</td>
                                        <td className="px-3 py-2 text-gray-300">-</td>
                                    </tr>
                                )
                            }

                            const d = m.data;
                            if (!d) return null; // Should not happen for core metrics if defaults are handled

                            return (
                                <tr key={m.name} className="hover:bg-[#F8FAFC]">
                                    <td className="text-left px-4 py-2 font-medium text-gray-700 text-[11px]">{m.name}</td>
                                    <td className="px-3 py-2 text-gray-800 font-mono text-[11px]">{fmtVal(d.currentQ, m.isPercent)}</td>
                                    <td className="px-3 py-2 text-gray-500 font-mono text-[11px]">{fmtVal(d.ytd, m.isPercent)}</td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={d.deltaQoQ} /></td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={d.deltaYoY} /></td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={d.deltaYTD} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Guidance Section */}
                {financials?.guidance && (
                    <div className="border-t border-gray-100 bg-[#FAFAFA] p-3">
                        <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Forward Guidance (FY)</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {financials.guidance.revenueTarget !== null && financials.guidance.revenueTarget !== undefined && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Revenue Target</span>
                                    <span className="font-mono font-semibold text-gray-700">₹{financials.guidance.revenueTarget.toLocaleString()}cr</span>
                                </div>
                            )}
                            {financials.guidance.marginTarget !== null && financials.guidance.marginTarget !== undefined && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Margin Target</span>
                                    <span className="font-mono font-semibold text-gray-700">{financials.guidance.marginTarget}%</span>
                                </div>
                            )}
                            {/* Fallback for legacy fields if they exist */}
                            {financials.guidance.revenueGrowth !== undefined && financials.guidance.revenueGrowth !== null && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Rev Growth Target</span>
                                    <span className="font-mono font-semibold text-emerald-600">+{financials.guidance.revenueGrowth}%</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
