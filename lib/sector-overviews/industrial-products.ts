import { SectorOverview } from './types';

export const industrialProducts: SectorOverview = {
    sector: 'Industrial Products',
    title: 'Industrial Products',
    standfirst:
        'Thirteen companies that make things which go inside someone else\'s plant, machine or vehicle: abrasives, welding rods, cryogenic tanks, solar glass, heat exchangers, car air-conditioners, transformer cores, temperature sensors, machined parts and railway electronics. The economics of each one is decided by three things — whether the customer can change supplier without re-qualifying, whether the product is consumed and re-ordered, and who carries the raw-material risk. Almost everything else, including the growth rate, is noise on top of those three answers.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**HBL Engineering has the hardest barrier to entry in this list and I have upgraded my view on it.** Kavach, the train anti-collision system, has exactly three RDSO-approved vendors — Medha Servo, Kernex and HBL — against a programme worth ₹25,000-30,000cr spread over 35,000 route kilometres. That is a legislated oligopoly in a safety-critical product where the buyer cannot afford to experiment, and HBL has converted it into more than ₹4,000cr of orders, including ₹1,770cr of Kavach wins this year with execution running to March 2028. Its profit fell 24% this quarter because defence battery sales halved, which is a mix problem inside a strong position, not a competitive one. The caveat is that we have no earnings call for it, so this rests on filings and news.',
                '**Ador Welding is the clearest demonstration of pricing power in the sector, and I would still own it.** In a year when raw material costs spiked, it grew revenue only 2% but expanded gross margin 250 basis points to 38% — it chose price over volume and its customers stayed. That is the behaviour of a business with a brand and a distribution network (80-85% sold through distributors, approvals covering 75-80% of shipyard requirements, nuclear-approved consumables), and its product is a true consumable: welding rods and wire are bought every week, not every decade. It has also finished clearing out the loss-making projects division that hid this for a decade.',
                '**Diffusion Engineers is the best small compounder here** because it has done something rare: it uses its own welding consumables and wear plates inside the heavy equipment it sells, so the same rupee of metallurgy is sold twice, and it has become the manufacturing arm for European and Japanese equipment designers who will not easily re-qualify another shop.',
                '**The four highest-quality franchises — Inox India, Carborundum Universal, KRN Heat Exchanger and Omnitech — are on a watch list rather than in the portfolio.** Their businesses are genuinely good; the prices assume many years of flawless execution. **Borosil Renewables** deserves a small position as the cheapest asset here, but its 35% margin is the product of an import duty, not of a cost advantage: the two Chinese leaders together run about half the world\'s solar glass capacity, and Xinyi alone melts more than twenty times what Borosil does. **I would avoid Airfloa Rail**, where the reported profit is not yet cash, research spending is being put on the balance sheet, and the promises run well ahead of the order book.',
            ],
        },
        {
            heading: 'Where each of these companies sits in its customer\'s value chain',
            body: [
                'The same label covers five very different positions. Position determines who has the power in the relationship.',
            ],
            points: [
                {
                    label: 'Consumed and re-ordered — Ador Welding, Diffusion Engineers, Carborundum Universal, Tempsens',
                    text: 'Welding electrodes, hard-facing wire, grinding wheels and abrasive grain, and to a degree sensors, are used up and bought again. **The customer\'s decision is made once, at qualification, and then repeats,** which is why these businesses hold share for decades and can price. India\'s welding consumables market is about $1.3bn growing at roughly 6%, with ESAB India first and Ador second; abrasives is about $557m with Grindwell Norton at 26% and Carborundum at 25%, the two of them holding roughly 70% together.',
                },
                {
                    label: 'Qualified inside someone else\'s machine — Subros, Vilas Transcore, KRN Heat Exchanger, Omnitech',
                    text: 'A car air-conditioner, a transformer core, a heat exchanger coil or a machined oilfield component is specified into the customer\'s product. **Qualification is a barrier, but the customer is powerful:** Subros earns 8.4% because two-thirds of its revenue is Maruti Suzuki and Maruti sets the price; KRN\'s oldest and largest relationship, with Daikin, is effectively cost-plus at a fixed rupee margin, while its newer customers pay better.',
                },
                {
                    label: 'The equipment is the process — Inox India, Borosil Renewables',
                    text: 'A cryogenic tank\'s boil-off rate decides the customer\'s running cost for twenty years, and solar glass transmission decides a module\'s efficiency. **These are performance products, where the specification is written around a supplier — provided a cheaper equivalent does not exist.** It does not for Inox in 1,500 cubic metre tanks (only Chart Industries competes worldwide); it very much does for commodity solar glass, where China has the scale.',
                },
                {
                    label: 'Regulation creates the market — HBL Engineering, Borosil again, Vilas indirectly',
                    text: 'Kavach exists because the government mandated it, and only three companies may supply it. Solar glass in India is profitable because imports are taxed. **Regulation-created positions are extremely profitable and only as durable as the rule.** Kavach\'s rule is a safety standard — hard to reverse. Borosil\'s is a trade duty — reviewable.',
                },
                {
                    label: 'Bought once, as a project — Patil Automation, Airfloa Rail, parts of Inox and KRN',
                    text: 'A robotic welding line or a set of coach interiors is a capital purchase with no consumable attached. **The revenue does not repeat, so every year starts from zero** and the company must keep winning bids. Patil at least has a repeat rate: about 60% of automotive customers come back on their own model-change cycle, and a line lasts six to seven years before modification.',
                },
            ],
        },
        {
            heading: 'The technical barrier, graded honestly',
            body: [
                'Every company in this sector describes its technology as differentiated. Some of it genuinely is. This is my ranking of what would actually be hard for a competitor to copy.',
            ],
            points: [
                {
                    label: 'Very hard — safety-certified systems and cryogenic engineering',
                    text: '**HBL\'s Kavach** requires the highest railway safety-integrity level, an independent safety assessment and years of RDSO trials; three companies have cleared it in a decade. **Inox India\'s** large cryogenic vessels combine vacuum insulation, weld integrity at minus 196 degrees and code certification; it has just added AS9100D, which qualifies it for parts that fly rather than sit on the ground, and it is one of two companies in the world that a US space programme buys 1,500 cubic metre tanks from. Its ultra-high-purity semiconductor gas lines need orbital welders so scarce that Inox has set up a training centre to create them — a shortage of skilled labour is itself a barrier for followers.',
                },
                {
                    label: 'Hard — materials science and grain metallurgy',
                    text: '**Carborundum** fuses its own alumina, silicon carbide and zirconia grain, has moved silicon carbide purity from 5N to 6N (the threshold for semiconductor use), holds NIJ 3 and 4 ballistic certifications for armour, and is the world\'s second largest maker of metallised ceramic cylinders for vacuum interrupters. **These qualifications take three to ten years and cannot be bought.** Semiconductor fab-equipment ceramics start small this year, pick up in FY28 and peak around FY30 — a slow, real, high-margin runway.',
                },
                {
                    label: 'Moderate — approval-led rather than invention-led',
                    text: '**Ador** must be approved for nuclear, shipyard and wind applications, and holds approvals for 75-80% of shipyard requirements; the chemistry itself is mature. **Diffusion** owns genuine hard-facing metallurgy with a DSIR-recognised laboratory, and its advantage is combining it with heavy fabrication. **Omnitech** machines to five microns and is working through first-article approvals and Nadcap accreditation for aerospace — demanding work, but the customer owns the drawing.',
                },
                {
                    label: 'Low — engineering and capacity, not technology',
                    text: '**KRN** makes fin-and-tube coils. The differentiation is customised design, speed and available capacity at a moment when North American makers (Modine, Direct Coil, Can Coil) cannot keep up with data-centre demand. That is a real commercial advantage and a weak technical one, which is why the micro-channel and plate heat exchangers it is developing for liquid cooling matter: they are the harder products, and it is about a year away from the first of them. **Vilas Transcore** slits, anneals and stacks electrical steel; the barrier is the PGCIL approval it is still waiting for and access to imported steel, not the process.',
                },
                {
                    label: 'Bought in, not owned',
                    text: '**Subros** builds Denso designs under a technology assistance agreement with Denso and Toyota Industries; its new electric compressor starts at 80-85% imported content and reaches about 70% localisation only in the third phase. **Airfloa\'s** defence technology will sit in a joint venture with Big Bang Boom Solutions, with Airfloa holding manufacturing rights. **Patil** bought its defence credibility (MI Robotics) and powertrain expertise (Penteco). **This is a legitimate way to enter a market, but the licensor keeps the scarcity — and therefore most of the pricing power.**',
                },
            ],
        },
        {
            heading: 'Who carries the raw-material risk — the year\'s cleanest test',
            body: [
                'Aluminium, copper, steel, tungsten, resins and freight all spiked after February, and several states raised minimum wages by 25-40%. The contracts decided the outcome, and the results are unusually easy to read.',
                '**Full pass-through, margins intact.** KRN resets prices every quarter against LME copper and aluminium and the rupee-dollar rate, and held 19.4% while revenue doubled — the best contract terms in this sector. Inox prices large contracts on a raw-material formula with a ±3% band and held 23.6%. **Where the contract moves with the metal, the company is effectively selling engineering hours, and the metal is the customer\'s problem.**',
                '**Partial or lagged pass-through, margins dented.** Omnitech passes costs through at quarterly business reviews with a two-to-three month lag and has no energy clause; its raw material has gone from 20% to 28% of sales and it protected a 30% margin mainly through volume. Diffusion lost 1.5-2 points of gross margin on fixed-price orders when tungsten rose several hundred percent, and has since got customers to accept the new level. Carborundum could not recover a ₹16cr resin and fuel shock in abrasives fast enough, and its standalone margin there fell from 17.1% to 10.4%.',
                '**Structurally disadvantaged.** Subros has quarterly indexation for commodities and currency, which nets out when prices move both ways — but prices only rose, so it lost on every lag, and wage increases of 26-32% in Haryana and Uttar Pradesh are not covered by any clause at all. Its 12% margin ambition has been deferred for over two years and is now pushed out another twelve months. Airfloa\'s price-variation clauses covered about half of an 80% rise in aluminium.',
                '**And the one that simply raised prices.** Ador took the 2% revenue growth and the 250 basis point gross margin gain. **In a sector where most companies discovered this year whether they had pricing power, that is the only unambiguous demonstration of it.**',
            ],
        },
        {
            heading: 'Competition, and where the power really sits',
            body: [
                '**Abrasives is a comfortable duopoly, solar glass is not.** Carborundum and Grindwell Norton hold about 70% of Indian abrasives between them, with 3M and Wendt in specialised corners, and Chinese imports easing since China withdrew an export incentive. Borosil faces the opposite structure: Xinyi Solar and Flat Glass Group control roughly half of global solar glass capacity, and Xinyi alone runs more than 23,000 tonnes a day against Borosil\'s 1,000 going to 1,600. **Borosil is not the low-cost producer and never will be; it is the protected local producer,** which is a different and more fragile thing.',
                '**In welding, being second is fine.** ESAB India leads, Ador is second, then D&H Sécheron, EWAC and Lincoln. In a consumable market that grows with steel consumption, a strong number two with 17-18% share, its own distribution and approvals earns good returns without needing to win share.',
                '**In cryogenics, scarcity of capability beats scale.** Linde, Air Products, Chart, Cryolor and Wessington are the global names; for very large tanks and specialised scientific work (CERN, ITER), the qualified list is short. Inox has 85% of India\'s LNG semi-trailers, and Chart has now opened an Indian plant — worth watching, but Inox\'s cost base and the customer\'s qualification cost both favour the incumbent.',
                '**In heat exchangers, the shortage is the opportunity and also the risk.** KRN is selling into a genuine North American capacity gap, and the market is consolidating around large integrated cooling vendors (Vertiv, Schneider, Modine) rather than component specialists. Becoming a qualified supplier to Vertiv, which KRN has just begun, is the difference between riding the shortage and having a position when it ends.',
                '**In car air-conditioning, Subros is the only integrated Indian maker with its own compressors,** against Mahle Anand, Sanden Vikas, Denso, Hanon and Valeo. Share is not the problem — 41% in cars and trucks — the customer is: two-thirds of revenue from one buyer that also part-owns the technology.',
                '**In automation and interiors, the competition is fragmented and the entry barrier is low.** Patil competes with Wipro PARI, Comau, Jendamark and many small integrators; Airfloa with Kineco, Hindustan Fiberglass, DTL and the Tata-Fainsa seating venture. **In both, the defensible asset is delivery speed and installed-base familiarity, not technology.**',
            ],
        },
        {
            heading: 'Are the margins structural?',
            body: [
                'Ranked by how much of the current margin I would expect to survive a bad year.',
            ],
            points: [
                {
                    label: 'Most durable: Ador, Carborundum ceramics, HBL, Diffusion',
                    text: 'Consumables and certified products with repeat demand and demonstrated pricing power. Ador\'s 12% EBITDA on a 38% gross margin is protected by distribution and approvals; Carborundum\'s ceramics division earns 20-21% and is being upgraded towards semiconductors, fuel cells and armour; HBL\'s returns are high because only three companies may sell what it sells. **Diffusion earns its 13% partly by consuming its own consumables inside its equipment,** which is a structural, not a cyclical, advantage.',
                },
                {
                    label: 'Durable while the contract terms hold: KRN, Inox',
                    text: 'Both look excellent (19-24%) and both are protected by pass-through clauses rather than by product scarcity — except at Inox\'s top end, where scarcity is real. KRN\'s newer customers pay better than Daikin, so mix is currently helping; if data-centre demand normalises and its plants are half full, the same clauses will not save the margin.',
                },
                {
                    label: 'Mix-dependent: Omnitech, Tempsens, Vilas',
                    text: 'Omnitech\'s 30% is remarkable for machining and comes from complex, low-volume, high-mix work for energy customers; a shift towards simpler parts or a weaker oil market would compress it. Vilas earns 12-13% in cores, 18% in radiators, 25-30% in nanocrystalline and 6% in copper conductors — **its reported margin is simply the weighted average of what it happens to be shipping.**',
                },
                {
                    label: 'Not structural: Subros, Borosil, Airfloa, Patil',
                    text: 'Subros\'s margin is set by Maruti\'s purchasing department and by wage law. Borosil\'s 35% is set by a duty notification and by a fuel surcharge it is already rolling back; volume grew only 8% while price did the work. Airfloa\'s margin fell from 25% to 20% on one commodity move. Patil\'s 17.7% is project-by-project and depends on choosing its bids well — which, to be fair, is exactly what it says it does.',
                },
            ],
        },
        {
            heading: 'Where the next five years of growth come from',
            body: [
                '**Cryogenics is the deepest runway in the sector.** Inox is being pulled by four independent forces at once: a US private space programme (more than ₹1,000cr of cumulative orders, deliveries to FY28), semiconductor fabs needing ultra-high-purity gas systems (Dholera, Micron, Foxconn), LNG as a transport and marine fuel (85% share of Indian LNG trailers, the Bahamas mini-terminal with two follow-on islands, Cochin Shipyard), and big science (CERN, ITER). Its own constraint is capacity, which the Kandla port plant addresses around January, and a non-compete that keeps it out of the US market until 2028.',
                '**Ceramics is Carborundum\'s second company hiding inside the first.** Metallised cylinders benefit from the global phase-out of SF6 gas in switchgear, which pushes the industry towards vacuum interrupters; solid-oxide fuel cell ceramics ride the same data-centre power demand that lifts everything else; semiconductor ceramics scale from FY28. Management raised ceramics growth guidance from 15% to 23-25% — the only upgrade of that size in the sector this quarter.',
                '**The data-centre build-out is real for one company here and adjacent for two.** KRN\'s data-centre revenue went from ₹20cr to ₹65cr in a quarter and it expects three to three and a half times for the year; that is direct. Inox\'s liquid-nitrogen cooling prototype is one to one and a half years from commercialisation. Patil builds battery-pack and energy-storage container lines, which it describes as data-centre work — it is adjacent, and worth about ₹15-30cr a line.',
                '**Electrification and the grid.** Vilas has tripled core capacity into a transformer shortage and is adding radiators, nanocrystalline cores and copper conductors to sell more to the same customers; PGCIL approval would move it from solar transformers into the larger power-transformer market. Subros\'s electric compressor, if localised as planned, roughly triples the content it earns per vehicle.',
                '**Railway safety and modernisation.** HBL\'s ₹4,000cr book runs to March 2028 with more station and locomotive tenders behind it. Airfloa is aimed at the ₹26,000cr, 25,000-coach refurbishment programme, which is a genuine opportunity if it can fund the working capital.',
                '**What is not a growth engine:** rooftop solar kits at Borosil (target cut from ₹75cr to ₹36cr, single-digit margins, ₹1.3cr delivered), and the defence ambitions being described by the two smallest companies, which are pre-revenue joint ventures with two-year development cycles.',
            ],
        },
        {
            heading: 'Accounting and disclosure: what I am marking down for',
            body: [
                '**Airfloa Rail** intends to capitalise research spending of 8-9% of sales rather than charge it to profit, carries receivables equal to two-thirds of annual revenue, and has negative operating and free cash flow while guiding ₹500cr of revenue and hinting at ₹1,000cr. **Omnitech** switched depreciation from the reducing-balance to the straight-line method in the year it begins heavy capital spending, which lowers the reported charge. **Borosil\'s** Q4 profit was flattered by a ₹75cr tax write-back on the German subsidiary write-off, so the year-on-year comparison flatters the current quarter in reverse. **KRN** has raised ₹350cr at IPO and ₹350cr in a QIP within about eighteen months and publishes no order book, calling its bookings "rolling" with 20-day purchase orders. **Tempsens** listed in August with 85% of the issue being existing shareholders selling. **Vilas** has had weak cash conversion for two years while insisting working capital is unchanged.',
                'None of this is fatal on its own. But in a sector where the difference between a good and a mediocre business is whether profit converts to cash, **these are the six places to check the cash flow statement before the profit statement.**',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** Kavach station and locomotive tenders continuing at this pace, which would make HBL\'s position look structural rather than lumpy; Inox\'s space and semiconductor orders converting on schedule and the Kandla plant opening; Carborundum finishing its German and South African exits so the underlying ceramics business shows through; KRN winning Vertiv volume production, which would convert a capacity advantage into a qualified position; a correction that brings the four quality names to sensible prices.',
                '**For the worse:** any dilution of the solar glass duties, or Chinese producers restarting idled furnaces and exporting into whatever gap remains (Xinyi and CSG paused new furnaces in early 2026 when prices fell below cash cost — that capacity has not gone away); a slowdown in US data-centre or oilfield spending, which would hit KRN and Omnitech together; Maruti losing share or refusing to compensate Subros for wage inflation; and an anti-dumping duty on electrical steel that raises Vilas\'s own input cost.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'HBL Engineering',
            stance: 'SCALEUP',
            what: 'Kavach train anti-collision electronics, defence and aviation batteries, and industrial batteries — one of only three RDSO-approved Kavach vendors.',
            view: 'The strongest regulatory barrier in this sector. Kavach is a safety-integrity-certified system in a ₹25,000-30,000cr programme covering 35,000 route kilometres, and a decade of trials has produced only three approved suppliers. HBL has turned that into more than ₹4,000cr of orders, including ₹1,770cr won this year with execution running to March 2028, and it makes its own electronics rather than assembling them. Returns are very high, though flattered by order bunching.',
            watch: 'Q1 profit fell 24% because defence and aviation battery revenue halved — a mix problem, but it shows how lumpy the non-rail half is. We have no earnings call for this company, so the view rests on filings and news rather than management questioning.',
        },
        {
            company: 'Ador Welding',
            stance: 'HARVEST',
            what: 'India\'s largest welding company outside the multinationals: electrodes, wires and fluxes (about 83% of sales), plus equipment and automation. Second in a $1.3bn market behind ESAB.',
            view: 'A true consumable business — the customer re-orders every week — with the moat in distribution (80-85% through distributors), approvals (nuclear consumables, and coverage of 75-80% of shipyard requirements as naval shipbuilding accelerates) and brand. It proved its pricing power this year by taking 2% revenue growth in exchange for 250 basis points of gross margin. With the loss-making flares and process-equipment division dissolved and the Kuwait receivable recovered, what is left is a clean, cash-generative, 23% return business.',
            watch: 'Growth follows steel consumption, so 8-10% is the realistic rate; the ₹2,000cr by FY29 ambition needs the economy to cooperate or an acquisition. The first quarterly results as a single-segment company are still awaited.',
        },
        {
            company: 'Diffusion Engineers',
            stance: 'SCALEUP',
            what: 'Hard-facing welding consumables and wear plates, and the heavy equipment (cement grinding rollers, separators, classifiers) that uses them.',
            view: 'The integration is the point: it makes the flux-cored wire, uses it to make wear plates, and uses those to build equipment, so a single order carries three layers of its own value added. That also makes it the local manufacturing arm for European and Japanese equipment designers, who describe it as sticky once qualified. Heavy engineering capacity has doubled to 18,000 tonnes and the order book is ₹209cr with 80% executable this year; cement and steel maintenance spending recurs whether or not new plants are built.',
            watch: 'The ₹40-45cr valuation put on a 10% stake in a pre-revenue anti-drone start-up is the wrong use of shareholder money at this size; ₹67cr of IPO proceeds are still unspent and Unit 3 runs at 2-3% utilisation.',
        },
        {
            company: 'Inox India',
            stance: 'PRICED',
            what: 'Cryogenic tanks and systems for industrial gases, LNG transport and fuelling, big-science projects (CERN, ITER), a US private space programme, and beverage kegs.',
            view: 'The deepest technical moat here: vacuum-insulated vessels where performance is measured in boil-off over twenty years, now extended by AS9100D certification into parts that fly rather than support a launch. It holds 85% of India\'s LNG semi-trailer market and is one of two suppliers worldwide its US space customer can use for 1,500 cubic metre tanks. Prices are formula-linked to raw materials, which is why margins held at 23.6% in a commodity spike, and the order book is a record ₹1,686cr with two-thirds export.',
            watch: 'Quarterly growth was only 8% because ₹32-35cr of finished goods could not be shipped at $8,000-plus container rates. Chart Industries has opened an Indian plant, and a non-compete keeps Inox out of the US market until 2028.',
        },
        {
            company: 'Carborundum Univer.',
            stance: 'PRICED',
            what: 'Carborundum Universal: abrasives (25% of the Indian market), electro-minerals (fused grain it makes itself) and advanced ceramics.',
            view: 'Vertical integration from mine to finished grain is the historic moat, and the interesting part is now ceramics: metallised cylinders for vacuum interrupters (it is the world\'s second largest maker, helped by the phase-out of SF6 gas in switchgear), solid-oxide fuel cell components, ballistic armour with NIJ 3 and 4 certification, and semiconductor fab-equipment ceramics that scale from FY28 and peak around FY30. Silicon carbide purity has moved from 5N to 6N, the threshold for semiconductor use. Management has raised ceramics growth guidance to 23-25% and is closing the loss-making German and South African units.',
            watch: 'Abrasives margin fell from 17.1% to 10.4% on a ₹16cr resin and fuel shock, which shows the legacy business is a price-taker. The Russian unit remains sanctioned and the Foskor exit must complete.',
        },
        {
            company: 'KRN Heat Exchan',
            stance: 'PRICED',
            what: 'KRN Heat Exchanger and Refrigeration: fin-and-tube coils for commercial air-conditioning and data centres, plus bus air-conditioning and railway heat exchangers.',
            view: 'The commercial position is excellent and the technical barrier is modest. It is selling into a genuine North American shortage — Modine, Direct Coil and Can Coil cannot meet data-centre demand — with exports up 177% and data-centre revenue tripled to ₹65cr in the quarter. Its contract terms are the best in this sector: quarterly pass-through of LME copper and aluminium and of the dollar, which is why 19% margins survived the spike. The next step matters more than the current numbers: micro-channel coils (about a year away) and plate heat exchangers for coolant distribution units are the harder, liquid-cooling-era products.',
            watch: 'Vertiv has passed the audit and ordered samples — volume production would convert a capacity advantage into a qualified position. Against that: ₹700cr of equity raised in eighteen months to fund working capital, no published order book, and a third plant planned while the second is at 50% utilisation.',
        },
        {
            company: 'Omnitech Engineering',
            stance: 'SCALEUP',
            what: 'Precision-machined components and sub-assemblies to five-micron tolerances, mainly for US oilfield-services companies (Weatherford, SLB, Halliburton), plus motion control and industrial equipment.',
            view: 'A build-to-print machining business earning a 30% margin is unusual, and the explanation is credible: high-mix, low-volume, difficult materials (Inconel, high-alloy stainless), end-to-end processing including non-destructive testing and surface treatment under one roof, and grinding customer qualification cycles that make switching expensive. The order book is above ₹3,000cr, anchored by a multi-year Weatherford contract worth more than $100m, and working capital improved from 294 to 233 days. Aerospace first-article approvals and Nadcap accreditation are the next barrier it is climbing.',
            watch: 'Energy is 49% of revenue with one anchor customer, the customer owns the design, and the ₹250cr expansion is already one to one and a half months late. The switch to straight-line depreciation lowers the reported charge.',
        },
        {
            company: 'Borosil Renewables',
            stance: 'CYCLICAL',
            what: 'India\'s only independent solar-glass maker, running 1,000 tonnes a day at full capacity with 600 more due by March 2027.',
            view: 'Be clear about what the moat is: an anti-dumping duty on Chinese and Vietnamese glass and a countervailing duty on Malaysian glass, not a cost or technology advantage. Xinyi Solar and Flat Glass Group together control about half of global capacity, and Xinyi alone melts more than twenty times what Borosil does. Within that protection the economics are excellent — 35% margins, full utilisation, realised price up from ₹138 to ₹160 a square metre, and a 60% capacity expansion that management says adds ₹80-85cr of EBITDA a quarter. India makes 2,600 tonnes a day against an 11,000-tonne need, so the volume is there.',
            watch: 'Volume grew only 8% — price did the work, including a fuel surcharge now being withdrawn. Most new Indian capacity is captive to module makers, two older furnaces need a 90-day rebuild, and Chinese producers idled furnaces in early 2026 rather than closing them.',
        },
        {
            company: 'Subros',
            stance: 'CYCLICAL',
            what: 'Car and truck air-conditioning systems and compressors — 41% share in passenger cars and in truck air-conditioning — built on Denso technology.',
            view: 'It is the only integrated Indian thermal supplier with its own compressor manufacturing, which is a real capability, and the truck air-conditioning mandate has given it a second engine growing 77%. But the structure of the relationship caps the outcome: two-thirds of revenue comes from Maruti Suzuki, the technology comes from Denso and Toyota Industries under a licence, and the indexation formula lags in a rising market. The electric compressor is the important project — it roughly triples content per vehicle — but starts at 80-85% imported content and reaches company-level margins only around FY28-29.',
            watch: 'Whether customers compensate for the 26-32% state wage increases, and the Kharkhoda plant starting production in Q3 alongside Maruti\'s northern expansion.',
        },
        {
            company: 'Tempsens Instruments',
            stance: 'PRICED',
            what: 'India\'s largest maker of contact and non-contact temperature sensors (about 10.5% share), heating solutions and specialised cables, with 15 units including plants in the UAE, Korea, Indonesia, Germany and Poland.',
            view: 'Structurally this should be a good business: sensors are consumed and replaced, they are cheap relative to the process they protect, and calibration and custom design create switching costs. The international footprint suggests it sells on capability rather than price. But it listed in August 2026, 85% of the issue was existing shareholders selling, the shares doubled on day one, and there is no reported quarter or earnings call yet.',
            watch: 'The first results and call as a listed company — specifically the split between sensors, heating and cables, and how much of the business is replacement demand rather than projects.',
        },
        {
            company: 'Vilas Transcore',
            stance: 'CYCLICAL',
            what: 'Transformer core laminations from grain-oriented electrical steel, plus radiators, nanocrystalline cores and copper conductors.',
            view: 'This is a converter of imported steel, and the value added is real but modest — 12-13% margins in cores. The genuine strategy is to sell more parts to the same transformer makers (radiators at 18%, nanocrystalline cores at 25-30%, conductors at 6%, bushings later), which raises wallet share without raising the barrier much. Capacity has tripled to 36,000 tonnes into a grid-driven transformer shortage, and it is debt-free.',
            watch: 'The PGCIL approval, which would move it from solar transformers into larger power transformers, and the anti-dumping investigation into Chinese electrical steel — a duty raises its own input cost, and management\'s claim that margins are unaffected either way deserves scepticism.',
        },
        {
            company: 'Patil Automation',
            stance: 'SCALEUP',
            what: 'Turnkey robotic production lines — car body-in-white welding, EV and powertrain assembly, defence ammunition lines and battery-pack container lines.',
            view: 'A systems integrator, so the asset is engineering capacity and project execution rather than technology: a 160-seat design centre, a new Pune plant taking capacity to about ₹300cr, and the ability to build and trial a complete line in its own factory before shipping. It claims roughly 20-25% lower cost than Chinese suppliers and a six to seven year line life with modification work afterwards, and about 60% of automotive customers repeat. Debt-free with a 10% net margin.',
            watch: 'Guidance of ₹260-270cr this year and ₹380cr next against a ₹118cr order book, ₹57cr of work in progress (a third of annual revenue), and ₹18.5cr of IPO money still unspent.',
        },
        {
            company: 'Airfloa Rail Techno.',
            stance: 'AVOID',
            what: 'Airfloa Rail Technology: coach interiors, seating and structural assemblies for Vande Bharat, Amrit Bharat and metro trains.',
            view: 'The market is real — a ₹26,000cr refurbishment programme covering 25,000 coaches — and revenue grew 66%. But the position is weak: it competes with Kineco, Hindustan Fiberglass, DTL and the Tata-Fainsa seating venture on capability that is not scarce, it sells capital items with no consumable attached, and its price-variation clauses covered only half of an 80% aluminium increase. It plans to capitalise research spending of 8-9% of sales, receivables are two-thirds of annual revenue, cash flow is negative, and the managing director floats ₹1,000cr of revenue while guiding ₹500cr.',
            watch: 'Collection of the ₹214cr of year-end receivables and a positive operating cash flow. Until then the reported profit is an accounting statement, not money.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**Own the two businesses whose customers cannot easily say no.** HBL Engineering sells a safety system that only three companies in India are approved to supply, into a ₹25,000-30,000cr programme, and has more than ₹4,000cr booked into FY28 — that is the hardest barrier in this list, and I have upgraded my view accordingly, with the honest caveat that we have no call transcript for it. Ador Welding sells a consumable through its own distribution with approvals in nuclear and shipbuilding, and it demonstrated pricing power this year in the most direct way possible: it raised prices, lost a little volume and made more money.',
            '**Add Diffusion Engineers for the integration.** Making the consumable, the wear plate and the machine that uses both is a genuine structural advantage at this size, and being the manufacturing arm of European and Japanese equipment designers is a position that takes years to displace. The anti-drone investment is a misuse of capital and should stay small.',
            '**Keep the four quality franchises on a watch list with a price in mind.** Inox India has the deepest technology and the best customer scarcity — two suppliers worldwide for its largest tanks — and only an 8% quarter because of freight. Carborundum Univer. (Carborundum Universal) is quietly turning a 25%-share abrasives business into a ceramics business aimed at semiconductors, fuel cells and armour. KRN Heat Exchan (KRN Heat Exchanger) has the best contract terms in the sector and is selling into a real shortage, but its technical barrier is thin until micro-channel and plate exchangers arrive. Omnitech Engineering earns extraordinary margins for machining and must prove they survive an oilfield downturn.',
            '**Borosil Renewables is a small position, priced as what it is.** Excellent economics inside a tariff wall, with 60% more capacity coming and Chinese competitors twenty times its size waiting outside. Own it for the capacity step-up, not as a compounder.',
            '**Subros and Vilas Transcore are supplier businesses whose customers hold the power** — Maruti Suzuki in one case, transformer makers and the trade authorities in the other. Both can do well in an up-cycle; neither will be allowed to earn a premium margin. Patil Automation is a capable small integrator that must convert a ₹800cr bid pipeline into orders before its guidance looks reasonable, and Tempsens Instruments has the right kind of business but no published quarter to judge it on yet.',
            '**Avoid Airfloa Rail Techno. (Airfloa Rail Technology)** until profit becomes cash and the claims match the order book.',
            'The question I would put to each of these companies at the next call is the same one this year already answered for several of them: when your costs rose 20%, who paid? Ador, KRN and Inox had an answer written into the contract. Subros, Airfloa and Carborundum\'s abrasives division paid it themselves. That single fact tells you more about the next five years than any order book.',
        ],
        bottomLine:
            'In this sector the durable money is in products that are certified, consumed and re-ordered, or in contracts where the metal price is the customer\'s problem. Own the regulatory oligopoly (HBL Engineering), the consumable with proven pricing power (Ador Welding) and the integrated small compounder (Diffusion Engineers); keep the genuinely excellent but expensive franchises on a watch list; and treat anything whose margin depends on a duty, a single customer or an accounting choice as a trade, not a holding.',
    },

    sources: [
        {
            label: 'India welding consumables market: size and leading players — Ken Research',
            url: 'https://www.kenresearch.com/industry-reports/india-welding-consumables-market',
        },
        {
            label: 'India abrasives market: Grindwell Norton and Carborundum shares — Ken Research',
            url: 'https://www.kenresearch.com/industry-reports/india-abrasives-market',
        },
        {
            label: 'Cryogenic tanks market: global players and segments — Market Research Future',
            url: 'https://www.marketresearchfuture.com/reports/global-cryogenic-tanks-market-11342',
        },
        {
            label: 'Solar PV glass: Xinyi and Flat Glass capacity and market structure — Fortune Business Insights',
            url: 'https://www.fortunebusinessinsights.com/solar-pv-glass-market-114492',
        },
        {
            label: 'Data centre cooling supply chain: heat exchanger and CDU bottlenecks 2026 — The Cooling Report',
            url: 'https://thecoolingreport.com/intel/data-center-cooling-supply-chain-guide-2026.html',
        },
        {
            label: 'HBL Engineering wins ₹1,714 crore Kavach locomotive order — ScanX',
            url: 'https://scanx.trade/stock-market-news/companies/hbl-engineering-secures-17-1b-order-for-kavach-locomotive-equipment/41530881',
        },
        {
            label: 'HBL Engineering Q1 profit declines 24% — Business Standard',
            url: 'https://www.business-standard.com/markets/capital-market-news/hbl-engineering-slips-after-q1-pat-declines-24-yoy-to-rs-110-cr-126081000220_1.html',
        },
        {
            label: 'India automotive HVAC market: competitive landscape — Expert Market Research',
            url: 'https://www.expertmarketresearch.com/reports/india-automotive-hvac-market/manufacturers',
        },
    ],
};
