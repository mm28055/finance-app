const fs = require('fs');
const path = require('path');

const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// Target: Q1 FY26
// Score logic: FY * 10 + Q
// FY26 Q1 = 261.

function getFiscalScore(folderName) {
    const clean = folderName.toUpperCase().trim();
    let fy = 0;
    let q = 0;

    const qMatch = clean.match(/Q([1-4])/);
    if (!qMatch) return null;
    q = parseInt(qMatch[1]);

    if (clean.includes('FY')) {
        const fyMatch = clean.match(/FY(\d{2,4})/);
        if (fyMatch) {
            let val = parseInt(fyMatch[1]);
            if (val > 1000) val = val % 100;
            fy = val;
        }
    } else {
        // Calendar Year handling
        const yMatch = clean.match(/20(\d{2})/);
        if (yMatch) {
            let calYear = parseInt(yMatch[1]);
            if (q === 1) { // Jan-Mar -> Prev FY Q4
                fy = calYear;
                q = 4;
            } else { // Apr-Dec -> Curr FY
                fy = calYear + 1;
                q = q - 1;
            }
        }
    }

    if (fy === 0) return null;
    return (fy * 10) + q;
}

function main() {
    console.log("🔍 Searching for 'Q1 FY26' (Score 261) files...");

    if (!fs.existsSync(CONCALLS_DIR)) {
        console.log("Concalls directory not found.");
        return;
    }

    let totalFiles = 0;
    let foldersFound = [];

    const sectors = fs.readdirSync(CONCALLS_DIR);
    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);
        for (const qFolder of quarters) {
            const score = getFiscalScore(qFolder);

            // Check if matches Q1 FY26 (Score 261)
            // Note: Also check raw name just in case my helper is too strict
            const isLiteralMatch = qFolder.toLowerCase().includes('q1') &&
                (qFolder.toLowerCase().includes('fy26') || qFolder.includes('2025')); // Q2 2025 Cal = Q1 FY26 Fiscal.

            if (score === 261) {
                const fullPath = path.join(sectorPath, qFolder);
                const count = fs.readdirSync(fullPath).length;
                console.log(`   📂 Found: ${sector}/${qFolder} -> ${count} files`);
                foldersFound.push(qFolder);
                totalFiles += count;
            }
        }
    }

    console.log(`\n✅ TOTAL Q1 FY26 FILES: ${totalFiles}`);
    console.log(`   (These will be DELETED if you run the cleanup scripts)`);
}

main();
