import { SectorOverview } from './types';
import { consumerDurablesCooling } from './consumer-durables-cooling';
import { consumerDurablesKitchen } from './consumer-durables-kitchen';
import { consumerDurablesPaints } from './consumer-durables-paints';
import { consumerDurablesSurfaces } from './consumer-durables-surfaces';
import { consumerDurablesLifestyle } from './consumer-durables-lifestyle';

// Consumer Durables is too large and too varied for one note, so it is split into five
// business-model groups. Each group is a complete note with its own two tabs; the
// sector page shows one tab per group.
export const consumerDurables: SectorOverview = {
    sector: 'Consumer Durables',
    title: 'Consumer Durables',
    standfirst:
        "Forty-three makers of things for the home and the person, split into five groups because they earn money in very different ways. Cooling and electrical brands live on summer weather, copper prices and dealer networks; kitchen and houseware makers compete with Chinese imports and sell more and more online; paint makers are fighting a price war started by new entrants; tile, bathware and wood-panel makers follow the housing cycle two or three years late; and lifestyle brands in footwear, personal care and mattresses earn on brand strength and their own stores. **Most of FY27's growth so far is price increases after input costs rose, not more goods sold, so each group judges companies on volume and normal margins.** Pick a group below: each has its own analysis and company profiles, and prices are checked live.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'Cooling and electricals', note: consumerDurablesCooling },
        { label: 'Kitchen and houseware', note: consumerDurablesKitchen },
        { label: 'Paints', note: consumerDurablesPaints },
        { label: 'Tiles, bath and wood panels', note: consumerDurablesSurfaces },
        { label: 'Lifestyle brands', note: consumerDurablesLifestyle },
    ],
};
