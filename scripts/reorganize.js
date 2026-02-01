const fs = require('fs');
const path = require('path');
const https = require('https');

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const DB_PATH = path.join(__dirname, '../data/db.json');
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const CONCALLS_DIR = path.join(__dirname, '../Concalls');

function getFinancialQuarter(dateStr) {
    const d = new Date(dateStr);
    const month = d.getMonth(); // 0-11
    const year = d.getFullYear();

    // User's Mapping Logic (Strict Interpretation):
    // Months 0-2 (Jan-Mar) -> Q3 of current year (e.g. Jan 2026 -> Q3 2026)
    // Months 3-5 (Apr-Jun) -> Q4 of previous year (e.g. Apr 2025 -> Q4 2024)
    // Months 6-8 (Jul-Sep) -> Q1 of current year (e.g. Jul 2025 -> Q1 2025)
    // Months 9-11 (Oct-Dec) -> Q2 of current year (e.g. Oct 2025 -> Q2 2025)

    let q = '';
    let fy = year;

    if (month >= 0 && month <= 2) {
        q = 'Q3';
        fy = year;
    } else if (month >= 3 && month <= 5) {
        q = 'Q4';
        fy = year - 1;
    } else if (month >= 6 && month <= 8) {
        q = 'Q1';
        fy = year;
    } else if (month >= 9 && month <= 11) {
        q = 'Q2';
        fy = year;
    }

    return `${q} ${fy}`; // e.g. "Q3 2026"
}

// 1. Scan existing files
const existingFiles = new Map(); // CompanyName -> { path, filename, sector }

function scanFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            scanFiles(fullPath);
        } else if (item.isFile() && item.name.endsWith('.pdf')) {
            const name = item.name.replace('.pdf', '').replace(/_/g, ' '); // Approximate company name ref
            // We use the filename (sanitized) to match.
            // Better: Store by sanitized filename.
            const safeName = path.basename(item.name, '.pdf');

            // Map: safeName -> currentPath
            existingFiles.set(safeName.toLowerCase(), fullPath);
        }
    }
}

async function fetchFromTijori(isin) {
    if (!isin) return null;
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
        const options = {
            headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(json);
                } catch (e) { resolve(null); }
            });
        }).on('error', reject);
    });
}

async function main() {
    console.log("📂 Scanning existing files...");
    scanFiles(CONCALLS_DIR);
    console.log(`   -> Found ${existingFiles.size} existing PDFs.`);

    console.log("🚀 Starting Reorganization (Metadata Sync)...");
    const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));

    let moveCount = 0;

    for (let i = 0; i < db.companies.length; i++) {
        const co = db.companies[i];
        if (!co.isin) continue;

        const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim(); // Matches downloader safeName
        const currentLoc = existingFiles.get(safeName.toLowerCase());

        // Optimization: If we don't have this file locally at all, we can't reorganize it.
        // UNLESS the user wants us to rename files that might be named slightly differently?
        // Let's assume the downloader naming convention holds.
        if (!currentLoc) {
            // console.log(`   [Skip] ${co.name} - No local file found.`);
            continue;
        }

        // We have a file. Let's find out what Quarter it *should* be in.
        // We need the metadata to know the DATE.
        // There might be multiple transcripts. We need to match the one we have.
        // Problem: We have 1 file per company in the previous logic (latest).
        // If we have 'Company.pdf' in 'q2 2026', which call is it? 
        // We probably downloaded the Q2 2026 call (or what we thought was Q2 2026).

        // Let's fetch the list, calculate correct quarters for ALL calls.

        try {
            const response = await fetchFromTijori(co.isin);
            const list = Array.isArray(response) ? response : (response?.data || []);
            if (!list || list.length === 0) continue;

            // Sort by date desc to assume the file corresponds to the latest? 
            // Or can we check which one it is? 
            // We can't know for sure unless we check file creation time vs API time, but that's flaky.
            // Assumption: The file we have corresponds to ONE of these quarters.
            // Let's see where it IS currently.

            const currentDirName = path.basename(path.dirname(currentLoc)); // "q2 2026"

            // Note: The previous logic might have labeled "Oct 2025" as "q2 2026".
            // The New logic says "Oct 2025" is "Q2 2025".

            // Let's find the API entry that generates the 'currentDirName' using the OLD Logic?
            // Too complex.
            // Simplified approach: Find the LATEST available call in the list that matches our target scope (Recent).
            // Assign the file to the Correct Quarter of the *likely* matched call.

            // Actually, we downloaded 'Q2 2026' explicitly in the script.
            // If the file is in 'q2 2026' (Old), it was likely a call from Jul-Sep 2025.
            // New Logic for Jul-Sep 2025 -> Q1 2025.

            // Let's iterate all recent calls and see where they SHOULD go.
            for (const item of list) {
                const fyq = getFinancialQuarter(item.concall_event_time); // New Label

                // Construct target path
                const sectorFolder = co.folderPath ? co.folderPath.split('/')[1] : (co.sector || 'Unsorted');
                const targetDir = path.join(CONCALLS_DIR, sectorFolder, fyq);
                const targetPath = path.join(targetDir, `${safeName}.pdf`);

                // If this is where the file IS, great.
                if (targetPath.toLowerCase() === currentLoc.toLowerCase()) {
                    // Correctly placed.
                    continue;
                }

                // If the file is currently in a "wrong" folder (e.g. Old Logic folder), we should move it.
                // How do we know if `currentLoc` corresponds to `item`?
                // Heuristic: If we only keep ONE file (latest), we assume currentLoc IS this item if this item is the "latest" one we downloaded.
                // But the user might have multiple quarters.

                // Alternative: Just move the file if it matches the "Old Logic" mapping for this specific item?
                // Old Logic: Month 3-5 -> q 1 (Year+1)

                // Let's just trust the "New Logic" matches the user's desire.
                // If we have a file, and its current folder looks like it came from this item...
                // Actually, let's just move it to the *most recent* applicable quarter found in API?
                // Warning: We might overwrite if we have multiple calls mapping to different places?

                // Let's try to match logic:
                // If current folder is "q2 2026", that meant "Jul-Sep 2025" (Old).
                // "Jul-Sep 2025" (New) -> "Q1 2025".
                // So move "q2 2026" -> "Q1 2025".

                // If current folder is "q3 2026", that meant "Oct-Dec 2025" (Old).
                // "Oct-Dec 2025" (New) -> "Q2 2025".
                // So move "q3 2026" -> "Q2 2025".

                // Is this strictly true?
                // Old: Month 6-8 (Jul-Sep) -> q2 (Year+1). 2025 -> 2026.
                // New: Month 6-8 (Jul-Sep) -> Q1 (Year). 2025 -> 2025.

                // Yes. So we can just map the folders directly?
                // q2 2026 -> Q1 2025
                // q3 2026 -> Q2 2025

                // But wait, what about "q1 2026"? (Apr-Jun 2025)
                // Old: q1 2026.
                // New: Month 3-5 (Apr-Jun) -> Q4 (Year-1). 2025 -> 2024.
                // q1 2026 -> Q4 2024.
            }
        } catch (e) { }

        await new Promise(r => setTimeout(r, 100));
    }

    console.log(`✅ Reorganization (Scan) Complete.`);

    // Direct Folder Mapping Approach (Safer, no API needed if we trust the old logic's artifacts)
    // q1 2026 -> Q4 2024
    // q2 2026 -> Q1 2025
    // q3 2026 -> Q2 2025
    // q4 2026 -> Q3 2026 (Jan-Mar 2026 -> Jan-Mar 2026) matches?
    // Old: q4 -> fy=year. Jan 2026 -> q4 2026.
    // New: Jan 2026 -> Q3 2026.
    // So q4 2026 -> Q3 2026.
}

// Map-based Reorganizer
function reorganizeFolders() {
    console.log("🔄 Reorganizing based on Folder Logic...");

    const rules = [
        // Previous (My Logic) -> New (User/GAS Logic: Year Ending)
        // Q1 2025 (Jul-Sep 2025) -> Q1 2026
        { from: /Q1 2025/i, to: 'Q1 2026' },

        // Q2 2025 (Oct-Dec 2025) -> Q2 2026
        { from: /Q2 2025/i, to: 'Q2 2026' },

        // Q4 2024 (Apr-Jun 2025) -> Q4 2025
        { from: /Q4 2024/i, to: 'Q4 2025' },

        // Clean up any historical ones if they exist (shift +1)
        { from: /Q1 2024/i, to: 'Q1 2025' },
        { from: /Q2 2024/i, to: 'Q2 2025' },
        { from: /Q4 2023/i, to: 'Q4 2024' }
    ];

    // Recurse directories
    const sectors = fs.readdirSync(CONCALLS_DIR).filter(n => fs.statSync(path.join(CONCALLS_DIR, n)).isDirectory());

    for (const sector of sectors) {
        const sectorPath = path.join(CONCALLS_DIR, sector);
        const quarters = fs.readdirSync(sectorPath).filter(n => fs.statSync(path.join(sectorPath, n)).isDirectory());

        for (const qFolder of quarters) {
            // Check if matches rule
            const rule = rules.find(r => r.from.test(qFolder));
            if (!rule) continue;

            const sourceDir = path.join(sectorPath, qFolder);
            const targetDir = path.join(sectorPath, rule.to);

            // Move all files
            const files = fs.readdirSync(sourceDir);
            if (files.length === 0) continue;

            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

            for (const file of files) {
                const src = path.join(sourceDir, file);
                const dest = path.join(targetDir, file);

                if (fs.existsSync(dest)) {
                    console.log(`   [Exists] ${sector}/${rule.to}/${file}`);
                } else {
                    fs.renameSync(src, dest);
                    console.log(`   [Moved] ${sector}/${qFolder}/${file} -> ${rule.to}`);
                }
            }
        }
    }
    console.log("✅ Done.");
}

reorganizeFolders();
