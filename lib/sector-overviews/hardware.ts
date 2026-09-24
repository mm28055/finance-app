import { SectorOverview } from './types';
import { hardwareBusinesses } from './hardware-businesses';
import { hardwareValuationInputs } from './card-data/hardware';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const TRADE = 'Selling other brands’ computers — refurbished or distributed';
const MAKE = 'Making and servicing equipment';

export const hardware: SectorOverview = {
    sector: 'Hardware',
    title: 'Hardware',
    format: 'ranked',
    businesses: hardwareBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: hardwareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'GNG Electronics': 22,
            'Rashi Peripheral': 12,
            'Control Print': 11,
            'TVS Electronics': null,
        },
    },
    standfirst:
        "Four small companies that sell computer and office hardware in very different ways. GNG refurbishes used business laptops and sells them with a warranty in India and abroad. Rashi distributes Dell, Intel, AMD, NVIDIA and about 80 other brands across India. Control Print makes the printers that stamp dates and batch codes on packs, and sells the ink. TVS Electronics sells point-of-sale machines and printers and services IT and solar equipment. This year a global memory-chip shortage has made new laptops much dearer, which has flattered the first two. The note draws on filed results, both recent earnings calls, the FY26 annual reports, rating reports and industry research.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): TVS Electronics standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'A distributor earns about 3% on sales; a refurbisher about 10–12%; a maker of printers and ink much more, when its subsidiaries are not losing money.',
            values: {
                'GNG Electronics': [10, 11, 11, 10, 12],
                'Rashi Peripheral': [3, 3, 3, 3, 3],
                'Control Print': [17, 23, 15, 19, 13],
                'TVS Electronics': [1, 4, 6, 6, -2],
            },
            cellNotes: {
                'Control Print': 'Consolidated margin is pulled down by losses at its Italian packaging-machine business, V-Shapes.',
                'TVS Electronics': 'No Q1 FY27 call was held; the Q1 figures come from its results presentation. Its latest call is for Q4 FY26.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Rashi grew 62% in Q1, but management says about half of that growth (30–35 points) was higher prices as chips ran short.',
            values: {
                'GNG Electronics': [22, 25, 40, 43, 32],
                'Rashi Peripheral': [-26, 12, 43, 51, 62],
                'Control Print': [14, 10, 15, 15, 4],
                'TVS Electronics': [-13, 22, 14, 2, 10],
            },
            cellNotes: {
                'Rashi Peripheral': 'Q1 FY26 fell against a quarter that included a one-off ₹2,000cr AI data-centre project (Yotta) in FY25. Without it, FY26 growth was about 31%, not the reported 15% (company).',
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
            note: 'GNG has earned about 20% every year; Control Print is drifting down as overseas losses grow; TVS Electronics has earned little since FY23.',
            values: {
                'GNG Electronics': [20, 22, 21, 20, 20],
                'Rashi Peripheral': [25, 16, 14, 14, 17],
                'Control Print': [19, 23, 24, 18, 16],
                'TVS Electronics': [22, 12, 1, -2, 6],
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
            note: 'Control Print holds long stocks of ink and spares. GNG’s FY26 figure is understated (hover for why): its stock rose from ₹490cr to ₹743cr in the year.',
            values: {
                'GNG Electronics': [110, 128, 122, 162, 40],
                'Rashi Peripheral': [48, 56, 57, 60, 60],
                'Control Print': [265, 255, 260, 241, 283],
                'TVS Electronics': [-9, 36, 30, 29, 59],
            },
            cellNotes: {
                'GNG Electronics': 'FY26’s 40 days looks wrong: it matches Screener’s debtor days alone, while stock rose from ₹490cr to ₹743cr. Screener’s working-capital days rose from 52 to 112. In June 2026 stock was about ₹700cr and net debt ₹406cr (company).',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'The warning in this sector: GNG and Rashi have turned their profits into stock and receivables as they grew, so over five years their operating cash is negative.',
            values: {
                'GNG Electronics': [-55, 2, 123, 21, -110, -23],
                'Rashi Peripheral': [-105, -45, -34, -98, 25, -44],
                'Control Print': [85, 72, 58, 62, 56, 65],
                'TVS Electronics': [96, -40, 140, 64, 30, 51],
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
            note: 'Only Control Print has produced steady free cash. The two traders have funded growth with borrowing.',
            values: {
                'GNG Electronics': [-3.5, 0.0, 6.4, 1.1, -12.6, -3.0],
                'Rashi Peripheral': [-3.5, -1.3, -1.0, -2.2, 0.7, -1.3],
                'Control Print': [15.2, 9.2, 2.2, 5.4, 5.0, 6.7],
                'TVS Electronics': [7.2, -6.7, -3.8, -0.4, 0.3, -0.8],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Control Print.',
            note: 'Below zero means more cash than debt. Control Print holds net cash; the others borrow to carry stock.',
            values: {
                'GNG Electronics': [2.5, 2.7, 3.3, 3.4, 1.6],
                'Rashi Peripheral': [2.8, 4.1, 1.9, 2.9, 2.0],
                'Control Print': [-0.9, -0.8, -0.7, -0.7, -0.7],
                'TVS Electronics': [-0.1, 0.1, 3.6, 3.4, 2.5],
            },
            cellNotes: {
                'GNG Electronics': 'FY26 uses Screener’s net debt of about ₹315cr. Management put March 2026 net debt at about ₹300cr on the Q4 call and about ₹399cr on the Q1 call; it was ₹406cr in June 2026.',
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
            note: 'The traders need almost no plant; their capital goes into stock. Control Print spends on printers placed with customers and on its plants.',
            values: {
                'GNG Electronics': [0.2, 0.1, 2.1, 0.7, 1.2, 1.0],
                'Rashi Peripheral': [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
                'Control Print': [4.3, 8.9, 11.7, 6.4, 5.4, 7.3],
                'TVS Electronics': [1.3, 4.4, 7.6, 2.1, 1.0, 3.2],
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
            note: 'Very high for the two traders because they own almost no plant; the ratio tells you nothing about their real capital, which is stock and receivables.',
            values: {
                'GNG Electronics': [74.1, 82.6, 27.8, 34.4, 25.6],
                'Rashi Peripheral': [133.0, 122.8, 156.3, 218.6, 197.8],
                'Control Print': [2.3, 2.5, 2.4, 2.7, 2.8],
                'TVS Electronics': [11.8, 10.4, 6.4, 6.8, 8.0],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'access', label: 'Access to supply', description: 'Relationships with brands or corporate sellers that give it stock others cannot get.' },
            { key: 'reach', label: 'Reach and service', description: 'Branches, partners and service network across India and abroad.' },
            { key: 'lock', label: 'Repeat revenue', description: 'Ink, spares and service contracts that follow a sale.' },
            { key: 'brand', label: 'Brand and trust', description: 'Warranties and a name customers rely on.' },
            { key: 'cash', label: 'Balance sheet', description: 'Whether it can carry stock and grow without strain.' },
        ],
        rows: [
            { company: 'GNG Electronics', trend: 'widening', trendNote: 'Raised FY27 revenue guidance to 30%; average prices up 12% as new laptops got dearer.',
                grades: { access: { grade: 'A', note: 'Buys retired corporate laptops in bulk worldwide' }, reach: { grade: 'B', note: 'US and Europe 47% of revenue, Middle East 12%' }, lock: { grade: 'C', note: 'One-off sales' }, brand: { grade: 'B', note: 'Up to 3-year warranty in India (Electronics Bazaar)' }, cash: { grade: 'C', note: 'Borrows to hold stock; net debt ₹406cr in Q1' } } },
            { company: 'Rashi Peripheral', trend: 'widening', trendNote: 'Bought 67% of VDA Infosolutions and formed a chip joint venture with Japan’s Restar.',
                grades: { access: { grade: 'A', note: 'Distributor for Dell, Intel, AMD, NVIDIA and about 80 brands' }, reach: { grade: 'A', note: 'Own network across 57 towns' }, lock: { grade: 'C', note: 'Mostly one-off sales' }, brand: { grade: 'C', note: 'Brands belong to its suppliers' }, cash: { grade: 'C', note: 'Operating cash negative in four of five years' } } },
            { company: 'Control Print', trend: 'narrowing', trendNote: 'Italian packaging machines not working well for customers; break-even pushed to H1 FY28.',
                grades: { access: { grade: 'B', note: 'Own printers and ink' }, reach: { grade: 'B', note: 'Service network across India' }, lock: { grade: 'A', note: 'Ink, spares and service follow each printer' }, brand: { grade: 'B', note: 'Competes with global coding-printer makers' }, cash: { grade: 'A', note: 'Net cash' } } },
            { company: 'TVS Electronics', trend: 'stable', trendNote: 'Dropped low-margin contracts; new electronics-assembly lines 30–40% used.',
                grades: { access: { grade: 'C', note: 'Imports kits and parts from China' }, reach: { grade: 'B', note: 'TVS name and service network' }, lock: { grade: 'B', note: 'IT and solar maintenance contracts' }, brand: { grade: 'B', note: 'Known brand in point-of-sale printers' }, cash: { grade: 'C', note: 'Debt up to fund stock' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No one to own outright; follow the two companies riding the chip shortage.** **GNG Electronics** buys retired business laptops in bulk from banks, leasing firms and large companies, refurbishes them and sells them under its Electronics Bazaar brand with warranties of up to three years; about 64% of its revenue is earned abroad. Revenue grew 32% in Q1 FY27 at a 12% operating margin, and management raised its FY27 revenue goal from 25% to 30%. **Rashi Peripheral**, a national distributor for about 80 global brands, grew 62% in Q1 and its price asks for about the growth I expect. Both are good operators having a very good year, and the year is the reason for caution.",
                "**But check the cash before anything else.** GNG's operating cash flow was **negative ₹215cr in FY26** as its stock rose from ₹490cr to ₹743cr, and net debt was back at ₹406cr in June 2026, a year after a share issue that raised ₹400cr. Rashi's operating cash was negative in four of the last five years; FY26 was the first positive one. GNG says it bought ahead because it expects component prices to stay high until at least January 2028. That is a sensible bet while prices rise, and a painful one if they fall.",
                "**Wait on Control Print; avoid TVS Electronics.** Control Print's Indian coding business is the best business on the page: about 86% of revenue is ink, spares and service for more than 23,000 installed printers, it earns about 60% gross margin and it holds net cash. But group profit has fallen from ₹54cr (FY24) to ₹39cr over the last four quarters because its Italian packaging unit keeps losing money (₹25.2cr in FY26), and break-even has slipped to H1 FY28. TVS Electronics called its margin gains ‘structural’ in May, then lost ₹6.6cr in the June quarter and held no call to explain why; with tax claims it has not provided for and a brand fee to the promoter family, it is one to avoid. Control Print's price asks for a little more than the 11% a year I expect, which is full rather than stretched.",
                "**Three things to hold onto before reading the rest.** First, **the traders' margins are thin by design**: Rashi keeps about 2 paise of profit from each rupee of sales, so a small fall in the value of its stock can wipe out a quarter. Second, **this year's growth is partly price**: Rashi says 30–35 points of its 62% growth came from higher prices, and GNG's units grew 18% against revenue of 32%. Third, **read the annual reports, not just the calls**: the overseas subsidiaries that earn most of GNG's profit are audited by a small Sharjah firm rather than the group auditor, Control Print's loss-making foreign units are not audited at all, and TVS Electronics carries unprovided tax claims equal to about 57% of its net worth.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (TVS Electronics standalone). None of these companies publishes an order book. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These four sell hardware, but only two make anything, and they sit in three different markets: personal computers (GNG and Rashi), factory coding printers (Control Print) and counter equipment for shops, banks and warehouses (TVS Electronics). **2026 is a year of dearer computers, not of many more of them.** India shipped a record 15.9 million PCs in 2025 (+10.2%) and 3.9 million in the June quarter of 2026 (+12.1%), but IDC, the market tracker, says the latest growth came from dealers stocking up ahead of memory-driven price rises. Worldwide, IDC expects PC shipments to fall 11.3% in 2026 while average prices rise about 17%.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Global brands (HP, Lenovo, Acer, Dell, Asus) → distributors such as Redington, Ingram Micro and **Rashi** → dealers and system integrators → businesses and shoppers. Retired business laptops → refurbishers such as **GNG** → students, small firms and overseas buyers. Separately, factories buy printers that stamp dates and batch codes on packs and then years of ink (**Control Print**), and shops, banks and warehouses buy billing machines, receipt printers and scanners (**TVS Electronics**). **The profit sits where the customer keeps buying after the first sale**: Control Print's Indian coding business earns about 30% operating margin before its new ventures, refurbishers 10–13%, distributors 2–3%. The PC brands keep most of the PC profit, and HP and Lenovo alone ship about half of India's PCs.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Three things are driving PC demand at once. Microsoft ended support for Windows 10 in October 2025, starting a multi-year replacement of office PCs; AI-ready laptops are already about a quarter of Indian sales, Rashi says. Buyers are also purchasing early to beat price rises: GNG's management said an entry-level laptop (8GB memory, 512GB storage) cost about ₹25,500 in December 2025 and about ₹48,000 by July 2026. And dearer new machines push buyers to refurbished ones, which GNG prices at about 30% of a new laptop. Outside PCs, demand comes from law and logistics: printing batch, expiry and price on packs is mandatory, a draft rule would put QR codes on far more medicines, and digital payments and warehouses drive counter and scanning equipment. **My view: the PC demand is partly pulled forward from 2027; the coding demand is steady.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The cycle is memory-chip prices.** Chip makers are sending supply to AI data centres, so an 8GB DDR5 memory module rose from about $23 in October 2025 to $126 in June 2026 (GNG's figures). TrendForce, a chip-price tracker, expects contract memory prices to rise another 13–18% in the September quarter but says the pace is slowing; IDC sees no relief before the end of 2027. When chips are scarce, stock gains value and margins rise; when prices fall, the same stock loses value. Policy is supportive but patchy (see the table below): laptop imports are monitored rather than capped, the IT hardware incentive scheme is ramping slowly, and Assam suspended the state incentives behind Control Print's new Guwahati plant.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**GNG** depends on buying enough retired laptops (management admits that companies keeping machines longer will shrink that pool) and on new laptops staying dear; **Rashi** on brand allocations during shortages, on chip prices and on dealers not being over-stocked when prices turn; **Control Print** on factory output in pipes, food and cement, and on fixing or closing its Italian unit; **TVS Electronics** on bank and retail orders returning and on filling its new assembly lines. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Refurbishing', 'GNG', '10–12%', '20%', '**−23%**', 'Buys ahead of price rises; carries about ₹700cr of stock'],
                        ['Distributing', 'Rashi', '3%', '17%', '**−44%**', 'Brands set prices; returns come from turning stock fast'],
                        ['Coding and marking', 'Control Print', '13–23%', '16%', '**65%**', 'Ink and service on installed printers; Italian losses drag'],
                        ['Counter equipment and services', 'TVS Electronics', '−2% to 6%', '6%', '**51%**', 'Imported hardware; prices set by cheaper rivals'],
                    ],
                    note: 'Cash conversion is operating cash ÷ operating profit over FY22–FY26 (Screener). TVS Electronics is standalone.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India PCs', '15.9 million units in 2025 (+10.2%); June quarter 2026 3.9 million (+12.1%): companies +16.6%, consumers +6.6%', 'Sell-in may fall from Q4 2026 as prices surge; 2027 ‘more challenging’', 'IDC'],
                        ['World PCs', '284.7 million units in 2025', '**−11.3%** in 2026; average prices +17%; no memory relief before end-2027', 'IDC, June 2026'],
                        ['Memory prices', '8GB DDR5 module $23 (Oct 2025) → $126 (Jun 2026)', 'Contract prices +13–18% in Jul–Sep 2026, gains slowing', 'GNG call; TrendForce'],
                        ['Refurbished PCs, India', 'US$1.0bn (FY25)', 'US$3.9bn by FY30, **about 30% a year**', 'Lattice Analysis, commissioned by GNG'],
                        ['IT distribution, India', 'Over ₹1.5 lakh crore; top players about 70%', 'Operating margin 2.0–2.2% (Redington, FY27)', 'Rashi; CRISIL'],
                        ['Coding and marking, India', '₹2,000–2,200cr; four players about 80%', '8.9% a year to 2035 (US$280m → US$640m)', 'Control Print; VynZ Research'],
                        ['Point-of-sale and barcode, India', 'Point-of-sale terminals US$4.0bn (2025); barcode scanners and printers US$2.2bn (2024)', '+7.4% a year to 2034; +6.7% a year to 2030', 'IMARC; TechSci'],
                        ['Policy', 'Laptop and server imports need authorisation (to 31 Dec 2026); IT hardware incentive ₹17,000cr', 'About ₹10,000cr of output in 18 months against a ₹3.35 lakh crore six-year target', 'DGFT; Cabinet release'],
                    ],
                    note: 'The refurbished-PC forecast was commissioned by GNG and appears in its annual report, so treat it as the company’s case; CARE’s own base case for GNG is 18–20% revenue growth a year. Most point-of-sale terminal value is payment machines, not TVS-type printers.',
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
                    label: 'Lasting: ink after the printer',
                    text: "**Control Print** earns about 86% of its revenue from ink, spares and service on more than 23,000 installed printers, and adds 2,500–3,000 printers a year (3,064 in FY26). A printer stays on a line for seven to eight years, and a customer rarely swaps one, because downtime costs more than the ink; management says lost ink sales carry about 85% gross margin. It is the only Indian company of scale that makes coding printers in India, and licensed designs have fallen from about 90% of its sales to about 60% as its own designs grew. **This is the one moat on the page that does not depend on the chip cycle.**",
                },
                {
                    label: 'Evidence of share',
                    text: "**Control Print** holds 18–20% of India's coding market, one of four players (with Videojet, Domino and Markem-Imaje) that together hold about 80%, and it leads in cement, plywood, sugar and dairy. **Rashi** credits about 10 points of its 62% Q1 growth to share gains, Dell chose it for its full commercial range in FY26, and CRISIL ranks it among India's top five IT distributors. **GNG** is one of the largest refurbishers in a mostly unorganised market (CARE), and Redington, Ingram Micro and Supertron, three of India's biggest IT distributors, now carry its machines; Redington's pact in June 2026 opens a network of more than 30,000 partners. **TVS Electronics** claims leadership in touch point-of-sale terminals and thermal printers but gives no share figure.",
                },
                {
                    label: 'Pricing power: real only where the customer is locked in',
                    text: "**GNG** raised its average laptop price 12% in a year (₹27,500 to ₹30,763) while units grew 18%, and CARE says its branded machines command a premium; but management admits part of the gain comes from stock bought before prices rose, which will not repeat. **Rashi** has none: brands set prices, and its CFO put the industry's normal profit margin at 1.5–1.75% of sales. **Control Print** has more than it uses: management calls itself ‘not very aggressive’ on price, gross margin drifted from 61% (FY21) to about 58–60%, and only now has it put through one increase plus a war surcharge. **TVS Electronics**' margins of 2–6% show little pricing power against cheaper Chinese imports.",
                },
                {
                    label: 'Switching costs and access to supply',
                    text: "Switching costs are high only for Control Print's customers, whose inks are qualified for their lines. The traders' edge is supply. **Rashi** says it has so far had ‘good allocation’ from NVIDIA, Intel and AMD during shortages, which smaller distributors cannot count on, and in FY25 it built India's first large AI data centre (Yotta, about ₹2,000cr, 4,000 graphics processors). **GNG** buys whole disposal lots from 773 suppliers, holds the R2v3 recycling certification that multinationals require of buyers, and backs each machine with a three-year warranty in India that small refurbishers cannot match. **TVS Electronics** services 19,250-plus pin codes, over 90% of India's districts, which keeps banks and retailers on contract.",
                },
                {
                    label: 'Wearing: the Italian detour and imported hardware',
                    text: "**Control Print**'s Italian subsidiary, which makes machines for single-dose sachets (V-Shapes), lost ₹25.2cr in FY26 on revenue of ₹15.9cr. Its joint MD said in July: ‘we're just not performing’, and told the sales team to slow down until the machines are reliable; about 70 older machines in the field are mostly idle. In May it also agreed to buy the unit's patents for ₹31.2cr. **TVS Electronics** sells mostly imported devices, and its products business grew only 3% in FY26. **Both are spending on the weakest part of the business.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Redington** (FY26 revenue ₹1.19 lakh crore, operating margin 2.1%) and **Ingram Micro** in distribution; unorganised refurbishers, and new entry-level laptops if memory gets cheaper; **Videojet**, **Domino** and **Markem-Imaje** in coding printers, plus laser coders that need no ink; **Zebra** and **Honeywell** in scanners, and payment-terminal platforms in point of sale.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the traders, the question is how much of today's margin is rising prices on stock; for the makers, how much is being lost to ventures that may or may not be fixed.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: Control Print’s core and part of GNG’s',
                    text: "**Control Print**'s Indian business runs at about 60% gross margin and, management says, about 30% operating margin before spending on new businesses; standalone gross margin even rose 1.2 points to 57.7% in Q1. The group margin (13–23% over five quarters) is lower because the foreign subsidiaries lost ₹31.2cr in FY26. **GNG**'s operating margin has risen from 7% (FY24) to 10% (FY26) and 12% in Q1 FY27, partly for lasting reasons: sales abroad earn close to 30% gross margin against about 21% in India, and the brand now reaches dealers through the big distributors. **My view: Control Print's core margin is structural; GNG's is partly structural.**",
                },
                {
                    label: 'Cyclical: gains on stock',
                    text: "**GNG**'s gross margin jumped from 19.2% in Q4 to 24.6% in Q1, helped by more US and European sales, and management said buying ahead of price rises ‘is helping in increasing the gross margin’. That part reverses when memory prices fall. **Rashi** is the opposite case: revenue rose 62% but its operating margin slipped 0.24 points to 3.04%, because more of the growth came from low-margin PCs and company hardware. Its profit rose faster (+69.5%), helped by about ₹17cr of other income, and at 2.05% of sales it sits above the 1.5–1.75% its CFO called normal for the industry in May. **Treat Rashi's profit margin above 1.75% as cyclical.**",
                },
                {
                    label: 'Not structural: losses and one-offs',
                    text: "**Control Print**'s tax rate was 60% in Q1 because the foreign losses earn no Indian tax relief; FY25's ₹100cr profit included a tax credit of about ₹33.5cr, so the fall to ₹44cr in FY26 looks worse than the business did. **TVS Electronics**' margin rose from 3.7% in Q2 FY26 to 5.96% in Q4, which its CFO called ‘structural rather than temporary’; it fell to minus 2.3% in Q1 FY27 on ‘higher material costs and continued investments in new business initiatives’, and there was no call to explain it. **Neither company's margin can be read from one quarter.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**GNG**'s stock rose from ₹490cr (March 2025) to ₹743cr (March 2026) and was about ₹700cr in June, more than a third of a year's sales. Operating cash flow was negative ₹215cr in FY26; CARE notes it has been negative in most years since FY20 and expects the working-capital cycle to stay long. Management said on the Q4 call that net debt of about ₹300cr ‘is the trajectory we expect’; it was ₹406cr in June. **At GNG, growth costs cash at every step.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**TVS Electronics**' cash cycle doubled from 29 to 59 days in FY26 as it bought memory ahead of price rises and customers paid more slowly (debtor days 61 → 76); borrowings rose from ₹43cr to ₹54cr. **Control Print**'s cycle lengthened from 241 to 283 days; it holds 130–135 days of sales in stock (CRISIL) to guarantee spares, which is part of its service promise but ties up cash.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Rashi** ran 56 days of working capital in Q1 FY27 against 58 in FY26, with stock down to 55 days from 64 a year earlier and customer credit to 41 days from 44, even as sales grew 62%. But its supplier credit fell to 40 days from 53, so brands are funding less of it. FY26 operating cash was positive at ₹114cr on Screener; management quoted ₹514cr on a basis I could not reconcile. **The improvement is real but has one year behind it.**",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Distributors and refurbishers must hold stock, coding companies must hold spares, and point-of-sale buyers are banks and large retailers that pay slowly. Redington runs about 34 days and Rashi 56; GNG over 100; Control Print over 250. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['GNG Electronics', 'Net debt of about ₹300cr ‘is the trajectory’ (May); no new equity needed through FY28–29; finance cost about ₹14cr a quarter', 'Net debt ₹406cr (June); stock about ₹700cr; CARE BBB/Stable (upgraded April 2026)'],
                        ['Rashi Peripheral', 'Large data-centre projects would lift gearing from about 0.5x to ‘at least 2x’, so it is avoiding them', 'Net debt ₹1,285cr (June), before ₹368.5cr paid for VDA on 2 July; CRISIL AA−/Stable'],
                        ['Control Print', 'The ₹31.2cr patent purchase from the Italian unit is the last infusion (May); packaging sales slowed until machines are reliable (July)', 'Net cash ₹58cr; bank lines 27% used; CRISIL A/Stable (withdrawn September 2026)'],
                        ['TVS Electronics', 'No Q1 call. In May: routine capex only; debt rose on memory stock and slower payers', 'Net debt ₹49cr (March); borrowings ₹54cr; Brickwork A/Stable'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so the September half will show whether GNG’s stock is turning into cash.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company did against what it promised on the Q4 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: dear new laptops push buyers to refurbished',
                    text: "Dearer new laptops send buyers to warrantied refurbished machines: **GNG** sells at about 30% of a new laptop's price and is targeting students in India and Africa who could not afford a PC at all. Lattice Analysis, in a study commissioned by GNG, expects India's refurbished-PC market to grow about 30% a year to US$3.9bn by FY30; CARE's more cautious base case for GNG is 18–20% revenue growth a year. Supply is the limit: GNG's management agreed that companies delaying laptop replacement will make the pool of retired machines smaller.",
                },
                {
                    label: 'Growth driver: office PC replacement, at higher prices',
                    text: "**Rashi** grew 62% in Q1 FY27: 30–35 points from price, 20–25 from units and 5–10 from new brands and products. Management expects Q2 to look similar, with prices rising at about half Q1's pace, and restated a 20%-a-year floor into FY28. The replacement of Windows 10 machines is real, but IDC warns sell-in may fall from Q4 2026 as prices surge, and Rashi admits smaller dealers are holding stock to earn a ‘double-digit margin’ on rising prices. **Some of this year's growth is borrowed from next year's.**",
                },
                {
                    label: 'Growth driver: acquisitions and new businesses',
                    text: "**Rashi** paid ₹368.5cr in cash on 2 July for 67% of VDA Infosolutions, a system integrator with ₹850cr of FY26 revenue and a 5–6% operating margin (CRISIL), about double Rashi's; the other 33% follows over three years. It is moving its chip-distribution business (+131% in FY26, from a small base) into a 74:26 joint venture with Japan's Restar, targeting over US$100m of revenue in three years. **TVS Electronics** is growing solar-plant maintenance (sites up from 1 GW to 3 GW in FY26) and contract electronics manufacturing, where each customer takes three to four quarters to win and its surface-mount (circuit-board) lines are only 30–40% used.",
                },
                {
                    label: 'Growth driver: rules that require codes',
                    text: "**Control Print** guides 10–15% growth for its core coding business in FY27, against VynZ Research's 8.9% a year for the Indian market. A draft rule would extend QR codes on medicines from the top 300 brands (about 2,000 products) to about 25,000 products, which management estimates would lift the track-and-trace market from about ₹600cr to ₹1,500cr within two years; it is running pilots with three drug makers. The rule is still a draft, and Control Print's track-and-trace sales were only about ₹20cr in FY26.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Rashi** promised on the Q4 call a 20% long-run growth rate, a 1.5–1.75% profit margin and working capital ‘around the same range’ of 58 days. Q1 brought 62% growth, a 2.05% profit margin and 56 days, and Dell reached about 5% of revenue, ahead of plan. It also kept its word on avoiding big data-centre projects.",
                },
                {
                    label: 'Cautious',
                    text: "**Rashi** raised an ‘orange alert’ on component supply, says entry-level laptops are about 50% short, and expects consumer demand to soften in H2 FY27 now that laptops cost about twice what they did a year ago. It gives no formal FY27 number.",
                },
                {
                    label: 'Missed',
                    text: "**Control Print** guided 10–15% core growth and said in May the Italian unit ‘could easily breakeven this year’. Q1 standalone revenue grew 4.2%, operating profit fell 4.9% and profit after tax 28%; in July, break-even moved to H1 FY28 (‘I don't think it'll necessarily break even in the second half’), and Assam suspended the incentives behind its Guwahati film plant. Management kept the 10–15% core target, which now needs a much stronger rest of the year.",
                },
                {
                    label: 'Mixed',
                    text: "**GNG** promised on the Q4 call about 25% revenue growth and quarterly margins ‘slightly above’ Q4's 9.8%; Q1 brought 32% and 12.8% (company basis), and it raised FY27 guidance to 30% growth with profit margin up 0.75–1 point. But net debt of ‘about ₹300cr’ came in at ₹406cr, and the two calls gave different March figures (₹300cr and ₹399cr). **TVS Electronics** promised ‘double-digit growth’ and delivered 9.6%; its margin gains, called structural in May, reversed in the next quarter.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect GNG to compound earnings at about 22% and Rashi at about 12% across a chip cycle**, with FY27 flattered by price and FY28 the risk year, when IDC and TrendForce see demand normalising and memory prices may ease. GNG's growth is the more structural of the two, because refurbished machines can gain share whether prices rise or not; Rashi's long-run 20% revenue target is plausible, but its earnings will fall back if prices reverse. **Control Print** should grow about 11% a year as its core grows 10–15% and the foreign losses shrink; the upside is larger if Italy breaks even, because those losses carry no tax relief, and smaller if the break-even keeps slipping. **TVS Electronics**' profit is too small to estimate from.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['GNG Electronics', 'Refurbished laptops replacing new ones; distributor reach; stock gains fading', '12% / **22%** / 30%'],
                        ['Rashi Peripheral', 'PC replacement and share gains; VDA and chips; price-led growth reversing', '5% / **12%** / 20%'],
                        ['Control Print', 'Ink and service growth; Italian losses shrinking, or not', '6% / **11%** / 15%'],
                        ['TVS Electronics', 'Contract electronics lines filling; services', 'Loss-making; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['GNG Electronics', 'Revenue +30% in FY27 (raised from 25%); profit margin up 0.75–1 point (from 0.5)', 'No new plant in FY27; spending goes on people and marketing', '**Mixed**: Q1 +32% at a 12.8% margin beat; net debt ₹406cr against about ₹300cr promised'],
                        ['Rashi Peripheral', 'Q2 growth similar to Q1; 20% a year floor into FY28; Restar venture above US$100m in three years', '₹368.5cr for 67% of VDA; the rest over three years', '**Beat**: Q1 +62% against 20%; profit margin 2.05% against 1.5–1.75%'],
                        ['Control Print', 'Core coding +10–15% (kept); packaging break-even H1 FY28 (was FY27)', '₹31.2cr for the Italian patents; Assam plant on hold', '**Missed**: standalone Q1 +4.2%; break-even pushed back about a year'],
                        ['TVS Electronics', 'No numbers; ‘double-digit growth’ and ‘structural’ margins (May)', 'Routine only, after about ₹40cr on the factory and circuit-board lines', '**Missed**: Q1 revenue +9.6%; margin −2.3%; no call held'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports rather than from the calls.",
            ],
            points: [
                {
                    label: 'Chip prices turning',
                    text: "**GNG** holds about ₹700cr of stock and **Rashi** roughly ₹3,000cr (my estimate from 55 days of Q1 sales), both bought at rising prices. If memory eases faster than they expect, selling prices and stock values fall together, and Rashi's revenue, half of whose growth is price, falls with them. Rashi's auditors made stock valuation a key audit matter (an area they judged most at risk of error), and a write-down on slow-moving stock already hit its Q4 FY26 gross margin. **Owning both is one bet, not two.**",
                },
                {
                    label: 'Cash, debt and rating triggers',
                    text: "**GNG**'s operating cash was negative ₹215cr in FY26, and its corporate guarantees for subsidiary borrowings rose from ₹95.4cr to ₹201.8cr. CARE would cut its rating if gearing (debt ÷ equity) passed 0.8x, interest cover fell below 3x or the cash cycle passed 180 days. **Rashi**'s bank lines were 77% used, and CRISIL expects gearing to rise to about 0.63x by March 2027 after VDA. **TVS Electronics**' rating agency, Brickwork, named an operating margin below 2% as a downgrade trigger; Q1's minus 2.3% breached it for one quarter.",
                },
                {
                    label: 'Audit coverage and related parties',
                    text: "**GNG**'s group auditor did not audit its UAE subsidiary and the US units below it; a small Sharjah firm did, and the group auditor relied on its work. International sales are about 64% of revenue and carry the higher margin, so most of the profit is checked by that firm. GNG is also seeking shareholder approval for promoter personal guarantees of up to ₹200cr and trading between its subsidiaries of up to ₹500cr. **Control Print**'s auditor did not audit five foreign subsidiaries at all: their accounts are ‘unaudited’ and ‘certified by their respective directors’, and they lost ₹31.2cr in FY26; the Italian unit's liabilities (₹102cr) are nearly double its assets (₹55cr). Both audit opinions are clean. **The riskiest numbers in both groups are the least checked.**",
                },
                {
                    label: 'Tax and legal claims not provided for',
                    text: "**Rashi** lists ₹778cr of contingent liabilities (claims and guarantees it has not provided for), including ₹344cr of GST demands; management says such notices are reconciliations and past ones closed at under 1% of the demand. Its auditors also flagged supplier rebates, which are large and calculated by hand. **TVS Electronics** carries ₹54.8cr of unprovided claims (customs ₹35.6cr, GST and VAT ₹18.7cr), about 57% of its net worth. **Control Print** has not provided for a ₹6.33cr arbitration award plus interest won by Videojet, stayed by the Bombay High Court.",
                },
                {
                    label: 'Promoter terms and disclosure at TVS Electronics',
                    text: "Since FY24 **TVS Electronics** has paid TVS Investment Consultants LLP, a Gopal Srinivasan family entity, for use of the ‘TVS’ name: up to 1% of net sales, or ₹5 lakh in loss or low-profit years. At FY26 sales, 1% would be about ₹4.5cr, more than the whole year's profit of ₹1.3cr, so the fee takes a large bite whenever profit recovers. The company gives no numbers for its contract-electronics, solar or e-auction businesses, gives no guidance, and held no call after a loss-making quarter; its contract-electronics head left in Q2 FY26.",
                },
                {
                    label: 'New ventures and places',
                    text: "**Rashi**'s VDA (a services business) and the Restar venture are new territory; both will run independently for now, and no VDA profit figure was given on the call. **Control Print** may still spend more in Italy despite calling the patent purchase the last infusion; an analyst put the total Italian investment at about ₹65cr and management did not dispute it. **GNG** runs eight units in Sharjah; management says the 2026 Gulf conflict did not disrupt operations or air freight. In the long run, laser coders that need no ink are the main threat to **Control Print**'s ink income.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 19x, 15% at 24x and 26% at 57x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Control Print** holds about ₹58cr of net cash, part of it in listed shares and mutual funds, so it is a little cheaper than its P/E suggests. **GNG** and **Rashi** carry debt the P/E ignores, and more of it than the live table shows: the table uses March net debt (₹315cr and ₹910cr), while by June GNG's was ₹406cr and Rashi's ₹1,285cr, before Rashi paid ₹368.5cr for VDA. **On the June balance sheets both are dearer than they look.**",
                },
                {
                    label: 'Reasonable',
                    text: "**Rashi** needs about 12% a year, roughly my estimate, for a distributor that has grown sales about 22% a year for five years. But its trailing profit includes its best quarters ever: if the profit margin returned to the 1.5–1.75% its CFO calls normal, today's profit would be about 15–27% too high. **A fair price for a full cycle, not a cheap one.**",
                },
                {
                    label: 'Full',
                    text: "**GNG** needs about 26% a year against my ~22%. That is below what it is delivering now (profit +56% in Q1, and guidance implying profit growth of roughly 45–50% in FY27), but part of the margin is stock gains that reverse when memory prices fall, and the cash has not followed the profit. I would pay this only once operating cash turns positive.",
                },
                {
                    label: 'Full, with an option',
                    text: "**Control Print** needs about 15% a year against my ~11%, so it is also full. The label hides an option as well as a risk: trailing profit (₹39cr) is held down by ₹31.2cr of foreign losses that earn no tax relief, while the Indian business alone made ₹80cr after tax in FY26. If the Italian loss falls to the €1.5m management targeted in May, group profit rises sharply without the core growing at all; if more money goes to Italy, it does not. **Today the market is roughly paying for the core business alone.**",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**TVS Electronics** lost about ₹2cr over the last four quarters, so it has no P/E. Its market value of about ₹731cr at writing rests on ₹16cr of trailing operating profit, down from ₹27cr in FY22. The price assumes contract electronics and services scale sharply, with ₹54.8cr of tax claims and the promoter brand fee still to come off any profit. **Avoid: no yardstick makes this cheap.**",
                },
                {
                    label: 'What would change the labels',
                    text: "**GNG** moves to fits if operating cash turns positive and I can trust a higher growth rate; **Control Print** does if Italy's losses clearly shrink by H1 FY28, which would lift both profit and my estimate. **Rashi** slips to full if prices reverse and its profit margin falls back to the 1.5–1.75% range.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'GNG Electronics', rank: 1, stance: 'SCALEUP', segment: TRADE,
            what: "Buys retired business laptops and desktops in bulk, refurbishes them in Navi Mumbai, Sharjah and the US, and sells them under its Electronics Bazaar brand with warranties of up to three years; about 64% of revenue is earned abroad.",
            view: "**The best growth here, bought with cash it has not yet earned back.** Revenue +32% in Q1 at a 12% operating margin, and FY27 guidance raised to 30%. But operating cash was negative ₹215cr in FY26, net debt is back at ₹406cr a year after a ₹400cr share issue, and the overseas profit is audited by a small Sharjah firm. The price needs about 26% a year against my ~22%.",
            watch: 'Operating cash turning positive in the September half; gross margin holding if memory prices ease; net debt against the ~₹300cr promised.',
        },
        {
            company: 'Rashi Peripheral', rank: 2, stance: 'CYCLICAL', segment: TRADE,
            what: "A national distributor of PCs, components, servers and accessories for about 80 global brands including Dell, Intel, AMD and NVIDIA, now adding IT services (VDA Infosolutions) and chip distribution (a joint venture with Japan's Restar).",
            view: "**A well-run, thin-margin distributor at the top of a price cycle.** Revenue +62% in Q1, profit +69.5% and working capital down to 56 days. But 30–35 points of that growth was price, the operating margin slipped to 3.04%, and it carries ₹344cr of disputed GST demands and a new ₹368.5cr stake in VDA. The price asks for about my ~12% estimate.",
            watch: 'Q2 growth and how much of it is price; dealer stock and any write-downs; gearing after VDA against CRISIL’s ~0.63x.',
        },
        {
            company: 'Control Print', rank: 3, stance: 'TURNAROUND', segment: MAKE,
            what: "Makes coding and marking printers that print dates, batch codes and barcodes on packs, and sells the inks, spares and service; also owns a loss-making sachet-packaging business in Italy and a small track-and-trace unit.",
            view: "**A good core business with an expensive, unaudited detour.** The Indian business earns about 60% gross margin, about 86% of revenue is recurring and it holds net cash. But the foreign subsidiaries lost ₹31.2cr in FY26 in accounts no auditor checked, break-even slipped to H1 FY28 and Q1 standalone revenue grew only 4.2%. The price needs about 15% a year against my ~11%.",
            watch: 'The Italian loss falling towards €1.5m a year; core growth back to 10–15% after the price rise; the final QR-code rule for medicines.',
        },
        {
            company: 'TVS Electronics', rank: 4, stance: 'AVOID', segment: MAKE,
            what: "Sells point-of-sale terminals, receipt printers, scanners and handhelds, and provides IT field service, solar-plant maintenance and contract electronics assembly; a single company with no subsidiaries.",
            view: "**Avoid: a turnaround that reversed on its first test.** The margin reached 6% in Q4 FY26, then fell to minus 2.3% in Q1 FY27 with a ₹6.6cr loss and no call, and operating profit has shrunk from ₹27cr (FY22) to ₹16cr. It carries ₹54.8cr of unprovided tax claims (about 57% of net worth) and pays a promoter-family firm a brand fee of up to 1% of sales. No growth estimate.",
            watch: 'Two quarters of operating margin above 5%; circuit-board lines above 40% used; any settlement of the customs and GST claims.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Refurbishing and distributing.** **GNG Electronics: follow.** The most structural growth here, but its cash, its debt and its overseas audit need to catch up with its profits. **Rashi Peripheral: follow.** A fair price for a well-run distributor in a very good year; the year will not last.",
            "**Making and servicing equipment.** **Control Print: wait** until the Italian losses clearly shrink; the price is full for my ~11%, and the core alone is worth owning at the right price. **TVS Electronics: avoid.** Shrinking operating profit, a reversed margin, large unprovided tax claims and a promoter brand fee.",
            "**What would change my view.** For the better: GNG's operating cash turning positive while its margin holds; Control Print fixing or closing Italy. For the worse: memory prices falling in 2027 while GNG and Rashi hold large stocks; dealers cutting their stocks; another loss at TVS Electronics.",
            "**What to watch next quarter.** GNG: cash flow and net debt in the September half-year accounts. Rashi: growth, the price share of it, and VDA. Control Print: Italian losses and core growth. TVS Electronics: a return to profit, and whether it holds a call.",
        ],
        bottomLine:
            "A chip shortage has made the traders look better than their cash records do. Follow GNG Electronics and Rashi Peripheral but watch their stock and debt; wait on Control Print until Italy stops losing money; avoid TVS Electronics.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/EBGNG/consolidated/' },
        { label: 'Wholesale price index, printed circuit boards — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'India PC market, Q1 2026 — IDC', url: 'https://www.idc.com/resource-center/blog/india-pc-market-q1-2026/' },
        { label: 'India’s PC market grows 12.1% in Q2 2026 on channel stocking — IDC via NCN', url: 'https://www.ncnonline.net/indias-pc-market-grows-12-1-yoy-in-q2-2026-as-channel-stocking-and-enterprise-demand-sustain-momentum-idc/' },
        { label: 'PC market enters volatile territory as memory shortage persists through 2027 — IDC', url: 'https://www.idc.com/resource-center/blog/pc-market-enters-volatile-territory-as-memory-shortage-persists-through-2027/' },
        { label: 'Memory contract price outlook, 3Q26 — TrendForce', url: 'https://www.trendforce.com/presscenter/news/20260703-13134.html' },
        { label: 'Redington rating rationale (IT distribution margins) — CRISIL, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/RedingtonLimited_May%2027_%202026_RR_396203.html' },
        { label: 'GNG Electronics rating rationale — CARE, April 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130446_GNG_Electronics_Limited.pdf' },
        { label: 'GNG Electronics annual report FY26 (incl. Lattice refurbished-PC study) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9eb2da14-3945-4507-8e2c-ce91261e7bf6.pdf' },
        { label: 'GNG Electronics Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a6c26cd1-befb-4b36-b397-d0af3720e440.pdf' },
        { label: 'Rashi Peripherals rating rationale — CRISIL, September 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/RashiPeripheralsLimited_September%2003_%202026_RR_404940.html' },
        { label: 'Rashi Peripherals annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4d794442-7040-4cfe-a4fc-36c90c0e9250.pdf' },
        { label: 'Control Print annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/9c44ccee-76e4-484d-b8b3-e9e73117cc80.pdf' },
        { label: 'Control Print rating rationale — CRISIL, September 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ControlPrintLimited_September%2001_%202026_RR_400345.html' },
        { label: 'TVS Electronics annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e4f0f63d-d960-45ac-8575-08c2a55210c4.pdf' },
        { label: 'TVS Electronics Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fc2ccf22-11f1-4dc4-9874-f3d9c364b835.pdf' },
        { label: 'India coding and marking systems market — VynZ Research', url: 'https://www.vynzresearch.com/chemicals-materials/india-coding-and-marking-systems-market' },
        { label: 'Import authorisation for restricted IT hardware continues in 2026 — TaxGuru (DGFT circular)', url: 'https://taxguru.in/dgft/import-authorisation-mandated-restricted-hardware-remains-ims-2026.html' },
        { label: 'PLI 2.0 for IT hardware sees ₹10,000cr production in 18 months — DT Next', url: 'https://www.dtnext.in/news/business/pli-20-for-it-hardware-sees-rs-10000-crore-production-3900-jobs-in-just-18-months-818914' },
    ],
};
