const { PrismaClient } = require('@prisma/client');
const XLSX = require('xlsx');
const path = require('path');

const prisma = new PrismaClient();
const FILE_PATH = path.join(__dirname, '../../Conf Call Downloader (1).xlsx');

async function main() {
    console.log("🚀 Starting Data Migration...");
    console.log(`📂 Reading file: ${FILE_PATH}`);

    const workbook = XLSX.readFile(FILE_PATH);

    // --- 1. Load DataFrames ---
    const sheetSummaries = XLSX.utils.sheet_to_json(workbook.Sheets['Concall_Summaries'] || []);
    const sheetGuidance = XLSX.utils.sheet_to_json(workbook.Sheets['Guidance_Wide'] || []);
    const sheetProfiles = XLSX.utils.sheet_to_json(workbook.Sheets['Company_Profiles'] || []);

    console.log(`📊 Found ${sheetSummaries.length} transcripts`);
    console.log(`📊 Found ${sheetProfiles.length} profiles`);
    console.log(`📊 Found ${sheetGuidance.length} guidance rows`);

    // --- 2. Process Sectors & Companies (Master List) ---
    // We prioritize 'Concall_Summaries' for the list of companies
    const companiesMap = new Map(); // Name -> Metadata

    // Helper to normalize name
    const norm = (s) => String(s || '').trim();

    // Load from Concall_Summaries
    sheetSummaries.forEach(row => {
        const name = norm(row.Company);
        if (!name) return;
        if (!companiesMap.has(name)) {
            companiesMap.set(name, {
                name: name,
                ticker: norm(row.Symbol) || name.substring(0, 5).toUpperCase(),
                sector: norm(row.Sector) || 'Unsorted',
                isin: norm(row.ISIN) || null
            });
        }
    });

    // Load Profiles (Update Map)
    sheetProfiles.forEach(row => {
        const name = norm(row.Company);
        if (!name) return;
        const profile = norm(row.BusinessProfile);

        // If company exists, update profile
        if (companiesMap.has(name)) {
            companiesMap.get(name).businessProfile = profile;
        } else {
            // Create if missing (though unlikely if summary exists)
            companiesMap.set(name, {
                name: name,
                ticker: name.substring(0, 5).toUpperCase(),
                sector: norm(row.Sector) || 'Unsorted',
                isin: null,
                businessProfile: profile
            });
        }
    });

    console.log(`🏢 Identified ${companiesMap.size} unique companies.`);

    // --- 3. Insert Companies ---
    for (const [name, data] of companiesMap) {
        try {
            await prisma.company.upsert({
                where: { ticker: data.ticker }, // assuming ticker is unique enough for now
                update: {
                    sector: data.sector,
                    businessProfile: data.businessProfile,
                    isin: data.isin
                },
                create: {
                    name: data.name,
                    ticker: data.ticker,
                    sector: data.sector,
                    businessProfile: data.businessProfile,
                    isin: data.isin,
                    status: 'ACTIVE'
                }
            });
        } catch (e) {
            console.warn(`Skipped Company ${name}: ${e.message}`);
        }
    }

    // --- 4. Insert Quarters ---
    // Extract unique quarters from Concall_Summaries
    const uniqueQuarters = new Set();
    sheetSummaries.forEach(r => {
        if (r.Quarter) uniqueQuarters.add(norm(r.Quarter));
    });

    // Also extracting quarters from Guidance_Wide columns is harder, let's stick to Rows

    for (const qName of uniqueQuarters) {
        if (!qName) continue;
        await prisma.quarter.upsert({
            where: { name: qName },
            update: {},
            create: { name: qName }
        });
    }

    console.log(`📅 Synced ${uniqueQuarters.size} quarters.`);

    // --- 5. Insert Transcripts ---
    let transcriptCount = 0;
    for (const row of sheetSummaries) {
        const cName = norm(row.Company);
        const qName = norm(row.Quarter);
        const link = row.TranscriptLink || row.Link;

        if (!cName || !qName || !link) continue;

        // Find IDs
        const company = await prisma.company.findFirst({ where: { name: cName } }); // Name match fallback
        const quarter = await prisma.quarter.findUnique({ where: { name: qName } });

        if (company && quarter) {
            await prisma.transcript.create({
                data: {
                    companyId: company.id,
                    quarterId: quarter.id,
                    fileUrl: link,
                    rawText: '' // We don't have text yet
                }
            });
            transcriptCount++;
        }
    }
    console.log(`📄 Inserted ${transcriptCount} transcript records.`);

    // --- 6. Insert Summaries (Guidance_Wide) ---
    // This sheet has dynamic columns: Sector | Company | [Q3 FY25] | [Q2 FY25] ...
    // We need to iterate keys
    let summaryUpdates = 0;

    for (const row of sheetGuidance) {
        const cName = norm(row.Company);
        if (!cName) continue;

        const company = await prisma.company.findFirst({ where: { name: cName } });
        if (!company) continue;

        // Iterate all keys in the row
        for (const key of Object.keys(row)) {
            if (['Sector', 'Company'].includes(key)) continue;

            const summaryText = row[key];
            if (!summaryText || String(summaryText).length < 50) continue;

            // 'key' is likely the Quarter Name (e.g., "q2 2026")
            // Try to match it to a Quarter ID
            const quarter = await prisma.quarter.findFirst({
                where: { name: { equals: key.trim(), mode: 'insensitive' } }
            });

            if (quarter) {
                // Valid quarter found. Find or Create Transcript and add summary
                const transcript = await prisma.transcript.findFirst({
                    where: { companyId: company.id, quarterId: quarter.id }
                });

                if (transcript) {
                    await prisma.transcript.update({
                        where: { id: transcript.id },
                        data: { financialHighlights: summaryText } // Storing whole blob here for now
                    });
                    summaryUpdates++;
                } else {
                    // Create placeholder transcript if missing
                    await prisma.transcript.create({
                        data: {
                            companyId: company.id,
                            quarterId: quarter.id,
                            financialHighlights: summaryText
                        }
                    });
                    summaryUpdates++;
                }
            }
        }
    }

    console.log(`🧠 Synced ${summaryUpdates} AI summaries.`);
    console.log("✅ Migration Complete!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
