import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// POST /api/visit — one row per page opened, sent by components/VisitorCounter.tsx (which already
// leaves out Manish's own devices). Keeps a random browser id (for unique visitors), the page, and
// Vercel's city/region/country lookup. No IP address or name is stored. Read with
// `npx tsx scripts/visitor-stats.ts`.

const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|monitor|curl|wget|python|fetch/i;
const ID = /^[A-Za-z0-9-]{8,64}$/;

function header(req: NextRequest, name: string): string | null {
    const raw = req.headers.get(name);
    if (!raw) return null;
    try {
        return decodeURIComponent(raw).slice(0, 80);
    } catch {
        return raw.slice(0, 80);
    }
}

export async function POST(req: NextRequest) {
    const ua = req.headers.get('user-agent') || '';
    if (!ua || BOT.test(ua)) return new NextResponse(null, { status: 204 });

    let body: { visitorId?: unknown; path?: unknown };
    try {
        body = await req.json();
    } catch {
        return new NextResponse(null, { status: 400 });
    }
    const visitorId = typeof body.visitorId === 'string' ? body.visitorId : '';
    const path = typeof body.path === 'string' ? body.path.split('?')[0].slice(0, 200) : '';
    if (!ID.test(visitorId) || !path.startsWith('/')) return new NextResponse(null, { status: 400 });

    try {
        await prisma.siteVisit.create({
            data: {
                visitorId,
                path,
                city: header(req, 'x-vercel-ip-city'),
                region: header(req, 'x-vercel-ip-country-region'),
                country: header(req, 'x-vercel-ip-country'),
                device: /Mobi|Android|iPhone|iPad/i.test(ua) ? 'mobile' : 'desktop',
            },
        });
    } catch (e) {
        console.error('visit log failed', e);
    }
    return new NextResponse(null, { status: 204 });
}
