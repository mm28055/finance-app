const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// TARGET START: Q2 FY26
// FY26 = 2025-2026.
// Q1 FY26 = Apr-Jun 2025
// Q2 FY26 = Jul-Sep 2025 (KEEP FROM HERE)
//
// Score logic: FY * 10 + Q
// FY26 Q2 = 262.
// We keep if score >= 262.

function getFiscalScore(folderName) {
    const clean = folderName.toUpperCase().trim();
    let fy = 0;
    let q = 0;

    // Parse Quarter
    const qMatch = clean.match(/Q([1-4])/);
    if (!qMatch) return null; // Unknown format
    q = parseInt(qMatch[1]);

    // Parse Year
    if (clean.includes('FY')) {
        // Format: "Q2 FY26"
        const fyMatch = clean.match(/FY(\d{2,4})/);
        if (fyMatch) {
            let val = parseInt(fyMatch[1]);
            if (val > 1000) val = val % 100; // 2026 -> 26
            fy = val;
        }
    } else {
        // Format: "Q2 2025" (Calendar Year)
        // Calendar Q2 2025 (Apr-Jun) = Q1 FY26
        // Calendar Q3 2025 (Jul-Sep) = Q2 FY26
        // Logic: 
        // If Cal Q in [1,2,3,4]...
        // Cal Q1 (Jan-Mar) = Prev FY Q4. (e.g. Q1 2026 -> FY26 Q4)
        // Cal Q2 (Apr-Jun) = Curr FY Q1. (e.g. Q2 2026 -> FY27 Q1)
        // Cal Q3 (Jul-Sep) = Curr FY Q2. (e.g. Q3 2026 -> FY27 Q2)
        // Cal Q4 (Oct-Dec) = Curr FY Q3. (e.g. Q4 2026 -> FY27 Q3)

        const yMatch = clean.match(/20(\d{2})/);
        if (yMatch) {
            let calYear = parseInt(yMatch[1]); // 25 for 2025

            if (q === 1) { // Jan-Mar
                fy = calYear; // FY25 ends in Mar 2025
                q = 4; // Q4
            } else {
                fy = calYear + 1; // FY26 starts in Apr 2025
                q = q - 1; // Cal Q2->Fiscal Q1, Cal Q3->Fiscal Q2, Cal Q4->Fiscal Q3
            }
        }
    }

    if (fy === 0) return null;
    return (fy * 10) + q;
}

async function main() {
    console.log("🧹 Starting Cleanup (Deleting everything before Q2 FY26)...");
    console.log("   Target Score: >= 262 (Q2 FY26)");

    // 1. Clean File System
    if (fs.existsSync(CONCALLS_DIR)) {
        const sectors = fs.readdirSync(CONCALLS_DIR);
        for (const sector of sectors) {
            const sectorPath = path.join(CONCALLS_DIR, sector);
            if (!fs.statSync(sectorPath).isDirectory()) continue;

            const quarters = fs.readdirSync(sectorPath);
            for (const qFolder of quarters) {
                const score = getFiscalScore(qFolder);
                if (!score) {
                    console.log(`   ⚠️ Skipping unknown format: ${qFolder}`);
                    continue;
                }

                if (score < 262) {
                    const fullPath = path.join(sectorPath, qFolder);
                    console.log(`   ❌ DELETING OLD FOLDER: ${sector}/${qFolder} (Score: ${score})`);
                    try {
                        fs.rmSync(fullPath, { recursive: true, force: true });
                    } catch (e) {
                        console.error(`      Failed to delete: ${e.message}`);
                    }
                } else {
                    // console.log(`   ✅ Keeping: ${sector}/${qFolder} (Score: ${score})`);
                }
            }

            // Delete sector if empty
            if (fs.readdirSync(sectorPath).length === 0) {
                fs.rmdirSync(sectorPath);
            }
        }
    }

    // 2. Clean Database (Transcripts & Analysis)
    console.log("\n🗄️ Cleaning Database...");

    // Fetch all quarters first to check scores
    const allQuarters = await prisma.quarter.findMany();
    const headersToDelete = [];

    for (const qRec of allQuarters) {
        // qRec.name might be "Q2 FY26" or "Q3 2024" etc.
        const score = getFiscalScore(qRec.name);

        // Also check year/q fields if name is ambiguous, but helper uses logic matching files
        // Prisma Quarter model: name, year, q
        // We trust the helper logic on the 'name' since that's what we used for folders

        if (score && score < 262) {
            headersToDelete.push(qRec.id);
            console.log(`   Marked for DB Deletion: ${qRec.name} (Score: ${score})`);
        }
    }

    if (headersToDelete.length > 0) {
        // Delete dependent analyses first
        const analysisInfo = await prisma.analysis.deleteMany({
            where: { quarterId: { in: headersToDelete } }
        });
        console.log(`   Deleted ${analysisInfo.count} old analyses.`);

        // Delete transcripts
        const transcriptInfo = await prisma.transcript.deleteMany({
            where: { quarterId: { in: headersToDelete } }
        });
        console.log(`   Deleted ${transcriptInfo.count} old transcripts.`);

        // Delete financials
        try {
            const finInfo = await prisma.financials.deleteMany({
                where: { quarterId: { in: headersToDelete } }
            });
            console.log(`   Deleted ${finInfo.count} old financials.`);
        } catch (e) { console.log("   (No financials table or error)"); }

        // Lastly delete the quarters themselves
        // Note: Check constraints. If any other table links to Quarter?
        // Usually fine if cascades or manual clean.
        // We will try.
        try {
            const qInfo = await prisma.quarter.deleteMany({
                where: { id: { in: headersToDelete } }
            });
            console.log(`   Deleted ${qInfo.count} old quarter definitions.`);
        } catch (e) {
            console.log(`   could not delete quarters (FK constraints?): ${e.message}`);
        }
    }

    console.log("\n✨ Cleanup Complete. Project is now lightweight relative to start date.");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
