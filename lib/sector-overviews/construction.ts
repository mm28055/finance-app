import { SectorOverview } from './types';
import { constructionPsu } from './construction-psu';
import { constructionRoads } from './construction-roads';
import { constructionDiversified } from './construction-diversified';
import { constructionBuildings } from './construction-buildings';
import { constructionEnergy } from './construction-energy';

// Construction is too large and too varied for one note, so it is split into five
// business-model groups. Each group is a complete note with its own two tabs; the
// sector page shows one tab per group.
export const construction: SectorOverview = {
    sector: 'Construction',
    title: 'Construction',
    standfirst:
        "Thirty-two contractors and project companies, split into five groups because they earn money in very different ways. Government project managers earn fees with little capital; road builders live on government award cycles and bid discounts; diversified contractors build metros, tunnels, water and power plants; building contractors depend on property developers; and the energy and steel-building firms ride factory, solar and data-centre spending. Pick a group below: each has its own analysis and its own company profiles, and prices are checked live.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'Government project managers', note: constructionPsu },
        { label: 'Road builders', note: constructionRoads },
        { label: 'Diversified contractors', note: constructionDiversified },
        { label: 'Building contractors', note: constructionBuildings },
        { label: 'Energy EPC and steel buildings', note: constructionEnergy },
    ],
};
