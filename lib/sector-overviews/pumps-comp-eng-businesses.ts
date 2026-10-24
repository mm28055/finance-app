import { BusinessProfile, OverviewSection } from './types';
import { pumpsCompEngCharts } from './card-data/pumps-comp-eng';

// Tab 2 of the Pumps Comp & Eng note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' Q1 FY27 investor presentations and calls, or their websites;
// where a company does not disclose a split, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped the same way as Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are the filed figures; the splits are what each company published in its latest investor presentation or said on its call. Where a split is not disclosed, the profile says so rather than guessing.",
        ],
    },
    {
        heading: 'The machines, in plain words',
        body: [
            "Five kinds of machine appear across these nine companies. Knowing what each one does explains most of the differences in their businesses.",
        ],
        points: [
            {
                label: 'Air compressor',
                text: "Squeezes air to drive tools, machines and production lines in almost every factory. It runs all day, so **over its life the electricity it uses costs far more than the machine itself**. That is why buyers care about efficiency. Main types: **piston** (small, simple), **screw** (two interlocking rotors; the workhorse of industry), **centrifugal** (a fast-spinning impeller for very large volumes) and **oil-free** (no oil touches the air, needed in pharma, food and electronics).",
            },
            {
                label: 'Gas and refrigeration compressor',
                text: "The same idea applied to natural gas (filling CNG stations, pushing gas through pipelines, processing it at oilfields and refineries) or to refrigerant gases such as ammonia (cold storage, dairies, food processing). These are engineered to order, often to oil-industry standards, and a failure can stop a plant.",
            },
            {
                label: 'Pump',
                text: "Moves water or other liquids. At one end are **small pumps** for homes and farms (submersible pumps that go down a borewell, and monoblock pumps that sit on the surface), made in large numbers and sold through dealers. At the other are **engineered pumps** built to order for power stations, refineries, water-supply schemes and nuclear reactors. The largest are several metres tall and must run for decades.",
            },
            {
                label: 'Engine and generator set (genset)',
                text: "A diesel or gas engine turns an alternator to make electricity. Gensets are sized in kVA: a few kVA for a shop, 250–750 kVA for an office block or factory, and 1,000–3,000+ kVA per set for a data centre, which uses many of them. Stricter emission rules (CPCB IV+) from July 2024 forced every maker to redesign its range. Engines are also sold on their own to power tractors, construction machines, three-wheelers, locomotives, ships and fire pumps.",
            },
            {
                label: 'Solar pump system',
                text: "Solar panels, a controller (the electronics that let the pump run on varying sunlight) and a pump, installed on a farm to replace a diesel pump. Most are bought under government schemes, mainly **PM-KUSUM**: the government pays most of the cost, a state agency picks the approved suppliers and sets the price, and the farmer chooses among them.",
            },
        ],
    },
    {
        heading: 'Four ways of selling',
        body: [
            "Who decides the purchase, and how the order is won, shapes pricing power more than the product does.",
        ],
        tables: [
            {
                columns: ['Business', 'Who decides', 'How the order is won', 'Repeat revenue'],
                rows: [
                    ['**Compressors** (Elgi, Kirloskar Pneumatic)', 'Factory engineers and plant owners; oil and gas companies for gas packages', 'Through distributors or direct sales, on running cost, reliability and service', 'Spares and servicing for 10–15+ years; parts are 28–30% of Elgi’s Indian sales'],
                    ['**Engineered pumps** (KSB, Kirloskar Brothers)', 'Utilities, power companies, refineries and their contractors (EPC firms)', 'Tenders with technical approval first, then price; small pumps through dealers', 'Spares, repairs and upgrades, still a small share of sales'],
                    ['**Engines and gensets** (Kirloskar Oil, Powerica, Greaves)', 'Building owners and dealers; data-centre operators; vehicle and machine makers (OEMs)', 'Dealers for standard gensets; direct or via EPC firms for data centres; multi-year supply deals for engines', 'Spares and service contracts for the installed base'],
                    ['**Solar pumps** (Shakti, Oswal)', 'State agencies set the price and approved list; the farmer picks a supplier', 'Tender and empanelment; the price is fixed by the tender', 'Mandatory five-year service; little repeat buying'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Compressors ──────────────────────────────────────────────────────────
    {
        company: 'Kirloskar Pneumatic',
        tagline: "India's leading maker of gas compression and industrial refrigeration systems, with a growing air-compressor business. Part of the Kirloskar group.",
        revenue: '₹1,759cr (FY26, standalone)',
        products: [
            { name: 'Process gas systems', text: "Compressor packages for CNG stations, compressed biogas plants, and oil and gas (at oilfields, on pipelines, in refineries). It also operates and maintains 1,000+ CNG stations for its customers." },
            { name: 'Air compressors', text: "Screw and piston compressors, and large **centrifugal** machines (its Tezcatlipoca range and the new, smaller A800), where it competes with global majors. It holds a mid-teens share of a ₹500cr-plus market for large centrifugals, with 130 machines sold." },
            { name: 'Refrigeration and air conditioning', text: "Ammonia refrigeration systems for cold storage, dairies and food processing, vapour-absorption chillers, and process refrigeration for oil and gas. It has owned 55% of Systems & Components (700+ installations in pharma, chemicals and food) since December 2024 and bought the rest in May 2026; that unit lost ₹4.3cr in FY26. Its Zephyros venture, an ammonia-based air-conditioning system backed by a government production-incentive scheme, took its first outside order in July 2026, with the real ramp-up expected in FY28." },
            { name: 'Precision engineering', text: "Industrial gearboxes, gears and locomotive transmissions, plus forging, casting and fabrication, much of it for its own compressors." },
        ],
        revenueText: "Compression (gas, air and refrigeration together) was **93% of FY26 revenue**; precision engineering and transmissions the rest. On the Q4 call management put air and refrigeration at about 40–45% of the business, process gas at 35–40% and air compressors at 18–20%. Service income, mostly maintaining CNG stations, rose from ₹204cr to about ₹300cr in FY26. Sales are heavily back-ended: Q4 was about 40% of FY26. Order book ₹1,853cr (July 2026), about a year of sales.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Compression (gas, air, refrigeration)', share: 93 }, { label: 'Precision engineering and transmission', share: 7 }] },
        ],
        customers: [
            "**City gas distribution companies** building CNG stations, and oil and gas producers, pipelines and refineries.",
            "**Steel, cement, food and beverage, dairy and pharma plants** for air and refrigeration.",
            "**Indian Railways** (locomotive transmissions) and marine users.",
            "Sold directly and through dealers in 150+ locations. The company says it holds **over 60% of India's CNG compression and oil-and-gas refrigeration markets, and about 70% of ammonia refrigeration compressors**.",
        ],
        difficulty: { level: 'High', text: "Gas compressors must meet oil-industry standards and run continuously in hazardous sites; a centrifugal compressor range takes years to design and prove. Owning its forging and casting shops gives it control over the hardest parts." },
        moat: "Installed base and approvals: once an oil company or gas distributor has standardised on its packages and it maintains the stations, switching is costly and risky. Its own foundry and forge keep costs and delivery in its hands.",
        inShort: ["**Makes air, refrigeration and gas compressors** and CNG and biogas packages, with its own forgings and castings, and maintains 1,000+ CNG stations.", "**Good:** return on capital up every year from 18% to 30%, and no debt. **Watch:** Q1 sales grew only 10%, package orders are lumpy and Middle East orders stalled.", "**Verdict: follow.** The best-run business here, but the price needs about {need:Kirloskar Pneumatic|19}% a year against my ~15%."],
        salesDrivers: ["**Gas**: CNG stations are projected to double to about 15,000 by 2031; gas is 35–40% of the business.", "**Industrial capex**: record air-compressor orders, with Tezcatlipoca centrifugal machines gaining share and over ₹100cr of centrifugal orders expected this year.", "**Biogas and refrigeration**: record biogas bookings; refrigeration for cold chains, dairies and fisheries.", "**New products**: the Zephyros ammonia air-conditioning system under a production scheme, meaningful from FY28.", "**Order book**: ₹1,853cr, about a year of sales; Q1 FY27 sales grew only 10% against a 20%-plus full-year guide."],
        inputs: "**Steel forgings and castings** (which it makes itself), motors, bearings, steel fabrication and bought-in components for packages. Materials were 50% of sales in FY26.",
        costEffect: "**Well protected.** Making its own forgings and castings keeps costs in its hands, and material cost fell from 47.6% to 43.9% of sales in Q1 even as metals rose. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (21% to 16%). **What happened:** India's steel-forging price index fell slightly over the chart period, and its margin trended up from about 11% to 15–26% by quarter (Q4 is always the biggest).",
        competitors: [{ name: 'Atlas Copco, Ingersoll Rand', note: 'Global leaders in air compressors.' }, { name: 'Elgi Equipments', note: 'Indian rival in air compressors.' }, { name: 'Burckhardt, Ariel (packagers)', note: 'Rivals in gas compression packages.' }],
        position: "**A leading Indian maker of gas compression packages for city gas**, and a growing player in centrifugal and refrigeration compressors.",
        money: "Debt-free. The company puts cash and liquid investments at about ₹460cr (April 2026); Screener's wider measure, including treasury investments, is about ₹595cr. CRISIL raised its rating to AA in May 2026. It spends about ₹100cr a year plus ₹320cr on Zephyros over FY27–28 (about ₹60cr spent by March). Promoters hold **39%**, drifting down slightly through employee share options; Aman Kirloskar has taken over as MD.",
        watch: ["H1 sales of ₹750–800cr at about a 19% margin.", "Middle East package orders restarting.", "Zephyros repeat orders."],
        charts: pumpsCompEngCharts['Kirloskar Pneumatic'],
    },
    {
        company: 'Elgi Equipments',
        tagline: "Industrial air compressors sold worldwide under its own brand; the company says it is the second-largest maker in India and sixth-largest globally.",
        revenue: '₹3,951cr (FY26, consolidated)',
        products: [
            { name: 'Screw compressors', text: "Oil-lubricated and oil-free electric screw compressors, the core of the business. It launched India's first home-grown oil-free screw compressor in 2011." },
            { name: 'Piston and portable compressors', text: "Small piston machines for workshops, diesel-driven portable compressors for mining and construction (Rotair in Italy), and compressors for railways." },
            { name: 'Dryers, filters and parts', text: "Accessories that clean and dry compressed air, plus spares and service for its installed base." },
            { name: 'Automotive equipment', text: "Garage equipment such as car lifts and wheel-service machines, through ATS Elgi." },
        ],
        revenueText: "Compressors are **92% of sales** and automotive equipment 8% (Q1 FY27). Compressor sales are split almost evenly between **India (51%) and the rest of the world (49%)**. By subsidiary, North America was about a quarter of group sales in Q1 FY27, Europe 14% and Australia 4%. Spare parts are **28–30% of sales in India but only 15–16% elsewhere**, against 35–40% at global peers, because its distributors keep the service income; so there is room to grow.",
        mixes: [
            { caption: 'Sales by business and region, Q1 FY27', parts: [{ label: 'Compressors, India', share: 47 }, { label: 'Compressors, rest of world', share: 45 }, { label: 'Automotive equipment', share: 8 }], note: 'Compressor split 51% India / 49% rest of world applied to the 92% compressor share (company presentation).' },
        ],
        customers: [
            "**Manufacturers of every kind**: textiles, pharma, food, automotive, engineering, plus construction and mining for portable machines.",
            "Sold mainly **through distributors**. It owns distributors in the US (Patton's, Michigan Air Solutions) and Australia (Pulford), plus sales companies across Europe, the Middle East, Brazil and Indonesia.",
            "Buyers choose on running cost: the MD says about **80% of the market cares more about energy use and maintenance than about the price**.",
        ],
        difficulty: { level: 'High', text: "The screw element (two rotors machined to micron gaps) decides efficiency and is hard to design and make well. Elgi designs its own and makes most of its motors, and its warranty costs are under 1% of sales. Chinese makers compete at the low end on price." },
        moat: "Efficiency and reliability: its machines are the most efficient in about 70% of industrial categories, so a buyer saves on electricity every year. Long warranties, a growing service business, and owned distributors in the US and Australia keep customers.",
        inShort: ["**Makes industrial air compressors** sold worldwide under its own brand, about half outside India, plus a small automotive-equipment business.", "**Good:** the most efficient compressors in about 70% of categories, and cash conversion up to 78%. **Watch:** a 25% US tariff and cheap Chinese machines at the low end.", "**Verdict: follow.** The best product here, but Europe carries ₹386cr of accumulated losses, a FEMA enquiry is open, and the price needs about {need:Elgi Equipments|22}% a year against my ~16%."],
        salesDrivers: ["**Factories replacing old compressors** with efficient ones: about 80% of buyers choose on running cost.", "**Share gains in India**: India grew 28% in Q1, mostly on volume, and its Demand Match technology wins new customers.", "**North America and Europe**: North America grew 37% despite US tariffs; Europe broke even in the last two quarters but lost ₹22cr in FY26 and carries ₹386cr of accumulated losses.", "**Spares and service**: 28–30% of India sales, but only 15–16% abroad against peers' ~38%, so there is room to grow."],
        inputs: "**Iron castings, steel, copper and aluminium** (for its own motors), bearings and electronics. Materials were 49% of sales in FY26; staff are a large 20%.",
        costEffect: "**Passed on with a lag.** Material costs rose 5–6% while its prices rose about 3%; in June it raised prices to cover a further 9% of expected cost increases, taking effect from late Q2. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (15% to 10%). **What happened:** the castings price index was flat over the chart period, and its margin rose from about 12% to 15% on efficiency and mix.",
        competitors: [{ name: 'Atlas Copco, Ingersoll Rand', note: 'The global leaders; Elgi competes on efficiency, not price.' }, { name: 'Kaeser, Kirloskar Pneumatic', note: 'Rivals in India and Europe.' }, { name: 'Chinese makers', note: 'Cheap low-end machines; Elgi launched a low-cost range against them.' }],
        position: "**India's second-largest compressor maker (about 25% share, CRISIL) and sixth-largest globally**, one of the few Indian brands selling worldwide, with owned distributors in the US and Australia.",
        money: "Net cash about ₹185cr on Screener's cash-only measure; the company reports ₹680cr at June 2026 including investments. The parent is debt-free and guarantees ₹272cr of subsidiary debt. Capex is about ₹200cr in FY27, mostly moving its Coimbatore city factory to a new campus. The annual report discloses a summons under the foreign-exchange law (FEMA) seeking past trade and investment data, and whistle-blower complaints still open at March; management expects no significant impact. US and Australian distribution units lose money. Promoters hold **31%**, unchanged.",
        watch: ["Margin above 16% as the June price rise lands.", "Europe staying at breakeven, and the FEMA enquiry.", "The low-cost range launched in India in September."],
        charts: pumpsCompEngCharts['Elgi Equipments'],
    },

    // ── Engineered pumps ─────────────────────────────────────────────────────
    {
        company: 'Kirloskar Brothers',
        tagline: "India's largest pump maker (it made India's first centrifugal pump in 1926), spanning farm and home pumps, huge engineered pumps and nuclear pumps, with factories in India, the UK, the US, the Netherlands, Thailand and South Africa.",
        revenue: '₹4,538cr (FY26, consolidated)',
        products: [
            { name: 'Small pumps', text: "Made-to-stock pumps for homes, farms and buildings (including solar pumps), sold through dealers. Management says these are **45–50% of standalone sales**." },
            { name: 'Large and engineered pumps', text: "Pumps up to 30 MW for irrigation lift schemes, city water supply, power stations, oil and gas, and ships. It is the world's largest maker of **concrete volute pumps** (huge pumps cast partly in concrete for irrigation and cooling water)." },
            { name: 'Nuclear pumps', text: "Supplies all metallic volute pumps for Indian nuclear plants, supplied sodium pumps for the fast-breeder reactor (Bhavini), and is qualifying to make primary-circuit pumps." },
            { name: 'Valves, turbines and packages', text: "Valves, small hydro turbines, and (through SPP) packaged fire-fighting and cooling-water systems, including for US data centres. Electric motors and stampings come from subsidiary Karad Projects and Motors." },
        ],
        revenueText: "FY26 revenue by company (before removing sales between group companies): the **Indian parent ₹2,828cr**, overseas subsidiaries **₹1,628cr** (SPP UK ₹785cr, SPP USA ₹540cr, Netherlands, Thailand, South Africa) and Indian subsidiaries ₹755cr. The parent's order book, which excludes small pumps, is mostly **irrigation and water (43%) and power (25%)**. It also owns 45% of Kirloskar Ebara (refinery pumps and steam turbines).",
        mixes: [
            { caption: 'Revenue by company, FY26', parts: [{ label: 'Indian parent', share: 54 }, { label: 'Overseas subsidiaries', share: 31 }, { label: 'Indian subsidiaries', share: 15 }], note: 'Before inter-company eliminations (group total after eliminations ₹4,538cr).' },
            { caption: 'Parent order book by customer sector, June 2026 (excludes small pumps)', parts: [{ label: 'Irrigation and water', share: 43 }, { label: 'Power', share: 25 }, { label: 'Buildings', share: 10 }, { label: 'Oil and gas', share: 8 }, { label: 'Industry', share: 6 }, { label: 'Service', share: 4 }, { label: 'Marine and defence', share: 2 }, { label: 'Valves', share: 2 }] },
        ],
        customers: [
            "**State irrigation and water-supply agencies and their contractors**: the company says its pumps supply drinking water to over 35% of India's population.",
            "**Power producers** (NTPC and others), **NPCIL** for nuclear plants, refineries, shipyards and defence.",
            "**Farmers and households** through dealers for small pumps.",
            "Overseas: **UK and US building and data-centre contractors** (in the US, fire pumps are about 35% of the business and data centres about 25%), UK water utilities (SPP holds about 85% of their pump work), and mines in Africa. It has 2,500+ active customers in 120+ countries.",
        ],
        difficulty: { level: 'High', text: "Low for small pumps, where many compete. Very high for large engineered and nuclear pumps: custom hydraulic design, its own foundry, test beds for multi-megawatt pumps, and nuclear quality approval that takes years." },
        moat: "Track record and scale in large pumps: water and power buyers specify proven suppliers, and it has the foundry, test facilities and references few can match. Its dealer network and brand protect the small-pump business, though that part is competitive.",
        inShort: ["**India's largest pump maker**: home and farm pumps, large engineered pumps for power, water and nuclear, and data-centre cooling packages in the US.", "**Good:** returns up from 11% to 20–28%, and good cash conversion. **Watch:** FY26 revenue grew 1%, SPP UK is loss-making, and a family arbitration is under way.", "**Verdict: follow.** A qualification moat, but it must prove FY26 was a one-off, its nuclear castings slipped, and the price needs about {need:Kirloskar Brothers|20}% a year against my ~14%."],
        salesDrivers: ["**Water and power projects** in India: irrigation, city water and thermal plants.", "**Nuclear**: about ₹110cr of orders in Q1; its primary-circuit pump passed hydraulic and mechanical tests but hit metallurgy problems with Indian castings.", "**US data centres**: $7.5–10m cooling and fire packages per hyperscale site; about 25% of US revenue, with a global framework contract in final signing.", "**Small pumps** through dealers: 45–50% of the Indian parent's sales.", "**Order book**: ₹2,558cr domestic and ₹1,505cr overseas, excluding small pumps."],
        inputs: "**Iron and steel castings** (from its own foundry), copper for motors, steel and stampings. Materials were 49% of sales in FY26.",
        costEffect: "**Partly passed on.** It has raised prices about 10% since January; project orders reprice more slowly than dealer pumps. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (12% to 7%). **What happened:** the castings index was flat over the chart period; its margin moved from about 12% to 10–13%, with the Indian parent rising and overseas subsidiaries falling to 5%.",
        competitors: [{ name: 'KSB, Flowserve', note: 'Rivals in large engineered and nuclear pumps.' }, { name: 'Grundfos, Xylem, Wilo', note: 'Global pump makers in buildings and water.' }, { name: 'CRI, Shakti and many small makers', note: 'Rivals in small and farm pumps.' }],
        position: "**India's largest pump maker** and the world's largest maker of concrete volute pumps.",
        money: "Net cash about ₹155cr (Screener; borrowings ₹250cr at FY26, mostly overseas), plus ₹758cr of investments. Capex is about equal to depreciation. Contingent liabilities are ₹160cr, mostly indirect-tax disputes. Several subsidiaries lose money: SPP UK's operating profit turned negative in Q1 FY27, Kolhapur Steel (now merged into its motor arm) carries ₹155cr of accumulated losses, and the Dutch and Thai units are backed by parent guarantees. In August 2026 the Supreme Court sent its and Sanjay Kirloskar's claims against Atul Kirloskar and others to arbitration; any cost cannot yet be estimated. Promoters hold **66%**, unchanged.",
        watch: ["Nuclear primary-pump orders.", "The US data-centre framework contract.", "UK service work returning in Q2–Q3, and SPP UK back to profit.", "The family arbitration; any cost is not yet known."],
        charts: pumpsCompEngCharts['Kirloskar Brothers'],
    },
    {
        company: 'KSB',
        tagline: "The Indian arm of Germany's KSB: pumps and valves for power, nuclear, oil and gas, water, buildings and farms. Its financial year ends in December.",
        revenue: '₹2,696cr (CY2025)',
        products: [
            { name: 'Standard pumps', text: "Catalogue pumps for buildings, water supply, industry and farms (including solar pumps), sold through 800+ dealers." },
            { name: 'Engineered pumps', text: "Boiler-feed and condensate pumps for thermal power stations, refinery and petrochemical pumps, and pumps for desalination and marine use." },
            { name: 'Nuclear pumps', text: "Main coolant pumps and safety pumps for reactors, made in a dedicated nuclear plant at Shirwal. It has supplied the main coolant pumps for every Indian heavy-water reactor since Narora." },
            { name: 'Valves and service', text: "Industrial valves (Coimbatore; control valves via MIL Controls, Kochi) and SupremeServ, its spares and repair arm, which is growing about 15% a year." },
        ],
        revenueText: "Standard pumps are about **half of domestic orders**; engineered pumps, valves and service make up the rest in roughly similar shares (14–19% each). **Nuclear is 45% of the ₹2,745cr order book** (June 2026), but it is delivered slowly, over several years. Export orders have grown steadily.",
        mixes: [
            { caption: 'Orders on hand, June 2026', parts: [{ label: 'Nuclear', share: 45 }, { label: 'Everything else', share: 55 }] },
        ],
        customers: [
            "**NPCIL** for nuclear plants (Gorakhpur 1 & 2, Kaiga 5 & 6, and a 107-pump safety package for Kudankulam). Its first nuclear export order is eight safety pumps for a new European plant.",
            "**Thermal power companies and their contractors, refineries and petrochemical plants.**",
            "**Water utilities, builders, metro projects and data centres**, via contractors and equipment makers (OEMs).",
            "**Farmers**, through state solar-pump schemes and dealers.",
        ],
        difficulty: { level: 'Very high', text: "Nuclear pumps need the highest quality approvals (it was the first pump company to get the ISO 19443 nuclear-safety certification), 500 hours of testing per pump, and decades of references. Standard pumps are ordinary engineering." },
        moat: "The German parent's designs, plus 47 years of Indian nuclear supply that no new entrant can match quickly. For standard pumps the dealer network and brand help, but competition is wide.",
        inShort: ["**The Indian arm of Germany's KSB**: engineered pumps for power, nuclear, oil and gas, standard pumps, valves and service. Its year is the calendar year.", "**Good:** primary coolant pumps in every Indian heavy-water reactor since 1978, and ₹1,235cr of nuclear orders. **Bad:** H1 growth of 2–3% and only 36% of profit turned into cash.", "**Verdict: wait.** Until the nuclear test passes and cash recovers; NPCIL is also developing other coolant-pump suppliers. The price needs about {need:KSB|25}% a year against my ~13%."],
        salesDrivers: ["**Nuclear**: 45% of the ₹2,745cr June 2026 order book, but only ₹30–50cr of nuclear revenue in CY25; NPCIL's test of its first fully Indian coolant pump stopped when NPCIL's own test equipment failed, and after a 500-hour test it can bill about one pump a quarter.", "**Standard pumps** through 800 dealers: about half of domestic orders, including solar pumps for state schemes.", "**Service (SupremeServ)**: growing about 15% a year.", "**Exports and data-centre liquid-cooling pumps** through global makers."],
        inputs: "**Castings** (partly from its own foundries at Ahmednagar), steel, copper and bought-in motors. Materials were 54% of sales in CY25.",
        costEffect: "**Lags costs.** It raised prices by single digits while its foundries charged 12–15% more, and fixed-price projects cannot be repriced; customers do not accept every increase suppliers ask for. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (13% to 8%). **What happened:** the castings index was flat over the chart period, yet its margin slipped from about 14% to 12% on mix and weak valves.",
        competitors: [{ name: 'Kirloskar Brothers, Flowserve', note: 'NPCIL is developing alternative coolant-pump suppliers; Kirloskar Brothers has a prototype in qualification.' }, { name: 'Grundfos, Xylem, Sulzer', note: 'Global rivals in engineered and building pumps.' }],
        position: "**India's incumbent supplier of nuclear primary coolant pumps**, backed by its German parent's designs.",
        money: "Net cash about ₹278cr (Screener); essentially debt-free. But operating cash halved to ₹93cr in CY25 as receivables and stock rose, and contingent liabilities are ₹212cr, mostly GST and excise disputes. It pays ₹31–37cr a year of royalties to its parent, sends 70–80% of exports through group companies, and will bear group software costs from 2027. The German parent holds **70%**, up from 67%.",
        watch: ["NPCIL's coolant-pump test restarting and passing.", "Whether NPCIL approves a second coolant-pump supplier.", "Receivables from solar agencies."],
        charts: pumpsCompEngCharts['KSB'],
    },

    // ── Engines and gensets ──────────────────────────────────────────────────
    {
        company: 'Powerica',
        tagline: "Builds generator sets around Cummins engines, and owns wind farms that sell power to state utilities. Listed recently.",
        revenue: '₹3,012cr (FY26, consolidated)',
        products: [
            { name: 'Diesel gensets', text: "Cummins-engine gensets from 7.5 kVA to 3,750 kVA, which it designs, assembles, installs and services. It has sold Cummins sets for 40+ years under a non-exclusive supply agreement." },
            { name: 'Large generators', text: "3–10 MW medium-speed generators with Hyundai for refineries, fertiliser plants and nuclear plants, including a 63 MW power project for NPCIL." },
            { name: 'Wind power', text: "12 wind farms (331 MW) selling power on long contracts (mostly 25 years), plus building and maintaining wind farms for others." },
            { name: 'Smaller lines', text: "Defence shelters and military gensets, Schneider control panels, and (through an associate) emission-control devices for old gensets." },
        ],
        revenueText: "Gensets were **83% of FY26 revenue (₹2,502cr)** and wind power 17% (₹512cr). The wind business earns most of the profit (49% margin in Q1 FY27 against 5.6% on gensets). Data centres were **more than 20% of genset revenue** in Q1 FY27; the data-centre book was ₹900cr of a ₹1,700cr order book at end-July and rose to ₹1,100cr a week later. FY26 profit included a one-off ₹51cr deferred-tax credit.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'Gensets', share: 83 }, { label: 'Wind power', share: 17 }] },
        ],
        customers: [
            "**Manufacturing plants** (its largest segment), then **commercial real estate**, rental companies, infrastructure, hospitals, hotels and IT.",
            "**Data-centre operators and their contractors**, now its fastest-growing customers.",
            "Wind power is sold to **Gujarat's state utility GUVNL** (10 contracts) and **SECI** (2 contracts).",
            "Sold through 19 sales offices and about 40 dealers.",
        ],
        difficulty: { level: 'Medium', text: "The engine, the hard part, is Cummins'. Powerica's skill is engineering, packaging, installing and servicing large sets, and running large projects on time. Wind farms need land, grid connection and capital more than technology." },
        moat: "Long relationships with Cummins and with customers, execution record on large data-centre and industrial jobs, and 25-year wind contracts with state buyers. The weak point is that Cummins can sell direct.",
        inShort: ["**Builds generator sets around Cummins engines** for data centres and industry, and owns 331 MW of wind farms selling power on 25-year contracts.", "**Good:** a doubled data-centre order book and 91% of five years' profit turned into cash. **Watch:** a thin 5.6% genset margin, and Cummins can sell direct.", "**Verdict: follow.** Not an own until the genset margin recovers and Cummins keeps data-centre work flowing through it; the wind growth is 70–75% borrowed. The price needs about {need:Powerica|16}% a year against my ~11%."],
        salesDrivers: ["**Data centres**: order book ₹1,100cr (August), up from ₹400–500cr a year earlier.", "**Industrial and commercial gensets** through its long-standing Cummins channel.", "**Wind**: owned capacity planned to nearly double from 331 MW to 638 MW by FY29; new turbines earn 82–83% margins after the first year.", "**Genset plant runs on one shift** at 75–80% use, so little capex is needed there."],
        inputs: "**Cummins engines, copper-wound alternators, steel enclosures and control panels.** Materials were 65% of sales in FY26; wind farms have almost no material cost.",
        costEffect: "**Lagged on gensets.** Contracts have no escalation clause, and passing on cost rises takes one or two quarters. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6–7 points, almost all from gensets. **What happened:** copper rose by about two-fifths since late 2024; its group margin still moved from about 12% to 14% because wind's share grew.",
        competitors: [{ name: 'Cummins India (direct) and other Cummins dealers', note: 'Cummins has taken some data-centre projects directly.' }, { name: 'Kirloskar Oil, Caterpillar, Sterling & Wilson', note: 'Rivals in large gensets.' }],
        position: "**One of only three genset makers that package Cummins engines in India**, under a non-exclusive supply deal, with a strong data-centre record.",
        money: "Net cash about ₹389cr at FY26 (Screener); after repaying ₹525cr of debt from IPO money, the company reported net cash of ₹193cr at June 2026. New wind farms are funded **70–75% by bank debt**: ₹380cr for 52.7 MW and ₹750cr for about 100 MW, and capital commitments rose to ₹934cr, so it will return to net debt. Founder Naresh Oberoi stepped down as chairman and MD in December 2025 in favour of his son Bharat Oberoi. Promoters hold **77%**.",
        watch: ["Genset margin back to 9–10% from Q3.", "Cummins's choices on data-centre projects.", "The 100 MW GUVNL wind project on schedule."],
        charts: pumpsCompEngCharts['Powerica'],
    },
    {
        company: 'Kirloskar Oil',
        tagline: "Makes its own diesel and gas engines and gensets, with one of India's largest dealer and service networks. Also owns a pump company and a lending arm (Arka Fincap).",
        revenue: '₹7,701cr (FY26, consolidated incl. lending); engine business ₹5,647cr standalone',
        products: [
            { name: 'Power generation', text: "Diesel and gas gensets, routinely 7.5–3,000 kVA and up to 6.3 MW on projects (including ten for NPCIL), for buildings, factories, telecom, hospitals and now data centres. It won its first hyperscale data-centre order (192 MW, 96 sets) this year." },
            { name: 'Industrial engines', text: "Engines from 20 HP to 13,500 HP for construction machines, tractors, fire pumps, railways, ships, defence and nuclear plants." },
            { name: 'Distribution and aftermarket', text: "Spares, service and retail sales through 44 aftermarket dealers, 3,300+ service engineers and 500 service points." },
            { name: 'Pumps and finance', text: "Farm and domestic pumps through KOEL Fluid Dynamics, a subsidiary since October 2025; LPG gensets in the US (Wildcat Power Gen, whose US parent lost ₹19.9cr in FY26 and owes more than it owns); retail and business loans through Arka Fincap." },
        ],
        revenueText: "In Q1 FY27 the engine and genset business (B2B) was **74% of group revenue**, pumps 15% and lending 11%. Within B2B: **power generation 49%, industrial engines 25%, spares and service 18%, exports 8%**. It sold more than 50,000 gensets in FY26 in a market of about 1.79 lakh, about 28% by units.",
        mixes: [
            { caption: 'Group revenue by segment, Q1 FY27', parts: [{ label: 'Engines and gensets', share: 74 }, { label: 'Pumps', share: 15 }, { label: 'Lending (Arka)', share: 11 }] },
            { caption: 'Engines and gensets by line, Q1 FY27', parts: [{ label: 'Power generation', share: 49 }, { label: 'Industrial engines', share: 25 }, { label: 'Spares and service', share: 18 }, { label: 'Exports', share: 8 }] },
        ],
        customers: [
            "**Businesses buying backup power**: offices, factories, hospitals, telecom towers, and now data centres, mostly through dealers, with large jobs sold directly or via contractors.",
            "**Equipment makers (OEMs)** that fit its engines into construction machines, tractors and fire pumps.",
            "**Railways, marine and defence users, and NPCIL** (a milestone-based genset order).",
            "**Farmers and households** for pumps; **retail borrowers** for Arka.",
        ],
        difficulty: { level: 'High', text: "Designing engines that meet India's CPCB IV+ emission rules and stay reliable across a huge range (a few kW to 10 MW) takes decades of engineering. Very large engines for data centres and ships are the hardest, and where it is newest." },
        moat: "Its own engines plus one of the largest service networks: it can get an engineer to a critical site within two hours, and its spares and service business has grown double digits for 12 straight quarters. Brand trust in small and mid-size gensets is strong; in very large sets Cummins is the incumbent.",
        inShort: ["**Makes diesel and gas engines and generator sets** with one of India's widest service networks, plus pumps (KOEL Fluid Dynamics) and a lending arm it plans to separate.", "**Good:** domestic share gains, a first hyperscale data-centre order and 12 quarters of double-digit aftermarket growth. **Bad:** in May it said there was ‘absolutely no margin deterioration’, then its standalone margin fell to 11.2% from 13.5%.", "**Verdict: wait.** Until margins recover and ₹2,100cr of new capacity starts filling; it also still owns a lender borrowing 3.7 times its equity. The price needs about {need:Kirloskar Oil|28}% a year against my ~15%."],
        salesDrivers: ["**Power generation**: 49% of engine-business revenue; about 28% of India's genset market by units, after volumes rose 41% against the market's 18%.", "**Data centres**: a first hyperscale order of about 192 MW, with a five-to-six-year service contract.", "**Spares and service**: 18% of engine revenue, growing double digits for 12 quarters.", "**Industrial engines, railways, marine, defence and exports** (exports fell in Q1)."],
        inputs: "**Castings and forgings**, steel, copper and alternators for gensets, and electronics. Materials were 65% of standalone sales in FY26.",
        costEffect: "**Passed on with a three-to-six-month lag.** Gross margin fell about 0.6–0.7 points year on year while price rises caught up. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6–7 points. **What happened:** the castings index was flat over the chart period, but its margin fell from about 12–13% to 11% as employee costs rose about 40% and exports dropped.",
        competitors: [{ name: 'Cummins India', note: 'The incumbent in high-horsepower and data-centre gensets.' }, { name: 'Caterpillar, Kohler, Mahindra Powerol', note: 'Rivals across genset sizes.' }],
        position: "**India's largest genset maker by volume**, with its own engines and a service engineer within two hours of critical sites.",
        money: "Standalone net cash about ₹422cr (Screener; company figure ₹485cr at June 2026). It plans ₹2,100cr of engine capex: ₹700cr for 50,000 more engines a year by April 2027, then ₹1,400cr for 20,000 large engines. Arka Fincap owes ₹5,033cr, 3.7 times its equity. The auditor lists ₹106.8cr of disputed income-tax demands not paid, more than the contingent-liability note shows, and its UAE arm is buying a promoter-group company in South Africa. Promoters hold **41%**, unchanged.",
        watch: ["Margin back above 13% as price rises land.", "The Arka Fincap separation.", "NPCIL order milestones.", "The ₹106.8cr of disputed income-tax demands."],
        charts: pumpsCompEngCharts['Kirloskar Oil'],
    },
    {
        company: 'Greaves Cotton',
        tagline: "A 165-year-old engine maker (small diesel engines for three-wheelers, gensets, fire pumps) that also owns Ampere electric scooters and an electric-vehicle lender.",
        revenue: '₹3,437cr (FY26, consolidated)',
        products: [
            { name: 'Mobility engines', text: "Small diesel and CNG engines for three-wheelers and small trucks, and a 499cc engine for Ligier's European microcars. Also engineered components (Excel Controlinkage) and engineering services (Greaves Technologies)." },
            { name: 'Energy solutions', text: "Gensets, mainly 58.5–500 kVA, sold with service." },
            { name: 'Industrial engines', text: "Engines for fire pumps (including FM-UL approved export models), marine, farm and construction use, and a direct defence order." },
            { name: 'Electric scooters and finance', text: "Greaves Electric Mobility sells **Ampere** electric scooters (5.6% market share in June 2026) and electric three-wheelers; Greaves Finance lends to EV buyers." },
        ],
        revenueText: "FY26: **mobility engines and components ₹1,584cr**, gensets ₹742cr, industrial engines ₹339cr (together the ₹2,665cr core business), and the electric-scooter company ₹786cr. Three-wheeler diesel engines alone were ₹545cr, 16% of group revenue. International sales are 13% of the core.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'Mobility engines and components', share: 45 }, { label: 'Electric scooters (GEML)', share: 23 }, { label: 'Gensets', share: 21 }, { label: 'Industrial engines', share: 10 }, { label: 'EV finance', share: 1 }], note: 'Before inter-company eliminations.' },
        ],
        customers: [
            "**Three-wheeler makers** such as Piaggio, Mahindra and Atul Auto for diesel engines; **Ligier** for microcar engines; CAT (UK) and TAFE for components.",
            "**Genset buyers** through dealers; **fire-pump makers**, boat builders and the armed forces for industrial engines.",
            "**Retail customers** for Ampere scooters (strongest in Bihar, with 19%+ share); 7,000+ retail outlets and 20,000+ mechanics service its products.",
        ],
        difficulty: { level: 'Medium', text: "Small diesel engines are mature technology, but meeting each new emission rule is costly. Electric scooters are easy to assemble and hard to make money on; the battery is the main cost." },
        moat: "Long supply relationships with three-wheeler makers and a vast mechanic network. But diesel three-wheelers are slowly giving way to electric and CNG ones, and the scooter business competes with much larger players.",
        inShort: ["**Makes small diesel engines, gensets and fire-pump engines**, and owns most of an electric-scooter maker (Ampere) and a finance arm.", "**Good:** the core engine business grows 16–19% and turns most of its profit into cash. **Bad:** that cash keeps going into scooters, which still lose money.", "**Verdict: pass.** The price needs about {need:Greaves Cotton|23}% a year against my ~15%, and includes a costly bet."],
        salesDrivers: ["**Three-wheeler and microcar engines**: 16% of group revenue, slowly losing ground to electric and CNG vehicles.", "**Gensets and industrial engines**, including fire-pump and defence engines.", "**Electric scooters (Ampere)**: share rose from about 3.2% to 5.6% in a year; the electric-vehicle company had ₹786cr of FY26 revenue and a ₹273cr loss.", "**Electric three-wheelers**: subsidy support is shrinking (the e-three-wheeler scheme's money ran out in December 2025)."],
        inputs: "**Castings, steel, aluminium and platinum-group metals** for engines; batteries and motors for electric vehicles. Materials were 67% of consolidated sales in FY26.",
        costEffect: "**Passed on with a lag.** Engine prices are partly index-linked; it expects price rises and cost cuts to show from Q2 and fully in the second half. **Rule of thumb:** a 10% rise in material costs not passed on would wipe out most of its 7% group margin. **What happened:** the castings index was flat over the chart period; its group margin rose from a loss to about 6% as scooter losses narrowed.",
        competitors: [{ name: 'Mahindra, Kirloskar Oil', note: 'Rivals in small engines and gensets.' }, { name: 'Ather, TVS, Bajaj, Ola', note: 'Much larger rivals in electric scooters.' }],
        position: "**A leading maker of small diesel engines for three-wheelers**, and a small player in electric two- and three-wheelers.",
        money: "Net cash about ₹170cr (Screener, consolidated); the parent has no debt, but consolidated borrowings rose to ₹394cr in FY26 from ₹81cr. It put ₹331cr into the scooter company's ₹530cr rights issue (its partner Abdul Latif Jameel took the rest) and ₹50cr into the finance arm in Q1 FY27. Contingent claims include ₹129cr of customs demands, one treating 2018–21 scooter-part imports as complete kits. The auditor noted the audit trail misses some privileged-user changes. Promoters hold **56%**.",
        watch: ["Scooter business reaching break-even in 4–6 quarters.", "Core margin recovering in the second half.", "Further capital sent to the scooter business."],
        charts: pumpsCompEngCharts['Greaves Cotton'],
    },

    // ── Solar pumps ──────────────────────────────────────────────────────────
    {
        company: 'Shakti Pumps',
        tagline: "One of India's largest solar-pump suppliers under PM-KUSUM, making the pump, motor and electronics in-house, with exports to 100+ countries.",
        revenue: '₹2,698cr (FY26, consolidated)',
        products: [
            { name: 'Solar pump systems', text: "Complete systems (pump, motor, controller, structure) supplied, installed and serviced for five years. It installed 86,086 in FY26 and 2.58 lakh to date." },
            { name: 'Grid pumps and motors', text: "Stainless-steel submersible pumps and motors for farms, buildings and industry, in India and abroad." },
            { name: 'Power electronics', text: "Controllers, variable-speed drives and inverters made in-house (400,000 a year capacity), which it also sells to others." },
            { name: 'New businesses', text: "Rooftop solar, electric-vehicle motors and controllers (at trial stage with car makers), and a 2.2 GW solar cell and module plant due by FY28." },
        ],
        revenueText: "Government schemes were **77% of FY26 revenue**, exports 15% (₹411cr, mainly the Middle East 41%, Africa 33% and the US 19%) and other customers 8%. The company estimates its **share of PM-KUSUM at about 25%**.",
        mixes: [
            { caption: 'Revenue by customer, FY26', parts: [{ label: 'Government schemes', share: 77 }, { label: 'Exports', share: 15 }, { label: 'Industrial, OEM and retail', share: 8 }] },
        ],
        customers: [
            "**Farmers, through state agencies** in Maharashtra, Rajasthan, Haryana, Punjab, UP, MP and now Karnataka: the agency sets the price and approves suppliers; the farmer picks one.",
            "**Overseas governments and distributors** (for example a $35m solar water project for Uganda).",
            "**Dealers and industrial buyers** (500+ dealers and 400+ service centres in India).",
        ],
        difficulty: { level: 'Medium', text: "Pumps and motors are mature. The harder part is the electronics that let a pump run efficiently on varying sunlight, which Shakti designs itself (15 patents), and installing and servicing hundreds of thousands of pumps in remote villages." },
        moat: "Scale and execution record in the scheme, and in-house electronics that lower costs. But the buyer (the state) sets the price and dozens of approved suppliers compete, so pricing power is weak.",
        inShort: ["**India's largest solar-pump maker** for government schemes, with its own motors, controllers and inverters, and new solar-cell and module plants.", "**Good:** pumps installed rose 58%. **Bad:** the margin fell from 23% to about 10%, and ₹1,799cr is owed to it.", "**Verdict: pass.** The price needs about {need:Shakti Pumps|17}% a year against my ~8%, and profit is mostly money owed by state agencies."],
        salesDrivers: ["**PM-KUSUM and state schemes**: 77% of FY26 revenue; it estimates a 25% share of PM-KUSUM.", "**Exports**: 15% of revenue, mainly the Middle East, Africa and the US.", "**Scheme timing**: KUSUM 2.0 is awaiting approval; the order book fell from ₹1,500cr to ₹1,000cr (both including GST), about four months of work.", "**New businesses**: rooftop solar, EV motors and a 2.2 GW cell-and-module plant."],
        inputs: "**Copper and steel** for pumps and motors, electronics for controllers, and **solar panels**. Materials were 69% of sales in FY26.",
        costEffect: "**Not protected.** Scheme prices are fixed at tender, so it bears raw-material rises. Management put the ₹61cr fall in Q1 operating profit at ₹36cr from raw materials and ₹25cr from lower prices. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points. **What happened:** copper rose by about half over the chart period; its margin rose to 23% at the scheme peak, then fell back to about 10%.",
        competitors: [{ name: 'Oswal, CRI, Kirloskar Brothers', note: 'Rivals on state scheme tenders.' }, { name: '40-plus unlisted makers', note: 'Approved suppliers bidding on the same tenders.' }],
        position: "**The largest supplier to PM-KUSUM**, with about a quarter of the scheme.",
        money: "Screener shows ₹505cr of borrowings against ₹684cr of cash and investments at FY26; the borrowings include ₹119cr of supplier finance and a ₹31cr loan from a promoter-group company. It plans ₹1,500–1,700cr of capex by September 2027, part-funded by an ₹800cr term loan; ₹101cr of its FY24 share sale was still unused. It buys goods and construction from promoter-family companies, and its auditor noted the accounting software's audit trail is not kept for some transactions. Promoters hold **50%**, down from 56%.",
        watch: ["PM-KUSUM 2.0 approval.", "Collections from state agencies.", "The module line starting in September."],
        charts: pumpsCompEngCharts['Shakti Pumps'],
    },
    {
        company: 'Oswal Pumps',
        tagline: "A fast-growing solar-pump maker from Karnal, Haryana, that makes its own pumps, motors and solar panels, and is moving into rooftop solar. Listed recently.",
        revenue: '₹2,064cr (FY26, consolidated)',
        products: [
            { name: 'Solar pump systems', text: "Turnkey systems (pump, motor, panels, structure, controller, installation) under PM-KUSUM and state schemes such as Maharashtra's Magel Tyala. It has supplied 1.19 lakh such systems directly." },
            { name: 'Grid pumps and motors', text: "Submersible and monoblock pumps for farms, homes and industry, sold through 1,400+ distributors." },
            { name: 'Solar modules', text: "Panels from its own 570 MW plant, used in its systems and sold to other scheme suppliers." },
            { name: 'Rooftop and utility solar', text: "Rooftop systems under PM Surya Ghar, and solar projects for businesses and utilities: 72 MW of orders at the Q1 call, plus a ₹297.5cr order won on 23 September to put 46.7 MW on 9,937 Telangana government schools within 180 days." },
        ],
        revenueText: "In FY26 about **80% of product revenue came from government schemes**: Maharashtra's Magel Tyala and other state schemes 49%, direct PM-KUSUM supply 27%, and sales to other scheme suppliers 4%. Only 20% came from outside the schemes. It supplied 1.81 lakh pumps in FY26, just under half of them solar.",
        mixes: [
            { caption: 'Product revenue by channel, FY26', parts: [{ label: 'Other state schemes (mainly Magel Tyala)', share: 49 }, { label: 'PM-KUSUM, direct', share: 27 }, { label: 'Outside government schemes', share: 20 }, { label: 'To other scheme suppliers', share: 4 }] },
        ],
        customers: [
            "**Farmers through state agencies**: Haryana (54,000 systems to date), Maharashtra (27,000), Rajasthan (25,000) and a dozen smaller states.",
            "**Other PM-KUSUM suppliers**, which buy its pumps and panels.",
            "**Households and businesses** through distributors, and rooftop buyers under PM Surya Ghar.",
        ],
        difficulty: { level: 'Low', text: "Pumps, motors and panel assembly are established technologies with many makers. The difficulty is running a large installation and service operation and funding the long wait for state payments." },
        moat: "Low-cost integrated manufacturing and strong positions in Haryana and Maharashtra. But 40–45 bidders compete on state tenders, so the moat is thin; it is diversifying into rooftop and utility solar, where margins are lower.",
        inShort: ["**Makes solar pumps and motors for state schemes**, plus solar modules, and is moving into rooftop solar and cables; listed in 2025.", "**Good:** low-cost, integrated manufacturing. **Bad:** tender prices fell 9%, volumes fell, and operating cash has been negative for two years.", "**Verdict: pass.** The price needs about {need:Oswal Pumps|5}% a year, but I expect roughly none, and cash and governance are weakening."],
        salesDrivers: ["**State schemes**: about 80% of product revenue (Maharashtra's Magel Tyala and other state schemes 49%, PM-KUSUM 27%).", "**Tender prices**: down 8–9% as 40-plus bidders crowded into Maharashtra.", "**Rooftop solar (PM Surya Ghar)**: it hopes for ₹800–1,000cr this year, at lower margins.", "**Modules**: a 1 GW line promised by the end of Q2 was still ‘being set up’ on 10 October 2026; the board now wants to stop module capacity at about 1.6 GW and add its own 1.2 GW cell plant by April 2028 (about 75% of its cell needs)."],
        inputs: "**Copper and steel** for pumps and motors, and **solar cells** for its modules. Materials were 61% of sales in FY26.",
        costEffect: "**Not protected.** Tender prices are fixed; it put the margin fall at 8–9 points from prices, 3–3.5 from raw materials and 1–1.5 from lost scale. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points. **What happened:** copper rose by about half since early 2024 and its margin fell from about 20% to 16%, with much larger falls within the year.",
        competitors: [{ name: 'Shakti, CRI', note: 'Rivals on state tenders.' }, { name: 'Tata Power Solar, Waaree and others', note: 'Much larger rivals in rooftop solar.' }],
        position: "**A strong player in Haryana and Maharashtra solar-pump schemes.**",
        money: "Net cash about ₹154cr at FY26 (Screener, after its share sale); the company reported net debt of ₹135cr in March and ₹266cr by June 2026, with ₹210cr of IPO money still unused at 8 October. On 10 October 2026 the board proposed a ₹456cr, 1.2 GW solar-cell plant at Karnal, funded by ₹296cr of new debt and ₹159.85cr of IPO money moved from the planned aluminium-frame unit and the last 500 MW of module and 300 MW of EVA-film capacity; shareholders must approve the change by postal ballot. ICRA moved its A+ rating outlook to negative in a letter dated 22 September 2026 (disclosed 23 September), citing receivables and weaker profits. It bought ₹132cr of goods in FY26 from Walso Solar, an associate formed from two promoter-linked firms (₹64.5cr a year earlier), had to revise its bank drawing-power statements to match its books, and its CFO resigned in May 2026. Promoters hold **76%**.",
        watch: ["Receivables coming down from 229 days in Q3 as promised.", "Q2 revenue +10–15% as guided.", "Related-party purchases in FY27."],
        charts: pumpsCompEngCharts['Oswal Pumps'],
    },
];

export const pumpsCompEngBusinesses = { intro, profiles };
