import { SectorOverview } from './types';
import { tyresBusinesses } from './tyres-businesses';
import { tyresValuationInputs } from './card-data/tyres';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const TRUCK = 'Truck-tyre led — fleets and the freight cycle';
const CARS = 'Two-wheeler and car led — brands and premium sizes';

export const tyres: SectorOverview = {
    sector: 'Tyres',
    title: 'Tyres',
    format: 'ranked',
    businesses: tyresBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: tyresValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Apollo Tyres': 10,
            'JK Tyre & Indust': 8,
            'CEAT': 12,
        },
    },
    standfirst:
        "Three tyre makers that turn natural rubber, synthetic rubber, carbon black and steel cord into tyres for trucks, cars, two-wheelers and tractors. Most of their profit comes from the replacement market, where drivers and fleet owners buy through dealers; carmakers buy at thinner margins to seed future replacement sales. This year the story is simple: natural rubber is about 63% dearer than two years ago, and prices have been raised in steps that trail the cost. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener, consolidated), operating profit ÷ sales.',
            note: 'Q1 FY27 shows the rubber shock: raw-material costs rose 16–20% in a quarter while price increases of 7–11% came in steps.',
            values: {
                'Apollo Tyres': [13, 15, 15, 15, 12],
                'JK Tyre & Indust': [10, 13, 14, 13, 7],
                'CEAT': [11, 13, 14, 14, 8],
            },
            cellNotes: {
                'CEAT': 'Q1 FY27 also carried a ₹48cr loss on a Sri Lankan-rupee loan and costs of taking over the Camso business.',
                'JK Tyre & Indust': 'Q1 FY27: raw-material costs rose about 20% in the quarter against the 8–10% management had expected, and Mexico’s volumes fell 32%.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Volumes are strong: Indian plants are running at 90–95% of capacity. Part of the recent growth is price increases.',
            values: {
                'Apollo Tyres': [4, 6, 12, 14, 13],
                'JK Tyre & Indust': [6, 11, 15, 12, 2],
                'CEAT': [11, 14, 26, 23, 22],
            },
            cellNotes: {
                'JK Tyre & Indust': 'Q1 FY27: India volumes up about 25%, but Mexico (JK Tornel) fell 32% on supply shortages and a labour slowdown.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'A cycle, not a trend: all three earned single digits in FY22 when rubber was dear, then mid-teens to 20% once it eased.',
            values: {
                'Apollo Tyres': [7, 10, 16, 11, 14],
                'JK Tyre & Indust': [9, 11, 19, 13, 16],
                'CEAT': [6, 9, 20, 15, 19],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days.',
            note: 'CEAT runs a negative cycle (suppliers are paid after dealers pay CEAT). Apollo and JK have lengthened to 90-plus days.',
            values: {
                'Apollo Tyres': [54, 63, 79, 99, 93],
                'JK Tyre & Indust': [71, 70, 72, 96, 90],
                'CEAT': [-6, -14, -23, -13, -21],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. CEAT converts best; JK worst, because it ties up the most in stock and receivables.',
            values: {
                'Apollo Tyres': [83, 64, 77, 51, 88, 73],
                'JK Tyre & Indust': [32, 94, 77, 45, 71, 66],
                'CEAT': [86, 124, 104, 74, 87, 93],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'Thin in every case: a tyre maker keeps only 2–6% of its sales as free cash across a cycle. The new capex round will push this lower in FY27.',
            values: {
                'Apollo Tyres': [1.5, 5.5, 10.7, 4.0, 8.0, 6.1],
                'JK Tyre & Indust': [0.3, 5.2, 5.6, 0.5, 0.1, 2.4],
                'CEAT': [-3.6, 2.9, 7.1, 1.1, 4.1, 2.6],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit.',
            note: 'All three have paid down debt since FY22. JK still carries the most, and all three expect to borrow more this year for new capacity.',
            values: {
                'Apollo Tyres': [2.3, 1.7, 0.9, 1.0, 0.6],
                'JK Tyre & Indust': [4.7, 3.6, 1.8, 2.6, 2.3],
                'CEAT': [3.0, 2.3, 1.0, 1.4, 1.6],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Low for three years while plants filled; now rising sharply as all three expand at once.',
            values: {
                'Apollo Tyres': [8.8, 3.2, 2.9, 2.9, 4.9, 4.4],
                'JK Tyre & Indust': [2.6, 3.2, 5.2, 4.3, 8.7, 5.0],
                'CEAT': [10.2, 7.8, 7.3, 7.1, 7.3, 7.8],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Sales per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): sales ÷ net fixed assets at year end.',
            note: 'Rising as the plants filled up; new capacity will pull this down for a year or two.',
            values: {
                'Apollo Tyres': [1.2, 1.4, 1.5, 1.6, 1.7],
                'JK Tyre & Indust': [1.9, 2.3, 2.2, 2.2, 2.3],
                'CEAT': [1.8, 1.9, 1.9, 1.9, 1.9],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'dealer', label: 'Brand and dealer network', description: 'Replacement buyers choose at the dealer; a wide, loyal network is hard to copy.' },
            { key: 'oem', label: 'Carmaker approvals', description: 'Being fitted as original equipment, which seeds future replacement sales.' },
            { key: 'tech', label: 'Premium and specialist products', description: 'Large rim sizes, EV tyres, off-highway and farm tyres that earn more per kilo.' },
            { key: 'scale', label: 'Scale and cost', description: 'Plant size, utilisation and low-cost locations.' },
            { key: 'pass', label: 'Pricing power', description: 'How fully and how fast raw-material costs were passed on this year.' },
        ],
        rows: [
            { company: 'Apollo Tyres', trend: 'stable', trendNote: 'Regained truck-tyre share (above 30% of replacement, its estimate) and grew replacement volumes 13% while halving advertising.',
                grades: { dealer: { grade: 'A', note: 'Truck replacement share above 30%; cars 21%-plus (company estimate)' }, oem: { grade: 'B', note: 'Tata, Maruti and European carmakers' }, tech: { grade: 'B', note: 'Vredestein all-season tyres in Europe' }, scale: { grade: 'A', note: 'Largest here; Dutch plant closed, output moved to Hungary and India' }, pass: { grade: 'C', note: '7–9% taken; 15–16% needed' } } },
            { company: 'JK Tyre & Indust', trend: 'stable', trendNote: 'Leader in truck radials; Mexico stumbled and its cost forecast missed by half.',
                grades: { dealer: { grade: 'B', note: 'Strong with truck fleets; weaker brand in cars' }, oem: { grade: 'A', note: 'OEM volumes +42% in India in Q1' }, tech: { grade: 'C', note: 'Smart-tyre sensors; 16-inch-plus is 35% of car tyres' }, scale: { grade: 'B', note: 'Indian plants at 95%; Mexico under strain' }, pass: { grade: 'D', note: 'Margin fell to 7% on a 20% cost rise' } } },
            { company: 'CEAT', trend: 'widening', trendNote: 'About 25% of EV and two-wheeler-EV original fitments; 17-inch-plus car tyres doubling in replacement.',
                grades: { dealer: { grade: 'A', note: 'Leading two-wheeler brand; replacement about half of sales' }, oem: { grade: 'A', note: '~25% of passenger-EV and two-wheeler-EV fitments' }, tech: { grade: 'B', note: 'Off-highway tyres via Camso, still loss-making' }, scale: { grade: 'B', note: 'New ₹1,205cr two-wheeler capacity approved' }, pass: { grade: 'C', note: '11% taken; 4–6% more needed' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Apollo Tyres is the one to own.** It is the largest and the cheapest of the three, with the strongest balance sheet: it has regained a truck-tyre replacement share it puts above 30%, closed its high-cost Dutch plant on schedule, and grew replacement volumes 13% in Q1 while cutting advertising. The price asks for less growth than I expect from an ordinary tyre cycle. The unexplained exit of its long-serving CFO is the one thing I would watch.",
                "**CEAT is the better business at a fuller price: follow.** It converts more profit into cash than either rival (93% over five years), runs a negative cash cycle, and leads in tyres for electric cars and two-wheelers. But Q1 profit fell to ₹4cr after a rupee loss in Sri Lanka and early losses at Camso, the off-highway business it bought from Michelin.",
                "**JK Tyre: wait.** It leads in truck radials and its Indian plants are full, but it carries the most debt (net debt about 2.4 times operating profit), its cost forecast missed by half, and its Mexican unit fell 32% in Q1. Cheap, but it needs the rubber cycle to turn.",
                "**Two things to hold onto before reading the rest.** First, **this is a cyclical industry whose cycle is rubber**: returns fell to single digits in FY22 when rubber was dear and rose to 15–20% when it eased. Second, **all three are adding capacity at once**, which is fine while plants run at 90–95%, and painful if demand slows just as the new lines start.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. Tyre makers sell product, not projects, so there are no order books. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "A tyre is mostly rubber and oil-based chemicals held together by steel and fabric. The makers buy those at market prices and sell the tyre through dealers and to carmakers.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Natural rubber (from Kerala and South-East Asia), synthetic rubber, carbon black, nylon and steel cord → tyre plant → **dealer or carmaker** → driver or fleet owner. Materials are 55–62% of sales, so the rubber price decides the year. **The profit pool sits in replacement**, where a driver or fleet owner buys from a dealer and a trusted brand earns a premium; carmakers buy at lower margins, with price changes that follow costs by a quarter or more.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Replacement demand follows the number of vehicles on the road and how far they travel, so it grows steadily. Carmaker demand follows vehicle sales, which have been strong: Indian plants are at 90–95% of capacity. Exports and Europe (Apollo's Vredestein) add a third leg, now helped by European duties on Chinese tyres.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The cycle is rubber, not demand.** Natural rubber is about 63% dearer than in Q1 FY24 (India's wholesale price index) and hit ₹225–280 a kilo this year. Price increases come in monthly steps of 2–5%, so margins fall first and recover later. Policy matters at the edges: new European anti-dumping duties on Chinese tyres help Apollo's European business, and US duties of about 29–50% limit exports there.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Apollo** depends on truck-tyre replacement in India and on its European restructuring working; **JK Tyre** on the truck cycle, its debt and Mexico; **CEAT** on two-wheelers, premium car tyres and making Camso profitable. All three depend on rubber prices easing. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Truck-tyre led', 'Apollo, JK Tyre', '7–15%', '14–16%', '**66–73%**'],
                        ['Two-wheeler and car led', 'CEAT', '8–14%', '19%', '**93%**'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect a tyre maker's profits. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: brands at the dealer',
                    text: "Replacement buyers choose at the dealer, and a brand with a wide network earns a premium. **Apollo** says it has regained a truck-tyre replacement share above 30% and grew replacement volumes 13% in Q1 while halving advertising. **CEAT** is the leading two-wheeler brand. These networks take decades to build.",
                },
                {
                    label: 'Lasting but narrow: specialist products',
                    text: "**CEAT** fits about a quarter of new electric cars and electric two-wheelers, which need quieter, lower-resistance tyres; the replacements follow. **Apollo**'s Vredestein brand holds real know-how in European all-season tyres. **JK**'s smart-tyre sensors help it keep truck fleets.",
                },
                {
                    label: 'Wearing: pricing power in a cost shock',
                    text: "None of the three could pass on this year's rubber spike in time. Costs rose 16–20% in a quarter; price increases of 7–11% followed, and each says another 4–8% is needed. Competitors raised prices by similar amounts, which is what keeps the industry's margins recovering, but always late.",
                },
                {
                    label: 'Barely a moat: overseas plants',
                    text: "**JK**'s Mexican unit (JK Tornel) lost 32% of its volume in a quarter to supply shortages and a labour slowdown. **CEAT**'s Camso business is losing money while it takes over customers from Michelin. **Apollo**'s Dutch plant had to close. Owning plants abroad has so far diluted returns.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**MRF**, India's largest tyre maker, and **Balkrishna Industries** (off-highway tyres) are not in this group. **Bridgestone**, **Michelin** and **Goodyear** compete in cars and premium sizes; Chinese makers compete on price in trucks and abroad.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In tyres, margins are set by the gap between rubber costs and selling prices, so the question is what a normal year looks like.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: a mid-teens margin in a normal year',
                    text: "In FY24–FY26, with rubber easing, all three earned 13–15% and returns of 14–20%. That is a fair picture of mid-cycle. **Apollo** has held the highest level (15% for most of the last year), helped by Europe and truck tyres.",
                },
                {
                    label: 'Cyclical: the rubber shock',
                    text: "Q1 FY27 margins fell to 12% at Apollo, 8% at CEAT and 7% at JK as raw-material costs rose 16–20% in a quarter. Each management expects recovery in the second half as price increases catch up and, they hope, rubber eases after the monsoon. JK now targets 11–13% by H2.",
                },
                {
                    label: 'Not structural: one-off losses',
                    text: "**CEAT**'s ₹48cr Sri Lankan-rupee loss (it is converting part of that loan into equity) and Camso's start-up losses. **Apollo**'s double-running costs in Europe while production moves from the Netherlands to Hungary. **JK**'s Mexico disruption. These should fade; the rubber cycle will not.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**JK** tied up the most in stock and receivables relative to its size, and its net debt rose ₹500cr in Q1 alone to fund working capital and capex. **Apollo**'s cycle has lengthened from 54 to 93 days in four years.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "All three built rubber stock this year to protect supply; CEAT's debt rose ₹232cr in Q1 partly for that reason. Expect cash conversion to dip in FY27.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**CEAT** runs a negative cash cycle: its dealers pay faster than it pays suppliers, so growth releases cash. That is why it has converted 93% of five years' operating profit into cash.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Tyre makers hold a month or two of rubber and finished tyres and give dealers credit; carmakers pay on their own terms. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: more vehicles on the road',
                    text: "Replacement demand grows with the vehicle fleet and freight, steadily and without much help from anyone. Q1 replacement volumes grew 13% at Apollo and mid-teens at CEAT; JK's truck replacement grew 15%.",
                },
                {
                    label: 'Growth driver: premium sizes and electric vehicles',
                    text: "Bigger rims and EV tyres earn more per tyre. **CEAT**'s 17-inch-plus replacement volumes doubled; **JK**'s 16-inch-plus sizes are 35% of its car tyres. EV tyres also wear out 5–10% faster, which speeds up replacement.",
                },
                {
                    label: 'Growth driver: new capacity',
                    text: "**Apollo** guided to more than ₹3,000cr of capex this year (₹650cr in Q1) for car-tyre capacity in Hungary and Andhra Pradesh. **JK** has committed ₹4,980cr to add 24% capacity at Chennai by FY29, 7% of it this year. **CEAT** spends ₹1,300–1,400cr this year and has approved ₹1,205cr more for two-wheeler tyres through FY31. All three say their Indian plants are 90–95% full, so this capacity has demand behind it today.",
                },
                {
                    label: 'Growth driver: exports and off-highway tyres',
                    text: "**CEAT**'s international sales grew about 30% and it is taking over Camso's customers directly (90% by September 2026). **Apollo** benefits from European duties on Chinese tyres. Off-highway and farm tyres earn more but depend on a few export markets.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Apollo** closed its Dutch plant on schedule in June 2026 and delivered its strongest Indian growth in 14 quarters. **CEAT** delivered the 10% price increase it promised and is on schedule with Camso's integration.",
                },
                {
                    label: 'Cautious',
                    text: "All three moved margin recovery to the second half of FY27 and expect another 8–10% cost rise in Q2.",
                },
                {
                    label: 'Missed',
                    text: "**JK** forecast an 8–10% cost rise and got 20%, and its Mexican labour issue was first described as “productivity negotiations”. **CEAT**'s Camso business swung to a loss rather than the contribution first promised.",
                },
                {
                    label: 'Mixed',
                    text: "**Apollo**'s CFO of 22 years resigned without explanation, and its managing director missed the Q1 call.",
                },
                {
                    label: 'My outlook',
                    text: "Volumes should grow 7–10% a year with premium sizes on top. Earnings will swing with rubber: FY27 will be weak, FY28 better if rubber eases and prices stick. **I expect earnings to compound at 8–12% across a cycle, and I would buy the cheapest balance sheet rather than the fastest grower.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Apollo Tyres', 'Truck replacement; Europe after restructuring; new car capacity', '4% / **10%** / 15%'],
                        ['CEAT', 'Two-wheelers, EVs and premium sizes; Camso turning profitable', '5% / **12%** / 18%'],
                        ['JK Tyre & Indust', 'Truck cycle; Chennai capacity; Mexico recovery; debt', '0% / **8%** / 15%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into four groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'Rubber stays dear',
                    text: "Every management is counting on rubber easing after the monsoon. If it does not, the further 4–8% price increases each says it needs will test demand. Natural rubber hit ₹280 a kilo this year, a 15-year high by CEAT's account.",
                },
                {
                    label: 'Capacity arriving together',
                    text: "All three are adding capacity for FY28–FY29. If the truck cycle turns as the lines start, prices and returns fall together. None of them has said what return it expects on the new plants.",
                },
                {
                    label: 'Debt and currency',
                    text: "**JK**'s net debt is about ₹4,900cr and management expects it to rise by another ₹500–700cr this year. **CEAT** lost ₹48cr on a Sri Lankan-rupee loan in one quarter. A weaker rupee raises the cost of imported rubber and chemicals for all three.",
                },
                {
                    label: 'People and plants abroad',
                    text: "**Apollo**'s CFO left after 22 years without an explanation. **JK**'s Mexican unit faces labour and supply problems and a review of the US–Mexico–Canada trade agreement. **CEAT**'s Camso integration runs to FY28.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 12x, 9% at 14x, 13% at 20x and 14% at 22x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Tyre shares are priced as cycles**: the question is whether you believe margins recover, not whether the price is cheap.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "All three carry net debt. **JK**'s is the largest relative to profit, so it is dearer than its P/E suggests; **Apollo**'s is the smallest.",
                },
                {
                    label: 'Reasonable',
                    text: "**Apollo** and **JK Tyre**: prices that ask for less growth than a normal cycle delivers. For JK, the debt is the reason it is cheap.",
                },
                {
                    label: 'Full',
                    text: "**CEAT**: a little ahead of my estimate, for the best cash converter and the strongest position in two-wheelers and EVs.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Apollo Tyres', rank: 1, stance: 'CYCLICAL', segment: TRUCK,
            what: "India's leading truck-tyre maker and a large car-tyre maker, with the Vredestein brand in Europe and plants in India and Hungary.",
            view: "**The largest, cheapest and least indebted.** It regained truck replacement share, closed its high-cost Dutch plant on time, and grew Indian revenue 15.6% in Q1. The rubber shock cut its margin to 12%. The price asks for less than my ~10% estimate.",
            watch: 'Margin recovery in H2; the new CFO; European margins after the Dutch closure.',
        },
        {
            company: 'CEAT', rank: 2, stance: 'PRICED', segment: CARS,
            what: "A leading maker of two-wheeler, car, truck and farm tyres, part of the RPG group, which bought Michelin's Camso off-highway tyre business.",
            view: "**The best cash converter with the best growth, priced for part of it.** Revenue grew 22% and it leads in EV tyres, but Q1 profit fell to ₹4cr on the rubber shock, a Sri Lankan-rupee loss and Camso start-up costs. The price needs a little more than my ~12% estimate.",
            watch: 'Camso turning profitable; further price increases sticking; debt as capex rises.',
        },
        {
            company: 'JK Tyre & Indust', rank: 3, stance: 'CYCLICAL', segment: TRUCK,
            what: "India's leading truck and bus radial tyre maker, with car and farm tyres, the Cavendish plants it merged in, and a Mexican subsidiary (JK Tornel).",
            view: "**Full plants, heavy debt.** Indian volumes grew about 25% and plants run at 95%, but Q1 margin fell to 7%, net debt is about 2.4 times operating profit and rising, and Mexico fell 32%. The price asks for about my ~8% estimate.",
            watch: 'Margin back to 11–13% in H2; Mexico recovering; net debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Truck-tyre led.** **Apollo Tyres: own.** The largest, cheapest and least indebted, with Europe being fixed. **JK Tyre: wait.** Full plants, but the most debt and a Mexican problem.",
            "**Two-wheeler and car led.** **CEAT: follow.** The best business and cash converter, at a fuller price; buy it on a bad quarter.",
            "**What would change my view.** For the better: rubber falling after the monsoon, and price increases sticking without hurting volumes. For the worse: rubber staying above ₹250 a kilo, or the truck cycle turning just as new capacity arrives.",
            "**What to watch next quarter.** Rubber prices; each company's margin against its H2 recovery promise; Apollo's new CFO; CEAT's Camso losses; JK's debt and Mexico.",
        ],
        bottomLine:
            "Tyres are a rubber cycle with a brand on top. Own Apollo Tyres for its price and balance sheet, follow CEAT for its quality, and wait on JK Tyre until its debt and Mexico improve.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/APOLLOTYRE/consolidated/' },
        { label: 'Wholesale price index, natural rubber — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
