
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Debugging Virtuoso Optoelectro ---");

    const company = await prisma.company.findFirst({
        where: { name: { contains: 'Virtuoso', mode: 'insensitive' } }
    });

    if (!company) {
        console.log("❌ Company not found");
        return;
    }
    console.log(`Company: ${company.name} (${company.ticker}) ID: ${company.id}`);

    const q2 = await prisma.quarter.findFirst({ where: { name: 'Q2 FY26' } });
    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });

    if (q2) {
        console.log(`\n--- Q2 FY26 (ID: ${q2.id}) ---`);
        const t = await prisma.transcript.findFirst({ where: { companyId: company.id, quarterId: q2.id } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q2.id } } });
        const f = await prisma.financials.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q2.id } } });

        console.log(`Transcript: ${t ? '✅ Found' : '❌ MISSING'}`);
        if (t) {
            console.log(`  - ID: ${t.id}`);
            console.log(`  - FilePath: ${t.filePath ? '✅ Present' : '❌ NULL'}`);
            console.log(`  - FileUrl:  ${t.fileUrl}`);
            console.log(`  - RawText:  ${t.rawText ? `✅ Present (${t.rawText.length} chars)` : '❌ NULL'}`);
        }
        console.log(`Analysis:   ${a ? '✅ Found' : '❌ MISSING'}`);
        console.log(`Financials: ${f ? '✅ Found' : '❌ MISSING'}`);
    }

    if (q3) {
        console.log(`\n--- Q3 FY26 (ID: ${q3.id}) ---`);
        const t = await prisma.transcript.findFirst({ where: { companyId: company.id, quarterId: q3.id } });
        const a = await prisma.analysis.findUnique({ where: { companyId_quarterId: { companyId: company.id, quarterId: q3.id } } });

        console.log(`Transcript: ${t ? '✅ Found' : '❌ MISSING'}`);
        console.log(`Analysis:   ${a ? '✅ Found' : '❌ MISSING'}`);
        if (a) {
            console.log(`  - Delta Analysis: ${a.deltaAnalysis ? '✅ Present' : '❌ NULL'}`);
        }
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
