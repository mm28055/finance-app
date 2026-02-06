
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const sectors = await prisma.company.groupBy({
        by: ['sector'],
        _count: {
            id: true,
        },
        orderBy: {
            _count: {
                id: 'desc',
            }
        }
    });

    console.log("Available Sectors:");
    sectors.forEach(s => {
        console.log(`${s.sector}: ${s._count.id} companies`);
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
