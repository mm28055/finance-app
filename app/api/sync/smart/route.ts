import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { prisma } from '@/lib/prisma';
import { analyzeTranscript } from '@/lib/ai-analyst';

// pdf-parse doesn't have a good ESM export, using require
const pdf = require('pdf-parse');

// Config
const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const CONCALLS_DIR = path.join(process.cwd(), 'Concalls');

// --- Helper Functions ---

function getFinancialQuarter(dateStr: string) {
    const d = new Date(dateStr);
    const month = d.getMonth();
    const year = d.getFullYear();
    const fy = (month <= 5) ? year : (year + 1);

    let q = '';
    if (month >= 6 && month <= 8) q = 'Q1';
    else if (month >= 9 && month <= 11) q = 'Q2';
    else if (month >= 0 && month <= 2) q = 'Q3';
    else q = 'Q4';

    return `${q} FY${fy.toString().substring(2)}`;
}

async function fetchFromTijori(isin: string) {
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

function downloadPdf(url: string, outputPath: string) {
    if (fs.existsSync(outputPath)) {
        return Promise.resolve("Exists");
    }

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);

        const fetch = (currentUrl: string) => {
            const options = {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)',
                    'Referer': 'https://www.tijorifinance.com/'
                }
            };

            https.get(currentUrl, options, response => {
                if ([301, 302, 307].includes(response.statusCode || 0)) {
                    if (response.headers.location) {
                        fetch(response.headers.location);
                        return;
                    }
                }

                if (response.statusCode !== 200) {
                    file.close();
                    fs.unlink(outputPath, () => { });
                    reject(new Error(`Status ${response.statusCode}`));
                    return;
                }
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve("Downloaded");
                });
            }).on('error', err => {
                fs.unlink(outputPath, () => { });
                reject(err);
            });
        };

        fetch(url);
    });
}

// --- Main Route Handler ---

export async function POST(req: NextRequest) {
    try {
        const companies = await prisma.company.findMany({
            where: {
                status: 'ACTIVE',
                sector: "Aerospace defence" // RESTRICT TO USER PREFERENCE
            }
        });

        let successCount = 0;
        let analysisCount = 0;
        let failCount = 0;

        for (const co of companies) {
            if (!co.isin) continue;

            // OPTIMIZATION: Check if we ALREADY have the latest Q3 2026 transcript
            // If we do, skip the expensive Tijori API call entirely.
            const latestQ = await prisma.quarter.findFirst({ where: { name: 'Q3 2026' } });
            if (latestQ) {
                const existing = await prisma.transcript.findFirst({
                    where: { companyId: co.id, quarterId: latestQ.id, hasAnalysis: true }
                });
                if (existing) {
                    // console.log(`[Sync] Skipping ${co.name} - Already has Q3 2026 Analysis.`);
                    continue;
                }
            }

            try {
                // Only hit API if we are missing data
                const response: any = await fetchFromTijori(co.isin);
                const list = Array.isArray(response) ? response : (response?.data || []);

                for (const item of list) {
                    if (!item.transcript) continue;

                    const fyqName = getFinancialQuarter(item.concall_event_time);
                    if (fyqName !== 'Q3 2026' && fyqName !== 'Q2 2026') continue;

                    const quarter = await prisma.quarter.upsert({
                        where: { name: fyqName },
                        update: {},
                        create: {
                            name: fyqName,
                            year: parseInt(fyqName.split(' ')[1]),
                            q: fyqName.split(' ')[0]
                        }
                    });

                    const safeName = co.name.replace(/[^a-z0-9]/gi, '_').trim();
                    const finalPath = path.join(CONCALLS_DIR, co.sector, fyqName, `${safeName}.pdf`);

                    const existingTranscript = await prisma.transcript.findFirst({
                        where: { companyId: co.id, quarterId: quarter.id }
                    });

                    if (existingTranscript?.hasAnalysis) continue;

                    if (!fs.existsSync(finalPath)) {
                        let link = item.transcript;
                        if (link.includes('stockdiscovery.s3.amazonaws.com')) {
                            link = link.replace('stockdiscovery.s3.amazonaws.com', 'files.tijorifinance.com');
                        }
                        await downloadPdf(encodeURI(link), finalPath);
                        successCount++;
                    }

                    try {
                        const dataBuffer = fs.readFileSync(finalPath);
                        const pdfData = await pdf(dataBuffer);
                        const cleanText = pdfData.text.replace(/\n/g, ' ').substring(0, 100000);

                        // --- FETCH PREVIOUS CONTEXT FOR DELTA ---
                        const prevQuarter = await prisma.quarter.findFirst({
                            where: {
                                year: quarter.year,
                                q: quarter.q === 'Q3' ? 'Q2' : 'Q1'
                            }
                        });

                        let prevData = null;
                        let prevTranscriptText: string | undefined = undefined;

                        if (prevQuarter) {
                            prevData = await prisma.analysis.findUnique({
                                where: { companyId_quarterId: { companyId: co.id, quarterId: prevQuarter.id } }
                            });
                            const pt = await prisma.transcript.findFirst({
                                where: { companyId: co.id, quarterId: prevQuarter.id },
                                select: { rawText: true, fileUrl: true }
                            });
                            // If rawText is missing for prev quarter (edge case), try to use what we have or skip validation
                            if (pt?.rawText) prevTranscriptText = pt.rawText;
                        }

                        // CALL AI WITH DELTA CONTEXT
                        const analysis = await analyzeTranscript(cleanText, prevData, prevTranscriptText);

                        await prisma.$transaction([
                            prisma.transcript.upsert({
                                where: { id: existingTranscript?.id || 'new' },
                                update: { rawText: cleanText, hasAnalysis: true, fileUrl: finalPath },
                                create: {
                                    companyId: co.id,
                                    quarterId: quarter.id,
                                    rawText: cleanText,
                                    hasAnalysis: true,
                                    fileUrl: finalPath
                                }
                            }),
                            prisma.financials.upsert({
                                where: { companyId_quarterId: { companyId: co.id, quarterId: quarter.id } },
                                update: {
                                    revenue: analysis.financials.revenue ?? 0,
                                    ebitda: analysis.financials.ebitda ?? 0,
                                    pat: analysis.financials.pat ?? 0,
                                    revenueYoY: parseFloat(String(analysis.financials.revenue_growth_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
                                },
                                create: {
                                    companyId: co.id,
                                    quarterId: quarter.id,
                                    revenue: analysis.financials.revenue ?? 0,
                                    ebitda: analysis.financials.ebitda ?? 0,
                                    pat: analysis.financials.pat ?? 0,
                                    revenueYoY: parseFloat(String(analysis.financials.revenue_growth_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
                                }
                            }),
                            prisma.analysis.upsert({
                                where: { companyId_quarterId: { companyId: co.id, quarterId: quarter.id } },
                                update: {
                                    summary: (analysis.summary?.highlights || []).join('\n'),
                                    managementTone: (analysis.management_tone || 5).toString(),
                                    guidanceText: analysis.guidance?.text || "No guidance",
                                    guidanceSentiment: (analysis.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                                    capexText: analysis.capex?.details || "",
                                    capexValue: parseFloat(String(analysis.capex?.amount || "0").replace(/[^0-9.]/g, '')) || 0,
                                    keyHighlights: JSON.stringify(analysis.summary?.highlights || []),
                                    deltaAnalysis: analysis.delta_analysis // SAVE DELTA REPORT
                                },
                                create: {
                                    companyId: co.id,
                                    quarterId: quarter.id,
                                    summary: (analysis.summary?.highlights || []).join('\n'),
                                    managementTone: (analysis.management_tone || 5).toString(),
                                    guidanceText: analysis.guidance?.text || "No guidance",
                                    guidanceSentiment: (analysis.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                                    capexText: analysis.capex?.details || "",
                                    capexValue: parseFloat((analysis.capex?.amount || "0").replace(/[^0-9.]/g, '')) || 0,
                                    keyHighlights: JSON.stringify(analysis.summary?.highlights || []),
                                    deltaAnalysis: analysis.delta_analysis // SAVE DELTA REPORT
                                }
                            })
                        ]);

                        analysisCount++;
                    } catch (aiError) {
                        console.error(`AI Analysis failed for ${co.name}:`, aiError);
                    }
                }
            } catch (coError) {
                console.error(`Sync error for ${co.name}:`, coError);
                failCount++;
            }
        }

        return NextResponse.json({
            success: true,
            message: `Sync Complete. ${successCount} files downloaded, ${analysisCount} analyzed.`,
            stats: { downloaded: successCount, analyzed: analysisCount, failed: failCount }
        });

    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
