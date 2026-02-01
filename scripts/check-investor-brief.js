const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function check() {
    const analyses = await p.analysis.findMany({
        where: { investorBrief: { not: null } },
        select: {
            investorBrief: true,
            company: { select: { name: true } },
            quarter: { select: { name: true } }
        }
    });

    console.log('Found', analyses.length, 'analyses with investor brief:');
    analyses.forEach(a => {
        console.log(`  - ${a.company.name} (${a.quarter.name}): ${a.investorBrief?.length || 0} chars`);
    });

    if (analyses.length > 0) {
        console.log('\n--- Sample Investor Brief ---');
        console.log(analyses[0].investorBrief?.substring(0, 1500));
    }

    await p.$disconnect();
}

check();
