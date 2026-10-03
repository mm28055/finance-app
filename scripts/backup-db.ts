/**
 * Weekly backup of the database's written material, run by .github/workflows/backup-db.yml into
 * the repository's `backups` branch (never deployed; see vercel.json).
 *
 *   npx tsx scripts/backup-db.ts --out <folder>
 *
 * Kept: everything written that cannot simply be fetched again: the call write-ups and scores
 * (Analysis, with Quarter so they can be matched back), company records with their profiles and
 * the owner's marks (conviction, target price, portfolio, notes), the owner's notes and the images
 * pasted into them, tags, sector chats and settings.
 * Left out on purpose: call transcripts and their search passages, PDFs, and the figures Screener
 * refills (financials, shareholding, prices).
 *
 * Each table is one JSON file of rows sorted by id, so a week's changes show as a small diff.
 * Note images are copied once and kept; manifest.json records the date and row counts.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { supabaseAdmin } from '../lib/transcript-storage';
import { BUCKET_NAME } from '../lib/storage';

const arg = (k: string) => { const i = process.argv.indexOf(`--${k}`); return i >= 0 ? process.argv[i + 1] : undefined; };
const OUT = path.resolve(arg('out') || 'backup-out');

// Decimals and BigInts become plain numbers/strings so the files read as ordinary JSON.
const plain = (rows: unknown[]) => JSON.stringify(rows, (_k, v) => {
    if (typeof v === 'bigint') return v.toString();
    if (v && typeof v === 'object' && v.constructor?.name === 'Decimal') return v.toString();
    return v;
}, 1);

async function dumpTables(): Promise<Record<string, number>> {
    const tables: Record<string, () => Promise<unknown[]>> = {
        Company: () => prisma.company.findMany({ orderBy: { id: 'asc' } }),
        Quarter: () => prisma.quarter.findMany({ orderBy: { id: 'asc' } }),
        Analysis: () => prisma.analysis.findMany({ orderBy: { id: 'asc' } }),
        Note: () => prisma.note.findMany({ orderBy: { id: 'asc' } }),
        CompanyTag: () => prisma.companyTag.findMany({ orderBy: { id: 'asc' } }),
        SectorChat: () => prisma.sectorChat.findMany({ orderBy: { id: 'asc' } }),
        SystemConfig: () => prisma.systemConfig.findMany({ orderBy: { id: 'asc' } }),
    };
    const counts: Record<string, number> = {};
    for (const [name, read] of Object.entries(tables)) {
        const rows = await read();
        fs.writeFileSync(path.join(OUT, `${name}.json`), plain(rows) + '\n');
        counts[name] = rows.length;
        console.log(`${name}: ${rows.length} rows`);
    }
    return counts;
}

/** Copies images pasted into notes (storage folder _notes/), skipping any already backed up. */
async function copyNoteImages(): Promise<{ total: number; added: number }> {
    if (!supabaseAdmin) { console.log('Note images: storage not configured, skipped'); return { total: 0, added: 0 }; }
    const store = supabaseAdmin.storage.from(BUCKET_NAME);
    const files: string[] = [];
    const walk = async (dir: string) => {
        for (let offset = 0; ; offset += 100) {
            const { data, error } = await store.list(dir, { limit: 100, offset });
            if (error) throw new Error(`Listing ${dir}: ${error.message}`);
            if (!data || data.length === 0) break;
            for (const item of data) {
                const p = `${dir}/${item.name}`;
                if (item.id === null) await walk(p); else files.push(p); // folders have no id
            }
            if (data.length < 100) break;
        }
    };
    await walk('_notes');
    let added = 0;
    for (const f of files) {
        const dest = path.join(OUT, 'note-images', f.replace(/^_notes\//, ''));
        if (fs.existsSync(dest)) continue;
        const { data, error } = await store.download(f);
        if (error || !data) throw new Error(`Downloading ${f}: ${error?.message}`);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, Buffer.from(await data.arrayBuffer()));
        added++;
    }
    console.log(`Note images: ${files.length} in storage, ${added} newly copied`);
    return { total: files.length, added };
}

async function main() {
    fs.mkdirSync(OUT, { recursive: true });
    const counts = await dumpTables();
    const images = await copyNoteImages();
    fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify({ takenAt: new Date().toISOString(), rows: counts, noteImages: images.total }, null, 1) + '\n');
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
