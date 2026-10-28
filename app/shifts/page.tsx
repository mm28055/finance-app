import { shiftsFeed } from "@/lib/business-shift/feed";
import { ShiftsList } from "@/components/ShiftsList";
import { shownFilter } from "@/lib/hidden";

export const dynamic = "force-dynamic";
export const metadata = { title: "Shifts · Manish Dashboard" };

// Companies whose business will look different in three years (lib/business-shift).
export default async function ShiftsPage() {
    const shifts = await shiftsFeed(await shownFilter());
    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6 max-md:p-3">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Shifts</h1>
                    <p className="text-gray-400 text-xs">Companies whose business will look different in three years</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>
            <div className="max-w-4xl"><ShiftsList shifts={shifts} /></div>
        </main>
    );
}
