// After redrawing a company's entry in lib/projects/pictures.json, stamp it with the fingerprint of the
// company's current facts and run the checks. Usage: npx tsx scripts/pictures/stamp.ts "<Company>" [...]
import fs from 'fs';
import { projectsFor, capacityFor, pictureFingerprint, type CapacityPictureData } from '../../lib/projects';
import { checkpointsFor } from '../../lib/checkpoints';
import { checkPicture } from './check';

const PIC = 'lib/projects/pictures.json';
const store = JSON.parse(fs.readFileSync(PIC, 'utf8')) as { pictures: CapacityPictureData[] };
let bad = 0;
for (const name of process.argv.slice(2)) {
    const p = store.pictures.find(x => x.company.trim().toLowerCase() === name.trim().toLowerCase());
    if (!p) { console.log(`${name}: no picture entry`); bad++; continue; }
    p.fingerprint = pictureFingerprint(capacityFor(p.company), projectsFor(p.company), checkpointsFor(p.company));
    p.checkedOn = new Date().toISOString().slice(0, 10);
    const { errors, warnings } = checkPicture(p);
    console.log(`${p.company}: ${errors.length} errors, ${warnings.length} warnings`);
    errors.forEach(e => console.log('  ERROR ' + e));
    warnings.forEach(w => console.log('  warn  ' + w));
    if (errors.length) bad++;
}
fs.writeFileSync(PIC, JSON.stringify(store, null, 1) + '\n');
process.exit(bad ? 1 : 0);
