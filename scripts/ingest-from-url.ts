import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';
import https from 'https';
import path from 'path';
import { processTranscript } from '../lib/sync-service';
require('dotenv').config();

const prisma = new PrismaClient();
const SUPA_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (SUPA_URL && SUPA_KEY) ? createClient(SUPA_URL, SUPA_KEY) : null;
const BUCKET = 'Conf Call Pdfs';

function dl(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const f=(u:string,n=0)=>{ if(n>6)return reject(new Error('redir'));
      https.get(u,{headers:{'User-Agent':'Mozilla/5.0'}},r=>{
        if([301,302,307,308].includes(r.statusCode||0)&&r.headers.location){f(r.headers.location!.startsWith('http')?r.headers.location!:new URL(r.headers.location!,u).href,n+1);return;}
        if(r.statusCode!==200)return reject(new Error('HTTP '+r.statusCode));
        const c:any[]=[];r.on('data',x=>c.push(x));r.on('end',()=>resolve(Buffer.concat(c)));
      }).on('error',reject); };
    f(url);
  });
}

// nameMatch, quarterName, year, q, sourceUrl
const JOBS: {nameMatch:string, quarter:string, year:number, q:string, url:string}[] = [
  { nameMatch:'Ajanta Pharma', quarter:'Q4 FY26', year:2026, q:'Q4', url:'https://www.ajantapharma.com/assets/frontend/images/investors/files/quarterly_results/1778236394_Earnings-Call-Transcript-Q4-(Jan-Mar)-2025-26.pdf' },
  { nameMatch:'NGL Fine-Chem', quarter:'Q4 FY26', year:2026, q:'Q4', url:'https://www.bseindia.com/xml-data/corpfiling/AttachHis/8f2042c3-709d-4892-af89-6440c0f8dc47.pdf' },
];

async function main() {
  if (!supabase) throw new Error('Supabase not configured');
  for (const job of JOBS) {
    console.log(`\n===== ${job.nameMatch} ${job.quarter} =====`);
    const c = await prisma.company.findFirst({ where: { name: { contains: job.nameMatch, mode: 'insensitive' } }, select: { id:true, name:true, ticker:true, sector:true } });
    if (!c) { console.log('  company not found, skipping'); continue; }

    const quarter = await prisma.quarter.upsert({ where: { name: job.quarter }, update: {}, create: { name: job.quarter, year: job.year, q: job.q } });

    // Download the real transcript
    const buf = await dl(encodeURI(job.url));
    console.log(`  downloaded ${buf.length} bytes`);

    // Upload to Supabase
    const safeName = c.name.replace(/[^a-z0-9]/gi,'_').trim();
    const cloudKey = path.join(c.sector, job.quarter, `${safeName}_${job.quarter.replace(/\s+/g,'_')}.pdf`).split(path.sep).join('/');
    const { error: upErr } = await supabase!.storage.from(BUCKET).upload(cloudKey, buf, { contentType:'application/pdf', upsert:true });
    if (upErr) throw upErr;
    const { data: { publicUrl } } = supabase!.storage.from(BUCKET).getPublicUrl(cloudKey);
    console.log(`  uploaded -> ${publicUrl}`);

    // Upsert transcript record (reset for clean analysis)
    const tid = `real-${(c.ticker||c.id).toUpperCase()}-${job.quarter.replace(/\s+/g,'-')}`.replace(/[^a-zA-Z0-9-]/g,'');
    await prisma.transcript.upsert({
      where: { companyId_quarterId: { companyId: c.id, quarterId: quarter.id } },
      update: { fileUrl: publicUrl, rawText: null, hasAnalysis: false },
      create: { id: tid, companyId: c.id, quarterId: quarter.id, fileUrl: publicUrl, rawText: null, hasAnalysis: false },
    });
    await prisma.analysis.deleteMany({ where: { companyId: c.id, quarterId: quarter.id } });

    // Resolve the actual transcript id (in case it pre-existed with a different id)
    const t = await prisma.transcript.findUnique({ where: { companyId_quarterId: { companyId: c.id, quarterId: quarter.id } }, select: { id:true } });
    console.log(`  running processTranscript (${t!.id})...`);
    const res = await processTranscript(t!.id);
    console.log(`  result: ${JSON.stringify(res)}`);
  }
}
main().catch(e=>{ console.error('FATAL:', e.message); process.exitCode=1; }).finally(()=>prisma.$disconnect());
