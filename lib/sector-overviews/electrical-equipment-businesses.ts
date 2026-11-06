import { BusinessProfile, OverviewSection } from './types';
import { electricalEquipmentCharts } from './card-data/electrical-equipment';

// Tab 2 of the Electrical Equipment note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' Q1 FY27 presentations and calls; where a split is not
// disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each covers what it sells, where the revenue comes from, who buys and how, how hard the product is to make, and why customers stay. Revenue totals are filed figures; splits are from each company's latest presentation or call, and some are my calculations from those figures (marked).",
        ],
    },
    {
        heading: 'The equipment, in plain words',
        body: [
            "Follow electricity from where it is made to where it is used.",
        ],
        points: [
            {
                label: 'Steam turbine, gas engine, generator',
                text: "A **turbine** or **engine** spins; a **generator** (an alternator) attached to it turns that motion into electricity. Industrial steam turbines (Triveni) run on steam from burning biomass, waste or fuel, or on waste heat from factories. Generators (TD Power) are built to match whoever makes the turbine or engine, and are sold to those makers.",
            },
            {
                label: 'Gearbox',
                text: "Changes speed and force between a motor and a machine: a conveyor, a crusher, a steel mill roll, a ship's propeller. Industrial gearboxes (Elecon) are either catalogue products or engineered to order.",
            },
            {
                label: 'Conductors and cables',
                text: "**Conductors** are the bare aluminium or composite wires strung on transmission towers; premium types (HTLS) carry more power on the same towers. **Cables** are insulated and run underground, inside buildings, trains, ships and data centres (Apar, Salzer).",
            },
            {
                label: 'Smart meter and switchgear',
                text: "A **smart meter** records electricity use and reports it remotely, so utilities can bill accurately and cut theft (Genus). **Switchgear** switches circuits on and off and protects them from faults: switches, contactors, relays (Salzer). **Enclosures** are the metal or plastic boxes that house meters and switchgear (RMC).",
            },
            {
                label: 'Wind turbine, towers and structures',
                text: "A **wind turbine** (Inox Wind) is a tower, a nacelle holding the generator and gearbox, and blades. Steel **towers and structures** (KP Green) hold up transmission lines, telecom antennas and solar panels; they are galvanised (coated in zinc) to last decades outdoors.",
            },
            {
                label: 'Power electronics and chargers',
                text: "Devices that convert and control electricity: **EV chargers** (AC wallbox chargers at home; DC fast chargers in public), **inverters** for solar and batteries, **power systems** for telecom towers (Exicom, Servotech), and the **power semiconductors** inside them, such as thyristors and silicon-carbide chips (RIR).",
            },
        ],
    },
    {
        heading: 'Five ways of selling',
        body: [
            "How a company sells explains most of the gap in cash conversion in Tab 1.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**To global equipment makers (OEMs)**', 'TD Power, Triveni (partly), Elecon exports', 'Negotiated, often with price-variation clauses', 'Normal credit terms; some advances'],
                    ['**Private and export projects**', 'Apar exports, Triveni, KP Green (solar structures)', 'Negotiated or bid', 'Milestones; fairly reliable'],
                    ['**Indian government utilities and PSUs**', 'Genus, RMC, Apar (domestic), Elecon (PSUs), KP Green (BSNL)', 'Tenders, often fixed-price', 'Slow; retention money held back'],
                    ['**Group companies**', 'Inox Wind (Inox Clean/Green), KP Green (KP group)', 'Stated to be arm’s length', 'Depends on the group’s own funding'],
                    ['**Dealers, retail and white-label**', 'Salzer, Exicom (wallbox chargers), Servotech', 'Price lists or cost-plus', 'Quick, but thin margins'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Engineered machines ──────────────────────────────────────────────────
    {
        company: 'Elecon Engg.Co',
        inShort: ["**India's biggest industrial gearbox maker**, selling to steel, cement, power and sugar plants in India and abroad.", "**Good:** high returns, strong cash generation and ₹683cr of net cash on Screener (about ₹700cr by the company's count). **Watch:** the margin slipped from 24% to 21% in FY26 and recovered to 23.1% in Q2 FY27 on price rises and exports, but domestic demand is flat.", "**Verdict: follow, close to buyable.** The price needs a little more than the 15% a year I expect, but trailing profit is cut by a one-off write-off; on underlying profit it fits."],
        tagline: "India's leading industrial gearbox maker, with a material-handling equipment business and assembly and sales companies abroad.",
        revenue: '₹2,366cr (FY26, consolidated)',
        products: [
            { name: 'Industrial gears', text: "Catalogue gearboxes (54% of gear sales, priced from a monthly list) and engineered gearboxes (46%) for steel, cement, power, sugar, mining and ports, plus marine and naval gearboxes." },
            { name: 'Material-handling equipment', text: "Custom conveyor systems, stacker-reclaimers, wagon tipplers and crushers, mostly for power plants, cement and ports." },
            { name: 'Overseas businesses', text: "Benzler (Europe), Radicon (UK and US) and a Singapore unit, which assemble and sell gearboxes close to customers." },
        ],
        revenueText: "Gears were **76% of Q2 FY27 revenue** (₹488cr) and material handling 24% (₹151cr); in Q1 they were 80% and 20%. Overseas revenue was ₹159cr in Q2 (+31%) and 27% of H1; in FY26 it was ₹463cr, led by Europe (₹171cr), the UK (₹102cr) and the US (₹102cr).",
        mixes: [
            { caption: 'Revenue by division, Q2 FY27', parts: [{ label: 'Gears', share: 76 }, { label: 'Material handling', share: 24 }] },
            { caption: 'Overseas revenue by region, FY26 (₹463cr)', parts: [{ label: 'Europe (Benzler)', share: 37 }, { label: 'UK', share: 22 }, { label: 'US', share: 22 }, { label: 'Middle East', share: 14 }, { label: 'Singapore', share: 5 }] },
        ],
        customers: [
            "**Steel, cement, power and sugar plants**, many of them public-sector, often through their EPC contractors.",
            "**Navy and shipbuilders** (naval gearboxes) and **ports and mines**.",
            "**Overseas OEMs** in the Middle East, US and Europe; it serves 95+ countries.",
        ],
        difficulty: { level: 'High', text: "Large engineered and naval gearboxes need precise design, heat treatment and testing done in-house. Catalogue gears face competition from multinationals building Indian plants." },
        moat: "Breadth of range, a 75-year record and fast delivery make it a preferred supplier to Indian heavy industry. Pricing is limited by PSU buyers and foreign rivals.",
        salesDrivers: ["**Factory spending in India**: new steel, cement, power and sugar capacity. Gearboxes are a small share of a plant's cost, so buyers rarely delay a project over gear prices, but they do delay projects when the economy is uncertain.", "**Government and public-sector orders**, which are slow to place (a naval gearbox order has been pending for months).", "**Overseas demand** through Benzler (Europe) and Radicon (UK, US): 29% of Q1 sales.", "**Volume and price together**: catalogue prices are reset every month, so part of any growth in a metals upcycle is price.", "**Capacity is not a limit today**: plants run at 56–60%; the ₹400cr being spent over FY26–FY28 mainly adds engineered and marine capability."],
        inputs: "**Steel is the main input**: forgings and castings for gear shafts and housings, plus bearings, seals, motors and structural steel for conveyors.",
        costEffect: "**Mostly protected, with a short lag.** About 54% of gear sales are catalogue products whose price list is updated monthly; on engineered orders it locks raw-material prices with suppliers when it accepts the order. The material-handling business is custom project work and takes the biggest hit. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (22% to 17%). **What happened:** steel-forging prices were flat to lower over three years, yet its margin slipped from 24–25% to about 21% in FY26 as rivals holding cheaper stock undercut prices.",
        competitors: [{"name": "Flender (formerly Siemens)", "note": "German gear major with Indian plants; strongest in large engineered gearboxes."}, {"name": "SEW-Eurodrive, Bonfiglioli, NORD", "note": "Multinationals expanding Indian capacity in catalogue gear motors; management expects price pressure from them on new projects."}, {"name": "Shanthi Gears (Murugappa group)", "note": "Listed Indian gear maker, smaller and more custom-focused."}, {"name": "TRF, thyssenkrupp Industries India, FLSmidth", "note": "Competitors in conveyors and bulk material handling."}],
        position: "**India's largest maker of industrial gears**, with 38–40% of the market (ICRA) and one of the broadest ranges. Elecon says customers prefer it for fast delivery.",
        money: "The company puts its net cash at about ₹700cr (June 2026 call); Screener shows ₹683cr. Capex of ₹400cr over FY26–FY28 is funded from its own cash. Promoters hold **59%**, unchanged over three years. No equity raised. Its auditor lists sales, purchases and services with several promoter-group companies as a key audit matter, and FY26 profit was cut by a ₹102cr non-cash write-off of goodwill on its 2010-11 purchase of Benzlers-Radicon.",
        watch: ["H2 revenue growth of about 15% (guided 15 Oct 2026) from the record ₹1,635cr order book.", "Gear margin holding near Q2's 22% EBIT; material handling back to 22–24%.", "Whether multinationals' new Indian plants push catalogue prices down.", "Navy frigate (P-17 Bravo) gear orders, now expected at the start of FY29."],
        charts: electricalEquipmentCharts["Elecon Engg.Co"],
    },
    {
        company: 'TD Power Systems',
        inShort: ["**Makes generators and motors** for global engine and turbine makers; most orders are exports, driven by US data centres.", "**Good:** revenue up 72% with steady margins, and contracts pass on metal costs. **Bad:** ten customers are 84% of revenue, little of its profit has turned into cash, and it is raising equity.", "**Verdict: follow.** A great business whose price needs about {need:TD Power Systems|31}% growth a year, well above the 22% its own expansion plan supports."],
        tagline: "Bangalore-based maker of generators and motors, sold mostly to global engine and turbine makers; one of the few independent suppliers in its size range.",
        revenue: '₹1,856cr (FY26, consolidated)',
        products: [
            { name: 'Generators', text: "For steam turbines (up to 250 MW), gas turbines (up to 250 MVA), gas and diesel engines (up to 25 MVA) and hydro plants (up to 45 MW); gas-engine generators became the largest line in FY26, driven by US data centres and grid stabilisation." },
            { name: 'Motors', text: "Large electric motors for industry, a growing line." },
            { name: 'Railways and aftermarket', text: "Traction equipment for Indian Railways (no new orders being taken), plus spares and service (5–6% of sales). A small plant in Turkey serves as backup capacity." },
        ],
        revenueText: "Most orders now come from exports: **93% of Q1 FY27 order inflow** and about 57% of the ₹2,208cr order book (excluding railways). By business, generators and motors are 87% of the order book.",
        mixes: [
            { caption: 'Order book by business, June 2026 (₹2,208cr)', parts: [{ label: 'Generators and motors', share: 87 }, { label: 'Railways', share: 10 }, { label: 'Turkey', share: 2 }, { label: 'Aftermarket', share: 1 }] },
        ],
        customers: [
            "**Global makers of gas engines and gas and steam turbines**, including a major US gas-turbine maker and European and US OEMs building for the US market. It says it works with all the major engine and turbine makers.",
            "**Indian turbine and hydro equipment makers** (captive power, waste heat, hydro refurbishment).",
            "Its ten largest customers were **84% of FY26 revenue**. Its installed base is 8,375 machines in 113 countries.",
        ],
        difficulty: { level: 'High', text: "Generators must be engineered to each OEM's machine and qualified before orders arrive. The hard part is winning and keeping OEM qualification and delivering on time as volumes jump." },
        moat: "Qualification with the world's engine and turbine makers, at a time when generators are in short supply. Customers depend on it for delivery, which gives it room to hold margins.",
        salesDrivers: ["**Global demand for power equipment**: US data centres, grid stabilisation and gas engines. 93% of Q1 orders were exports.", "**How many gas engines and turbines its customers sell**: it is a supplier to engine and turbine makers, so its orders follow theirs a year or so later.", "**Capacity**: enough for about ₹3,200cr of sales in FY28, with ₹50cr of debottlenecking; plans for ₹4,000cr+ in FY29–FY30.", "**Indian demand is steadier**: management puts domestic growth at 10–12% a year.", "**Railway contract is ending**: no new traction orders are being taken."],
        inputs: "**Copper and electrical steel** (for windings and cores), plus castings, shafts, bearings and insulation.",
        costEffect: "**Well protected.** Contracts carry **price-variation clauses**, and management says they have been applied; it also uses cost cuts, product mix and a weaker rupee (it exports most of its output) to hold margins. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (18% to 11%). **What happened:** copper prices rose about 50% over three years while its margin stayed at 17–19%.",
        competitors: [{"name": "ABB, Siemens, WEG, Nidec (Leroy-Somer)", "note": "Global generator and motor makers; several also make engines or turbines, so independent makers like TD Power suit OEMs that want a neutral supplier."}, {"name": "Brush (UK)", "note": "Specialist turbine-generator maker."}, {"name": "BHEL and CG Power", "note": "Indian rivals in large generators and motors."}],
        position: "One of the few independent generator makers qualified with the world's major engine and turbine makers: INNIO since 2009, a Siemens licence for generators up to 250 MVA since 2012, and a ten-year Siemens Energy agreement from August 2026. It does not disclose market share.",
        money: "It issued ₹75cr of shares to the two promoters at ₹600 a share (allotted 21 September 2026) and then raised the full ₹600cr QIP on 12 October at ₹775 a share, a 6% discount, from Axis, Canara Robeco, ICICI Prudential and other funds (about 2.4% dilution), although it has almost no debt. Promoter holding fell from **34% to 27%** over three years. Free cash has been thin: about 2% of sales over five years, and ₹19cr in FY26.",
        watch: ["What the ₹600cr QIP money (raised 12 October 2026) is spent on.", "The large-generator plan (rotors up to about 200 MW), promised for the Q2 call.", "US data-centre orders: any slowdown would show in orders about a year later."],
        charts: electricalEquipmentCharts["TD Power Systems"],
    },
    {
        company: 'Triveni Turbine',
        inShort: ["**One of the world's leading makers of industrial steam turbines** up to 100 MW, plus a growing spares and service business.", "**Good:** high returns, net cash, and customers pay in advance. **Bad:** it prices orders a year ahead, so cost rises hit margins (down to 12% in Q1).", "**Verdict: wait.** The price needs far more growth than the 14% a year I expect, now that management has lowered its margin target."],
        tagline: "One of the world's leading makers of industrial steam turbines up to 100 MW, with 6,000+ installed in 80+ countries.",
        revenue: '₹2,181cr (FY26, consolidated)',
        products: [
            { name: 'Steam turbines', text: "For captive power and process steam in sugar, steel, cement, paper, chemicals, biomass and waste-to-energy plants, and for utilities." },
            { name: 'Aftermarket', text: "Spares, service, upgrades and refurbishment of its own and other makers' turbines, including gas turbines and geothermal units." },
            { name: 'New technologies', text: "Organic Rankine cycle units (power from low-temperature heat), heat pumps, and a CO₂-based energy-storage pilot with NTPC." },
        ],
        revenueText: "In Q1 FY27 **domestic sales were 54% and exports 46%**. Aftermarket is **29% of the ₹2,180cr order book**, and exports 57% of it.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27', parts: [{ label: 'India', share: 54 }, { label: 'Exports', share: 46 }] },
            { caption: 'Order book by type, June 2026', parts: [{ label: 'New turbines', share: 71 }, { label: 'Aftermarket', share: 29 }] },
        ],
        customers: [
            "**Process industries** (sugar, steel, cement, paper, chemicals) building captive power, in India, Southeast Asia, Africa and Europe.",
            "**Utilities and developers**: NTPC (energy storage pilot), and US data-centre and combined-cycle projects it is bidding for.",
            "Sold directly and through consultants and EPC contractors.",
        ],
        difficulty: { level: 'High', text: "Steam turbines need precise aerodynamic design, high-temperature materials and machining, and long reliability records. Few companies make them in this size range." },
        moat: "Its own designs, a large installed base that feeds a growing aftermarket, and qualification with consultants and EPC firms worldwide.",
        salesDrivers: ["**Industrial capital spending**: sugar, steel, cement, paper and chemical plants building captive power. Domestic orders fell 35% in Q1.", "**Exports** (46% of Q1 sales), including a push into US combined-cycle and data-centre projects.", "**Aftermarket**: spares and service on 6,000+ installed turbines; 39% of Q1 orders, steadier than new turbines.", "**Order timing**: turbines take 12–18 months to deliver, so today's sales reflect orders won a year ago."],
        inputs: "**Special steels, forgings and castings** for rotors, blades and casings, plus bought-in gearboxes, generators and controls.",
        costEffect: "**Exposed for about a year.** Orders are priced when won and delivered 12–18 months later, so a rise in costs in between comes out of the margin. Management said Q1 margins fell because orders taken a year ago assumed lower commodity prices, and because more domestic (lower-price) orders were delivered. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (21% to 16%). **What happened:** margin fell from about 23% to 12% in Q1 FY27.",
        competitors: [{"name": "Siemens Energy", "note": "The main global rival in industrial steam turbines."}, {"name": "MAN Energy Solutions (Everllence), Mitsubishi, Elliott", "note": "Global makers in the same size range."}, {"name": "Chinese makers (e.g. Hangzhou Steam Turbine)", "note": "Cheaper, strong in Asia and Africa; Triveni prices lower where its share is small."}, {"name": "BHEL", "note": "Indian public-sector rival, mostly in larger sizes."}],
        position: "**One of the top two makers of industrial steam turbines under 100 MW** worldwide, and dominant in India in its size range (ICRA). That market has been flat at about 7 GW a year since 2021, so growth must come from share, exports and service.",
        money: "Customer advances usually keep working capital negative, but year-end billing lifted receivables to ₹639cr (84 days) in March 2026; Q1 reverted to negative working capital. It holds about ₹1,020cr of cash and no debt. Capex is small (about 2–3% of sales). Promoters hold **56%**, unchanged. No equity raised. Management lowered its margin anchor from a 25% operating-margin ‘mean’ to a before-tax margin of over 20%.",
        watch: ["Margin recovering in H2 as older low-priced orders are delivered.", "US orders converting into firm contracts.", "Domestic ordering after a 35% fall in Q1."],
        charts: electricalEquipmentCharts["Triveni Turbine"],
    },
    {
        company: 'GE Power',
        inShort: ["**GE Vernova's Indian arm**, now mainly servicing steam turbines and boilers at Indian power plants.", "**Good:** turnaround complete, net cash, very little spending needed. **Bad:** revenue has halved since FY22 and the parent controls strategy.", "**Verdict: pass.** FY26 profit was flattered by about ₹156cr of one-offs, and about half its cash is lent to its parent's group."],
        tagline: "GE Power India: the Indian arm of GE Vernova's steam power business, now mainly servicing steam turbines and boilers at power plants.",
        revenue: '₹1,269cr (FY26, consolidated)',
        products: [
            { name: 'Power-plant services', text: "Maintenance, overhauls, upgrades and spares for steam turbines, generators and boilers, for its own (GE and legacy Alstom) fleet and increasingly for other makers' equipment." },
            { name: 'Exited businesses', text: "It sold its hydro and gas businesses, settled with BHEL, and is demerging its Durgapur boiler-component factory into JSW Energy (10 JSW Energy shares for every 139 GE Power India shares)." },
        ],
        revenueText: "Services orders were ₹734cr in FY26, up 34%. Orders for other makers' fleets grew from ₹162cr to about ₹320cr, **roughly 44% of the total** (my calculation). Revenue has fallen from ₹2,620cr in FY22 as project work was dropped.",
        mixes: [
            { caption: 'Services order booking by fleet, FY26 (my calculation)', parts: [{ label: 'GE and Alstom fleet', share: 56 }, { label: 'Other makers’ fleets', share: 44 }] },
        ],
        customers: [
            "**Thermal power producers** in India (central, state and private).",
            "**International customers** in Saudi Arabia, Turkey, Austria, the UAE, Malaysia, Indonesia and Morocco.",
        ],
        difficulty: { level: 'High', text: "Servicing large steam turbines and boilers needs original designs, specialist engineers and access to parts. The parent's technology is the core of the offer." },
        moat: "The installed base of GE and Alstom equipment in Indian power plants, which needs periodic overhauls, plus the parent's technology. Growth depends on how much thermal capacity keeps running.",
        salesDrivers: ["**How much India's coal and gas power plants run and are overhauled**: services are now the whole business.", "**Orders from other makers' fleets**, which grew to about 44% of services orders in FY26.", "**Selective bidding**: management takes only cash-accretive work, which keeps revenue lower but margins higher.", "**Revenue has shrunk**: from ₹2,620cr in FY22 to ₹1,269cr in FY26 as project work was exited."],
        inputs: "**Spare parts and components**, much of it sourced from the GE Vernova group, plus site labour and subcontractors.",
        costEffect: "**Moderately protected.** Service jobs are priced per job and are short, so costs are re-priced quickly; the risk is in long fixed-price contracts, which it has been exiting. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (21% to 17%). **What happened:** margins jumped to 32–34% in Q3–Q4 FY26 on one-offs and fell back to 15% in Q1.",
        competitors: [{"name": "BHEL", "note": "Built most of India’s coal fleet and services it; the dominant player."}, {"name": "Siemens Energy, Doosan, Mitsubishi Power", "note": "Service their own installed equipment in India."}, {"name": "Independent service companies", "note": "Cheaper, local repair and overhaul firms."}],
        position: "Services a large installed base of GE and legacy Alstom steam turbines and boilers in India. It no longer bids for new plants.",
        money: "The company reports about ₹880cr of liquidity, more than the figure above, but ₹450cr of it is an inter-corporate deposit, repayable on demand, with LM Wind Power Blades (India), the GE Vernova group company that runs the group's cash pool. Contingent liabilities (sales tax, income tax, GST and other claims) total about ₹458cr, close to its net worth. Very little capex. The parent owns **69%**. Shareholders will receive JSW Energy shares once the NCLT sanctions the Durgapur demerger, which is still pending.",
        watch: ["Services orders growing without one-off gains.", "Completion of the Durgapur demerger to JSW Energy.", "Any change in the parent's plans for the Indian listing."],
        charts: electricalEquipmentCharts["GE Power"],
    },

    // ── Grid products ────────────────────────────────────────────────────────
    {
        company: 'Apar Inds.',
        inShort: ["**One of the world's largest makers of power-line conductors**, plus transformer oils and specialty cables.", "**Good:** global scale and new US utility and data-centre approvals; metal costs are passed through. **Bad:** thin margins (8%), weak cash conversion, and Q1 was flattered by a one-off oil gain while conductor volume fell 6.7%.", "**Verdict: wait.** An excellent franchise, but the price needs well above the 18% a year I expect."],
        tagline: "One of the world's largest makers of power-line conductors, also a major maker of transformer oils and specialty cables.",
        revenue: '₹22,902cr (FY26, consolidated)',
        products: [
            { name: 'Conductors', text: "Conventional aluminium conductors, premium high-capacity conductors (HTLS) that upgrade existing lines, fibre-optic ground wire (OPGW), and copper conductors for railways." },
            { name: 'Specialty oils', text: "Transformer oils (a global leader), automotive and industrial lubricants, from plants in India and the UAE." },
            { name: 'Cables', text: "Medium-voltage power cables, rubber (elastomeric) cables for railways, defence and solar, data-centre cables for the US, and a new retail wires business." },
        ],
        revenueText: "In Q1 FY27 **conductors were 48% of divisional revenue, cables 27% and oils 25%**. Exports were 27.5% of the total. Premium products were 50% of conductor sales. The conductor order book is ₹10,190cr, 57% of it export. For FY26 as a whole, conductors were 52% of divisional revenue, cables 25% and oils 22%; cables overtook oils for the first time.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (before eliminations)', parts: [{ label: 'Conductors', share: 48 }, { label: 'Cables', share: 27 }, { label: 'Specialty oils', share: 25 }] },
        ],
        customers: [
            "**Transmission developers and utilities** in India (Power Grid and private developers), and **large US and European utilities** (two multi-year contracts worth over ₹2,800cr in Q1).",
            "**US data-centre electrical contractors**: it is now approved for cables at Google, Microsoft and Meta sites.",
            "**Transformer makers** (oils), **Indian Railways and defence** (cables), and **retail** (lubricants and wires).",
        ],
        difficulty: { level: 'Medium', text: "Conventional conductors are made by many. Premium conductors, US utility and data-centre approvals, and specialty oils need testing, qualification and scale that few can match." },
        moat: "Global scale, low cost, and approvals from demanding buyers (US utilities, hyperscale data centres). Metal prices are passed through, so the margin is on conversion, not on the metal.",
        salesDrivers: ["**Transmission spending** in India and abroad: 57% of the ₹10,190cr conductor order book is export, including two US and European utility contracts worth over ₹2,800cr.", "**Metal prices**: aluminium and copper are passed through, so higher prices raise revenue without raising profit, and can delay orders when customers have not hedged.", "**Mix**: premium conductors (HTLS) are 50% of conductor sales and earn more per tonne.", "**US data centres**: new approvals from Google, Microsoft and Meta for cables.", "**Tariffs**: US duties on aluminium are borne by customers, but a change could shift demand."],
        inputs: "**Aluminium** (conductors), **copper** (railway conductors and cables), **base oil** (transformer and specialty oils), and polymers for cable insulation.",
        costEffect: "**Metal is passed through; margin is earned per tonne.** Contracts are priced on metal cost plus a conversion charge, so rising metal prices lower the percentage margin but not rupee profit. The oil division is the exception: its margin swings with base-oil prices and stock gains, as in Q1 FY27 when it earned 3.6 times its usual per-litre profit. **Rule of thumb:** a 10% rise in material costs, if not passed on, would wipe out almost all of its 8% margin; this is why pass-through matters so much. **What happened:** aluminium rose about 59% over three years while its margin stayed at 8–9% (11.5% in Q1 on oil gains).",
        competitors: [{"name": "Sterlite Electric, Transrail, Hindusthan Urban Infrastructure", "note": "Indian conductor makers."}, {"name": "Prysmian, Nexans, Southwire", "note": "Global cable and conductor majors, its competitors in US and European tenders."}, {"name": "Savita Oil, Gandhar Oil, Nynas", "note": "Rivals in transformer and specialty oils."}, {"name": "KEI, Polycab, Havells", "note": "Rivals in power cables and retail wires."}],
        position: "**One of the world's largest makers of conductors** and a global leader in transformer oils.",
        money: "It raised ₹2,500cr through a QIP in August 2026, ₹1,875cr of it for working capital, and CARE upgraded it to AA. Promoter holding fell from **58% to 55%**. Free cash has been about 1% of sales over five years because working capital grows with metal prices; much of it is funded by supplier credit and letters of credit (about ₹7,362cr of other liabilities in March 2026).",
        watch: ["Oil margins returning to normal after the Q1 stock gains.", "Conversion of US and European conductor contracts.", "Oil profit per kilolitre falling back from Q1's ₹25,482 toward ₹6,000–8,000."],
        charts: electricalEquipmentCharts["Apar Inds."],
    },
    {
        company: 'Genus Power',
        inShort: ["**One of India's largest smart-meter makers**, which also installs and runs meters for utilities under 8–9 year contracts.", "**Good:** fast growth and a big order book. **Bad:** fixed prices with no cost pass-through, and it borrows to fund the meters (₹1,580cr net debt).", "**Verdict: wait.** Cheap on profit, but cash only starts coming in from FY28, the order book is shrinking and a money-laundering case is before a court."],
        tagline: "One of India's largest smart-meter makers, and a meter service provider that installs, owns and runs meters for utilities under long concessions.",
        revenue: '₹4,751cr (FY26, consolidated)',
        products: [
            { name: 'Smart meters', text: "Single- and three-phase electricity meters with its own communication (RF mesh), made at 18 million+ a year." },
            { name: 'Metering service (AMISP)', text: "Under the government's RDSS scheme it installs meters and runs the data systems for utilities, paid monthly over 8–9 years. The projects sit in a platform owned 74% by GIC (Singapore) and 26% by Genus." },
            { name: 'Software and new meters', text: "Head-end and meter-data software; smart gas and water meters; exports (target ₹500cr in two to three years)." },
        ],
        revenueText: "Most revenue today is supplying and installing meters for its own concessions. The March order book of ₹25,173cr was roughly **64% meter supply and installation, 28% operation and maintenance, and 8% other meters and exports** (from management's split); by June it had fallen to ₹24,020cr, with no large new wins. O&M revenue was about ₹150cr in FY26; management now expects ₹600–700cr a year from FY28, rising to ₹1,100–1,200cr.",
        mixes: [
            { caption: 'Order book by type, March 2026 (management)', parts: [{ label: 'Meters and installation', share: 64 }, { label: 'Operation and maintenance', share: 28 }, { label: 'Other meters and exports', share: 8 }] },
        ],
        customers: [
            "**State electricity distribution companies**, through 24 metering projects covering 3.61 crore meters.",
            "**Other metering service providers** that buy its meters, and export customers.",
            "It holds about 22–23% of metering-service awards and over 30% of meter manufacturing.",
        ],
        difficulty: { level: 'Medium', text: "Meters are electronics plus firmware and communication; the harder part is running millions of meters and the software for years. Many competitors make meters." },
        moat: "Scale, in-house communication and software, and 8–9 year service contracts. But prices are fixed at tender with no pass-through, and it must fund the meters until utilities pay.",
        salesDrivers: ["**The government's smart-meter programme (RDSS)**: about 22–23% of metering-service awards; its projects cover 3.61 crore meters.", "**Installation pace**, which depends on utilities and site access; go-live typically lags installation by about two months.", "**Operation and maintenance income** building up over 8–9 years, from about ₹150cr in FY26 to ₹600–700cr a year from FY28 (earlier guided at ₹800–900cr).", "**The RDSS deadline**: the scheme ends on 31 March 2028, and industry meter growth slowed to 11% in the March 2026 quarter (IEEMA).", "**Exports and meter sales to other providers**, targeted at ₹500cr in two to three years."],
        inputs: "**Semiconductors, circuit boards, displays, communication modules**, plastic housings and batteries, much of it imported.",
        costEffect: "**Fully exposed.** Management says plainly: **there is no pass-through in our contracts.** Meter prices are fixed at tender for years. A weaker rupee raises the cost of imported parts. **Rule of thumb:** a 10% rise in material costs would cut the margin by about 6 points (20% to 14%). **What happened:** it cut FY27 margin guidance by 2–2.5 points to 18% because chip and component prices rose.",
        competitors: [{"name": "HPL Electric & Power, Secure Meters, Landis+Gyr", "note": "Other large meter makers."}, {"name": "Adani Energy Solutions, Apraava Energy, IntelliSmart", "note": "Rival metering-service providers bidding for the same utility contracts."}, {"name": "Kaynes, Schneider (L&T)", "note": "Electronics makers also supplying smart meters."}],
        position: "Over **30% of meter manufacturing** and about **22–23% of metering-service awards** in India (management).",
        money: "Net debt is expected to peak near ₹2,000cr and fall from FY28. Its projects sit in a platform owned 74% by GIC and 26% by Genus, and its loans and advances, mostly to that platform, rose from about ₹75cr to ₹528cr in FY26. Promoter holding fell from **50% to 39%** over three years. GIC, through Chiswick Investment, has sold most of the 15.11% of Genus it held in March 2026 (11.03% for about ₹956cr in block deals at ₹282–290 on 30 June 2026; 2.77% left at September) while keeping its 74% of the metering platform. Free cash has been negative in three of five years. The Enforcement Directorate searched its office and the chairman's home in December 2024; in February 2026 the company received a notice from the PMLA court in Patna on the ED's complaint, and its auditor carries the case as an emphasis of matter.",
        watch: ["Operating cash turning positive, as promised from FY28.", "Net debt peaking near ₹2,000cr and not beyond.", "Margin holding at 18% despite component inflation, and any step in the Patna PMLA case."],
        charts: electricalEquipmentCharts["Genus Power"],
    },
    {
        company: 'Salzer Electronics',
        inShort: ["**Makes industrial switches, wires and cables**, much of it for other brands.", "**Good:** steady revenue growth. **Bad:** low returns, copper price rises hit margins with a lag, and net debt is about 4 years of operating profit.", "**Verdict: pass.** The price fits my estimate, but margin guidance has been cut twice and it is more indebted than its P/E suggests."],
        tagline: "Coimbatore-based maker of industrial switchgear, wires and cables, and building electrical products, with a large white-label business.",
        revenue: '₹1,758cr (FY26, consolidated)',
        products: [
            { name: 'Industrial switchgear', text: "Rotary and cam switches, contactors, relays, small transformers, wire harnesses and terminal connectors." },
            { name: 'Wires and cables', text: "About 70% made white-label for large brands and OEMs on a cost-plus basis." },
            { name: 'Building products and new lines', text: "Modular switches for homes (south and east India), DC fast chargers (160–170 installed), and a smart-meter plant that is largely idle." },
        ],
        revenueText: "In Q1 FY27 **switchgear was 54% of revenue** (8% EBITDA margin), **wires and cables 40%** (5% margin) and building products 6%. Exports were 19%. About 15% of sales go through Lauritz Knudsen, Schneider's Indian switchgear brand.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Industrial switchgear', share: 54 }, { label: 'Wires and cables', share: 40 }, { label: 'Building products', share: 6 }] },
        ],
        customers: [
            "**Equipment makers** (HVAC, machinery, panels) in India and the US, UK and Europe.",
            "**Lauritz Knudsen (Schneider)** as a distributor, **cable brands** (white-label), **railways**, and **electrical wholesalers and retailers**.",
        ],
        difficulty: { level: 'Low', text: "Standard switchgear and cables are made by many firms. Salzer is vertically integrated, which helps cost but not pricing." },
        moat: "Long OEM relationships and the LK channel. Weak pricing power: metal costs take about two months to pass on, and margins shrink when copper and silver spike.",
        salesDrivers: ["**Industrial and building activity**: switchgear for machinery, HVAC and panels in India and abroad (exports 19%).", "**Brand partners**: about 15% of sales go through Lauritz Knudsen, and 70% of cables are made for other brands.", "**Copper prices**: cable revenue rises and falls with copper, even when volumes do not.", "**Capacity use**: switchgear 80–85%, wires and cables about 65%; switchgear will need new capacity in FY28."],
        inputs: "**Copper** (windings, cables, contacts), **silver** (switch contacts), **aluminium and plastics**.",
        costEffect: "**Exposed, with a lag.** It has raised prices three times in six months, but increases apply only after pending orders are filled, so costs run ahead for a quarter or two. White-label cables are cost-plus, so their margin is protected but thin (5%). **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (8% to about 1%). **What happened:** copper rose about 50% over three years and its margin fell from 9% to 6%.",
        competitors: [{"name": "Lauritz Knudsen (Schneider), Siemens, ABB", "note": "Large switchgear brands; LK is also a partner that buys from Salzer."}, {"name": "BCH Electric, C&S Electric", "note": "Indian industrial switchgear makers."}, {"name": "KEI, Polycab, Finolex, RR Kabel", "note": "Cable brands, some of which also use contract makers."}],
        position: "A mid-sized, vertically integrated maker of industrial switches and components, strong in rotary and cam switches. It does not disclose market share.",
        money: "Net debt is about **3.8 times operating profit**, the highest among the profitable companies here, and interest takes about a third of operating profit. Free cash has been negative in every one of the last five years. CRISIL rates it A but would consider a downgrade if the operating margin stays below 8%, where it has been for two quarters. Promoters hold **37%**. Schneider is its largest single customer at about 12% of revenue.",
        watch: ["Switchgear margin back to 9–9.5% in H2 as price increases take effect.", "Debt falling as working capital is released.", "A decision on the idle smart-meter plant."],
        charts: electricalEquipmentCharts["Salzer Electronics"],
    },
    {
        company: 'RMC Switchgears',
        inShort: ["**Small Jaipur maker of meter boxes and feeder pillars**, which also builds solar and power projects for state utilities.", "**Bad:** revenue fell 56% in Q1, unpaid bills are rising, most contracts are fixed-price government tenders, CARE rates it ‘D’, and a promoter traded in breach of insider-trading rules.", "**Verdict: avoid.** It looks cheap, but for good reasons."],
        tagline: "Jaipur-based maker of meter enclosures and feeder pillars, which also builds distribution and solar projects for state utilities.",
        revenue: '₹402cr (FY26, consolidated)',
        products: [
            { name: 'Electrical products', text: "Smart-meter enclosures, feeder pillars and distribution boxes." },
            { name: 'Electrical EPC', text: "Distribution and transmission infrastructure and substations for utilities." },
            { name: 'Solar EPC', text: "Ground-mounted solar plants and solar pumps, its largest line. It is also piloting PulseBox, an IoT device that monitors distribution transformers for theft and faults." },
        ],
        revenueText: "In FY26 **solar EPC was 52% of revenue (₹209cr), electrical products 24% (₹96cr) and electrical EPC 24% (₹96cr)**. About 95% of revenue is from government bodies. Q1 FY27 revenue fell 56%.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Solar EPC', share: 52 }, { label: 'Electrical products', share: 24 }, { label: 'Electrical EPC', share: 24 }] },
        ],
        customers: [
            "**State electricity utilities** and their contractors, on tenders with 10% retention money held until completion. Maharashtra's MSEDCL alone was about 55% of FY25 revenue, and the top five customers about 83%.",
            "A small private and EPC-contractor business for enclosures.",
        ],
        difficulty: { level: 'Low', text: "Enclosures and utility EPC are open to many bidders. PulseBox could differentiate it, but it is not yet ordered." },
        moat: "Little: utility relationships and approvals, in a crowded, price-driven market.",
        salesDrivers: ["**State utility tenders**: about 95% of revenue is from government bodies.", "**Solar schemes** (ground-mounted plants, PM-KUSUM pumps): 52% of FY26 revenue.", "**Collections**: 10% retention money is held until projects finish, which limits how fast it can take new work.", "**Lumpy orders**: Q1 FY27 revenue fell 56% as projects ended."],
        inputs: "**Sheet steel** (enclosures and feeder pillars), **solar modules**, copper and aluminium cable, and polymers.",
        costEffect: "**Exposed.** Tender prices are largely fixed. Management said module, aluminium and silver prices hurt margins, and it made an operating loss in Q3 FY26 on old solar orders. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (12% to 4%). **What happened:** its margin swung from 11% to −12% and back to 21% within five quarters.",
        competitors: [{"name": "Many regional utility contractors", "note": "Enclosures and distribution EPC are won on price."}, {"name": "KPI Green, Oriana Power and other solar EPC firms", "note": "Rivals for solar and PM-KUSUM work."}],
        position: "A small regional supplier to state utilities, mainly in Rajasthan and western India.",
        money: "Net debt is about **3 times operating profit**. Receivables rose from ₹148cr to ₹205cr in FY26 and operating cash turned negative. Promoter holding fell from **56% to 52%**. CARE still rates its loans ‘D, issuer not cooperating’ because it stopped supplying information (Infomerics rates it BBB). Its secretarial auditor found a promoter traded in breach of insider-trading rules, and in March 2026 it pledged its 51% stake in Intelligent Hydel Solutions to a lender and stopped consolidating it. On 9 October 2026 the board approved a rights issue of up to ₹30cr, about 15% of its market value; price and ratio are not yet set.",
        watch: ["Receivables and retention money being collected.", "Profitable execution of the ~₹1,188cr order book, including ₹333.8cr of Gujarat awards won in July–August.", "First paid orders for PulseBox."],
        charts: electricalEquipmentCharts["RMC Switchgears"],
    },

    // ── Wind and structures ──────────────────────────────────────────────────
    {
        company: 'Inox Wind',
        inShort: ["**Wind-turbine maker** from the Inox GFL group, with a 4.4 GW order book.", "**Good:** big order book and margins around 20%. **Bad:** it has used far more cash than it earned, missed guidance three quarters running, relies on group orders, keeps issuing shares, and its auditor flags ₹55.8cr of invoked guarantees on group wind projects.", "**Verdict: avoid.** The price needs about {need:Inox Wind|21}% growth a year; after repeated misses and dilution I expect about 14%."],
        tagline: "Wind-turbine maker from the Inox GFL group, with a 4.4 GW order book; group companies service the turbines and are major buyers.",
        revenue: '₹4,397cr (FY26, consolidated)',
        products: [
            { name: 'Wind turbines', text: "2 MW and 3.3 MW platforms, with a 4.4 MW model at the prototype stage; 80–90% of components made in India." },
            { name: 'Turnkey projects', text: "Building complete wind farms (now shifting towards equipment-only supply to cut receivables)." },
            { name: 'Related group businesses', text: "Inox Renewable Solutions (EPC, transformers, cranes) and Inox Green (turbine operation and maintenance, 13.3 GW portfolio) are separate companies." },
        ],
        revenueText: "Of third-party orders, **59% are equipment supply and 41% turnkey**. The group's own renewable developer, Inox Clean, has signed an MOU for 1.5 GW, with a firm 500 MW order worth up to ₹3,500cr.",
        mixes: [
            { caption: 'Third-party order book by type, July 2026', parts: [{ label: 'Equipment supply', share: 59 }, { label: 'Turnkey', share: 41 }] },
        ],
        customers: [
            "**Public-sector and utility buyers**: NTPC, NLC India (repeat 200 MW order), CESC.",
            "**Independent producers and companies**: Aditya Birla, Amplus/Gentari, Hero Future Energies.",
            "**Inox Clean**, a group company and its largest single customer.",
        ],
        difficulty: { level: 'High', text: "Wind turbines combine large blades, gearboxes, generators and control systems that must run for 25+ years. Competitors include Suzlon, Siemens Gamesa and Envision." },
        moat: "Localised supply chain and a service arm in the group. Weakened by heavy dependence on group orders and a history of slow collections.",
        salesDrivers: ["**India's wind additions**: a record ~6 GW in FY26 but only 2.4 GW in April–August 2026; the CEA's plan needs about 10 GW a year to 2035–36.", "**Group orders**: Inox Clean (group company) has a 1.5 GW MOU and a firm 500 MW order worth up to ₹3,500cr.", "**Business mix**: shifting to equipment-only supply (59% of third-party orders) to cut receivables; turnkey projects bring more revenue but tie up cash.", "**Site readiness and grid connection**, which often delay deliveries and revenue."],
        inputs: "**Steel** (towers and nacelle frames), **glass fibre and resin** (blades), and bought-in gearboxes, generators, bearings and electrical systems.",
        costEffect: "**Partly protected.** Contracts have some escalation clauses, and it makes 80–90% of components in India, which reduces rupee risk. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5–6 points (20% to 14–15%). **What happened:** its margin rose from 9% to about 19–23% over three years on better pricing and scale, not because of input prices.",
        competitors: [{"name": "Suzlon", "note": "The Indian market leader, with a larger order book."}, {"name": "Siemens Gamesa, Envision, Vestas", "note": "Global turbine makers active in India."}, {"name": "Adani Wind", "note": "Makes turbines mainly for its group’s projects."}],
        position: "One of India's main wind-turbine makers, with a 4.4 GW order book.",
        money: "Net debt excludes ₹550cr of investments, which may include group holdings. It has approval to raise equity again after earlier share issues; promoter holding fell from **65% to 44%** in three years. Free cash has been negative every year: about −43% of sales over five years. CRISIL withdrew its rating at the company's request in June 2026 (Acuité rates it AA−). Its auditor added an emphasis of matter on money invested in six group wind-project companies whose deadlines expired (₹55.8cr of bank guarantees invoked), and it guarantees ₹180.5cr of a bank loan to Inox Clean.",
        watch: ["Receivables falling as it moves to equipment-only supply.", "Deliveries in H2 against a +75% revenue guide.", "How much of new orders come from group companies."],
        charts: electricalEquipmentCharts["Inox Wind"],
    },
    {
        company: 'KP Green Engg.',
        inShort: ["**Makes galvanised steel towers and structures** for power lines, telecom and solar farms; part of the KP group.", "**Good:** fast growth, margins near 20%, and steel price rises are passed on. **Bad:** free cash is negative, debt is rising, and it pays a royalty to its promoter.", "**Verdict: pass.** Cheap on profit, but about half its revenue comes from its own group and money has gone to its promoter."],
        tagline: "Surat-based maker of galvanised steel structures (towers, solar mounting structures, poles, crash barriers), part of the KP group; listed on the BSE SME platform.",
        revenue: '₹1,246cr (FY26, standalone)',
        products: [
            { name: 'Transmission and telecom towers', text: "Approved in 16+ states; a ₹819cr BSNL telecom-tower order with O&M." },
            { name: 'Solar structures', text: "Mounting structures for solar farms; approved by tracker makers Nextracker and GameChange Solar." },
            { name: 'Other structures', text: "Poles and lighting, road crash barriers (first in India to pass all three crash tests), pre-engineered buildings, and heavy engineering (RDSO-approved)." },
            { name: 'Galvanising', text: "Asia's largest hot-dip galvanising kettle (90,000 tonnes a year)." },
        ],
        revenueText: "The company does not split revenue by product. Of its ₹1,831cr order book, **BSNL is about 45%**, group companies 22–23% and other outside customers the rest. Revenue leans on the group far more than the order book: KP group companies bought about ₹617cr, **roughly half of FY26 revenue** (ICRA puts it at ~47%). Plants ran at 30–34% of their 4 lakh-tonne capacity in FY26.",
        mixes: [
            { caption: 'Order book by customer, March 2026 (my calculation)', parts: [{ label: 'BSNL', share: 45 }, { label: 'Other outside customers', share: 32 }, { label: 'KP group companies', share: 23 }] },
        ],
        customers: [
            "**BSNL** (telecom towers), **state transmission utilities**, **renewable developers**, **railways** and metro projects (e.g. Chennai Metro).",
            "**KP group companies** (KPI Green Energy, KP Energy).",
        ],
        difficulty: { level: 'Low', text: "Steel fabrication and galvanising are widely available; approvals and capacity are the barriers." },
        moat: "Scale (large galvanising and fabrication capacity) and approvals across utilities. Governance points: a 2% brand royalty to the promoter and group orders.",
        salesDrivers: ["**Transmission, telecom and solar build-out**: towers, solar mounting structures and poles.", "**BSNL**: a ₹819cr telecom-tower order is about 45% of the order book.", "**Group companies**: KPI Green Energy and KP Energy give 22–23% of orders.", "**Capacity use**: plants ran at 30–34% of 4 lakh tonnes, so there is room to grow without new plants."],
        inputs: "**Steel** (angles, plates and sections) and **zinc** for galvanising.",
        costEffect: "**Protected on large contracts.** Big contracts pass on any steel price change above 5%, and it stocks up on steel ahead of rises. Smaller orders are more exposed. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (19% to 12%). **What happened:** steel prices fell about 13% over three years while its margin rose to about 20%.",
        competitors: [{"name": "KEC International, Kalpataru, Transrail", "note": "Large transmission contractors that make their own towers."}, {"name": "Skipper, Salasar Techno Engineering", "note": "Tower and galvanised-structure makers, the closest listed comparisons."}, {"name": "Solar-structure makers", "note": "Many smaller fabricators compete on price."}],
        position: "Operates what it says is **Asia's largest hot-dip galvanising kettle** (90,000 tonnes a year) and holds tower approvals in 16+ states.",
        money: "Borrowings rose from ₹100cr to ₹349cr in a year. It pays a **2% brand royalty to the promoter** on revenue (₹19.2cr in FY26), and ₹32.9cr was outstanding at March 2026 as an ‘advance for property’ to the promoter, Dr Faruk Patel. In FY26 it sold much of its plant and machinery and leased it back, which is effectively borrowing. Its auditor could not rely on the new fixed-asset system and noted slight delays in tax and provident-fund deposits. Promoters hold **67%**. Capex has run at 26–29% of sales for two years.",
        watch: ["Plant utilisation rising from 30–34%.", "Inventory and debt falling.", "Move from the SME platform to the main board."],
        charts: electricalEquipmentCharts["KP Green Engg."],
    },

    // ── Power electronics and EV charging ────────────────────────────────────
    {
        company: 'Exicom Tele-Sys.',
        inShort: ["**Makes power systems for telecom towers and EV chargers**, and owns Tritium, a loss-making fast-charger maker.", "**Good:** leading share of home EV chargers. **Bad:** the group fell back to a loss in Q1 after Q4's break-even, is burning cash, is rated BBB with a negative outlook, and part of the promoter's stake is pledged.", "**Verdict: pass** until the group breaks even."],
        tagline: "Maker of power systems and batteries for telecom sites and of EV chargers, which bought Tritium, a DC fast-charger maker, out of administration.",
        revenue: '₹1,152cr (FY26, consolidated)',
        products: [
            { name: 'Critical power', text: "DC power systems, lithium batteries and smart enclosures for telecom towers; solar-hybrid power for the BharatNet rural broadband programme; small commercial battery storage." },
            { name: 'EV chargers in India', text: "Home wallbox chargers (it estimates over 50% share), DC fast chargers for public networks, buses and trucks." },
            { name: 'Tritium', text: "DC fast chargers made in the US and sold to networks and fleets in the US and Europe; bookings doubled to about $21m in Q1." },
        ],
        revenueText: "In Q1 FY27, **critical power was about 53% of revenue, Indian EV chargers 18% and Tritium 28%** (my calculation from the ₹177cr, ₹61cr and ₹331cr figures). The Indian business earned an 8.8% EBITDA margin; Tritium made losses.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (my calculation)', parts: [{ label: 'Critical power (telecom)', share: 53 }, { label: 'Tritium', share: 28 }, { label: 'EV chargers, India', share: 18 }] },
        ],
        customers: [
            "**Telecom operators and tower companies**, and **system integrators** on BharatNet (about 60% share) and BSNL border sites.",
            "**Car makers** (wallbox chargers supplied with cars) and **charge-point operators**.",
            "**US and European networks and fleets** (Tritium), including trials with Fortune 100 companies.",
        ],
        difficulty: { level: 'Medium', text: "Power electronics and battery management need real engineering; DC fast chargers must be reliable in the field. Many competitors exist in both markets." },
        moat: "Long relationships with telcos and car makers, and Tritium's technology. Not yet enough to earn a consistent profit.",
        salesDrivers: ["**Telecom spending**: 5G roll-out and BharatNet rural broadband (about a 60% share with its system-integrator partners).", "**EV sales in India**: home chargers are supplied with new cars; it estimates over 50% share.", "**Tritium's US and European orders**: bookings doubled to about $21m in Q1.", "**Lumpy large orders**: several customers placed big upfront orders in Q4 FY26."],
        inputs: "**Semiconductors, circuit boards, lithium-ion cells, copper and plastics**, much of it imported.",
        costEffect: "**Exposed.** Management said rising forex and commodity prices offset margins on large orders, and that chips, copper and plastics have become very expensive. There is no stated pass-through mechanism. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points. **What happened:** the group has made operating losses for most of the past five quarters, mainly from Tritium; the Indian business earned about 9%.",
        competitors: [{"name": "Delta Electronics, Vertiv, Eaton", "note": "Global rivals in telecom power systems."}, {"name": "Delta, ABB E-mobility, Servotech", "note": "Rivals in Indian EV chargers."}, {"name": "ABB, Kempower, Alpitronic", "note": "Rivals to Tritium in DC fast chargers abroad."}],
        position: "**Estimated over 50% share of home EV chargers** in India (company), and about 60% of BharatNet power systems through its partners.",
        money: "The company reported ₹370cr of net debt at June 2026, less than the Screener figure, which includes leases. It is loss-making at the group level, so debt cannot be measured against profit. CARE rates it BBB with a negative outlook and relies on ‘continued timely promoter support’; the promoter has lent money and pledged 25,66,585 shares to lenders. Promoter holding fell from **70% to 65%**. In August 2026 customs demanded ₹14.49cr of duty plus interest and penalties, which it will appeal.",
        watch: ["A binding sale of Tritium near the $85m indicated on 4 Nov 2026, which would make the company debt-free.", "Use of the new Hyderabad plant.", "Debt and working capital as Tritium grows."],
        charts: electricalEquipmentCharts["Exicom Tele-Sys."],
    },
    {
        company: 'Servotech Renew',
        inShort: ["**Makes EV chargers, solar inverters and battery packs**, and runs a small charging network.", "**Bad:** commodity products, little disclosure, negative cash flow, borrowings nearly tripled after a no-new-debt promise was reversed, and money going into a sports business.", "**Verdict: avoid.** The price is high for what it is."],
        tagline: "Delhi-based maker of EV chargers, solar inverters and battery packs, which also runs an EV charging network and a sports subsidiary.",
        revenue: '₹672cr (FY26, consolidated)',
        products: [
            { name: 'EV chargers', text: "AC and DC chargers from 7 kW to 360 kW (BEE 5-star rated at 60 and 120 kW), and its own charging network." },
            { name: 'Solar and storage', text: "Rooftop solar systems (including railway rooftops and PM Surya Ghar homes), inverters and battery packs for storage and e-rickshaws." },
            { name: 'Sports subsidiary', text: "Owns a cricket franchise and a league, currently loss-making." },
        ],
        revenueText: "The company does not publish a split, but its managing director put FY26 at roughly **51% solar, 27% AC and small chargers, 15% DC chargers** and the rest installation, service and storage. Management says battery-pack capacity is fully used and will double within six months.",
        customers: [
            "**Railways** (e.g. South Central Railway rooftop solar), **state bodies** (battery storage in UP), **households** through channel partners, and **charge-point operators**.",
        ],
        difficulty: { level: 'Low', text: "Chargers, inverters and battery packs are assembled from widely available components; competition is intense." },
        moat: "Little: a growing dealer network, in commodity-like products.",
        salesDrivers: ["**Rooftop solar schemes** (PM Surya Ghar) and railway rooftop contracts.", "**Battery packs** for storage and e-rickshaws: capacity is fully used and being doubled.", "**EV charger demand** from charge-point operators and government programmes (PM E-Drive).", "**Dealer network growth**: much of its sales go through channel partners."],
        inputs: "**Lithium-ion cells, solar modules, semiconductors, circuit boards and copper**, mostly imported or bought from Indian assemblers.",
        costEffect: "**Exposed, and not disclosed.** Management gives no margin guidance and has said margins are not a priority. Products are close to commodities, so price rises are hard to pass on. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (11% to about 3%). **What happened:** its margin has ranged between 6% and 13% over five quarters.",
        competitors: [{"name": "Exicom, Delta, Tata Power (EZ Charge)", "note": "Rivals in EV chargers and charging networks."}, {"name": "Luminous (Schneider), Microtek, Havells", "note": "Rivals in inverters and home solar."}, {"name": "Many solar EPC firms", "note": "Rooftop solar installation is highly fragmented."}],
        position: "A small player in each of its markets; it does not disclose market share or capacity.",
        money: "In May management promised no fresh long-term debt; in July it said ‘the debt can increase’, dropped a planned equity raise and began work under a ₹400cr MoU for a Haryana plant. Borrowings rose from ₹78cr to ₹211cr in FY26. Promoters hold **59%**. Free cash has been negative in four of five years, and group money is going into a sports subsidiary. The segment note in its FY26 annual report describes a commodities-trading business, boilerplate copied from another company.",
        watch: ["Positive operating cash.", "Basic disclosure of order book, capacity and segment margins.", "Losses at the sports subsidiary."],
        charts: electricalEquipmentCharts["Servotech Renew"],
    },
    {
        company: 'RIR Power Electr',
        inShort: ["**Tiny maker of high-power silicon chips** (thyristors), building a ₹618cr silicon-carbide chip plant.", "**Bad:** the new plant costs almost seven times current sales, has slipped repeatedly and has no proven customers yet; its know-how was bought from a company in which a director is interested.", "**Verdict: avoid.** The price rests on a plant not yet running."],
        tagline: "A small maker of high-power silicon semiconductors (thyristors, diodes) in Gujarat, building a silicon-carbide chip plant in Odisha.",
        revenue: '₹91cr (FY26, consolidated)',
        products: [
            { name: 'High-power thyristors and diodes', text: "Press-pack devices up to 8 kV for industrial drives, railways, pulse power (defence) and HVDC transmission." },
            { name: 'Power-electronics equipment', text: "Systems built from its own devices." },
            { name: 'Silicon carbide (in progress)', text: "Epitaxial wafers and chips from a ₹618cr plant in Odisha (phase 1 ₹225cr, with state subsidy); wafer sales expected to start in Q3 FY27 at ₹12–15cr for the year." },
        ],
        revenueText: "The company does not split revenue by product. Almost all current revenue is silicon devices and equipment from its Halol plant.",
        customers: [
            "**Industrial drive and equipment makers**, **railways**, **defence** (pulse-power switches), and HVDC projects; its first export order was for 120 thyristors.",
            "For silicon-carbide wafers: prospective customers in the US and Taiwan, and Indian government laboratories.",
        ],
        difficulty: { level: 'Very high', text: "Silicon-carbide wafers and chips are among the hardest things to make in power electronics, dominated by a few global firms. Yields, qualification and customers are all unproven for RIR." },
        moat: "Specialist know-how in niche high-power silicon devices. The silicon-carbide business has no moat yet: it is a start-up.",
        salesDrivers: ["**Industrial, railway, defence and HVDC demand** for high-power thyristors and diodes.", "**Exports**: its first overseas order was for 120 thyristors.", "**Silicon carbide**: wafer sales are expected to start in Q3 FY27 at ₹12–15cr for the year; the market value rests mostly on this."],
        inputs: "**Silicon wafers, molybdenum and copper discs, ceramic housings**, and for silicon carbide, SiC substrates and specialist gases.",
        costEffect: "**Mostly passed on.** Management said it passed on about **80–85%** of cost increases in Q1; older orders were not repriced, but new schedules carry new prices. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (12% to 6%). No official price index tracks its main inputs, so there is no price chart for it.",
        competitors: [{"name": "Infineon, Hitachi Energy, Dynex, Littelfuse (IXYS)", "note": "Global makers of high-power thyristors."}, {"name": "Wolfspeed, Infineon, onsemi, STMicroelectronics", "note": "Dominant silicon-carbide wafer and chip makers."}, {"name": "SiCSem", "note": "Another silicon-carbide plant being built in Odisha."}],
        position: "A niche Indian maker of high-power silicon devices, tiny next to global rivals.",
        money: "The silicon-carbide plant will cost **₹618cr** (₹225cr in phase 1) against sales of about ₹90cr. Odisha pays half as a capital subsidy (₹47.84cr received in FY26); a ₹70cr bank loan has been applied for but not sanctioned, and phase 2 funding is open. It bought ₹41.95cr of silicon-carbide know-how from Sicamore Semiconductor, a US company in which a director or relative is interested, and sold its silicon-carbide subsidiary for ₹2.16cr to the chairman's original US company; its auditor added an emphasis of matter on that sale. Promoter holding fell from **71% to 59%**.",
        watch: ["Silicon-carbide wafers qualified by customers, and first revenue.", "The bank loan and phase 2 funding.", "Clear disclosure of what RIR owns in the technology.", "Core thyristor sales growing again."],
        charts: electricalEquipmentCharts["RIR Power Electr"],
    },
    {
        "company": "Parth Electricals",
        "inShort": [
            "**A Vadodara maker of medium-voltage switchgear**: ring main units (RMUs, the boxes that switch underground distribution cables), compact substations and panels, mostly built under Schneider Electric technology licences. It also does substation installation and service, and now EPC work.",
            "**Good:** a service team trusted up to 765kV, a ₹272cr order book (1.4 times FY26 sales), first exports (US, Zambia) and a data-centre order from Reliance. **Bad:** an operating margin of only about 10%, no operating cash in FY25–FY26, RMU sales down a third in FY26, four equity raises in 14 months, and the MD's own US company as a customer.",
            "**Verdict: pass.** A capable service-led switchgear firm, but at about 50 times earnings with no operating cash yet, the price assumes the new plants and margins work out."
        ],
        "tagline": "A Gujarat switchgear and substation-services company founded by ex-Siemens engineer Jignesh Patel in 2005, listed on NSE's SME platform in August 2025.",
        "revenue": "₹198cr (FY26, standalone)",
        "products": [
            {
                "name": "Ring main units (RMUs)",
                "text": "11–22kV gas-insulated switching units for discoms' underground networks, made under a Schneider Electric technology transfer. **₹88cr in FY26 (44% of revenue), down from ₹133cr** as Gujarat RDSS orders slowed. 33kV RMUs are due from the new GIS plant."
            },
            {
                "name": "Panels, compact substations and E-houses",
                "text": "MV and LV panels (as a Schneider licensee), control and relay panels up to 132kV, compact/package substations up to 5 MVA (₹11cr) and motor control centres. Panels were ₹29cr in FY26. A ₹45.4cr compact-substation order for Reliance's Jamnagar AI data centre is being executed."
            },
            {
                "name": "Services and EPC",
                "text": "Installation, testing and commissioning of substations and cables up to 220kV, GIS service up to 400–765kV, and RMU refurbishment. **₹55cr in FY26 (27.5% of revenue), up from ₹9cr.** It is now taking EPC jobs: PGVCL underground cabling (₹84cr) and a Kandla port 66kV GIS substation (₹45cr)."
            }
        ],
        "revenueText": "In FY26, **RMUs were 44% of revenue, services and EPC 27.5%, panels 15%**, and compact substations 6%. **Exports were ₹31cr (16%)**, its first year, to the US (an intelligent motor-control order needing UL certification), Zambia's ZESCO (₹10.6cr), Nepal and Bhutan. The MD targets exports of 20–25% of manufacturing revenue. The ₹271.6cr order book is 53% EPC, 41% manufacturing and 6% services, mostly for FY27.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (annual report)",
                "parts": [
                    {
                        "label": "RMUs",
                        "share": 44.3
                    },
                    {
                        "label": "Services and EPC",
                        "share": 27.5
                    },
                    {
                        "label": "Panels",
                        "share": 14.6
                    },
                    {
                        "label": "Compact substations",
                        "share": 5.8
                    },
                    {
                        "label": "Other and unallocated",
                        "share": 7.8
                    }
                ]
            },
            {
                "caption": "Order book by segment, ₹271.6cr (May 2026)",
                "parts": [
                    {
                        "label": "EPC",
                        "share": 53
                    },
                    {
                        "label": "Manufacturing and supply",
                        "share": 41
                    },
                    {
                        "label": "Services",
                        "share": 6
                    }
                ]
            }
        ],
        "customers": [
            "**State power distributors**: Gujarat discoms under the RDSS scheme, including PGVCL; GETCO and UPPTCL for substations; Tata Power's Odisha discom (TPCODL).",
            "**Large private users**: Reliance (Jamnagar refinery and AI data centre), Adani, Tata Power, CESC, IOCL, Linde, plus Siemens Energy and GE Vernova as service clients.",
            "**Schneider Electric**, whose designs it makes under licence; Parth earlier supplied MV panels only as Schneider's outsourcing partner.",
            "**Export utilities and buyers**: ZESCO (Zambia) and a US customer, partly through the MD's US company A K & J Electric."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "RMUs and panels must pass type tests and utility approvals; the products themselves come from Schneider technology licences. Its own gas-insulated switchgear is still being developed and type-tested. The service side needs trained engineers (Pfisterer and Raychem certifications); that is its real edge, but the business is small and labour-based."
        },
        "moat": "Quick, skilled field service that big makers often cannot match, and utility approvals built over 20 years, win repeat work. But the products are licensed rather than its own, competitors are far larger (Schneider, Siemens, ABB, CG), and utility tenders are won on price. A 10% margin shows little pricing power.",
        "salesDrivers": [
            "**Guidance (21 May 2026)**: revenue growth of 20–30% a year for the next two to three years, and the EBITDA margin up at least 100 basis points a year.",
            "**Order book**: ₹271.6cr, mostly for FY27, plus more than ₹100cr in the pipeline.",
            "**New capacity**: a GIS plant at Karachiya, Vadodara (₹20cr of IPO money, opening September 2026, up to ₹200cr of revenue at full use) and a rented Odisha unit (₹19cr planned, up to ₹100cr).",
            "**Government spending**: RDSS discom upgrades and the National Electricity Plan's ₹9.16 lakh crore of transmission spending; data centres; renewables and battery storage.",
            "**Exports**: US (UL-certified products), Africa and the Middle East."
        ],
        "inputs": "**Bought-in switchgear parts, copper, steel and aluminium**, plus cables for EPC work. Materials were 74% of FY26 sales, so it is mostly an assembler.",
        "costEffect": "**Mostly not protected.** Industrial customers and its product tenders give no price-variation clause; only EPC cable supply has one. The MD says new bids now carry a contingency for metal prices. Gross margin moved from 27.6% (FY24) to 20.9% (FY25) and 26.3% (FY26). **Rule of thumb:** a 5% rise in material costs not passed on would cut the operating margin by about 3.7 points, a third of today's 10.5%.",
        "competitors": [
            {
                "name": "Schneider Electric, Siemens, ABB/Hitachi Energy, CG Power",
                "note": "Global and Indian majors; Parth licenses Schneider designs and competes with them on price and service speed."
            },
            {
                "name": "Voltamp Transformers",
                "note": "Bid against Parth, Siemens, ABB and CG in Tata Power's Odisha compact-substation tender, which Parth won after a reverse auction (₹9.2cr)."
            },
            {
                "name": "Local panel builders and service contractors",
                "note": "Small rivals in services; Parth claims higher-voltage skills."
            }
        ],
        "position": "**A small regional player**: FY26 revenue of ₹198cr against multi-thousand-crore rivals. It leads in Gujarat discom RMU supply and in specialised substation services. Capacity use is not disclosed.",
        "money": "Debt fell to **₹17cr at March 2026 against ₹44cr of cash**, so about ₹26cr of net cash, after ₹62cr was raised in pre-IPO rounds and the August 2025 IPO at ₹170. A further ₹10.3cr of shares plus promoter warrants were sold at ₹344 in July 2026 for working capital. **Cash is the problem.** Operating cash was zero in FY25 and −₹4cr in FY26 on ₹39cr of operating profit, and free cash was −₹36cr over the two years. Inventory nearly tripled to ₹42cr, partly a delayed US order, and stock days went from 39 to 104. ₹39cr of IPO money is for the GIS and Odisha plants. Promoters hold 61.22%.",
        "watch": [
            "Operating cash turning clearly positive in FY27 as the inventory unwinds.",
            "RMU revenue recovering and the GIS plant producing its own-design products.",
            "Further dealings with the MD's US company, and whether that company is folded into Parth."
        ],
        charts: electricalEquipmentCharts["Parth Electricals"],
    },
    {
        "company": "Anawil Wire",
        "inShort": [
            "**Fabricates steel towers for wind turbines** (up to 140 metres) at Koppal, Karnataka and, since March 2026, Kutch, Gujarat, mostly as job work on steel supplied by turbine makers such as Sany and Envision.",
            "**Good:** sales grew 82% in FY26 at a 43% operating margin, the order book was ₹360cr at March plus a ₹134cr order in September, and IPO money cuts debt. **Bad:** the top customer was 29% and the top ten 97% of FY26 sales, the plants were 48% used, stock sits for 409 days, free cash was −₹75cr, and the promoters are new to the industry and deal heavily with their own construction firm.",
            "**Verdict: pass.** Profitable in a wind-installation boom, but too concentrated, too new and too entangled with the family's other firm to trust through a downturn."
        ],
        "tagline": "A Vapi-based maker of tubular steel towers for onshore wind turbines, set up in 2021 by the Vashi family and listed on NSE's SME platform in August 2026 at ₹270 a share.",
        "revenue": "₹143cr (FY26, standalone)",
        "products": [
            {
                "name": "Pure conversion",
                "text": "Rolls and welds the customer's own steel plates into tower sections: about ₹50–60 lakh revenue and ₹25–30 lakh EBITDA a tower (44–50% margin). About 45–50% of towers in the order book."
            },
            {
                "name": "Conversion plus internals and paint",
                "text": "Adds ladders, platforms and painting: about ₹1.0–1.1cr revenue and ₹35–40 lakh EBITDA a tower. About 30–35% of towers. An internals plant at Koppal is being built up."
            },
            {
                "name": "Integrated supply",
                "text": "Buys the steel and parts too: about ₹3.0–3.5cr revenue but only ₹40–50 lakh EBITDA a tower (14–16% margin). About 20% of towers. The ₹134cr order is likely of this kind (₹3.5cr a tower)."
            }
        ],
        "revenueText": "**Tower fabrication was 94% of FY26 revenue** (₹135cr); boiler and paper-machinery parts made up the rest (₹8cr). Karnataka was 94% of sales and Gujarat 6%. **Customers are few**: the largest bought 29% of FY26 revenue, the top five 79% and the top ten 97%. It made 210 towers in FY26 (135 in FY25), earning about ₹29 lakh of EBITDA a tower. About 70% of revenue comes in October–March, as the monsoon halts site work.",
        "mixes": [
            {
                "caption": "Order book by tower count, ~379 towers (October 2026, approximate, management)",
                "parts": [
                    {
                        "label": "Pure conversion",
                        "share": 47.5
                    },
                    {
                        "label": "Conversion plus internals",
                        "share": 32.5
                    },
                    {
                        "label": "Integrated supply",
                        "share": 20
                    }
                ],
                "note": "Midpoints of the ranges management gave; shares by value differ because integrated-supply towers earn about six times the revenue."
            }
        ],
        "customers": [
            "**Wind turbine makers and wind developers**: the March 2026 order book named Sany (123 towers, ₹72cr) and Envision. Four other customers were not named; one order (₹108cr, 34 towers) is the largest.",
            "**Six customers** held the ₹360cr order book at March 2026 (379 towers, due by March 2027). A further ₹134cr order (38 towers) for an Andhra Pradesh hybrid wind project came in September 2026."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Rolling and welding 70mm steel plate into 140-metre towers needs heavy machines, certified welding (ISO 3834) and turbine-maker approval for each design. But the work is mostly job-work fabrication on the customer's steel and design, and many Indian fabricators do it."
        },
        "moat": "Location and approvals. Towers are huge and costly to move, so plants near wind sites in Karnataka and Kutch save freight, and each turbine maker must approve the plant. There is little else. Customers own the design and often the steel, and they can split orders among fabricators.",
        "salesDrivers": [
            "**Wind installations in India**, especially in Karnataka, Gujarat and Andhra Pradesh, and turbine makers' outsourcing of towers.",
            "**Order book**: ₹360cr at March 2026 plus ₹134cr won in September 2026, against FY26 revenue of ₹143cr.",
            "**Capacity**: 612 towers a year after Kutch, against 210 made in FY26 (48% use).",
            "**Scope**: more integrated-supply orders raise revenue per tower five- or six-fold but cut the margin. Management asks to be judged on EBITDA per tower.",
            "**Seasonality**: about 70% of sales come in the second half."
        ],
        "inputs": "**Mild-steel plates** (usually supplied by the customer in conversion orders), welding consumables, shot, grit and paint, and internals such as ladders and platforms. Materials were 32% of FY26 sales, and the top ten suppliers 90% of purchases.",
        "costEffect": "**Mostly protected today**, because in pure conversion the customer owns the steel. As integrated-supply orders grow, it will carry steel prices on fixed orders. **Rule of thumb:** in an integrated tower, a 10% rise in steel not passed on would cut that order's 14–16% margin roughly in half. Margins so far: 41% (FY24), 38% (FY25), 43% (FY26).",
        "competitors": [
            {
                "name": "Unlisted regional and national fabricators",
                "note": "The prospectus says no listed Indian company does a similar business, and names no rivals. It lists competition from regional and national players as a risk."
            }
        ],
        "position": "**A small regional fabricator**: 210 towers in FY26 against a capacity of 612 (48% used). Its market share is not disclosed.",
        "money": "At March 2026 **borrowings were ₹128cr** after it built the Kutch plant (FY26 investment ₹97cr). The August 2026 IPO raised ₹143cr of new money at ₹270 a share, of which about ₹115cr is to repay loans, so net debt should be roughly **₹12cr** after repayment (not yet reported). **Cash lags profit**: over FY23–FY26, ₹126cr of operating profit produced ₹34cr of operating cash, and free cash was −₹140cr. Stock days were 409 in FY26 and customers took 99 days to pay. The promoters' firm Darpan Infrastructure supplies services, construction and guarantees. Promoters hold 65.26%.",
        "watch": [
            "Customer spread: the top customer below 25% and new turbine makers added.",
            "Operating cash close to operating profit in FY27, with stock days falling.",
            "Dealings with Darpan Infrastructure shrinking, and any developments in its criminal case."
        ],
        charts: electricalEquipmentCharts["Anawil Wire"],
    },
    {
        "company": "Prostarm Info Systems",
        "inShort": [
            "**Makes and sells power-backup equipment** (UPS systems, inverters, lithium battery packs, voltage stabilisers), resells batteries and IT hardware, and is moving into battery-energy-storage (BESS) projects and a 1.2 GWh BESS assembly plant.",
            "**Good:** a ₹1,090cr order book, 467 dealers and a long record with government, bank and railway buyers. **Bad:** **operating cash has been negative in each of the last four years** (−₹74cr in total), customers took 241 days to pay in FY26 (much of it one police-IT project), half of FY26 sales were resold third-party goods or IT hardware, and the BESS plant is late.",
            "**Verdict: pass.** It looks cheap at 20 times earnings, but profit has not turned into cash for four years and the BESS plans need more money."
        ],
        "tagline": "A Navi Mumbai power-electronics company founded in 2008 that makes UPS and inverter systems, resells batteries and IT equipment, and is building a battery-storage business; listed in June 2025.",
        "revenue": "₹386cr (FY26, consolidated)",
        "products": [
            {
                "name": "Own-make power products",
                "text": "UPS systems up to 600 kVA, lift and solar-hybrid inverters, lithium battery packs, servo stabilisers and isolation transformers, made in Pune and Navi Mumbai (plant use 16–45%). **₹145cr in FY26 (38% of revenue).**"
            },
            {
                "name": "System integration and third-party products",
                "text": "IT hardware, CCTV and command-centre systems for government projects (₹121cr, 31%), plus resold batteries, solar panels and spares (₹105cr, 27%). These are low-margin trading lines."
            },
            {
                "name": "BESS and solar EPC",
                "text": "Battery-storage projects: ₹4cr in FY26, then ₹31cr in Q1 FY27 (40% of the quarter) from an Adani Electricity project. It also builds rooftop solar (10.56 MW so far) and has a ₹165cr solar EPC order from Solarium Green Energy. Two developer projects (Bihar 120 MWh and Karnataka 300 MWh) make up ₹854cr of the order book."
            },
            {
                "name": "Services",
                "text": "UPS rental (mainly at ATMs), AMCs and after-sales service: ₹9cr in FY26."
            }
        ],
        "revenueText": "In FY26, **own-make products were 38% of revenue, system integration 31%, resold third-party products 27%**, services 2% and BESS 1%. By channel, about two-thirds goes through tenders, government e-marketplace (GeM) and direct sales, and the rest through dealers and OEMs. In Q1 FY27, 71% of revenue was from western India. The order book was ₹1,085cr in June 2026, 82% from government; ₹854cr of it is the two BESS developer projects, which earn rent over 12 years rather than sales. Excluding those, orders were about ₹236cr.",
        "mixes": [
            {
                "caption": "Revenue by segment, FY26 (annual report)",
                "parts": [
                    {
                        "label": "Own-make power products",
                        "share": 37.6
                    },
                    {
                        "label": "System integration",
                        "share": 31.4
                    },
                    {
                        "label": "Third-party products",
                        "share": 27.3
                    },
                    {
                        "label": "Services",
                        "share": 2.4
                    },
                    {
                        "label": "BESS EPC",
                        "share": 1.1
                    },
                    {
                        "label": "Solar EPC",
                        "share": 0.1
                    }
                ]
            },
            {
                "caption": "Revenue by segment, Q1 FY27 (investor presentation)",
                "parts": [
                    {
                        "label": "BESS EPC",
                        "share": 40
                    },
                    {
                        "label": "Third-party products",
                        "share": 30
                    },
                    {
                        "label": "Own-make power products",
                        "share": 28
                    },
                    {
                        "label": "Services",
                        "share": 1
                    },
                    {
                        "label": "Other",
                        "share": 1
                    }
                ]
            }
        ],
        "customers": [
            "**Government and PSU buyers through tenders**: state police IT (the CCTNS project behind most receivables), SAIL, South Eastern Railway, RailTel, NTPC Vidyut Vyapar, the Airport Authority, public-sector banks and state departments.",
            "**Private companies**: Adani Electricity (BESS), L&T, Solarium Green Energy (solar EPC), plus healthcare, BFSI, telecom and data-centre users.",
            "**Dealers and OEMs**: 467 dealers, and white-label supply to some UPS and solar-inverter brands."
        ],
        "difficulty": {
            "level": "Low",
            "text": "UPS and inverters are assembled from bought-in electronics; much of the UPS range is imported and customised. Lithium packs and BESS containers are assembled from imported (mostly Chinese) cells. Tender qualifications and a service network matter more than technology."
        },
        "moat": "A service network and tender approvals with government, banks and railways bring repeat orders, and battery replacement brings recurring sales. But products are not differentiated, rivals are many and larger, and over half of sales are resold goods at thin margins.",
        "salesDrivers": [
            "**Guidance (13 August 2026)**: FY27 revenue growth of at least 25%, EBITDA margin 12–13% and PAT margin 8.5–9%. BESS plant use 20–25% in FY27 and 40–50% in FY28, with about ₹500cr of FY28 BESS revenue targeted.",
            "**Order book**: ₹1,090cr including L1, plus more than ₹2,000cr of bids under evaluation (two large ones worth about ₹1,800cr).",
            "**BESS**: moving from utility projects (where bidders are 'bleeding', management says) to commercial and industrial users. The Jhajjar plant was held back over Chinese cell and freight costs.",
            "**Government spending** on police IT, railways, banks and power; Q1 is seasonally weak and the second half strong."
        ],
        "inputs": "**Electronic parts, imported UPS units, lead-acid and lithium cells (mainly from China), and resold IT hardware and batteries.** Bought-in goods and materials were 72% of FY26 sales, with ₹211cr of traded goods alone.",
        "costEffect": "**Weakly protected.** Tenders are fixed-price. Management says China's restrictions on battery exports and higher freight are hurting BESS margins, which is why the plant was delayed. Margin history: 9% (FY22), 14% (FY24), 13% (FY25), 12% (FY26), 8.5% in Q1 FY27. **Rule of thumb:** a 5% rise in bought-in costs not passed on would cut the margin by about 3.6 points, nearly a third of it.",
        "competitors": [
            {
                "name": "Large UPS and power-electronics makers",
                "note": "The annual report names none; it competes in tenders and dealer markets with many organised and unorganised suppliers."
            },
            {
                "name": "BESS integrators and EPC firms",
                "note": "Management cites HG Infra, Pace Digitek and Vikram Solar as utility-BESS players suffering margin erosion; it is avoiding that segment."
            }
        ],
        "position": "**A mid-sized power-backup supplier** with three plants. Plant use was 16–45% before the new BESS and UPS units, and more than 2 lakh installations. Market share is not disclosed.",
        "money": "At March 2026 Screener shows **borrowings of ₹93cr against about ₹74cr of cash**, so roughly ₹20cr of net debt, even after a ₹168cr IPO in June 2025. **Cash is the weak point.** Operating cash was negative in each of FY23–FY26 (−₹74cr in total, −₹49cr in FY26), and free cash was −₹120cr over FY22–FY26. Receivables reached ₹254cr (241 days of sales) at March 2026, mostly the CCTNS police project. Management says ₹46cr was collected in Q1 and expects about half to be cleared by end-Q2. The BESS developer projects will be funded in subsidiaries, with SBI debt for Bihar, while the Karnataka project may be sold. ₹43.3cr of warrants at ₹147 were approved in August 2026 for working capital. Promoters hold 72.83%.",
        "watch": [
            "Receivables falling towards 120–150 days and a first positive operating-cash year.",
            "The Jhajjar BESS plant running, and C&I storage orders replacing the one-off Adani project.",
            "Any further equity raise beyond the ₹43cr of warrants."
        ],
        charts: electricalEquipmentCharts["Prostarm Info Systems"],
    },
];

export const electricalEquipmentBusinesses = { intro, profiles };
