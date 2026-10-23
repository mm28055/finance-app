// Official call transcripts from NSE for checking figures (many stored transcripts are Tijori's
// AI-made copies, which get some figures wrong). For each company in the picture inputs, saves
// the transcript PDFs it filed in the two results windows as <slug>.official.txt next to the inputs.
// Usage: npx tsx scripts/pictures/fetch-official.ts <inputDir>
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
// @ts-ignore - pdf-parse ships no types
import pdfParse from 'pdf-parse';
import { prisma } from '../../lib/prisma';
import { nseAnnouncements, NSE_UA, type NseAnnouncement } from '../../lib/filings/nse';

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
// Results-call windows for Q4 FY26 and Q1 FY27 (and Q2 FY27 calls so far).
const WINDOWS: [string, string][] = [['15-04-2026', '15-06-2026'], ['16-06-2026', '15-08-2026'], ['16-08-2026', '30-09-2026'], ['01-10-2026', '23-10-2026']];

(async () => {
    const dir = process.argv[2];
    const wanted = new Set(fs.readdirSync(dir).filter(f => f.endsWith('.calls.txt')).map(f => f.replace('.calls.txt', '')));
    const cos = (await prisma.company.findMany({ select: { name: true, isin: true, ticker: true } })).filter(c => wanted.has(slug(c.name)));
    const byIsin = new Map(cos.filter(c => c.isin).map(c => [c.isin!, c]));
    const byTicker = new Map(cos.map(c => [c.ticker.toUpperCase(), c]));
    const hits = new Map<string, NseAnnouncement[]>();
    for (const [from, to] of WINDOWS) {
        let rows: NseAnnouncement[] = [];
        for (let i = 0; i < 3 && !rows.length; i++) {
            try { rows = await nseAnnouncements(from, to); } catch (e) { console.log('feed failed', from, to, String(e)); await sleep(5000); }
        }
        console.log(`${from}..${to}: ${rows.length} announcements`);
        for (const a of rows) {
            const text = `${a.desc} ${a.attchmntText || ''}`;
            if (!/transcript/i.test(text) || !a.attchmntFile) continue;
            const co = byIsin.get(a.sm_isin) || (a.symbol ? byTicker.get(String(a.symbol).toUpperCase()) : undefined);
            if (!co) continue;
            const s = slug(co.name);
            hits.set(s, [...(hits.get(s) || []), a]);
        }
    }
    let saved = 0;
    for (const [s, list] of hits) {
        const docs = [...new Map(list.map(a => [a.attchmntFile, a])).values()].sort((a, b) => b.an_dt.localeCompare(a.an_dt));
        const parts: string[] = [];
        for (const a of docs.slice(0, 4)) {
            try {
                const res = await fetch(a.attchmntFile!, { headers: { 'User-Agent': NSE_UA, Referer: 'https://www.nseindia.com/' } });
                if (!res.ok) { parts.push(`===== ${a.an_dt} | ${a.attchmntFile} | download failed ${res.status} =====`); continue; }
                const buf = Buffer.from(await res.arrayBuffer());
                const txt = buf.subarray(0, 4).toString() === '%PDF' ? (await pdfParse(buf)).text : '(not a PDF)';
                parts.push(`===== OFFICIAL NSE FILING ${a.an_dt} | ${a.attchmntText || a.desc} | ${a.attchmntFile} =====\n${txt}`);
            } catch (e) { parts.push(`===== ${a.an_dt} | ${a.attchmntFile} | error ${String(e).slice(0, 100)} =====`); }
            await sleep(800);
        }
        fs.writeFileSync(path.join(dir, `${s}.official.txt`), parts.join('\n\n'));
        saved++;
    }
    console.log(`official transcripts saved for ${saved} of ${wanted.size} companies`);
    await prisma.$disconnect();
    process.exit(0);
})();
