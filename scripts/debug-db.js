const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

async function main() {
    console.log("Checking Apollo Q2 FY26...");
    const t = await prisma.transcript.findUnique({
        where: { id: 'real-Apollo Micro Systems-Q2 FY26' },
        include: { financials: true, quarter: true }
    });

    if (t) {
        console.log(`[Apollo] Q:${t.quarter.name}`);
        console.log(`  File: ${t.fileUrl}`);
        const exists = fs.existsSync(t.fileUrl);
        console.log(`  Exists on Disk: ${exists}`);
        console.log(`  RawText Length: ${t.rawText ? t.rawText.length : 'NULL'}`);
        console.log(`  Start of RawText: ${t.rawText ? t.rawText.substring(0, 50).replace(/\n/g, ' ') : 'NULL'}`);
        if (t.financials.length > 0) {
            console.log(`  Revenue: ${t.financials[0].revenue}`);
            console.log(`  EBITDA: ${t.financials[0].ebitda}`);
        } else {
            console.log("  No Financials Record");
        }
    } else {
        console.log("Apollo Q2 FY26 not found in DB.");
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
