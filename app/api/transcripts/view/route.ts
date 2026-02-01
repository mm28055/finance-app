import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const filePath = searchParams.get('path');

    if (!filePath) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    try {
        // Security check: Ensure the path is within the allowed directories
        // In this app, concalls are in process.cwd()/Concalls
        const resolvedPath = path.resolve(filePath);
        const allowedBase = path.join(process.cwd(), 'Concalls');

        if (!resolvedPath.startsWith(allowedBase)) {
            console.error('Access denied to path:', resolvedPath, 'allowed base:', allowedBase);
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
