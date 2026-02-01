import { prisma } from '../lib/prisma';
import { processTranscript } from '../lib/sync-service';
import fs from 'fs';
import path from 'path';

async function main() {
    // 1. Setup & Args
    const sectorFilter = process.argv.find(arg => arg.startsWith('--sector='))?.split('=')[1];

    console.log("🔍 Scanning Concalls/ directory for real PDFs...");
    if (sectorFilter) console.log(`🎯 Filtering for sector: ${sectorFilter}`);

    const baseDir = path.join(process.cwd(), 'Concalls');
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    if (!fs.existsSync(baseDir)) {
        console.error("Concalls directory not found.");
        return;
    }

    const sectors = fs.readdirSync(baseDir);
    let linkedCount = 0;
    let analyzedCount = 0;

    for (const sectorFolder of sectors) {
        // Apply sector filter if provided
        if (sectorFilter && sectorFolder.toLowerCase() !== sectorFilter.toLowerCase()) continue;

        const sectorPath = path.join(baseDir, sectorFolder);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        console.log(`📂 Processing Sector: ${sectorFolder}`);
        const quarters = fs.readdirSync(sectorPath);

        for (const quarterDir of quarters) {
            const quarterPath = path.join(sectorPath, quarterDir);
            if (!fs.statSync(quarterPath).isDirectory()) continue;

            const files = fs.readdirSync(quarterPath).filter(f => f.endsWith('.pdf'));
            for (const file of files) {
                // --- ROBUST MATCHING LOGIC ---
                const rawName = file.replace('.pdf', '').replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
                const fuzzySearchName = rawName.toLowerCase().replace(/[^a-z0-9]/g, '');

                const allCompanies = await prisma.company.findMany({
                    select: { id: true, name: true, ticker: true, isin: true }
                });

                // 1. Try Ticker match
                let company = allCompanies.find(c => c.ticker?.toLowerCase() === rawName.toLowerCase() || c.ticker?.toLowerCase() === rawName.replace(/\s/g, '_').toLowerCase());

                // 2. Try Fuzzy Name match
                if (!company) {
                    company = allCompanies.find(c => {
                        const dbFuzzy = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                        return dbFuzzy === fuzzySearchName || dbFuzzy.includes(fuzzySearchName) || fuzzySearchName.includes(dbFuzzy);
                    });
                }

                if (!company) {
                    console.log(`⚠️  Company not found: ${file}`);
                    continue;
                }

                // --- QUARTER & FILTER LOGIC ---
                const qParts = quarterDir.toLowerCase().split(' '); // ["q2", "2025"] or ["q2", "fy26"]
                const qType = qParts[0].toUpperCase();

                // Robust Year Parsing (Handle "2026", "26", "FY26")
                let rawYearStr = qParts[1] || "";
                rawYearStr = rawYearStr.replace('fy', '');
                const calYear = parseInt(rawYearStr);
                const fullYear = calYear < 100 ? 2000 + calYear : calYear;

                // FY Logic: Assume folder name IS the fiscal year (User Convention: "Q2 26" = FY26)
                const fyYear = fullYear;
                const fyName = `${qType} FY${fyYear.toString().slice(-2)}`;

                // STRICT FILTER: Q2 FY26 or later
                const isFY26OrLater = fyYear > 2026 || (fyYear === 2025 && false) || (fyYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));

                if (!isFY26OrLater) {
                    // console.log(`  -> Skipping: ${fyName} (${file})`);
                    continue;
                }

                const quarter = await prisma.quarter.upsert({
                    where: { name: fyName },
                    update: {},
                    create: {
                        name: fyName,
                        year: fyYear,
                        q: qType
                    }
                });

                // 4. Upsert Transcript
                const absolutePath = path.join(quarterPath, file);
                const transcriptId = `real-${company.ticker || company.id}-${quarter.name}`.replace(/\s+/g, '-');

                // FIX: Check for existing by Composite Key (Company + Quarter) to avoid P2002
                const existingByComposite = await prisma.transcript.findFirst({
                    where: {
                        companyId: company.id,
                        quarterId: quarter.id
                    }
                });

                if (existingByComposite) {
                    // Update existing record
                    await prisma.transcript.update({
                        where: { id: existingByComposite.id },
                        data: { fileUrl: absolutePath }
                    });
                } else {
                    // Create new
                    await prisma.transcript.create({
                        data: {
                            id: transcriptId,
                            companyId: company.id,
                            quarterId: quarter.id,
                            fileUrl: absolutePath,
                            hasAnalysis: false
                        }
                    });
                }

                const finalTranscriptId = existingByComposite ? existingByComposite.id : transcriptId;

                linkedCount++;

                // 5. AUTOMATION: Trigger AI Analysis
                const needsAnalysis = existingByComposite ? !existingByComposite.hasAnalysis : true;

                if (needsAnalysis) {
                    console.log(`🚀 [AutoSync] Triggering analysis for ${company.name} (${fyName})...`);
                    try {
                        await processTranscript(finalTranscriptId); // Use the ACTUAL DB ID
                        analyzedCount++;

                        // RATE LIMITING: Wait 10 seconds before next call to avoid hitting Gemini limits
                        console.log(`⏳ Waiting 10s for rate limits...`);
                        await sleep(10000);
                    } catch (err: any) {
                        console.error(`❌ [AutoSync] Failed for ${company.name}: ${err.message}`);
                    }
                } else {
                    console.log(`✅ [Skipping] Already analyzed: ${company.name} (${fyName})`);
                }
            }
        }
    }

    console.log(`\n✨ Finished Batch!`);
    console.log(`🔗 Linked: ${linkedCount} PDFs`);
    console.log(`🤖 Analyzed: ${analyzedCount} files`);
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
