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
        inShort: ["**A global water-treatment specialist** that designs, builds and runs drinking-water, sewage and seawater desalination plants in India, the Middle East, Africa and Europe.", "**Good:** a record ₹19,400cr order book, 21% revenue growth in Q1 FY27 and ₹903cr of net cash. **Watch:** much of the growth now comes from the Middle East, Screener's margin (which leaves out foreign-exchange gains) slipped to 9% in Q1, and receivables are growing faster than sales: only 44% of five years' operating profit arrived as cash.", "**Verdict: follow.** The best business in the sector and the closest to a buy, but the price asks for a little more than the ~15% a year I expect; buy on weakness."],
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
        watch: ["Perur desalination plant moving into commissioning.", "The margin without currency gains back above 11% (the company guides 13–14%), and O&M rising toward 20% of revenue.", "Receivables, retention money and disputed tax claims (₹228cr) against revenue growth.", "Execution in Kuwait and the UAE amid Middle East tensions."],
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
        watch: ["Losses in treatment solutions shrinking as legacy projects finish.", "Roha plant use and the chemicals margin.", "A return to double-digit margins, which management says will take time.", "Operating cash turning positive and borrowings (₹482cr at March, tripled in two years) no longer rising."],
        charts: utilitiesCharts['ION Exchage'],
    },
    {
        company: 'Enviro Infra Engine.',
        inShort: ["**Enviro Infra Engineers builds and runs sewage and water-treatment plants for state governments** in 17 states, and has added solar, wind and battery-storage contracting.", "**Good:** a ₹6,721cr order book, 49% revenue growth in Q1 FY27 and a ₹2,000cr revenue target for FY27. **Bad:** it missed FY26 badly, trimmed its FY27 profit and margin guidance within a quarter, slow state payments have kept operating cash flow negative for three years, and it lost ₹11cr to a cyber fraud.", "**Verdict: wait.** The price asks for less than the ~15% a year I expect, but I want to see cash come in from state clients first."],
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
        watch: ["Operating cash flow turning positive in the half-year to September, as promised, and unbilled work falling from 195 days toward 90.", "Guarantees of ₹916cr against a net worth of ₹1,237cr.", "Revenue of ₹2,000cr with a 19–20% margin in FY27.", "New orders toward the ₹2,500cr target."],
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
        inShort: ["**Antony Waste Handling Cell is one of India's top five municipal waste firms**: it collects and transports city rubbish, sweeps roads and runs processing plants, including a waste-to-energy plant near Pune.", "**Good:** long city contracts with yearly price escalation, new wins in Mumbai and Greater Noida, and cheaper debt after a refinancing. **Bad:** the Q1 FY27 margin fell to 16.8% (14% filed) on labour and one-off costs, and in July a landslide from an old dump killed nine people at its Pune waste-to-energy plant, which is shut until October. It will borrow most of ₹650–700cr for plants that earn nothing before FY29, and a Supreme Court case could close its Kanjurmarg landfill.", "**Verdict: follow.** A sound business in a bad patch; I want to see margins recover before buying, even though the price fits since 9 Oct 2026."],
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
        watch: ["Pune waste-to-energy plant restarting in October, and the final write-down and insurance recovery.", "Margin back above 20% as wage escalations are billed (management expects FY28).", "The Supreme Court case on the Kanjurmarg site.", "Debt as the Andhra Pradesh plants are built: CARE would downgrade if the margin stays below 16% or debt tops three times operating profit."],
        charts: utilitiesCharts['Antony Waste Hand'],
    },
    {
        "company": "Vedanta Power",
        "inShort": [
            "**A coal-fired power producer demerged from Vedanta in May 2026**, owning four plants (4,180 MW) in Punjab, Andhra Pradesh, Odisha and Chhattisgarh; India's fifth-largest private thermal producer by its own count.",
            "**Good:** the 1,980 MW Talwandi Sabo plant is contracted to Punjab until 2041 with fuel costs passed through, 74% of sales are under contracts, 85% of coal comes from Coal India linkages, and power demand is at a record. **Bad:** a loss of ₹1,686cr in FY26 after ₹2,295cr of one-offs (Talwandi Sabo's mega power benefits reversed and an arbitration settled) and another ₹423cr loss in Q1 FY27; **net debt of ₹7,621cr is about 5.4 times operating profit**; a 600 MW Sakti unit has been down since April; and the promoter's whole stake is pledged for the parent's debt.",
            "**Verdict: avoid.** A leveraged, loss-making coal generator whose control is collateral for Vedanta Resources' borrowing, priced at about 14 times operating profit."
        ],
        "tagline": "A thermal power company that sells electricity from 4,180 MW of coal plants to state utilities under long contracts and on the power exchange, adding a 600 MW unit at Sakti and planning 7,200 MW more by FY33.",
        "revenue": "₹8,799cr (FY26, consolidated)",
        "products": [
            {
                "name": "Talwandi Sabo, Punjab (1,980 MW)",
                "text": "Three 660 MW supercritical units, fully contracted to Punjab's PSPCL until 2041; fixed charges are paid if availability is at least 80% and coal costs pass through. It supplies about 35% of Punjab's power. Availability was 83% in FY26 and 86% in Q1 FY27; losing 'mega power' status means capacity charges are under-recovered."
            },
            {
                "name": "Meenakshi Energy, Andhra Pradesh (1,000 MW)",
                "text": "A wholly owned subsidiary; 300 MW is contracted until 2031 (part of a 500 MW, five-year Tamil Nadu deal shared with Sakti) and the rest sells short-term. It still uses about 35% imported coal, moving to 100% Indian coal. Record EBITDA of ₹112cr in Q1 FY27."
            },
            {
                "name": "Jharsuguda, Odisha (600 MW)",
                "text": "Fully contracted to Odisha's GRIDCO until 2037 with fuel pass-through, availability 93% in Q1. A tribunal ruled it is owed about ₹300cr in a short-supply dispute (now in the Supreme Court) and the state regulator allowed about ₹40cr a year of ash-disposal cost."
            },
            {
                "name": "Sakti, Chhattisgarh (600 MW running, 600 MW being built)",
                "text": "Called Athena Chhattisgarh Power by CRISIL; started in Q2 FY26 with 200 MW contracted until 2031. Unit 1 stopped after a boiler accident on 14 April 2026 (sales fell to 464 MU from 1,087 MU a quarter earlier); Unit 2 is due in Q4 FY27. A further 7,200 MW here is planned from FY30, not yet board-approved."
            }
        ],
        "revenueText": "It sells only electricity. **74% of sales are under long or medium-term contracts** with Punjab, Odisha, Tamil Nadu (500 MW for five years) and Kerala (100 MW for one year at about ₹5.96 a unit); the rest goes to the power exchange or short-term buyers. In FY26 it sold **18,018 million units at about ₹4.9 a unit against ₹4.0 of cost**; Talwandi Sabo was 55% of volume. Q1 FY27 sales rose 38% to 5,224 MU and revenue 31% to ₹2,607cr, but EBITDA fell to ₹291cr after ₹226cr of one-offs (the Sakti outage and an availability dispute).",
        "mixes": [
            {
                "caption": "Power sold by plant, FY26 (company presentation)",
                "parts": [
                    {
                        "label": "Talwandi Sabo",
                        "share": 55
                    },
                    {
                        "label": "Meenakshi",
                        "share": 16
                    },
                    {
                        "label": "Sakti",
                        "share": 15
                    },
                    {
                        "label": "Jharsuguda",
                        "share": 14
                    }
                ]
            },
            {
                "caption": "Operating capacity by plant, June 2026 (4,180 MW)",
                "parts": [
                    {
                        "label": "Talwandi Sabo",
                        "share": 47
                    },
                    {
                        "label": "Meenakshi",
                        "share": 24
                    },
                    {
                        "label": "Jharsuguda",
                        "share": 15
                    },
                    {
                        "label": "Sakti",
                        "share": 14
                    }
                ]
            }
        ],
        "customers": [
            "**Punjab State Power Corporation (PSPCL)**, the buyer of all Talwandi Sabo output and the largest customer; it has paid on time apart from disputed amounts, but won a Supreme Court case in May 2026 that cost the company about ₹127cr plus late-payment charges.",
            "**GRIDCO (Odisha)** for Jharsuguda, and **Tamil Nadu and Kerala utilities** for Meenakshi and Sakti.",
            "**Power exchange buyers** for the roughly 26% of sales not under contract."
        ],
        "difficulty": {
            "level": "High",
            "text": "A coal plant takes years, thousands of acres, coal linkages and grid connections to build, and few private companies are adding thermal capacity. But the product is plain electricity, much of the price is set by regulators or the exchange, and renewables with batteries compete for new contracts."
        },
        "moat": "Long fixed-charge contracts at Talwandi Sabo and Jharsuguda, Coal India linkages for about 85% of capacity and 29% of capacity sited near coal mines give it steady volume. It has no pricing power: contracted tariffs are regulated and the rest earns whatever the exchange pays.",
        "salesDrivers": [
            "**Power demand**: India hit a record 271 GW peak in May 2026, and exchange prices were about ₹1 a unit higher than a year earlier, per management.",
            "**Plant availability**: fixed charges at Talwandi Sabo depend on availability of at least 80%.",
            "**Sakti**: Unit 1 restart (targeted end-September or early October 2026) and Unit 2 in Q4 FY27 add up to 1,200 MW.",
            "**New contracts**: management is choosing to wait for 'respectable' tariffs on uncontracted capacity rather than lock in low rates.",
            "**Regulatory rulings**: the loss of mega power status, the PSPCL penalty and the Jharsuguda refund all move earnings."
        ],
        "inputs": "**Coal**: about 85% from long-term Coal India linkages (Mahanadi, South Eastern and Northern Coalfields); Meenakshi still burns about 35% imported coal. Power and fuel were about 68% of sales in Q4 FY26 and 79% in Q1 FY27.",
        "costEffect": "**Mostly passed on for the contracted plants, not for the rest.** Talwandi Sabo and Jharsuguda (62% of capacity) pass fuel costs to the buyer; Meenakshi and Sakti sell at fixed competitive tariffs or market prices and bear coal costs themselves. **Rule of thumb:** a 10% rise in fuel costs not passed on would cut the margin by about 7 points (22% to 15%), but only on the unprotected part. **What happened:** imported coal prices rose over 60% in the year to Q1 FY27; Meenakshi cut its coal cost 12% by switching to Indian coal, but company-wide cost per unit rose from ₹4.0 in FY26 to ₹4.4 in Q1 FY27 against realisations of ₹4.9 to ₹5.0. The operating margin fell from 22% in Q4 FY26 to 11% in Q1 FY27, mainly because of the Sakti outage.",
        "competitors": [
            {
                "name": "Adani Power",
                "note": "India's largest private thermal producer, also adding large capacity."
            },
            {
                "name": "JSW Energy, Tata Power",
                "note": "Private generators with thermal and growing renewable fleets."
            },
            {
                "name": "NTPC",
                "note": "The state-owned giant; sets the benchmark for regulated thermal tariffs."
            },
            {
                "name": "Renewables with batteries",
                "note": "Firm solar-wind-battery projects (such as Juniper Green's) now bid for round-the-clock contracts that once went to coal."
            }
        ],
        "position": "**India's fifth-largest private thermal power producer** (company's claim), with 4,180 MW running and 4,780 MW expected by March 2027.",
        "money": "The company's own net debt walk shows **₹7,621cr of net debt at March 2026** (₹8,466cr of debt, ₹845cr of cash) and ₹7,704cr at June; net debt was 5.38 times operating profit in Q1. Debt and principal-plus-interest payments of ₹1,600–1,700cr this year are rated AA- (CRISIL, ICRA); a Vedanta Ltd guarantee lifts some loans to AA+ (CE). FY26 ended with a **net loss of ₹1,686cr** after ₹2,295cr of one-offs, and Q1 FY27 lost ₹423cr after ₹487cr of one-offs (including the ₹127cr Supreme Court penalty). Free cash before capex was just ₹26cr in Q1. Sakti Unit 2 still needs ₹1,745cr of its ₹5,209cr budget, and a 7,200 MW expansion is planned from FY30. **The promoter's entire 56.38% stake is encumbered for parent Vedanta Resources' loans and bonds.** No dividend yet.",
        "watch": [
            "Sakti Unit 1 restart in the Q2 results on 29 October and Unit 2 by Q4 FY27.",
            "Net debt falling below 4 times operating profit, and any group demand for dividends to service Vedanta Resources' debt.",
            "Supreme Court outcomes on the Jharsuguda refund and Talwandi Sabo disputes, and the ED matter."
        ],
        charts: utilitiesCharts["Vedanta Power"],
    },
    {
        "company": "Juniper Green Energy",
        "inShort": [
            "**A renewable power producer** that builds and owns solar, wind and battery plants and sells their power to state and central utilities on 25-year contracts, specialising in 'firm' power (solar, wind and batteries combined to supply set hours). Listed in August 2026.",
            "**Good:** about 2,575 MW running with a run-rate operating profit of ₹1,620cr that management expects to reach ₹2,700–2,750cr by March 2027 and ₹4,500cr in FY28; 98% of capacity on long contracts; a 90% operating margin and buyers paying in 19 days. **Watch:** borrowings of ₹13,761cr at March 2026 against ₹40cr of FY26 profit, interest that takes two-thirds of operating profit, a 3% return on capital, two state utilities giving 86% of FY26 revenue, and growth that needs about ₹6,000cr more capex this year.",
            "**Verdict: wait.** The contracts are good, but at well over 250 times earnings and 35 times operating profit the price already counts on 6 GW being built on time; I want to see the new firm-power plants earn before buying."
        ],
        "tagline": "An independent power producer backed by Singapore's AT Holdings and Vitol, building wind-solar hybrid and firm-and-dispatchable (FDRE) projects with batteries in Gujarat, Maharashtra, Rajasthan and Madhya Pradesh, with an 11.2 GW portfolio.",
        "revenue": "₹719cr (FY26, consolidated)",
        "products": [
            {
                "name": "Solar, wind and hybrid power",
                "text": "About 2,575 MW commissioned by August 2026 (760 MW added since April); fleet load factor 30.2% in Q1 FY27 and 944 million units generated, up 72%. The 190 MW wind fleet ran at 49.9%."
            },
            {
                "name": "Firm and dispatchable power (FDRE)",
                "text": "Solar, wind and batteries combined so it can promise four peak hours a day (two in the evening, two in the morning). It commissioned India's first FDRE project under an SJVN tender in Q1 FY27; FDRE and hybrid make up 84% of the 11.2 GW portfolio."
            },
            {
                "name": "Battery storage",
                "text": "About 0.5 GWh running, 4.5 GWh ordered from Envision (AESC cells) at about $100–110 a kWh all-in, aiming for 4.5 GWh by June 2027 and 10 GWh by March 2028. About 1.5 GWh not yet tied to a project will sell power on the exchange at night for one to two years."
            },
            {
                "name": "Round-the-clock ('thermal mimic') power",
                "text": "Won a SECI tender in August 2026 to supply power like a coal plant (about 75% of the year) from about 870 MW of solar and wind plus 2.2 GWh of batteries at ₹5.26 a unit; the PPA is not yet signed."
            }
        ],
        "revenueText": "It earns a fixed tariff per unit for 25 years: the blended portfolio tariff is about **₹3.7 a unit** (ICRA puts contracted tariffs at ₹2.63–4.76). **Maharashtra's MSEDCL and Gujarat's GUVNL gave 86.1% of FY26 revenue**; as new projects start, central buyers (SECI, NTPC, NHPC, SJVN) take over, at about 55% of contracted capacity in February 2026. Revenue depends on how much the sun and wind deliver, since tariffs are single-part. Of the 11.2 GW portfolio, more than 6.2 GW is operating or under signed PPAs and about 5 GW is awarded but unsigned. Q1 FY27 operating income was ₹291cr, up 81%.",
        "mixes": [
            {
                "caption": "Contracted capacity by buyer, February 2026 (ICRA)",
                "parts": [
                    {
                        "label": "Central buyers (SECI, NTPC, NHPC, SJVN)",
                        "share": 55
                    },
                    {
                        "label": "GUVNL (Gujarat)",
                        "share": 20
                    },
                    {
                        "label": "MSEDCL (Maharashtra)",
                        "share": 18
                    },
                    {
                        "label": "Others",
                        "share": 7
                    }
                ],
                "note": "By revenue, MSEDCL and GUVNL were 86.1% of FY26 because the central-buyer projects are newer."
            },
            {
                "caption": "Portfolio by project type, August 2026 (company call)",
                "parts": [
                    {
                        "label": "FDRE and wind-solar hybrid",
                        "share": 84
                    },
                    {
                        "label": "Plain solar, wind and other",
                        "share": 16
                    }
                ]
            }
        ],
        "customers": [
            "**State utilities**: MSEDCL and GUVNL (rated AA-), 86.1% of FY26 revenue; both have paid on time, and receivables were 19 days at June 2026.",
            "**Central agencies**: SECI, NTPC, NHPC and SJVN (mostly AAA-rated), buyers for most of the projects being built; 98% of contracted capacity is with buyers rated A or better.",
            "**Power exchange**: a small Bikaner merchant plant and spare batteries sell at market prices."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Anyone with capital can bid for solar and wind contracts, and tariffs are won in reverse auctions. Firm-power projects are harder: they need land (14,000 acres banked), grid connections (4.5 GW of spare connectivity) and the skill to run batteries to a strict schedule, and Juniper is among the first to deliver them."
        },
        "moat": "An early lead in firm-power contracts, an in-house construction team and surplus grid connectivity, which management says earned higher returns on its first FDRE projects. Beyond that, the product is regulated electricity sold at auction-set prices, and new tenders are expected to earn only 'higher teens' returns.",
        "salesDrivers": [
            "**Commissioning**: 2 GW in FY27 and about 6 GW operating by FY28 with a run-rate EBITDA of about ₹4,500cr, per management.",
            "**PPA signing**: about 5 GW of awarded capacity still lacks signed contracts; the government now asks SECI to line up buyers before tenders, which management expects to help.",
            "**Weather and plant performance**: single-part tariffs mean less sun or wind means less revenue; FDRE contracts carry penalties for missed peak hours.",
            "**Grid**: about 2–2.5% of output was curtailed on a 50 MW Bikaner plant using temporary grid access; management is adding batteries there.",
            "**Merchant battery income**: charging at about ₹1–1.5 a unit in the day and selling at night, at up to ₹20 on the high-price market."
        ],
        "inputs": "No fuel. The main costs are the plants: **solar modules (closed at about ₹12.1–12.2 a watt for imported-cell modules; about ₹17 assumed for Indian-cell modules)**, wind turbines (Envision) and **batteries at about $100–110 a kWh installed**. Capex was about ₹16,000cr at June 2026 and is planned at about ₹22,000cr by March 2027. Running costs were only 15% of FY26 sales.",
        "costEffect": "**Revenue is fixed by contract, so the swing factor is interest, not inputs.** Over 95% of its debt is at floating rates while tariffs are fixed; operating-portfolio debt costs about 8.5% after refinancing ₹1,700cr below 8%. **Rule of thumb:** a 1-point rise in interest rates on ₹13,761cr of borrowings would cost about ₹138cr a year, more than three times FY26 profit of ₹40cr. Module and battery prices matter only for plants not yet built: cheaper batteries made it switch new projects from wind-heavy designs to solar plus batteries.",
        "competitors": [
            {
                "name": "ACME Solar Holdings",
                "note": "A listed peer also winning FDRE and battery tenders; valued at about 52 times earnings at Juniper's IPO."
            },
            {
                "name": "NTPC Green Energy, Adani Green Energy",
                "note": "Much larger renewable producers bidding in the same central tenders."
            },
            {
                "name": "KPI Green Energy",
                "note": "A smaller Gujarat-based listed peer, about 16 times earnings at Juniper's IPO."
            },
            {
                "name": "Clean Max Enviro Energy",
                "note": "Sells green power to companies rather than utilities, at about ₹4 a unit."
            }
        ],
        "position": "**A top-10 Indian renewable producer by portfolio** (its IPO claim), and among the first to commission an FDRE project.",
        "money": "Screener shows **₹13,761cr of borrowings** at March 2026, up from ₹5,971cr a year earlier; the company put **net debt at ₹11,217cr at June 2026** (₹7,183cr on operating projects), 3.24 times net worth, before the IPO. The **₹1,800cr IPO in August 2026 at ₹225 (all new shares)** went mainly to repay about ₹1,412cr of debt, lifting net worth to about ₹5,200cr. Interest was ₹400cr against ₹608cr of operating profit in FY26 and ₹176cr against ₹261cr in Q1 FY27, so FY26 profit was only ₹40cr; free cash was −₹6,162cr in FY26 as it built plants. ICRA rated the parent A+ (Positive) in February 2026, with debt at about 18 times operating profit in H1 FY26 on its measure. Promoters hold **85.94%**, and some promoter shares are pledged to IREDA.",
        "watch": [
            "2 GW commissioned in FY27 and run-rate EBITDA near ₹2,700cr by March 2027.",
            "PPAs signed for the thermal-mimic award and the remaining FDRE capacity.",
            "Interest cover and profit after tax as the debt-funded plants start earning."
        ],
        charts: utilitiesCharts["Juniper Green Energy"],
    },
];

export const utilitiesBusinesses = { intro, profiles };
