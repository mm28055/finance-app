import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import fs from 'fs';
import path from 'path';
const pdf = require('pdf-parse');

export async function GET(request: Request) {
    try {
        console.log("🛠️ Repairing Aerospace Data...");

        // 1. Fetch All Transcripts (to avoid Prisma filtering issues)
        const allTranscripts = await prisma.transcript.findMany({
            include: { company: true, quarter: true }
        });

        // Filter for Aerospace + Q2/Q3 2026
        const aerospaceTranscripts = allTranscripts.filter(t =>
            t.company.sector === "Aerospace defence" &&
            (t.quarter.name === "Q2 FY26" || t.quarter.name === "Q3 FY26")
        );

        let repairedCount = 0;
        let logs: string[] = [];

        for (const t of aerospaceTranscripts) {
            logs.push(`Checking ${t.company.name} (${t.quarter.name})...`);

            // Check file existence
            if (t.fileUrl && fs.existsSync(t.fileUrl)) {
                // Force re-analysis
                await prisma.transcript.update({
                    where: { id: t.id },
                    data: { hasAnalysis: false }
                });
                logs.push(`  -> Reset to Pending.`);
                repairedCount++;
            } else {
                logs.push(`  -> File missing! Deleting record.`);
                await prisma.transcript.delete({ where: { id: t.id } });
            }
        }

        // 2. Fix Data Patterns (Special Case)
        // Find company
        const dpCompany = await prisma.company.findFirst({
            where: { name: { contains: "Data Patterns" } }
        });

        if (dpCompany) {
            logs.push(`Found Data Patterns: ${dpCompany.name} (Sector: ${dpCompany.sector})`);
            // Check if Q2 FY26 exists for it
            const existing = await prisma.transcript.findFirst({
                where: {
                    companyId: dpCompany.id,
                    quarter: { name: "Q2 FY26" }
                }
            });

            if (!existing) {
                // Try to link it manually
                // Path guess
                const potentialPath = path.join(process.cwd(), 'Concalls', 'Aerospace defence', 'q2 2026', 'Data_Patterns__India_.pdf'); // Guessing filename based on earlier ls
                // Wait, I saw "Data_Patterns__India_" in Q1. Assume Q2 has similar name if it exists.
                // Actually, let's look for ANY PDF in q2 2026 with "Data" in name.
                const q2Dir = path.join(process.cwd(), 'Concalls', 'Aerospace defence', 'q2 2026');
                if (fs.existsSync(q2Dir)) {
                    const files = fs.readdirSync(q2Dir);
                    const match = files.find(f => f.includes('Data_Patterns'));
                    if (match) {
                        const q2 = await prisma.quarter.findUnique({ where: { name: 'Q2 FY26' } });
                        if (q2) {
                            await prisma.transcript.create({
                                data: {
                                    id: `real-DataPatterns-Q2FY26`,
                                    companyId: dpCompany.id,
                                    quarterId: q2.id,
                                    fileUrl: path.join(q2Dir, match),
                                    hasAnalysis: false
                                }
                            });
                            logs.push(`  -> Created missing transcript record for Data Patterns from ${match}`);
                            repairedCount++;
                        }
                    } else {
                        logs.push(`  -> No matching PDF found in q2 2026 for Data Patterns.`);
                    }
                } else {
                    logs.push(`  -> q2 2026 folder missing.`);
                }
            }
        } else {
            logs.push(`Data Patterns company not found in DB.`);
        }

        // 3. Fix Mishra Dhatu Nigam (MIDHANI)
        const midhani = await prisma.company.findFirst({
            where: { name: { contains: "Mishra" } }
        });

        if (midhani) {
            logs.push(`Found Mishra Dhatu: ${midhani.name}`);
            const existing = await prisma.transcript.findFirst({
                where: { companyId: midhani.id, quarter: { name: "Q2 FY26" } }
            });

            if (!existing) {
                const q2Dir = path.join(process.cwd(), 'Concalls', 'Aerospace defence', 'q2 2026');
                if (fs.existsSync(q2Dir)) {
                    const files = fs.readdirSync(q2Dir);
                    const match = files.find(f => f.includes('Mishra_Dhatu'));
                    if (match) {
                        const q2 = await prisma.quarter.findUnique({ where: { name: 'Q2 FY26' } });
                        if (q2) {
                            await prisma.transcript.create({
                                data: {
                                    id: `real-MIDHANI-Q2FY26`,
                                    companyId: midhani.id,
                                    quarterId: q2.id,
                                    fileUrl: path.join(q2Dir, match),
                                    hasAnalysis: false
                                }
                            });
                            logs.push(`  -> Created missing transcript record for MIDHANI from ${match}`);
                            repairedCount++;
                        }
                    }
                }
            }
        }

        return NextResponse.json({
            success: true,
            message: `Repaired/Reset ${repairedCount} transcripts.`,
            logs
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
