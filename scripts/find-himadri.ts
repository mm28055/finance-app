import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const t = await prisma.transcript.findFirst({
        where: {
            fileUrl: { contains: 'Himadri' }
        },
        include: { company: true, quarter: true }
    });

    if (t) {
        console.log('Company:', t.company.name);
        console.log('Quarter:', t.quarter.name);
        console.log('Full URL:', t.fileUrl);
    } else {
        console.log('No transcript found with "Himadri" in URL');
    }

    await prisma.$disconnect();
}

main().catch(console.error);
