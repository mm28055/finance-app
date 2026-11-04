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
            'JK Tyre & Indust': 6,
            'CEAT': 12,
        },
    },
    standfirst:
        "Three tyre makers that turn natural rubber, synthetic rubber, carbon black and steel cord into tyres for trucks, cars, two-wheelers and tractors. Most of their profit comes from the replacement market, where drivers and fleet owners buy through dealers; vehicle makers buy at thinner margins to seed future replacement sales. This year has two stories. Natural rubber is about 63% dearer than two years ago and hit a 15-year high in July, so margins fell in Q1 FY27 while price rises caught up. And all three are building at once: more than ₹13,000cr of announced projects (Apollo ₹5,810cr, JK ₹6,110cr, CEAT ₹1,205cr), most of it arriving in FY28–FY30, which will decide returns later this decade. Built from filed results, the last two earnings calls, the latest presentations, annual reports and rating reports of each company, and industry research from CRISIL, ICRA and ATMA.",
    lastUpdated: '2026-09-27',
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
                'JK Tyre & Indust': 'Q1 FY27: raw-material costs rose about 20% in the quarter, as management had forecast in May, while prices rose only about 5%; Mexico’s sales all but stopped.',
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
                'JK Tyre & Indust': 'Q1 FY27: India volumes up about 25%, but group revenue outside the Indian company (mainly JK Tornel in Mexico) fell from ₹416cr a year earlier to ₹23cr on input shortages and a labour slowdown.',
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
                grades: { dealer: { grade: 'A', note: 'Truck replacement share above 30%; cars 21%-plus (company estimate)' }, oem: { grade: 'B', note: 'New approvals from BMW, MINI, Genesis, Kia and Mahindra, and several EV platforms' }, tech: { grade: 'B', note: 'Vredestein all-season tyres in Europe' }, scale: { grade: 'A', note: 'Largest here; Dutch plant closed, output moved to Hungary and India' }, pass: { grade: 'C', note: 'About 11% taken by August; 15–16% needed' } } },
            { company: 'JK Tyre & Indust', trend: 'stable', trendNote: 'Called the truck-radial market leader by CARE, with the strongest fleet services; forecast the rubber shock correctly, but its margin fell furthest and Mexico stalled.',
                grades: { dealer: { grade: 'B', note: 'Strong with truck fleets; weaker brand in cars' }, oem: { grade: 'A', note: 'OEM volumes +42% in India in Q1' }, tech: { grade: 'C', note: 'Smart-tyre sensors; 16-inch-plus is 35% of car tyres' }, scale: { grade: 'B', note: 'Indian plants at 95%; Mexico under strain' }, pass: { grade: 'D', note: 'Margin fell to 6.5% on a 20% cost rise' } } },
            { company: 'CEAT', trend: 'widening', trendNote: 'About 25% of passenger-EV and two-wheeler-EV original fitments; 17-inch-plus car tyres doubling in replacement; replacement share up in FY26.',
                grades: { dealer: { grade: 'A', note: 'Leading two-wheeler brand; replacement about half of sales' }, oem: { grade: 'A', note: '~25% of passenger-EV and two-wheeler-EV fitments' }, tech: { grade: 'B', note: 'Off-highway tyres via Camso, still loss-making' }, scale: { grade: 'B', note: 'New ₹1,205cr two-wheeler capacity approved' }, pass: { grade: 'C', note: 'About 11% taken; about 16% needed' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Apollo Tyres.** **Apollo Tyres** is one of India's two biggest truck-tyre makers, a large car-tyre maker and the owner of the Vredestein brand in Europe. Its Indian business is having its best run in years: Q1 FY27 Indian revenue rose 15.6%, about 12 points of it from volume, its plants are 91% full, and it estimates its share of truck-radial replacement at more than 30%. Net debt is about ₹1,700cr, 0.4 times a year's operating profit, the lowest here, and FY26 brought about ₹2,300cr of free cash. Against that, CRISIL expects a 10–11% margin and a return on capital below 10% in FY27, the ₹5,810cr Andhra Pradesh expansion will earn little before FY29, the CFO of 22 years left on 6 October with no successor named, the managing director was paid ₹78.4cr, and it bought about ₹685cr of goods from promoter-group firms in FY26. I expect about 10% a year of earnings growth; the price needs about {need:Apollo Tyres|8}%. **Own it for the balance sheet and the price, knowing FY27 profit will be weak and FY26's included a one-off tax gain.**",
                "**Follow CEAT.** **CEAT**, an RPG Group company, is strongest in two-wheeler and passenger-car tyres, fits about a quarter of new electric cars and electric two-wheelers, and runs a negative cash cycle (it collects from dealers before it pays suppliers). Q1 FY27 revenue grew 22%, but its gross margin fell from 39.7% to 33.9% and profit fell to ₹4cr after a ₹48cr Sri Lankan-rupee loss and early losses at Camso, the tracks business it bought from Michelin for about US$225m. Debt has risen to ₹3,243cr, and CARE's leverage measure (2.34 times) sits just under its 2.5-times downgrade trigger, while it has just approved a ₹1,205cr two-wheeler plant. I expect about 12% a year; the price needs about {need:CEAT|14}%. **Follow, and buy on proof that Camso makes money, margins are back above 12% and CARE's leverage measure stays below 2.5 times.**",
                "**Wait on JK Tyre.** **JK Tyre** (listed as JK Tyre & Indust) calls itself India's truck-radial leader, runs nine Indian plants and owns JK Tornel in Mexico. Indian volume rose 25% in Q1, its plants are 95% full, and management forecast the rubber shock correctly. But the margin fell to 6.5%, Mexico's sales all but stopped, net debt rose ₹500cr in the quarter to ₹4,945cr, and it has committed ₹6,110cr to new capacity that CARE expects to lift leverage to 3.0–3.5 times operating profit, close to its 3.5-times downgrade trigger. It turns the least profit into cash of the three, and FY26 free cash flow was almost nil. The chairman and his son were paid about ₹83cr in FY26. I expect about 6% a year, because the expansion is borrowed and pays back slowly; the price needs about {need:JK Tyre & Indust|9–10}%. **Wait for margins back at 11–13% in H2, Mexico's recovery and net debt held inside CARE's 3.5-times limit.**",
                "**Three things to hold onto before reading the rest.** First, **this is a cyclical industry whose cycle is rubber**: returns fell to single digits in FY22 when rubber was dear and rose to 15–20% when it eased, and FY27 is another squeeze. Second, **all three are adding capacity at once**, which is fine while plants run at 90–95% but painful if demand slows to the mid-single digits forecast for FY28–FY30 just as the lines start. Third, **the same 2018 competition-law penalty hangs over all three**: the Competition Commission fined Apollo ₹425.5cr, JK ₹310cr and CEAT ₹252cr for truck-tyre price collusion in 2011–12, none has provided for it, and the Supreme Court has yet to rule.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. Tyre makers sell product, not projects, so there are no order books. Hover over a starred name for its caveat.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Apollo's stored Q3 FY26 row was all zeros (filed revenue ₹7,743cr, profit ₹471cr) and its Q2 and Q4 profits were stored as zero. CEAT's stored rows mix standalone revenue with consolidated profit. JK's stored figures include other income. Two stored call transcripts were materially wrong: CEAT's Q4 FY26 copy gave debt of ‘311 crores’ (the official figure is ₹3,011cr), and JK's Q4 FY26 copy gave a raw-material forecast of 8–10% (officially 18–20%), which the old note repeated. Every figure and quote here was checked against the official filings.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian tyres are an oligopoly in a cost squeeze, not a demand slump.** ATMA, the industry body, puts industry turnover at about ₹1 lakh crore; CRISIL Ratings counts about ₹1.36 lakh crore of FY26 revenue including overseas subsidiaries, with the six largest makers earning about 85% of it. Replacement buyers take about half of all tyres made, and vehicle makers and exports about a quarter each. Volumes grew 7–8% in FY26, helped by the GST cut of September 2025 (tyres from 28% to 18%, farm tyres from 18% to 5%), and faster still in Q1 FY27. But natural rubber reached about ₹280 a kilo in July, a 15-year high, and CRISIL expects the industry's operating margin to fall from 14.2% in FY26 to about 11.5–12% in FY27 before recovering to 13–13.5% in FY28. **My view: this is a margin trough in a healthy market; the bigger long-term risk is the capacity every maker is now building.**",
            ],
            points: [
                {
                    label: 'Value chain and where the profit sits',
                    text: "Natural rubber (grown in Kerala and imported from Côte d'Ivoire, Indonesia and Vietnam), synthetic rubber, carbon black, nylon and steel cord → tyre plant → **dealer or vehicle maker** → driver or fleet owner. Raw materials are 60–65% of costs (CRISIL, CARE) and natural rubber is about half of that basket, so the rubber price decides the year. India grew 8.75 lakh tonnes of natural rubber in FY25 but used 14.1 lakh tonnes and imported 5.51 lakh tonnes, and tyres take 67% of the country's rubber (Rubber Board); because Indian prices track import prices, **a weaker rupee raises costs even for rubber grown in Kerala**. **The profit sits in replacement**, premium car and two-wheeler tyres and off-highway exports: dealers accept price rises within weeks, while vehicle makers pay on formulas that trail costs by a quarter. **Balkrishna**, which exports off-highway tyres, earned 21% in FY26 and 22% in Q1; truck tyres, the most price-sensitive, earn least.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Replacement demand follows the number of vehicles on the road and how far they run, so it grows steadily; ICRA expects 5–7% in FY27, with sales to vehicle makers slowing to 4–6% on a high base. CRISIL Ratings expects total volumes to slow to 4–5% in FY27 after 7–8% in FY26, while CRISIL Intelligence is more hopeful at ‘higher single digits’. The companies are running far ahead of that for now: in Q1 FY27 industry car sales rose 23%, truck sales 14% and tractor sales 22%, and **JK**'s Indian tyre volumes rose 25%, **Apollo**'s about 12% and **CEAT**'s 13–14%. Two things damp truck replacement: more than 70% of truck tyres are retreaded at least once (ICRA), and steep price rises make fleets stretch tyre life. **My view: Q1's pace is the GST cut plus restocking; plan on mid-single-digit volume growth from FY28.**",
                },
                {
                    label: 'Costs and the cycle',
                    text: "**The cycle is rubber, not demand.** Apollo paid about ₹225 a kilo for natural rubber in Q1 FY27 (₹200 in Q4) and expects more than ₹260 in Q2; synthetic rubber went from ₹170 to ₹250 as Brent crude passed US$100 in March–May on the West Asia war, and carbon black from ₹110 to ₹125. The rupee weakened from about 88–90 to 96.5 to the dollar, and 40–50% of materials are imported. The materials basket rose 16–20% in Q1 and will rise 8–10% more in Q2; each maker says it needs 15–16% of price increases in total and had about 11% by August. An analyst on CEAT's call noted that Kerala's rubber floor price was raised from ₹200 to ₹250 a kilo, which keeps a floor under local prices. **Tyre makers have always earned their best margins when rubber falls and they hold prices, and all three managements say they will hold prices this time.**",
                },
                {
                    label: 'Policy and trade',
                    text: "At home, imports are under 5% of demand (ICRA), protected by countervailing duties on Chinese truck tyres since 2019 and import licences for many tyres since June 2020, though CARE flags cheap imports from Thailand. In Europe, definitive anti-dumping duties of 4.3–45.3% on Chinese car and van tyres started on 8 July 2026 for five years; Chinese makers held 28% of a 330-million-tyre, €18bn market in 2024, so this helps **Apollo**'s cheaper Apollo-brand tyres and Indian exporters. The US charges about 29% on Indian road tyres and 10% on off-highway tyres, and took 15% of India's record ₹27,312cr of tyre exports in FY26 (ATMA). Apollo calls the new India–EU and India–UK trade deals ‘not material’. The oldest policy issue is the 2018 Competition Commission order fining the major makers for truck-tyre price collusion, which is still before the Supreme Court.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Apollo** depends on truck and car replacement in India, on its European restructuring working and on the Andhra Pradesh expansion filling; **JK Tyre** on the truck cycle, on keeping debt inside CARE's limits while it builds ₹6,110cr of capacity, and on Mexico; **CEAT** on two-wheelers, premium car and EV tyres, and on making Camso profitable. All three depend on rubber easing after the monsoon. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools: the six listed tyre makers, FY26 (filed figures)',
                    columns: ['Company', 'Revenue', 'Operating margin FY26', 'Share of the six makers’ operating profit', 'Operating margin Q1 FY27', 'Where the profit comes from'],
                    rows: [
                        ['MRF (not in this group)', '₹31,149cr', '16%', '31%', '12%', 'Largest brand; truck and two-wheeler replacement'],
                        ['Apollo Tyres', '₹28,471cr', '15%', '26%', '12%', 'Replacement (about 79% of group revenue), led by Indian trucks and cars; Europe about 30% of FY26 revenue'],
                        ['Balkrishna (not in this group)', '₹10,823cr', '21%', '15%', '22%', 'Off-highway tyre exports'],
                        ['CEAT', '₹15,678cr', '13%', '13%', '8.5%', 'Two-wheeler, car and truck replacement; vehicle makers 30%'],
                        ['JK Tyre & Indust', '₹16,327cr', '12%', '13%', '6.5%', 'Truck and bus radials; Mexico'],
                        ['TVS Srichakra (not in this group)', '₹3,643cr', '8%', '2%', '8%', 'Two-wheeler tyres'],
                    ],
                    note: 'Screener, consolidated. The six had revenue of about ₹1.06 lakh crore. The replacement-heavy leaders and the off-highway exporter held their margins best in Q1 FY27.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Industry size', 'About ₹1 lakh crore turnover (ATMA); ₹1.36 lakh crore of revenue including overseas units, top six about 85%', '—', 'ATMA, Jun 2026; CRISIL Ratings, Aug 2026'],
                        ['Domestic volume', 'Up 7–8% in FY26 after the GST cut', '**FY27 +4–5%** (CRISIL Ratings); **+5–7%**, replacement 5–7%, vehicle makers 4–6% (ICRA); ‘higher single digits’ (CRISIL Intelligence)', 'CRISIL, Aug 2026; ICRA, Mar 2026; CRISIL Intelligence, Jul 2026'],
                        ['Industry operating margin', '14.2% in FY26', '**About 11.5–12% in FY27; 13–13.5% in FY28**', 'CRISIL Ratings, Aug 2026'],
                        ['Capex', 'Indian plants 90–95% full', '**About ₹18,000cr at the top six over FY27–FY28**, nearly twice the previous two years; 7–10% of revenue in FY27', 'CRISIL Ratings, Aug 2026; ICRA, Mar 2026'],
                        ['Exports', 'Record ₹27,312cr in FY26 (+9%); US 15%, Germany 7%', 'Under pressure from US tariffs and the West Asia war', 'ATMA, Jun 2026; ICRA, Mar 2026'],
                        ['Natural rubber', 'India produced 8.75 lakh t, used 14.1 lakh t (FY25); about ₹280/kg in July 2026, a 15-year high', 'Expected to cool from Q3 FY27 as monsoon supply returns (Apollo)', 'Rubber Board; company calls'],
                        ['GST', 'Tyres cut from 28% to 18%, farm tyres to 5% (22 Sep 2025)', 'Demand boost fades as the base catches up', 'Company calls'],
                        ['EU duties on Chinese car tyres', '4.3–45.3% from 8 Jul 2026, for five years', 'Anti-subsidy probe due Dec 2026', 'European Commission, Jul 2026'],
                        ['US tariffs on Indian tyres', 'About 29% on road tyres; 10% on off-highway', 'Unchanged', 'ATMA; CEAT call'],
                        ['FY29', 'No agency forecast found', 'My assumption: volumes +5–7% a year, margins 12–14% if rubber normalises, with price-war risk as new capacity lands', 'My estimate'],
                    ],
                },
                {
                    caption: 'Where the tyres go and where the rubber comes from (latest presentations and calls)',
                    columns: ['Company', 'Product mix', 'Who buys', 'Plants', 'Rubber bought'],
                    rows: [
                        ['Apollo Tyres', 'Group, Q1 FY27: truck and bus 41%, car 36%, farm and off-highway 11%, light truck 6%. India: truck and bus 53%, car 22%', 'Replacement about 79%, vehicle makers 21%; India 69% of Q1 revenue, Europe 26%, other 5%; Indian volumes: replacement +13%, vehicle makers +10%, exports +15%', 'India 91% used, Europe 94%; Dutch plant closed June 2026; Hungary rising from 17,000 to 21,000 car tyres a day', 'About half Indian, half imported; about half of all materials imported'],
                        ['CEAT', 'FY26, standalone: truck and bus 29%, two- and three-wheeler 27%, car and UV 22%, off-highway 15%, light truck and other 7%', 'Replacement about 50%, vehicle makers 30%, exports 20% (23% with Camso)', '4.5 crore tyres made in FY26; 85–90% used; Chennai car line to 130 lakh a year by FY28; Nagpur two-wheeler to 1 lakh a day', 'About two-thirds imported, one-third Indian'],
                        ['JK Tyre & Indust', 'Q1 FY27: truck and bus 56%, car 27%, two- and three-wheeler 5%, farm and other 12%', 'Replacement 63%, vehicle makers 27%, exports 10%; Indian volume +25% (vehicle makers +42%); Mexico sales all but stopped', 'Nine Indian plants, two in Mexico; 38 million-plus tyres a year; about 95% used in India, 80% with Mexico', '40–50% of materials imported'],
                    ],
                    note: 'Splits are by revenue from each company’s presentation, annual report or rating report. CEAT gives its product split only for the full year.',
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
                    label: 'Lasting: brands and dealers (evidence of share)',
                    text: "Replacement buyers choose at the dealer, and a brand with a wide network earns a premium. **Apollo** has about 6,500 Indian dealerships and estimates its share of replacement at more than 30% in truck radials and 21%-plus in car tyres; it says it has won back truck share it lost earlier, and grew replacement volumes 13% in Q1 while halving advertising. **CEAT** has more than 5,700 dealers, 61,000 sub-dealers and 1,115 shops, and gained about half a point of replacement share in cars and truck radials and a full point in motorcycles in FY26. **JK** has more than 6,000 dealers and more than 870 branded outlets, and CARE calls it the truck-radial market leader. No official share data is published, so these claims overlap. **My view: the dealer networks are the real moat, and they take decades to build.**",
                },
                {
                    label: 'Evidence of pricing power: real, but always late',
                    text: "All three pushed about 11% of price rises through replacement between April and August, and each says rivals followed ‘in similar magnitude’. CEAT's managing director said there is ‘no question of any rollback’. Yet none could keep pace with a 16–20% cost rise in one quarter, and each needs 15–16% in total; CRISIL writes that competition limits Apollo's ability to pass on cost increases fully. Vehicle makers pay on formulas that lag by a quarter, and in Europe Apollo calls itself ‘more a follower given our size’. **My view: the industry prices together, which is why margins always recover, but a shock this fast costs two or three weak quarters.**",
                },
                {
                    label: 'Switching costs: approvals and fleet services',
                    text: "A vehicle maker tests a tyre for months before fitting it, and a tyre fitted at the factory is likely to be bought again. **CEAT** fits about a quarter of new electric cars and electric two-wheelers and more than 20% of premium original fitments. **Apollo** won approvals from BMW, MINI, Genesis, Kia and Mahindra, and on several EV platforms. **JK** added Tata Motors, Ashok Leyland, Mahindra, Switch Mobility and VECV in FY26, and ties fleets in with more than 100 Truck Wheels centres, 700-plus pit stops and tyre-pressure sensors, a programme management says is ‘difficult for other players to duplicate’. **These approvals and services make customers sticky, though they do not stop price competition in trucks.**",
                },
                {
                    label: 'Lasting but narrow: premium sizes and specialist tyres',
                    text: "Bigger rims, EV tyres and off-highway tyres earn more per kilo. **CEAT**'s 17-inch-plus replacement volume doubled in Q1, and Brand Finance ranked it the world's fourth-strongest tyre brand in 2026. **JK** says premium tyres rose from about 25% of sales in FY25 to over 30% in FY26 and targets about 50% in three years. **Apollo**'s Vredestein brand holds real know-how in European all-season and farm tyres. **Balkrishna**'s 21–22% margin shows what a true specialist earns; these three are only partly there.",
                },
                {
                    label: 'Barely a moat: plants and businesses abroad',
                    text: "**JK**'s Mexican unit lost most of a quarter's sales to Chinese bead-wire and container shortages and a worker ‘slowdown’, and earned only 6.6% in FY26 on ₹2,138cr of revenue. **CEAT**'s Camso business is losing money while it moves customers over from Michelin, and faces US tariffs of 10% on off-highway tyres and 25% on the steel in its tracks. **Apollo** had to close its Dutch plant, now buys 20–25% of its European farm tyres from two outside makers, and carries ₹466cr of goodwill and brands for Reifencom, an online tyre seller earning a 2–3% margin. **Owning businesses abroad has so far diluted returns at all three.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**MRF**, India's largest tyre maker by revenue and the benchmark brand, and **Balkrishna Industries** (off-highway exports) are not in this group; **TVS Srichakra** competes in two-wheeler tyres. **Bridgestone**, **Michelin** and **Goodyear** compete in cars and premium sizes; Chinese and Thai makers compete on price in trucks and abroad. MRF carries only about ₹3,207cr of borrowings on ₹31,149cr of sales, so it can outlast a price war better than anyone here.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In tyres, margins are set by the gap between rubber costs and selling prices, so the question is what a normal year looks like and how much of the recent swing is one-off.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: a mid-teens margin in a normal year',
                    text: "In FY24, with rubber cheap, Apollo earned 18%, JK 14% and CEAT 14%; in FY26 the industry earned 14.2% (CRISIL), Apollo 15%, CEAT 13% and JK 12%. That is a fair picture of mid-cycle. **Apollo** has held the highest level because 79% of its revenue is replacement and it leads in truck radials; **CEAT**'s gross margin (sales minus materials) was 39.7% a year ago against 33.9% in Q1; **JK** earns least because truck tyres are the most price-sensitive and Mexico earns little. **My view: 13–15% is normal for Apollo, 12–14% for CEAT and 11–13% for JK; FY28 should be back in those ranges if rubber eases.**",
                },
                {
                    label: 'Cyclical: the rubber shock',
                    text: "Q1 FY27 margins (filed figures) fell to 12% at Apollo, 8.5% at CEAT (8.6% by its own count) and 6.5% at JK as raw-material costs rose 16–20% in a quarter, and Q2 carries another 8–10% on stock already bought. Each management expects recovery in the second half as price rises and vehicle makers' formula prices catch up and, they hope, rubber cools after the monsoon. JK guides 11–13% in H2 and about 10–11% for the year; CRISIL expects 10–11% for Apollo and CARE 10–11% for JK. Apollo's CFO put the upside plainly: ‘we've always recorded our best margins when the raw material cycle starts coming down’. **My view: FY27 is a trough year, not a reset; the risk is that new capacity in FY28–FY30 stops prices being held when rubber falls.**",
                },
                {
                    label: 'Not structural: one-offs and a windfall',
                    text: "Several items distort the reported figures in both directions. **CEAT**'s Q1 carried a ₹48cr loss on a US$80m loan to its Sri Lankan subsidiary and negative operating profit at Camso. **Apollo**'s European margin was 8.9% in Q1, which its CFO put at about 11% without the costs of running Dutch and Hungarian plants together: roughly the 10.8% of a year earlier, but far below Q4's 14.6%, so the overlap explains the fall on the year and rising costs the fall from Q4; it booked ₹1,034cr of exceptional charges in FY26 to close the Dutch plant. **Windfall to note: Apollo's Q4 FY26 profit of ₹631cr includes a one-off deferred-tax gain of about ₹570cr**, though its Indian tax rate genuinely falls from 34% to 25% from FY27. **JK**'s Mexico loss should prove temporary. **Judge all three on operating profit, not last year's net profit.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**JK** has tied up the most relative to its size: about ₹1,679cr over five years, with debtor days up from 60 to 72 and working-capital days from 2 in FY24 to 35 in FY26, leaving almost no free cash in FY26 after capex. **Apollo** absorbed about ₹2,256cr over five years on a larger base; its cycle lengthened from 54 to 93 days, mostly because it now pays suppliers faster (payable days fell from 104 to 76) and holds 128 days of stock. Both still converted a healthy share of profit to cash in FY26: Apollo 88% and JK 71%.",
                },
                {
                    label: 'Working capital: getting worse this year',
                    text: "All three built rubber stock in Q1 to secure supply at rising prices. **CEAT**'s working capital rose ₹138cr and its debt ₹232cr, partly because about ₹120cr of GST credits built up that it expects to recover over two quarters. **JK**'s net debt rose ₹500cr in the quarter. **Apollo**'s net debt edged up from about ₹1,600cr to ₹1,700cr despite a ₹650cr capex quarter. Expect cash conversion to dip in FY27 at all three.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**CEAT** runs a negative cash cycle: it pays suppliers after about 132 days, while stock and customer credit together take about 111 days, so growth releases cash. It released a small ₹62cr over five years while the others absorbed thousands of crores, and it has turned 93% of five years' operating profit into cash, the best here. **Apollo** turned ₹3,667cr of operating cash in FY26, its best year.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Tyre makers hold a month or two of rubber and finished tyres and give dealers credit; dealers in turn lodge deposits (₹1,315cr at Apollo, ₹961cr at JK) that act as cheap funding, and vehicle makers pay on their own terms. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet and ratings'],
                    rows: [
                        ['Apollo Tyres', 'Net debt about ₹1,700cr, 0.4x operating profit; Q1 capex ₹650cr (₹500cr in India) of ₹3,500cr planned for FY27; ‘we will be a net borrower’; about €55m of Dutch closure cash this year, already provided', 'Net debt ₹2,631cr at March including leases (Screener); cash about ₹1,029cr; bank lines of ₹4,531cr about 10% used; CRISIL sees leverage including dealer deposits at 1.8–2.0x in FY27'],
                        ['CEAT', 'Debt ₹3,243cr, up ₹232cr on rubber stock and GST credits; 1.6x operating profit; Q1 capex ₹293cr; US$24.5m of the Sri Lankan loan converted to equity in September', 'Net debt ₹3,229cr at March (Screener); CARE AA/Positive, India Ratings AA/Positive; CARE downgrade trigger: net debt above 2.5x operating profit'],
                        ['JK Tyre & Indust', 'Net debt ₹4,945cr, up ₹500cr in the quarter; 2.56x operating profit; cash ₹220cr; another ₹500–700cr of borrowing expected in FY27', 'Net debt ₹4,581cr at March (Screener); CARE AA-/Stable; downgrade if margin stays below 10% or leverage passes 3.5x; bank lines 61% used'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. The March figures (Screener) include lease liabilities, so they differ from the companies’ own definitions.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what is being built and how it pays back, how each company did against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: more vehicles, and a GST boost that will fade',
                    text: "Replacement demand grows with the vehicle fleet and freight, steadily and without much help. The GST cut added a step on top: Q1 Indian volumes grew about 12% at Apollo (replacement 13%, vehicle makers 10%, exports 15%), 13–14% at CEAT (international about 30%) and 25% at JK, where vehicle-maker volumes rose 42% and two- and three-wheeler replacement 48%. Apollo said demand kept surprising it through July, and JK called FY27 demand buoyant. The forecasters (ICRA 5–7%, CRISIL 4–5% for FY27) expect much slower growth once the base catches up. **My view: the Q1 pace will not last, and the next three years should look more like 6–8% revenue growth before price.**",
                },
                {
                    label: 'Growth driver: premium sizes and electric vehicles',
                    text: "Bigger rims and EV tyres earn more per tyre, and EV tyres wear out 5–10% faster (JK), which speeds up replacement. **CEAT**'s 17-inch-plus replacement volume doubled and it holds about 25% of passenger-EV and two-wheeler-EV fitments; **JK** says premium tyres are over 30% of sales and aims for about half in three years, with 16-inch-plus sizes already 35% of its car tyres; **Apollo** won EV and premium European approvals. **This is the best source of margin growth, and CEAT is furthest ahead.**",
                },
                {
                    label: 'Growth driver: new capacity, and what it pays back',
                    text: "**Apollo** plans ₹3,500cr of capex in FY27, about 80% for growth, including the ₹5,810cr Andhra Pradesh expansion (3.7 million more car tyres and 1.3 million more truck tyres a year by FY29) and Hungary's rise from 17,000 to 21,000 car tyres a day from H2 FY27. **JK** has ₹1,130cr of lines due by Q3 FY28 plus ₹4,980cr at Chennai and Mysuru over FY27–FY30, adding about a quarter to its truck and car capacity, funded two parts debt to one part equity. **CEAT** spends ₹1,300–1,400cr this year and approved ₹1,205cr for a 53,000-tyre-a-day two-wheeler plant by FY31. My rough payback sums: at today's prices Apollo's and JK's truck and car expansions bring in less than ₹1 of sales per ₹1 invested (0.6–1 times, against 1.7–2.3 times on existing plants), so they take eight to ten years or more to pay back; on the same rough sums, CEAT's two-wheeler plant should turn about 1.7 times its cost. **My view: the capex is demand-led today but lands when forecast growth is mid-single-digit, so returns will dip before they recover.**",
                },
                {
                    label: 'Growth driver: exports, Europe and off-highway',
                    text: "India's tyre exports hit a record ₹27,312cr in FY26, and the new EU duties on Chinese car tyres help Apollo's cheaper brand and Indian exporters. **Apollo** targets a ‘high teens’ European margin once Dutch output has moved to Hungary and India. **CEAT**'s Camso runs at about US$120m a year at customer prices; customers were 50–60% moved from Michelin by June, 90% are due by September, its own mixing lines by March 2027 and sales to machine makers from FY28, when it hopes for the 12–13% margin once discussed. **JK**'s Mexican unit benefits from the renewal of the US–Mexico–Canada trade pact for ten years, but first has to recover.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Apollo** said in May that Q1 raw materials would rise ‘mid to high teens’; they rose 17%, it took 7–9% of price rises as planned, cut advertising after a 4%-of-sales Q4, and stopped Dutch production in June on schedule. **CEAT** promised a 10% replacement price rise by June and had about 11% by mid-July, with the vehicle-maker index rise on 1 July as planned. **JK** forecast an 18–20% raw-material rise, got about 20%, and delivered the full Indian plants it promised.",
                },
                {
                    label: 'Cautious',
                    text: "All three pushed margin recovery into the second half and expect another 8–10% cost rise in Q2. JK guides 10–11% revenue growth and a full-year margin of about 10–11%, ‘if I have to make a guess’, below FY26's 12%. Apollo hardened its language from ‘largely committed’ capex in May to ‘we will be a net borrower’ on the Q1 call. CEAT called Q1 ‘a turbulent quarter’ in advance and expects demand to moderate but not fall.",
                },
                {
                    label: 'Missed',
                    text: "**CEAT**'s standalone margin fell to 9.1% from 14.6% in Q4 and group profit to ₹4cr, with Camso's operating profit negative and its customer transfer only 50–60% done by June. **JK**'s margin fell to 6.8% on its own measure (12.9% in Q4), and nothing in May prepared investors for Mexico's sales almost stopping in the quarter.",
                },
                {
                    label: 'Mixed',
                    text: "**Apollo**'s CFO of 22 years, Gaurav Kumar, stepped down as a whole-time director on 6 August and left as CFO on 6 October with no successor named, and the managing director missed the Q1 call. Its Q1 capex of ₹650cr was below the pace of its ₹3,500cr plan, which management says rises in Q2–Q3. **CEAT** added the ₹1,205cr two-wheeler plant in the same quarter its profit collapsed, which shows confidence in volumes but adds to debt. **JK** kept its whole ₹6,110cr programme while its leverage rose.",
                },
                {
                    label: 'My outlook',
                    text: "Volumes should grow 5–7% a year after the GST boost, with premium sizes on top; margins trough in FY27 and recover in FY28 if rubber eases and prices stick. **I expect earnings to compound at about 10% at Apollo, 12% at CEAT and 6% at JK.** Apollo gains from a lower Indian tax rate and a leaner Europe, but new plants add depreciation before they add profit. CEAT recovers from a depressed base and has the best product mix, offset by higher interest and Camso's slow start. JK's growth is held back by the interest and depreciation on ₹6,110cr of mostly borrowed capex before the new lines earn, and by Mexico.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Apollo Tyres', 'Truck and car replacement; lower Indian tax rate; Europe after the Dutch closure; Andhra Pradesh depreciation from FY28', '4% / **10%** / 15%'],
                        ['CEAT', 'Two-wheelers, EVs and premium sizes; recovery from a weak FY27; Camso turning profitable; higher interest', '5% / **12%** / 18%'],
                        ['JK Tyre & Indust', 'Truck cycle; debt-funded capacity to FY30; Mexico recovery; interest and depreciation', '0% / **6%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Apollo Tyres', 'No revenue or margin target; 15–16% of price rises needed (about 11% taken); Europe ‘high teens’ margin after the move; leverage to rise ‘slightly’', '₹3,500cr in FY27, about ₹3,000cr in India (₹650cr in Q1); ₹5,810cr Andhra Pradesh by FY29; Hungary +4,000 car tyres a day from H2', '**Delivered**: cost forecast met at 17%, price rises taken, Dutch plant closed in June; margin recovery pushed to H2'],
                        ['CEAT', 'About 16% of price rises needed (about 11% taken, 4–6% more in July–August); Camso customers 90% moved by September, upstream by March 2027', '₹1,300–1,400cr in FY27 (₹293cr in Q1); ₹1,205cr two-wheeler plant to FY31; Camso upstream about US$30m', '**Mixed**: 10% price rise promised and delivered; margin 9.1% against 14.6%; Camso loss-making'],
                        ['JK Tyre & Indust', 'FY27 margin about 10–11%, 11–13% in H2; revenue +10–11%; 8–9% more price rises; debt +₹500–700cr', '₹6,110cr in all: ₹1,130cr by Q3 FY28 and ₹4,980cr at Chennai and Mysuru over FY27–FY30; about ₹1,200cr of cash in FY27 (CARE: ₹1,600–1,800cr)', '**Behind** (Q2 call): margin 7.1% with costs still rising; net debt +₹751cr in one quarter (₹500–700cr guided for the year); Mexico recovered'],
                    ],
                    note: 'Margins in this table are the companies’ own; the charts use filed figures (Apollo 11.7%, CEAT 8.5%, JK 6.5% in Q1 FY27).',
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
                    label: 'Rubber stays dear',
                    text: "Every management is counting on rubber cooling after the monsoon; Apollo expects it from Q3. If it does not, the further 4–9% of price rises each says it needs will test demand. Natural rubber hit about ₹280 a kilo in July, the highest in 15 years, Q2 costs are already locked in 8–10% higher, and a weaker rupee raises the cost of the 40–50% of materials that are imported. Crude-linked inputs such as synthetic rubber rose even faster than natural rubber in Q1. **None of the three said how far margins would fall if rubber stays at these levels.**",
                },
                {
                    label: 'Capacity arriving together',
                    text: "CRISIL counts about ₹18,000cr of capex at the six largest makers over FY27–FY28, nearly twice the previous two years, and the three here alone have more than ₹13,000cr of announced projects landing in FY28–FY30, when forecasters expect only mid-single-digit growth. Truck and car radials, where most of it goes, are the most price-sensitive products, and more than 70% of truck tyres are retreaded, which caps replacement demand. None of the managements has said what return it expects on the new plants, and my own sums give paybacks of eight years or more for Apollo's and JK's. **This is the classic set-up for a later price war.**",
                },
                {
                    label: 'Debt, ratings and currency',
                    text: "**JK**'s net debt is about ₹4,945cr and CARE expects leverage of 3.0–3.5 times operating profit during the build, against a downgrade trigger of 3.5 times or a margin below 10% for long; FY26 free cash flow was almost nil. **CEAT**'s CARE leverage measure (including supplier credit and dealer deposits) was 2.34 times against a 2.5-times trigger, and about US$56m of its Sri Lankan loan is still exposed to a currency that cannot be hedged. **Apollo** will turn net borrower, and CRISIL expects its return on capital to drop below 10% in FY27. **JK has the least room if FY27 is worse than guided.**",
                },
                {
                    label: 'Governance: pay and related parties',
                    text: "**Apollo**'s vice-chairman and managing director Neeraj Kanwar was paid ₹78.4cr in FY26 (₹62.4cr of it commission), up 96% and 541 times the median employee, and also drew pay from a UK subsidiary; Apollo bought about ₹685cr of goods in FY26 from promoter-group firms Classic Industries & Exports and Vilas Polymer (₹473cr in FY25) and leases its Kalamassery plant from promoter-group PTL Enterprises. **JK**'s chairman Dr Raghupati Singhania (₹43.6cr) and managing director Anshuman Singhania (₹39.0cr) together took about ₹83cr, about 11% of standalone FY26 profit, and JK sold roughly ₹400cr of tyres to an associate, Valiant Pacific (the filed table is hard to read, so treat the figure as approximate). **CEAT** pays RPG Enterprises a licence fee of about ₹26cr a year, and promoters H.V. and Anant Goenka took ₹9.75cr of commission as non-executive directors; a voluntary Deloitte review found no gaps in its related-party process. No promoter pledges were found at any of the three. **Pay at Apollo and JK is high enough to matter to shareholders.**",
                },
                {
                    label: 'Legal and accounting',
                    text: "The 2018 Competition Commission penalties (Apollo ₹425.5cr, JK ₹310cr, CEAT ₹252cr) are unprovided and before the Supreme Court; CEAT also faces a second case over a 2013 Himachal Pradesh bus-tyre tender. Apollo's contingent sales-tax claims rose from ₹189cr to ₹515cr in FY26. All three auditors gave clean opinions, but with points to watch: Apollo's auditor flagged ₹466cr of goodwill and brand value for Reifencom, which earns a 2–3% margin, and ₹822cr of dealer-incentive and warranty accruals; JK's added an emphasis of matter because merging Cavendish restated FY25; CEAT's reviewed the Camso purchase, and CEAT still owes Michelin US$44m for the Camso brand about three years after the deal. **A Reifencom write-down or a CCI loss would hit Apollo's book hardest.**",
                },
                {
                    label: 'People, plants abroad and demand after steep price rises',
                    text: "**Apollo**'s CFO left on 6 October with no successor named. **JK**'s Mexico faced labour and supply problems that management says are resolved, but it still has to prove it. **CEAT**'s Camso integration runs to FY28, and its US tracks sales face a 25% tariff on steel content. Foreign investors have been selling: Apollo's foreign holding fell from 22.1% in September 2023 to 10.1%, and CEAT's from 24.1% to 13.8%. Tyre prices are rising 15%-plus in a few months, far faster than usual; if buyers push back, or a weak monsoon hurts rural demand, volumes fall just as the new plants need them.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 12x, 10% at 14x and 14% at 22x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Tyre shares are priced as cycles**: the question is whether you believe margins recover, not only whether the price is low.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "All three carry net debt. On P/E, **CEAT** looks far dearer than **JK** and **Apollo**; on EV/EBITDA the gap narrows sharply, because **JK**'s ₹4,581cr of net debt is about 2.4 times its operating profit against 0.6 times at Apollo, and CEAT's trailing profit is depressed by one terrible quarter. **JK** is dearer than its P/E suggests; **Apollo** is the cheapest on both yardsticks.",
                },
                {
                    label: 'Fits: Apollo, with a caveat on its profit',
                    text: "**Apollo** needs about {need:Apollo Tyres|8}% a year against my ~10%. The caveat is its trailing profit: Q4 FY26 included a one-off deferred-tax gain of about ₹570cr, so strip that out and the price asks for roughly my estimate rather than well below it. It still fits, because the balance sheet is the strongest here, the lower Indian tax rate is real, and Europe should earn more without the Dutch plant. **Own it, sized for a weak FY27.**",
                },
                {
                    label: 'On the line between fits and full: CEAT, the best business priced for a recovery',
                    text: "**CEAT** needs about {need:CEAT|14}% a year against my ~12%, which sits right on the line between fair and full. Its trailing profit includes Q1's ₹4cr, so a return to FY26's ₹697cr would make the price look much cheaper; the market is already paying for that recovery. What I cannot yet price is Camso's margin and the extra interest on ₹3,243cr of debt. **Follow, and buy on a weak quarter once Camso shows a profit.**",
                },
                {
                    label: 'Full: JK, cheap for a reason',
                    text: "**JK** needs about {need:JK Tyre & Indust|9–10}% a year against my ~6%. The P/E looks low, but it carries the most debt, the heaviest capex relative to its size, the slowest payback and the weakest free cash flow of the three, and its trailing profit still includes three quarters at 13–14% margins that FY27 will not repeat. **Wait for H2 margins of 11–13% and a quiet Mexico quarter.**",
                },
                {
                    label: 'Stretched',
                    text: "None of the three. The market is not paying for a quick margin rebound anywhere except CEAT.",
                },
                {
                    label: 'Trailing profit is about to fall',
                    text: "The P/E uses the last four quarters. For **Apollo** and **JK**, three of those earned 13–15% margins; if FY27 averages 10–11%, as CRISIL and CARE expect, trailing profit will fall and **today's P/Es will look higher next year even if prices stay put**. The best time to buy tyre shares has historically been when rubber peaks and margins trough, which may be close, but the capacity wave makes this cycle's recovery less certain than the last.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Apollo Tyres', rank: 1, stance: 'CYCLICAL', segment: TRUCK,
            what: "One of India's two biggest truck-tyre makers and a large car-tyre maker, with the Vredestein brand and a plant in Hungary serving Europe; India is about 69% of revenue.",
            view: "**The largest, cheapest and least indebted, at the start of a heavy spending cycle.** Indian revenue grew 15.6% in Q1 with plants 91% full, and net debt is about ₹1,700cr, 0.4 times operating profit. But the margin fell to 12%, CRISIL expects return on capital below 10% in FY27 as ₹3,500cr of capex goes in, and the CFO left on 6 October with no successor named, while the managing director's pay nearly doubled to ₹78.4cr. The price needs about {need:Apollo Tyres|8}% a year against my ~10%, even allowing for the one-off tax gain in trailing profit.",
            watch: 'Indian margin back towards 14% in H2 FY27 as price rises catch up; Europe’s margin once Dutch output has moved; who replaces the CFO, and whether Andhra Pradesh stays on its ₹5,810cr budget.',
        },
        {
            company: 'CEAT', rank: 2, stance: 'PRICED', segment: CARS,
            what: "An RPG Group maker of two-wheeler, car, truck and farm tyres, with about a quarter of India's electric-vehicle fitments and the Camso tracks business bought from Michelin.",
            view: "**The best mix and the best cash converter, priced for a recovery.** Revenue grew 22% in Q1 and it converted 93% of five years' operating profit into cash, but Q1 profit fell to ₹4cr on the rubber shock, a ₹48cr Sri Lankan-rupee loss and Camso's start-up losses. Debt has risen to ₹3,243cr and sits near CARE's leverage trigger. The price needs about {need:CEAT|14}% a year against my ~12%.",
            watch: 'Camso’s operating profit turning positive after September; standalone margin back above 12%; CARE’s leverage measure staying below 2.5 times.',
        },
        {
            company: 'JK Tyre & Indust', rank: 3, stance: 'CYCLICAL', segment: TRUCK,
            what: "A truck-and-bus radial leader with car, farm and two-wheeler tyres, nine Indian plants including the merged Cavendish plants, and JK Tornel in Mexico.",
            view: "**Full plants, heavy debt, slow payback.** Indian volumes grew about 25% and plants run at 95%, but the Q1 margin fell to 6.5%, Mexico's sales all but stopped, and net debt of ₹4,945cr is heading towards 3.0–3.5 times operating profit as it builds ₹6,110cr of capacity. Promoter pay of about ₹83cr is high for a company of this size. The price needs about {need:JK Tyre & Indust|9–10}% a year against my ~6%. **28 Oct 2026:** the price fits on trailing profit, but Q2 operating profit fell 36% and net profit 71% at a 7% margin, and natural rubber hit a record ₹290 a kilo on 22 October, so the margin recovery I am waiting for has not started; it stays wait. **4 Nov 2026:** stays wait after the Q2 call. Indian volume rose 22% and Mexico recovered (₹479cr of revenue, ₹23cr of operating profit), but raw materials rose another 9% on top of Q1's 22%, the margin was only 7.1% (company basis), and management expects a further 4–5% cost rise in Q3, matched only by 4–5% more price rises. Net debt jumped ₹751cr in the quarter to ₹5,696cr, already more than the ₹500–700cr rise guided for the whole year, which is about 3.3 times trailing operating profit against CARE's 3.5-times trigger.",
            watch: 'Margin climbing back towards 11–13% once raw materials stop rising (7.1% in Q2); net debt staying inside CARE’s 3.5-times trigger (about 3.3 times at September); Mexico holding its Q2 recovery.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Truck-tyre led.** **Apollo Tyres: own.** The largest, cheapest and least indebted, with Europe being fixed; size it for a weak FY27 and watch the CFO succession. **JK Tyre: wait.** Full plants and accurate forecasts, but the most debt, a slow-paying expansion and a Mexican problem.",
            "**Two-wheeler and car led.** **CEAT: follow.** The best mix and cash converter, priced for a recovery that depends on Camso; buy it on a bad quarter once Camso earns money.",
            "**What would change my view.** For the better: rubber falling after the monsoon with prices held, which has always produced the industry's best margins. For the worse: rubber staying above ₹250 a kilo, a Supreme Court loss on the cartel penalties, or demand slowing just as the FY28–FY30 capacity arrives.",
            "**What to watch next quarter.** Rubber prices and each company's H2 margin against its promise; Apollo's new CFO and European margin; CEAT's Camso profit and leverage; JK's debt and Mexico.",
        ],
        bottomLine:
            "Tyres are a rubber cycle with a brand on top, and this cycle comes with a capacity wave. Own Apollo Tyres for its price and balance sheet, follow CEAT for its quality, and wait on JK Tyre until its margins, debt and Mexico improve.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/APOLLOTYRE/consolidated/' },
        { label: 'Wholesale price index, natural rubber — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Tyre makers’ operating margins to moderate in FY27: CRISIL — Autocar Professional (Aug 2026)', url: 'https://www.autocarpro.in/news/tyre-makers-operating-margins-to-moderate-in-fy27-crisil-134248' },
        { label: 'Tyre makers’ margins to fall to 12% as raw material costs outpace price hikes; ₹18,000cr of capex over two years: CRISIL — Upstox (Aug 2026)', url: 'https://upstox.com/news/business-news/latest-updates/tyre-makers-margins-to-fall-to-12-as-raw-material-costs-outpace-price-hikes-crisil/article-199158/' },
        { label: 'Indian tyre industry: sharp spike in crude prices to exert pressure on margins in FY2027 — ICRA (Mar 2026)', url: 'https://www.icra.in/Rating/DownloadResearchSummaryReport?id=6873' },
        { label: 'India’s tyre industry braces for margin pain despite demand hope — The Core (Jul 2026)', url: 'https://www.thecore.in/business/indias-tyre-industry-braces-for-margin-pain-despite-demand-hope-866529' },
        { label: 'Tyre exports at record high of ₹27,312cr in FY26 (ATMA) — NewsDrum (Jun 2026)', url: 'https://www.newsdrum.in/business/tyre-exports-at-record-high-of-rs-27312-cr-in-fy26-despite-supply-chain-disruptions-11903589' },
        { label: 'Commission imposes anti-dumping duties on passenger car and light lorry tyres from China — European Commission (Jul 2026)', url: 'https://policy.trade.ec.europa.eu/news/commission-imposes-anti-dumping-duties-passenger-car-and-light-lorry-tyres-china-2026-07-09_en' },
        { label: 'Natural rubber production, consumption and imports — Rubber Board monthly statistics', url: 'https://rubberboard.gov.in/rbfilereader?fileid=1166' },
        { label: '70% of truck tyres in India are retreaded at least once: ICRA — Tyre Trends (Jan 2025)', url: 'https://www.tyre-trends.com/spotlight/70-percent-truck-tyres-in-india-are-retreaded-once-icra' },
        { label: 'Apollo Tyres rating rationale — CRISIL Ratings (Aug 2026)', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ApolloTyresLimited_August 14_ 2026_RR_399633.html' },
        { label: 'Apollo Tyres Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=be9bd8bd-d996-4900-8f36-e63e737e2b96.pdf' },
        { label: 'Apollo Tyres Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f781879d-be0d-4401-bacb-cb8e307d3f84.pdf' },
        { label: 'Apollo Tyres boosting PCR and TBR capacities in Andhra Pradesh — Tyrepress (Feb 2026)', url: 'https://www.tyrepress.com/2026/02/apollo-tyres-boosting-pcr-tbr-capacities/' },
        { label: 'CEAT rating rationale — CARE Ratings (Jan 2026)', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202601120149_CEAT_Limited.pdf' },
        { label: 'CEAT Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=71d4ae8e-3441-416f-8842-ad4d3b97f26e.pdf' },
        { label: 'CEAT Integrated Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/0f1af1bc-e27b-4adb-aa5d-2560edd43ba6.pdf' },
        { label: 'CEAT Q1 FY27 earnings call transcript — CEAT', url: 'https://www.ceat.com/content/dam/ceat/ceat-revemp/financial-performance/call-transcripts/2026-07-17-ceat-q1fy27-earnings-call-transcript-vff.pdf' },
        { label: 'JK Tyre & Industries rating rationale — CARE Ratings (Aug 2026)', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608120827_JK_Tyre_and_Industries_Limited.pdf' },
        { label: 'JK Tyre Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e3ff3cc9-6d43-4649-9cfe-269f3344cf25.pdf' },
        { label: 'JK Tyre Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/47bfb162-4a29-4014-b7d7-5b012b9a431b.pdf' },
    ],
};
