import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET /api/hidden — how many companies are kept out of the everyday view (lib/hidden), for the
// sidebar's "Show hidden" switch. Holdings always show, so they are not counted.
export async function GET() {
    const count = await prisma.company.count({ where: { hidden: true, inPortfolio: false, isVisible: true } });
    return NextResponse.json({ count });
}
