
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.company.count({
        where: {
            transcripts: { some: {} },
            analyses: {
                some: {
                    quarter: {
                        name: "Q3 FY26"
                    }
                }
            }
        }
    });
    console.log(`Total companies with Q3 FY26 Analysis: ${count}`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
