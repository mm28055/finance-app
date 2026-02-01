const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("Testing Prisma Upsert with Decimal...");

    // Pick a valid company and quarter ID (mock or real if known)
    // For safety, let's look one up
    const transcript = await prisma.transcript.findFirst();
    if (!transcript) {
        console.log("No transcript found to test with.");
        return;
    }

    console.log(`Using Company: ${transcript.companyId}, Quarter: ${transcript.quarterId}`);

    try {
        const res = await prisma.financials.upsert({
            where: {
                companyId_quarterId: {
                    companyId: transcript.companyId,
                    quarterId: transcript.quarterId
                }
            },
            update: {
                revenue: 0,
                ebitda: 0,
                pat: 0,
                revenueYoY: 0
            },
            create: {
                companyId: transcript.companyId,
                quarterId: transcript.quarterId,
                revenue: 0,
                ebitda: 0,
                pat: 0,
                revenueYoY: 0
            }
        });
        console.log("Success! Result:", res);
    } catch (e) {
        console.error("Failed:", e);
    }
}

main().finally(() => prisma.$disconnect());
