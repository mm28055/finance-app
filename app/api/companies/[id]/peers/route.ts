import { NextRequest, NextResponse } from 'next/server';
import { peerSet, companyFigures } from '@/lib/peers';

// GET /api/companies/[id]/peers
// The company and its closest rivals with the figures that compare them (growth, margins,
// returns, cash, debt, valuation, the note's growth estimate and call), for the card's
// "Price assumes" and "Peers" tabs. Read from Screener pages cached for a day; nothing is stored.

export const maxDuration = 60;

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const set = await peerSet(id);
        if (!set) return NextResponse.json({ error: 'Company not found' }, { status: 404 });
        // Two companies at a time: Screener turns away larger bursts.
        const jobs = [{ id: set.self.id, self: true }, ...set.peers.map(p => ({ id: p.id, self: false }))];
        const all: Awaited<ReturnType<typeof companyFigures>>[] = [];
        for (let i = 0; i < jobs.length; i += 2) {
            all.push(...await Promise.all(jobs.slice(i, i + 2).map(j => companyFigures(j.id, j.self))));
        }
        const [self, ...peers] = all;
        if (!self) return NextResponse.json({ error: 'Company not found' }, { status: 404 });
        // A complete answer is kept at the edge for six hours (and served stale for a day while it
        // refreshes in the background), so the tab opens at once; one with unread companies is not kept.
        const complete = all.every(c => c && !c.unread);
        return NextResponse.json(
            { self, peers: peers.filter(Boolean), fromNote: set.fromNote },
            { headers: { 'Cache-Control': complete ? 'public, max-age=600, s-maxage=21600, stale-while-revalidate=86400' : 'no-store' } },
        );
    } catch {
        return NextResponse.json({ error: 'Peers unavailable' }, { status: 502 });
    }
}
