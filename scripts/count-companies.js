const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
    const total = await p.company.count();
    const active = await p.company.count({ where: { status: 'ACTIVE' } });
    const transcripts = await p.transcript.count();
    console.log('Total companies:', total);
    console.log('Active companies:', active);
    console.log('Total transcripts:', transcripts);
}
main().finally(() => p.$disconnect());
