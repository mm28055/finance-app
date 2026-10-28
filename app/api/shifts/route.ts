import { NextResponse } from 'next/server';
import { shiftsFeed } from '@/lib/business-shift/feed';
import { shownFilter } from '@/lib/hidden';

// GET /api/shifts — every business-shift write-up (lib/business-shift), for the Shifts panel.
export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json({ shifts: await shiftsFeed(await shownFilter()) });
}
