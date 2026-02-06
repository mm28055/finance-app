
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const valid = await prisma.transcript.findMany({
        where: {
            company: { name: { contains: 'Crompt' } },
            quarter: { name: { in: ["Q2 FY26", "Q3 FY26"] } }
        },
        include: { company: true, quarter: true }
    });

    console.log("--- Specific Check ---");
    valid.forEach(v => {
        console.log(`URL: ${v.fileUrl}`);
    });
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
