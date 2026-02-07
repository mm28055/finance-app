import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("=== SYNC PROGRESS MONITOR ===\n");

    try {
        // 1. Check for Active Job
        const activeJob = await prisma.syncJob.findFirst({
            where: { status: 'RUNNING' },
            orderBy: { startTime: 'desc' }
        });

        if (activeJob) {
            console.log(`✅ Active Job Found (ID: ${activeJob.id})`);
            console.log(`   Started: ${activeJob.startTime.toLocaleString()}`);
            console.log(`   Status:  ${activeJob.status}`);
        } else {
            console.log("⚠️ No 'RUNNING' job found in SyncJob table.");
            console.log("   (If the script just started, it might take a moment to create the job record)\n");
        }

        // 2. Get Last 10 Logs
        console.log("\n--- Latest 10 Activities ---");
        const logs = await prisma.syncLog.findMany({
            orderBy: { timestamp: 'desc' },
            take: 10
        });

        logs.forEach(log => {
            const time = log.timestamp ? log.timestamp.toLocaleTimeString() : 'Unknown Time';
            const status = log.status || 'INFO';
            const company = log.companyName || '';
            const quarter = log.quarter || '';
            const output = `[${time}] ${status}: ${log.message}` + (company ? ` (${company} ${quarter})` : '');
            console.log(output);
        });

    } catch (e) {
        console.error("Error reading DB:", e);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
