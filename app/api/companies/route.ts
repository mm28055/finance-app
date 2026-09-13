import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET: List all companies (open to all visitors)
export async function GET() {
    const companies = await prisma.company.findMany({
        orderBy: { sector: 'asc' }
    });
    return NextResponse.json(companies);
}

// POST: Add new company (auth required)
export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.ticker) {
        return NextResponse.json({ error: "Name and Ticker are required" }, { status: 400 });
    }

    // Check for duplicate
    const existing = await prisma.company.findFirst({
        where: { OR: [{ ticker: body.ticker }, { name: body.name }] }
    });

    if (existing) {
        return NextResponse.json({ error: "Company with this name or ticker already exists" }, { status: 400 });
    }

    const newCompany = await prisma.company.create({
        data: {
            name: body.name,
            ticker: body.ticker.toUpperCase(),
            isin: body.isin || null,
            sector: body.sector || 'Unsorted',
            businessProfile: body.businessProfile || null,
            isVisible: true,
            status: 'ACTIVE'
        }
    });

    return NextResponse.json({ success: true, company: newCompany });
}

// DELETE: Remove company by ID (auth required)
export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: "Company ID required" }, { status: 400 });
    }

    // Delete related records first (cascade)
    await prisma.transcriptChunk.deleteMany({ where: { companyId: id } });
    await prisma.transcript.deleteMany({ where: { companyId: id } });
    await prisma.financials.deleteMany({ where: { companyId: id } });
    await prisma.analysis.deleteMany({ where: { companyId: id } });

    await prisma.company.delete({ where: { id } });

    return NextResponse.json({ success: true });
}

// PUT: Update company (change sector, notes, conviction, etc.) — auth required
export async function PUT(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    if (!body.id) {
        return NextResponse.json({ error: "Company ID required" }, { status: 400 });
    }

    const updated = await prisma.company.update({
        where: { id: body.id },
        data: {
            name: body.name,
            ticker: body.ticker?.toUpperCase(),
            isin: body.isin,
            sector: body.sector,
            businessProfile: body.businessProfile,
            colorTag: body.colorTag,
            notes: body.notes,
            conviction: body.conviction ?? undefined,
            inPortfolio: typeof body.inPortfolio === 'boolean' ? body.inPortfolio : undefined,
            // null clears the target; undefined (field absent) leaves it alone.
            targetPrice: body.targetPrice === undefined ? undefined : body.targetPrice
        }
    });

    return NextResponse.json({ success: true, company: updated });
}
