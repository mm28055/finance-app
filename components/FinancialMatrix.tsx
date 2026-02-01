"use client";
import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export interface MetricData {
    currentQ: number;
    ytd: number;
    deltaQoQ: number;
    deltaYoY: number;
    deltaYTD: number;
}

export interface CompanyFinancials {
    revenue: MetricData;
    ebitda: MetricData;
    ebitdaMargin: MetricData;
    pat: MetricData;
    patMargin: MetricData;
    financeCost?: MetricData;
    depreciation?: MetricData;
    volGrowth?: MetricData;
    orderBook?: MetricData;
    guidance?: {
        revenue?: number;
        revenueGrowth?: number;
        ebitdaMargin?: number;
        pat?: number;
    }
}

export function FinancialMatrix({ financials, quarterName }: { financials?: CompanyFinancials, quarterName?: string }) {
    const metrics = [
        {
            name: "Revenue",
            current: financials?.revenue?.currentQ ? `₹${financials.revenue.currentQ.toLocaleString()}cr` : "-",
            ytd: financials?.revenue?.ytd ? `₹${financials.revenue.ytd.toLocaleString()}cr` : "-",
            qoq: financials?.revenue?.deltaQoQ ?? null,
            yoy: financials?.revenue?.deltaYoY ?? null,
            deltaYtd: financials?.revenue?.deltaYTD ?? null
        },
        {
            name: "Vol. Growth",
            current: financials?.volGrowth?.currentQ ? `${financials.volGrowth.currentQ}%` : "-",
            ytd: "-",
            qoq: null,
            yoy: null,
            deltaYtd: null,
            hideIfEmpty: true
        },
        {
            name: "EBITDA",
            current: financials?.ebitda?.currentQ ? `₹${financials.ebitda.currentQ.toLocaleString()}cr` : "-",
            ytd: financials?.ebitda?.ytd ? `₹${financials.ebitda.ytd.toLocaleString()}cr` : "-",
            qoq: financials?.ebitda?.deltaQoQ ?? null,
            yoy: financials?.ebitda?.deltaYoY ?? null,
            deltaYtd: financials?.ebitda?.deltaYTD ?? null
        },
        {
            name: "Margin",
            current: financials?.ebitdaMargin?.currentQ ? `${financials.ebitdaMargin.currentQ}%` : "-",
            ytd: financials?.ebitdaMargin?.ytd ? `${financials.ebitdaMargin.ytd}%` : "-",
            qoq: financials?.ebitdaMargin?.deltaQoQ ?? null,
            yoy: financials?.ebitdaMargin?.deltaYoY ?? null,
            deltaYtd: financials?.ebitdaMargin?.deltaYTD ?? null
        },
        {
            name: "Finance Cost",
            current: financials?.financeCost?.currentQ ? `₹${financials.financeCost.currentQ.toLocaleString()}cr` : "-",
            ytd: financials?.financeCost?.ytd ? `₹${financials.financeCost.ytd.toLocaleString()}cr` : "-",
            qoq: financials?.financeCost?.deltaQoQ ?? null,
            yoy: financials?.financeCost?.deltaYoY ?? null,
            deltaYtd: financials?.financeCost?.deltaYTD ?? null,
            hideIfEmpty: true
        },
        {
            name: "Depreciation",
            current: financials?.depreciation?.currentQ ? `₹${financials.depreciation.currentQ.toLocaleString()}cr` : "-",
            ytd: financials?.depreciation?.ytd ? `₹${financials.depreciation.ytd.toLocaleString()}cr` : "-",
            qoq: financials?.depreciation?.deltaQoQ ?? null,
            yoy: financials?.depreciation?.deltaYoY ?? null,
            deltaYtd: financials?.depreciation?.deltaYTD ?? null,
            hideIfEmpty: true
        },
        {
            name: "PAT",
            current: financials?.pat?.currentQ ? `₹${financials.pat.currentQ.toLocaleString()}cr` : "-",
            ytd: financials?.pat?.ytd ? `₹${financials.pat.ytd.toLocaleString()}cr` : "-",
            qoq: financials?.pat?.deltaQoQ ?? null,
            yoy: financials?.pat?.deltaYoY ?? null,
            deltaYtd: financials?.pat?.deltaYTD ?? null
        },
        {
            name: "Order Book",
            current: financials?.orderBook?.currentQ ? `₹${financials.orderBook.currentQ.toLocaleString()}cr` : "-",
            ytd: "-",
            qoq: null,
            yoy: null,
            deltaYtd: null,
            hideIfEmpty: true
        }
    ];

    const Percentage = ({ val }: { val: number | null }) => {
        if (val === null) return <span className="text-gray-300">-</span>;
        const color = val > 0 ? "text-emerald-500" : val < 0 ? "text-red-400" : "text-gray-400";
        const Icon = val > 0 ? ArrowUpRight : val < 0 ? ArrowDownRight : Minus;

        return (
            <div className={`flex items-center justify-end gap-0.5 font-medium ${color}`}>
                <Icon className="w-3 h-3" />
                {Math.abs(val)}%
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
                            if (m.hideIfEmpty && m.current === "-") return null;
                            return (
                                <tr key={m.name} className="hover:bg-[#F8FAFC]">
                                    <td className="text-left px-4 py-2 font-medium text-gray-700 text-[11px]">{m.name}</td>
                                    <td className="px-3 py-2 text-gray-800 font-mono text-[11px]">{m.current}</td>
                                    <td className="px-3 py-2 text-gray-500 font-mono text-[11px]">{m.ytd}</td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={m.qoq} /></td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={m.yoy} /></td>
                                    <td className="px-3 py-2 text-[11px]"><Percentage val={m.deltaYtd} /></td>
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
                            {financials.guidance.revenue && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Revenue Target</span>
                                    <span className="font-mono font-semibold text-gray-700">₹{financials.guidance.revenue.toLocaleString()}cr</span>
                                </div>
                            )}
                            {financials.guidance.revenueGrowth && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Rev Growth Target</span>
                                    <span className="font-mono font-semibold text-emerald-600">+{financials.guidance.revenueGrowth}%</span>
                                </div>
                            )}
                            {financials.guidance.ebitdaMargin && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">Margin Target</span>
                                    <span className="font-mono font-semibold text-gray-700">{financials.guidance.ebitdaMargin}%</span>
                                </div>
                            )}
                            {financials.guidance.pat && (
                                <div className="flex justify-between items-center text-[10px]">
                                    <span className="text-gray-500">PAT Target</span>
                                    <span className="font-mono font-semibold text-gray-700">₹{financials.guidance.pat.toLocaleString()}cr</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
