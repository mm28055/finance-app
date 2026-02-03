import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardData } from "@/lib/data-service";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const sectorList = await getDashboardData();


  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
        </div>
        <div className="flex items-center gap-2">
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
    </main>
  );
}
