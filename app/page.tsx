import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";
import { SessionTodos } from "@/components/SessionTodos";
import { sessionTodos } from "@/lib/session-todos";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [sectorList, stats, todos] = await Promise.all([
    getDashboardDataLight(),
    getTranscriptStats(),
    sessionTodos()
  ]);

  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6">
      {/* Header */}
      <header className="max-w-6xl flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
          <p className="text-gray-400 text-[11px] mt-0.5">I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <SessionTodos todos={todos} />
          <a href="/filings" className="text-[11px] text-gray-500 hover:text-[#4A7AAF]">Filings</a>
          <a href="/scorecard" className="text-[11px] text-gray-500 hover:text-[#4A7AAF]">Scorecard</a>
          <TranscriptStats stats={stats} />

          <div className="bg-white border border-gray-200 px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1.5 text-gray-500">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Live
          </div>
        </div>
      </header>

      {/* Sector List */}
      <div className="max-w-6xl">
        <SectorList sectors={sectorList} />
      </div>
    </main>
  );
}
