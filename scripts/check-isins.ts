import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const total = await prisma.company.count();
    const withIsin = await prisma.company.count({
        where: {
            isin: {
                not: { equals: "" }
            }
        }
    });
    const nullIsin = await prisma.company.count({
        where: {
            isin: null
        }
    });

    console.log("--- DB ISIN Report ---");
    console.log(`Total Companies: ${total}`);
    console.log(`With ISIN:      ${withIsin}`);
    console.log(`Missing ISIN:   ${total - withIsin}`);

    if (total - withIsin > 0) {
        console.log("\nFirst 5 missing:");
        const missing = await prisma.company.findMany({
            where: {
                OR: [
                    { isin: null },
                    { isin: "" }
                ]
            },
            take: 5
        });
        console.log(missing.map(m => m.name));
    }
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
