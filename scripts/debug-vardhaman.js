require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const https = require('https');
const p = new PrismaClient();

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";

async function main() {
    // 1. Check DB record
    const co = await p.company.findFirst({
        where: { name: { contains: 'Vardhaman', mode: 'insensitive' } },
        include: { transcripts: { include: { quarter: true } } }
    });

    if (!co) {
        console.log('❌ Company "Vardhaman" not found in DB!');
        return;
    }

    console.log('=== DB Record ===');
    console.log(`Name: ${co.name}`);
    console.log(`Ticker: ${co.ticker}`);
    console.log(`ISIN: ${co.isin || 'MISSING!'}`);
    console.log(`Sector: ${co.sector}`);
    console.log(`Status: ${co.status}`);
    console.log(`Transcripts: ${co.transcripts.length}`);
    co.transcripts.forEach(t => console.log(`  - ${t.quarter.name}: ${t.fileUrl ? 'Has URL' : 'No URL'}, Analysis: ${t.hasAnalysis}`));

    // 2. Check Tijori API
    if (!co.isin) {
        console.log('\n⚠️ No ISIN — sync will skip this company (line: if (!co.isin) continue)');
        return;
    }

    console.log(`\n=== Tijori API Response for ISIN: ${co.isin} ===`);
    const data = await new Promise((resolve) => {
        const url = `${BASE_URL}/concalls/list/?isin=${co.isin}`;
        https.get(url, { headers: { 'Authorization': `Bearer ${TIJORI_API_KEY}` } }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => {
                try { resolve(JSON.parse(body)); } catch { resolve(body); }
            });
        }).on('error', e => resolve(`Error: ${e.message}`));
    });

    const list = Array.isArray(data) ? data : (data?.data || []);
    console.log(`Total concalls returned: ${list.length}`);

    if (list.length === 0) {
        console.log('Tijori returned 0 concalls for this ISIN.');
        console.log('Raw response:', JSON.stringify(data).substring(0, 500));
        return;
    }

    // 3. Check which would pass the filter
    function getFinancialQuarter(dateStr) {
        const d = new Date(dateStr);
        const m = d.getMonth();
        const y = d.getFullYear();
        const fy = (m <= 5) ? y : (y + 1);
        let q = '';
        if (m >= 6 && m <= 8) q = 'Q1';
        else if (m >= 9 && m <= 11) q = 'Q2';
        else if (m >= 0 && m <= 2) q = 'Q3';
        else q = 'Q4';
        return { fyq: `${q} FY${fy.toString().slice(-2)}`, qType: q, qYear: fy };
    }

    console.log('\nAll concalls:');
    for (const item of list) {
        const { fyq, qType, qYear } = getFinancialQuarter(item.concall_event_time);
        const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));
        const hasLink = !!(item.transcript && item.transcript.startsWith('http'));
        console.log(`  ${item.concall_event_time} → ${fyq} | Pass Filter: ${isFY26OrLater ? '✅' : '❌'} | Has PDF: ${hasLink ? '✅' : '❌'}`);
    }
}

main().finally(() => p.$disconnect());
