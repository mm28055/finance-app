import { SectorOverview } from './types';
import { softwareServices } from './software-services';
import { softwareEngineering } from './software-engineering';
import { softwareBpm } from './software-bpm';
import { softwareProducts } from './software-products';
import { softwarePlatforms } from './software-platforms';

// Software is too large and too varied for one note, so it is split into five
// business-model groups. Each group is a complete note with its own two tabs; the
// sector page shows one tab per group.
export const software: SectorOverview = {
    sector: 'Software',
    title: 'Software',
    standfirst:
        "Forty-four listed technology companies, split into five groups because they make money in very different ways. IT services firms bill clients for engineers' hours; engineering R&D firms design cars, planes and plants for manufacturers; process-outsourcing firms run back offices, mostly for US healthcare; product and platform companies sell their own software by licence, subscription or transaction; and the messaging, adtech and AI-infrastructure firms ride message volumes, ad spend and India's GPU build-out. Pick a group below: each has its own analysis and its own company profiles, and prices are checked live.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'IT services and analytics', note: softwareServices },
        { label: 'Engineering R&D', note: softwareEngineering },
        { label: 'Process outsourcing', note: softwareBpm },
        { label: 'Products, SaaS and fintech', note: softwareProducts },
        { label: 'Messaging, adtech and AI infrastructure', note: softwarePlatforms },
    ],
};
