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
                    ['**Global electrode contracts**', 'HEG', 'Global price set by a handful of producers; orders booked one to two quarters ahead', 'The producer briefly, then passed on at the next booking'],
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
        tagline: "A graphite electrode maker from the LNJ Bhilwara group, with the world's largest single-site plant. Being split into HEG Limited (electrodes) and HEG Greentech (battery materials and clean power).",
        revenue: '₹2,568cr (FY26, consolidated)',
        products: [
            { name: 'Ultra-high-power graphite electrodes', text: "For electric arc furnaces, from a 100,000-tonne plant at Mandideep, Madhya Pradesh, growing to 115,000 tonnes by early 2028. It says it is among the top three electrode producers outside China." },
            { name: 'Captive power', text: "About 80 MW of its own thermal and hydro power, which matters because graphitising electrodes uses enormous amounts of electricity." },
            { name: 'Investments', text: "A 9.98% stake in US rival GrafTech, which stays with HEG Limited. Its value swings the reported profit every quarter." },
            { name: 'Moving to HEG Greentech', text: "Battery-anode material (TACC: 20,000-tonne plant, production from Q1 FY28), graphene, battery packs and storage (REPlus, 74%), and hydro, solar and wind power through Bhilwara Energy." },
        ],
        revenueText: "Almost all current revenue is electrodes. **Exports have been about 65–75% of sales for over 20 years**, to about 35 countries. The Middle East and North Africa are around 20% of sales, and the US under 10%. HEG does not publish a fuller country split.",
        mixes: [
            { caption: 'Electrode sales by destination (company, approximate)', parts: [{ label: 'Exports', share: 70 }, { label: 'India', share: 30 }] },
        ],
        customers: [
            "**Arc-furnace steelmakers worldwide**: it says a large part of its output goes to the world's top 20 steel companies.",
            "Sold on contracts booked about one to two quarters ahead, so price changes reach revenue with a lag.",
            "Competes with GrafTech (US), Tokai Carbon (Japan), Resonac (Japan) and Graphite India.",
        ],
        difficulty: { level: 'Very high', text: "Electrodes need scarce needle coke, a production cycle of several months, very large power supplies and decades of process knowledge. HEG says it was itself the last new entrant in the Western world, in 1976; capacity outside China has shrunk since." },
        moat: "Scale and cost: the largest single plant, captive power and high utilisation make it one of the lowest-cost producers, so it can keep selling when others cut output. Few alternatives exist for buyers outside China.",
        inShort: ["**Makes graphite electrodes** for electric arc furnaces from the world's largest single-site plant, about 70% exported; its battery-materials business is being demerged.", "**Good:** one of five producers that matter outside China, running above 90% while rivals run at 60–65%. **Watch:** electrode prices and needle-coke costs move with the steel cycle.", "**Verdict: own, as a cycle.** The price already allows for a weak cycle."],
        salesDrivers: ["**Electrode prices**: set by global arc-furnace utilisation outside China; booked one to two quarters ahead, so changes reach revenue with a lag.", "**Volume is nearly capped**: the plant runs at 90–95%; 15,000 more tonnes arrive by early 2028.", "**The shift to arc furnaces** in Europe and the US, helped by Europe's carbon border tax.", "**Where it sells**: the Middle East and North Africa about 20% of sales, the US under 10%."],
        inputs: "**Needle coke** (a special petroleum coke bought from a few global suppliers) and pitch, plus **electricity**: graphitising electrodes uses enormous power, which is why it runs about 80 MW of its own plants. Materials were 41% of sales and power and factory costs 24% in FY26.",
        costEffect: "**Passed on with a lag of a few months.** It is booked to September at older prices and will raise prices on later orders; rivals have announced rises of $600–1,200 a tonne. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points, and power costs add to that. **What happened:** India's petroleum-coke price index rose about a quarter over the chart period, and its quarterly margin swung with electrode prices (Q4 FY26 went negative only because of the GrafTech loss); costlier coke reaches production around November–January.",
        competitors: [{ name: 'GrafTech (US)', note: 'The largest Western producer; HEG owns 9.98% of it.' }, { name: 'Tokai Carbon, Resonac (Japan)', note: 'The other global producers.' }, { name: 'Graphite India', note: 'India’s other electrode maker.' }, { name: 'Chinese producers', note: 'Large capacity, mostly serving China and nearby markets.' }],
        position: "**One of the five electrode producers that matter outside China**, with the largest single plant and among the lowest costs.",
        money: "Borrowings of ₹796cr against ₹250cr of cash and an ₹858cr treasury at FY26: about ₹312cr of net cash. The demerged HEG Greentech will carry about ₹1,500cr of debt by March 2027 for the anode plant. Promoters hold **61%**, up from 56%.",
        watch: ["Electrode price increases on October bookings.", "Needle-coke costs from November.", "US duty decisions and the demerger record date."],
        charts: electAndRefracCharts['HEG'],
    },
    {
        company: 'RHI Magnesita',
        tagline: "India's largest refractory maker (30%+ market share), the Indian arm of the Austrian RHI Magnesita group, which it can draw on for technology and products.",
        revenue: '₹4,020cr (FY26, consolidated)',
        products: [
            { name: 'Steel refractories', text: "Bricks, castables and mixes for blast furnaces, converters, arc furnaces and ladles, including ironmaking, direct-reduced iron (DRI) and pellet plants." },
            { name: 'Flow control', text: "Slide gates, nozzles and isostatic products for continuous casting, made at Bhiwadi and Jamshedpur. About **35% of revenue**, and the area where it has been winning share." },
            { name: 'Cement, glass and non-ferrous', text: "Kiln linings for cement plants (strengthened by the Dalmia OCL acquisition in 2023), glass-furnace blocks, and linings for copper and aluminium smelters, coke ovens and petrochemicals." },
            { name: '4PRO services', text: "Running a customer’s refractory operation: installation, robots (India’s first robotic caster operation, at JSW, on a five-year contract), kiln-lining scans (LES) and supply management." },
        ],
        revenueText: "About **35% of revenue is flow control** (management, Q1 FY27). Steel is the largest end market, followed by cement, non-ferrous and glass; the company does not publish that split. Exports are small and currently falling. Project orders (new plants, coke ovens, glass furnaces) add lumps on top of steady maintenance demand.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (management)', parts: [{ label: 'Flow control', share: 35 }, { label: 'Bricks, castables and other refractories', share: 65 }] },
        ],
        customers: [
            "**Integrated steel producers** such as JSW and public-sector steelmakers (it is supplying a coke-oven project for a PSU plant).",
            "**Cement companies**, **aluminium and copper smelters** and **glass makers**.",
            "Sold through annual supply contracts, cost-per-tonne contracts and one-off project orders; 8 plants across India, a quartzite mine at Raigarh, and an R&D centre at Bhiwadi.",
        ],
        difficulty: { level: 'High', text: "Standard bricks and castables are made by many producers. Flow-control products, isostatic parts and complete lining systems need group technology, precise manufacturing and on-site expertise that few competitors match in India." },
        moat: "Scale (30%+ share), the parent's global product range and R&D, and a growing service model that puts its people and robots inside customers' plants. Captive quartzite and the Minpro recycling venture should lower costs. Pricing power is still limited because competition is heavy.",
        inShort: ["**India's largest refractory maker** (30%+ share), the Indian arm of Austria's RHI Magnesita, lining furnaces, ladles and kilns for steel, cement and glass.", "**Good:** service contracts and flow-control products are raising switching costs. **Bad:** only 6–11% return on capital since the Dalmia deal.", "**Verdict: follow.** The better business, but priced for improvements not yet delivered."],
        salesDrivers: ["**Indian steel and cement output**: volume guided at market growth plus 1–2 points (7–8% this year).", "**New plants and projects**: coke-oven and glass orders arrive in the second half; one coke-oven order books its plant for 14–16 months.", "**Flow control**: about 35% of revenue, where it has been gaining share and price rises stick.", "**4PRO services**: running customers' refractory work under multi-year contracts, such as India's first robotic caster operation at JSW."],
        inputs: "**Magnesite, alumina, quartzite, zircon and graphite**, much of it imported, plus fuel (LPG, gas) for kilns. Materials were 61% of sales in FY26. It is opening its own quartzite mine and a recycling venture (Minpro).",
        costEffect: "**Partly passed on.** Q1's price rise was a 'war surcharge' rather than a permanent increase, and magnesite rose another 6–8% in two months. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (11% to 5%). **What happened:** India's alumina price index was flat over the chart period and its margin stayed around 11–14%; the long fall from 19% in FY22 came from adding the lower-margin Dalmia business and more competition, not input prices.",
        competitors: [{ name: 'Vesuvius (Foseco), Calderys', note: 'Multinational rivals, strongest in flow control and monolithics.' }, { name: 'Krosaki, Shinagawa, IFGL', note: 'Japanese and Indian specialists.' }, { name: 'Chinese suppliers', note: 'Cheap imports of standard bricks.' }],
        position: "**India's largest refractory maker**, with 8 plants and its parent's global product range.",
        money: "Net debt about ₹57cr at FY26 (Screener, counting treasury investments); the company reported net cash of ₹140cr in June 2026. Capex is modest, about ₹80–100cr a year. The Austrian parent holds **56%**.",
        watch: ["Margins holding above 13% as magnesite rises.", "Mining savings quantified.", "Second-half coke-oven and glass orders."],
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
        revenueText: "In Q1 FY27 the Indian company sold ₹228cr at home and ₹69cr as exports (77:23); overseas subsidiaries added about ₹218cr. So roughly **44% of group sales are Indian domestic, 13% exports from India, and 42% overseas subsidiaries**, where the US is the strongest and Europe is loss-making.",
        mixes: [
            { caption: 'Group revenue by source, Q1 FY27 (my calculation from standalone and consolidated figures)', parts: [{ label: 'India, domestic', share: 44 }, { label: 'Overseas subsidiaries', share: 42 }, { label: 'Exports from India', share: 13 }], note: 'Exports from India include some sales to its own subsidiaries, so this split is approximate.' },
        ],
        customers: [
            "**Indian steel producers**, large and mid-sized, with IFGL engineers stationed in their plants under refractory-management contracts.",
            "**US steel mills** (its fastest-growing market), **UK steelmakers** such as British Steel, and **foundries** in Europe.",
            "300+ customers in 50+ countries (company).",
        ],
        difficulty: { level: 'Medium', text: "Precision flow-control ceramics need good materials science and plant trials to qualify, but several global and Indian competitors make similar products. IFGL buys all its key minerals." },
        moat: "Product performance and engineers on site make it hard to remove once qualified at a caster. But large steel buyers can switch between qualified suppliers, and IFGL lacks the scale or raw-material control to set prices.",
        inShort: ["**Makes flow-control refractories** (nozzles, slide gates, purging plugs) for steel casting, in India, the US, the UK, Germany and China.", "**Good:** products that outlast rivals' and a strong US business. **Bad:** no pricing power, and European subsidiaries still lose money.", "**Verdict: pass.** Europe needs fixing first."],
        salesDrivers: ["**Indian steel mills**: about 44% of group sales, with IFGL engineers stationed in their plants.", "**US steel mills**: its fastest-growing market, through EI Ceramics and Mono Ceramics.", "**Europe**: Monocon (UK) and Hofmann (Germany) are still loss-making; British Steel and Specialty Steel restarting would help.", "**New lines**: magnesia-carbon bricks and casting flux, up to ₹150–200cr of revenue at peak."],
        inputs: "**Zircon, alumina, magnesia and other minerals**, all bought in, plus **LPG** and fuel for firing. Materials were 52% of sales in FY26; staff are a large 17% because of engineers on customer sites.",
        costEffect: "**Poorly protected.** In Q1 its standalone gross margin fell from 47% to 43% as LPG and raw materials rose faster than prices, and it calls its price increases temporary. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (8% to 3%). **What happened:** India's alumina price index was flat over the chart period, yet its margin fell from about 13% to 7%, which points to weak pricing and European losses rather than one input.",
        competitors: [{ name: 'Vesuvius (Foseco)', note: 'The global leader in flow control.' }, { name: 'RHI Magnesita, Krosaki', note: 'Larger refractory makers in India.' }],
        position: "**A niche flow-control specialist** with 300+ customers in 50+ countries.",
        money: "Net debt about ₹87cr at FY26 (Screener, counting treasury investments). Its Chinese joint-venture plant in Gujarat is on hold awaiting government approval; the land is paid for. Promoters hold **72%**, unchanged.",
        watch: ["Monocon UK and Hofmann reaching break-even in FY27.", "Standalone margin recovering.", "Price increases holding."],
        charts: electAndRefracCharts['IFGL Refractories'],
    },
];

export const electAndRefracBusinesses = { intro, profiles };
