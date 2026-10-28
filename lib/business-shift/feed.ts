// The Shifts list, as both the /shifts page and the slide-in panel show it: every business-shift write-up with
// the note's call and whether the company is held. Server-only.
import { allShifts, shiftChipFor } from './server';
import { allSectorOverviews, companyCallInfo } from '../sector-overviews';
import { prisma } from '../prisma';

/** `shown`: leaves out companies it returns false for (the hidden ones, lib/hidden). */
export async function shiftsFeed(shown: (company: string) => boolean = () => true) {
    const calls = companyCallInfo(allSectorOverviews());
    const cos = await prisma.company.findMany({ where: { name: { in: allShifts().map(s => s.company) } }, select: { name: true, sector: true, inPortfolio: true } });
    const byName = new Map(cos.map(c => [c.name, c]));
    return allShifts().filter(s => shown(s.company)).map(s => ({
        ...s,
        sector: byName.get(s.company)?.sector ?? '',
        inPortfolio: !!byName.get(s.company)?.inPortfolio,
        call: calls.get(s.company.trim().toLowerCase())?.call,
        chip: shiftChipFor(s.company) ?? null,
    }));
}
export type ShiftRow = Awaited<ReturnType<typeof shiftsFeed>>[number];
