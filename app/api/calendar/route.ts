import { NextResponse } from 'next/server';
import { getAllEvents } from '@/lib/events/server';
import { resultsByCompanyDate } from '@/lib/results/server';
import { allSectorOverviews, companyCallInfo } from '@/lib/sector-overviews';
import { prisma } from '@/lib/prisma';

// Read on each request, so "today" and the portfolio filter are current.
export const dynamic = 'force-dynamic';

// GET /api/calendar
// Result dates and earnings-call dates for every company, each with the note's call and whether
// it is in the portfolio; a results date that has passed carries the quarter's figures and the
// overnight view on them (lib/results). Loaded when the calendar panel is opened.
export async function GET() {
    const { updated, events } = getAllEvents();
    const calls = companyCallInfo(allSectorOverviews());
    const results = resultsByCompanyDate();
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    return NextResponse.json({
        updated,
        today: new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10),
        events: events.map(e => ({
            ...e, call: calls.get(e.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(e.company),
            ...(e.kind === 'results' && results.has(`${e.company}|${e.date}`) ? { result: results.get(`${e.company}|${e.date}`) } : {}),
        })),
    });
}
