import { SectorOverview } from './types';
import { utilitiesBusinesses } from './utilities-businesses';
import { utilitiesValuationInputs } from './card-data/utilities';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const WATERTECH = 'Water technology — design, equipment and chemicals';
const CIVIC = 'Civic contractors and operators — state and city clients';

export const utilities: SectorOverview = {
    sector: 'Utilities',
    title: 'Utilities',
    format: 'ranked',
    businesses: utilitiesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: utilitiesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Va Tech Wabag': 18,
            'ION Exchage': 15,
            'Enviro Infra Engine.': 18,
            'EMS Limited': 5,
            'Antony Waste Hand': 10,
        },
    },
    standfirst:
        "Five companies that clean water and collect waste, mostly for governments. Wabag and Ion Exchange design water-treatment plants and sell the technology, equipment and chemicals behind them. Enviro Infra and EMS build sewage and water plants for state governments. Antony Waste collects and processes city rubbish under long municipal contracts. Their order books are large; what separates them is whether state clients pay on time and whether they turn profit into cash. Every chart uses filed results and five years of history.",
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
            note: 'Ion Exchange’s margin collapsed to 2–5% on loss-making old contracts; Antony’s fell to 14% on labour-code costs and one-off charges; a landslide in July has since shut its Pune waste-to-energy plant until October.',
            values: {
                'Va Tech Wabag': [13, 11, 13, 11, 9],
                'ION Exchage': [11, 9, 8, 2, 5],
                'Enviro Infra Engine.': [27, 29, 27, 19, 21],
                'EMS Limited': [23, 21, 16, 15, 17],
                'Antony Waste Hand': [22, 20, 16, 20, 14],
            },
            cellNotes: {
                'Va Tech Wabag': 'The company reports about 13% EBITDA for Q1 FY27; the filed figure excludes other income.',
                'Enviro Infra Engine.': 'Management now guides 19–20%, lower than before, as lower-margin renewables and battery-storage work grows.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'EMS’s revenue fell for four quarters as work stalled in West Bengal and Uttarakhand and state payments slowed.',
            values: {
                'Va Tech Wabag': [17, 19, 18, 22, 21],
                'ION Exchage': [3, 14, 6, 3, 20],
                'Enviro Infra Engine.': [18, 7, 1, 9, 49],
                'EMS Limited': [16, -26, -18, -56, -34],
                'Antony Waste Hand': [9, 16, 8, 18, 6],
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
            note: 'Wabag is the only one whose return has risen; the others have fallen as working capital grew or old contracts lost money.',
            values: {
                'Va Tech Wabag': [13, 20, 20, 20, 21],
                'ION Exchage': [36, 34, 27, 22, 14],
                'Enviro Infra Engine.': [64, 59, 47, 32, 20],
                'EMS Limited': [33, 33, 29, 27, 13],
                'Antony Waste Hand': [20, 15, 14, 12, 11],
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
            note: 'Read with care for contractors: this formula leaves out unbilled work, which is large at Enviro Infra (about 195 days by the company’s account at Q4). Wabag reports 108 days of net working capital.',
            values: {
                'Va Tech Wabag': [162, 186, 254, 223, 234],
                'ION Exchage': [-14, 31, 31, 46, 44],
                'Enviro Infra Engine.': [-46, -117, -62, -13, -88],
                'EMS Limited': [160, 84, 112, 160, 333],
                'Antony Waste Hand': [100, 92, 106, 104, 112],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'The core problem in this sector. Only Antony (77%) converts profit to cash as a healthy business should; Enviro Infra and EMS have had negative operating cash over five years.',
            values: {
                'Va Tech Wabag': [5, 27, 37, 84, 43, 44],
                'ION Exchage': [42, 24, 47, 11, -13, 23],
                'Enviro Infra Engine.': [84, 123, -61, -22, -23, -10],
                'EMS Limited': [20, 3, -57, 14, -10, -8],
                'Antony Waste Hand': [71, 61, 81, 96, 69, 77],
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
            note: 'Wabag is the only company here with positive free cash every year; it spends almost nothing on plant.',
            values: {
                'Va Tech Wabag': [0.2, 2.7, 4.3, 10.6, 5.1, 4.7],
                'ION Exchage': [2.6, 0.2, 0.4, -10.5, -9.7, -4.5],
                'Enviro Infra Engine.': [17.0, 26.6, -18.5, -9.9, -21.4, -10.2],
                'EMS Limited': [2.5, -0.9, -18.8, 3.1, -12.0, -6.0],
                'Antony Waste Hand': [-0.6, -20.8, -1.5, -1.3, 7.9, -2.8],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Wabag and Enviro Infra.',
            note: 'Below zero means more cash than debt. Wabag has held net cash for 14 quarters (its own count); Antony carries debt for its trucks and plants.',
            values: {
                'Va Tech Wabag': [-0.1, -0.3, -0.8, -1.5, -1.9],
                'ION Exchage': [-2.2, -1.9, -1.6, -0.5, 0.8],
                'Enviro Infra Engine.': [-0.2, -0.3, 0.5, -1.2, 0.1],
                'EMS Limited': [-0.8, -0.5, -0.2, -0.3, 0.7],
                'Antony Waste Hand': [0.6, 1.9, 2.1, 1.9, 1.6],
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
            note: 'Antony is the capital-heavy one (trucks and processing plants). Ion Exchange is building resin capacity; Wabag owns almost nothing.',
            values: {
                'Va Tech Wabag': [0.2, 0.2, 0.4, 0.1, 0.1, 0.2],
                'ION Exchage': [3.2, 3.0, 5.1, 11.7, 8.7, 7.0],
                'Enviro Infra Engine.': [1.8, 3.3, 4.5, 4.4, 15.9, 7.9],
                'EMS Limited': [3.9, 1.7, 4.2, 0.6, 10.0, 4.0],
                'Antony Waste Hand': [16.8, 31.4, 17.7, 21.4, 5.7, 18.1],
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
            note: 'Wabag’s very high figure reflects its asset-light model: it designs and manages, and subcontracts construction.',
            values: {
                'Va Tech Wabag': [37.2, 39.5, 39.7, 49.2, 59.8],
                'ION Exchage': [8.2, 9.3, 6.4, 7.0, 3.9],
                'Enviro Infra Engine.': [22.4, 18.8, 15.5, 15.2, 4.5],
                'EMS Limited': [7.1, 10.0, 8.4, 10.1, 5.9],
                'Antony Waste Hand': [2.7, 2.8, 1.3, 1.3, 1.4],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Order book at the end of Q1 FY27 (company) ÷ sales over the last four quarters (Screener).',
            note: 'Large for all the contractors. Antony works under long concessions rather than a conventional order book.',
            values: {
                'Va Tech Wabag': [4.7],
                'ION Exchage': [0.8],
                'Enviro Infra Engine.': [5.3],
                'EMS Limited': [3.6],
                'Antony Waste Hand': [null],
            },
            cellNotes: {
                'Va Tech Wabag': '₹19,400cr, a record, after removing ₹600cr of inactive framework orders; about a third is long-term operation and maintenance.',
                'ION Exchage': '₹2,473cr across its engineering businesses.',
                'Enviro Infra Engine.': '₹6,721cr, including renewables and operation and maintenance.',
                'EMS Limited': '₹2,329cr.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'tech', label: 'Technology and references', description: 'Proven designs and completed plants that clients require before awarding work.' },
            { key: 'annuity', label: 'Recurring income', description: 'Operation and maintenance, chemicals, or long concessions.' },
            { key: 'client', label: 'Client quality', description: 'Whether clients are funded and pay on time.' },
            { key: 'book', label: 'Order book', description: 'Years of work already won.' },
            { key: 'cash', label: 'Balance sheet and cash', description: 'Debt and whether profit becomes cash.' },
        ],
        rows: [
            { company: 'Va Tech Wabag', trend: 'widening', trendNote: 'Entered Kuwait and the UAE; record ₹19,400cr order book; net cash.',
                grades: { tech: { grade: 'A', note: 'Large desalination and wastewater references worldwide' }, annuity: { grade: 'B', note: 'Operation and maintenance about a third of the book' }, client: { grade: 'A', note: 'Many projects backed by multilateral lenders' }, book: { grade: 'A', note: 'About 4.7 years of sales' }, cash: { grade: 'B', note: 'Net cash, but only 44% of profit arrives as cash' } } },
            { company: 'ION Exchage', trend: 'narrowing', trendNote: 'Old contracts losing money; resin plant costs ahead of sales; no guidance.',
                grades: { tech: { grade: 'A', note: 'Resins, membranes and five decades of know-how' }, annuity: { grade: 'A', note: 'Chemicals, service and consumer products' }, client: { grade: 'B', note: 'Industry plus some state projects' }, book: { grade: 'C', note: 'About 0.8 years of sales' }, cash: { grade: 'C', note: 'Free cash negative for two years' } } },
            { company: 'Enviro Infra Engine.', trend: 'stable', trendNote: 'Kept its ₹2,000cr revenue target but cut its margin guide; working capital still bloated.',
                grades: { tech: { grade: 'B', note: 'Sewage-treatment references across states' }, annuity: { grade: 'B', note: 'Operation and maintenance and hybrid annuity projects' }, client: { grade: 'C', note: 'State and municipal bodies' }, book: { grade: 'A', note: 'About 5.3 years of sales' }, cash: { grade: 'D', note: 'Negative operating cash for three years' } } },
            { company: 'EMS Limited', trend: 'narrowing', trendNote: 'Revenue guidance cut to ₹900–950cr; work stalled in two states.',
                grades: { tech: { grade: 'C', note: 'Standard sewer and water works' }, annuity: { grade: 'C', note: 'Some operation and maintenance' }, client: { grade: 'D', note: 'State bodies in UP, Uttarakhand, West Bengal' }, book: { grade: 'B', note: 'About 3.6 years of sales' }, cash: { grade: 'D', note: 'Negative operating cash over five years' } } },
            { company: 'Antony Waste Hand', trend: 'stable', trendNote: 'Pune waste-to-energy plant shut by a landslide until October; construction-waste plant at full capacity.',
                grades: { tech: { grade: 'B', note: 'Qualifies for large city tenders' }, annuity: { grade: 'A', note: 'Long municipal concessions' }, client: { grade: 'B', note: 'Large cities such as Mumbai, Pune, Noida' }, book: { grade: 'B', note: 'Multi-year concessions' }, cash: { grade: 'B', note: '77% cash conversion; debt for trucks and plants' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Va Tech Wabag is the one to own.** It designs and builds large desalination and wastewater plants in India, the Middle East and Africa, subcontracting much of the construction, and runs many of them afterwards. It has a record ₹19,400cr order book (about 4.7 years of sales), has held net cash for 14 quarters, guides 15–20% revenue growth at 13–15% margins, and has just entered Kuwait and the UAE. The price asks for about what I expect. Its weak spot is cash: it has turned only 44% of five years' profit into cash.",
                "**Follow Antony Waste.** It collects and processes city rubbish under long contracts and is the only company here that turns most of its profit into cash (77%). Its margin fell to 14% in Q1 on higher labour costs and one-off charges, and a landslide in July shut its Pune waste-to-energy plant until October, which is why the price is low.",
                "**Wait on Ion Exchange and Enviro Infra; pass on EMS.** Ion Exchange has excellent technology and chemicals but old contracts are losing money and it gives no guidance. Enviro Infra has a huge order book and a cheap price, but has had negative operating cash for three years. EMS has cut its revenue guidance after four quarters of falling revenue.",
                "**Two things to hold onto before reading the rest.** First, **order books are the easy part**: government water and sewage spending is large and every contractor here has years of work booked. Second, **state clients decide the cash**: late payments and stalled work permits, not demand, are why most of these companies have turned little of their profit into cash.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed consolidated results; order books are from the companies. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Water and waste are public services, so the customer is usually a government, and that shapes everything.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**Technology and design** (Wabag, Ion Exchange) → **construction** of treatment plants and pipe networks (Enviro Infra, EMS, and contractors working for Wabag) → **operation and maintenance** for 5–20 years (all, especially Wabag) → **chemicals and parts** used every day (Ion Exchange's resins and membranes). Waste follows a similar chain: **collection and transport** → **processing** into energy, fuel or recycled material (Antony). **The profit sits in technology and long operating contracts**; construction for state clients earns decent margins on paper but ties up cash.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India's urban water, sewage and river-cleaning schemes (AMRUT, Namami Gange, Jal Jeevan Mission), desalination in the Gulf and Chennai, industrial water for chip, solar and hydrogen plants, and city waste contracts as rules on processing tighten.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The cycle is state budgets and payments.** Elections, monsoons and funding delays stall work (EMS in West Bengal and Uttarakhand). Payments from state bodies are slow, which is why working capital balloons. Projects funded by multilateral lenders, as many of Wabag's are, pay more reliably.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Wabag** depends on large desalination and wastewater awards and on reliable funders; **Ion Exchange** on finishing its loss-making old contracts and filling its new resin plant; **Enviro Infra** on collecting from state clients; **EMS** on work restarting in two states; **Antony** on its Pune plant reopening and cities paying cost increases. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Water technology', 'Wabag, Ion Exchange', '2–13%', '14–21%', '**23–44%**'],
                        ['Civic contractors and operators', 'Enviro Infra, EMS, Antony', '14–29%', '11–20%', '**−10% to 77%**'],
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
                    label: 'Lasting: technology and references',
                    text: "Large desalination and industrial water plants go only to firms that have built similar plants. **Wabag** has those references in many countries; **Ion Exchange** makes its own resins and membranes, with five decades of know-how.",
                },
                {
                    label: 'Lasting: long operating contracts',
                    text: "**Antony**'s city waste concessions and **Wabag**'s operation contracts run for years with inflation-linked fees. **Ion Exchange** sells chemicals that are used up and reordered.",
                },
                {
                    label: 'Wearing: state construction work',
                    text: "**Enviro Infra** and **EMS** win work by bidding lowest, and their clients pay slowly. Enviro Infra is moving into renewables and battery storage, which earn less.",
                },
                {
                    label: 'Barely a moat: execution in difficult states',
                    text: "**EMS**'s work in West Bengal and Uttarakhand stalled for months; it could not cut fixed costs while it waited.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Veolia**, **SUEZ** and **Acciona** in desalination and water technology; **Thermax** in industrial water; **L&T** and **NCC** in large water projects; **Re Sustainability** in waste management.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Look past one-off losses to what each business earns in a normal year.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: Wabag and Antony',
                    text: "**Wabag** guides 13–15% and has delivered it; its filed margin sits a little lower because it excludes other income. **Antony** earned about 20% before this quarter and expects to recover in FY28.",
                },
                {
                    label: 'Cyclical: mix and new businesses',
                    text: "**Enviro Infra**'s margin fell from 27–29% to about 20% as lower-margin renewables grew; management now guides 19–20%. **EMS** guides about 25% but has earned 15–17% while its sites stalled.",
                },
                {
                    label: 'Not structural: old contracts and accidents',
                    text: "**Ion Exchange**'s treatment-solutions business lost ₹17cr at the operating level in Q1 on old contracts, including a Jal Jeevan Mission project in Uttar Pradesh, and its new resin plant carries costs ahead of sales. **Antony** took one-off closure costs and higher labour costs in Q1; the Pune landslide, in July, will weigh on Q2.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Enviro Infra**'s unbilled revenue reached about 195 days at Q4 and did not improve in Q1; management now hopes for normal cash flow from September. **EMS**'s cycle stretched to 333 days on Screener's figures.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Ion Exchange** has had negative free cash for two years as it builds resin capacity and funds old projects.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Wabag** reports 108 days of net working capital and has kept net cash for 14 quarters. **Antony** converts most profit to cash.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Contractors are paid on milestones and wait for state releases; operators are paid monthly. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: desalination and the Gulf',
                    text: "**Wabag** won a 60 MIGD (million imperial gallons a day) seawater desalination plant in Kuwait and a sewage plant in Ajman, UAE, its first in each country, and is building the large Perur desalination plant for Chennai.",
                },
                {
                    label: 'Growth driver: Indian sewage and water schemes',
                    text: "**Enviro Infra** targets ₹2,000cr of revenue this year and ₹2,500cr of new orders, including hybrid annuity projects in Varanasi (paid partly upfront and partly over 15 years). **EMS** won ₹317cr of orders in Q1 and targets ₹900–950cr of revenue.",
                },
                {
                    label: 'Growth driver: industrial and new water',
                    text: "**Ion Exchange** is expanding resin capacity several times over and targets water for chip plants, green hydrogen and forever-chemical (PFAS) removal. **Enviro Infra** is building battery-storage and wind projects.",
                },
                {
                    label: 'Growth driver: waste processing',
                    text: "**Antony** is growing processing (construction-waste recycling at full capacity) and won a ₹243cr sweeping contract in Greater Noida.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Wabag** grew 21% against its 15–20% guide and entered two new countries.",
                },
                {
                    label: 'Cautious',
                    text: "**Ion Exchange** gives no numeric guidance. **Antony** pushed its margin recovery to FY28.",
                },
                {
                    label: 'Missed',
                    text: "**EMS** cut its revenue target from about ₹1,000cr to ₹900–950cr. **Enviro Infra** lowered its margin guide and missed its promise to normalise working capital by now.",
                },
                {
                    label: 'Mixed',
                    text: "**Enviro Infra** grew 49% in Q1 and kept its revenue target, but profit is not yet turning into cash.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Wabag and Enviro Infra to compound earnings at about 18%, Ion Exchange at about 15% once old contracts finish, Antony at about 10%, and EMS barely to grow.** For all but Wabag and Antony, the question is whether cash follows.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Va Tech Wabag', 'Desalination; Gulf entry; operation contracts', '12% / **18%** / 22%'],
                        ['Enviro Infra Engine.', 'Sewage schemes; renewables; hybrid annuity', '8% / **18%** / 25%'],
                        ['ION Exchage', 'Old contracts ending; resins; industrial water', '5% / **15%** / 25%'],
                        ['Antony Waste Hand', 'Pune plant back; processing; new cities', '5% / **10%** / 15%'],
                        ['EMS Limited', 'Stalled sites restarting', '−5% / **5%** / 15%'],
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
                    label: 'State payments',
                    text: "The largest risk for **Enviro Infra**, **EMS** and **Ion Exchange**'s state projects. Management at Enviro Infra would not guarantee when cash flow will normalise.",
                },
                {
                    label: 'Legacy contracts',
                    text: "**Ion Exchange** has not given a date for finishing its loss-making Uttar Pradesh project.",
                },
                {
                    label: 'Operating accidents and labour costs',
                    text: "**Antony**'s Pune plant was shut by a landslide and new labour codes raised costs that cities must agree to pass through.",
                },
                {
                    label: 'The Middle East',
                    text: "**Wabag** is expanding in the Gulf; management says water projects are essential infrastructure and have not been affected, but conflict in the region is a risk to watch.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 18x, 13% at 19x, 18% at 30x, 19% at 32x and 26% at 57x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Wabag** holds net cash, so it is cheaper than its P/E suggests. **Antony** carries debt for its trucks and plants, but its EV/EBITDA is still the lowest here.",
                },
                {
                    label: 'Reasonable',
                    text: "**Wabag**, **Enviro Infra** and **Antony**: prices that ask for about the growth I expect. For Enviro Infra, cash is the reason to wait; for Antony, the Pune plant.",
                },
                {
                    label: 'Stretched',
                    text: "**Ion Exchange** and **EMS**: each needs far more growth than it is delivering.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Va Tech Wabag', rank: 1, stance: 'COMPOUNDER', segment: WATERTECH,
            what: "Designs, builds and runs water and wastewater treatment and desalination plants for cities and industry in India, the Middle East, Africa and Europe, subcontracting much of the construction.",
            view: "**The best position in water, at a fair price.** A record ₹19,400cr order book, net cash for 14 quarters, 21% growth in Q1 and returns of about 20%. But only 44% of five years' profit arrived as cash. The price asks for about my ~18% estimate.",
            watch: 'Kuwait and Perur execution; cash conversion; operation and maintenance share rising toward 20%.',
        },
        {
            company: 'Antony Waste Hand', rank: 2, stance: 'TURNAROUND', segment: CIVIC,
            what: "Collects, transports and processes city waste under long municipal contracts in Mumbai, Pune, Noida and elsewhere, including a waste-to-energy plant in Pune.",
            view: "**The best cash record here, in a bad quarter.** It converts 77% of profit to cash and holds long concessions, but margins fell to 14% on labour and one-off costs, and a July landslide shut its Pune power plant until October. The price asks for about my ~10% estimate.",
            watch: 'The Pune plant restarting in October; cities passing on labour costs; margin back toward 20%.',
        },
        {
            company: 'Enviro Infra Engine.', rank: 3, stance: 'SCALEUP', segment: CIVIC,
            what: "Builds and runs sewage and water-treatment plants for state governments, and now builds renewable-power and battery-storage projects.",
            view: "**Big order book, no cash yet.** A ₹6,721cr order book and a ₹2,000cr revenue target, but margins are guided down to 19–20% and operating cash has been negative for three years. The price asks for about my ~18% estimate.",
            watch: 'Working capital normalising from September; collections from states; renewables margins.',
        },
        {
            company: 'ION Exchage', rank: 4, stance: 'TURNAROUND', segment: WATERTECH,
            what: "Ion Exchange: water-treatment plants, standard water equipment, service contracts, ion-exchange resins and chemicals, and Zero B home water purifiers.",
            view: "**Good businesses dragged by old contracts.** Its products and chemicals are sound, but its treatment-solutions business lost ₹17cr in Q1 on old projects, its resin plant is ramping, and margins fell to 2–5%. The price needs far more than my ~15% estimate.",
            watch: 'The Uttar Pradesh project finishing; resin plant utilisation; margin recovery.',
        },
        {
            company: 'EMS Limited', rank: 5, stance: 'TURNAROUND', segment: CIVIC,
            what: "Builds sewer, water-supply and sewage-treatment projects for state governments, mainly in Uttar Pradesh, Uttarakhand and West Bengal.",
            view: "**Stalled work and slow payment.** Revenue has fallen for four quarters, guidance was cut to ₹900–950cr, and operating cash has been negative over five years. The price needs far more than my ~5% estimate.",
            watch: 'West Bengal work restarting by Q3; collections; second-half execution.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Water technology.** **Va Tech Wabag: own.** The best franchise, net cash and steady delivery. **Ion Exchange (ION Exchage): wait** for old contracts to finish.",
            "**Civic contractors and operators.** **Antony Waste: follow.** Long contracts and real cash, in a bad quarter. **Enviro Infra: wait** until cash follows its growth. **EMS Limited: pass.**",
            "**What would change my view.** For the better: state payments speeding up, which would release cash at Enviro Infra and EMS. For the worse: Wabag's cash conversion falling further as it grows.",
            "**What to watch next quarter.** Wabag's Kuwait start; Antony's Pune plant; Enviro Infra's working capital; Ion Exchange's old contracts; EMS's West Bengal work.",
        ],
        bottomLine:
            "Order books are full across the sector; cash is not. Own Va Tech Wabag, follow Antony Waste, wait on Enviro Infra and ION Exchage, and pass on EMS Limited.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/WABAG/consolidated/' },
        { label: 'Wholesale price index, steel pipes and diesel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
