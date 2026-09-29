import { SectorOverview } from './types';
import { industrialsProcess } from './industrials-process';
import { industrialsComponents } from './industrials-components';
import { industrialsProducts } from './industrials-products';

// Industrials: the former Industrial Manufacturing and Industrial Products sectors, merged on
// 30 Sep 2026 and regrouped by how the companies earn money. Each group tab has its own
// analysis and company profiles.
export const industrials: SectorOverview = {
    sector: 'Industrials',
    title: 'Industrials',
    standfirst:
        "Thirty-four industrial companies, split into three groups because they earn money in different ways. **Process plant and heavy equipment** makers build to order for other people's plants (reactors, ethanol plants, heat exchangers, cryogenic tanks), so their revenue follows order books and project execution. **Component and engineered-part** makers build to their customers' designs (motor cores, springs, heat exchangers, precision parts), so they follow the customers' volumes and new programmes. **Consumables and industrial products** sell things customers buy again and again (welding consumables, abrasives, mill liners, CCTV, Kavach systems), so they follow usage, brands and pricing. **India's investment cycle is alive, but Q1 FY27 was weak for most of the order-driven names, and several promise a heavy second half; each group judges companies on orders, margins and cash, not just the latest quarter.** Pick a group below: each has its own analysis and company profiles, and prices are checked live.",
    lastUpdated: '2026-09-30',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'Process plant and heavy equipment', note: industrialsProcess },
        { label: 'Components and engineered parts', note: industrialsComponents },
        { label: 'Consumables and industrial products', note: industrialsProducts },
    ],
};
