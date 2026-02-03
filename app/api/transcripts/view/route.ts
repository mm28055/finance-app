import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('path');

    if (!filePath) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // Handle Cloud/Supabase URLs
    if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
        return NextResponse.redirect(filePath);
    }

    // Handle Local Files (Legacy / Local Dev only)
    try {
        const resolvedPath = path.resolve(filePath);
        const allowedBase = path.join(process.cwd(), 'Concalls');

        // Allow dev environment flexibility or strict check
        if (!resolvedPath.startsWith(allowedBase) && process.env.NODE_ENV === 'production') {
            console.error('Access denied to path:', resolvedPath);
            return NextResponse.json({ error: 'Access denied' }, { status: 403 });
        }

        if (!fs.existsSync(resolvedPath)) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(resolvedPath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${path.basename(resolvedPath)}"`,
            },
        });
    } catch (error) {
        console.error('Error serving PDF:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
