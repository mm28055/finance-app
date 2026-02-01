/**
 * Force Re-Sync Aerospace Defence with new AI Analyst
 * This script will clear existing analysis and re-run with enhanced investor brief
 */

const { PrismaClient } = require('@prisma/client');
const { analyzeTranscript } = require('../lib/ai-analyst');
const fs = require('fs');
const pdf = require('pdf-parse');

const prisma = new PrismaClient();

async function syncAerospace() {
    console.log('🚀 Force Sync: Aerospace Defence with Enhanced Investor Brief');

    // Get target quarters
    const quarters = await prisma.quarter.findMany({
        where: { name: { in: ['Q2 FY26', 'Q3 FY26'] } }
    });

    console.log(`Found quarters: ${quarters.map(q => q.name).join(', ')}`);

    // Get transcripts for Aerospace Defence
    const transcripts = await prisma.transcript.findMany({
        where: {
            quarterId: { in: quarters.map(q => q.id) },
            company: { sector: 'Aerospace defence' }
        },
        include: { company: true, quarter: true }
    });

    console.log(`Found ${transcripts.length} transcripts to process`);

    for (const transcript of transcripts) {
        console.log(`\n📊 Processing: ${transcript.company.name} - ${transcript.quarter.name}`);

        // Get text
        let text = transcript.rawText;
        if (!text && transcript.fileUrl && fs.existsSync(transcript.fileUrl)) {
            try {
                const buffer = fs.readFileSync(transcript.fileUrl);
                const data = await pdf(buffer);
                text = data.text;
            } catch (e) {
                console.log('  ⚠️ Failed to extract PDF');
                continue;
            }
        }

        if (!text) {
            console.log('  ⚠️ No text available');
            continue;
        }

        // Get previous quarter for delta analysis
        let prevTranscriptText = null;
        if (transcript.quarter.q === 'Q3') {
            const prevQ = await prisma.quarter.findFirst({ where: { name: 'Q2 FY26' } });
            if (prevQ) {
                const prevT = await prisma.transcript.findFirst({
                    where: { companyId: transcript.companyId, quarterId: prevQ.id }
                });
                if (prevT?.rawText) {
                    prevTranscriptText = prevT.rawText;
                } else if (prevT?.fileUrl && fs.existsSync(prevT.fileUrl)) {
                    const buffer = fs.readFileSync(prevT.fileUrl);
                    const data = await pdf(buffer);
                    prevTranscriptText = data.text;
                }
            }
        }

        // Call AI
        console.log('  🤖 Calling Gemini...');
        try {
            const result = await analyzeTranscript(text, null, prevTranscriptText);

            console.log('  ✅ Got investor_brief:', result.investor_brief ? `${result.investor_brief.length} chars` : 'NULL');

            // Save to database
            await prisma.analysis.upsert({
                where: {
                    companyId_quarterId: {
                        companyId: transcript.companyId,
                        quarterId: transcript.quarterId
                    }
                },
                update: {
                    summary: (result.summary?.highlights || []).join('\n'),
                    managementTone: (result.management_tone || 5).toString(),
                    guidanceText: result.guidance?.text || '',
                    guidanceSentiment: (result.guidance?.sentiment || 'neutral').toUpperCase(),
                    capexValue: parseFloat((result.capex?.amount || '0').replace(/[^0-9.]/g, '')) || 0,
                    capexText: result.capex?.details || '',
                    keyHighlights: JSON.stringify(result.summary?.highlights || []),
                    deltaAnalysis: result.delta_analysis,
                    investorBrief: result.investor_brief
                },
                create: {
                    companyId: transcript.companyId,
                    quarterId: transcript.quarterId,
                    summary: (result.summary?.highlights || []).join('\n'),
                    managementTone: (result.management_tone || 5).toString(),
                    guidanceText: result.guidance?.text || '',
                    guidanceSentiment: (result.guidance?.sentiment || 'neutral').toUpperCase(),
                    capexValue: parseFloat((result.capex?.amount || '0').replace(/[^0-9.]/g, '')) || 0,
                    capexText: result.capex?.details || '',
                    keyHighlights: JSON.stringify(result.summary?.highlights || []),
                    deltaAnalysis: result.delta_analysis,
                    investorBrief: result.investor_brief
                }
            });

            console.log('  💾 Saved to database');

        } catch (e) {
            console.error('  ❌ AI Error:', e.message);
        }

        // Rate limit
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log('\n✅ Sync complete!');
    await prisma.$disconnect();
}

syncAerospace();
