import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// This is a dynamic route: /api/pdf/[...path]
// It will capture /api/pdf/Sector/Quarter/Company.pdf

export async function GET(req: Request, props: { params: Promise<{ path: string[] }> }) {
    try {
        const params = await props.params;
        const pathSegments = params.path;

        if (!pathSegments || pathSegments.length === 0) {
            return new NextResponse("Invalid Path (Segments Empty)", { status: 400 });
        }

        // Construct Path: Root/Concalls/Sector/Quarter/File
        const relativePath = path.join(...pathSegments);
        const fullPath = path.join(process.cwd(), 'Concalls', relativePath);

        // Security Check: Ensure we don't traverse up
        if (!fullPath.includes('Concalls')) {
            return new NextResponse("Access Denied", { status: 403 });
        }

        if (!fs.existsSync(fullPath)) {
            return new NextResponse("File Not Found", { status: 404 });
        }

        const fileBuffer = fs.readFileSync(fullPath);

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline' // View in browser
            }
        });

    } catch (e: any) {
        return new NextResponse("Error serving file: " + e.message, { status: 500 });
    }
}
