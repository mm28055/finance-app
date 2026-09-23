import { BusinessProfile, OverviewSection } from './types';

// Tab 2 of the Electrical Transformers note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each covers what it sells, where the revenue comes from, who buys and how, how hard the product is to make, and why customers stay. Revenue totals are filed figures; splits are from each company's latest presentation, annual report or call. Some splits are of the order book rather than revenue, and the caption says so.",
        ],
    },
    {
        heading: 'The equipment, in plain words',
        body: [
            "Follow electricity from a power plant to a factory or home.",
        ],
        points: [
            {
                label: 'Power transformer',
                text: "Changes electricity from one voltage to another at power plants and substations. Sized in **MVA** (how much power it handles) and graded by **kV** (the voltage). Every one is built to order and must pass tests before a utility accepts it. The bigger and higher the voltage, the fewer makers are approved: 66–220 kV is common, 400 kV needs a special approval from Power Grid, and 765 kV is made by only a handful of companies in India.",
            },
            {
                label: 'Distribution transformer',
                text: "The smaller units near homes, shops and factories that bring voltage down to usable levels (33 kV and below). Simpler, made by many companies, and mostly bought by state electricity boards through price-based tenders.",
            },
            {
                label: 'Special transformers',
                text: "**Inverter-duty** transformers connect solar and battery plants to the grid. **Furnace** and **rectifier** transformers power steel furnaces and electrolysis plants. **Dry-type** transformers use resin instead of oil, so they are safer indoors in buildings, data centres and metros.",
            },
            {
                label: 'Parts that go into or around a transformer',
                text: "**Bushings** carry the high-voltage conductor through the transformer's metal tank without touching it; each transformer needs five to seven, and a failure can destroy the transformer (Yash). **Reactors** and **coils** control the flow of power on long lines and direct-current (HVDC) links (Quality Power). **Instrument and current transformers** measure voltage and current so meters and protection relays can work (Quality Power, Rishabh).",
            },
            {
                label: 'Switchgear and grid software',
                text: "**Switchgear** and **ring main units** switch circuits on and off and isolate faults in the local network; **relays** detect faults. Software then monitors and controls the network (Schneider).",
            },
            {
                label: 'CRGO steel',
                text: "The special grain-oriented steel used in a transformer's core. It is a quarter to two-fifths of material cost, and India imports about 90% of it.",
            },
        ],
    },
    {
        heading: 'Five ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**State utilities and Power Grid**', 'Atlanta, TARIL, Supreme, Schneider (partly)', 'Tenders; some with price-variation clauses', 'Slow; money held back until commissioning'],
                    ['**Private developers and EPC contractors**', 'Atlanta, TARIL, Supreme, Shilchar, Schneider', 'Negotiated; often with price variation', 'Milestones; depends on the project being ready'],
                    ['**Industrial buyers**', 'Voltamp, TARIL (furnace), Schneider (data centres, chip plants)', 'Negotiated, selective', 'Fairly reliable'],
                    ['**Other equipment makers (OEMs)**', 'Yash, Quality Power', 'Negotiated; long approval, then repeat orders', 'Normal credit terms'],
                    ['**Exports**', 'Shilchar (half its sales), Quality Power, Yash, Rishabh', 'Negotiated; often higher margins', 'Depends on shipping terms and freight'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Transformer makers ────────────────────────────────────────────────────
    {
        company: 'Atlanta Electricals',
        tagline: "Gujarat-based power transformer maker climbing from 220 kV to 400 kV and 765 kV, with 63,060 MVA across five plants.",
        revenue: '₹1,852cr (FY26, consolidated)',
        products: [
            { name: 'Power transformers', text: "From 5 MVA up to 500 MVA, mainly 66–220 kV today; Power Grid has approved its Vadod plant for 400 kV." },
            { name: 'Auto transformers', text: "Large units that link two high-voltage networks at substations." },
            { name: 'Inverter-duty and special transformers', text: "For solar, wind, storage, generators and furnaces; a new dedicated plant adds 5,000 MVA by December." },
            { name: 'Atlanta Trafo', text: "A plant built by China's Baoding Tianwei Baobian Electric (BTW) for up to 765 kV, bought for about ₹260cr including its debt; to be used first for existing orders." },
        ],
        revenueText: "Power transformers were **79% of Q1 FY27 revenue**. By end market, transmission and distribution were **66%**, renewables 19% and generation and others the rest. By voltage, 220 kV was 56%. It has no exports yet.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27', parts: [{ label: 'Power', share: 79 }, { label: 'Auto', share: 14 }, { label: 'Inverter-duty', share: 6 }, { label: 'Other', share: 1 }] },
            { caption: 'Revenue by end market, Q1 FY27', parts: [{ label: 'Transmission and distribution', share: 66 }, { label: 'Renewables', share: 19 }, { label: 'Generation and other', share: 15 }] },
        ],
        customers: [
            "**State transmission utilities** such as Rajasthan's RVPNL and Punjab's PSTCL (each over ₹280cr of the order book), and **Power Grid**.",
            "**Renewable developers and EPC contractors.** It has 273 customers, up from 77 in FY22.",
            "No data-centre orders yet, management says.",
        ],
        difficulty: { level: 'High', text: "220 kV is established; 400 kV needs a destructive short-circuit test and Power Grid approval per plant. 765 kV design is being licensed from a partner for a $3–5m fee and a 2–4% royalty." },
        moat: "Approvals up the voltage ladder and price-variation clauses on 60–75% of utility orders. The top-end technology is rented, not owned.",
    },
    {
        company: 'Shilchar Tech.',
        tagline: "Debt-free Gujarat maker of power, distribution, solar and wind transformers up to 132 kV, about half exported.",
        revenue: '₹652cr (FY26, standalone)',
        products: [
            { name: 'Power and distribution transformers', text: "Up to 50 MVA and 132 kV, for utilities, industry and generation." },
            { name: 'Solar and wind transformers', text: "Inverter-duty units for solar plants and units for wind turbines, up to 33 kV." },
            { name: 'Hydro and furnace transformers', text: "For hydro plants (up to 132 kV) and steel furnaces." },
            { name: 'Next step', text: "A new 6,500 MVA plant from April 2027 adds 160 MVA and 220 kV class, doubling capacity to 14,000 MVA." },
        ],
        revenueText: "**Exports were 52% of FY26 revenue**, up from 26% in FY22, to 25+ countries including the US, Middle East and Africa. The current ₹500cr order book is 70% domestic because freight costs stalled exports. It does not split revenue by product.",
        mixes: [
            { caption: 'Revenue by market, FY26', parts: [{ label: 'Exports', share: 52 }, { label: 'India', share: 48 }] },
            { caption: 'Order book by market, August 2026 (₹500cr)', parts: [{ label: 'India', share: 70 }, { label: 'Exports', share: 30 }] },
        ],
        customers: [
            "**Overseas utilities and developers** in North America, the Middle East and Africa, mostly sold ex-works (the buyer pays freight).",
            "**Indian private companies**: solar and wind developers, cement, steel, oil and gas and EPC firms. It deliberately avoids state utilities.",
        ],
        difficulty: { level: 'Medium', text: "Custom-built transformers up to 132 kV are a proven skill shared by many makers. The step to 220 kV will need new customer approvals and type tests." },
        moat: "Speed, quality and an export network built over 19 years. No technology edge; returns depend on the global shortage.",
    },
    {
        company: 'Voltamp Transformers',
        tagline: "Vadodara maker of oil-filled and dry-type transformers, focused on industrial customers; debt-free with a ₹995cr investment portfolio.",
        revenue: '₹2,154cr (FY26, standalone)',
        products: [
            { name: 'Oil-filled power and distribution transformers', text: "Up to 120 MVA; it sold 16,514 MVA in FY26 and ran above 100% utilisation." },
            { name: 'Dry-type transformers', text: "Resin types up to 10 MVA for buildings, data centres and plants." },
            { name: 'Compact substations and ring main units', text: "Packaged units up to 2.5 MVA and 33 kV, and 12 kV switching units." },
            { name: 'New plant', text: "A ₹200cr greenfield plant for power transformers up to 250 MVA and 220 kV (6,000 MVA a year), starting from July 2026." },
        ],
        revenueText: "Products are about 96% of revenue and services the rest. **Exports were 3.2% of FY26 revenue.** It does not split revenue by product or voltage and holds no earnings calls. Order book: ₹1,510cr (12,377 MVA).",
        mixes: [
            { caption: 'Revenue by market, FY26', parts: [{ label: 'India', share: 97 }, { label: 'Exports', share: 3 }] },
        ],
        customers: [
            "**Industry**: steel, metals, cement, chemicals, pharmaceuticals, refineries, sugar, automotive and data centres. Management moved away from utility tenders years ago.",
            "**Transmission utilities, real estate and solar developers**, and other equipment makers.",
        ],
        difficulty: { level: 'Medium', text: "A mature range up to 120 MVA. The 220 kV plant is a step up that will need approvals." },
        moat: "A long record with industrial buyers, reliable delivery and a debt-free balance sheet. No clear technology edge.",
    },
    {
        company: 'Supreme Power',
        tagline: "Chennai-based transformer maker scaling up to 200 MVA and 220 kV after opening a new 9,000 MVA plant; listed on the NSE SME platform.",
        revenue: '₹190cr (FY26, standalone)',
        products: [
            { name: 'Power transformers', text: "Up to 200 MVA and 220 kV from the new Kannur plant; 77% of the order book." },
            { name: 'Distribution transformers', text: "Smaller units for utilities and industry; 18% of the order book." },
            { name: 'Inverter-duty transformers', text: "For solar plants; 5% of the order book." },
            { name: 'Service', text: "Repair and servicing of transformers." },
        ],
        revenueText: "In Q1 FY27, **government customers were 40% of revenue** and private customers 60%. Of the ₹590cr order book, **power transformers are 77%**.",
        mixes: [
            { caption: 'Order book by product, August 2026 (₹590cr)', parts: [{ label: 'Power', share: 77 }, { label: 'Distribution', share: 18 }, { label: 'Inverter-duty', share: 5 }] },
            { caption: 'Revenue by customer, Q1 FY27', parts: [{ label: 'Private', share: 60 }, { label: 'Government', share: 40 }] },
        ],
        customers: [
            "**Southern state utilities** such as Karnataka's KPTCL (including a large 165 MVA order, per the call) and Kerala's KSEB, plus customers in its home state of Tamil Nadu; now entering Maharashtra and Telangana.",
            "**EPC contractors, renewable developers and industry.** It has 880 clients; no direct exports yet.",
        ],
        difficulty: { level: 'Medium', text: "Standard designs up to 220 kV. Data-centre and larger orders need a 165 MVA type test first, and bigger units need a new plant." },
        moat: "Price-variation clauses on 80–85% of orders, the best in the sector. Otherwise small, regional and competing with larger makers.",
    },
    {
        company: 'Transformers & Rect',
        tagline: "Transformers and Rectifiers (India): one of India's largest transformer makers, with a range up to 1,200 kV and specialist furnace and rectifier units.",
        revenue: '₹2,507cr (FY26, consolidated)',
        products: [
            { name: 'Power transformers and reactors', text: "Up to 500 MVA and 1,200 kV; 80% of the order book. Shunt reactors are about 5%." },
            { name: 'Distribution transformers', text: "About 10% of the order book." },
            { name: 'Furnace, rectifier and specialty transformers', text: "For steel furnaces, smelters, electrolysis and mobile substations; about 5% of the order book." },
            { name: 'Backward integration', text: "₹900–1,000cr being spent to make its own copper conductor, pressboard, bushings, tanks and CRGO processing." },
        ],
        revenueText: "The ₹6,630cr order book is **80% power transformers**. Customers are split about **half government, half private**, and it bids for roughly 80% domestic and 20% export work. It does not publish a revenue split.",
        mixes: [
            { caption: 'Order book by product, June 2026 (₹6,630cr)', parts: [{ label: 'Power', share: 80 }, { label: 'Distribution', share: 10 }, { label: 'Reactors', share: 5 }, { label: 'Furnace and rectifier', share: 4 }, { label: 'Specialty', share: 1 }] },
        ],
        customers: [
            "**Power Grid** (a single order above ₹1,000cr) and **state utilities** such as Gujarat's GETCO and Rajasthan's RRVPNL.",
            "**Private developers and industry**: Adani, ReNew, Avaada, Jindal, Reliance, Hindustan Zinc and others; a ₹150cr US export order.",
        ],
        difficulty: { level: 'Very high', text: "It makes the full range to 1,200 kV and has an HVDC repair qualification from Power Grid. Running three large plants efficiently has proved harder: one is at 27% utilisation." },
        moat: "Range, approvals and scale that few Indian makers match. Weak cash conversion and credibility issues limit what that is worth.",
    },
    // ── Components ────────────────────────────────────────────────────────────
    {
        company: 'Yash Highvoltage',
        tagline: "Vadodara maker of transformer bushings, one of fewer than 12 independent bushing makers worldwide; listed on the BSE SME platform.",
        revenue: '₹235cr (FY26, standalone)',
        products: [
            { name: 'RIP bushings', text: "Resin-impregnated paper bushings, the modern dry type, now most of its sales. Their cores are imported from a Swiss partner today; a new plant (from about October 2026, designed for up to 550 kV) will make them in-house." },
            { name: 'OIP and high-current bushings', text: "Oil-impregnated bushings and bushings for very high currents; in short supply, and it is adding capacity." },
            { name: 'Retrofits', text: "Replacing bushings on transformers already in service; about 6–7% of revenue and high-margin." },
            { name: 'Sukrut Electric (50%)', text: "Transformer components, about ₹25cr of revenue in FY26." },
        ],
        revenueText: "About 7,000 bushings sold in FY26. By value, management says **15–18% of orders are OIP and high-current bushings and the rest RIP**. **Exports were about 7% of FY26 revenue**, with a target of 20%+ in two to three years.",
        mixes: [
            { caption: 'Order book by product (company estimate)', parts: [{ label: 'RIP bushings', share: 83 }, { label: 'OIP and high-current', share: 17 }], note: 'Management gave 15–18% for OIP and high-current; the midpoint is shown.' },
            { caption: 'Revenue by market, FY26', parts: [{ label: 'India', share: 93 }, { label: 'Exports', share: 7 }] },
        ],
        customers: [
            "**Transformer makers**, who place 24–36 month blanket orders, and **utilities** replacing bushings on existing transformers.",
            "**1,000+ customers in 60+ countries**, including all of India's nuclear power utilities; a US subsidiary and European distributors opened in FY26.",
        ],
        difficulty: { level: 'Very high', text: "Bushings must work flawlessly for decades at high voltage, and qualification takes years. Making its own resin cores is new for Yash and for India." },
        moat: "Approvals and a 96% repeat-order rate on a small but critical part. Buyers rarely switch to save money when failure is so costly.",
    },
    {
        company: 'Quality Power El',
        tagline: "A group of specialist grid-equipment makers in India and Turkey, supplying reactors, instrument transformers, power-quality systems and storage converters.",
        revenue: '₹947cr (FY26, consolidated)',
        products: [
            { name: 'Quality Power (parent)', text: "Reactors, coils, line traps and HVDC magnet wire for transmission and HVDC links, up to 765 kV." },
            { name: 'Mehru (51% owned)', text: "Instrument transformers up to 500 kV, grading capacitors and gas-insulated switchgear parts." },
            { name: 'Endoks, Turkey (51% owned)', text: "STATCOMs, static var compensators, harmonic filters and battery-storage converters (a 4 GW plant)." },
            { name: 'Others', text: "S&S Transformers (special transformers), Sukrut (tanks, 50%), and a proposed purchase of an insulator maker in Visakhapatnam." },
        ],
        revenueText: "In Q1 FY27, **Endoks was about 41% of revenue, Mehru 32% and the parent 27%** (my calculation from figures on the call). Partners own 49% of Endoks and Mehru, so a large share of their profit does not belong to Quality Power's shareholders.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (my calculation)', parts: [{ label: 'Endoks (51%)', share: 41 }, { label: 'Mehru (51%)', share: 32 }, { label: 'Parent', share: 27 }] },
            { caption: 'Order book by business, June 2026 (₹1,945cr)', parts: [{ label: 'Endoks', share: 41 }, { label: 'Mehru', share: 30 }, { label: 'Parent', share: 29 }] },
        ],
        customers: [
            "**Global equipment makers**: Hitachi Energy, Siemens, Siemens Energy, GE Vernova, Toshiba, Hyosung, Eaton.",
            "**Utilities and EPC firms**: Power Grid, Adani Energy Solutions, L&T, KEC, Saudi Aramco; grid operators in Denmark and Sweden. 200+ customers in 100+ countries.",
        ],
        difficulty: { level: 'Very high', text: "HVDC reactors, STATCOMs and high-voltage instrument transformers need specialist design and long approval by global equipment makers. A new plant needs about 60 customer audits before it can run fully." },
        moat: "Approvals with the world's largest grid-equipment makers and niche technology. Its advantage is spread across several partly owned businesses.",
    },
    {
        company: 'Rishabh Instruments',
        tagline: "Maker of electrical measuring instruments and current transformers in India and Poland, plus a loss-making aluminium die-casting business in Poland.",
        revenue: '₹775cr (FY26, consolidated)',
        products: [
            { name: 'Measuring and control instruments', text: "Panel meters, energy and power-quality analysers, test and measurement tools, and low- and medium-voltage current transformers." },
            { name: 'Solar inverters and electronics', text: "Its own single- and three-phase solar inverters, plus contract electronics (circuit-board assembly)." },
            { name: 'Lumel (Poland)', text: "Instruments, grid-control equipment for German grid upgrades, and radiation-detection gates for airports and borders." },
            { name: 'Lumel Alucast', text: "High-pressure aluminium die-casting, mostly for cars; deliberately shrinking out of unprofitable contracts." },
        ],
        revenueText: "Instrumentation was **69% of FY26 revenue** and die-casting 31%; in Q1 FY27 the split was 78% and 22% as die-casting shrank. Instrumentation earns about a 25% EBITDA margin; die-casting lost money.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Instrumentation', share: 69 }, { label: 'Die-casting', share: 31 }] },
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Instrumentation', share: 78 }, { label: 'Die-casting', share: 22 }] },
        ],
        customers: [
            "**Utilities, panel builders, industry, data centres and railways** in India, Europe, the US (about ₹30cr, targeting ₹100cr) and China.",
            "**Car-part buyers** in Europe for die-casting.",
        ],
        difficulty: { level: 'Medium', text: "Precision instruments need design and certification (UL for the US), but many competitors exist. Die-casting is a commodity business." },
        moat: "Its own designs, a broad range and 60–70% gross margins on core products. None in die-casting.",
    },
    // ── Medium-voltage equipment ──────────────────────────────────────────────
    {
        company: 'Schneider Ele. Infra',
        tagline: "Schneider Electric Infrastructure: the French group's listed Indian unit for medium-voltage distribution equipment up to 33 kV.",
        revenue: '₹2,891cr (FY26, standalone)',
        products: [
            { name: 'Distribution transformers', text: "Oil and dry-type transformers, including for data centres and chip plants; it does not make large high-voltage units." },
            { name: 'Medium-voltage switchgear and ring main units', text: "Air- and gas-insulated switchgear, including a pilot of units without SF6 gas." },
            { name: 'Protection and automation', text: "Relays, control panels and substation automation; its Kolkata plant also makes circuit breakers for Vande Bharat trains." },
            { name: 'Software', text: "The group's EcoStruxure grid-management and monitoring software." },
        ],
        revenueText: "The company does not split revenue by product. **Exports are about 10–12% of revenue.** More than a fifth of its ₹2,100cr+ backlog comes from data centres, chip plants and other new segments.",
        customers: [
            "**Private utilities, data centres, chip plants, cement, metals, mining and airports**, often through EPC contractors.",
            "**State distribution companies** under the RDSS scheme, through tenders that often do not allow price variation.",
        ],
        difficulty: { level: 'High', text: "Switchgear and protection systems need group technology and software. It does not play in high-voltage transmission." },
        moat: "Schneider's brand, technology and software make switching costly for customers. Weak contract terms (only 20–25% reprice) cap margins.",
    },
];

export const electricalTransformersBusinesses = { intro, profiles };
