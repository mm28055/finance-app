import { SectorOverview } from './types';
import { industrialManufacturing } from './industrial-manufacturing';
import { industrialProducts } from './industrial-products';

// Industrials: the former Industrial Manufacturing and Industrial Products sectors, merged on
// 30 Sep 2026. Each group tab has its own analysis and company profiles.
export const industrials: SectorOverview = {
    sector: 'Industrials',
    title: 'Industrials',
    standfirst:
        "Thirty-four makers of industrial equipment, components and consumables, from process plant and heavy engineering to precision parts, abrasives and industrial glass. They earn money in different ways, so they are split into groups: each has its own analysis and company profiles, and prices are checked live.",
    lastUpdated: '2026-09-30',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'Industrial manufacturing', note: industrialManufacturing },
        { label: 'Industrial products', note: industrialProducts },
    ],
};
