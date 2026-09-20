import { SectorOverview } from './types';

export const electricalEquipment: SectorOverview = {
    sector: 'Electrical Equipment',
    title: 'Electrical Equipment',
    standfirst:
        'Thirteen companies whose only common feature is that electricity passes through what they make. The useful way to sort them is not by product but by who the customer is and whether that customer can be charged more when copper moves. Sell a generator to a global engine maker whose end customer is a data centre and you can reprice at will. Sell a smart meter to a state utility on a fixed-price twenty-year concession and you cannot reprice at all — and one company here has a ₹25,000cr order book with no escalation clause in it.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**Apar Industries is the highest-quality business on this page and it has just proved why.** Conductor volumes fell 6.7% in the quarter because unhedged customers deferred deliveries during an aluminium spike — and conductor EBITDA still *grew 14%* to a record ₹53,418 a tonne, because the premium product mix crossed 50%. **Profitability has been decoupled from volume**, which is the definition of pricing power. On top of that it has secured roughly ₹2,800cr of multi-year rate contracts with US and European utilities and direct vendor approval from Meta, Microsoft and Google for medium-voltage copper cables. It earns 31.8% on capital, and it is trading at its high.',
                '**TD Power Systems has the single best demand position I have seen in any of these notes, and the reason is a number from outside the company.** Global gas turbine manufacturing capacity is roughly 60-70 GW a year against about 110 GW of orders; lead times for combined-cycle plants have gone from three and a half years to five to seven; GE Vernova is carrying 116 GW of backlog and Siemens Energy a record European backlog with most of its gas turbine orders coming from data centres. **TD Power makes the generator that bolts onto those engines**, exports were 93% of its order inflow, and management makes the key point precisely: a power plant is only 5-10% of a data centre project\'s total cost, so the buyer will pay almost anything to get one. It killed its own railway business to free up factory space for generators.',
                '**Genus Power is the cheapest large position here at 14.5x and also carries the single largest unhedged risk in this note.** It holds a ₹25,173cr order book, all 24 of its smart-metering concessions are live, and it has about 30% of Indian meter manufacturing. But the contracts are **fixed price with no escalation clause whatsoever**, which is why margin guidance was cut from 20% to 18% while revenue guidance went up. You are being paid to take chip, copper and currency risk on a twenty-year concession with no pass-through.',
                '**And the honest structural point about this sector: four of the thirteen are fixed-price contractors to Indian governments and utilities, and they behave like it.** RMC Switchgears is running negative operating cash flow with receivables at half of annual revenue. Salzer Electronics has ₹22cr of smart meters sitting unsold that management now calls "a drag on our balance sheet". Servotech cancelled a planned equity raise and is funding new capacity with debt instead while its cricket subsidiary loses money. Inox Wind halved its own margin guidance in ninety days and will not tell analysts how many megawatts it shipped.',
            ],
        },
        {
            heading: 'The value chain, and where these thirteen actually sit',
            body: [
                'Electricity is generated, evacuated, transmitted, distributed, measured and consumed. These thirteen companies are scattered across every one of those steps, which is why the sector label is close to useless and why the note is organised by customer rather than by product.',
            ],
            points: [
                {
                    label: 'Making the power — generators, turbines and wind',
                    text: 'TD Power builds the AC generators that global engine and turbine makers integrate into captive power plants. Triveni Turbine is the category leader in industrial steam turbines below 30MW and is climbing into the 30-100MW range. Inox Wind makes wind turbine generators. GE Power services the thermal fleet that already exists. **These four have almost nothing in common commercially: two sell into a worldwide shortage, one sells into a domestic policy-driven market, and one sells maintenance on an asset class that is slowly being retired.**',
                },
                {
                    label: 'Getting the power out — conductors and structures',
                    text: 'Apar is the world\'s largest conductor manufacturer, selling high-temperature low-sag wire that carries more current down the same tower. KP Green fabricates the towers, monopoles and solar mounting structures underneath it, and has built what it describes as Asia\'s largest hot-dip galvanising line. **Apar sells performance; KP Green sells tonnes of galvanised steel. That difference shows up in the margin.**',
                },
                {
                    label: 'Distributing and controlling it — switchgear, enclosures and gears',
                    text: 'Salzer makes industrial switchgear and, unhelpfully, commodity wires and cables alongside it. RMC makes distribution enclosures and does electrical and solar contracting for state utilities. Elecon makes the industrial gearboxes and material-handling equipment that move coal, cement and ore — not strictly electrical at all, but the closest thing here to a genuine Indian industrial franchise.',
                },
                {
                    label: 'Measuring it — the metering layer',
                    text: 'Genus is the dominant player in Indian smart metering, and it has changed business model rather than product: it now designs, builds, finances, owns and operates the metering infrastructure for a distribution utility over an eight-to-nine-year concession, earning installation revenue first and an annuity afterwards. **That converts a manufacturer into an infrastructure developer, with all the capital intensity that implies** — peak net debt of ₹1,900-2,000cr and free cash flow now pushed to FY28.',
                },
                {
                    label: 'Using it — chargers, inverters and the components inside them',
                    text: 'Exicom makes electric vehicle chargers and telecom power systems and owns Tritium. Servotech assembles solar inverters, pumps and battery packs. RIR makes the high-power semiconductors — thyristors and silicon carbide devices — that sit inside other people\'s power electronics. **RIR is the only company on this page selling a component that its customers cannot easily make themselves**, which is why it is worth watching despite being the smallest and riskiest thing here.',
                },
            ],
        },
        {
            heading: 'What actually stops a customer switching — sorted by who the customer is',
            body: [
                'The single most useful question in this sector is not what a company makes but whether its customer can refuse a price increase.',
            ],
            points: [
                {
                    label: 'Global OEMs and Western utilities — the best customer, and the strongest moats here',
                    text: 'TD Power\'s generators are custom-engineered to pair with a specific engine, qualification takes 12-24 months, and once the generator is designed into the turbine package it cannot be swapped. Apar holds utility approvals globally and has just converted them into four-year rate contracts, plus hyperscaler vendor approvals that take years to obtain. **The commercial consequence is the same in both cases: when input costs rise, the price rises.** Apar set a record EBITDA per tonne in a quarter of falling volume; TD Power enforces price-variation clauses because the buyer has no alternative.',
                },
                {
                    label: 'The installed base — an annuity nobody can bid away',
                    text: 'GE Power services turbines it designed, which is close to unassailable within its own fleet, and is now doing first-of-a-kind repairs on non-GE and even Chinese equipment, doubling third-party orders to ₹320cr. Triveni has thousands of turbines in the field and refurbishes competitors\' machines too — its aftermarket backlog is up 115% year on year and is now 29% of the order book. **Nobody risks a turbine failure to save money on a service contract, which is why aftermarket is the most defensible revenue in this note.**',
                },
                {
                    label: 'Consequence-heavy industrial equipment — durable, but not price-proof',
                    text: 'A gearbox failure in a cement plant costs millions in downtime, which is why Elecon\'s 75-year record and its near-monopoly in wagon tipplers hold up. **But a moat against replacement is not a moat against price** — a roughly 5% bill-of-materials increase took about 300 basis points off Elecon\'s material-handling margins, and large public-sector buyers simply refuse to take delivery on schedule, leaving ₹70cr of finished goods stranded past a quarter-end cut-off.',
                },
                {
                    label: 'Regulatory approval and scale — narrow but real',
                    text: 'KP Green was the first in India to pass all three NATRAX crash tests at the first attempt and holds railway design approvals; its galvanising line runs 90,000 tonnes a year with a 15-tonne single dip. RIR has displaced ABB as a supplier of ultra-high-voltage switches to Indian defence, where qualification cycles are long and the buyer wants a domestic source. **Approval-based moats are genuine and they are narrow: they protect the position, not the price** — although RIR passed on 80-85% of a severe metals spike, which is better than most of this sector managed.',
                },
                {
                    label: 'Fixed-price contracts with governments and utilities — the anti-moat',
                    text: '**Genus states plainly that its concession contracts contain no price-escalation protection at all**, on a ₹25,173cr book. RMC had to absorb aluminium, silver, steel and copper inflation, cancel older orders or defer projects because its fixed-price structures had been breached. Salzer\'s switchgear division lost more than 400 basis points of margin because it cannot run a cost-plus model with its industrial customers. **Winning the tender and winning the economics are two different events, and in this half of the sector only the first one has happened.**',
                },
            ],
        },
        {
            heading: 'Technical barriers, graded honestly',
            body: [],
            points: [
                {
                    label: 'Very hard — high-power semiconductors and silicon carbide',
                    text: 'RIR makes 5kV to 8kV thyristors and is building silicon carbide epitaxy at Odisha under a ₹618cr programme with a 50% state capital subsidy. Displacing ABB in a defence application is a real technical result. **This is also the only company here attempting a capital programme roughly six times its annual revenue**, which is why the barrier cuts both ways.',
                },
                {
                    label: 'Hard — custom rotating machines and premium conductors',
                    text: 'Generators engineered to a specific prime mover (TD Power), API-compliant steam turbines in the 30-100MW class (Triveni), and high-temperature low-sag conductors where Apar sells grid efficiency rather than metal. Apar\'s premium mix crossing 50.3% is the whole reason its economics improved while volumes fell.',
                },
                {
                    label: 'Moderate — industrial gears, switchgear, smart meters',
                    text: 'Elecon\'s heavy gearboxes and Salzer\'s switchgear involve real engineering and real qualification, but many capable suppliers exist. Genus\'s hardware is not the barrier — **its actual moat is software integration into the utility\'s billing backbone plus the capital to fund a concession**, backed by a platform partnership with GIC that pure hardware players cannot match.',
                },
                {
                    label: 'Low — fabrication, assembly and contracting',
                    text: 'Galvanised steel structures, distribution enclosures, solar inverter and battery-pack assembly, solar contracting. KP Green and Servotech both compete here, and both are trying to escape upward — KP Green into telecom infrastructure with maintenance annuities, Servotech into storage. **The tell is that neither can hold a price when steel or cells move.**',
                },
            ],
        },
        {
            heading: 'Who they are competing against',
            body: [
                '**In generation equipment the competition is a global shortage, and it is the most favourable competitive backdrop in these notes.** Worldwide gas turbine manufacturing capacity is roughly 60-70 GW a year against about 110 GW of orders. Combined-cycle lead times have stretched from three and a half years to five, and to seven for the largest machines. GE Vernova is carrying about 116 GW of gas backlog and Siemens Energy a record order book with the majority of its gas turbine orders coming from data centres. **TD Power sells into exactly that bottleneck and Triveni is pitching steam turbines as a bottoming cycle to data centre developers who cannot wait four years for a gas turbine.** Neither is competing on price.',
                '**In conductors, Apar is the largest in the world and its competition is trade policy rather than a rival.** US Section 232 duties on metal content are a live cost, which is precisely why the pivot into copper data centre cable matters — it moves revenue out of the tariffed category.',
                '**In Indian industrial gears, Elecon\'s competition is European.** Flender and SEW hold the premium positions and Elecon sells value engineering; its overseas revenue grew 21.9% and it targets half its revenue from exports by FY30. That is a credible challenger position and not a leadership one.',
                '**In smart metering, the competition is other well-capitalised concession bidders** — Adani among them — and the barrier is the ability to fund a ₹500cr special purpose vehicle rather than to make a meter. Genus has a sovereign-wealth partner and 18 million meters of annual capacity, which is a durable advantage, and it is also the reason returns are set by financing rather than by manufacturing.',
                '**And at the bottom of the sector, the competition is anybody with a fabrication shop and a vendor registration.** RMC bids against a fragmented field where lowest price wins; Servotech assembles inverters against tier-one incumbents; Salzer\'s wires and cables division earns a 5% margin and consumes roughly half the company\'s debt. **Those are not competitive positions; they are participations.**',
            ],
        },
        {
            heading: 'Are the margins structural?',
            body: [
                'The June quarter ran the same experiment across all thirteen — a copper, aluminium, silver and freight shock plus a weaker rupee — and the results sort the sector cleanly.',
            ],
            points: [
                {
                    label: 'Passed the test comfortably — Apar, TD Power, RIR',
                    text: '**Apar lost 6.7% of conductor volume and grew conductor EBITDA 14% to a record ₹53,418 a tonne.** TD Power delivered 18.9% margins on 71% revenue growth and enforced price variation because its product is a small fraction of the customer\'s project cost. RIR passed through 80-85% of a severe precious and base metals spike and lifted its own sustainable margin target. **Three different mechanisms — product mix, customer economics, and being the only qualified source — and all three worked.**',
                },
                {
                    label: 'Absorbed it partially — Elecon, KP Green',
                    text: 'Elecon held group margin near 21% but gave up roughly 300 basis points in material handling to a 5% bill-of-materials increase, and is responding with back-to-back supplier lock-ins. KP Green defended a 20% margin but did it by hoarding raw material, pushing inventory days from 96 to 195 and short-term borrowing up roughly fourfold. **Buying inventory ahead of a price rise is a legitimate tactic and it is financed with the balance sheet, not with pricing power.**',
                },
                {
                    label: 'Failed it — Salzer, Genus, Inox Wind, Triveni',
                    text: 'Salzer\'s margin fell to 6.2% with profit down 53%, and full-year guidance was cut from 9-9.5% to 8-8.5% because, as management conceded, the switchgear business is not cost-plus. **Genus cut margin guidance from 20% to 18% purely because its contracts contain no escalation clause.** Inox Wind cut its full-year guidance from 20-25% to 14-15% in a single quarter with no adequate explanation. Triveni\'s margin fell 780 basis points to 18% and the firm 25% EBITDA target was quietly replaced with a softer ">20% PBT margin over the medium and long term".',
                },
                {
                    label: 'And several places where the reported number is not the business',
                    text: '**GE Power\'s FY26 profit before tax of ₹340cr was heavily inflated by one-offs against an underlying operating margin near 11%** — value the services business, not the print. Apar took a ₹93cr inventory provision in oils after a quarter in which oil margins were flattered by cheap historic stock. Exicom\'s consolidated loss of ₹21.9cr includes ₹8.7cr of deliberate dual-plant running costs while it transitions factories. Servotech\'s standalone profit of ₹11.1cr becomes ₹7.95cr consolidated, and the difference is a cricket subsidiary.',
                },
                {
                    label: 'The working capital tell',
                    text: '**RMC is the clearest warning in this sector: revenue grew 26% to ₹401cr, operating cash flow went negative, trade receivables rose 38.5% to ₹205cr, and a further ₹58cr sits as government retention money** — against a quarterly profit swing from a ₹7.07cr loss to a ₹9.3cr profit on back-ended billing. When a business-to-government contractor grows revenue and loses cash, the growth is the problem.',
                },
            ],
        },
        {
            heading: 'Where the growth comes from',
            body: [
                '**The global power equipment shortage, which is the most valuable thing in this note.** Data centres are driving captive generation because grid interconnection is too slow, and the equipment supply chain cannot keep up. TD Power raised its FY27 target to ₹2,600cr, has capacity for ₹3,200cr by FY28 and is modelling ₹4,000cr-plus by FY29-30, with order inflows up 87% and 93% of them export. Triveni has seen a surge in North American inquiry and is pitching steam turbines as an alternative to a multi-year gas turbine queue — **although its own conversion cycles are running beyond twelve months, which is why its US subsidiary was downgraded from "fully profitable" to "break-even" this year.**',
                '**Indian transmission and distribution, which is the base case for half the list.** Apar has a ₹10,190cr order book against a domestic high-voltage direct-current pipeline; KP Green has ₹1,831cr unexecuted with a bid pipeline above ₹3,000cr; Elecon has a record ₹1,518cr at a 1.44x book-to-bill; RMC has ₹850cr against ₹301cr of trailing revenue. **The orders are not the constraint anywhere in this sector. Conversion is.**',
                '**Smart metering, which is the largest single contract pool here.** Genus is executing against ₹25,173cr, installed 87 lakh meters last year, and has all 24 concessions operational, with the annuity phase now beginning. It is positioning for a gas metering mandate that it sizes at ₹35,000cr over three to four years, and building a 250-person software team to sell meter data management rather than hardware.',
                '**Electrification of transport and storage, which is early and expensive.** Exicom holds roughly half the passenger electric vehicle home charger market and is putting Tritium\'s new inverters through hyperscaler trials that could unlock about $42m of contracts in CY27. Servotech is targeting a tenfold increase in battery capacity in two years. **Both are spending now against revenue later, and only one of them will tell you its current capacity.**',
                '**Asset-light restructuring, which is growth by subtraction.** GE Power is demerging its Durgapur manufacturing plant into JSW Energy at a 139:10 share entitlement with no dilution, removing an asset that was losing about ₹27cr a year, and has signed a five-year manufacturing services agreement to protect supply. Inox Wind\'s demerger of its evacuation business removes roughly ₹1,000cr of gross block and ₹50-55cr of annual depreciation. **Both raise return on equity without selling anything more.**',
                '**And import substitution at the component level.** RIR expects ₹12-15cr of silicon carbide epitaxial wafer revenue in the second half of FY27 at 20-25% margins, rising toward a theoretical ₹400cr of capacity once both Odisha phases are built — on a company with ₹91cr of trailing revenue.',
            ],
        },
        {
            heading: 'Risks worth naming',
            body: [
                '**Fixed-price contracts with no escalation, which is a specific and quantifiable exposure rather than a general worry.** Genus carries it on ₹25,173cr. RMC has already absorbed it and had to cancel or defer orders. Salzer has cut guidance twice. **Ask every company in this sector the same question and the answers will differ by hundreds of basis points.**',
                '**Disclosure quality, which is unusually poor in parts of this sector.** Inox Wind has withdrawn megawatt volume guidance in favour of revenue guidance, refuses to give receivable days while claiming they are improving, and its leadership turned openly hostile when questioned on consecutive misses. Servotech refuses to disclose absolute production capacity while promising tenfold expansion, which makes the multiplier meaningless. **Salzer\'s investor presentation advertised a 10% margin target while verbal guidance was 8%, and management had to apologise when analysts caught it.** These are not modelling inconveniences; they are reasons to demand a lower price.',
                '**Related-party dependence.** Inox Wind has signed a 1.5GW memorandum with a promoter-group buyer that will dominate its order book — transfer pricing needs watching. **KP Green pays an uncapped 2% of revenue to its chairman as a brand royalty**, which is a permanent transfer from minority shareholders regardless of how the underlying business performs. Servotech funds a loss-making sports subsidiary while taking on debt for core capacity.',
                '**Dilution, in three forms.** Apar is in a silent period ahead of a securities issue and has suspended all guidance. TD Power called an unscheduled board meeting about a fundraise despite holding ₹240cr of cash. Servotech cancelled its planned equity raise and will fund expansion with debt instead — which is the worst of the three choices given its working capital history.',
                '**Terminal value, for one company.** GE Power is an excellent, cash-generative, high-return services business whose addressable market is capped at roughly ₹3,500-4,000cr and whose asset base is coal-fired. Management guides to 5-8% revenue growth. **It is a melting ice cube that will generate a great deal of cash first, and it should be owned on that basis and no other.**',
                '**And execution against demand that is not the problem.** Every company here has orders. Elecon leaves ₹70cr of finished goods stranded past a cut-off. Inox Wind needs roughly 100% sequential growth over three quarters to meet a target it has reaffirmed. Exicom runs two factories in parallel. **In this sector the order book is the easy part.**',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** Apar completing its capital raise and resuming guidance, which would let the market see the data centre cable opportunity properly; TD Power announcing its move into generators above 100MW, which multiplies its addressable market; Triveni converting North American inquiry into orders and getting its US subsidiary past break-even; Genus reaching free cash flow positive and starting to collect annuity revenue on all 24 concessions; RIR getting its ₹70cr term loan sanctioned and its first epitaxial wafers shipped.',
                '**For the worse:** a normalisation of global turbine lead times, which would remove the scarcity rent TD Power and Triveni are both earning; a sustained copper and silver super-cycle, which the fixed-price half of this sector cannot pass on at all; Indian utilities extending payment cycles, which would turn RMC\'s and KP Green\'s working capital from stretched to critical; and, for Inox Wind specifically, another quarter of missed execution with metrics withheld.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Apar Inds.',
            stance: 'COMPOUNDER',
            what: 'The world\'s largest conductor manufacturer, plus specialty cables including medium-voltage copper for data centres, and transformer and automotive oils.',
            view: '**The cleanest demonstration of pricing power in any of these notes.** Conductor volumes fell 6.7% because unhedged domestic customers deferred deliveries during an aluminium spike, and conductor EBITDA still rose 14% to a record ₹53,418 a tonne — because the premium product mix crossed 50.3%. Apar sells grid efficiency, not metal. The moat is approvals: it has converted global utility relationships into roughly ₹2,800cr of multi-year rate contracts with two major US and European utilities, and secured direct vendor approval from Meta, Microsoft and Google for medium-voltage copper cables, which simultaneously opens the data centre market and moves revenue out of tariffed aluminium. Domestic cables grew 59.9%, the order book stands at ₹10,190cr, exports are 27.5% of revenue, and the company earns 31.8% on capital.',
            watch: '**At 65.5x and 14 times book, sitting at its 52-week high, with management in a silent period that has suspended all guidance ahead of a capital raise, you are buying on execution history rather than on stated targets.** Section 232 duties on metal content remain a live cost on aluminium exports. Oil segment profit was flattered by cheap historic inventory and required a ₹93cr provision when prices fell — honest accounting, and a reminder that a quarter of the business is a commodity spread. Volume recognition will stay lumpy while metal prices swing.',
        },
        {
            company: 'TD Power Systems',
            stance: 'PRICED',
            what: 'Custom-engineered AC generators supplied to global engine and turbine makers, increasingly for captive power plants serving Western data centres.',
            view: '**The best demand position in this note, and it comes from outside the company.** Global gas turbine capacity is roughly 60-70 GW a year against about 110 GW of orders, combined-cycle lead times have stretched to five to seven years, and the major manufacturers are carrying record backlogs driven by data centres. TD Power makes the generator that pairs with those engines; qualification takes 12-24 months and once specified it cannot be swapped. Management frames the pricing power exactly right: **a power plant is only 5-10% of the end project cost, so demand is close to inelastic and price variation can be enforced.** Exports were 93% of order inflow, inflows rose 87% to ₹734cr, the order book is a record ₹2,208cr, and FY27 guidance was raised to ₹2,600cr with a path modelled to ₹4,000cr-plus by FY29-30. Killing the railway business to free factory space for generators, and demoting the Turkish plant to an insurance backend, are both the right calls made publicly.',
            watch: '**86.8x earnings and 22 times book price in flawless execution of a capacity expansion that has not started.** A board meeting on fundraising despite ₹240cr of cash makes near-term dilution likely. The customer base is a handful of global engine makers, so losing one would be severe. And the entire thesis rests on Western grid interconnection staying slow — if it speeds up, or if hyperscaler sites slip and the engine makers push out deliveries, the bullwhip lands on TD Power\'s inventory just as it spends.',
        },
        {
            company: 'Triveni Turbine',
            stance: 'PRICED',
            what: 'Category leader in industrial steam turbines below 30MW, moving into the 30-100MW class, with a large aftermarket service business.',
            view: 'The aftermarket is the reason to own this: thousands of turbines in the field, an ability to refurbish other manufacturers\' machines too, and **a closing aftermarket backlog up 115% year on year now making up 29% of the ₹2,180cr order book.** That is annuity revenue that does not depend on the capital expenditure cycle. Export order intake rose 53.4%, and the company is pitching steam turbines to North American data centre developers as a bottoming cycle for those who cannot wait five years for a gas turbine — a genuinely clever angle on the same shortage TD Power is exploiting. It earns 34.1% on capital.',
            watch: '**The quarter was bad in ways that matter. EBITDA margin fell 780 basis points to 18%, domestic order intake collapsed 35.4%, and the firm "25% EBITDA" commitment was quietly replaced with a softer ">20% PBT margin over the medium and long term".** Exports are sold free-on-board, so a three-to-fourfold freight spike caused customers to defer dispatch, trapping the high-margin revenue. The US subsidiary was downgraded from "fully profitable this year" to "break-even", with conversion cycles running past twelve months. Management declined to give inquiry-pipeline numbers when asked directly. At 52x, a heavily back-ended year needs to land.',
        },
        {
            company: 'Elecon Engg.Co',
            stance: 'SCALEUP',
            what: 'India\'s leading industrial gearbox manufacturer, with a material-handling equipment division serving steel, cement, power and ports.',
            view: 'The most straightforward industrial franchise on this page. A gearbox failure stops a cement plant, so a 75-year reliability record is worth real money, and the material-handling division holds a near-monopoly in specific niches such as wagon tipplers. The order book is a record ₹1,518cr, up 36.8%, at a 1.44x book-to-bill, and the balance sheet holds roughly ₹700cr of net cash with a ₹400cr capital programme fully funded. Overseas revenue grew 21.9% as it works toward a 50% export ambition and a ₹5,000cr FY30 target, and it is bidding naval defence work with large tenders expected by Q4 FY27. At 31.3x and 34% below its high, the price is not the problem.',
            watch: '**Delivery is the problem, and it has now recurred: ₹77cr of orders slipped out of the March quarter and ₹70cr of finished goods slipped past the June cut-off.** When large public-sector buyers are not ready to take delivery, the goods sit on Elecon\'s balance sheet and the working capital cycle stretches — that is a structural feature of the customer, not a one-off. A roughly 5% bill-of-materials increase took about 300 basis points off material-handling margins, which tells you pricing power is weaker than the franchise suggests. And guiding only "low double-digit" growth against a 37% order book increase is management telling you it does not trust its own conversion.',
        },
        {
            company: 'Genus Power',
            stance: 'SCALEUP',
            what: 'India\'s largest smart metering company, now operating as a concession developer that designs, builds, finances, owns and operates metering infrastructure for state distribution utilities.',
            view: 'The largest contracted revenue pool on this page by a wide margin — a ₹25,173cr order book, all 24 concessions at operational go-live covering 3.61 crore meters, 87 lakh meters installed last year, roughly 30% of Indian meter manufacturing and 18 million units of annual capacity. **The real moat is not the meter; it is the combination of software integrated into the utility\'s billing backbone and the balance sheet to fund a ₹500cr special purpose vehicle**, the latter supplied by a platform partnership with GIC that pure hardware competitors cannot match. The annuity phase is now beginning across the portfolio, and management is building a 250-person software team to sell meter data management. At 14.5x with 25.3% on capital, it is the cheapest large business here.',
            watch: '**The contracts are fixed price with no escalation clause of any kind, and management says so plainly.** That is why FY27 margin guidance was cut from 20% to 18% in the same breath as revenue guidance was raised to ₹6,000-6,500cr: rising chip, copper and currency costs land entirely on Genus. Peak net debt of ₹1,900-2,000cr and free cash flow positive now pushed to the first or second quarter of FY28 mean you are funding an infrastructure developer for another two years. The whole model depends on the national distribution reform scheme continuing, and an Enforcement Directorate search in December 2024 sits unresolved in the background.',
        },
        {
            company: 'GE Power',
            stance: 'HARVEST',
            what: 'Thermal power services — repairs, spares, control systems and turbine upgrades for India\'s coal fleet — after exiting engineering and construction contracting.',
            view: '**A textbook cleanup, executed properly.** Management amputated the cash-consuming contracting arm, and is demerging the Durgapur manufacturing plant into JSW Energy at a 139:10 entitlement with **zero dilution for existing holders**, removing an underused asset that was losing about ₹27cr a year, while signing a five-year manufacturing services agreement so supply is not disrupted. The result is a pure services business with ₹880cr of liquidity, an ICRA upgrade to BBB+, an order book of ₹1,628cr and core service orders up 34% to ₹734cr. The most interesting growth is outside its own fleet: third-party orders on non-GE and even Chinese equipment have doubled to ₹320cr, which expands the addressable market without capital. At 11.9x with a 70% exceptional dividend declared, the cash yield is the case.',
            watch: '**The addressable market is capped at roughly ₹3,500-4,000cr and the asset base is coal.** Management guides to 5-8% revenue growth because service growth is offset by the deliberate shrinking of legacy contracting. Headline profit before tax of ₹340cr was heavily inflated by one-offs against an underlying operating margin near 11% — strip them out. Emission-norm relaxations have already removed part of the market at a stroke. **Own it for the cash and the JSW entitlement; do not underwrite a re-rating.**',
        },
        {
            company: 'KP Green Engg.',
            stance: 'SCALEUP',
            what: 'Fabricator of galvanised steel structures — transmission towers, solar mounting structures, monopoles, pre-engineered buildings and crash barriers — moving into telecom infrastructure with maintenance contracts.',
            view: 'The cheapest business here at 10.4x on the second-highest return on capital at 36.7%, growing very fast: FY26 revenue up 78% to ₹1,250cr with EBITDA up 117%. The scale advantage is physical — what management calls Asia\'s largest hot-dip galvanising line at 90,000 tonnes a year with a 15-tonne single dip, blending green hydrogen into the fuel — and utilisation is only about 31% of 400,500 tonnes, so the next leg needs no new capital. It has passed all three NATRAX crash tests at the first attempt and holds railway approvals, and the ₹819cr BSNL telecom win adds maintenance annuity revenue rather than one-off fabrication. Dependence on the promoter group has fallen to 20-25% of solar structure orders, which is the right direction.',
            watch: '**Two things to price before the multiple. First, the working capital: inventory days went from 96 to 195 on deliberate raw material hoarding, and short-term bank debt rose roughly fourfold to fund it.** Hedging with the balance sheet is not the same as pricing power. **Second, governance: an uncapped 2% of revenue is paid to the chairman as a brand royalty**, which is a permanent transfer from minority shareholders however the business performs, and it is the main reason this trades at a third of the sector multiple. The stock is 55% off its high for reasons that are not purely sentiment.',
        },
        {
            company: 'RIR Power Electr',
            stance: 'SCALEUP',
            what: 'High-power semiconductors — 5kV to 8kV thyristors, silicon carbide devices and specialised switches — for Indian defence, railways and industry, building a silicon carbide epitaxy plant in Odisha.',
            view: '**The only company on this page selling a component its customers genuinely cannot make, and it has proved the point by displacing ABB as a supplier of ultra-high-voltage switches to Indian defence.** Qualification cycles in defence and railways are long and the buyer actively wants a domestic source, which is why it passed through 80-85% of a severe copper, silver and gold spike and raised its own sustainable margin target. The Odisha programme carries a 50% state capital subsidy, the 33kV grid connection that held it up for a year is now energised, and management is guiding ₹12-15cr of epitaxial wafer revenue in the second half of FY27 at 20-25% margins. A new chief executive from CG Power and an NSE listing in July have both improved the institutional case.',
            watch: '**This is a ₹91cr-revenue company executing a ₹618cr capital programme — roughly six times annual revenue — with the ₹70cr Phase 1 term loan still stuck at in-principle sanction.** At 221x earnings and 7.93% on capital, there is no valuation support if anything slips. Epitaxial wafer yields need to reach 85% to work at all, and subsidised Chinese silicon carbide capacity is the obvious competitive threat. Size it as a venture position, not a holding.',
        },
        {
            company: 'Exicom Tele-Sys.',
            stance: 'TURNAROUND',
            what: 'Electric vehicle chargers and telecom power systems in India, plus Tritium, an acquired global maker of high-power liquid-cooled fast chargers now pivoting into data centre power.',
            view: 'The Indian business is genuinely good and is being obscured. It holds roughly a 50% attach rate on passenger electric vehicle home chargers, has 200-plus service staff across 25 states which imported hardware cannot match, and the legacy telecom power division grew about 80% standalone on renewed operator capital spending and a ₹700cr BharatNet backlog. The order book is a record ₹1,400cr — close to four quarters of revenue. **The option worth watching is Tritium\'s new Tri-Flex and Bit-Flex inverters, currently in Fortune 100 and hyperscaler trials, which management sizes at roughly $42m of contracts in CY27 if they convert** — that would turn an electric vehicle charger business into a data centre power business.',
            watch: '**Consolidated EBITDA swung back to a ₹21.9cr loss and net loss was ₹73.6cr**, of which ₹8.7cr was the deliberate cost of running the old Gurgaon and new Hyderabad plants in parallel, and much of the rest was Tritium exhausting cheap acquired inventory. Consolidated break-even has been pushed to the second or third quarter, with Tritium\'s own break-even a Q4 FY27 target. Until then a profitable Indian business is funding an unprofitable foreign one, working capital is stretched by a 61% revenue jump, and the reported multiple is meaningless. Nothing to do until two consecutive quarters of positive consolidated EBITDA.',
        },
        {
            company: 'Inox Wind',
            stance: 'AVOID',
            what: 'Wind turbine manufacturer shifting from turnkey projects to equipment supply, with a long-term operations and maintenance business through Inox Green.',
            view: 'The structural pieces are real and worth stating before declining. The order book is about 4.4GW with roughly three years of visibility; the operations and maintenance arm carries margins near 50% and is consolidating a large inorganic portfolio; backward integration into transformers, cranes and power electronics captures local-content benefits; the new 4.4MW platform is on track; and the demerger of the evacuation business removes roughly ₹1,000cr of gross block and ₹50-55cr of annual depreciation, which mechanically lifts return on equity.',
            watch: '**Management cut full-year EBITDA guidance from 20-25% to 14-15% within ninety days while reaffirming 75% revenue growth — and revenue fell sequentially from ₹1,306cr to ₹872cr, meaning roughly 100% sequential growth is now required over three quarters.** It has withdrawn megawatt volume disclosure in favour of revenue guidance, claims receivable days are improving while refusing to give the number, and leadership turned openly hostile when questioned about consecutive misses. A 1.5GW memorandum with a promoter-group buyer will now dominate the order book, making transfer pricing the central valuation question. **A 10.6% return on capital, a 52% drawdown, and a management team that will not answer the operating questions is not a price problem — it is an information problem, and I will not underwrite it.**',
        },
        {
            company: 'Salzer Electronics',
            stance: 'AVOID',
            what: 'Industrial switchgear and wire harnesses for original equipment makers, alongside a commodity wires and cables business and a small building products line.',
            view: 'There is a decent business inside this: switchgear is 54% of revenue with a long-standing original-equipment relationship base including Schneider, building products grew 48%, a ₹200cr municipal energy management contract begins generating about ₹2cr a month of annuity revenue, and top-line guidance of 23-25% is intact. At 1.68 times book and 42% off its high, it is not expensive.',
            watch: '**It is growth without returns, and this quarter made that undeniable. EBITDA margin fell to 6.2%, profit fell 53%, and full-year guidance was cut from 9-9.5% to 8-8.5% — with management conceding that switchgear is not a cost-plus business and that it cannot pass on copper, silver and plastics inflation.** The wires and cables division earns a 5% margin and consumes roughly half the company\'s debt. The smart meter push has failed outright, leaving ₹22cr of finished goods unsold and described by management as "a drag on our balance sheet". And the investor presentation advertised a 10% margin target while verbal guidance was 8%, which management had to apologise for when analysts caught it. **Demerging cables would change the case; until that is announced, an 11.2% return on capital is the whole story.**',
        },
        {
            company: 'Servotech Renew',
            stance: 'AVOID',
            what: 'Assembler of solar inverters, solar pump controllers, lithium battery packs and electric vehicle chargers, largely for government schemes and channel distribution.',
            view: 'Demand is not in question: consolidated revenue grew 57.7%, the residential rooftop and pump subsidy schemes are large and real, the shift from lumpy government tenders toward retail channel distribution is the correct strategic direction, and storage assembly is a genuine adjacency with current lines at 50-60% utilisation.',
            watch: '**Three things disqualify it at this price. It abandoned a planned equity raise and will fund a new Haryana plant with debt instead — adding leverage on top of a business with a history of stuck government receivables and a stretched cash cycle. It refuses to disclose absolute production capacity while promising to triple and then multiply it tenfold, which makes the promise unmodellable.** And the gap between ₹11.1cr of standalone profit and ₹7.95cr consolidated is a loss-making cricket subsidiary — allocating capital to sports intellectual property while borrowing for core manufacturing is a capital-allocation answer in itself. At 12.8% on capital and 49% off its high, there is nothing here that a disclosed number could not fix, and none of them have been disclosed.',
        },
        {
            company: 'RMC Switchgears',
            stance: 'AVOID',
            what: 'Distribution enclosures and metering hardware plus electrical and solar contracting for state distribution utilities, with an early-stage grid monitoring product.',
            view: 'The macro case is legitimate — Indian distribution networks need modernising, the order book is ₹850cr against ₹301cr of trailing revenue with a ₹1,500cr bid pipeline, and the PulseBox grid monitoring device is a sensible attempt to escape commodity contracting into a market management sizes in the tens of thousands of crores. At 11.9x with 22% on capital, it is optically cheap.',
            watch: '**The cash flow is the objection and it is decisive. Revenue grew 26% to ₹401cr while operating cash flow went negative; trade receivables rose 38.5% to ₹205cr — more than half of annual revenue — with a further ₹58cr locked as government retention money.** Quarterly profit swung from a ₹7.07cr loss to a ₹9.3cr profit on heavily back-ended billing, which inflates year-end receivables and hides the strain. In a fixed-price contract structure it had to absorb metal inflation, cancel older orders or defer projects. PulseBox is pre-revenue and in evaluation. **A business-to-government contractor that grows revenue and loses cash is the oldest trap in Indian small-caps, and a 72% drawdown suggests the market has worked it out.**',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            'This is the most miscellaneous label in the database — thirteen companies with no common customer, no common product and no common economics. **The one question that sorts them is whether the customer can refuse a price increase, and the June quarter answered it for all thirteen at once.**',
            '**Apar Inds. is the position I would take and the clearest case in the sector.** Losing 6.7% of conductor volume and still setting a record EBITDA per tonne is what structural pricing power looks like when it is tested rather than described. Getting written into four-year rate contracts with global utilities and onto the approved vendor lists of Meta, Microsoft and Google takes years and cannot be undone by a competitor cutting price. 31.8% on capital. **The two honest caveats are that it sits at its 52-week high on 65.5x with guidance suspended for a capital raise, and that a quarter of the business is an oil spread that needed a ₹93cr provision this quarter.**',
            '**TD Power Systems has the best demand backdrop of anything in these notes and the price to match.** Global turbine capacity of 60-70 GW a year against 110 GW of orders is not a narrative; it is arithmetic, and lead times of five to seven years mean it persists. Management\'s observation that a power plant is 5-10% of a data centre\'s project cost is the whole investment case in one line — that is why it can enforce price variation and why it killed its railway business to free the factory. At 86.8x and 22 times book with a fundraise likely, I would want it 30% lower, and I would watch for hyperscaler site delays pushing deliveries back onto its inventory.',
            '**Triveni Turbine is a quality franchise having a genuinely bad year at a price that assumes it is not.** An aftermarket backlog up 115% and now 29% of the order book is the durable part, and pitching steam turbines to data centre developers stuck in a gas turbine queue is clever. But a 780 basis point margin fall, domestic intake down 35.4%, a firm 25% margin target quietly softened, a US subsidiary downgraded from profitable to break-even, and a refusal to give inquiry numbers is a lot to absorb at 52x.',
            '**Elecon Engg.Co is the one I would buy on any further weakness.** Net cash of ₹700cr, a record order book at 1.44x book-to-bill, a genuine switching-cost franchise in industrial gears, 31.3x and 34% off its high. **The thing to watch is not demand but dispatch** — ₹77cr slipped out of March and ₹70cr out of June, and the customers doing it are large public-sector buyers who will keep doing it. Buy it for the conversion improving, sell it if a third quarter of stranded finished goods appears.',
            '**Genus Power is the most interesting risk-reward here and it must be sized for what it actually is.** A ₹25,173cr order book at 14.5x with 25.3% on capital is extraordinary value on paper. But the contracts carry no escalation clause at all, which is why margin guidance fell from 20% to 18% while revenue guidance rose, and peak net debt of ₹1,900-2,000cr means you are funding an infrastructure developer until FY28. **Own it if you are comfortable taking chip and copper risk for eight years with no contractual protection; that is precisely the trade, and it is being offered at a low price for a reason.**',
            '**GE Power is a cash holding, not an investment.** Demerging Durgapur at 139:10 with no dilution, ₹880cr of liquidity, a 70% exceptional dividend, and third-party service orders doubling is excellent work. It is also a coal-fleet services business with a ₹3,500-4,000cr ceiling growing 5-8%, whose headline profit was inflated by one-offs. Take the cash and the JSW entitlement, and know what you own.',
            '**KP Green Engg. and RIR Power Electr are the two small-cap bets, at opposite ends of the risk scale.** KP Green is 10.4x on 36.7% returns with Asia\'s largest galvanising line at 31% utilisation — and inventory days that went from 96 to 195, short-term debt up fourfold, and **an uncapped 2% of revenue paid to the chairman as a brand royalty that permanently taxes minority holders.** RIR is the only genuine component technology here, having displaced ABB in defence and passed through 85% of a metals spike, attempting a capital programme six times its revenue at 221x earnings with its term loan unsanctioned. One is cheap for governance reasons; the other is expensive for execution reasons. **Both are position-size questions.**',
            '**Exicom Tele-Sys. is a watchlist name with one specific trigger:** a profitable Indian charger and telecom power business is currently funding an unprofitable Tritium, and the hyperscaler trials of its new inverters are worth roughly $42m if they convert in CY27. Two consecutive quarters of positive consolidated EBITDA would make it interesting; until then the loss is the fact.',
            '**And I would decline four outright, for four different reasons. Inox Wind** cut margin guidance from 20-25% to 14-15% in ninety days while reaffirming 75% growth, withheld megawatt and receivable numbers, and turned hostile when asked — that is an information problem, not a price problem. **Salzer Electronics** is growth destroying value: 6.2% margins, profit down 53%, ₹22cr of unsold smart meters, a cables division earning 5% on half the debt, and a presentation that advertised a margin target its own management contradicted. **Servotech Renew** swapped an equity raise for debt, will not disclose its capacity, and funds a cricket subsidiary while borrowing for factories. **RMC Switchgears** grew revenue 26% and went cash-flow negative with receivables at more than half of annual sales — the oldest trap in Indian small-caps.',
            'The question I would put to all thirteen: **when copper rose this quarter, what proportion of it reached your customer?** Apar answered with a record margin per tonne. TD Power answered that its product is too small a share of the project for anyone to argue. RIR answered 80-85%. Elecon answered that it lost 300 basis points. Salzer answered that it is not a cost-plus business. Genus answered that its contracts contain no escalation clause at all. **Six answers, six different businesses, one sector label — and the answer, not the label, is what you are buying.**',
        ],
        bottomLine:
            'Buy the ability to charge more, not the order book. Apar Inds. proved it by raising margin on falling volume; TD Power Systems has it because a generator is a rounding error in a data centre\'s budget; Genus Power explicitly does not have it on ₹25,000cr of contracted revenue, which is why it is cheap. Elecon Engg.Co is the best-priced industrial franchise here, GE Power is cash rather than compounding, and four of the thirteen are fixed-price contractors whose growth is consuming their balance sheets.',
    },

    sources: [
        {
            label: 'US power boom triggers a global gas turbine shortage — OilPrice',
            url: 'https://oilprice.com/Energy/Energy-General/US-Power-Boom-Triggers-Global-Gas-Turbine-Shortage.html',
        },
        {
            label: 'Could a delivery backlog derail the gas turbine boom? — Modern Power Systems',
            url: 'https://www.modernpowersystems.com/data-centre-power/could-a-delivery-backlog-derail-a-gt-boom/',
        },
        {
            label: 'Gas turbine shortage could derail data centre expansion — Engineering',
            url: 'https://www.engineering.org.cn/engi/EN/10.1016/j.eng.2026.02.014',
        },
        {
            label: 'Power bottlenecks and the AI data centre — Tech Fund',
            url: 'https://www.techinvestments.io/p/power-bottlenecks-and-the-ai-data',
        },
        {
            label: 'India\'s transformer moment: capturing the global grid equipment shortage — OneMint',
            url: 'https://www.onemint.in/articles/india-transformer-grid-equipment-2026',
        },
    ],
};
