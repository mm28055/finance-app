import { SectorOverview } from './types';
import { autoRelatedEv } from './auto-related-ev';
import { autoRelatedBatteries } from './auto-related-batteries';
import { autoRelatedMetal } from './auto-related-metal';
import { autoRelatedHeavy } from './auto-related-heavy';
import { autoRelatedSystems } from './auto-related-systems';

// Auto Related is too large and too varied for one note, so it is split into five
// business-model groups. Each group is a complete note with its own two tabs; the
// sector page shows one tab per group.
export const autoRelated: SectorOverview = {
    sector: 'Auto Related',
    title: 'Auto Related',
    standfirst:
        "Fifty auto-component makers, split into five groups because they earn money in very different ways. EV and electronics suppliers grow with the electronic content in each vehicle; battery and helmet makers sell brands through dealers and the replacement market; forging, casting and precision-part makers convert metal for a fee and live on exports and capacity; truck, tractor and off-highway suppliers ride heavier, more cyclical demand; and systems suppliers to two-wheeler and car makers follow domestic vehicle volumes plus new safety and emission rules. **Vehicle demand got a lift from the GST cut, but commercial vehicles are expected to slow in the second half of FY27, so each group judges companies on content per vehicle, new orders and exports, not just the latest quarter.** Pick a group below: each has its own analysis and company profiles, and prices are checked live.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'EV and electronics', note: autoRelatedEv },
        { label: 'Batteries and brands', note: autoRelatedBatteries },
        { label: 'Forgings, castings and metal parts', note: autoRelatedMetal },
        { label: 'Trucks, tractors and off-highway', note: autoRelatedHeavy },
        { label: 'Vehicle systems', note: autoRelatedSystems },
    ],
};
