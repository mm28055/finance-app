import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// The owner's own company tags. Private: every method needs a session, and a
// visitor simply gets no tags. Raw SQL keeps this route independent of the
// generated client, so it works even before `prisma generate` has re-run.

const clean = (t: unknown) => String(t ?? '').trim().replace(/\s+/g, ' ').slice(0, 40);

// GET: every tag, as { tags: { [companyId]: string[] } }
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ tags: {} });
    const rows = await prisma.$queryRaw<{ companyId: string; tag: string }[]>`
        SELECT "companyId", "tag" FROM "CompanyTag" ORDER BY "tag"`;
    const tags: Record<string, string[]> = {};
    for (const r of rows) (tags[r.companyId] ||= []).push(r.tag);
    return NextResponse.json({ tags });
}

// POST { companyId, tag }: add a tag (adding one that exists is a no-op)
export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const tag = clean(body.tag);
    if (!body.companyId || !tag) return NextResponse.json({ error: 'companyId and tag required' }, { status: 400 });
    await prisma.$executeRaw`
        INSERT INTO "CompanyTag" ("id", "companyId", "tag")
        VALUES (${randomUUID()}, ${body.companyId}, ${tag})
        ON CONFLICT ("companyId", "tag") DO NOTHING`;
    return NextResponse.json({ success: true, tag });
}

// DELETE { companyId, tag }: remove a tag
export async function DELETE(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const body = await req.json();
    const tag = clean(body.tag);
    if (!body.companyId || !tag) return NextResponse.json({ error: 'companyId and tag required' }, { status: 400 });
    await prisma.$executeRaw`DELETE FROM "CompanyTag" WHERE "companyId" = ${body.companyId} AND "tag" = ${tag}`;
    return NextResponse.json({ success: true });
}
