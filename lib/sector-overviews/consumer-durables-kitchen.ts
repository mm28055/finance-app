import { SectorOverview } from './types';
import { consumerDurablesKitchenBusinesses } from './consumer-durables-kitchen-businesses';
import { consumerDurablesValuationInputs } from './card-data/consumer-durables';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const COOK = 'Cookware and kitchen appliances — pressure cookers, pans, gas stoves and induction cooktops for Indian homes';
const HOUSE = 'Houseware, glass, plastics and sinks — Indian brands and China+1 exporters to global retailers';

export const consumerDurablesKitchen: SectorOverview = {
    sector: 'Consumer Durables',
    title: 'Consumer Durables · Kitchen and houseware',
    format: 'ranked',
    businesses: consumerDurablesKitchenBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '28 Sep 2026',
        inputs: consumerDurablesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        // Borosil is not in the live table (the dashboard's market value for it belongs to Borosil Renewables),
        // so its estimate is shown in the note but not priced live.
        myGrowth: {
            'Carysil': 17,
            'TTK Prestige': 14,
            'Cello World': 12,
            'All Time Plastic': 16,
            'Stove Kraft': 18,
            'Borosil': 15,
        },
    },
    standfirst:
        "Six companies that fill the Indian kitchen and, increasingly, kitchens abroad. This is one of five groups on the Consumer Durables page; the others cover cooling and electrical appliances, paints and coatings, tiles, bath and wood panels, and lifestyle brands (footwear, personal care and sleep). Two sell **cookware and kitchen appliances** under their own brands: **TTK Prestige**, the leader in pressure cookers, and **Stove Kraft**, which sells the value brand Pigeon. Four make **houseware, glass, plastics and sinks**: **Cello World** (plastic, glass and steel houseware, pens and moulded furniture), **Borosil** (heat-resistant glassware, Larah opalware tableware and Hydra steel bottles), and two exporters that win business as global retailers move buying away from China, the so-called ‘China+1’ shift: **All Time Plastics**, whose biggest customer is IKEA, and **Carysil**, which makes quartz kitchen sinks for IKEA, Lowe's, Home Depot and Howdens. This edition was built from both of the last two earnings calls for every company (checked against the official transcripts, several of the stored copies being wrong), the Q1 FY27 presentations, the FY26 annual reports, rating reports from CRISIL and ICRA, the government's anti-dumping finding on Chinese glassware, and sector work from ICRA, ICICI Securities, Anarock and the RBI. The headline: the West Asia war split this group in two. Its cooking-gas (LPG) shortage sent Indian families to buy induction cooktops, so TTK Prestige grew 34% and Stove Kraft 41% in Q1 FY27, a rush both managements say will not last; the same war doubled the price of the gas that glass furnaces burn and lifted plastic prices 40–50%, so Cello's sales were flat, and Borosil's and All Time's margins fell to 14%. This note judges each company on normal earnings. The annual reports turned up an auditor's emphasis paragraph on an income-tax search, gaps between bank and book figures and a promoter pledge at Stove Kraft, a UK impairment test at TTK that passed only after its growth assumptions were raised, a fifteen-fold jump in Cello's disputed tax claims, and one customer, IKEA, taking 57% of All Time's sales. Borosil's valuation is not measured live because the dashboard mixes it up with another company. Every chart uses filed results.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated for all except Stove Kraft, whose Screener consolidated page stops at FY21; its standalone figures match the results it reports.',
            note: "Three margin levels. Carysil (19–20%) and Cello (19–22%) earn the most: Carysil because its quartz sinks are made cheaply in India and sold under long programmes to Western retailers, Cello because its houseware carries gross margins above 50%. All Time Plastics and Borosil sit in the teens and swing with plastic and gas prices. TTK Prestige and Stove Kraft earn 7–12%, because much of what they sell is contract-made or bought in, and both spend heavily on advertising, stores and, at TTK, consultants. Q1 FY27 split the group: the induction rush during the cooking-gas shortage lifted TTK and Stove Kraft, while gas and plastic costs hit Cello, Borosil and All Time before their price rises took effect.",
            values: {
                'Cello World': [21, 22, 19, 20, 19],
                'TTK Prestige': [7, 12, 9, 9, 10],
                'Borosil': [16, 14, 16, 11, 13],
                'Carysil': [19, 19, 19, 19, 20],
                'Stove Kraft': [11, 12, 9, 9, 11],
                'All Time Plastic': [18, 11, 15, 15, 14],
            },
            cellNotes: {
                'Cello World': "Cello's own ‘EBITDA’ includes other income: it reported 22.2% for Q1 FY27 against the filed 19%. The margin has fallen from 25% in FY24 as the new glass plant ran at break-even and steel bottles lost 5–6 points when imports stopped.",
                'TTK Prestige': "About ₹80cr a year of one-off ‘strategy’ spending (consultants on sourcing, sales and innovation) sits in operating costs. The company's standalone figure for Q1 FY27 was 13.1% before it and 11.5% after (company-adjusted). Q1 FY26's 7% was the low point.",
                'Borosil': "Q4 FY26 and Q1 FY27 carry the gas-price shock: fuel rose to 5.8% of sales from 2.9%, a net cost of about ₹10cr in Q1 (company). Price rises of 5–7% took effect only from mid-May. The company's operating figure for Q1 was 14.2%.",
                'Carysil': "The company's 21.2% for Q1 FY27 is struck on total income and before employee share-option costs (company-adjusted); the filed figure is 20%, a record.",
                'Stove Kraft': "Standalone. The company reported 11.2% for Q1 FY27; gross margin rose 1.3 points on price rises of about 10%, but outsourced production, marketing and franchise commissions ate most of it.",
                'All Time Plastic': "Q1 FY26's 18% came before a new plant added cost ahead of volume and before plastic prices jumped 40–50%. Q1 FY27's 14.3% (company) sits just above CRISIL's 14% downgrade trigger.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated for all except Stove Kraft (standalone, which matches its reported results).',
            note: "The Q1 FY27 jumps at Stove Kraft (+41%) and TTK Prestige (+34%) came from the cooking-gas (LPG) shortage after the West Asia war, which sent families to buy induction cooktops and refurbish kitchens; both managements say it will not last. Carysil has grown a steady 10–16% on its export programmes. Cello was flat in Q1 as shops cut stock and its 12–13% price rises cost volume. Borosil grew on volume, not price. All Time Plastics barely grew, and its FY26 tonnage was flat on FY25.",
            values: {
                'Cello World': [6, 20, -1, 11, 0],
                'TTK Prestige': [4, 11, 10, 12, 34],
                'Borosil': [7, 22, 0, 5, 9],
                'Carysil': [13, 16, 10, 15, 15],
                'Stove Kraft': [8, 13, -6, 33, 41],
                'All Time Plastic': [22, 12, 7, -1, 3],
            },
            cellNotes: {
                'TTK Prestige': "Only about 3 points of Q1's 34% was price, the finance head said; the rest was volume and mix, led by cookware, then appliances. Management called the pace ‘not a sustainable consistent demand’.",
                'Stove Kraft': "Standalone. Induction cooktops grew 316% in Q1 FY27 to 27% of revenue; pressure cookers grew 41%; small appliances and gas stoves fell because their lines were switched to induction.",
                'Carysil': "The company's +16.5% is total income, including other income; filed sales grew 15%. Quartz-sink volume grew only 6% because export containers slipped into Q2.",
                'All Time Plastic': "About ₹5.5cr of June shipments slipped into July (company). The company also stopped supplying Indian shops for about eight weeks to force through a full price rise.",
                'Borosil': "Q1 FY27 by business (company): opalware +10%, glassware +17%, steel bottles, appliances and other +4%, all led by volume.",
                'Cello World': "Q1 FY27: pens and stationery +52%, but houseware fell. Management said shops had run down their stock and it would give no guidance until next quarter.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated for all except Stove Kraft (standalone). All Time Plastics listed in August 2025 and Screener shows its ratios only from FY26.',
            note: "Returns have fallen almost everywhere. Cello's dropped from 53% to 17% as its margin fell and cash raised from investors sat idle on its balance sheet. TTK Prestige halved to 12% on three flat years, a UK write-off and large cash holdings. Borosil and Stove Kraft have earned only 11% for three years despite heavy spending on plants and shops. Carysil is the steadiest at 15–18%, and All Time Plastics' 12% is diluted by listing money not yet spent.",
            values: {
                'Cello World': [53, 48, 36, 24, 17],
                'TTK Prestige': [24, 18, 14, 12, 12],
                'Borosil': [18, 6, 14, 12, 11],
                'Carysil': [27, 18, 17, 15, 18],
                'Stove Kraft': [19, 13, 11, 11, 11],
                'All Time Plastic': [null, null, null, null, 12],
            },
            cellNotes: {
                'TTK Prestige': "FY25 profit was cut by a ₹71.4cr write-down of the UK business (Horwood). Over ₹870cr of cash and liquid investments sits in the capital base.",
                'Borosil': "The company's own ‘operational’ return was 10.7% in FY26. About ₹105cr of unfinished projects sat on the balance sheet at March 2026.",
                'All Time Plastic': "The company's annualised figure fell from about 20% in Q1 FY26 to about 9% in Q1 FY27 as listing cash and a new plant joined the base.",
                'Stove Kraft': "Standalone. Over ₹500cr has been spent on plants and stores since FY21, but profit before tax over FY22–FY26 added up to only about ₹256cr.",
            },
        },
        {
            key: 'ccc',
            more: true,
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated for all except Stove Kraft (standalone); All Time Plastics from FY25 only.',
            note: "Three of the six tie up more than eight months of sales: Cello (255 days), Borosil (259) and Carysil (257), each for its own reason: long credit to distributors and government buyers at Cello, stock built ahead of import rules at Borosil, and stock made to each retailer's specification at Carysil. TTK Prestige runs at about four months, All Time Plastics at under three. Stove Kraft's cut to 27 days is mostly financing, not efficiency.",
            values: {
                'Cello World': [265, 230, 248, 271, 255],
                'TTK Prestige': [89, 114, 113, 125, 119],
                'Borosil': [194, 136, 194, 262, 259],
                'Carysil': [126, 137, 216, 251, 257],
                'Stove Kraft': [74, 68, 65, 73, 27],
                'All Time Plastic': [null, null, null, 96, 82],
            },
            cellNotes: {
                'Stove Kraft': "FY26's drop came from suppliers being paid by a financier through the TReDS invoice platform, bank financing of dealer receivables and supplier's credit on machinery. The company's own measure rose back to 45 days in June 2026, from 23 in March.",
                'Cello World': "FY26: debtor days 118, stock 191, payables 54. The company's own working-capital measure is about 178 days.",
                'Borosil': "Stock of 282 days in FY26: Hydra bottles and appliances imported ahead of quality-control deadlines, and a borosilicate furnace that makes more than it sells at its minimum efficient size.",
                'Carysil': "Stock of 319 days in FY26; ICRA blames customer-specific designs and imported inputs.",
                'All Time Plastic': "The company's own measure: 57 days at March 2026 and 60 at June (stock 44, debtors 50, payables 34).",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years (two for All Time Plastics). Consolidated for all except Stove Kraft (standalone).',
            note: "TTK Prestige turned 71% of its operating profit into cash over five years, a fair result for a stock-heavy business. Cello, Carysil and Borosil each turned only about half, which is the long cash cycle showing up. Stove Kraft's 91% looks best but rests on one year, FY26, when financing moves released cash; before that it absorbed cash. All Time Plastics' two years average 72%.",
            values: {
                'Cello World': [56, 54, 45, 51, 54, 52],
                'TTK Prestige': [69, 55, 95, 61, 76, 71],
                'Borosil': [53, 181, 35, -11, 70, 50],
                'Carysil': [50, 65, 40, 43, 61, 52],
                'Stove Kraft': [-5, 75, 93, 86, 164, 91],
                'All Time Plastic': [null, null, null, 51, 96, 72],
            },
            cellNotes: {
                'Stove Kraft': "FY26 operating cash of ₹258cr was 1.6 times operating profit because payables rose from 107 to 133 days and receivables were financed; that is a one-time release.",
                'Borosil': "FY25 operating cash was negative (−₹19cr) as stock was built ahead of the ban on non-certified imported steel bottles.",
                'All Time Plastic': "The company puts FY25 operating cash at ₹39.4cr, below Screener's ₹52cr.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated for all except Stove Kraft (standalone); All Time Plastics from FY25.',
            note: "Only TTK Prestige has produced free cash every year, about 6% of revenue, because it spends little on plants. Cello's free cash shrank to 1.5% in FY26 as it spent ₹219cr on steel-bottle and other lines. Carysil has been near zero for five years: its growth eats all its cash. Borosil has been negative for four years running. All Time Plastics is spending its listing money on a new plant.",
            values: {
                'Cello World': [9.9, 6.3, -1.7, 4.4, 1.5, 3.6],
                'TTK Prestige': [9.3, 4.7, 8.3, 4.2, 4.1, 6.1],
                'Borosil': [-1.3, -16.3, -13.6, -10.7, -1.6, -8.3],
                'Carysil': [-5.2, 2.2, -5.8, 1.6, -0.2, -1.2],
                'Stove Kraft': [-10.3, -1.8, -0.1, 3.3, 9.2, 0.8],
                'All Time Plastic': [null, null, null, -11.1, -7.7, -9.3],
            },
            cellNotes: {
                'Stove Kraft': "FY26's ₹150cr of free cash is flattered: part of the year's capex was paid for with supplier's credit, and the working-capital release was financed.",
                'Borosil': "A ₹150cr share sale in June 2024 repaid debt; FY27 capex of ₹125–150cr means free cash will stay weak this year.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated for all except Stove Kraft (standalone); All Time Plastics from FY25.',
            note: "Below zero means more cash than debt. TTK Prestige and Cello hold large net cash, over ₹870cr and about ₹700cr. All Time Plastics repaid most of its debt with listing money. Borosil and Stove Kraft carry modest debt, and Carysil the most, at about 1.2 times operating profit, which ICRA expects to stay below 1.5 times.",
            values: {
                'Cello World': [0.8, 0.3, 0.3, -1.3, -1.5],
                'TTK Prestige': [-1.6, -2.0, -2.7, -2.5, -2.5],
                'Borosil': [-1.5, -0.9, 0.5, 0.2, 0.4],
                'Carysil': [1.3, 2.0, 2.3, 1.5, 1.2],
                'Stove Kraft': [0.7, 1.8, 2.0, 2.4, 0.6],
                'All Time Plastic': [null, null, null, 2.1, -0.4],
            },
            cellNotes: {
                'Stove Kraft': "Screener's borrowings leave out a ₹76cr liability from selling and leasing back a plant in Q4 FY26. Counting it, store leases and supplier's credit, net debt was ₹171cr at March 2026; the company quotes ₹27cr by leaving them out.",
                'TTK Prestige': "Its borrowings are mostly store leases plus a UK loan of about ₹44cr; the Indian parent is debt-free.",
                'Borosil': "Net debt rose from ₹50cr at March 2026 to ₹99cr at June 2026 (company). ICRA would consider a downgrade above 1.5 times operating profit.",
                'Carysil': "Gross debt ₹270cr and cash ₹59cr at March 2026 (company).",
                'All Time Plastic': "₹143cr of the listing money repaid debt in August 2025; borrowings were ₹86cr at March 2026, and ₹90cr of listing money sat in deposits.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated for all except Stove Kraft (standalone); All Time Plastics from FY25.',
            note: "All Time Plastics (a new plant) and Borosil (furnaces, a bottle plant and solar power) spend the most. Carysil spends about 11% of revenue a year adding sink lines. TTK Prestige spends only about 2%, because it buys in its appliances.",
            values: {
                'Cello World': [3.8, 6.3, 13.2, 7.8, 9.4, 8.5],
                'TTK Prestige': [1.5, 2.4, 2.5, 1.5, 3.0, 2.2],
                'Borosil': [10.6, 33.0, 18.7, 9.0, 11.7, 15.5],
                'Carysil': [15.9, 9.8, 13.6, 5.8, 12.0, 11.0],
                'Stove Kraft': [9.9, 7.7, 8.4, 5.7, 6.9, 7.6],
                'All Time Plastic': [null, null, null, 20.4, 21.8, 21.1],
            },
            cellNotes: {
                'TTK Prestige': "A three-year ₹500cr programme (₹300cr capex, ₹200cr consultants and process work) is about one-third spent; FY27 capex about ₹100cr.",
                'Carysil': "FY27 plan raised to ₹80–90cr: 2.5 lakh more quartz sinks and 1.5 lakh more steel sinks by March 2027.",
                'Cello World': "FY26 ₹219cr (steel-bottle lines, pens, maintenance); FY27 plan about ₹100cr.",
                'Stove Kraft': "FY26 cash capex of ₹109–111cr against a ₹50cr plan, partly paid with supplier's credit; FY27 plan about ₹40cr, which new projects make unlikely.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'brand', label: 'Brand and category position', description: 'Whether shoppers ask for the brand by name, and the share or leadership it holds in its main category.' },
            { key: 'make', label: 'Own manufacturing and cost', description: 'How much of what it sells it makes itself, how far back into parts it goes, and the cost advantage that results.' },
            { key: 'reach', label: 'Distribution and customer programmes', description: 'Reach into Indian shops, stores and online marketplaces, or long supply programmes with global retailers that are hard to move.' },
            { key: 'pricing', label: 'Pricing power', description: 'Whether it passed on the 2026 jump in gas, plastic and metal costs without losing volume.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what auditors, rating agencies, related parties, pledges and guarantees show.' },
        ],
        rows: [
            { company: 'Carysil', trend: 'widening', trendNote: 'Record 20% margin, steel-sink lines sold out, ‘the highest ever export order booking’, Home Depot extended and Amazon USA added; new quartz and steel lines due by March 2027.',
                grades: { brand: { grade: 'C', note: 'Sells mostly under retailers’ names' }, make: { grade: 'A', note: 'Low-cost quartz sinks, 88% used' }, reach: { grade: 'A', note: 'IKEA, Lowe’s, Home Depot, Howdens' }, pricing: { grade: 'A', note: '90% of US tariff discounts undone' }, cash: { grade: 'C', note: '257-day cycle; free cash near zero' } } },
            { company: 'TTK Prestige', trend: 'widening', trendNote: 'Share gains in most categories in FY26, 162 new products, general trade growing again after three years, and 5–8% price rises taken with no visible loss of volume.',
                grades: { brand: { grade: 'A', note: 'Leader in pressure cookers' }, make: { grade: 'B', note: 'Cookware in-house; appliances bought' }, reach: { grade: 'A', note: '709 own-brand stores, 568 service centres' }, pricing: { grade: 'B', note: '5–8% rises, volume held' }, cash: { grade: 'B', note: 'Net cash ₹870cr+; UK losses, logo fee' } } },
            { company: 'Cello World', trend: 'narrowing', trendNote: 'Margin down from 25% to 20% in two years, guidance withdrawn within ten weeks, and management says Chinese imports rule out further price rises; pens are the bright spot.',
                grades: { brand: { grade: 'B', note: 'Widest houseware range in India' }, make: { grade: 'B', note: '77% made in-house; glass at 60%' }, reach: { grade: 'A', note: '1.8 lakh retailers; online 16%' }, pricing: { grade: 'C', note: 'Rises cost volume; no more possible' }, cash: { grade: 'C', note: 'Net cash, but 255-day cycle' } } },
            { company: 'All Time Plastic', trend: 'stable', trendNote: 'Twenty-seven years with IKEA and formula-based price pass-through, but FY26 tonnage was flat, the plant is only 65% used, and one customer takes 57% of sales.',
                grades: { brand: { grade: 'D', note: 'Own brand only 12–13% of sales' }, make: { grade: 'B', note: 'All-electric machines, own moulds' }, reach: { grade: 'B', note: '27 years with IKEA; IKEA 57%' }, pricing: { grade: 'B', note: 'Formula pass-through, 8-week lag' }, cash: { grade: 'B', note: 'Clean audit; net cash after listing' } } },
            { company: 'Stove Kraft', trend: 'stable', trendNote: 'Its own parts and plants let it double induction output in the gas shortage, but it sells a value brand, calls itself ‘cost plus’ and has earned only 8–9% on equity for three years.',
                grades: { brand: { grade: 'C', note: 'Value brand; no switching cost' }, make: { grade: 'A', note: '97–98% in-house; own circuit boards' }, reach: { grade: 'B', note: 'Online 32%; 346 own stores' }, pricing: { grade: 'C', note: 'Cost-plus pass-through' }, cash: { grade: 'C', note: 'Auditor emphasis; promoter pledge' } } },
            { company: 'Borosil', trend: 'stable', trendNote: 'Only Indian maker of borosilicate kitchen glass, with a proposed anti-dumping duty on Chinese imports and its own bottle plant now running; but opalware growth is ‘muted’ and returns sit near 11%.',
                grades: { brand: { grade: 'A', note: 'Name used for all heat-proof glass' }, make: { grade: 'B', note: 'Sole Indian borosilicate furnace' }, reach: { grade: 'C', note: 'About 250 distributors' }, pricing: { grade: 'C', note: '₹2cr recovered of ₹12cr cost rise' }, cash: { grade: 'D', note: 'Free cash negative four years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Follow Carysil.** **Carysil** makes composite quartz kitchen sinks in Gujarat, most of them exported to Western retailers such as IKEA, Lowe's, Home Depot and Howdens, plus steel sinks, kitchen hoods, taps, and stone worktops in the UK and US. FY26 sales rose 13% to ₹924cr and profit 55% to ₹99cr (filed), Q1 FY27 earned a record 20% margin, and management says export orders are the highest ever. It is adding 2.5 lakh quartz sinks and 1.5 lakh steel sinks by March 2027 for about ₹60–70cr, cheap capacity that should fill within a year. The catch is cash: stock of about 319 days means free cash has been near zero for five years, and net debt is about ₹211cr (company). I expect about 17% a year of earnings growth; the price needs about 17%. **Follow it; buy on a weak export quarter, and move up to own once its stock days start to fall.**",
                "**Follow TTK Prestige.** **TTK Prestige** is India's leading pressure-cooker and cookware brand and a large seller of gas stoves, induction cooktops and mixers. After three flat years, sales grew 10% in FY26 and 34% in Q1 FY27, when the cooking-gas shortage sent families to buy induction cooktops and refurbish kitchens; only about 3 points of that growth was price. It has over ₹870cr of cash and a CRISIL AA rating, and is spending ₹500cr over three years on factories and consultants, aiming to lift the margin to ‘13%, 13-plus’ from about 11.5% after that spending. I expect about 14% a year; the price needs about 20%. **Follow it, and buy if the festive quarters disappoint against the high base.**",
                "**Wait on Cello World.** **Cello World** sells plastic, glass, opal and steel houseware, Unomax and Cello pens, and moulded furniture through 1.8 lakh shops. Its margin has fallen from 25% in FY24 to 19% (filed) because a new glass plant runs at 60% and a new steel-bottle plant is still making only 20–25 of the 150 or so designs it once sold. In May it guided FY27 growth of 10–12% and a margin 2–2.5 points higher; in August, with Q1 sales flat, it withdrew the numbers. It holds about ₹700cr of net cash but runs a 255-day cash cycle. I expect about 12% a year; the price needs about 15%. **Wait for a festive quarter that shows volume growth and steel and glass plants filling.**",
                "**Wait on All Time Plastics.** **All Time Plastics** (listed as All Time Plastic) moulds plastic houseware and furniture in Gujarat and Daman, 84% of it exported; IKEA, its customer for 27 years, bought 57% of FY26 sales. It listed in August 2025 and built capacity to 41,000 tonnes, but FY26 tonnage was flat and the plant ran at only 65% in Q1 FY27. Its margin fell from 18% to 14%, just above CRISIL's downgrade trigger, as plastic prices jumped 40–50%. Management guides 15–20% revenue growth this year and says the margin returns to 18–19% only at 80% use. I expect about 16% a year; the price needs about 20%. **Wait for the plant to pass 75% use with a margin above 16%, or for a large US programme to be signed.**",
                "**Pass on Borosil.** **Borosil** is the only Indian maker of borosilicate (heat-proof) kitchen glassware, owns about a third of opalware tableware through its Larah brand, and sells Hydra steel bottles and small appliances. It has good news this year: its own bottle plant started on 30 June, solar power should save about ₹28cr in FY27, and on 24 September the government's trade-remedies body recommended a five-year anti-dumping duty on Chinese borosilicate glass. But its record is poor: return on capital about 11% for four years, free cash negative for four years, 282 days of stock, and net debt doubled to ₹99cr in one quarter. Its valuation is **not measured live**, because the dashboard's market value for ‘Borosil’ belongs to a different company, Borosil Renewables. I expect about 15% a year; on Screener's price it would need about 22%. **Pass until margins reach 17–18% and stock days fall.**",
                "**Pass on Stove Kraft.** **Stove Kraft** sells Pigeon, a value brand of pressure cookers, cookware, gas stoves and induction cooktops, plus Gilma chimneys and licensed Black+Decker appliances, and makes 97–98% of what it sells. Q1 FY27 sales grew 41%, induction cooktops fourfold, and management now talks of 15–20% growth and a 14–15% margin within two to three years, from 10–11% today. But over ₹500cr of plants and stores has earned only 8–9% on equity; FY26's record cash flow came largely from supplier and dealer financing; and the annual report carries an auditor's emphasis paragraph on a 2023 income-tax search, bank stock statements that differ from the books every quarter, and a promoter pledge. I expect about 18% a year; the price needs about 25%. **Pass until the margin gain survives the end of the induction rush.**",
                "**Three things to hold onto before reading the rest.** First, **Q1 FY27 flatters the cooking brands and hurts the glass and plastic makers, and neither is normal**: the gas shortage that sold induction cooktops for TTK Prestige and Stove Kraft also doubled the fuel bill of every glass furnace and lifted plastic prices 40–50%. Second, **China sets the price of most of what this group sells**: Cello says it cannot raise prices further because Chinese imports have not, Borosil waits for an anti-dumping duty, and the two exporters win because Western retailers want a second source outside China. Third, **check whether a figure is filed or the company's own**: Cello's and Carysil's headline margins include other income or leave out share-option costs, TTK quotes margins before its ‘strategy’ spending, and Stove Kraft's quoted net debt of ₹27cr leaves out store leases and a ₹76cr plant leaseback, which take it to ₹171cr.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results on Screener, consolidated except for Stove Kraft, whose consolidated page stops at FY21; its standalone figures match what it reports. All Time Plastics listed in August 2025, so its history starts in FY25. Hover over a starred name for its caveat. Two cautions: Q1 FY27 growth at TTK Prestige and Stove Kraft was lifted by a one-off rush for induction cooktops; and Cello's, Borosil's and All Time's Q1 margins were cut by gas and plastic costs that their price rises had not yet covered.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. The dashboard's market value, price and return for ‘Borosil’ belong to **Borosil Renewables**, a solar-glass company with the same promoters: it shows a market value of ₹6,698cr against Borosil Ltd's ₹3,167cr on Screener. TTK Prestige's Q2 to Q4 FY26 rows were zeros (filed sales ₹834cr, ₹801cr and ₹729cr), as were All Time's Q2 FY26 profit and Borosil's Q3 FY26. Cello's and Carysil's stored figures are the companies' own, including other income. Stored transcripts were wrong in places for TTK Prestige (one said ₹1cr of the ₹500cr plan had been spent; the official text says one-third), Stove Kraft's Q4 call, Cello's Q4 call, both Carysil calls and Borosil's Q4 call; every figure and quote here was checked against the official filing.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian consumer durables began FY27 with a price shock, not a demand boom.** The West Asia war, from March 2026, pushed up gas, oil-linked chemicals, copper and freight at once, and almost every part of the sector raised prices by 5–20% in March to May; much of the 15–45% revenue growth reported for Q1 FY27 is price. An industry estimate cited in Orient Electric's FY26 annual report puts consumer durables at about ₹3 lakh crore by FY29, growing about 11% a year. This note covers one of five Consumer Durables groups. Kitchen and houseware differ from the rest: the products are small-ticket and bought all year rather than in summer, China sets the price in most of them, online shopping and 10-minute delivery apps are the fastest-growing channel, and two of the six are exporters to global retailers. **My view: the cooking brands had a windfall and the glass and plastic makers a cost shock in Q1 FY27; neither should be extrapolated.**",
            ],
            points: [
                {
                    label: 'Demand: a gas shortage that sold induction cooktops',
                    text: "LPG shortages from March to June 2026 sent households to electric cooking. **TTK Prestige's** appliances grew 20% in Q4 FY26 and the whole company 34% in Q1, with cookware leading once the rush spread to kitchen refurbishment; **Stove Kraft's** induction sales rose 316% in Q1 to 27% of its revenue, and it doubled output using its own circuit boards and coils while importers ran out of parts. TTK's managing director said this is ‘not a sustainable consistent demand’, though he expects demand to settle ‘at a slightly higher level than before’. Underneath, demand is ordinary: TTK's sales grew only 2% a year over the three years to FY26. **My view: judge the cooking brands on FY26's roughly 10% growth, not Q1's 34–41%.**",
                },
                {
                    label: 'Costs: gas, plastics and metals all rose at once',
                    text: "Glass and opal furnaces burn gas around the clock; **Borosil's** fuel bill rose from 2.9% to 5.8% of sales in Q1 and **Cello** says its gas cost is about 80% higher than in March. Plastic prices spiked 40–50%, which matters most to **All Time Plastics**, where raw material is 52–53% of product cost, so a 40% rise in plastic needs about a 20% price rise. Cookware makers face aluminium, steel and copper inflation of about 8–10%, and Carysil's resin rose 25–35%. **The companies that make their own goods and sell to formula (All Time, Carysil) passed costs on best; the glass makers worst.**",
                },
                {
                    label: 'China sets the price, and China+1 opens a door',
                    text: "China is both the rival and the opportunity. **Cello** says it cannot raise prices further ‘because many of the products coming from China have not seen price increases’; **Borosil** calls Chinese dumping ‘a major irritant’, and the government's trade-remedies body (DGTR) found on 24 September 2026 that dumped Chinese borosilicate glassware had ‘materially retarded’ the Indian industry, recommending a five-year duty that the Finance Ministry has yet to notify. Quality-control orders from the Bureau of Indian Standards (BIS) now bar uncertified imports of steel bottles and, from October 2026, some appliances, which cost Borosil about ₹100cr of bottle sales in FY26 but now favour local plants. The other side is export: **All Time Plastics** and **Carysil** win programmes from IKEA, Lowe's, Home Depot and Tesco that want a second source outside China. **Stove Kraft**, meanwhile, is opening a trading company in Guangzhou and a joint venture with a Chinese firm to make three-layer (tri-ply) steel sheet.",
                },
                {
                    label: 'Channels: online and quick commerce grow fastest',
                    text: "Online marketplaces and quick-commerce apps are now **Stove Kraft's** largest channel at 31.8% of Q1 sales and 16.3% of **Cello's**, up from 10.4% a year earlier. Online selling lowers the barrier for new direct-to-consumer brands, which TTK names as its main price competition in cookware and small appliances, and it weakens the shelf advantage of a large dealer network. The incumbents answer with their own stores: TTK has 709 Prestige Xclusive shops and Stove Kraft 346 Pigeon stores, averaging ₹4.36 lakh of sales a month against a break-even of ₹2.5 lakh, with 500 targeted by the end of 2027. **My view: brand plus service network (TTK) holds up online better than a value brand (Pigeon) does.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Quartz and steel sinks for Western retailers', 'Carysil', '19–20%', '18%', '**52%**', 'Low-cost Indian plant, sole-supplier programmes; heavy stock of made-to-order designs'],
                        ['Branded houseware, pens and furniture', 'Cello World', '19–22%', '17%', '**52%**', 'Gross margins above 50%; new glass and steel plants not yet full; long dealer credit'],
                        ['Plastic houseware for global retailers', 'All Time Plastics', '11–18%', '12%', '**72%** (two years)', 'Formula pricing with IKEA; margin set by how full the new plant is'],
                        ['Heat-proof glass, opalware and bottles', 'Borosil', '11–16%', '11%', '**50%**', 'Only Indian borosilicate maker; gas-hungry furnaces; stock-heavy'],
                        ['Premium cookware and kitchen appliances', 'TTK Prestige', '7–12%', '12%', '**71%**', 'Brand leader; appliances bought in; about ₹80cr a year of strategy spending'],
                        ['Value cookware and appliances', 'Stove Kraft', '9–12%', '11%', '**91%**', 'Makes almost everything; value pricing; heavy depreciation and interest below the margin'],
                    ],
                    note: 'Filed figures (Screener), consolidated except Stove Kraft (standalone). Stove Kraft’s five-year cash conversion rests on FY26, when financing moves released cash.',
                },
                {
                    caption: 'The market: size, growth, policy and costs (named sources)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian consumer durables market', 'Growing about 11% a year', '**About ₹3 lakh cr by FY29**', 'Industry estimate cited in Orient Electric’s FY26 annual report'],
                        ['India economy', 'Repo rate 5.25% (Apr 2026)', '**FY27 GDP 6.9%, inflation 4.6%**; war ‘will adversely impact growth’', 'RBI, Apr 2026'],
                        ['GST 2.0', 'Effective 22 Sep 2025', 'Cut rates on many consumer goods; lifted urban demand', 'ICICI Securities, Sep 2025; RBI'],
                        ['Borosilicate glassware (India)', 'About ₹415cr; Borosil the only Indian maker', '**Five-year anti-dumping duty on Chinese imports recommended**, awaiting notification', 'DGTR final findings, 24 Sep 2026; Borosil'],
                        ['Opalware tableware (India)', 'About ₹1,350cr; Borosil (Larah) about one-third', 'New capacity from rivals; growth ‘muted’ for about a year', 'Borosil estimate, Q4 FY26 call'],
                        ['Insulated steel bottles (India)', 'Over ₹2,000cr', 'Imports now need BIS certification', 'Borosil estimate; BIS quality-control order'],
                        ['Input costs', 'Plastics +40–50%; copper +42% y/y; furnace gas about +80% since March', 'Easing only if West Asia supply normalises', 'All Time Plastics and Cello calls; Trading Economics, Sep 2026'],
                        ['Price rises taken, Q1 FY27', 'Cookware +5–8%; houseware +12–13%; Stove Kraft about +10%', 'Cello: ‘cannot take any more’', 'Company calls, 2026'],
                        ['Housing (driver of kitchen refits)', 'Top-7-city sales −6% y/y in Q2 2026; launches +7%', 'Launch pipeline supports FY27–FY28', 'Anarock, Jul 2026'],
                    ],
                    note: 'No independent forecaster in the sources read sizes the Indian cookware or houseware market; the category sizes are company estimates and are labelled as such.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: brands people ask for by name',
                    text: "In the kitchen, a brand stands for safety and durability. **TTK Prestige** leads pressure cookers and claims leadership in cookware, better gas stoves, induction cooktops and kettles, ‘in both value and volume’; CRISIL notes that Hawkins remains strong in inner-lid cookers. It backs the brand with 709 own stores and 568 service centres. **Borosil** is so dominant that its name is used for all heat-resistant glass in India, and its Larah brand holds about a third of opalware. **Stove Kraft's** Pigeon is a value brand in a crowded field, and ICRA says competition ‘constrains pricing flexibility’. **My view: brand strength is real at TTK and Borosil, but it has not protected Borosil's returns.**",
                },
                {
                    label: 'Lasting: owning the factory and the parts',
                    text: "**Stove Kraft** makes 97–98% of what it sells, including its own lids, gaskets, die-cast parts, circuit boards and coils; in the gas shortage that let it double induction output while import-dependent assemblers ran dry, since only glass tops and magnets are imported. **Borosil** runs India's only borosilicate furnace (25 tonnes a day, at about 90%) and 84 tonnes a day of opal furnaces at 90–95%. **Carysil** calls itself the ‘most cost effective player’ in the global sink business, a claim its 20% margin supports. **TTK** makes all its cookware and cookers, with plants over 85% used, but buys its appliances from contract makers. **My view: making your own goods is what let the exporters and Stove Kraft pass costs on in 2026.**",
                },
                {
                    label: 'Evidence of pricing power in 2026',
                    text: "The input shock tested everyone. **Carysil** rolled back 90% of the discounts it had given US customers when tariffs rose, without losing volume, and its margin rose to a record. **TTK** raised prices 5–8% at the end of Q1 with no visible loss of volume, calling its products ‘not that much price elastic’. **Stove Kraft** raised about 10% and lifted gross margin 1.3 points, but calls itself ‘cost plus’: that is pass-through, which works because rivals face the same costs. **All Time Plastics** passes costs to IKEA by formula with an eight-week lag, and halted Indian supply for eight weeks to force a full rise. **Cello** raised 12–13% but lost volume and says no more is possible. **Borosil** recovered about ₹2cr of a ₹12cr cost rise in Q1. **Only Carysil and TTK showed pricing power beyond pass-through.**",
                },
                {
                    label: 'Switching costs: long retailer programmes',
                    text: "Consumer brands have almost no switching cost; a shopper can pick another pan tomorrow. The exporters are different. **All Time Plastics** has supplied IKEA for 27 years, Tesco for 17 and Asda for 14, designs its own moulds and holds the recycled-plastic and ethical-sourcing certifications European retailers demand. **Carysil** is the ‘sole partner’ for Howdens, Karran and Lowe's in quartz sinks, and shares the cost of US$5–6m of sink displays across 1,890 Lowe's stores, which ties both sides in. **Stove Kraft** supplies Walmart and a large UK retailer and began shipping to IKEA in Q2 FY27. The catch is bargaining power: IKEA takes 57% of All Time's sales and can dictate terms. **My view: programmes are sticky, but concentration hands the retailer the upper hand.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Hawkins**, not on this list, is TTK's long-standing rival in pressure cookers and strong in inner-lid designs; **Butterfly** competes with Stove Kraft and TTK in stoves and small appliances (both named by ICRA and CRISIL). Online-first cookware brands are numerous but unnamed on the calls. In sinks, Carysil says its European rivals have weakened, without naming them. **Borosil Scientific**, a group company, makes some of the glassware Borosil sells, and **Borosil Renewables** shares its promoters.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In kitchen and houseware the margin depends on how much a company makes itself, whether it can pass on gas and plastic costs, how full its newest plant is, and how much it spends on brands, stores and consultants. Three patterns show up: margins protected by programmes and gross margin, margins moved by one-off demand and cost shocks, and margins held down by start-up costs and spending that is called one-off but keeps recurring.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: made-to-order exports and high gross margins',
                    text: "**Carysil** has earned 19–20% for five quarters running, and management raised its guide to ‘the upper side’ of 18–20% even as resin rose 25–35%; hoods and taps earn gross margins of 50–60%, and the new quartz lines will add volume on a base built for five lakh sinks. **Cello's** houseware earned a gross margin of 55% in Q1 and its pens 54%, so the business can earn 22–25% once its new plants fill; management says steel and glass should add back 2–2.5 points and the Cello pen brand another point. **My view: Carysil's 19–20% is structural; Cello's 25% of FY24 will be hard to regain while China caps its prices.**",
                },
                {
                    label: 'Cyclical: the gas shortage, both ways',
                    text: "Q1 FY27 lifted the cooking brands: **TTK's** standalone margin rose to 11.5% after strategy costs from 8.9% (its profit was also helped by a ₹7.3cr reversal of a labour-code provision), and **Stove Kraft** held 11% on 41% growth. The same shock cut the glass and plastic makers: **Borosil** lost about ₹10cr to fuel in Q1, taking its margin to 14.2% from 17.8%; **Cello's** gross margin fell to 52.4% from 54.0%; **All Time's** margin fell to 14.3% from 18.2%. Their price rises land from Q2; TTK's came only at the end of Q1, so **TTK's gross margin faces its test in Q2**. **My view: normal margins are about 11–13% at TTK before strategy spending, 10–11% at Stove Kraft, 15–16% at Borosil and 15–18% at All Time.**",
                },
                {
                    label: 'Not structural: strategy spending and start-up costs',
                    text: "**TTK** calls its consultant programme one-off, but it has run at about ₹80cr a year for two years (₹29.8cr in FY25, ₹82.6cr in FY26, ₹12.4cr in Q1 FY27), and about ₹75cr of the ₹200cr is still to come; judge its margin after these costs. **Borosil's** new bottle plant will lift gross margin by at least 10 points over buying in, but only after six to twelve months of settling in. **Cello's** glass plant needs ‘another 10–15%’ of use to earn a healthy profit. **All Time's** staff costs rose 24% with the new plant and management says Q1 is the run-rate. **Stove Kraft's** Q1 other expenses rose to 18% of sales, with outsourced production, marketing and franchise commissions each up about a point. **My view: start-up drag is real at Borosil, Cello and All Time and should fade in FY28.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Cello**, **Borosil** and **Carysil** each tie up about 255–259 days of sales. Cello gives distributors and some government buyers 118 days of credit and holds 191 days of stock across 14–15 plants, and promised to cut debtor days by 10–15, with no sign yet. Borosil holds 282 days of stock, because it imported bottles and appliances ahead of quality-control deadlines and its borosilicate furnace makes more than it sells. Carysil holds 319 days of stock in customer-specific designs and imported inputs. That is why each turned only about half its operating profit into cash over five years.",
                },
                {
                    label: 'Working capital: better, but financed',
                    text: "**Stove Kraft's** cash cycle fell from 73 days to 27 in FY26, and its operating cash doubled to ₹258cr. But the annual report shows how: suppliers are paid in 90 days by a financier through the TReDS invoice platform, dealer receivables are financed by banks, and machinery was bought on supplier's credit. These are real, but they are financing, not efficiency, and by June 2026 working capital was back to 45 days from 23 as it stocked up for the festive season and induction demand.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**TTK Prestige** runs a 119-day cycle, heavy in stock (146 days) but with only 35 debtor days, and has turned 71% of operating profit into cash over five years; it paid out 64% of FY26 profit as dividends and bought back ₹250cr of shares in FY25. **All Time Plastics** runs at about 57–60 days on its own measure, helped by IKEA billing in rupees and customers bearing freight on 90% of exports.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Houseware and cookware makers build stock before the festive season and hold thousands of designs, quality-control rules force stock building ahead of deadlines, and exporters carry goods at sea. **Judge each company against its own history, and expect Cello's and Carysil's cycles to improve only slowly.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Carysil', 'FY27 capex raised to ₹80–90cr from ₹70–75cr; at least ₹50–60cr a year needed to sustain 15% growth; factory running seven days a week', 'Gross debt ₹270cr, cash ₹59cr at March; ICRA A (Stable), expects debt below 1.5 times operating profit'],
                        ['TTK Prestige', 'Cash ‘over ₹870cr’ in June; about one-third of the ₹500cr plan spent, ‘balance ₹300cr-plus over the next two years’; FY27 capex about ₹100cr', 'Indian parent debt-free; CRISIL AA (Stable); guarantee of ₹50.3cr for the UK subsidiary’s bank line'],
                        ['Cello World', 'No new price rises; shops have cut stock; two more steel lines to be ordered for early 2027; no buyback, cash kept for acquisitions', 'Cash ₹126cr plus about ₹535cr of short-term investments at March; debt negligible; no rating (no debt)'],
                        ['All Time Plastic', 'Working capital 60 days; debt to equity 0.14; 14 new machines (+1,500t) ordered for Q4 FY27, about 4,000t more to be ordered in Q3', 'Borrowings ₹86cr at March; ₹90.4cr of listing money unspent in deposits; CRISIL A category, downgrade trigger margin below 14%'],
                        ['Stove Kraft', 'Working capital 45 days, up from 23, on festive and induction stock; FY27 capex ‘about ₹40cr’ but new lines and 25–30 stores a quarter added', 'Net debt ₹171cr at March including a ₹76cr leaseback and ₹55cr of supplier’s credit (company quotes ₹27cr); ICRA A (Stable)'],
                        ['Borosil', 'Net debt ₹99cr in June, up from ₹50cr; FY27 capex raised to ₹125–150cr; depreciation about ₹92cr', 'Debt ₹155cr against cash ₹56cr; ICRA rates the bottle subsidiary’s loans AA−; downgrade trigger above 1.5 times'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Stove Kraft figures are standalone.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what is being built and how it is paid for, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: exporters filling new lines',
                    text: "**Carysil** is adding 2.5 lakh quartz sinks (to 12.5 lakh) for ₹40–50cr and 1.5 lakh steel sinks for about ₹20cr, both by March 2027, on land and buildings sized for five lakh quartz sinks. At about ₹6,650 of revenue per quartz sink in Q1 (my calculation), the quartz line alone could add about ₹165cr of sales for under ₹50cr, an asset turn of three to four times, and management expects it to fill within a year given record orders. It also targets ₹500cr of Indian sales by FY29–FY30, from ₹178cr. **All Time Plastics** needs little new money: at 75% use of 41,000 tonnes and today's ₹2.6 lakh a tonne, it could sell about ₹800cr, some 30% above FY26; each 10 points of use is about ₹100cr. **My view: Carysil's growth is funded and ordered; All Time's depends on winning volume.**",
                },
                {
                    label: 'Growth driver: new plants that replace imports',
                    text: "**Borosil's** Hydra bottle plant (₹65cr, about 36 lakh bottles a year) started on 30 June, a ₹42cr glassware plant at Bharuch by end-Q3 FY27 will bring in-house about ₹100cr of sales now bought from group company Borosil Scientific, and a ₹50cr furnace rebuild lifts borosilicate output from 25 to 32 tonnes a day by FY28. About ₹130cr of solar plants should save about ₹30cr a year, a four-year payback. **Cello's** eight-line steel plant can sell about ₹300cr at full use and its glass plant ₹250–275cr (cut from ₹300cr in May), with two more steel lines in early 2027. **My view: both are spending to replace Chinese imports; the payoff is a margin gain, not much extra revenue.**",
                },
                {
                    label: 'Growth driver: sweating the cookware base',
                    text: "**Stove Kraft** says its plants are ‘designed for ₹3,000cr’ against ₹1,605cr of FY26 sales, so asset turns could rise from about 2.7 to 4–5 times without big spending; it will ship to IKEA from three lines (₹200–250cr a year at full use), add 25–30 stores a quarter and a tri-ply cookware line by Q3. **TTK** has kitchenware plants over 85% used and appliance suppliers at 75–80%, and will add tri-ply and appliance capacity over two years inside its ₹300cr capex budget, all from cash. New products, 162 of them in FY26, made up about 30% of sales. **My view: TTK's growth is cheaper to fund; Stove Kraft's has more operating leverage but a poor payback record.**",
                },
                {
                    label: 'Growth driver: pens, bamboo and new categories',
                    text: "**Cello's** pens grew 52% in Q1 and management targets over ₹500cr in FY27, from ₹368cr, helped by the Cello pen brand it bought back in 2025. **All Time Plastics** is setting up a ₹15cr bamboo-products plant in Guwahati with ₹60cr of revenue potential, now due in Q4 FY27, and wants its own brand to rise from 12–13% to 22–25% of sales. **Carysil** is opening bath stores and a stone-fabrication unit in India. **My view: pens are Cello's one proven new engine this year.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**TTK Prestige** beat: in May it described both kitchenware and appliances as growing about 10%; Q1 grew 34%, the price rises it called ‘inevitable’ were taken, and management now expects FY27 growth ‘better than last year’. **Carysil** delivered: steel lines at about 94% use as promised, US discounts 90% rolled back, and a margin of 20% above its 18–20% band. **Borosil** delivered its bottle plant and solar project on time.",
                },
                {
                    label: 'Cautious',
                    text: "**Carysil** narrowed its revenue guide from 15–20% to ‘15%’ while raising its margin view. **TTK** itself warned the Q1 pace is unsustainable, and exports and military-canteen sales stayed weak for another quarter. **All Time Plastics** would not confirm a 16–17% margin for FY27 and now ties 18–19% to reaching 80% use, rather than to ‘the second half’.",
                },
                {
                    label: 'Missed',
                    text: "**Cello** guided 10–12% growth and a margin up 2–2.5 points on 29 May; on 10 August sales were flat, the margin was down, steel was still at 20–25 designs rather than full production from July, and management said ‘It is too early. I would not like to provide guidance at this point.’ **Borosil's** margin of 14.2% missed its path to 18%, a target its new chief executive re-explained three times in one call. **Stove Kraft's** IKEA supply, promised for Q1, started in Q2, and its FY26 capex ran to ₹109–111cr against a ₹50cr plan.",
                },
                {
                    label: 'Mixed',
                    text: "**Stove Kraft** beat on growth (41% against ‘upwards of 15%’) and held its 11% margin, then raised its ambitions to 15–20% growth and a 14–15% margin, but working capital doubled to 45 days against ‘below 30’, and it has added projects to a ₹40cr capex budget. **All Time Plastics** lifted use from 52% to 65% and firmed up 15–20% growth, but its margin fell, Indian sales were flat against a 30–35% target, and bamboo slipped a quarter; CRISIL had expected FY26 growth above 20%, and it came in at 9%. **Borosil** raised capex to ₹125–150cr from ₹110cr in one quarter.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Stove Kraft to grow earnings at about 18% a year, Carysil at about 17%, All Time Plastics at about 16%, Borosil at about 15%, TTK Prestige at about 14% and Cello at about 12%.** Stove Kraft's comes off a small profit base of ₹42–49cr, so operating leverage is large, but I haircut it for the end of the induction rush and its record. Carysil's follows about 15% revenue growth at a steady margin. All Time's and Borosil's assume margins recovering to about 17%. TTK's assumes about 10% growth and a margin of 12.5–13% after strategy spending, from a base lifted by Q1; Cello's, 8–10% growth and a partial margin recovery.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Carysil', 'Quartz and steel lines full by FY28; India to ₹500cr; margin 19–20%; stock days the swing factor', '11% / **17%** / 23%'],
                        ['TTK Prestige', 'About 10% growth after the induction rush; margin to 12.5–13% as strategy spending ends; cash earns interest', '9% / **14%** / 19%'],
                        ['Cello World', 'Pens past ₹500cr; glass and steel plants filling; China caps prices', '6% / **12%** / 18%'],
                        ['All Time Plastic', 'Use from 65% to 75–80%; margin back to about 17%; IKEA concentration', '8% / **16%** / 24%'],
                        ['Stove Kraft', 'Operating leverage on ₹583cr of plant and stores; IKEA lines; induction fades; heavy depreciation', '8% / **18%** / 30%'],
                        ['Borosil', 'Bottle plant, solar savings, likely duty; depreciation up to about ₹92cr; stock release', '6% / **15%** / 25%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8; Borosil is not in that table.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Carysil', 'Revenue growth about 15%; margin at the upper end of 18–20%; ₹1,000cr more revenue in five years; India ₹500cr by FY29–FY30', '₹80–90cr in FY27 (quartz ₹40–50cr, steel ₹20cr, taps and appliances ₹20cr); appliance plant ₹30–40cr from FY28', '**Delivered**: margin above band; steel lines full; US discounts rolled back; quartz volume only +6% on late containers'],
                        ['TTK Prestige', 'No numbers; growth ‘better than single-digits’ over 12–18 months; margin back to ‘13%, 13-plus’ in about two years', '₹300cr capex plus ₹200cr strategy spending over three years, one-third spent; FY27 capex about ₹100cr, all from cash', '**Beat**: growth 34% against about 10%; price rises taken; exports missed again'],
                        ['Cello World', 'Withdrawn in August (had been 10–12% growth, margin +2–2.5 points); pens over ₹500cr', 'About ₹100cr in FY27, mostly upkeep; two steel lines for early 2027', '**Walked back**: sales flat; margin down; steel ramp late; guidance dropped'],
                        ['All Time Plastic', 'Revenue +15–20% in FY27; use about 75%; margin 18–19% only at 80% use; own brand to 22–25%', '₹113.7cr of listing money for the new plant, ₹23.3cr spent; +1,500t in Q4 FY27; bamboo ₹15cr', '**Mixed**: use up to 65%; margin down to 14.3%; Indian sales flat; bamboo a quarter late'],
                        ['Stove Kraft', 'Growth 15–20% a year; margin 14–15% and profit 7% of sales in two to three years; IKEA 5–6% of sales at full scale', 'About ₹40cr in FY27, likely more; China tri-ply joint venture, amount undisclosed', '**Mixed**: growth 41% against 15%+; margin held; IKEA a quarter late; working capital 45 days against below 30'],
                        ['Borosil', 'FY27 margin ‘about 18%’, re-explained three times; revenue +15–20% a year medium term; return on capital 20–24% medium term', '₹125–150cr in FY27, up from ₹110cr; bottle plant ₹65cr; Bharuch ₹42cr; furnace ₹50cr', '**Mixed**: bottle plant and solar on time; margin 14.2% against an 18% path; net debt doubled'],
                    ],
                    note: 'Figures are consolidated except Stove Kraft (standalone). Company margin figures are marked where they differ from filed ones in section 2.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'The induction rush reverses',
                    text: "**TTK Prestige** and **Stove Kraft** grew 34% and 41% in Q1 on a one-off event. If buyers pulled forward purchases, both face weak comparisons from Q4 FY27, when they lap the start of the shortage. Stove Kraft is most exposed: induction was 27% of its Q1 sales, it has diverted small-appliance lines to induction and outsourced work to keep up, and analysts on its call openly doubted the demand would last. Both also face input inflation of about 8–10%, rising minimum wages, and a weak rupee that touched a record ₹96.8 to the dollar in May.",
                },
                {
                    label: 'Governance at Stove Kraft',
                    text: "The FY26 annual report carries an auditor's **emphasis of matter** on the November 2023 income-tax search, with ₹2.45cr of extra tax demanded and appeals pending. Under CARO, the auditor's statutory checklist, receivables reported to banks exceeded the books by ₹19–35cr in every quarter of FY26 and stock was reported ₹16–27cr below the books; the company blames credit-note accruals. One accounting system did not log direct database changes. The promoter, Rajendra Gandhi, pledged 2 lakh more shares to Bajaj Finance in March 2026, bringing pledged shares to 8.76% of the company, about 16% of his family's holding, to finance a 2022 share purchase. The finance head changed in May. Its quoted net debt of ₹27cr leaves out a ₹76cr sale-and-leaseback that the accounts treat as a loan.",
                },
                {
                    label: 'Related parties and subsidiaries at TTK Prestige',
                    text: "**TTK Prestige** paid promoter firm TT Krishnamachari & Co a **₹14.2cr logo licence fee** in FY26, plus ₹3.2cr of handling charges. Its UK subsidiary Horwood lost £0.9m at the operating level in FY26 after a ₹71.4cr write-down, and the auditor made subsidiary impairment a key audit matter; the test avoided a new charge partly by raising assumptions to 5.4% long-term growth (from 2%) and 8.5% average sales growth, for a business whose sales fell. The 51%-owned modular-kitchen unit Ultrafresh, lent ₹11cr by TTK, passed its test with only ₹3.19cr of headroom. TTK guarantees ₹50.3cr of the UK unit's bank line, and CARO lists ₹36.3cr of disputed dues not paid, the largest a ₹23.2cr GST claim. The opinion was clean.",
                },
                {
                    label: 'Concentration and rating triggers at the exporters',
                    text: "**All Time Plastics** sold ₹346.6cr to IKEA in FY26, 57% of revenue, and its margin of 14.3% sits just above CRISIL's 14% downgrade trigger. Three promoter-directors drew ₹5.9cr and relatives on the payroll ₹1.4cr, about ₹7.3cr against profit of ₹35.6cr, and ₹90.4cr of listing money was still unspent at March. **Carysil** sells about two-thirds of its Indian output abroad and is exposed to US tariffs; the chairman's daughter is employed as a vice-president with a pay rise sought at the AGM, a promoter company (Acrycol Minerals) is a supplier, investments in a Turkish appliance venture and a ceramics subsidiary were written down, and the promoter stake has fallen from 43.8% to 41.3% in three years. Both auditors' opinions were clean, and contingent liabilities are negligible.",
                },
                {
                    label: 'Credibility and tax disputes at Cello and Borosil',
                    text: "**Cello** withdrew its guidance about ten weeks after giving it. Its disputed GST and sales-tax claims rose to ₹33.1cr from ₹2.2cr, and the auditor's key audit matter was checking stock across many sites. Promoters fell from 75.0% to 73.5% after issuing shares to Wim Plast's minority holders in the merger, and foreign funds cut their holding from 5.5% to 2.3% in a year. **Borosil** buys some glassware from group company Borosil Scientific at roughly cost plus 5%, approved by both sets of shareholders; its promoter moved from managing director to a role with a pay cap of up to ₹10cr a year as a new chief executive took over in May. Its opinion was clean and contingent liabilities are tiny; the concern is returns, not accounting.",
                },
                {
                    label: 'China, gas and trade rules',
                    text: "If the anti-dumping duty on Chinese borosilicate glass is not notified, **Borosil** loses its best news of the year. A fall in Chinese prices would squeeze **Cello** further. Gas-fired furnaces (**Borosil**, **Cello**) remain exposed to West Asia supply; container shortages delayed shipments at **Carysil** and **All Time** in Q1. **Stove Kraft's** new Chinese joint venture and trading arm add a dependence on China that management has not sized.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree for particular reasons: TTK Prestige and Cello hold large net cash, which makes EV/EBITDA look kinder; Stove Kraft's heavy depreciation and interest make its P/E look far worse than its EV/EBITDA; and Stove Kraft's true net debt is about twice the ₹87cr the live table uses.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **15.3% at 24.0x, 17.1% at 28.1x, 19.6% at 34.7x, 19.7% at 35.1x and 25.4% at 55.5x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Only Carysil fits my estimate today; Borosil is not in the live table.**",
            ],
            points: [
                {
                    label: 'Fits: Carysil, priced about right',
                    text: "**Carysil** needs about 17% a year against my ~17%. The price assumes the new quartz and steel lines fill on time and the margin holds near 20%; the order book supports both. What it does not reward is the cash: with 319 days of stock and near-zero free cash for five years, the growth has to be paid for with retained profit and some debt, which is why I stop at follow. Its net debt of about 1.2 times operating profit makes EV/EBITDA slightly less kind than P/E. **Follow; buy on a quarter when containers slip.**",
                },
                {
                    label: 'Full: TTK Prestige, quality with cash in the bank',
                    text: "**TTK Prestige** needs about 20% a year against my ~14%. Its cash of over ₹870cr is about an eighth of its market value, which is why EV/EBITDA looks kinder than P/E. The price assumes the Q1 surge settles at a higher level and the margin reaches 13%; management has promised only the second. **Follow; a weak Q3 or Q4 against the induction base would be the entry point.**",
                },
                {
                    label: 'Full: Cello, cheapest here but slipping',
                    text: "**Cello World** needs about 15% a year against my ~12%, the lowest hurdle in the group, and the share is about half its 52-week high. Net cash and 50%-plus gross margins give it room, but it has not yet shown volume growth while China caps prices. **Wait for Q2 and Q3 to show volume and plant use rising; the price would then fit quickly.**",
                },
                {
                    label: 'Full: All Time Plastics, a plant waiting to fill',
                    text: "**All Time Plastics** needs about 20% a year against my ~16%. Filling the plant from 65% to 80% would lift profit sharply from a depressed ₹35cr, so the high case clears the hurdle; the base case does not, because IKEA's weight and the pace of new programmes are unknown. Its small net cash and unspent listing money make EV/EBITDA and P/E tell the same story. **Wait for use above 75% and a margin above 16%.**",
                },
                {
                    label: 'Stretched: Stove Kraft, priced for its targets',
                    text: "**Stove Kraft** needs about 25% a year against my ~18%. Management's targets, a 14–15% margin and profit at 7% of sales on 15–20% growth, would justify the price and more, but its record is a 10–11% margin, returns of 8–9% on equity, a missed three-year payback rule and capex overruns. EV/EBITDA looks moderate only because depreciation and interest take most of its operating profit, and counting the leaseback its net debt is ₹171cr, not ₹87cr. **Pass.**",
                },
                {
                    label: 'Not measured live: Borosil',
                    text: "The dashboard's market value, price and return for ‘Borosil’ belong to **Borosil Renewables**, a separate listed solar-glass company, so the live table would price Borosil Ltd at about twice its real market value; it is left out rather than shown wrong. On Screener's figures (market value ₹3,167cr, profit ₹70cr over the last four quarters) the price needs about 22% a year against my ~15%, which would be Stretched. **Pass until the duty is notified and margins recover.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Carysil', rank: 1, stance: 'SCALEUP', segment: HOUSE,
            what: "Carysil: composite quartz and steel kitchen sinks made in Gujarat and exported to IKEA, Lowe's, Home Depot, Howdens and Karran, plus hoods, taps and stone worktops in the UK and US; quartz sinks were 51% of Q1 FY27 revenue.",
            view: "**The best-run business here, priced about right.** FY26 profit rose 55% to ₹99cr and Q1 FY27 earned a record 20% margin, with steel lines sold out and new quartz and steel lines, funded and ordered, due by March 2027. Stock of 319 days keeps free cash near zero and net debt at about ₹211cr (company). The price needs about 17% a year against my ~17%.",
            watch: 'Quartz-sink volume growth back above 15% in Q2 once containers clear; the new lines running by March 2027; stock days starting to fall.',
        },
        {
            company: 'TTK Prestige', rank: 2, stance: 'PRICED', segment: COOK,
            what: "TTK Prestige: India's leading pressure-cooker and cookware brand (cookers and cookware 48% of FY26 sales), plus gas stoves, induction cooktops and small appliances (47%) bought from contract makers; the value brand Judge; 709 own-brand stores.",
            view: "**The strongest brand and balance sheet, with a windfall quarter to digest.** Sales grew 34% in Q1 FY27, only about 3 points from price, on the gas-shortage induction rush; the margin after strategy spending was 11.5% (standalone, company). It has over ₹870cr of cash, but pays a ₹14.2cr logo fee to a promoter firm and props up a loss-making UK unit. The price needs about 20% a year against my ~14%.",
            watch: 'Festive-quarter growth staying in double digits after the price rises; the margin after strategy costs moving towards 13%; any new UK write-down.',
        },
        {
            company: 'Cello World', rank: 3, stance: 'PRICED', segment: HOUSE,
            what: "Cello World: plastic, glass, opal and steel houseware (64% of Q1 FY27 sales), Unomax and Cello pens (21%) and moulded furniture from the merged Wim Plast (15%); made in 14–15 plants and sold through 1.8 lakh shops.",
            view: "**A good franchise whose new plants have not yet earned.** The margin fell from 25% to 19% as the glass plant ran at 60% and steel bottles were still at 20–25 designs; Q1 sales were flat and guidance was withdrawn. Net cash of about ₹700cr and fast-growing pens are the offsets, but the cash cycle is 255 days. The price needs about 15% a year against my ~12%.",
            watch: 'Volume growth in the Q2 and Q3 festive quarters; steel designs reaching 50–55 and glass use above 70%; debtor days falling.',
        },
        {
            company: 'All Time Plastic', rank: 4, stance: 'SCALEUP', segment: HOUSE,
            what: "All Time Plastics: injection-moulded plastic houseware and furniture from Daman and Gujarat, 84% exported to IKEA (57% of FY26 revenue), Tesco, Asda and US retailers; own ‘All Time’ brand in India; listed August 2025.",
            view: "**A clean, sticky supplier waiting for its plant to fill.** FY26 tonnage was flat, the plant ran at 65% in Q1 and the margin fell to 14.3%, just above CRISIL's trigger, as plastics jumped 40–50%. Management guides 15–20% growth and an 18–19% margin at 80% use; IKEA's weight caps what the market will pay. The price needs about 20% a year against my ~16%.",
            watch: 'Use above 75% and a margin above 16% in H2 FY27; a signed large US programme; the ₹90cr of unspent listing money put to work.',
        },
        {
            company: 'Borosil', rank: 5, stance: 'SCALEUP', segment: HOUSE,
            what: "Borosil Ltd: India's only maker of borosilicate kitchen glassware (25% of FY26 sales), Larah opalware (34%), and Hydra steel bottles, appliances and cookware (39%); not to be confused with Borosil Renewables, whose figures the dashboard shows.",
            view: "**A strong brand with a poor capital record.** Sales have grown, but profit has barely moved (₹66cr in FY24, ₹75cr in FY26), return on capital sits near 11%, free cash has been negative four years and stock is 282 days. This year brings its own bottle plant, solar savings of about ₹28cr and a likely anti-dumping duty, yet Q1's margin was 14.2% and net debt doubled to ₹99cr. Its valuation is not measured live; on Screener it would need about 22% a year against my ~15%.",
            watch: 'The Finance Ministry notifying the anti-dumping duty; Q2–Q3 margins of 17–18%; stock days and net debt falling.',
        },
        {
            company: 'Stove Kraft', rank: 6, stance: 'SCALEUP', segment: COOK,
            what: "Stove Kraft: Pigeon value cookware, pressure cookers, gas stoves and induction cooktops, Gilma chimneys and licensed Black+Decker appliances, 97–98% made in its own Bengaluru and Baddi plants; 346 Pigeon stores; exports to Walmart and IKEA.",
            view: "**Real operating leverage, a thin record and governance flags.** Q1 FY27 grew 41% at an 11% margin on the induction rush, and management now targets 14–15%; but ₹500cr of plants and stores has earned 8–9% on equity, FY26's cash surge was financed, and the accounts carry an auditor's emphasis paragraph, bank-statement gaps and a promoter pledge. The price needs about 25% a year against my ~18%.",
            watch: 'The H1 FY27 margin above 11% with working capital back under 30 days; IKEA billing visibly; induction sales once the gas shortage fades.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Houseware, glass, plastics and sinks.** **Carysil: follow**, the best-run business here, with funded, ordered capacity; buy on a weak export quarter and move to own if stock days fall. **Cello World: wait** for a festive quarter that shows volume and new plants filling. **All Time Plastics: wait** until the plant passes 75% use with a better margin. **Borosil: pass** until the anti-dumping duty is notified and margins recover; its valuation is not measured live.",
            "**Cookware and kitchen appliances.** **TTK Prestige: follow**, the strongest brand and balance sheet, for a better price once the induction windfall has passed. **Stove Kraft: pass**; the price assumes targets its record does not support, and its accounts carry flags.",
            "**What would change my view.** For the better: Carysil's stock days falling while it grows; TTK holding double-digit growth through the festive season; Cello's steel and glass plants filling; All Time signing a large US programme; the glass duty being notified for Borosil; Stove Kraft holding its margin as induction fades, with the pledge released. For the worse: a sharp fall in induction demand; Chinese prices falling further; All Time's margin breaking CRISIL's 14% trigger; another UK write-down at TTK.",
            "**What to watch next quarter.** Growth at TTK and Stove Kraft against the start of the induction rush; the price rises landing at Cello, Borosil and All Time; Carysil's delayed containers; and the Finance Ministry's decision on the glass duty.",
        ],
        bottomLine:
            "Follow Carysil, the best-run exporter here, and TTK Prestige, the strongest brand, each for a better price; wait on Cello and All Time Plastics until their new plants fill; and pass on Borosil and Stove Kraft, where the price runs ahead of a weak record on returns.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/CARYSIL/consolidated/' },
        { label: 'Room-AC and consumer durables outlook — ICRA, Sep 2025', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=e6ea65f2-7cac-4e8e-9357-088d44eee81c' },
        { label: 'GST 2.0 rate changes — ICICI Securities, Sep 2025', url: 'https://www.icicidirect.com/mailcontent/idirect_gst_2_sept25.pdf' },
        { label: 'Housing sales dip 6% across top 7 cities (Anarock) — Outlook Money, Jul 2026', url: 'https://www.outlookmoney.com/invest/housing-sales-dip-6-per-cent-across-top-7-cities-says-report' },
        { label: 'RBI monetary policy, 8 Apr 2026 — All India Radio', url: 'https://newsonair.gov.in/rbi-to-announce-its-first-bi-monthly-monetary-policy-statement-for-financial-year-2026-27-today/' },
        { label: 'Copper price — Trading Economics, Sep 2026', url: 'https://tradingeconomics.com/commodity/copper' },
        { label: 'DGTR final findings: anti-dumping duty on Chinese borosilicate glassware — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=55a6bec4-38c3-47fc-a56e-bc2ffb32dd3b.pdf' },
        { label: 'Carysil Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=863a5bbf-207c-4a00-9f01-39975c21ce5b.pdf' },
        { label: 'Carysil investor presentation, Aug 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0c8d40aa-b55b-43d5-b464-25ca15ace133.pdf' },
        { label: 'Carysil Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/45e7fb04-66d4-484f-afeb-9e3b705f5e3c.pdf' },
        { label: 'Carysil rating rationale (A/Stable) — ICRA, Mar 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdf/141898' },
        { label: 'TTK Prestige Q1 FY27 earnings call transcript — company', url: 'https://ttkprestige.com/wp-content/uploads/2026/07/Transcript_July-28-2026.pdf' },
        { label: 'TTK Prestige Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3d24c14a-414d-4392-8262-b0127af3bd0a.pdf' },
        { label: 'TTK Prestige Annual Report FY26 (related parties, impairment, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/9048dae8-85f9-431f-8a67-37817161b4dd.pdf' },
        { label: 'TTK Prestige rating rationale (AA/Stable) — CRISIL, Nov 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/TTKPrestigeLimited_November%2024_%202025_RR_374804.html' },
        { label: 'Cello World Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=01f15fa2-17cc-468c-9e3f-7b4c76bccaff.pdf' },
        { label: 'Cello World Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=42de0942-a266-4ad3-80e5-708476185d0f.pdf' },
        { label: 'Cello World Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/ae8aa36e-3c4a-4385-8830-e5fa73b36c3e.pdf' },
        { label: 'All Time Plastics Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c40eb5ec-c7cd-4cc0-a93c-09583aaaf9f3.pdf' },
        { label: 'All Time Plastics Annual Report FY26 (IPO money, customers, related parties) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bfab33b2-b1ff-4d7c-a556-f00127a36d89.pdf' },
        { label: 'All Time Plastics rating rationale — CRISIL, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/AllTimePlasticsLimited_March%2016_%202026_RR_391736.html' },
        { label: 'Borosil Q1 FY27 earnings call transcript (revised) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=728fa585-8a0f-4858-a7d6-9c112a049486.pdf' },
        { label: 'Borosil Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6ebb0860-3218-47d7-88a5-133194846cb8.pdf' },
        { label: 'Borosil (Stylenest India) rating rationale — ICRA, Mar 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdf/141507' },
        { label: 'Stove Kraft Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2071256c-ccda-44b1-9a8f-789123c1770e.pdf' },
        { label: 'Stove Kraft Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=503fbfe5-424e-49f9-bf56-860df536c4df.pdf' },
        { label: 'Stove Kraft Annual Report FY26 (auditor’s emphasis, CARO, leaseback) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/abc4b242-d369-4bd8-b003-9af1a9644fff.pdf' },
        { label: 'Stove Kraft rating rationale (A/Stable) — ICRA, Dec 2025', url: 'https://www.icra.in/Rationale/ShowRationaleReport/?Id=139721' },
        { label: 'Stove Kraft promoter pledges shares to Bajaj Finance — ScanX, Mar 2026', url: 'https://scanx.trade/stock-market-news/companies/stove-kraft-promoter-rajendra-gandhi-pledges-2-00-000-shares-to-bajaj-finance-limited/36009279' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
