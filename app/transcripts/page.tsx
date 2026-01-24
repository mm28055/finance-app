import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';

const MOCK_TRANSCRIPTS = [
    { id: 1, date: '2025-12-12', company: 'Deepak Nitrite', sector: 'Chemicals', quarter: 'Q3 FY25', size: '2.4 MB' },
    { id: 2, date: '2025-12-10', company: 'Tata Chemicals', sector: 'Chemicals', quarter: 'Q3 FY25', size: '1.8 MB' },
    { id: 3, date: '2025-12-05', company: 'HDFC Bank', sector: 'Banking', quarter: 'Q3 FY25', size: '3.1 MB' },
    { id: 4, date: '2025-09-15', company: 'Deepak Nitrite', sector: 'Chemicals', quarter: 'Q2 FY25', size: '2.2 MB' },
    { id: 5, date: '2025-09-12', company: 'Reliance Ind', sector: 'Oil & Gas', quarter: 'Q2 FY25', size: '4.5 MB' },
];

export default function TranscriptsPage() {
    return (
        <main className="min-h-screen bg-neutral-900 text-white p-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight mb-2">Transcripts Archive</h1>
                <p className="text-neutral-400 text-sm">All downloaded PDFs and processed files.</p>
            </header>

            <div className="bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-neutral-900 text-neutral-400 text-xs uppercase font-semibold border-b border-neutral-800">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Company</th>
                            <th className="px-6 py-4">Sector</th>
                            <th className="px-6 py-4">Quarter</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                        {MOCK_TRANSCRIPTS.map((t) => (
                            <tr key={t.id} className="hover:bg-neutral-900/50 group">
                                <td className="px-6 py-4 text-neutral-500 font-mono text-xs">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        {t.date}
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-white">
                                    {t.company}
                                </td>
                                <td className="px-6 py-4 text-neutral-400">
                                    <span className="bg-neutral-800 px-2 py-1 rounded text-xs border border-neutral-700">
                                        {t.sector}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-neutral-300">
                                    {t.quarter}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 ml-auto text-xs font-medium border border-blue-900/30 bg-blue-900/10 px-3 py-1.5 rounded transition-colors">
                                        <Download className="w-3 h-3" />
                                        PDF ({t.size})
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
