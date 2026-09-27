import { SectorOverview } from './types';
import { chemicalsFluorine } from './chemicals-fluorine';
import { chemicalsCustom } from './chemicals-custom';
import { chemicalsCommodity } from './chemicals-commodity';
import { chemicalsAdditives } from './chemicals-additives';
import { chemicalsIngredients } from './chemicals-ingredients';

// Chemicals is too large and too varied for one note, so it is split into five
// business-model groups. Each group is a complete note with its own two tabs; the
// sector page shows one tab per group.
export const chemicals: SectorOverview = {
    sector: 'Chemicals',
    title: 'Chemicals',
    standfirst:
        "Forty-eight chemical makers, split into five groups because they earn money in very different ways. Fluorine companies live on refrigerant gases and fluoropolymers; custom-synthesis firms make niche molecules for agro, pharma and battery customers and must fill new plants; commodity makers earn the spread between input and selling prices set by China and trade policy; carbon, colour and additive makers sell materials by the tonne into tyres, paints and cables; and formulation, ingredient and gas companies earn from recipes, service and contracts. **Q1 FY27 profits were lifted by the West Asia war almost everywhere, so each group judges companies on normal earnings.** Pick a group below: each has its own analysis and company profiles, and prices are checked live.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',
    sections: [],
    verdicts: [],
    sources: [],
    buckets: [
        { label: 'Fluorine and refrigerants', note: chemicalsFluorine },
        { label: 'Custom synthesis and specialty intermediates', note: chemicalsCustom },
        { label: 'Commodity and petrochemical spreads', note: chemicalsCommodity },
        { label: 'Carbon, colour and polymer additives', note: chemicalsAdditives },
        { label: 'Formulations, ingredients, gases and services', note: chemicalsIngredients },
    ],
};
