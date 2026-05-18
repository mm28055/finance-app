import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { prisma } from '@/lib/prisma';
import { analyzeTranscript } from '@/lib/ai-analyst';
import { shouldAcceptQuarter, pruneCompanyToWindow, quarterScore } from '@/lib/quarters';

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

            try {
                // Only hit API if we are missing data
                const response: any = await fetchFromTijori(co.isin);
                const list = Array.isArray(response) ? response : (response?.data || []);

                // Compute the newest fiscal quarter Tijori reports for this company.
                // If we already have an analyzed transcript at-or-newer than that
                // quarter, skip the company entirely.
                const tijoriScores = list
                    .filter((it: any) => it.transcript && it.concall_event_time)
                    .map((it: any) => quarterScore(getFinancialQuarter(it.concall_event_time)));
                const newestAvailable = tijoriScores.length ? Math.max(...tijoriScores) : 0;

                if (newestAvailable > 0) {
                    const ourLatestAnalyzed = await prisma.transcript.findFirst({
                        where: { companyId: co.id, hasAnalysis: true },
                        include: { quarter: true },
                        orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }]
                    });
                    if (ourLatestAnalyzed && quarterScore(ourLatestAnalyzed.quarter.name) >= newestAvailable) {
                        continue;
                    }
                }

                for (const item of list) {
                    if (!item.transcript) continue;

                    const fyqName = getFinancialQuarter(item.concall_event_time);
                    // Rolling-window filter: accept only quarters at or newer than
                    // the older of this company's latest 2 stored quarters. For a
                    // company with no transcripts yet, everything is accepted.
                    const accept = await shouldAcceptQuarter(co.id, fyqName);
                    if (!accept) continue;

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

                    // Prepare URL (prefer transformed link if available, else original)
                    let webUrl = item.transcript;
                    if (webUrl.includes('stockdiscovery.s3.amazonaws.com')) {
                        webUrl = webUrl.replace('stockdiscovery.s3.amazonaws.com', 'files.tijorifinance.com');
                    }

                    if (!fs.existsSync(finalPath)) {
                        await downloadPdf(encodeURI(webUrl), finalPath);
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
                                where: { id: existingTranscript?.id || 'new' }, // Note: 'new' is not safe but ignoring for now as exact match should be handled by logic
                                update: {
                                    rawText: cleanText,
                                    hasAnalysis: true,
                                    filePath: finalPath,
                                    // Only update URL if it's missing or we have a better one (basic check)
                                    // Actually, we should restore it to the Source URL since we know it.
                                    fileUrl: webUrl
                                },
                                create: {
                                    companyId: co.id,
                                    quarterId: quarter.id,
                                    rawText: cleanText,
                                    hasAnalysis: true,
                                    filePath: finalPath,
                                    fileUrl: webUrl
                                }
                            }),
                            prisma.financials.upsert({
                                where: { companyId_quarterId: { companyId: co.id, quarterId: quarter.id } },
                                update: {
                                    revenue: analysis.financials.revenue.current_q ?? 0,
                                    ebitda: analysis.financials.ebitda.current_q ?? 0,
                                    pat: analysis.financials.pat.current_q ?? 0,
                                    revenueYoY: parseFloat(String(analysis.financials.revenue.delta_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
                                },
                                create: {
                                    companyId: co.id,
                                    quarterId: quarter.id,
                                    revenue: analysis.financials.revenue.current_q ?? 0,
                                    ebitda: analysis.financials.ebitda.current_q ?? 0,
                                    pat: analysis.financials.pat.current_q ?? 0,
                                    revenueYoY: parseFloat(String(analysis.financials.revenue.delta_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
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
                                    deltaAnalysis: analysis.delta_analysis, // SAVE DELTA REPORT
                                    investibilityScore: analysis.investibility_score // SAVE SCORE
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
                                    deltaAnalysis: analysis.delta_analysis, // SAVE DELTA REPORT
                                    investibilityScore: analysis.investibility_score // SAVE SCORE
                                }
                            })
                        ]);

                        // Rolling-window cleanup: prune anything outside latest 2 quarters
                        // (5 for financials). Without this, manually-resurrected quarter
                        // rows from prior buggy runs would keep rendering UI tabs.
                        await pruneCompanyToWindow(co.id);

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
