"use client";
import React, { useState } from 'react';
import { CompanyRow } from './CompanyRow';

// Dummy Data for Preview
const MOCK_DATA = [
    {
        sector: "Chemicals",
        stats: { companies: 5, avgGrowth: "+12%", sentiment: 8.5 },
        companies: [
            {
                name: "Deepak Nitrite", ticker: "DEEPAKNTR", price: 2450, priceChange: 1.2,
                financials: {
                    revenue: { currentQ: 2100, ytd: 5800, deltaQoQ: 5.2, deltaYoY: 12.1, deltaYTD: 8.5 },
                    ebitda: { currentQ: 450, ytd: 1100, deltaQoQ: -2.1, deltaYoY: 5.5, deltaYTD: 3.2 },
                    ebitdaMargin: { currentQ: 21.4, ytd: 19.0, deltaQoQ: -1.5, deltaYoY: -1.2, deltaYTD: 0 },
                    pat: { currentQ: 280, ytd: 750, deltaQoQ: 8.5, deltaYoY: 15.2, deltaYTD: 10.0 },
                    patMargin: { currentQ: 13.3, ytd: 12.9, deltaQoQ: 0.4, deltaYoY: 0.2, deltaYTD: 0 }
                }
            },
            {
                name: "Tata Chemicals", ticker: "TATACHEM", price: 1050, priceChange: -0.5,
                financials: {
                    revenue: { currentQ: 3800, ytd: 11200, deltaQoQ: -1.2, deltaYoY: -5.1, deltaYTD: -2.2 },
                    ebitda: { currentQ: 620, ytd: 1800, deltaQoQ: -8.5, deltaYoY: -12.1, deltaYTD: -6.5 },
                    ebitdaMargin: { currentQ: 16.3, ytd: 16.0, deltaQoQ: -1.2, deltaYoY: -1.1, deltaYTD: 0 },
                    pat: { currentQ: 150, ytd: 480, deltaQoQ: -25.0, deltaYoY: -30.5, deltaYTD: -15.0 },
                    patMargin: { currentQ: 3.9, ytd: 4.2, deltaQoQ: -1.0, deltaYoY: -1.5, deltaYTD: 0 }
                }
            }
        ]
    },
    {
        sector: "Banking",
        stats: { companies: 3, avgGrowth: "+18%", sentiment: 9.2 },
        companies: [
            {
                name: "HDFC Bank", ticker: "HDFCBANK", price: 1680, priceChange: 0.8,
                financials: {
                    revenue: { currentQ: 32000, ytd: 95000, deltaQoQ: 4.5, deltaYoY: 15.2, deltaYTD: 16.0 },
                    ebitda: { currentQ: 0, ytd: 0, deltaQoQ: 0, deltaYoY: 0, deltaYTD: 0 }, // Not applicable for Banks usually, but kept for schema
                    ebitdaMargin: { currentQ: 0, ytd: 0, deltaQoQ: 0, deltaYoY: 0, deltaYTD: 0 },
                    pat: { currentQ: 16500, ytd: 48000, deltaQoQ: 3.2, deltaYoY: 21.0, deltaYTD: 19.5 },
                    patMargin: { currentQ: 0, ytd: 0, deltaQoQ: 0, deltaYoY: 0, deltaYTD: 0 }
                }
            }
        ]
    }
];

export const SectorList = () => {
    const [expandedSector, setExpandedSector] = useState("Chemicals");

    return (
        <div className="space-y-4">
            {MOCK_DATA.map((s) => (
                <div key={s.sector} className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900">
                    {/* Sector Header */}
                    <div
                        onClick={() => setExpandedSector(expandedSector === s.sector ? "" : s.sector)}
                        className="flex items-center justify-between px-6 py-4 bg-neutral-900 cursor-pointer hover:bg-neutral-800/60"
                    >
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-bold text-white">{s.sector}</h2>
                            <span className="text-neutral-500 text-sm">({s.stats.companies} Co)</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex flex-col items-end">
                                <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Avg Growth</span>
                                <span className="text-green-400 font-mono">{s.stats.avgGrowth}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Sentiment</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-16 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                        <div style={{ width: `${(s.stats.sentiment / 10) * 100}%` }} className="h-full bg-blue-500"></div>
                                    </div>
                                    <span className="text-blue-400 font-bold">{s.stats.sentiment}</span>
                                </div>
                            </div>
                            <div className="text-neutral-400">
                                {expandedSector === s.sector ? '▼' : '▶'}
                            </div>
                        </div>
                    </div>

                    {/* Sector Content */}
                    {expandedSector === s.sector && (
                        <div className="border-t border-neutral-800 bg-black/20">
                            {s.companies.map(co => (
                                <CompanyRow key={co.ticker} company={co} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
