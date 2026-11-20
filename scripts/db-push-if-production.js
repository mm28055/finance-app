// Updates the live database to match prisma/schema.prisma — but only for the live site's build.
// Vercel preview builds (any branch other than master) share the same live database, so a
// preview of an old branch would try to turn the live database back into that branch's older
// shape (20 Nov 2026: three old branches tried to drop SiteVisit and ShareholdingQuarter, stopped
// only because those tables held data). Previews now skip this step.
const { execSync } = require('child_process');

const env = process.env.VERCEL_ENV;
if (env && env !== 'production') {
    console.log(`Skipping prisma db push on a ${env} build — only the live build updates the database.`);
} else {
    execSync('npx prisma db push', { stdio: 'inherit' });
}
