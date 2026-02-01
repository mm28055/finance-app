
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import https from 'https';

const prisma = new PrismaClient();
const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// Helper for download with Redirect Support
async function downloadPdf(url: string, outputPath: string): Promise<boolean> {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        const fetch = (currentUrl: string) => {
            https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
                if ([301, 302, 307].includes(response.statusCode || 0) && response.headers.location) {
                    console.log(`  ↪ Redirect to: ${response.headers.location}`);
                    fetch(response.headers.location);
                    return;
                }

                if (response.statusCode !== 200) {
                    file.close();
                    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
                    reject(new Error(`Status ${response.statusCode}`));
                    return;
                }

                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            }).on('error', err => {
                if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
                reject(err);
            });
        };
        fetch(url);
    });
}

async function fetchFromTijori(isin: string) {
    if (!isin) return null;
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
        console.log(`  🌐 Fetching URL: ${url}`);
        const options = { headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` } };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

function getFinancialQuarter(dateStr: string) {
    const d = new Date(dateStr);
    const m = d.getMonth();
    const y = d.getFullYear();
    const fy = (m <= 5) ? y : (y + 1);
    let q = '';
    if (m >= 6 && m <= 8) q = 'Q1';
    else if (m >= 9 && m <= 11) q = 'Q2';
    else if (m >= 0 && m <= 2) q = 'Q3';
    else q = 'Q4';
    return `${q} FY${fy.toString().slice(-2)}`;
}

async function main() {
    console.log("🚀 Starting Intellect Debug Sync...");

    const co = await prisma.company.findFirst({
        where: { name: { contains: 'Intellect' } }
    });

    if (!co) { console.log("Company not found"); return; }
    console.log(`🎯 Found Company: ${co.name} (${co.isin}) Sector: ${co.sector}`);

    try {
        const response: any = await fetchFromTijori(co.isin!);
        const list = Array.isArray(response) ? response : (response?.data || []);
        console.log(`  📊 Found ${list.length} transcript entries.`);

        for (const item of list) {
            let link = item.transcript;
            if (!link || !link.startsWith('http')) {
                console.log(`  ⚠️ Skipping invalid link: ${link}`);
                continue;
            }

            if (link.includes('stockdiscovery.s3.amazonaws.com')) {
                link = link.replace('stockdiscovery.s3.amazonaws.com', 'files.tijorifinance.com');
            }
            link = encodeURI(link);

            const fyq = getFinancialQuarter(item.concall_event_time);
            const qType = fyq.split(' ')[0];
            const rawYear = parseInt(fyq.split('FY')[1]);
            const qYear = 2000 + rawYear;

            // Debug Filter
            const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));

            console.log(`  📅 Item: ${fyq} (Year: ${qYear}). Keep? ${isFY26OrLater}`);

            if (!isFY26OrLater) continue;

            const sectorFolder = (co.sector || 'Unsorted');
            const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim();
            const dirPath = path.join(CONCALLS_DIR, sectorFolder, fyq);
            const fileName = `${safeName}_${fyq.replace(/\s+/g, '_')}.pdf`;
            const finalPath = path.join(dirPath, fileName);

            console.log(`  📂 Target Path: ${finalPath}`);

            let fileExists = fs.existsSync(finalPath);
            if (!fileExists) {
                console.log(`  ⬇️  Downloading from: ${link}`);
                try {
                    await downloadPdf(link, finalPath);
                    console.log(`  ✅ Downloaded successfully!`);
                    fileExists = true;
                } catch (err: any) {
                    console.error(`  ❌ Download failed: ${err.message}`);
                }
            } else {
                console.log(`  ✅ File already exists.`);
            }

            if (fileExists) {
                console.log(`  💾 Updating Database for ${fyq}...`);
                const quarter = await prisma.quarter.upsert({
                    where: { name: fyq },
                    update: {},
                    create: { name: fyq, year: qYear, q: qType }
                });

                const existingTranscript = await prisma.transcript.findFirst({
                    where: {
                        companyId: co.id,
                        quarterId: quarter.id
                    }
                });

                if (!existingTranscript) {
                    const transcriptId = `real-${(co.ticker || co.id).toUpperCase()}-${fyq.replace(/\s+/g, '-')}`.replace(/[^a-zA-Z0-9-]/g, '');
                    await prisma.transcript.create({
                        data: {
                            id: transcriptId,
                            companyId: co.id,
                            quarterId: quarter.id,
                            fileUrl: finalPath,
                            hasAnalysis: false,
                            rawText: ''
                        }
                    });
                    console.log(`  📝 Created DB Record: ${transcriptId}`);
                } else {
                    console.log(`  ℹ️  DB Record already exists.`);
                    if (existingTranscript.fileUrl !== finalPath) {
                        await prisma.transcript.update({
                            where: { id: existingTranscript.id },
                            data: { fileUrl: finalPath }
                        });
                        console.log(`  🔄 Updated File Path.`);
                    }
                }
            }
        }
    } catch (e: any) {
        console.error(`Error: ${e.message}`);
    }
}

main()
    .catch(console.error)
    .finally(async () => { await prisma.$disconnect(); });
