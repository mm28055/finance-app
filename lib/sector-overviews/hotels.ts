import { SectorOverview } from './types';
import { hotelsBusinesses } from './hotels-businesses';
import { hotelsValuationInputs } from './card-data/hotels';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const LUXURY = 'Luxury and upscale owners';
const BRANDED = 'Owners of branded mid-to-upscale hotels';
const MANAGERS = 'Chains that manage hotels and sell memberships';

export const hotelsAndTravels: SectorOverview = {
    sector: 'Hotels and Travels',
    title: 'Hotels and Travels',
    format: 'ranked',
    businesses: hotelsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: hotelsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Lemon Tree Hotels': 18,
            'Samhi Hotels': 15,
            'EIH': 12,
            'Juniper Hotels': 15,
            'Chalet Hotels': 18,
            'Ventive Hospitality': 12,
            'Leela Palaces Hotels': 15,
            'Viceroy Hotels': 20,
            'Royal Orchid Hotels': 15,
            'Brigade Hotel Ven.': 12,
            'Mahindra Holi.&Resor': 15,
        },
    },
    standfirst:
        "Eleven hotel companies. Five own luxury and upscale hotels: EIH (Oberoi and Trident), Leela, Chalet (Marriott hotels and offices), Ventive (Pune and the Maldives) and Juniper (big Hyatt hotels). Three own branded hotels run by global chains: Samhi, Brigade Hotel Ventures and Viceroy. Three run brands or memberships: Lemon Tree (mid-market, moving to managing others' hotels), Royal Orchid and Mahindra Holidays (Club Mahindra). Demand is strong and room rates are rising, but a large pipeline of new hotels is coming. Every chart uses filed results; several of these companies listed in the last two years.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), all consolidated. Operating profit ÷ revenue. Q1 (April–June) is the weakest hotel quarter; Q3 and Q4 (October–March) the strongest.',
            note: 'Owners of big-city and palace hotels earn 35–55% in good quarters; timeshare (Mahindra Holidays) and managed chains (Royal Orchid) earn 15–25%. Compare each company’s Q1 with its own Q1 a year earlier.',
            values: {
                'Lemon Tree Hotels': [44, 43, 50, 52, 43],
                'Samhi Hotels': [33, 37, 36, 32, 32],
                'EIH': [28, 26, 43, 37, 25],
                'Juniper Hotels': [36, 36, 43, 44, 34],
                'Chalet Hotels': [40, 41, 46, 48, 46],
                'Ventive Hospitality': [41, 39, 45, 49, 35],
                'Leela Palaces Hotels': [37, 44, 51, 55, 36],
                'Viceroy Hotels': [15, 25, 31, 30, 26],
                'Royal Orchid Hotels': [25, 17, 26, 23, 24],
                'Brigade Hotel Ven.': [33, 29, 34, 36, 33],
                'Mahindra Holi.&Resor': [17, 21, 19, 24, 15],
            },
            cellNotes: {
                'Ventive Hospitality': 'Q1 FY27 hit by a jump in fuel costs at its Maldives resorts.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Most chains grow 8–15% a year from room rates and new hotels. The big swing is a one-off: Chalet’s Q1 fell 43% because a year earlier it booked ₹895cr from selling flats; without them its revenue rose 10%.',
            values: {
                'Lemon Tree Hotels': [18, 8, 14, 10, 9],
                'Samhi Hotels': [9, 12, 16, 8, 12],
                'EIH': [9, 2, 9, 8, 14],
                'Juniper Hotels': [10, 7, 17, 8, 13],
                'Chalet Hotels': [148, 95, 27, 7, -43],
                'Ventive Hospitality': [341, 90, 28, 12, 7],
                'Leela Palaces Hotels': [21, 12, 24, 14, 28],
                'Viceroy Hotels': [-20, -5, 2, 37, 77],
                'Royal Orchid Hotels': [8, 12, 27, 30, 36],
                'Brigade Hotel Ven.': [22, 17, 12, 1, 2],
                'Mahindra Holi.&Resor': [7, 7, 11, 5, 4],
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Blank where not filed.',
            note: 'Hotels are expensive to build, so most owners earn 8–14% on their capital even in a good year. EIH (21%) earns most because its hotels were built long ago; asset-light managers need little capital.',
            values: {
                'Lemon Tree Hotels': [1, 10, 11, 13, 14],
                'Samhi Hotels': [-4, 8, 7, 9, 9],
                'EIH': [-3, 16, 24, 23, 21],
                'Juniper Hotels': [0, 8, 7, 6, 8],
                'Chalet Hotels': [0, 9, 10, 11, 17],
                'Ventive Hospitality': [null, null, null, 12, 11],
                'Leela Palaces Hotels': [null, null, 30, 12, 9],
                'Viceroy Hotels': [-21, 0, 2, 9, 7],
                'Royal Orchid Hotels': [7, 24, 20, 17, 11],
                'Brigade Hotel Ven.': [null, null, 13, 14, 13],
                'Mahindra Holi.&Resor': [8, 10, 9, 10, 8],
            },
            cellNotes: {
                'Lemon Tree Hotels': 'FY22 was hit by COVID lockdowns, as it was for every hotel company.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years. Blank where not filed or operating profit was negative.',
            note: 'Hotels collect cash quickly, so most convert 85–110% of operating profit; Mahindra Holidays collects membership fees up front, so its cash runs ahead of its reported profit.',
            values: {
                'Lemon Tree Hotels': [113, 86, 89, 85, 79, 86],
                'Samhi Hotels': [236, 91, 103, 88, 94, 95],
                'EIH': [null, 103, 77, 80, 97, 88],
                'Juniper Hotels': [-55, 105, 105, 92, 93, 91],
                'Chalet Hotels': [63, 105, 118, 129, 90, 106],
                'Ventive Hospitality': [null, null, 93, 91, 87, 89],
                'Leela Palaces Hotels': [null, 83, 98, 93, 105, 97],
                'Viceroy Hotels': [null, -256, 56, 97, 153, 109],
                'Royal Orchid Hotels': [92, 68, 78, 34, 93, 71],
                'Brigade Hotel Ven.': [null, 111, 108, 90, 115, 106],
                'Mahindra Holi.&Resor': [154, 142, 120, 106, 84, 116],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. The last column uses all five years.',
            note: 'Once built, hotels throw off cash: Lemon Tree, Leela, Ventive and Samhi have produced free cash of 17–36% of revenue over their filed years. Viceroy spent heavily on a new hotel in FY26.',
            values: {
                'Lemon Tree Hotels': [16.7, 25.5, 12.5, 34.7, 28.0, 25.1],
                'Samhi Hotels': [8.0, 28.4, 24.8, 19.6, 5.7, 17.4],
                'EIH': [-8.7, 23.6, 19.5, 12.4, 10.1, 13.5],
                'Juniper Hotels': [-29.8, 38.4, 30.4, -15.5, 18.7, 12.2],
                'Chalet Hotels': [3.9, 26.8, 17.9, -1.1, 26.3, 17.0],
                'Ventive Hospitality': [null, null, 52.9, 38.8, 30.6, 35.8],
                'Leela Palaces Hotels': [null, 27.0, 35.7, 26.5, 17.1, 25.8],
                'Viceroy Hotels': [-13.5, -19.3, 1.4, 10.2, -45.5, -13.4],
                'Royal Orchid Hotels': [14.8, 17.1, 16.1, 0.5, 13.5, 11.9],
                'Brigade Hotel Ven.': [null, 28.0, 24.9, 11.5, -11.4, 11.0],
                'Mahindra Holi.&Resor': [18.2, 16.7, 10.6, 10.6, 3.7, 11.4],
            },
        },
        {
            key: 'leverage',
            label: 'Net debt ÷ operating profit',
            unit: 'x',
            periods: FY,
            scale: 'diverging',
            invert: true,
            legend: ['More debt', 'Net cash'],
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash and treasury investments, ÷ operating profit. Figures above 15x in FY22–FY23 are left blank: COVID and its aftermath left operating profit too small for the ratio to mean anything.',
            note: 'Below zero means more cash than debt. Debt has come down fast since COVID; EIH holds net cash, while Mahindra Holidays, Royal Orchid and Viceroy carry 5x or more.',
            values: {
                'Lemon Tree Hotels': [null, 4.8, 4.3, 3.2, 2.7],
                'Samhi Hotels': [null, 11.0, 7.4, 5.3, 3.8],
                'EIH': [null, -1.0, -1.0, -1.2, -1.3],
                'Juniper Hotels': [null, 8.9, 2.9, 4.3, 2.6],
                'Chalet Hotels': [null, 6.0, 4.9, 3.1, 1.7],
                'Ventive Hospitality': [null, null, 0.8, 3.0, 1.9],
                'Leela Palaces Hotels': [null, 9.5, 7.4, 6.5, 1.2],
                'Viceroy Hotels': [null, null, 8.3, 0.5, 6.4],
                'Royal Orchid Hotels': [3.2, 0.7, 1.6, 1.8, 6.0],
                'Brigade Hotel Ven.': [null, 9.8, 6.9, 4.5, 0.3],
                'Mahindra Holi.&Resor': [5.7, 3.8, 3.4, 3.6, 4.8],
            },
            cellNotes: {
                'Brigade Hotel Ven.': 'Debt repaid from its listing money; the company reports ₹108cr of net cash.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. The last column uses all five years.',
            note: 'New hotels cost several years of revenue to build: Chalet spent 56% of revenue in FY25, Brigade 50% and Viceroy 86% in FY26.',
            values: {
                'Lemon Tree Hotels': [16.9, 18.5, 30.9, 7.5, 9.6, 15.7],
                'Samhi Hotels': [0.0, 0.9, 4.0, 12.2, 26.9, 11.8],
                'EIH': [6.8, 6.8, 8.8, 17.7, 23.7, 14.4],
                'Juniper Hotels': [18.1, 4.5, 9.5, 48.2, 18.9, 21.6],
                'Chalet Hotels': [8.3, 15.5, 30.8, 56.4, 12.2, 26.0],
                'Ventive Hospitality': [null, null, 2.5, 3.4, 8.0, 5.8],
                'Leela Palaces Hotels': [null, 10.0, 10.3, 16.0, 33.8, 19.2],
                'Viceroy Hotels': [0.0, 0.0, 5.8, 13.1, 86.0, 25.3],
                'Royal Orchid Hotels': [1.0, 4.1, 4.0, 7.3, 7.9, 5.5],
                'Brigade Hotel Ven.': [null, 2.9, 13.7, 20.3, 49.5, 24.1],
                'Mahindra Holi.&Resor': [6.6, 10.4, 12.5, 11.7, 14.1, 11.4],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Revenue per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): revenue ÷ net fixed assets at year end.',
            note: 'A hotel earns only ₹0.2–0.9 of revenue a year per ₹1 of building; that is why owners need high margins to earn a decent return, and why asset-light management is attractive.',
            values: {
                'Lemon Tree Hotels': [0.1, 0.3, 0.3, 0.4, 0.4],
                'Samhi Hotels': [0.2, 0.4, 0.3, 0.4, 0.4],
                'EIH': [0.3, 0.7, 0.9, 0.9, 0.8],
                'Juniper Hotels': [0.1, 0.2, 0.2, 0.3, 0.3],
                'Chalet Hotels': [0.1, 0.3, 0.3, 0.3, 0.5],
                'Ventive Hospitality': [null, null, 0.9, 0.2, 0.3],
                'Leela Palaces Hotels': [null, 0.2, 0.2, 0.2, 0.2],
                'Viceroy Hotels': [0.2, 0.5, 0.6, 0.8, 0.4],
                'Royal Orchid Hotels': [0.7, 1.3, 1.2, 1.3, 0.5],
                'Brigade Hotel Ven.': [null, 0.6, 0.6, 0.6, 0.6],
                'Mahindra Holi.&Resor': [0.5, 0.6, 0.6, 0.6, 0.5],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'location', label: 'Location and assets', description: 'Hotels in city centres, airports or palaces that cannot be copied nearby.' },
            { key: 'brand', label: 'Brand', description: 'A name guests pay more for, whether its own (Oberoi, Leela, Lemon Tree) or a global one (Marriott, Hyatt).' },
            { key: 'growth', label: 'Room pipeline', description: 'New rooms signed or being built, and how cheaply they are added.' },
            { key: 'price', label: 'Pricing power', description: 'Room-rate and RevPAR growth this year.' },
            { key: 'cash', label: 'Cash and governance', description: 'Debt, cash conversion and how the promoters behave.' },
        ],
        rows: [
            { company: 'Lemon Tree Hotels', trend: 'widening', trendNote: 'Occupancy 75.7% in Q1; fees from others’ hotels up 42%; 23,381 rooms open or signed.',
                grades: { location: { grade: 'B', note: 'Mid-market hotels across many cities' }, brand: { grade: 'A', note: 'Leading mid-market brand' }, growth: { grade: 'A', note: 'Growing by managing others’ hotels' }, price: { grade: 'C', note: 'Room rate up only 2%' }, cash: { grade: 'B', note: 'Net debt falling; promoters hold 22%' } } },
            { company: 'Samhi Hotels', trend: 'widening', trendNote: 'Same-store RevPAR up 9.6%; net debt 3.2x, aiming for 2.5x by FY28.',
                grades: { location: { grade: 'B', note: 'Business-city hotels' }, brand: { grade: 'A', note: 'Marriott, Hyatt and IHG brands' }, growth: { grade: 'B', note: '1,660 rooms in the pipeline' }, price: { grade: 'B', note: 'Occupancy 79%, rates up 3–4%' }, cash: { grade: 'C', note: 'Net debt; plans to raise money every year' } } },
            { company: 'EIH', trend: 'stable', trendNote: 'RevPAR up about 13% in Q1; managed pipeline trimmed to 23 hotels.',
                grades: { location: { grade: 'A', note: 'Oberoi hotels in prime locations' }, brand: { grade: 'A', note: 'Oberoi, one of India’s top luxury names' }, growth: { grade: 'C', note: 'Slow openings; Kolkata delayed to 2028' }, price: { grade: 'A', note: 'Highest room rates' }, cash: { grade: 'A', note: '₹1,338cr net cash' } } },
            { company: 'Juniper Hotels', trend: 'widening', trendNote: 'Margin rising to about 42%; keys to grow from 1,895 to over 3,320.',
                grades: { location: { grade: 'A', note: 'Grand Hyatt Mumbai; big airport and city hotels' }, brand: { grade: 'A', note: 'Hyatt' }, growth: { grade: 'B', note: '₹1,800cr capex plan' }, price: { grade: 'B', note: 'Room rate up 9% in FY26' }, cash: { grade: 'C', note: 'Unclear terms on promoter-group hotels' } } },
            { company: 'Chalet Hotels', trend: 'widening', trendNote: 'Room rate up 8.5%; office rent at ₹29cr a month; ₹3,000cr of capex planned.',
                grades: { location: { grade: 'A', note: 'Mumbai, Bengaluru, Hyderabad, Pune' }, brand: { grade: 'A', note: 'Marriott brands' }, growth: { grade: 'A', note: 'Hotels and offices being built' }, price: { grade: 'B', note: 'RevPAR up 6.5%' }, cash: { grade: 'B', note: 'Converts all profit to cash; debt for projects' } } },
            { company: 'Ventive Hospitality', trend: 'narrowing', trendNote: 'Maldives profit down 32% as diesel costs doubled; no full-year guidance.',
                grades: { location: { grade: 'A', note: 'Pune business hotels; Maldives resorts' }, brand: { grade: 'A', note: 'Marriott, Hilton and Ritz-Carlton brands' }, growth: { grade: 'B', note: '1,700-key pipeline' }, price: { grade: 'B', note: 'India RevPAR up about 20%' }, cash: { grade: 'B', note: 'Promoters hold 89%' } } },
            { company: 'Leela Palaces Hotels', trend: 'widening', trendNote: 'RevPAR up 17% and revenue up 28% in Q1; ₹2,000cr profit target by FY30.',
                grades: { location: { grade: 'A', note: 'Palace hotels in top cities' }, brand: { grade: 'A', note: 'Leela, a top luxury name' }, growth: { grade: 'B', note: 'New hotels planned' }, price: { grade: 'A', note: 'Room rate up 10%' }, cash: { grade: 'B', note: 'Net debt 1.6x; Brookfield-owned' } } },
            { company: 'Viceroy Hotels', trend: 'widening', trendNote: 'Occupancy up from 54% to 76%; a new Courtyard hotel costing ₹120–130cr.',
                grades: { location: { grade: 'B', note: 'Hyderabad' }, brand: { grade: 'B', note: 'Marriott brands' }, growth: { grade: 'B', note: 'One new hotel' }, price: { grade: 'C', note: 'Room rate down 12%' }, cash: { grade: 'C', note: 'Net debt about 6x; recent rights issue' } } },
            { company: 'Royal Orchid Hotels', trend: 'stable', trendNote: '7,700 keys heading past 11,000; profit fell; no guidance.',
                grades: { location: { grade: 'C', note: 'Mid-market hotels in many towns' }, brand: { grade: 'B', note: 'Regenta, Royal Orchid, Iconica' }, growth: { grade: 'A', note: '50+ hotels signed' }, price: { grade: 'B', note: 'Owned-hotel room rate up 14%' }, cash: { grade: 'C', note: 'Lease debt up with new hotels' } } },
            { company: 'Brigade Hotel Ven.', trend: 'stable', trendNote: 'Room rate up 7%; revenue up only 1–2%; CEO resigned.',
                grades: { location: { grade: 'B', note: 'South Indian business cities' }, brand: { grade: 'A', note: 'Marriott brands' }, growth: { grade: 'A', note: 'Keys to double to 3,300 by FY31' }, price: { grade: 'B', note: 'Occupancy 75.7%' }, cash: { grade: 'B', note: 'Net cash now; ₹3,600cr capex ahead' } } },
            { company: 'Mahindra Holi.&Resor', trend: 'stable', trendNote: 'Resort occupancy 86.7%; membership prices up 73%; Finland under review.',
                grades: { location: { grade: 'B', note: 'Holiday resorts across India' }, brand: { grade: 'A', note: 'Club Mahindra' }, growth: { grade: 'B', note: '10,000 keys targeted by 2030' }, price: { grade: 'A', note: 'Membership prices up sharply' }, cash: { grade: 'B', note: 'Members pay up front; net debt 5x' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Lemon Tree and Samhi.** Lemon Tree, the largest mid-market chain, is turning into a hotel manager that earns fees on others' hotels: its fee income rose 42%, it has 23,381 rooms open or signed and guides margins toward about 50%; the price asks for about the growth I expect. Samhi owns Marriott, Hyatt and IHG hotels bought cheaply and turned round, with same-store RevPAR up 9.6% and a target of ₹3,000cr of free cash over FY27–31 against a market value of about ₹3,600cr. Its P/E looks very low because of a one-off tax credit; on a normal tax charge it is about 18x, which still fits my ~15% estimate.",
                "**Follow EIH, Juniper and Chalet.** EIH (Oberoi) has the best brand and ₹1,338cr of net cash but grows slowly. Juniper owns big Hyatt hotels with rising margins, but the terms on which it may buy its promoters' other hotels are unclear. Chalet owns Marriott hotels and offices in big cities and converts all its profit into cash, but its ₹3,000cr building plan needs debt.",
                "**Wait on Ventive, Leela, Viceroy, Royal Orchid, Brigade and Mahindra Holidays.** Leela is growing fastest (RevPAR up 17%) but earns 9% on its capital and its price assumes a great deal. Ventive's Maldives resorts were hit by fuel costs. Viceroy is recovering from insolvency with falling room rates. Royal Orchid and Brigade give little visibility, and Mahindra Holidays' accounting makes its P/E misleading.",
                "**Two things to hold onto before reading the rest.** First, **owning hotels ties up capital**: a hotel earns only ₹0.2–0.9 of revenue a year per ₹1 of building, so owners need 35%-plus margins just to earn 10% on their capital, which is why asset-light managers are prized. Second, **the cycle is strong but supply is coming**: ICRA expects premium occupancy to stay at 72–74% in FY27 with room rates rising again, but about 114,000 branded rooms are in the pipeline.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results. Hotel working-capital cycles are distorted by property stock (Chalet's flats) and membership receivables (Mahindra Holidays), so the cash-cycle chart is left out; return on capital is shown instead. Q1 is the weakest hotel quarter, so compare each Q1 with the Q1 a year earlier.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Indian hotels are in the best cycle in two decades. Demand from weddings, domestic holidays, business travel and conferences has outrun the supply of good rooms, pushing occupancy above 70% and room rates up for several years. The question is how long that lasts as new hotels open.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Land and construction → **hotel owners** (EIH, Leela, Chalet, Ventive, Juniper, Samhi, Brigade, Viceroy) → **brands and managers** (Marriott, Hyatt, IHG, or Indian brands like Lemon Tree and Royal Orchid) → travel sites and agents → guests. **The owner of a well-located hotel captures most of the profit in a boom; the brand manager earns steadier fees with almost no capital.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Domestic leisure travel, weddings and banquets, corporate travel and conferences in Mumbai, Bengaluru, Hyderabad, Pune and Delhi, and a slow return of foreign tourists. ICRA expects premium room rates of ₹8,600–8,800 in FY27, up from ₹8,200–8,500.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Hotels are cyclical.** Occupancy and rates fell sharply in COVID and in earlier slowdowns when new supply arrived. The branded pipeline of about 114,000 rooms is 58% higher than a year earlier, with most openings due in 2026–2030. Fuel costs (Ventive's Maldives resorts), cancelled events (Brigade lost ₹14cr) and foreign-travel scares hit individual quarters.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Lemon Tree** on signing more hotels to manage; **Samhi** on paying down debt from free cash; **EIH** on its prime hotels' room rates; **Juniper** and **Chalet** on new hotels filling; **Ventive** on the Maldives; **Leela** on reaching its FY30 target; **Viceroy** on its new Courtyard; **Royal Orchid** on new managed hotels; **Brigade** on its expansion; **Mahindra Holidays** on selling memberships. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Kind', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Luxury and upscale owners', 'EIH, Leela, Chalet, Ventive, Juniper', '25–55%', '8–21%', '**88–106%**'],
                        ['Owners of branded mid-to-upscale hotels', 'Samhi, Brigade Hotel, Viceroy', '15–37%', '7–13%', '**95–109%**'],
                        ['Managers and membership sellers', 'Lemon Tree, Royal Orchid, Mahindra Holidays', '15–52%', '8–14%', '**71–116%**'],
                    ],
                },
                {
                    caption: 'Rooms, occupancy and room rates, Q1 FY27 (company calls)',
                    columns: ['Company', 'Occupancy', 'Room rate or RevPAR', 'Rooms and pipeline'],
                    rows: [
                        ['Lemon Tree Hotels', '75.7% (up 3.1 points)', 'Room rate ₹6,361 (+2%)', 'About 11,950 open; 23,381 open or signed'],
                        ['Samhi Hotels', '79.3%', 'Same-store RevPAR +9.6%', '1,660 rooms in the pipeline'],
                        ['EIH', 'Not given in this form', 'RevPAR ₹12,801 (from ₹11,352)', '23 managed hotels (1,833 keys) in the pipeline'],
                        ['Juniper Hotels', '75% (FY26)', 'Room rate +9% (FY26)', '1,895 keys, heading to over 3,320'],
                        ['Chalet Hotels', 'Not given in this form', 'Room rate +8.5%; RevPAR +6.5%', 'Hotels and offices being built; ₹3,000cr capex'],
                        ['Ventive Hospitality', 'India 67%', 'India RevPAR about +20%', '1,700-key pipeline'],
                        ['Leela Palaces Hotels', '67.5%', 'Room rate +10%; RevPAR +17%', '15 hotels open'],
                        ['Viceroy Hotels', '76% (from 54%)', 'Room rate −12%; RevPAR +25%', 'One new hotel (180–200 keys)'],
                        ['Royal Orchid Hotels', '70% (owned and leased)', 'Room rate ₹6,233 (+14%)', '7,700 keys, heading past 11,000'],
                        ['Brigade Hotel Ven.', '75.7%', 'Room rate ₹7,241 (+7%)', '1,600 keys to 3,300 by FY31'],
                        ['Mahindra Holi.&Resor', '86.7% (resorts)', 'Membership price +73%', '10,000 keys targeted by 2030'],
                    ],
                    note: 'Room rates depend on the type and city of each hotel, so compare each company with its own history rather than with the others.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect a hotel company's profits. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: prime hotels and top brands',
                    text: "**EIH**'s Oberoi hotels and **Leela**'s palaces sit in locations and command prices that new hotels cannot match. **Juniper**'s Grand Hyatt Mumbai and **Chalet**'s city hotels are similar.",
                },
                {
                    label: 'Lasting and capital-light: managing brands',
                    text: "**Lemon Tree** earns fees from hotels others own, with 23,381 rooms open or signed; **Royal Orchid** does the same at a smaller scale; **Mahindra Holidays**' members pay up front for years of holidays.",
                },
                {
                    label: 'Borrowed brands, own balance sheet',
                    text: "**Samhi**, **Brigade** and **Viceroy** own hotels run under Marriott, Hyatt and IHG brands. The brand brings guests; the owner carries the debt and earns the operating leverage.",
                },
                {
                    label: 'Exposed: one place or one market',
                    text: "**Ventive** depends on Pune and the Maldives; **Viceroy** on Hyderabad; **Mahindra Holidays**' Finnish business is under review.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Indian Hotels (Taj)** and **ITC Hotels**, the two biggest listed Indian chains; **Marriott**, **Hyatt**, **Hilton** and **IHG** managing others' hotels; **OYO** and budget chains in the mid-market.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For owners of good hotels, largely yes, but they swing with the cycle and with each year's one-offs.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Highest: luxury owners in a strong year',
                    text: "**Leela** (36–55%), **Chalet** (40–48%, 46.7% in Q1 without the flats), **Ventive** (35–49%) and **Juniper** (34–44%) earn the most in their busy quarters; **EIH**'s swing between 25% and 43%.",
                },
                {
                    label: 'Rising: moving to fees',
                    text: "**Lemon Tree** (43–52%) guides toward about 50% as more of its income comes from managing others' hotels; the chairman said anything below 50% in FY28 would be a miss.",
                },
                {
                    label: 'Middle: branded owners',
                    text: "**Samhi** (32–37%) and **Brigade** (29–36%) earn solid margins; **Viceroy** has risen from 15% to 25–31% after its turnaround and targets 30% this year and 40% later.",
                },
                {
                    label: 'Lower by design',
                    text: "**Mahindra Holidays** (15–24%) books membership fees over many years, so reported margins understate its cash; **Royal Orchid** (17–26%) earns fees and runs leased hotels.",
                },
                {
                    label: 'One-offs to strip out',
                    text: "**Samhi**'s FY26 profit included a tax credit of about ₹330cr; **Ventive**'s Q1 profit a ₹102cr tax gain; **Chalet**'s Q1 FY26 revenue ₹895cr of flat sales; **EIH** wrote off discarded assets during renovations.",
                },
                {
                    label: 'Cash: hotels collect quickly',
                    text: "Most companies here turned 85–110% of their operating profit into cash over five years; Royal Orchid (71%) is the lowest.",
                },
                {
                    label: 'Costs to watch',
                    text: "Staff, power and fuel, and management fees to brands are the big costs. **Ventive**'s Maldives diesel costs doubled in Q1, cutting profit there by 32%.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 debt and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Lemon Tree Hotels', 'Net debt ₹1,275cr on its own measure; demerger due in 2027', 'Screener net debt ₹1,833cr'],
                        ['Samhi Hotels', 'Net debt ₹1,490cr (3.2x), 2.5x by FY28; plans to raise up to ₹750cr each year', 'Screener net debt ₹1,660cr'],
                        ['Juniper Hotels', 'Net debt ₹625cr on its own measure; ₹1,800cr capex plan', 'Screener net debt ₹1,109cr'],
                        ['Chalet Hotels', '₹3,000cr of capex over FY27–29; about ₹1,091cr of debt tied to unfinished projects', 'Screener net debt ₹2,031cr'],
                        ['Ventive Hospitality', 'Net debt ₹1,514cr (1.2x)', 'Screener net debt ₹2,035cr'],
                        ['Leela Palaces Hotels', 'Net debt ₹1,270cr (1.6x)', 'Screener net debt ₹879cr'],
                        ['Brigade Hotel Ven.', '₹108cr net cash after repaying debt from its listing; ₹3,600cr capex, 60% borrowed', 'Screener net debt ₹58cr'],
                        ['Mahindra Holi.&Resor', '₹5,825cr of membership money not yet booked; cash ₹1,420cr', 'Screener net debt ₹3,032cr (includes leases)'],
                        ['EIH, Viceroy, Royal Orchid', 'EIH net cash ₹1,338cr; Viceroy net debt ₹220cr after a ₹107cr rights issue; Royal Orchid lease debt up', '—'],
                    ],
                    note: 'Company and Screener figures differ because of lease liabilities and cash definitions.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: room rates and occupancy',
                    text: "With supply short in big cities, existing hotels can raise rates: **Leela** +10%, **Chalet** +8.5%, **Brigade** +7%, **Royal Orchid**'s owned hotels +14%. **Lemon Tree** (+2%) and **Samhi** (+3–4%) grew mostly through occupancy.",
                },
                {
                    label: 'Growth driver: new owned hotels',
                    text: "**Chalet** (₹3,000cr over FY27–29), **Brigade** (keys to 3,300 by FY31 on ₹3,600cr), **Juniper** (to over 3,320 keys on ₹1,800cr) and **Viceroy** (a 180–200-key Courtyard) are building. **EIH**'s Kolkata Oberoi Grand is due in September 2028.",
                },
                {
                    label: 'Growth driver: managing others’ hotels',
                    text: "**Lemon Tree** has 2,000 managed rooms opening in FY27; **Royal Orchid** has more than 50 hotels signed. Each adds fee income with almost no capital.",
                },
                {
                    label: 'Growth driver: memberships and resorts',
                    text: "**Mahindra Holidays** raised average membership prices 73% and targets 10,000 keys by 2030; it has ₹5,825cr of membership money yet to be booked as revenue.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Leela** (Q1 revenue +28% against double-digit guidance); **Chalet** (office rent ahead of target at ₹29cr a month); **Lemon Tree** (fees +42%); **Viceroy** (occupancy up from 54% to 76%).",
                },
                {
                    label: 'Cautious',
                    text: "**EIH** and **Royal Orchid** give no guidance; **Ventive** dropped its full-year numbers after the Maldives fuel hit.",
                },
                {
                    label: 'Missed or trimmed',
                    text: "**EIH** trimmed its managed pipeline to 23 hotels and pushed Kolkata to 2028; **Samhi** moved its 2.5x debt target to FY28; **Juniper**'s long-term key target fell from about 4,000 to over 3,320.",
                },
                {
                    label: 'Mixed',
                    text: "**Brigade** is expanding but revenue grew only 1–2% and its CEO resigned. **Royal Orchid** is adding keys but its profit fell.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Viceroy to compound earnings at about 20% from a low base, Lemon Tree and Chalet at about 18%, Samhi, Juniper, Leela, Royal Orchid and Mahindra Holidays at about 15%, and EIH, Ventive and Brigade at about 12%.** For Samhi, that is from a normal-tax profit, not the flattered FY26 figure.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Viceroy Hotels', 'New Courtyard; occupancy', '8% / **20%** / 30%'],
                        ['Lemon Tree Hotels', 'Management fees; margin to 50%', '12% / **18%** / 24%'],
                        ['Chalet Hotels', 'New hotels and offices', '10% / **18%** / 24%'],
                        ['Samhi Hotels', 'RevPAR; lower interest (from normal-tax profit)', '8% / **15%** / 22%'],
                        ['Juniper Hotels', 'New keys; margin', '8% / **15%** / 22%'],
                        ['Leela Palaces Hotels', 'FY30 target; room rates', '8% / **15%** / 22%'],
                        ['Royal Orchid Hotels', 'Managed signings', '5% / **15%** / 22%'],
                        ['Mahindra Holi.&Resor', 'Membership prices; new keys', '8% / **15%** / 20%'],
                        ['EIH', 'Room rates; slow openings', '6% / **12%** / 16%'],
                        ['Ventive Hospitality', 'Pune; Maldives recovery', '5% / **12%** / 18%'],
                        ['Brigade Hotel Ven.', 'New keys by FY31', '5% / **12%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Lemon Tree Hotels', 'Margin toward about 50%; 2,000 managed rooms opening in FY27', 'Light; demerger in 2027', '**On track**'],
                        ['Samhi Hotels', 'Same-store revenue +9–11%; ₹3,000cr free cash FY27–31', 'Re-branding 450 rooms up-market', '**Delayed** debt target to FY28'],
                        ['EIH', 'None', 'Renovations; Kolkata by September 2028', '**Trimmed** pipeline'],
                        ['Juniper Hotels', 'Margin rising', '₹1,800cr', '**Delivered** margins; key target cut'],
                        ['Chalet Hotels', 'Office rent ₹30–32cr a month', '₹3,000cr over FY27–29', '**Delivered**: rent ahead of target'],
                        ['Ventive Hospitality', 'None for the full year now', '1,700-key pipeline', '**Walked back** full-year numbers'],
                        ['Leela Palaces Hotels', 'Double-digit revenue growth; ₹2,000cr EBITDA by FY30', 'New hotels', '**Beat**: Q1 +28%'],
                        ['Viceroy Hotels', 'Margin above 30% in FY27, 40% later', '₹120–130cr Courtyard', '**On track**'],
                        ['Royal Orchid Hotels', 'None', 'Leases and managed hotels', '**No guidance**'],
                        ['Brigade Hotel Ven.', 'Mid-teens revenue growth; ADR above ₹7,500', '₹500cr in FY27; ₹3,600cr to FY31', '**Behind**: growth 1–2%'],
                        ['Mahindra Holi.&Resor', '10,000 keys by 2030; no dividend before FY28', 'New resorts', '**On track**'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'The supply wave',
                    text: "About 114,000 branded rooms are in the pipeline, 58% more than a year earlier. If demand slows as they open, room rates stop rising and owners with new hotels (**Chalet**, **Brigade**, **Juniper**) feel it first. Most managements did not address it directly.",
                },
                {
                    label: 'Debt',
                    text: "Owners carry debt for new hotels: **Chalet**, **Ventive** and **Samhi** each have Screener net debt of ₹1,600–2,000cr; **Mahindra Holidays** about 5x operating profit including leases; **Viceroy** about 6x. **Samhi** plans to raise equity every year, which means more shares.",
                },
                {
                    label: 'Travel shocks',
                    text: "Wars, pandemics and fuel costs hit hotels quickly: **Ventive**'s Maldives resorts lost 32% of profit to diesel costs in one quarter; **Brigade** lost ₹14cr to cancelled events; foreign tourist arrivals remain below their old peak.",
                },
                {
                    label: 'Accounting that flatters or hides',
                    text: "**Samhi**'s FY26 profit was more than doubled by a tax credit; **Ventive**'s Q1 by a ₹102cr tax gain; **Mahindra Holidays**' membership accounting hides cash profits. Read profit before one-offs.",
                },
                {
                    label: 'Governance',
                    text: "**Juniper** will not say when or how it may buy its promoters' other hotels, beyond paying in shares. **Chalet** leases a hotel from its own group. **Ventive**'s promoters hold 89%, leaving few shares to trade. **Brigade**'s CEO resigned. **Lemon Tree**'s promoters hold only 22%.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. **For hotels, EV/EBITDA is the better yardstick**: debt, depreciation and one-off tax items distort P/Es heavily.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **4% at 8–9x, 16% at 26x, 17% at 28x, 19% at 33x, 20% at 36x, 22% at 41–42x and 31% at 87x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Mahindra Holidays** looks expensive on P/E (about 87x) but moderate on EV/EBITDA (about 12x) because its accounting defers membership profit. **Samhi** looks cheap on P/E but about 12x on EV/EBITDA, in line with peers. **EIH** is the only one with net cash.",
                },
                {
                    label: 'Reasonable',
                    text: "**Lemon Tree**, **Samhi** (on a normal tax charge), **Juniper**, **Chalet** and **Viceroy**: prices that ask for about the growth I expect.",
                },
                {
                    label: 'Full',
                    text: "**EIH**, **Ventive** and **Royal Orchid**: each needs a few points more than my estimate.",
                },
                {
                    label: 'Stretched',
                    text: "**Leela**, **Brigade** and **Mahindra Holidays** (on P/E): each needs growth well above my estimate.",
                },
                {
                    label: 'A caution on the checks',
                    text: "The live check uses today's P/E. For **Samhi**, that P/E is flattered by a one-off tax credit, so the green check overstates how cheap it is; for **Mahindra Holidays**, the red check overstates how expensive it is.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Lemon Tree Hotels', rank: 1, stance: 'COMPOUNDER', segment: MANAGERS,
            what: "India's largest mid-market hotel chain, moving from owning hotels to managing hotels that others own, with a demerger due in 2027.",
            view: "**Turning asset-light.** Occupancy 75.7%, fees from others' hotels up 42% and margins heading toward about 50%, with 23,381 rooms open or signed. Promoters own only 22%. The price asks for about my ~18% estimate.",
            watch: 'Fee growth; margin toward 50%; the demerger.',
        },
        {
            company: 'Samhi Hotels', rank: 2, stance: 'SCALEUP', segment: BRANDED,
            what: "Owns hotels run under Marriott, Hyatt and IHG brands in Indian business cities, bought cheaply and turned round.",
            view: "**Cash generation at a modest price.** Same-store RevPAR up 9.6% and ₹3,000cr of free cash targeted over five years; its low P/E is flattered by a tax credit, but on a normal charge it still fits my ~15% estimate.",
            watch: 'Net debt toward 2.5x; equity raises; RevPAR.',
        },
        {
            company: 'EIH', rank: 3, stance: 'PRICED', segment: LUXURY,
            what: "Owns and runs Oberoi and Trident hotels in India and abroad, and manages hotels for others.",
            view: "**The best brand, growing slowly.** RevPAR up about 13% and ₹1,338cr of net cash, but openings are slow, the pipeline was trimmed and there is no guidance. The price needs a few points more than my ~12% estimate.",
            watch: 'Openings; RevPAR; foreign tourist recovery.',
        },
        {
            company: 'Juniper Hotels', rank: 4, stance: 'SCALEUP', segment: LUXURY,
            what: "Owns large Hyatt hotels, including the Grand Hyatt Mumbai, in business cities and near airports.",
            view: "**Rising margins, unclear promoter deals.** Margins up to about 42% and keys set to grow from 1,895 to over 3,320, but no clarity on buying its promoters' other hotels. The price asks for about my ~15% estimate.",
            watch: 'Promoter-hotel deals; new keys; debt.',
        },
        {
            company: 'Chalet Hotels', rank: 5, stance: 'SCALEUP', segment: LUXURY,
            what: "Owns Marriott-branded hotels in Mumbai, Bengaluru, Hyderabad and Pune, plus office buildings, and sold flats in Bengaluru.",
            view: "**Good assets, heavy building.** Room rates up 8.5%, office rent ahead of target and all profit converted to cash, but ₹3,000cr of capex needs debt. The price asks for about my ~18% estimate.",
            watch: 'New hotels opening; office leasing; debt.',
        },
        {
            company: 'Ventive Hospitality', rank: 6, stance: 'CYCLICAL', segment: LUXURY,
            what: "Owns luxury business hotels in Pune and resorts in the Maldives, under global brands.",
            view: "**Strong India, hurt Maldives.** India RevPAR up about 20%, but Maldives profit fell 32% on fuel costs, full-year numbers were withdrawn and Q1 profit included a ₹102cr tax gain. The price needs more than my ~12% estimate.",
            watch: 'Maldives costs; India occupancy; guidance.',
        },
        {
            company: 'Leela Palaces Hotels', rank: 7, stance: 'PRICED', segment: LUXURY,
            what: "Owns and runs Leela palace hotels in India's top cities; controlled by Brookfield; listed in 2025.",
            view: "**Fastest growth, full price.** Revenue up 28% and RevPAR up 17% in Q1, with a ₹2,000cr profit target for FY30, but it earns 9% on its capital. The price needs well above my ~15% estimate.",
            watch: 'Progress to the FY30 target; new hotels; return on capital.',
        },
        {
            company: 'Viceroy Hotels', rank: 8, stance: 'TURNAROUND', segment: BRANDED,
            what: "Owns Marriott-branded hotels in Hyderabad and is building a new Courtyard, after emerging from insolvency.",
            view: "**A recovery with falling rates.** Occupancy up from 54% to 76% and RevPAR up 25%, but room rates fell 12% and net debt is about 6x. The price asks for about my ~20% estimate; I want to see the new hotel open.",
            watch: 'Courtyard opening; margin above 30%; debt.',
        },
        {
            company: 'Royal Orchid Hotels', rank: 9, stance: 'SCALEUP', segment: MANAGERS,
            what: "Runs mostly managed mid-market hotels (Regenta, Royal Orchid, Iconica) plus some leased and owned ones.",
            view: "**Growing keys, shrinking profit.** 7,700 keys heading past 11,000, but profit fell, lease debt rose and there is no guidance. The price needs a little more than my ~15% estimate.",
            watch: 'Profit from new hotels; lease costs; guidance.',
        },
        {
            company: 'Brigade Hotel Ven.', rank: 10, stance: 'SCALEUP', segment: BRANDED,
            what: "Owns the Brigade Group's Marriott-branded hotels in South India and plans to double its keys by FY31.",
            view: "**Big plans, slow quarter.** Keys to double to 3,300 on ₹3,600cr of capex, but revenue grew only 1–2% and its CEO resigned. The price needs well above my ~12% estimate.",
            watch: 'Growth back to mid-teens; new CEO; capex funding.',
        },
        {
            company: 'Mahindra Holi.&Resor', rank: 11, stance: 'CYCLICAL', segment: MANAGERS,
            what: "Club Mahindra: sells holiday memberships and runs resorts across India, plus Holiday Club Resorts in Finland.",
            view: "**Cash-rich accounting, weak reported profit.** Resort occupancy 86.7%, membership prices up 73% and ₹5,825cr of fees yet to be booked, but net debt about 5x and the Finnish business under review. On P/E the price needs far more than my ~15% estimate; on EV/EBITDA it is moderate.",
            watch: 'Membership sales; Finland decision; debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Managers and membership sellers.** **Lemon Tree Hotels: own.** **Royal Orchid Hotels: wait** for profit and guidance. **Mahindra Holi.&Resor: wait**, judging it on cash and EV/EBITDA rather than P/E.",
            "**Owners of branded hotels.** **Samhi Hotels: own**, on its normal-tax profit. **Viceroy Hotels: wait** for its new hotel. **Brigade Hotel Ven.: wait** for growth and a new CEO.",
            "**Luxury and upscale owners.** **EIH**, **Juniper Hotels** and **Chalet Hotels: follow** for better prices. **Ventive Hospitality** and **Leela Palaces Hotels: wait**.",
            "**What would change my view.** For the better: room rates keep rising as the new supply arrives; Juniper clarifies its promoter deals. For the worse: a travel shock or a supply-driven slowdown in room rates.",
            "**What to watch next quarter.** Q2 is seasonally weak, so watch RevPAR growth against a year earlier; Lemon Tree's fees; Samhi's debt; Leela's progress; Ventive's Maldives costs.",
        ],
        bottomLine:
            "Own the asset-light chain and the cash-generating branded owner (Lemon Tree Hotels, Samhi Hotels), follow the quality owners for better prices (EIH, Juniper Hotels, Chalet Hotels), and wait on the rest (Ventive Hospitality, Leela Palaces Hotels, Viceroy Hotels, Royal Orchid Hotels, Brigade Hotel Ven., Mahindra Holi.&Resor).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/LEMONTREE/consolidated/' },
        { label: 'ICRA projects 7–9% growth for the hospitality sector in FY27 — Hospitality Biz India', url: 'https://hospitalitybizindia.com/news-track/icra-projects-7-9-growth-for-hospitality-sector-in-fy27/' },
        { label: 'The Indian hospitality industry, March 2026 — ICRA', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6849' },
        { label: 'Hotel demand lifts India’s H2 FY27 growth outlook — The Arabian Post', url: 'https://thearabianpost.com/hotel-demand-lifts-indias-h2fy27-growth-outlook/' },
        { label: 'Report: India’s hotel demand surpasses supply — Asian Hospitality', url: 'https://www.asianhospitality.com/india-hotel-demand-market-growth/' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
