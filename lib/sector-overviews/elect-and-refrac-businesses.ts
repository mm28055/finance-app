import { BusinessProfile, OverviewSection } from './types';
import { electAndRefracCharts } from './card-data/elect-and-refrac';

// Tab 2 of the Elect and Refrac note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' Q1 FY27 presentations and calls; where a split is not
// disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are what each company published in its latest presentation or said on its call.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Both products are consumables: they are destroyed in use and must be bought again and again, so demand tracks how much steel is made.",
        ],
        points: [
            {
                label: 'Graphite electrode',
                text: "A huge carbon rod, up to about 0.8 m across and roughly 3 m long, that carries electric current into an **electric arc furnace**. The arc between the electrodes melts scrap steel at over 1,600°C, and the tips burn away as they work: a furnace uses roughly 1.5–2 kg of electrode per tonne of steel. It is made from petroleum **needle coke**, baked and then heated to about 3,000°C (graphitised) over several months. Very few companies can do this at scale.",
            },
            {
                label: 'Refractories',
                text: "Materials that survive extreme heat, used to line anything that holds molten metal or burning fuel: blast furnaces, steel ladles, cement kilns, glass furnaces. They come as **shaped bricks**, as **monolithics** (castables and ramming masses poured or sprayed into place, like concrete) and as **flow-control products**. They wear out and are replaced every few weeks to few years. Steel uses about 10–15 kg per tonne; cement about 1 kg.",
            },
            {
                label: 'Flow control',
                text: "The precision end of refractories: slide gates, nozzles, shrouds and stoppers that control how molten steel pours from the ladle into the tundish and the casting machine, and porous plugs that stir it with gas. A failure can stop a caster or cause a breakout, so steelmakers pay for proven performance. It is the most profitable part of the refractory business.",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Where the price is set, and how often it is reset, decides who carries cost increases.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'Who carries a cost spike'],
                rows: [
                    ['**Global electrode contracts**', 'HEG (since 1 Sep 2026, HEG Graphite)','Global price set by a handful of producers; orders booked one to two quarters ahead', 'The producer briefly, then passed on at the next booking'],
                    ['**Refractory supply contracts**', 'RHI Magnesita, IFGL', 'Rate contracts negotiated with each steel or cement plant, often annually', 'The supplier, until it renegotiates'],
                    ['**Cost-per-tonne and service contracts**', 'RHI Magnesita (4PRO), IFGL (refractory management)', 'Supplier manages the customer’s refractories for a fee per tonne of steel, over several years', 'Shared, but the relationship is much harder to replace'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'HEG',
        tagline: "An LNJ Bhilwara group company that split in two on 1 September 2026. The listed share is now HEG Advanced Materials (battery materials and clean power); the graphite-electrode business, with the world's largest single-site plant, moved to HEG Graphite (renamed HEG Limited on 12 October 2026), which lists in the second half of October.",
        revenue: '₹2,568cr (FY26, consolidated, before the split; almost all electrodes)',
        products: [
            { name: 'Ultra-high-power graphite electrodes (now HEG Graphite)', text: "For electric arc furnaces, from a 100,000-tonne plant at Mandideep, Madhya Pradesh, growing to 115,000 tonnes by early 2028 (₹650cr, from its own cash). It sold 92,800 tonnes in FY26 (+20%). It says it is among the top three electrode producers outside China." },
            { name: 'Captive power (now HEG Graphite)', text: "About 80 MW of its own thermal and hydro power, which matters because graphitising electrodes uses enormous amounts of electricity." },
            { name: 'Investments (now HEG Graphite)', text: "A 9.98% stake in US rival GrafTech, bought for ₹283cr in May 2025, which went with the electrode company. Its value swings the reported profit every quarter." },
            { name: 'HEG Advanced Materials (the listed share)', text: "Battery-anode material (TACC: a 20,000-tonne, ₹2,200–2,300cr plant, production from Q1 FY28), graphene, battery packs and storage (Replus, 74%; a ₹217.56cr battery-bank order from Indus Towers in September 2026), and 292 MW of operating hydro and wind power from the merged Bhilwara Energy, with a 76 MW hydro and 300 MWp solar project under way." },
        ],
        revenueText: "Almost all revenue before the split was electrodes. **Exports were about two-thirds of FY26 sales**, to about 35 countries. The FY26 annual report gives the split: India ₹847cr (33%), **the US ₹440cr (17%)**, Turkey ₹183cr, Egypt ₹95cr, Korea ₹89cr, Spain ₹81cr, Japan ₹67cr, and the rest spread widely; no customer is above 10%. The Middle East and North Africa take about 20% of volume. The listed HEG Advanced Materials has no anode revenue until FY28; its current income is mainly hydro power.",
        mixes: [
            { caption: 'Electrode sales by destination, FY26 (annual report, standalone)', parts: [{ label: 'India', share: 33 }, { label: 'US', share: 17 }, { label: 'Turkey', share: 7 }, { label: 'Other exports', share: 43 }], note: 'Other exports include Egypt, Korea, Spain, Japan and the UAE, and a small unallocated amount.' },
        ],
        customers: [
            "**Arc-furnace steelmakers worldwide**: it says a large part of its output goes to the world's top 20 steel companies.",
            "Sold on contracts booked about one to two quarters ahead, so price changes reach revenue with a lag.",
            "Competes with GrafTech (US), Tokai Carbon (Japan), Resonac (Japan) and Graphite India.",
        ],
        difficulty: { level: 'Very high', text: "Electrodes need scarce needle coke, a production cycle of several months, very large power supplies and decades of process knowledge. HEG says it was itself the last new entrant in the Western world, in 1976; capacity outside China has shrunk since." },
        moat: "Scale and cost: the largest single plant, captive power and high utilisation make it one of the lowest-cost producers, so it can keep selling when others cut output. Few alternatives exist for buyers outside China.",
        inShort: ["**Split on 1 September 2026**: the listed share is now HEG Advanced Materials (battery anode, battery packs, hydro and solar power); the electrode plant, about two-thirds exported, moved to HEG Graphite, listing in late October.", "**Good:** the electrode business is one of five producers that matter outside China, running above 90% full. **Watch:** the anode plant has no signed buyers yet, debt rises to about ₹1,500cr by March 2027, and the dashboard's market value and P/E are pre-split.", "**Verdict: wait.** Value each half once it trades and reports on its own."],
        salesDrivers: ["**Electrode prices**: set by global arc-furnace utilisation outside China; booked one to two quarters ahead, so changes reach revenue with a lag.", "**Volume is nearly capped**: the plant runs at 90–95%; 15,000 more tonnes arrive by early 2028.", "**The shift to arc furnaces** in Europe and the US, helped by Europe's carbon border tax.", "**Where it sells**: the US 17% of FY26 sales, now facing a preliminary 6.99% US duty; the Middle East and North Africa about 20% of volume.", "**For the listed HEG Advanced Materials**: anode sales targeted at ₹600–700cr in FY28 on non-binding MOUs; hydro free cash of ₹320–350cr a year."],
        inputs: "**Needle coke** (a special petroleum coke bought from a few global suppliers) and pitch, plus **electricity**: graphitising electrodes uses enormous power, which is why it runs about 80 MW of its own plants. Materials were 41% of sales and power and factory costs 24% in FY26.",
        costEffect: "**Passed on with a lag of a few months.** It is booked to September at older prices and will raise prices on later orders; rivals have announced rises of $600–1,200 a tonne. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points, and power costs add to that. **What happened:** India's petroleum-coke price index rose about a quarter over the chart period, and its quarterly margin swung with electrode prices (Q4 FY26 went negative only because of the GrafTech loss); costlier coke reaches production around November–January.",
        competitors: [{ name: 'GrafTech (US)', note: 'The largest Western producer; HEG owns 9.98% of it.' }, { name: 'Tokai Carbon, Resonac (Japan)', note: 'The other global producers.' }, { name: 'Graphite India', note: 'India’s other electrode maker.' }, { name: 'Chinese producers', note: 'Large capacity, mostly serving China and nearby markets.' }],
        position: "**One of the five electrode producers that matter outside China**, with the largest single plant and among the lowest costs.",
        money: "Before the split, the company held an ₹858cr treasury in June 2026 against ₹783cr of short-term export loans, so it was roughly neither net cash nor net debt; management's ‘debt-free’ means no long-term loans. The listed HEG Advanced Materials expects about ₹1,500cr of gross debt by March 2027 for the anode plant, backed by a ₹1,230cr guarantee to SBI, and will repay ₹600cr of Bhilwara Energy's acquisition debt. The merger issued about 13cr new shares, lifting promoters from 56.3% to **60.7%**. Contingent liabilities are about ₹110cr, mostly income tax; the audit opinion is unmodified.",
        watch: ["The electrode company's listing price in late October (as HEG Limited, the name HEG Graphite took on 12 October) and each company's first results of its own.", "Signed offtake contracts for the anode plant.", "US final duties by about 7 December, and electrode price rises against needle-coke costs from November."],
        charts: electAndRefracCharts['HEG'],
    },
    {
        company: 'RHI Magnesita',
        tagline: "India's largest refractory maker (about 30% market share, 512,000 tonnes of capacity), the Indian arm of the Austrian RHI Magnesita group, which it can draw on for technology and products.",
        revenue: '₹4,020cr (FY26, consolidated)',
        products: [
            { name: 'Steel refractories', text: "Bricks, castables and mixes for blast furnaces, converters, arc furnaces and ladles, including ironmaking, direct-reduced iron (DRI) and pellet plants." },
            { name: 'Flow control', text: "Slide gates, nozzles and isostatic products for continuous casting, made at Bhiwadi and Jamshedpur. Its highest-margin products and the area where it has been winning share, but the company does not publish their share of revenue." },
            { name: 'Cement, glass and non-ferrous', text: "Kiln linings for cement plants (strengthened by the Dalmia OCL acquisition in 2023), glass-furnace blocks, and linings for copper and aluminium smelters, coke ovens and petrochemicals." },
            { name: '4PRO services', text: "Running a customer’s refractory operation: installation, robots (India’s first robotic caster operation, at JSW, on a five-year contract), kiln-lining scans (LES) and supply management." },
        ],
        revenueText: "**Steel is about 87% of revenue.** The Industrial division (cement, glass, non-ferrous and petrochemicals) was about 13% of FY26 revenue, and cement alone fell from about 13% to 11% as the company walked away from low-price orders. The former Dalmia business, now a subsidiary, grew revenue 14% to ₹1,153cr in FY26 at a 10.8% margin. FY26 shipments were 523,000 tonnes (+5%); Q1 FY27 shipments fell 6% to 122,000 tonnes while the average price rose 12%. Exports are small and falling. Project orders (new plants, coke ovens, glass furnaces) add lumps on top of steady maintenance demand. (A ‘35% flow control’ figure quoted in some transcripts refers, in the official record, to the core business, so it is not used here.)",
        mixes: [
            { caption: 'Revenue by end market, FY26 (annual report)', parts: [{ label: 'Steel', share: 87 }, { label: 'Industrial: cement, glass, non-ferrous, petrochemicals', share: 13 }] },
        ],
        customers: [
            "**Integrated steel producers** such as JSW and public-sector steelmakers (it is negotiating a coke-oven order of more than 30,000 tonnes, still unsigned in August 2026).",
            "**Cement companies**, **aluminium and copper smelters** and **glass makers**; 850+ customers in all.",
            "Sold through annual supply contracts, cost-per-tonne contracts and one-off project orders; many long-term contracts lack price-escalation clauses (annual report). 8 plants across India, two quartzite mines in Odisha acquired with Dalmia (opening around the end of Q2 FY27), and an R&D centre at Bhiwadi.",
        ],
        difficulty: { level: 'High', text: "Standard bricks and castables are made by many producers. Flow-control products, isostatic parts and complete lining systems need group technology, precise manufacturing and on-site expertise that few competitors match in India." },
        moat: "Scale (about 30% share), the parent's global product range and R&D, and a growing service model that puts its people and robots inside customers' plants. Captive quartzite and the Minpro recycling venture should lower costs. Pricing power is still limited because competition is heavy.",
        inShort: ["**India's largest refractory maker** (about 30% share), the Indian arm of Austria's RHI Magnesita, lining furnaces, ladles and kilns for steel, cement and glass.", "**Good:** service contracts and flow-control products are raising switching costs. **Bad:** only 6–11% return on capital since the Dalmia deal, and Q1 volume fell 6% (the growth was a temporary surcharge on price).", "**Verdict: follow.** The best business here, but the price needs about {need:RHI Magnesita|22}% a year against my ~14%."],
        salesDrivers: ["**Indian steel and cement output**: volume guided at market growth plus 1–2 points (7–8% this year, cut from about 9%); Q1 volume fell 6%.", "**New plants and projects**: coke-oven, silica and glass orders expected in the second half; the coke-oven order, once signed, would load its kilns for 14–16 months.", "**Flow control**: its highest-margin products, where it has been gaining share (share with one big steel group nearly doubled in six months).", "**4PRO services**: running customers' refractory work under multi-year contracts, such as India's first robotic caster operation at JSW."],
        inputs: "**Magnesite, alumina, quartzite, zircon and graphite**, much of it imported, plus fuel (LPG, gas) for kilns. Materials were 61% of sales in FY26. It is opening its own quartzite mine and a recycling venture (Minpro).",
        costEffect: "**Partly passed on.** Q1's price rise was a 'war surcharge' rather than a permanent increase, and magnesite rose another 6–8% in two months. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (11% to 5%). **What happened:** India's alumina price index was flat over the chart period and its margin stayed around 11–14%; the long fall from 19% in FY22 came from adding the lower-margin Dalmia business and more competition, not input prices.",
        competitors: [{ name: 'Vesuvius (Foseco), Calderys', note: 'Multinational rivals, strongest in flow control and monolithics.' }, { name: 'Krosaki, Shinagawa, IFGL', note: 'Japanese and Indian specialists.' }, { name: 'Chinese suppliers', note: 'Cheap imports of standard bricks.' }],
        position: "**India's largest refractory maker**, with 8 plants and its parent's global product range.",
        money: "Net debt about ₹57cr at FY26 (Screener, counting treasury investments); the company reported net cash of about ₹140cr in June 2026 (gross cash ₹452cr). Capex is modest, about ₹80–100cr a year (cut from ₹150cr). It wrote down the Dalmia business by ₹556cr in Q4 FY26; ₹324cr of goodwill remains. The Austrian parent holds **56%**, takes a royalty (₹35cr in FY26) and sells it ₹390–400cr a year of materials. Dalmia Bharat Refractories sold its entire 13.08% stake in May–September 2026, and SBI Mutual Fund bought 8.07%. PwC resigned as auditor in August 2026 to align with a group-wide change (BSR & Co. replaced it), and Pankaj Malhan became MD and CEO on 1 July.",
        watch: ["Volume back to 7–8% growth after Q1's 6% fall.", "Margins holding above 13% as magnesite rises.", "Mining savings quantified.", "Second-half coke-oven and glass orders."],
        charts: electAndRefracCharts['RHI Magnesita'],
    },
    {
        company: 'IFGL Refractories',
        tagline: "A Kolkata-based specialist in flow-control and purging refractories for steelmaking, with factories in India, the US, the UK, Germany and China.",
        revenue: '₹1,894cr (FY26, consolidated); India ₹1,109cr standalone',
        products: [
            { name: 'Flow control and purging', text: "Slide-gate systems, nozzles, shrouds and porous plugs for ladles, tundishes and casters. It says its zircon nozzles last 85–119 heats against an industry norm of 65–80." },
            { name: 'Monolithics and tap-hole products', text: "Ramming masses, castables, tap-hole clay and casthouse products, extended by Sheffield Refractories (UK, bought in 2023), whose products it now makes at Vizag." },
            { name: 'Overseas specialists', text: "EI Ceramics (Ohio) and Mono Ceramics (Michigan) for US casting products; Monocon (UK and China) for lances and stoppers; Hofmann Ceramic (Germany, Czech Republic) for foundry filters and ceramics." },
            { name: 'New lines', text: "Magnesia-carbon bricks and casting flux, which it says could add ₹150–200cr of revenue at peak." },
        ],
        revenueText: "By where it makes things, FY26 external sales were about **India ₹1,102cr (58%), Europe ₹429cr (23%) and the Americas ₹338cr (18%)**, with a little from China (annual report); the Americas grew about 25% and Europe about 15%. In Q1 FY27 the Indian company sold ₹228cr at home (+7%) and ₹69cr as exports (+9%); its top five customers are 30–35% of Indian sales. The US subsidiaries earn high-teen margins; Monocon and Sheffield in the UK and Hofmann in Germany lose money or barely break even.",
        mixes: [
            { caption: 'Group sales by location of operations, FY26 (annual report, approximate)', parts: [{ label: 'India', share: 58 }, { label: 'Europe', share: 23 }, { label: 'Americas', share: 18 }, { label: 'China', share: 1 }] },
        ],
        customers: [
            "**Indian steel producers**, large and mid-sized, with IFGL engineers stationed in their plants under refractory-management contracts.",
            "**US steel mills** (its fastest-growing market), **UK steelmakers** such as British Steel, and **foundries** in Europe.",
            "300+ customers in 50+ countries (company).",
        ],
        difficulty: { level: 'Medium', text: "Precision flow-control ceramics need good materials science and plant trials to qualify, but several global and Indian competitors make similar products. IFGL buys all its key minerals." },
        moat: "Product performance and engineers on site make it hard to remove once qualified at a caster. But large steel buyers can switch between qualified suppliers, and IFGL lacks the scale or raw-material control to set prices.",
        inShort: ["**Makes flow-control refractories** (nozzles, slide gates, purging plugs) for steel casting, in India, the US, the UK, Germany and China.", "**Good:** products that outlast rivals' and a strong US business. **Bad:** no pricing power, the Indian margin fell to 10.5% from 13.5% in Q1, and European subsidiaries still lose money.", "**Verdict: pass.** Europe needs fixing first, and both new plants are on hold."],
        salesDrivers: ["**Indian steel mills**: domestic sales grew about 20% in FY26 but only 7% in Q1 FY27, against a double-digit target; IFGL engineers are stationed in their plants.", "**US steel mills**: its fastest-growing market, through EI Ceramics and Mono Ceramics.", "**Europe**: Monocon (UK) and Hofmann (Germany) are still loss-making; British Steel and Specialty Steel restarting would help.", "**New lines**: magnesia-carbon bricks and casting flux, up to ₹150–200cr of revenue at peak."],
        inputs: "**Zircon, alumina, magnesia and other minerals**, all bought in, plus **LPG** and fuel for firing. Materials were 52% of sales in FY26; staff are a large 17% because of engineers on customer sites.",
        costEffect: "**Poorly protected.** In Q1 its standalone gross margin fell from 47% to 43% as LPG and raw materials rose faster than prices, and it calls its price increases temporary. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (8% to 3%). **What happened:** India's alumina price index was flat over the chart period, yet its margin fell from about 13% to 7%, which points to weak pricing and European losses rather than one input.",
        competitors: [{ name: 'Vesuvius (Foseco)', note: 'The global leader in flow control.' }, { name: 'RHI Magnesita, Krosaki', note: 'Larger refractory makers in India.' }],
        position: "**A niche flow-control specialist** with 300+ customers in 50+ countries.",
        money: "Debt ₹195.6cr and cash ₹122cr at March 2026 (net debt about ₹74cr; about ₹87cr on Screener's basis); ICRA rates it AA− (Stable). Both growth projects announced in June are on hold: the ₹300–350cr Khordha (Odisha) plant because of the Middle East conflict, and the ₹300cr Gujarat joint venture with China's Marvels group after the government closed its application over the site (money spent so far is mostly land). FY27 capex is only ₹50–60cr. The auditor's report carries two emphasis-of-matter notes (goodwill from a 2016 merger, and a ₹8.3cr tax appeal), tax claims over goodwill depreciation could cost about ₹40cr, and the FY26 corporate-governance certificate is qualified for a late shareholder approval. Promoters hold **72.4%**, with no pledge.",
        watch: ["Monocon UK and Hofmann reaching break-even in FY27.", "The Indian company's margin back above 12%.", "A new site and funding for Khordha or the joint venture."],
        charts: electAndRefracCharts['IFGL Refractories'],
    },
    {
        "company": "Monolithisch India",
        "segment": "Refractories — many suppliers, sticky customers",
        "inShort": [
            "**Makes ramming mass**, a ready-mixed silica powder that lines the induction furnaces of small and mid-sized steel mills and is used up every few days, from three plants in West Bengal and Jharkhand, close to India's biggest induction-furnace steel cluster.",
            "**Good:** sales grew 64% in Q1 FY27 at a 28% margin, capacity has just doubled to 5.76 lakh tonnes, and its own quartzite mine should cut stone cost from early 2027. **Bad:** a P/E of about 93, stock held for 226 days, free cash negative, the Ranchi plant bought from the promoter family with the MD's money, and FY28 guidance (₹500–550cr) that needs revenue to quadruple in two years.",
            "**Verdict: pass.** A fast-growing, well-placed niche maker, but the price already assumes the FY28 target is met, and the family dealings and weak cash call for proof first. 1 Nov 2026: Q2 FY27 revenue of ₹54cr fell just short of the ₹55–60cr guided while the margin rose to about 30% against a 22% floor (Screener); the new plant began commercial production on 10 October, so H2 must lift sharply for the ₹250cr year. In the Q2 call (27 Oct 2026) management kept both the FY27 and FY28 (₹500cr-plus) revenue targets, put group use at about 68–69%, and aims to cut stone stock to about ₹32–34cr. Stays pass."
        ],
        "tagline": "A Ranchi family's maker of pre-mixed silica ramming mass, the consumable furnace lining used by induction-furnace steel mills, listed on NSE's SME platform in June 2025.",
        "revenue": "₹135cr (FY26, consolidated)",
        "products": [
            {
                "name": "Premium ramming mass (SGB Limited)",
                "text": "Launched in 2025 with a guaranteed 52–55 hours of furnace heat and 15–20% longer lining life. It sells for about ₹700–900 a tonne more at about ₹200–300 extra cost. It was about **50% of Q1 FY27 revenue** (about 20,500 of 52,000 tonnes), with 60–65% expected in Q2."
            },
            {
                "name": "Standard grades",
                "text": "SGB-777, LG-86, SLM-999, BG-77 and the post-mix SLM-980, for different furnace conditions in steel, iron and foundries. Realisation is about ₹8–9 a kg delivered."
            },
            {
                "name": "Trading and silica side-lines",
                "text": "Some additives and lower grades are bought and resold (about ₹1.5cr a quarter). It plans to sell surplus quartzite from its mine as silica sand, and talks of future high-purity silica products, so far undisclosed."
            }
        ],
        "revenueText": "Almost all revenue is ramming mass sold to **induction-furnace steel mills in eastern India**. Exports, mainly to Nepal and Bangladesh through traders, are only about ₹2–3cr a quarter. **The top 10 customers were 59% of FY25 revenue** (RHP). Management says it is 25–35% if each plant site is counted separately, and that it supplies 6 of the top 10 secondary steel makers. Volume was about 52,000 tonnes in Q1 FY27. No segment split is reported.",
        "customers": [
            "**Secondary steel mills with induction furnaces** in West Bengal, Jharkhand and Odisha, mostly integrated units. Management says it holds 70–85% of the ramming mass needs of many of them.",
            "**Foundries and iron makers**, plus exports to Nepal and Bangladesh through Indian traders."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Crushing and grading quartzite and mixing in boric acid is not hard. Plant capex is small: ₹45cr buys 3 lakh tonnes of new capacity. The edge is consistent quality across a furnace campaign, nearness to customers (freight decides who wins), and now a captive quartzite mine."
        },
        "moat": "Location and freight. Its plants sit in the densest cluster of induction-furnace mills, so delivered cost is low, and the family has supplied these mills for decades. The won Nawada mine block fixes stone cost for five years, which rivals buying from local miners cannot match. But the product is a consumable that others can make, and its closest listed peer is adding capacity too.",
        "salesDrivers": [
            "**Guidance**: Q2 FY27 revenue ₹55–60cr and FY27 about ₹250cr (27 July). FY28 ₹500–550cr from the existing 5.76 lakh tonnes plus mine surplus (30 September). EBITDA margin guided at 22–25%, with 4–5 points more hoped for once the mine runs.",
            "**Capacity**: up from 2.56 to 5.76 lakh tonnes with the Purulia greenfield plant (trials in September 2026). New plants are planned near Hospet, Karnataka (1.25 lakh tonnes, ₹20cr, July 2027) and Udaipur, Rajasthan (1.75 lakh tonnes, ₹25cr, November 2027), taking capacity to about 8.75 lakh tonnes.",
            "**Steel demand**: induction-furnace steel output in eastern India. Management cites ₹30,000–40,000cr of mill investment committed in the Purulia–Raghunathpur belt.",
            "**Product mix**: moving customers to the premium SGB Limited grade lifts the price per tonne."
        ],
        "inputs": "**Quartzite stone and boric acid/boron oxide additives.** Raw materials (net of stock change) were 46% of FY26 sales: ₹42cr of stone and ₹17cr of additives bought in FY26. Inward freight and stores add to 'other costs'. Additives cost about ₹150–155 a kg in Q1 FY27, against ₹130–135 earlier.",
        "costEffect": "**Prices are not fixed by contract.** It has no price agreements with customers and sells at delivered prices, so freight and stone swings hit the margin until passed on. The operating margin has held at 19–28% a quarter (22% in FY25, 24% in FY26, 28% in Q1 FY27 as the premium grade grew). From early 2027 the mine should cut stone cost by about ₹1,300–1,400 a tonne, roughly 15% of the selling price. **Rule of thumb:** a 10% rise in raw material cost not passed on would cut the margin by about 4.5 points.",
        "competitors": [
            {
                "name": "Raghav Productivity Enhancers",
                "note": "The only listed peer (RHP) and the largest ramming mass maker, based in Rajasthan; also adding capacity to about 8 lakh tonnes."
            },
            {
                "name": "Regional unorganised makers",
                "note": "Dozens of small eastern and Rajasthan units; Monolithisch says the mine gives it a stone-cost edge over them."
            },
            {
                "name": "Private makers in the south",
                "note": "Two or three unlisted firms around Bengaluru, Chennai and Hyderabad, where its Hospet plant will compete."
            }
        ],
        "position": "**One of the two largest ramming mass makers in India** by capacity (5.76 lakh tonnes after September 2026). It sold about 52,000 tonnes in Q1 FY27, around a third of the new capacity on an annual basis.",
        "money": "At March 2026 Screener shows **borrowings of ₹6cr against about ₹23cr of cash**, so about ₹17cr of net cash, after an ₹82cr IPO in June 2025. **Cash has lagged profit**: FY25–FY26 operating profit of ₹53cr produced ₹18cr of operating cash, and free cash was −₹13cr. Stock rose to 226 days of sales from 127 because it hoarded stone to secure supply. The mine needs about ₹17–18cr in January–February 2027 plus a ₹6–7cr deposit; management will fund it by cutting stone stock. The new plants (₹45cr) are to come from cash, IPO money and perhaps a short ₹5–10cr loan. No equity raise is planned. The family's ₹18cr loan and the related-party purchase of its Ranchi plant are the governance flags.",
        "watch": [
            "Q3 and Q4 revenue lifting sharply for the ₹250cr FY27 guide (H1: about ₹101cr) as the new plant, producing since 10 October, fills.",
            "The mine starting on time and stone stock falling to the ₹32–34cr management now targets.",
            "Fewer and smaller dealings with promoter-family companies."
        ],
        charts: electAndRefracCharts["Monolithisch India"],
    },
];

export const electAndRefracBusinesses = { intro, profiles };
