import { SectorOverview } from './types';
import { travelServicesBusinesses } from './travel-services-businesses';
import { travelValuationInputs } from './card-data/travel';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const GOVT = 'Government services — visas and citizen services';
const ONLINE = 'Online travel agents — a small cut of every booking';
const FULL = 'Travel, forex and resorts — a mix of businesses';

export const travelServices: SectorOverview = {
    sector: 'Travel Services',
    title: 'Travel Services',
    format: 'ranked',
    businesses: travelServicesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: travelValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'BLS International': 15,
            'Le Travenues Techno': 20,
            'Yatra Online': 15,
            'Thomas Cook India': 10,
        },
    },
    standfirst:
        "Four companies that earn money when people travel, in very different ways. BLS International runs visa and passport centres for governments and is paid a fee by every applicant. ixigo and Yatra are online travel agents that take a small cut of each ticket or hotel booking. Thomas Cook sells foreign exchange, holidays and resort stays. This year the Middle East conflict, airline capacity cuts and jet fuel that doubled in price hit the booking businesses hard; the visa business barely noticed. Every chart uses filed results and five years of history.",
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
            note: 'BLS earns 25–29%, driven by a visa business at about 40%. The booking businesses earn single digits on revenue, which for an online agent is already its commission, not the ticket price.',
            values: {
                'BLS International': [29, 29, 27, 25, 28],
                'Le Travenues Techno': [7, -2, 8, 6, 6],
                'Yatra Online': [11, 7, 9, 6, 7],
                'Thomas Cook India': [5, 5, 5, 4, 4],
            },
            cellNotes: {
                'Le Travenues Techno': 'Q2 FY26 negative on filed figures; the company reports a positive adjusted EBITDA for that quarter.',
                'Yatra Online': 'Q1 FY27: corporate-event (MICE) revenue lost to the Middle East conflict, and start-up costs for its Kanoo joint venture.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'The split is stark: BLS grew 25% in Q1; Thomas Cook and Yatra shrank as Middle East and long-haul travel collapsed.',
            values: {
                'BLS International': [44, 49, 43, 18, 25],
                'Le Travenues Techno': [74, 37, 32, 8, 13],
                'Yatra Online': [108, 48, 9, -14, -10],
                'Thomas Cook India': [14, 3, 4, -10, -13],
            },
            cellNotes: {
                'BLS International': 'Includes acquisitions, such as iDATA in visas and Atyati in banking services.',
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
            note: 'BLS has earned 22–33% for five years. The others have earned single digits or mid-teens since the pandemic.',
            values: {
                'BLS International': [22, 32, 31, 33, 30],
                'Le Travenues Techno': [-9, 8, 7, 13, 7],
                'Yatra Online': [-7, 14, 4, 5, 7],
                'Thomas Cook India': [-11, 5, 19, 19, 15],
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
            note: 'Yatra’s long cycle comes from credit given to corporate customers. Consumer-facing businesses collect before they pay suppliers.',
            values: {
                'BLS International': [10, 8, 9, 20, 21],
                'Le Travenues Techno': [8, 9, 15, 15, 14],
                'Yatra Online': [358, 276, 389, 251, 194],
                'Thomas Cook India': [45, 41, 32, 28, 29],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Above 100% is normal here: customers pay before the company pays airlines, hotels or governments. Blank where operating profit was negative or too small for the ratio to mean anything.',
            values: {
                'BLS International': [171, 117, 100, 128, 106, 116],
                'Le Travenues Techno': [null, 107, 113, 169, 316, 189],
                'Yatra Online': [null, null, null, -202, 95, null],
                'Thomas Cook India': [null, 365, 190, 150, 150, 202],
            },
            cellNotes: {
                'Yatra Online': 'Operating cash was negative every year from FY22 to FY25 as credit to corporate customers grew; FY26 was the first positive year (₹76cr).',
                'Thomas Cook India': 'Includes customer advances for holidays and forex float.',
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
            note: 'BLS keeps about a fifth of its sales as free cash, remarkable for a services business. Yatra has burned cash for most of five years.',
            values: {
                'BLS International': [12.1, 12.7, 17.1, 30.5, 25.6, 21.8],
                'Le Travenues Techno': [-9.5, 5.2, 5.5, 12.9, 14.3, 8.7],
                'Yatra Online': [-47.0, -44.3, -40.0, -15.0, 3.1, -18.5],
                'Thomas Cook India': [-10.6, 11.5, 9.9, 7.4, 6.2, 7.2],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash and treasury investments, ÷ operating profit.',
            note: 'Below zero means more cash than debt. BLS, ixigo and Thomas Cook all hold net cash; ixigo’s ratio is large because its operating profit is small.',
            values: {
                'BLS International': [-3.5, -2.5, -3.0, -0.9, -1.3],
                'Le Travenues Techno': [null, -4.5, -3.2, -5.0, -15.4],
                'Yatra Online': [null, 2.1, null, -0.5, 0.1],
                'Thomas Cook India': [null, -1.8, -2.1, -1.4, -2.0],
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
            note: 'All four are light on capital. BLS spends more because visa centres and the Aadhaar enrolment project need equipment.',
            values: {
                'BLS International': [9.6, 4.5, 3.8, 7.3, 4.6, 5.5],
                'Le Travenues Techno': [0.5, 1.0, 1.1, 0.4, 1.7, 1.1],
                'Yatra Online': [5.1, 4.1, 6.3, 3.7, 4.5, 4.5],
                'Thomas Cook India': [3.3, 1.3, 1.4, 1.4, 1.5, 1.5],
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
            note: 'BLS’s ratio fell in FY25 because acquired businesses brought intangible assets onto its books.',
            values: {
                'BLS International': [7.6, 6.5, 5.7, 1.6, 1.8],
                'Le Travenues Techno': [1.3, 1.7, 2.4, 3.2, 2.3],
                'Yatra Online': [1.8, 3.3, 3.4, 2.9, 3.6],
                'Thomas Cook India': [0.7, 2.0, 2.6, 2.9, 2.7],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'contract', label: 'Government or exclusive contracts', description: 'Multi-year mandates a rival cannot easily take away.' },
            { key: 'users', label: 'Users and brand', description: 'A large base of people who come back without being paid to.' },
            { key: 'switch', label: 'Switching costs', description: 'Systems built into a customer’s processes.' },
            { key: 'supplier', label: 'Power over suppliers', description: 'Whether airlines, hotels or governments can squeeze its cut.' },
            { key: 'shock', label: 'Resilience to shocks', description: 'How well it held up in this year’s conflict and airline cuts.' },
        ],
        rows: [
            { company: 'BLS International', trend: 'widening', trendNote: 'Revenue per visa application up 11% with flat volumes; new mandates in Europe.',
                grades: { contract: { grade: 'A', note: '3–5-year exclusive visa contracts in 66-plus countries' }, users: { grade: 'C', note: 'Applicants have no choice of provider' }, switch: { grade: 'A', note: 'Governments rarely change a biometric-data provider' }, supplier: { grade: 'B', note: 'Fee set in the tender' }, shock: { grade: 'A', note: 'Grew 25% in the conflict quarter' } } },
            { company: 'Le Travenues Techno', trend: 'stable', trendNote: 'Bus bookings up 39%; flights held back by airline cuts; hotels now being scaled.',
                grades: { contract: { grade: 'D', note: 'None' }, users: { grade: 'A', note: '63% share of online train bookings; strong in buses' }, switch: { grade: 'C', note: 'Travellers can switch apps easily' }, supplier: { grade: 'C', note: 'Railways and airlines set the rules' }, shock: { grade: 'B', note: 'Buses offset weak flights' } } },
            { company: 'Yatra Online', trend: 'narrowing', trendNote: 'Lost high-margin corporate events to the conflict; corporate-card launch delayed.',
                grades: { contract: { grade: 'B', note: 'Corporate travel contracts; 97% retention' }, users: { grade: 'C', note: 'Small consumer brand' }, switch: { grade: 'B', note: 'Expense software built into clients’ systems' }, supplier: { grade: 'C', note: 'Two airlines dominate' }, shock: { grade: 'D', note: 'Revenue −10% and profit wiped out' } } },
            { company: 'Thomas Cook India', trend: 'stable', trendNote: 'Forex and resorts had record quarters; Middle East units collapsed.',
                grades: { contract: { grade: 'C', note: 'Corporate travel and events' }, users: { grade: 'B', note: 'A known brand in forex and holidays' }, switch: { grade: 'C', note: 'Holidays are bought trip by trip' }, supplier: { grade: 'B', note: 'Owns its resorts (Sterling)' }, shock: { grade: 'C', note: 'Guidance withdrawn' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**BLS International is the one to own.** It runs visa and passport centres for governments in 66-plus countries on exclusive multi-year contracts, and every applicant pays it a fee. Its visa business earns about 40% margins, it has earned 22–33% on capital for five years, and it grew 25% in the quarter the Middle East conflict hurt everyone else. It holds about ₹1,600cr of net cash (its own figure) and targets 15–20% growth a year for five years. The price asks for less growth than it is delivering.",
                "**Wait on ixigo and Thomas Cook.** ixigo (Le Travenues Technology) dominates online train bookings and is winning in buses, but flights are stuck and its profit is small next to its price. Thomas Cook's forex and Sterling resorts businesses had record quarters, but its Middle East businesses collapsed and management has withdrawn its earnings guidance.",
                "**Pass on Yatra Online.** Its corporate travel business is sticky, but Q1 revenue fell 10%, profit was wiped out, and it has burned cash for most of five years.",
                "**Two things to hold onto before reading the rest.** First, **BLS is not really a travel company**: it is a government outsourcing business whose fee is set in a tender, so it does not depend on airfares or holiday demand the way the others do. Second, **online agents' revenue is already their commission**, so a 6% margin on that revenue is thin; the real test is whether they turn that into cash and returns.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. None of these companies publishes an order book in the usual sense. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Travel money passes through several hands. These four sit at different points and earn in different ways.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "A traveller needs permission (a visa), a way to pay abroad (foreign exchange), a ticket and a bed. **Governments** outsource visa processing to firms like BLS, which charge applicants a service fee. **Airlines, railways, bus operators and hotels** pay online agents (ixigo, Yatra) a small commission on each booking, and travellers pay convenience fees. **Thomas Cook** earns a spread on forex, a margin on holiday packages and room revenue at its own resorts. **The profit sits where the customer has no alternative**: the visa centre.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "More Indians travelling abroad and within India, more countries outsourcing visa services, and more trips booked online. ixigo's users are mostly in smaller towns upgrading from train to bus to plane. Corporate travel and events (MICE) drive Yatra and part of Thomas Cook.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**This year was a shock.** The Middle East conflict closed airspace and cut long-haul travel; Air India cut capacity by about 20% and IndiGo by about 10%; average ticket values on ixigo rose 22%, and jet fuel roughly doubled over two years (India's wholesale price index). Railway rules (Aadhaar checks for bookings) cut ixigo's train volumes 8%. BLS's visa volumes were flat, but it raised revenue per application 11%.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**BLS** depends on governments renewing its contracts and on India's Aadhaar and banking-services projects; **ixigo** on airline capacity, railway rules and budget travellers; **Yatra** on corporate travel budgets and events; **Thomas Cook** on outbound travel, forex demand and its resorts. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Government visa and citizen services', 'BLS', '25–29%', '30%', '**116%**'],
                        ['Online travel agents', 'ixigo, Yatra', '−2% to 11%', '7%', '**189% (ixigo); negative (Yatra)**'],
                        ['Travel, forex and resorts', 'Thomas Cook', '4–5%', '15%', '**202%**'],
                    ],
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
                    label: 'Lasting: exclusive government contracts',
                    text: "**BLS** handles sensitive biometric data for governments, which rarely switch providers mid-contract. Applicants cannot shop around. That is why it could raise revenue per application 11% while volumes were flat.",
                },
                {
                    label: 'Lasting but contested: a loyal user base',
                    text: "**ixigo** has 63% of online train bookings and its bus business (AbhiBus) grew 39%; about 90% of its hotel bookings come from existing users. But railways and airlines set the rules, and the train volumes fell 8% on new booking checks.",
                },
                {
                    label: 'Wearing: corporate events and long-haul holidays',
                    text: "**Yatra** keeps 97% of its corporate customers, but events and incentive trips were the first budgets cut this year. **Thomas Cook**'s long-haul holidays fell 28%, and its Middle East businesses (Desert Adventures, DEI) collapsed.",
                },
                {
                    label: 'Barely a moat: consumer flight booking',
                    text: "Selling flights to consumers is a discount war, with two airlines controlling most of India's capacity and setting commissions. Neither ixigo nor Yatra has pricing power here.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**VFS Global** is BLS's much larger visa rival. **MakeMyTrip**, **EaseMyTrip**, **Cleartrip** and **IRCTC** itself compete in online travel. **SOTC** (part of Thomas Cook), **Cox & Kings** and banks compete in holidays and forex.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? One business earns a lot; three earn thin commissions.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: the visa fee',
                    text: "**BLS**'s visa business earns about 40% and makes up most of its profit; its digital services business (banking correspondents and citizen services) earns about 8%. Management expects to hold the blended margin at about 28%.",
                },
                {
                    label: 'Cyclical: this year’s travel shock',
                    text: "**Yatra**'s margin fell with lost events and higher fixed costs; management pushed its 20%-plus adjusted margin target to late FY27. **Thomas Cook**'s travel margin halved as fixed costs in the Middle East could not be absorbed; its target is 4–5% in travel.",
                },
                {
                    label: 'Not structural: investment spending',
                    text: "**ixigo** chose to cut EBITDA (down 7% on the year) to fund hotels and AI; **Yatra** absorbed start-up costs for its Kanoo joint venture before any revenue. These should fade if the new businesses work.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Yatra** gives corporate customers long credit, which is why it burned cash from FY22 to FY25; its corporate-card plan to fix this is stuck in talks with banks.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**BLS**'s cycle rose from about 10 to 21 days as acquired banking-services businesses joined. It is still very short.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Yatra** turned operating cash positive in FY26 for the first time in five years. **ixigo** and **Thomas Cook** collect before they pay.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Consumer travel is paid up front; corporate travel is paid later. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: more governments outsourcing',
                    text: "**BLS** targets 15–20% growth a year for five years from new visa mandates (Belarus, Slovakia, Cyprus recently), a ₹2,500cr six-year Aadhaar enrolment contract peaking from Q4 FY27, citizenship-by-investment services and acquisitions such as Atyati. It holds enough cash to consider a buyback; management says acquisitions come first.",
                },
                {
                    label: 'Growth driver: budget travellers going online',
                    text: "**ixigo** is strongest with travellers from smaller towns and grows by moving them from trains to buses, flights and now hotels (it bought 54.66% of Revvstay, a hotel business).",
                },
                {
                    label: 'Growth driver: corporate and SME travel',
                    text: "**Yatra** won 53 new corporate customers in Q1, 30 through its small-business product TravelPro, and targets 30% adjusted EBITDA growth a year over two to three years. **Thomas Cook** is growing student forex and adding resorts at Sterling.",
                },
                {
                    label: 'Growth driver: short-haul and domestic trips',
                    text: "Thomas Cook's domestic holidays grew 29% and South-East Asia volumes doubled as long-haul fell. Pilgrimage travel is growing.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**BLS** grew 25% against its 15–20% target and completed the Atyati purchase. **ixigo** grew bus bookings 39%, well ahead of the industry. **Thomas Cook**'s Sterling resorts had their best quarter.",
                },
                {
                    label: 'Cautious',
                    text: "**Thomas Cook** declined to give any FY27 guidance. **ixigo** does not give numeric guidance.",
                },
                {
                    label: 'Missed',
                    text: "**Yatra**'s corporate-card launch and US holding-company restructuring are both delayed; Q1 revenue fell 10%. **Thomas Cook**'s photography business (DEI) recovered to only 30–35% of normal against a 50–60% hope, and some sites were closed.",
                },
                {
                    label: 'Mixed',
                    text: "**ixigo**'s flights grew only 4% in volume as airlines cut capacity; train bookings fell 8% on new railway rules.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect BLS to compound earnings at about 15%, ixigo at about 20% from a small base, Yatra at about 15% if corporate events recover, and Thomas Cook at about 10%.** The booking businesses should recover when airline capacity and the Middle East do; BLS does not need either.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['BLS International', 'New mandates; Aadhaar project; acquisitions', '10% / **15%** / 20%'],
                        ['Le Travenues Techno', 'Buses and hotels; flights recovering', '10% / **20%** / 30%'],
                        ['Yatra Online', 'Corporate and SME travel; events recovering', '5% / **15%** / 25%'],
                        ['Thomas Cook India', 'Forex and resorts; travel recovering', '5% / **10%** / 15%'],
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
                    label: 'War and airline capacity',
                    text: "The Middle East conflict and airline cuts hit **Yatra**, **Thomas Cook** and **ixigo**'s flights this year. None can say when it ends; Thomas Cook said it has no line of sight.",
                },
                {
                    label: 'Rules set by others',
                    text: "**ixigo** depends on railway booking rules and airline commissions; **BLS** on governments renewing contracts. BLS's biggest single risk is losing a major government client.",
                },
                {
                    label: 'Capital allocation',
                    text: "**BLS** holds about ₹1,600cr of net cash and generates about ₹1,000cr a year; investors are pushing for a buyback while management prefers acquisitions. **ixigo** is spending to scale hotels against MakeMyTrip and Oyo.",
                },
                {
                    label: 'Governance and structure',
                    text: "**Yatra**'s US holding-company restructuring remains unresolved and management was evasive about timing. **Thomas Cook** is controlled by Fairfax.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 13x, 14% at 22x, 24% at 50x and 30% at 80x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**BLS**, **ixigo** and **Thomas Cook** hold net cash, so they are cheaper than their P/Es suggest. **ixigo**'s EV/EBITDA is very high because its operating profit is small.",
                },
                {
                    label: 'Reasonable',
                    text: "**BLS**: a price that asks for less growth than it is delivering, for the best business here.",
                },
                {
                    label: 'Full',
                    text: "**Thomas Cook**: a little more than my estimate, with guidance withdrawn.",
                },
                {
                    label: 'Stretched',
                    text: "**ixigo** and **Yatra**: each needs far more growth than I expect from businesses earning single-digit returns on capital.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'BLS International', rank: 1, stance: 'COMPOUNDER', segment: GOVT,
            what: "Runs visa, passport and consular centres for governments in 66-plus countries, and banking-correspondent and citizen services in India, including a large Aadhaar enrolment contract.",
            view: "**The best business and the cheapest price.** Visa margins about 40%, 22–33% return on capital for five years, 25% growth in a bad quarter for travel, and about ₹1,600cr of net cash. The price asks for less than my ~15% estimate.",
            watch: 'The Aadhaar project reaching full revenue; new visa mandates; use of the cash.',
        },
        {
            company: 'Thomas Cook India', rank: 2, stance: 'TURNAROUND', segment: FULL,
            what: "Foreign exchange, corporate travel and events, holiday packages (Thomas Cook, SOTC), Sterling Holidays resorts and an overseas souvenir-photography business; controlled by Fairfax.",
            view: "**Good pieces, one bad year.** Forex and Sterling resorts had record quarters, but Middle East units collapsed and guidance was withdrawn. Net cash and cash that arrives ahead of profit. The price needs a little more than my ~10% estimate.",
            watch: 'Middle East units recovering; long-haul travel; Sterling’s new resorts.',
        },
        {
            company: 'Le Travenues Techno', rank: 3, stance: 'PRICED', segment: ONLINE,
            what: "ixigo: an online travel app for trains, buses (AbhiBus), flights and now hotels, strongest with travellers from smaller towns.",
            view: "**A strong niche, priced for more.** 63% of online train bookings and bus growth of 39%, with net cash. But flights are stuck, train volumes fell on new railway rules, and it is spending to scale hotels. The price needs far more than my ~20% estimate.",
            watch: 'Airline capacity returning; hotel losses; railway booking rules.',
        },
        {
            company: 'Yatra Online', rank: 4, stance: 'TURNAROUND', segment: ONLINE,
            what: "Corporate travel management, events, expense software and consumer bookings, with a joint venture with Kanoo Travel in the Middle East.",
            view: "**Sticky corporate customers, a bad year and a weak cash record.** 97% customer retention, but Q1 revenue fell 10%, profit was nearly zero, and operating cash was negative for four of five years. The price needs far more than my ~15% estimate.",
            watch: 'Corporate events recovering; the corporate-card launch; the US holding-company restructuring.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Government services.** **BLS International: own.** The best business, the best cash record and the lowest price.",
            "**Online travel agents.** **ixigo (Le Travenues Techno): wait** for flights to recover and for a lower price. **Yatra Online: pass** until corporate events and cash flow recover.",
            "**Travel, forex and resorts.** **Thomas Cook India: wait** for the Middle East businesses to stabilise and guidance to return.",
            "**What would change my view.** For the better: airline capacity and Middle East travel recovering (ixigo, Yatra, Thomas Cook). For the worse: BLS losing a major government contract, or spending its cash on low-return acquisitions.",
            "**What to watch next quarter.** BLS's Aadhaar revenue and cash use; ixigo's flight volumes; Yatra's events and corporate card; Thomas Cook's Middle East units.",
        ],
        bottomLine:
            "Own the government outsourcer (BLS International), which barely noticed this year's travel shock, and wait on the booking businesses (Le Travenues Techno, Thomas Cook India) until airlines and the Middle East recover; pass on Yatra Online.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/BLS/consolidated/' },
        { label: 'Wholesale price index, aviation turbine fuel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
