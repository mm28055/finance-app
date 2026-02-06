const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log("=== DIAGNOSING MISSING Q3 ANALYSES ===\n");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("❌ Q3 FY26 not found");
        return;
    }

    // Get all Q3 transcripts
    const transcripts = await prisma.transcript.findMany({
        where: { quarterId: q3.id },
        include: { company: true }
    });

    console.log(`Found ${transcripts.length} Q3 FY26 transcripts.\n`);

    const issues = [];

    for (const t of transcripts) {
        const analysis = await prisma.analysis.findUnique({
            where: { companyId_quarterId: { companyId: t.companyId, quarterId: q3.id } }
        });

        const hasRawText = t.rawText && t.rawText.length > 100;
        const hasAnalysisRecord = !!analysis;
        const hasInvestorBrief = analysis?.investorBrief && analysis.investorBrief.length > 100;

        // Check for issues
        if (!hasInvestorBrief) {
            const issue = {
                company: t.company.name,
                ticker: t.company.ticker,
                transcriptId: t.id,
                hasRawText: hasRawText ? `Yes (${t.rawText?.length || 0} chars)` : "NO - Missing text!",
                hasAnalysisFlag: t.hasAnalysis,
                hasAnalysisRecord: hasAnalysisRecord,
                hasInvestorBrief: hasInvestorBrief,
                diagnosis: ""
            };

            if (!hasRawText) {
                issue.diagnosis = "PDF parsing failed - no text extracted";
            } else if (!hasAnalysisRecord) {
                issue.diagnosis = "Analysis never created";
            } else if (!hasInvestorBrief) {
                issue.diagnosis = "Analysis exists but investorBrief is empty";
            }

            issues.push(issue);
        }
    }

    console.log(`\n=== COMPANIES WITH MISSING ANALYSIS: ${issues.length} ===\n`);

    // Sort to show Epigral and Laxmi Organic first
    const priority = ['EPIGRAL', 'LAXMI', 'Epigral', 'Laxmi'];
    issues.sort((a, b) => {
        const aIsPriority = priority.some(p => a.company.toUpperCase().includes(p.toUpperCase()));
        const bIsPriority = priority.some(p => b.company.toUpperCase().includes(p.toUpperCase()));
        if (aIsPriority && !bIsPriority) return -1;
        if (!aIsPriority && bIsPriority) return 1;
        return 0;
    });

    issues.forEach((issue, i) => {
        console.log(`${i + 1}. ${issue.company} (${issue.ticker})`);
        console.log(`   Raw Text: ${issue.hasRawText}`);
        console.log(`   hasAnalysis flag: ${issue.hasAnalysisFlag}`);
        console.log(`   Analysis Record: ${issue.hasAnalysisRecord}`);
        console.log(`   InvestorBrief: ${issue.hasInvestorBrief}`);
        console.log(`   DIAGNOSIS: ${issue.diagnosis}`);
        console.log("");
    });

    // Summary by diagnosis type
    const byDiagnosis = {};
    issues.forEach(i => {
        byDiagnosis[i.diagnosis] = (byDiagnosis[i.diagnosis] || 0) + 1;
    });
    console.log("\n=== SUMMARY BY ISSUE TYPE ===");
    Object.entries(byDiagnosis).forEach(([diag, count]) => {
        console.log(`${diag}: ${count} companies`);
    });

    await prisma.$disconnect();
}

main().catch(console.error);
