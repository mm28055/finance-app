import { BusinessProfile, OverviewSection } from './types';
import { utilitiesCharts } from './card-data/utilities';

// Tab 2 of the Utilities note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; order books and splits are from each company's latest presentation or call. The cost chart uses India's steel-pipe price index (diesel for Antony) as a rough guide to materials.",
        ],
    },
    {
        heading: 'The services, in plain words',
        body: [
            "Clean water in, dirty water and rubbish out.",
        ],
        points: [
            {
                label: 'Water and wastewater plants',
                text: "Plants that turn seawater into drinking water (desalination), treat sewage so it can be reused, and purify water for factories (Wabag, Ion Exchange, Enviro Infra, EMS).",
            },
            {
                label: 'Running the plants',
                text: "Contracts of 5–20 years to operate and maintain those plants after they are built (Wabag, Enviro Infra, EMS).",
            },
            {
                label: 'Water chemicals and equipment',
                text: "Ion-exchange resins (beads that remove minerals from water), membranes, standard treatment units and home water purifiers (Ion Exchange).",
            },
            {
                label: 'Waste collection and processing',
                text: "Door-to-door rubbish collection, road sweeping, and turning waste into electricity, fuel and recycled building material (Antony).",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Government construction contracts**', 'Enviro Infra, EMS, Wabag, Ion Exchange (some)', 'Bid; lowest price usually wins', 'Slow: milestones and state releases'],
                    ['**Long operating contracts and concessions**', 'Antony, Wabag, Enviro Infra', 'Fixed fees with inflation clauses', 'Monthly, but cities can pay late'],
                    ['**Products and chemicals to industry and homes**', 'Ion Exchange', 'Price lists and orders', 'Normal credit terms'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Va Tech Wabag',
        inShort: ["**A global water-treatment specialist** that designs, builds and runs drinking-water, sewage and seawater desalination plants in India, the Middle East, Africa and Europe.", "**Good:** a record ₹19,400cr order book, 21% revenue growth in Q1 FY27 and ₹903cr of net cash. **Watch:** much of the growth now comes from the Middle East, and Screener's margin (which leaves out foreign-exchange gains) slipped to 9% in Q1.", "**Verdict: follow.** The best business in the sector and the closest to a buy, but the price asks for a little more than the ~15% a year I expect; buy on weakness."],
        tagline: "A 100-year-old water-technology company that designs, builds and operates water, sewage, recycling and desalination plants for cities and industry.",
        revenue: '₹3,944cr (FY26, consolidated)',
        products: [
            { name: 'Desalination plants', text: "Plants that turn seawater into drinking water. The flagship is the Perur plant in Chennai (funded by Japan's JICA), now over 75% complete; it has just won its first plant in Kuwait, a 60 MIGD seawater plant." },
            { name: 'Sewage and wastewater plants', text: "Sewage treatment plants clean city wastewater so it can be released or reused. Recent wins include Bengaluru, Delhi and a 60 MLD plant in Ajman (UAE) that also turns sludge into biogas and power." },
            { name: 'Industrial water', text: "Treatment and recycling plants for refineries and factories (Reliance, GAIL, BPCL, CPCL, Saudi Aramco's Ras Tanura). About 90% of industrial work is oil and gas; ultrapure water for solar, chip and data-centre plants is a long-term bet." },
            { name: 'Operation and maintenance (O&M)', text: "Running plants for a monthly fee under 5- to 20-year contracts, such as Bahrain's Bapco and the 20-year Kodungaiyur (Chennai) refurbish-and-run contract. O&M was 18% of Q1 FY27 revenue." },
        ],
        revenueText: "Most revenue comes from EPC work (engineering, procurement and construction: designing the plant, buying the equipment and building it): **82% of Q1 FY27 revenue**, with O&M 18%. **52% came from overseas** and 48% from India. The ₹19,400cr order book is 66% EPC and 34% O&M, split roughly half India, half abroad, with the Middle East 35–40%.",
        mixes: [
            { caption: 'Revenue by type, Q1 FY27', parts: [{ label: 'EPC (build)', share: 82 }, { label: 'O&M (run)', share: 18 }] },
            { caption: 'Revenue by region, Q1 FY27', parts: [{ label: 'Overseas', share: 52 }, { label: 'India', share: 48 }] },
        ],
        customers: ["**City and national water authorities**: Chennai Metro Water, Bengaluru's BWSSB, Delhi Jal Board, Saudi water agencies, Kuwait's Ministry of Electricity and Water, Ajman and Vienna. Many projects are funded by lenders such as JICA or the World Bank, which makes payment safer.", "**Oil, gas and industrial companies**: Reliance, GAIL, BPCL, CPCL, Aramco and Bapco, plus solar-cell makers such as Indosol and RenewSys."],
        difficulty: { level: 'High', text: "Large desalination and complex industrial-effluent plants need proven designs, references and process know-how. Wabag says it has built about 7,000 plants and holds 125 in-house technology rights, including its own filter design, which few rivals can match on big tenders." },
        moat: "A long track record, own technology and a lower-cost Indian, Turkish and Egyptian workforce (its tagline is European quality at Indian prices) win it large, technically demanding jobs. The weakness is price competition from European and Chinese rivals abroad and local contractors on simple sewage jobs in India.",
        salesDrivers: ["**Water scarcity in the Middle East and Africa**: 77% of Q1 order intake came from abroad. Saudi Arabia has named 2027 its Year of Water, and Wabag has just entered Kuwait and the UAE.", "**Indian city water and sewage schemes**, often funded by JICA, the World Bank or state budgets; Indian orders are picking up after a lull but projects are smaller than abroad.", "**Industrial spending**, mostly oil and gas; management wants industry back to 20–25% of the order book from about 12–13% now.", "**Plants finishing and moving into O&M**: O&M revenue grew only 7% in Q1 but should rise as Ghaziabad, Bhagalpur and later Perur switch to running mode. Management guides 15–20% revenue growth."],
        inputs: "**Bought-in equipment and subcontracted civil work**: pumps, membranes, filters, pipes, steel and concrete work done by construction partners. Screener books these as factory costs, 76% of sales in FY26; materials show as 0%.",
        costEffect: "**Partly protected.** Overseas orders are priced in dollars, euros or dollar-linked currencies, construction is largely passed through to partners, and for war-related price rises it has sent force-majeure letters so customers share the cost. **Rule of thumb:** a 10% rise in these bought-in costs not passed on would cut the margin by about 8 points (12% to 4%). **What happened:** India's steel-pipe price index, used here only as a rough guide to construction materials, eased from 100 to 96 between Q1 FY24 and Q1 FY27. Screener's margin went from 10.1% to 9.0%, but it leaves out foreign-exchange gains that the company counts as operating; on its own measure the Q1 FY27 margin was just over 13%. The real drivers are project mix (more full-build EPC this year, fewer higher-margin supply-only jobs), execution speed and bad-debt provisions, not pipe prices.",
        competitors: [{ name: 'European water groups', note: 'Spanish and French firms with bigger balance sheets; Wabag competes on cost and its regional track record.' }, { name: 'Chinese state-owned contractors', note: 'Price aggressively on international tenders.' }, { name: 'Ion Exchange and local Indian contractors', note: 'Compete on industrial jobs and on simpler, lowest-price sewage tenders in India.' }],
        position: "**India's best-known water-treatment company and a global name in desalination**, with more than four decades in the Middle East and an order book over four times its revenue.",
        money: "Screener shows **₹903cr of net cash**; the company puts net cash (excluding its hybrid annuity projects) at ₹965cr in Q1 FY27, its 14th straight quarter of net cash. It is asset-light: capex is about ₹5cr a year and management says no capex is needed to take more orders. Working capital is about 108 days. About ₹140cr is owed by Telangana's power company (TS Genco) after an arbitration the Supreme Court decided in Wabag's favour; timing of payment is unknown. The FY26 annual report shows disputed indirect-tax claims of ₹228cr (₹101cr a year earlier) and income-tax demands of ₹19cr, not provided for. No equity raise or pledges mentioned. Promoters hold **19.08%**, essentially unchanged from 19.12% in Sep 2023.",
        watch: ["Perur desalination plant moving into commissioning.", "Margin holding at 13–14% as guided, and O&M rising toward 20% of revenue.", "Execution in Kuwait and the UAE amid Middle East tensions."],
        charts: utilitiesCharts['Va Tech Wabag'],
    },
    {
        company: 'ION Exchage',
        inShort: ["**A 62-year-old Indian water-treatment company** that makes ion-exchange resins, membranes, water chemicals, standard treatment plants and Zero-B home purifiers, and also builds large treatment plants.", "**Good:** all five businesses grew double digits in Q1 FY27 and a big new resin plant at Roha is starting up. **Bad:** the operating margin fell to 4.5% as legacy loss-making contracts, Roha start-up costs and the West Asia conflict hit at once, and it has moved from net cash to net debt.", "**Verdict: wait.** The price assumes a recovery that has not started; I want to see the legacy projects finish and Roha fill up."],
        tagline: "Water-treatment company spanning resins, membranes, water chemicals, standard plants, large treatment projects, plant servicing and home water purifiers.",
        revenue: '₹2,915cr (FY26, consolidated)',
        products: [
            { name: 'Specialty chemicals', text: "Ion-exchange resins (tiny plastic beads that swap unwanted dissolved minerals out of water), pharma-grade resins from an FDA-approved plant at Ankleshwar, and water-treatment chemicals. Q1 FY27 revenue ₹230cr." },
            { name: 'Treatment solutions', text: "Large custom plants built on an EPC basis (designing, buying equipment and building): industrial effluent, zero liquid discharge, sewage, desalination and ultrapure water. Q1 revenue ₹210cr, with an operating loss of ₹17cr from legacy projects." },
            { name: 'Industrial products', text: "Standard ready-made treatment plants and RO and ultrafiltration membranes made in Goa, Hosur and Wada, with a membrane tie-up with Mann+Hummel. Q1 revenue ₹105cr at an 11.9% operating margin." },
            { name: 'Life cycle services', text: "O&M (running and maintaining plants), spares and upgrades across 200-plus contracts, including a new 20-year concession for Petroleum Development Oman. Q1 revenue ₹72cr." },
            { name: 'Zero-B consumer products', text: "Home water purifiers and softeners sold in over 700 cities. Q1 revenue ₹112cr, up 33%, with a small loss of ₹0.34cr; the target is breakeven this year." },
        ],
        revenueText: "Q1 FY27 segment revenue (before inter-segment adjustments): **specialty chemicals ₹230cr**, **treatment solutions ₹210cr**, consumer ₹112cr, industrial products ₹105cr and life cycle services ₹72cr. About **30% of revenue comes from abroad**. Chemicals revenue was just under ₹900cr in FY26. The treatment, products and services order book was **₹2,473cr** at 30 June, not counting a roughly USD 52 million Hyundai order won after the quarter.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (before inter-segment adjustments)', parts: [{ label: 'Specialty chemicals', share: 32 }, { label: 'Treatment solutions', share: 29 }, { label: 'Consumer (Zero-B)', share: 15 }, { label: 'Industrial products', share: 14 }, { label: 'Life cycle services', share: 10 }] },
        ],
        customers: ["**Industry**: power, refineries, pharma, solar and semiconductors in India and over 70 countries; resins go to plant builders and distributors worldwide, with North America a target now that it has US water-quality (WQA) certification.", "**Government water schemes**, notably a large Uttar Pradesh Jal Jeevan Mission rural water project, and overseas contractors such as Hyundai (a supply job for Iraq, handed over at Mumbai port).", "**Households**, through Zero-B purifiers and service contracts."],
        difficulty: { level: 'High', text: "Resins need years of customer and regulatory approvals, and few companies in the world make resins, membranes and water chemicals under one roof. Standard municipal plant-building is much easier and is won on the lowest bid." },
        moat: "More than 200,000 installations create repeat demand for resins, chemicals, spares and servicing, and resin approvals are slow to win. The weakness is the projects arm, where lowest-price government contracts have caused years of losses.",
        salesDrivers: ["**Industrial spending on water**: new sectors such as chip plants, green hydrogen and data centres need very pure water; it has a small semiconductor job and a bid pipeline of ₹9,777cr.", "**Filling the Roha resin plant**: together with Ankleshwar it lifts resin capacity about five times; the FY27 target of 25% use of Roha is behind plan so far, with exports to North America a key outlet.", "**State-government payments** on the UP Jal Jeevan project: work is paced to funds received; about 11% of the order book is this project and a major part should be done over this year and next.", "**Services and Zero-B**: services grew 28% and consumer products 33% in Q1, both steadier than projects."],
        inputs: "**Petrochemical raw materials** (styrene and amines for resins) plus bought-in pumps, pipes, steel tanks and membrane materials for plants, and civil work on projects. Materials were 64% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** In chemicals it raised prices to all customers after input costs jumped, but only after a delay; on fixed-price projects it absorbs overruns. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (7% to 1%). **What happened:** India's steel-pipe price index, a rough guide to project materials, slipped from 100 to 96 between Q1 FY24 and Q1 FY27, yet the margin fell from 10.2% to 4.5%. The real causes were legacy loss-making contracts (mainly the UP water project, slowed by state payments), start-up costs at Roha (about 6 points off the chemicals margin), petrochemical cost spikes and shipping delays from the West Asia conflict, and no foreign-exchange gain this year.",
        competitors: [{ name: 'Va Tech Wabag', note: 'Larger in big municipal and desalination projects; Ion Exchange is stronger in industrial water and consumables.' }, { name: 'Global resin makers such as DuPont and Lanxess', note: 'Much larger in resins; Ion Exchange wants about 10% of world resin volumes after Roha.' }, { name: 'Kent and Eureka Forbes', note: 'Bigger home water-purifier brands competing with Zero-B.' }],
        position: "**One of the very few companies worldwide making resins, membranes and water chemicals under one roof**, with a presence in over 70 countries and one of the largest water-service networks in Asia-Pacific.",
        money: "Screener shows **net debt of ₹163cr**, a swing from ₹490cr of net cash in FY22 after heavy spending on the Roha plant (capex of ₹320cr in FY25 and ₹254cr in FY26) and cash tied up in project receivables; operating cash flow was negative in FY26. The pharma-resin expansion is described as modest capex. No equity raise or pledges mentioned. Promoters hold **25.43%**, down from 26.76% in Sep 2023; a further 2.37 crore shares (about 16%) sit in staff-welfare trusts whose votes tend to follow management.",
        watch: ["Losses in treatment solutions shrinking as legacy projects finish.", "Roha plant use and the chemicals margin.", "A return to double-digit margins, which management says will take time."],
        charts: utilitiesCharts['ION Exchage'],
    },
    {
        company: 'Enviro Infra Engine.',
        inShort: ["**Enviro Infra Engineers builds and runs sewage and water-treatment plants for state governments** in 17 states, and has added solar, wind and battery-storage contracting.", "**Good:** a ₹6,721cr order book, 49% revenue growth in Q1 FY27 and a ₹2,000cr revenue target for FY27. **Bad:** margin guidance has been cut to 19–20% as lower-margin renewables grow, and slow state payments have kept operating cash flow negative for three years.", "**Verdict: wait.** The price asks for less than the ~15% a year I expect, but I want to see cash come in from state clients first."],
        tagline: "Builder and operator of sewage, effluent and water-supply plants for government clients, now also a solar, wind and battery-storage contractor.",
        revenue: '₹1,146cr (FY26, consolidated)',
        products: [
            { name: 'Sewage and effluent treatment plants', text: "Sewage treatment plants clean city wastewater; common effluent treatment plants do the same for industrial clusters, including a zero-discharge plant for textile units near Kolhapur. The water-building order book is ₹2,696cr, to be done over 18–24 months." },
            { name: 'Hybrid annuity (HAM) projects', text: "Under HAM, the company builds a plant and the government pays it back in quarterly instalments with interest, plus operating fees, over 15 years. It has five, including two new Varanasi sewage plants under Namami Gange worth ₹256.9cr." },
            { name: 'Water supply and O&M', text: "Water-supply schemes (about ₹100cr of Jal Jeevan Mission work left in Madhya Pradesh) and 5- to 15-year O&M contracts that come with each plant; the water O&M order book is ₹998cr." },
            { name: 'Renewables and battery storage', text: "Solar, wind and battery-storage (BESS) building, including BESS projects for NTPC, wind work through the acquired Suyog Urja (₹80cr of Q1 revenue), and its own solar and battery plants that sell power." },
        ],
        revenueText: "Water and wastewater gave **71% of Q1 FY27 revenue** (about ₹255cr) and renewables **29%** (about ₹104cr, of which wind ₹80cr). The ₹6,721cr order book splits into water building ₹2,696cr, water O&M ₹998cr, renewables building ₹1,948cr and renewable power sales and O&M ₹1,079cr. The company does not split revenue by state.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Water and wastewater', share: 71 }, { label: 'Renewables', share: 29 }] },
            { caption: 'Order book by type, Q1 FY27 (₹6,721cr)', parts: [{ label: 'Water building', share: 40 }, { label: 'Water O&M', share: 15 }, { label: 'Renewables building', share: 29 }, { label: 'Renewable power and O&M', share: 16 }] },
        ],
        customers: ["**State and city bodies** such as UP Jal Nigam and Sardar Sarovar Narmada Nigam, under schemes like AMRUT 2, Namami Gange and state projects funded by World Bank, ADB or JICA loans.", "**NTPC** for battery-storage projects, plus private renewable developers through Suyog Urja.", "**Industrial clusters** that must treat their effluent."],
        difficulty: { level: 'Medium', text: "Bigger plants need technical and financial pre-qualification and a record of completed plants, but many contractors can build standard sewage plants, and solar and wind contracting is crowded." },
        moat: "O&M and 15-year HAM contracts keep it tied to clients long after a plant is built. But most work is won in lowest-price government tenders, and the timing of cash depends on state budgets.",
        salesDrivers: ["**Government water and sewage spending**: about ₹3,000cr of bids are under evaluation and ₹6,000–7,000cr more are due to be bid; with a roughly 20% win rate it targets ₹2,500cr of orders this year (₹256cr won so far).", "**Execution speed**: the FY27 target is ₹2,000cr of revenue and ₹260–270cr of profit, with about 40% expected in Q4 as NTPC battery-project purchases start in Q3.", "**Renewables**: Suyog Urja is expected to bring ₹400–450cr of revenue this year, with about ₹800cr of wind work in its pipeline.", "**New areas**: desalination, overseas bids, water reuse and biogas plants."],
        inputs: "**Pipes, pumps, motors, steel, cement and electrical equipment** for plants, plus solar panels, batteries and wind parts for renewables. Materials were 47% of sales in FY26.",
        costEffect: "**Partly passed on.** Tenders carry a price-variation clause linked to wholesale and consumer price indices, which covers part of any rise; management says the rest cost it about 1–2% of revenue. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (24% to 19%). **What happened:** India's steel-pipe price index, a rough guide to construction materials, was almost flat (100 to 98) from Q2 FY24 to Q1 FY27, and the margin went from 18.3% to 21.2%, but it swung between 18% and 29% in between. The recent fall from 27–29% came from lower-margin renewables (15–18%, against 21–22% in water), staff costs rising to 7% of sales from 3–3.5% as headcount grew from 900 to 2,300, and higher input costs.",
        competitors: [{ name: 'EMS Limited', note: 'Similar government sewer and sewage-plant contractor, focused on UP, Uttarakhand and West Bengal.' }, { name: 'Va Tech Wabag', note: 'Takes the larger, more complex plants and overseas desalination.' }, { name: 'Regional contractors and renewable EPC firms', note: 'Many bidders in lowest-price water tenders and in solar, wind and battery building.' }],
        position: "**A fast-growing mid-sized water contractor** with a ₹6,721cr order book, work in 17 states and five hybrid annuity projects.",
        money: "Screener shows **net debt of ₹20cr**, roughly debt-free, but borrowings rose to ₹422cr and cash fell to ₹335cr in FY26 as it built its own solar and battery plants (capex ₹182cr in FY26). Operating cash flow has been negative for three years because of unbilled revenue (work done and booked but not yet billed to or paid by the government) and receivables, which management calls bloated and hopes to fix by September. Suyog Urja costs ₹311cr in three parts: ₹111cr paid, about ₹100cr due after FY27 from its own cash and debt, and the rest after FY28. In mid-2025 it lost ₹11.15cr to unauthorised bank transfers (a cyber fraud), recovered ₹2.6cr and wrote off ₹8.75cr; its auditor reported the fraud to the government. It also stands behind ₹916cr of bank and corporate guarantees. Promoters hold **70.19%**, little changed from 70.02% in Dec 2024.",
        watch: ["Operating cash flow turning positive.", "Revenue of ₹2,000cr with a 19–20% margin in FY27.", "New orders toward the ₹2,500cr target."],
        charts: utilitiesCharts['Enviro Infra Engine.'],
    },
    {
        company: 'EMS Limited',
        inShort: ["**A Ghaziabad-based contractor that lays sewer lines and builds sewage and water plants** for state governments, mainly in Uttar Pradesh, Uttarakhand and West Bengal.", "**Good:** a ₹2,329cr order book, about three times FY26 revenue. **Bad:** revenue fell 25% in FY26 as rain, cautious officials in Uttarakhand and election rules in West Bengal stalled work; money is tied up with government clients, and the promoters have pledged shares.", "**Verdict: avoid.** Pledged shares, rising advances to group companies and a 333-day cash cycle are structural problems, not a bad patch."],
        tagline: "EPC contractor building sewer networks, sewage treatment plants, water-supply schemes, power lines and roads for government bodies, and running them afterwards.",
        revenue: '₹731cr (FY26, consolidated)',
        products: [
            { name: 'Sewer networks and sewage treatment plants', text: "Laying city sewer lines and building sewage treatment plants (which clean wastewater before release) and common effluent plants for industrial areas, including a large sewer-network project in Kolkata." },
            { name: 'Water-supply schemes', text: "Water treatment plants, pumping stations and pipelines that bring drinking water to towns." },
            { name: 'Power lines and roads', text: "Electrical transmission and distribution work, and road building and restoration, often the roads dug up for sewer lines." },
            { name: 'Operation and maintenance (O&M)', text: "Running the water and sewage schemes it has built for a fee." },
        ],
        revenueText: "Water and sewerage projects were **about 70% of FY25 revenue**; the rest came from power lines, roads and related civil work. The company does not give a regular segment split, and the state split given on the latest call is too garbled in the transcript to use. Revenue fell from ₹972cr in FY25 to **₹731cr in FY26**; Q1 FY27 revenue was ₹157cr.",
        mixes: [
            { caption: 'Revenue by division, FY25 (Screener summary)', parts: [{ label: 'Water and sewerage', share: 70 }, { label: 'Power lines, roads and other', share: 30 }], note: 'The 30% is the remainder; the company does not split it further.' },
        ],
        customers: ["**State and city bodies** in Uttar Pradesh (Ayodhya, Agra, Varanasi and others), Uttarakhand and West Bengal (Kolkata), paid through state and central schemes.", "**New states**: it is bidding in Bihar, Madhya Pradesh, Maharashtra and Karnataka to spread its risk."],
        difficulty: { level: 'Low', text: "Sewer lines and standard sewage plants are ordinary civil work. The main barriers are pre-qualification for bigger tenders and having enough working capital to wait for government payments." },
        moat: "Little lasting advantage: work is won in lowest-price tenders, and relationships with state departments are the main edge. Management admits competition means margins will stay somewhat below FY24 levels.",
        salesDrivers: ["**Turning orders into revenue**: design approval takes about six months after an order, then roughly 18 months of building; Q1 orders were ₹317cr, plus ₹158cr so far in Q2 and a Varanasi project over ₹100cr where it is the lowest bidder.", "**Weather and local politics**: the monsoon makes Q2 the weakest quarter; last year heavy rain and a halt on sewer work in Uttarakhand, and election rules in West Bengal, stopped work for months.", "**State-government payments**: when payments slow, work slows, which delays billing further.", "**FY27 target**: revenue of ₹900–950cr (back to FY25 levels), with most of it expected in Q3 and Q4."],
        inputs: "**Pipes, cement, steel, pumps and bitumen** for road restoration, plus site labour and hired machinery. Materials were 69% of sales in FY26.",
        costEffect: "**Partly protected, slowly.** Extra costs from disruptions can be claimed from the government, but claims are settled a year or two later. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (20% to 13%). **What happened:** India's steel-pipe price index, a rough guide to construction materials, eased from 100 to 96 between Q1 FY24 and Q1 FY27, yet the margin fell from 23.2% to 16.6%. The cause was stalled work, not materials: site staff, establishment costs and machinery rent carried on while work in Uttarakhand and West Bengal stopped, so each rupee of revenue carried more fixed cost.",
        competitors: [{ name: 'Enviro Infra Engineers', note: 'Similar government water contractor, now larger and more spread across states.' }, { name: 'Va Tech Wabag', note: 'Takes bigger and more technical plants.' }, { name: 'Regional civil contractors', note: 'Many bidders in lowest-price state tenders.' }],
        position: "**A small regional contractor** concentrated in UP, Uttarakhand and West Bengal, with a ₹2,329cr order book at end-July 2026.",
        money: "Screener shows **net debt of ₹95cr**, against ₹94cr of net cash in FY25: borrowings rose to ₹154cr and cash fell to ₹59cr. Operating cash flow was negative in FY26, and Screener's debtor days reached 193 in FY26 and its full cash cycle 333 days, far above the 120-day cycle management describes; it says it needs ₹300–350cr of working capital for ₹1,000cr of turnover. No capex plan. **Pledges:** the promoters had pledged about 25.5% of the company's shares by March 2026 and still had 14.5% pledged in August, although management had promised zero; the board also approved a ₹300cr fund-raising about ten days after management said no capital was needed. The Q1 FY27 call did not address either. **Money to group companies:** advances to EMS Industries, a 60%-owned paper-making subsidiary bought out of insolvency, rose to ₹88.6cr from ₹32.8cr in FY26, and to its sewage-annuity subsidiary to ₹42cr from ₹26cr. Promoters hold **69.7%**, unchanged since Sep 2023.",
        watch: ["Whether Q3 and Q4 deliver the ramp needed for ₹900–950cr of revenue.", "Promoter pledge levels in shareholding filings.", "Collections from state clients and debtor days."],
        charts: utilitiesCharts['EMS Limited'],
    },
    {
        company: 'Antony Waste Hand',
        inShort: ["**Antony Waste Handling Cell is one of India's top five municipal waste firms**: it collects and transports city rubbish, sweeps roads and runs processing plants, including a waste-to-energy plant near Pune.", "**Good:** long city contracts with yearly price escalation, new wins in Mumbai and Greater Noida, and cheaper debt after a refinancing. **Bad:** the Q1 FY27 margin fell to 16.8% on labour and one-off costs, and in July a landslide from an old dump killed nine people at its Pune waste-to-energy plant, which is shut until October.", "**Verdict: follow.** A sound business in a bad patch; I want to see margins recover before buying."],
        tagline: "Municipal solid-waste company: collection and transport, road sweeping, and processing plants (waste-to-energy, compost, refuse-derived fuel and construction-debris recycling).",
        revenue: '₹1,053cr (FY26, consolidated)',
        products: [
            { name: 'Collection and transport', text: "Door-to-door collection and trucking of city waste; 0.55 million tonnes in Q1 FY27 and ₹166cr of revenue, up 10%. It now serves seven wards under a new Mumbai (BMC) contract." },
            { name: 'Road sweeping', text: "Mechanical road sweeping, including a new ₹243cr, five-year Greater Noida contract using 16 electric sweepers, starting in Q3 FY27 (about ₹46cr in the first year)." },
            { name: 'Waste processing', text: "Mumbai's Kanjurmarg plant and others turn waste into compost and refuse-derived fuel (dry waste sold as fuel to cement kilns); it also cleared old dumps (biomining). Processing revenue was ₹75cr in Q1, up 3%." },
            { name: 'Waste-to-energy', text: "Waste-to-energy plants burn dry rubbish to make electricity. Its Pimpri Chinchwad (Pune) plant made over 20 million units in Q1; two more are being built in Kadapa and Kurnool, Andhra Pradesh." },
            { name: 'Construction-debris recycling', text: "A Mumbai plant recycling construction and demolition waste, now near its 600-tonne-a-day capacity after BMC made builders send debris for processing." },
        ],
        revenueText: "In Q1 FY27, **collection and transport gave 62% of revenue**, **processing 28%**, other operating income 7% and contracts and other 3%. Management wants to move from about 70:30 collection-to-processing toward 50:50, because processing earns more. At its Q4 FY26 call the company cited an order book of about ₹18,000cr (total value of its long contracts); it was not updated in Q1.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27', parts: [{ label: 'Collection and transport', share: 62 }, { label: 'Processing', share: 28 }, { label: 'Other operating income', share: 7 }, { label: 'Contracts and other', share: 3 }] },
        ],
        customers: ["**City corporations and authorities**: Mumbai (BMC), Pimpri Chinchwad, Thane, CIDCO (Navi Mumbai), Greater Noida, Jhansi and Varanasi, paid per tonne, per trip or per household.", "**Buyers of its products**: power buyers for its electricity and cement companies for refuse-derived fuel (realisation above ₹300 a tonne, up from about ₹250)."],
        difficulty: { level: 'Medium', text: "Running fleets, sorting plants and landfills at city scale needs capital, net worth and a track record to qualify for big-city tenders. Waste-to-energy plants are technically harder and carry real safety risks, as the landslide showed." },
        moat: "Long contracts (up to 20-plus years for processing) with escalation clauses, and strict qualification rules for big cities that keep out small truckers. The weakness is dependence on city finances and politics: payments take about 114 days, and the Kanjurmarg site is the subject of a Supreme Court case.",
        salesDrivers: ["**Tonnage and yearly price escalation**: existing contracts give about 6–9% growth a year.", "**New contracts**: another 10–15% a year, but lumpy; the BMC contract adds about 1,100 tonnes a day from Q3 and a Thane processing job 600–800 tonnes a day from Q3 or Q4.", "**Processing and waste-to-energy**: the Pune plant should restart in early October, and the Andhra Pradesh plants are under construction.", "**City rules**: BMC's order that builders process their debris filled the recycling plant."],
        inputs: "**Diesel, labour, hired vehicles and truck repairs**; materials were only 1% of sales in FY26. Staff costs were 33% of sales and power and factory costs (fuel, vehicle hire, repairs) 26%. Management says 60–70% of operating costs are labour, fuel and repairs.",
        costEffect: "**Mostly insulated from materials; partly protected on labour and fuel, with a lag.** Contracts carry yearly escalation covering about 80% of operating costs, but it is applied once a year, so sudden cost jumps hurt for a few quarters. **Rule of thumb:** a 10% rise in staff costs not recovered would cut the margin by about 3 points (20% to 17%). **What happened:** India's diesel price index, used because its trucks run on diesel, rose from 100 to 119 between Q1 FY24 and Q1 FY27, while Screener's margin fell from 21.1% to 14.3% (16.8% on the company's measure). Diesel mattered, but the Q1 drop came mainly from labour (34% of revenue against 30%, after a Maharashtra wage revision and the new labour codes) and about ₹10cr of one-off transport and disposal costs to close the CIDCO biomining job. The landslide came after the quarter and will hit Q2: about ₹2.5–3cr a month of fixed costs while the plant is shut, plus a ₹22–24cr write-down before insurance.",
        competitors: [{ name: 'Re Sustainability (formerly Ramky Enviro Engineers)', note: 'Larger waste-management group with landfills, waste-to-energy and industrial waste.' }, { name: 'Local transport contractors', note: 'Small truckers who win smaller towns but cannot qualify for big-city tenders.' }],
        position: "**One of the top five players in Indian municipal waste management**, with a 25-year track record and a strong base in Mumbai and Maharashtra.",
        money: "Screener shows **net debt of ₹336cr**; the company puts it at ₹324cr at June 2026 (debt ₹435cr, cash ₹111cr), about 0.4 times equity. It refinanced a ₹140cr waste-to-energy loan from 10.25% to 8.25% interest, paying a one-off ₹7cr prepayment charge. Borrowing is rising for the Andhra Pradesh plants and the new BMC contract. A ₹22–24cr write-down for landslide damage is expected in Q2, before insurance. No equity raise or pledges mentioned. Promoters hold **46.08%**, little changed from 46.23% in Sep 2023.",
        watch: ["Pune waste-to-energy plant restarting in October, and the final write-down and insurance recovery.", "Margin back above 20% as wage escalations are billed (management expects FY28).", "The Supreme Court case on the Kanjurmarg site."],
        charts: utilitiesCharts['Antony Waste Hand'],
    },
];

export const utilitiesBusinesses = { intro, profiles };
