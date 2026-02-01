
const https = require('https');

const TIJORI_API_KEY = "c74d557ef1cf4464820666dfb7dbc9e1";
const BASE_URL = "https://www.tijoristack.ai/api/v1";
const ISIN = "INE306R01017";

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
    return `${q} FY${fy.toString().slice(-2)}`;
}

async function fetchFromTijori(isin) {
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}/concalls/list/?isin=${isin}`;
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

function processList(list) {
    console.log(`Found ${list.length} items.`);
    list.forEach(item => {
        const fyq = getFinancialQuarter(item.concall_event_time);
        const qType = fyq.split(' ')[0];
        const rawYear = parseInt(fyq.split('FY')[1]);
        const qYear = 2000 + rawYear;

        // Logic Check:
        const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));

        console.log(`Date: ${item.concall_event_time} -> ${fyq} (Year: ${qYear}). Passed Filter? ${isFY26OrLater}`);
        if (isFY26OrLater) {
            console.log(`   -> Link: ${item.transcript}`);
        }
    });
}

async function main() {
    const response = await fetchFromTijori(ISIN);
    const list = Array.isArray(response) ? response : (response?.data || []);
    processList(list);
}

main();
