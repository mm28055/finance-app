
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkGHCL() {
    const a = await prisma.analysis.findFirst({
        where: {
            company: { name: 'GHCL' },
            quarter: { name: 'Q3 FY26' }
        }
    });

    if (a) {
        console.log("GHCL Q3 FY26 Analysis Record:");
        console.log("- ID:", a.id);
        console.log("- Investor Brief length:", a.investorBrief?.length || 0);
        console.log("- Structured Data exists:", !!a.structuredData);
        if (a.investorBrief) {
            console.log("--- Full Brief ---");
            console.log(a.investorBrief);
        }
    } else {
        console.log("GHCL Q3 FY26 Analysis RECORD NOT FOUND in database.");
    }
}

checkGHCL()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
