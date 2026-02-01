
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        // Get the most recent job
        const latestJob = await prisma.syncJob.findFirst({
            orderBy: { startTime: 'desc' },
            include: {
                logs: {
                    orderBy: { timestamp: 'desc' }
                }
            }
        });

        if (!latestJob) {
            return NextResponse.json({ active: false, logs: [] });
        }

        // Calculate stats
        const downloaded = latestJob.logs.filter(l => l.status === 'DOWNLOADED').length;
        const completed = latestJob.logs.filter(l => l.status === 'COMPLETED').length; // Finished
        const errors = latestJob.logs.filter(l => l.status === 'ERROR').length;
        
        return NextResponse.json({
            jobId: latestJob.id,
            status: latestJob.status,
            startTime: latestJob.startTime,
            endTime: latestJob.endTime,
            stats: { downloaded, analyzing: 0, completed, errors }, // 'analyzing' count is tricky without state, but UI can infer
            logs: latestJob.logs
        });

    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch status' }, { status: 500 });
    }
}
