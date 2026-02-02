const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

function getCanonicalName(folderName) {
    // 1. Force Uppercase Q
    let name = folderName.replace(/^q(\d)/i, 'Q$1');

    // 2. Convert "2026" to "FY26" (Assuming straightforward mapping for clean up)
    // BE CAREFUL: "Q3 2025" (Calendar) might match "Q3 FY26" (Fiscal).
    // But usually in India, "Q3 2025" implies "Dec 2025" which is Q3 FY26.
    // However, if the user named it "Q3 2026", did they mean "Jan-Mar 2026" (Q4 FY26) or "Oct-Dec 2026" (Q3 FY27)?

    // Let's assume the user wants to merge "q3 2026" -> "Q3 FY26" based on the screenshot context (duplicates).
    // Or simpler: Just capitalize 'q' to start.

    // Strategy: 
    // If it looks like "q2 2026" replace with "Q2 FY26" only if user confirms. 
    // For now, let's just fix CASING (q -> Q) and "20xx" -> "FYxx" if deemed safe.

    /* 
       User's screenshot shows: 
       "q3 2026" (created 27-01-2026) 
       "Q3 FY26" (created 30-01-2026)
       Likely they are the SAME quarter.
    */

    if (name.match(/^Q\d\s\d{4}$/)) {
        // "Q3 2026" -> "Q3 FY26"
        return name.replace(/(\d{2})(\d{2})$/, 'FY$2');
    }

    return name; // Return as is if no rule matches
}

async function main() {
    console.log("📂 Starting Folder Standardization...");

    if (!fs.existsSync(CONCALLS_DIR)) {
        console.error("Concalls directory not found!");
        return;
    }

    const sectors = fs.readdirSync(CONCALLS_DIR);
    let movedCount = 0;

    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);

        for (const qFolder of quarters) {
            const oldPath = path.join(sectorPath, qFolder);
            if (!fs.statSync(oldPath).isDirectory()) continue;

            // Determine Target Name
            // e.g., "q3 2026" -> "Q3 FY26"
            let targetName = qFolder.toUpperCase(); // First step normalize case

            // Map 20XX to FYXX
            targetName = targetName.replace(/(\d{4})/, (match) => 'FY' + match.slice(2));

            // Ensure format "Q3 FY26" (Space)
            targetName = targetName.replace(/Q(\d)FY/, 'Q$1 FY');

            if (qFolder === targetName) continue; // Already perfect

            const newPath = path.join(sectorPath, targetName);

            console.log(`\n🔹 Processing: ${sector}/${qFolder} -> ${targetName}`);

            // If target exists, move contents. If not, rename.
            if (fs.existsSync(newPath)) {
                console.log(`   Target exists. Merging files...`);
                const files = fs.readdirSync(oldPath);
                for (const file of files) {
                    const srcFile = path.join(oldPath, file);
                    const destFile = path.join(newPath, file);

                    if (fs.existsSync(destFile)) {
                        console.log(`   ⚠️ Skipping duplicate: ${file}`);
                    } else {
                        fs.renameSync(srcFile, destFile);
                        movedCount++;

                        // DB UPDATE
                        await updateDbPath(file, destFile);
                    }
                }
                // Check if empty, then delete old
                if (fs.readdirSync(oldPath).length === 0) {
                    fs.rmdirSync(oldPath);
                    console.log(`   🗑️ Deleted empty folder: ${qFolder}`);
                }
            } else {
                console.log(`   Renaming folder...`);
                fs.renameSync(oldPath, newPath);

                // DB UPDATE (Bulk update for this folder would be efficient, but let's iterate files to be safe)
                const files = fs.readdirSync(newPath);
                for (const file of files) {
                    await updateDbPath(file, path.join(newPath, file));
                }
            }
        }
    }
    console.log(`\n✨ Complete! Moved/Renamed ${movedCount} files.`);
}

async function updateDbPath(fileName, fullPath) {
    // Find transcript by analyzing fileUrl ending
    // Normalize path separators for Windows
    const normalizedPath = fullPath.split(path.sep).join(path.posix.sep); // Store consistently? 
    // Usually prisma stores what we gave it. 

    // We search by "contains" filename because absolute paths might differ slightly
    // Or robustly: Search for transcript where fileUrl ends with fileName

    const transcripts = await prisma.transcript.findMany({
        where: {
            fileUrl: { contains: fileName }
        }
    });

    for (const t of transcripts) {
        await prisma.transcript.update({
            where: { id: t.id },
            data: { fileUrl: fullPath }
        });
        // console.log(`      Updated DB record for ${fileName}`);
    }
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
