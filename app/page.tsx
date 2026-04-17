import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [sectorList, stats] = await Promise.all([
    getDashboardDataLight(),
    getTranscriptStats()
  ]);

  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
        </div>
        <div className="flex items-center gap-4">
          <TranscriptStats stats={stats} />

          <div className="bg-white border border-gray-200 px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1.5 text-gray-500">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            Live
          </div>
        </div>
      </header>

      {/* Sector List */}
      <div className="max-w-5xl">
        <SectorList sectors={sectorList} />
      </div>

      <footer className="mt-12 text-center text-[11px] text-gray-400 pb-4">
        <p>I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com</p>
      </footer>
    </main>
  );
}
