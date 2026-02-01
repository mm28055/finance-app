
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🔍 Inspecting Avantel Q3 FY26 Status...");

    const company = await prisma.company.findFirst({
        where: { name: { contains: 'Avantel', mode: 'insensitive' } },
        include: {
            transcripts: {
                where: { quarter: { name: 'Q3 FY26' } }
            },
            analyses: {
                where: { quarter: { name: 'Q3 FY26' } }
            }
        }
    });

    if (!company) {
        console.log("❌ Company 'Avantel' not found.");
    } else {
        console.log(`✅ Found Company: ${company.name} (ID: ${company.id})`);
        console.log(`- Transcripts found: ${company.transcripts.length}`);
        console.log(`- Analyses found: ${company.analyses.length}`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
