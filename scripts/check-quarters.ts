
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const quarters = await prisma.quarter.findMany({
        orderBy: { year: 'desc' },
        take: 10
    });
    console.log(quarters);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
