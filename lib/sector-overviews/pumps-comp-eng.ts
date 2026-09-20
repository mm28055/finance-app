import { SectorOverview } from './types';

export const pumpsCompEng: SectorOverview = {
    sector: 'Pumps Comp & Eng',
    title: 'Pumps, Compressors & Engines',
    standfirst:
        'Nine companies that move fluid, compress gas or make power. What separates them is not the machine but the position: whether the product is certified into an application nobody will re-test, whether the customer keeps paying for spares and service for twenty years, and whether the company sets its own price or waits for a tender to set it. On those three tests this list splits almost perfectly into businesses worth owning through a cycle and businesses worth renting at the right point in one.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**Elgi Equipments is the best business here because of what it sells, not what it makes.** An industrial air compressor costs its owner far more in electricity over its life than it does to buy, so the sale is won on energy efficiency and uptime rather than on price — and that is a sale a Chinese importer cannot make. Elgi has best-in-class efficiency on about 70% of its range, defect rates low enough to offer ten-year and lifetime warranties profitably, and makes 95% of its motors in-house with a three-day lead time against three to six months from China. It is the only company on this list competing globally under its own brand against Atlas Copco and Ingersoll Rand, with half of revenue outside India, North America growing 37% through a 25% tariff, and Europe finally at breakeven.',
                '**Kirloskar Pneumatic is where the market is most wrong.** It owns its cost stack — the only company here whose raw material cost fell as a share of revenue during the commodity shock, by 370 basis points, because it makes its own forgings and castings — and it is converting lumpy project work into two annuities: an operations and maintenance business servicing more than 1,000 CNG stations growing 25-30% a year, and proprietary products (KHOLOS centrifugal compressors, the A800) that replace imports in steel and cement. It earns the highest return on capital in the sector and the stock is well off its high because its seasonally smallest quarter grew 10%.',
                '**Kirloskar Brothers is the cheapest route into the two hardest qualifications in this sector: nuclear and hyperscale cooling.** It designed sodium pumps for the fast breeder reactor in-house, its primary circuit pumps for the 700 MW fleet have passed hydraulic and mechanical testing, and its concrete volute pumps lose only about 2% efficiency in thirty years. It is also unusually disciplined commercially — it refuses orders without advances or letters of credit, which is why its cash converts and why it will deliberately under-participate in state water spending.',
                '**KSB and Kirloskar Oil own genuinely rare positions at prices that already assume the delivery.** KSB is the only ISO-19443 certified pump maker in India, with a near-monopoly in nuclear primary coolant pumps that must run 500 hours continuously before commissioning — an almost absolute switching cost — but it has cut guidance and grew 2.5% last quarter. **Shakti Pumps and Oswal Pumps are not really manufacturers in the investment sense; they are contractors to one government scheme**, priced by the lowest bidder and financed by the state\'s payment cycle. Wait for PM-KUSUM 2.0 to be notified.',
            ],
        },
        {
            heading: 'Four businesses, four different moats',
            body: [
                'The sector label hides the fact that these companies sell to different people, on different terms, with different defences.',
            ],
            points: [
                {
                    label: 'Engineered flow — KSB, Kirloskar Brothers',
                    text: 'Custom pumps for nuclear reactors, thermal plants, refineries, water utilities and now data centres. **The moat is certification plus consequence:** an API-610 hydrocarbon pump or a nuclear primary coolant pump is qualified over years, tested for hundreds of hours, and then never changed, because a failure shuts a reactor or a refinery. India\'s pump market is about $2.9bn, with domestic names (Kirloskar Brothers, CRI, Shakti) holding roughly a quarter and multinationals (KSB, Grundfos, Xylem) another fifth — so scale exists, but the profitable end is the certified end.',
                },
                {
                    label: 'Compressors — Elgi, Kirloskar Pneumatic',
                    text: 'Air and gas compression sold as products with a service tail. **The moat is lifecycle cost and service density.** Electricity dominates the cost of owning a compressor, so a few points of efficiency outweigh a large discount, and a buyer will not risk an unsupported brand. This is the best corner of the sector: both companies earn above 22% on capital, and in a $1bn Indian market growing around 7% a year, share is won from Atlas Copco and Ingersoll Rand rather than from each other.',
                },
                {
                    label: 'Engines and backup power — Kirloskar Oil, Powerica, Greaves Cotton',
                    text: '**Here the barrier is emissions certification and channel, not thermodynamics.** CPCB IV+ compliance re-set the competitive field, and what data-centre customers actually buy is delivery certainty and service coverage. The important distinction inside this group is ownership of the engine: Kirloskar Oil owns its platforms up to 10 MW; Powerica integrates Cummins engines, which means it owns the packaging, the channel and the service — but not the product; Greaves owns small diesel engines in a segment being electrified.',
                },
                {
                    label: 'Solar pumps for one government scheme — Shakti, Oswal',
                    text: 'Sold to state nodal agencies under PM-KUSUM, awarded to the lowest bidder and paid on the state\'s timetable. **There is no pricing power by construction, and the balance sheet is the receivable.** Shakti\'s brand pull with farmers and its in-house inverters (about 10% better generation) are genuine differences, but they do not change who sets the price.',
                },
            ],
        },
        {
            heading: 'The technical barriers, graded',
            body: [
                'Some of these qualifications are worth years of protected supply. Others are just competence.',
            ],
            points: [
                {
                    label: 'Very hard: nuclear and sodium-cooled pumps',
                    text: 'A primary coolant pump for a 700 MW pressurised heavy water reactor requires ISO-19443 nuclear quality certification — **KSB is the only Indian pump maker that holds it** — followed by 500 hours of continuous testing before commissioning. Kirloskar Brothers designed the sodium pumps for the prototype fast breeder reactor in-house and has passed hydraulic and mechanical testing on primary circuit pumps, with metallurgical trials underway. There is no realistic third entrant this decade.',
                },
                {
                    label: 'Hard: oil-free and process-gas compression',
                    text: 'Kirloskar Pneumatic\'s KHOLOS centrifugal machines replace imports in steel and cement, and it filed 35 new patents in a single quarter. Elgi\'s airend design and motor efficiency are what allow a ten-year warranty. **In compression, the engineering shows up as a number on the customer\'s electricity bill, which is the most persuasive form of differentiation there is.**',
                },
                {
                    label: 'Moderate: emissions-compliant large engines and data-centre packages',
                    text: 'CPCB IV+ gensets, 6.3 MW units for nuclear plants, marine and railway variants, and integrated cooling and fire packages worth $7.5-10m per hyperscale site. The engineering is real but the differentiator is often delivery: Powerica makes everything except the engine and alternator in-house precisely because data-centre customers pay for certainty of date, and Kirloskar Oil has completed India\'s first end-to-end 10,000 kVA repowering project.',
                },
                {
                    label: 'Low: solar pump assembly and standard pumpsets',
                    text: 'A solar pumping system is a motor, a controller, a structure and modules. Oswal is vertically integrated into structures, modules and balance of system and still lost 747 basis points of margin in a quarter — **proof that integration protects costs but cannot create pricing power when the customer runs an auction.**',
                },
            ],
        },
        {
            heading: 'The stress test: who owns their cost stack',
            body: [
                'Q1 FY27 was the rare quarter that tested every claim of pricing power at once, because copper, steel, aluminium, solvents and freight all moved while backlogs were already priced.',
                '**Integration that held.** Kirloskar Pneumatic cut raw material cost by 370 basis points as a share of revenue while peers were losing margin, and held EBITDA at 17.6-18% in its smallest quarter. Elgi misjudged the size of the move — it planned for 3-4% inflation and got 5-9% — but took price increases within the quarter and expects a one-to-two-quarter lag rather than a structural loss.',
                '**Backlog priced before the shock.** Kirloskar Oil\'s margin has slid from 13.4% to 11.3% over three quarters, partly on inputs and partly on a 40% rise in employee costs. Powerica\'s legacy genset orders carry no escalation clauses at all, so it absorbed the whole move at 5.6% and has since taken two rounds of price increases landing from Q3. Kirloskar Brothers\' consolidated margin fell to 11.8% mostly because its UK subsidiary dropped to 5.1% as energy-intensive European customers idled plants. Greaves lost 200-250 basis points and pushed recovery to the second half.',
                '**Price-takers.** Shakti earned ₹83cr of EBITDA on ₹859cr of revenue, against ₹136cr on ₹666cr three quarters earlier — about six points of the fall is raw materials and four points is lower tender realisations. Oswal took a 9% realisation cut in Maharashtra and cut full-year margin guidance from 22-23% to 15-17%.',
                '**The conclusion is the sector thesis: in capital goods, a company that owns its cost stack and prices its own product is a different security from one that bids for work.** The first deserves a premium through a cycle; the second deserves a discount and a trigger.',
            ],
        },
        {
            heading: 'Where the margin becomes structural: the service annuity',
            body: [
                'The most durable profit in this sector is not in the machine. It is in what happens after it is installed.',
                '**Spares and service are sold without a tender, to a customer who cannot afford downtime.** KSB\'s SupremeServ aftermarket is 16% of order intake and is the main reason its return on capital is heading towards about 24%. Kirloskar Oil\'s distribution and aftermarket arm earns ₹268cr a quarter, growing 20%, and is being turned into full lifecycle management. Kirloskar Pneumatic runs the maintenance of more than 1,000 CNG stations, growing 25-30% a year — an annuity attached to assets it did not have to build. Elgi\'s aftermarket underpins its ability to sell on total cost of ownership at all.',
                '**This is also where the one genuine long-term threat in the sector lands.** The emerging design for backup power pairs battery storage with a smaller diesel generator that runs far fewer hours. That does not remove the genset sale; it erodes the fuel, spares and service revenue that makes gensets profitable. **Kirloskar Oil\'s fast-growing aftermarket line is precisely the line that would feel it first,** and Powerica, whose genset margins are mid-single-digit before service, feels it second.',
                '**By contrast, the solar-pump businesses have no annuity at all** beyond a five-year remote-monitoring obligation that is itself a receivable — ₹760cr of Shakti\'s ₹1,770cr of receivables is money awaiting monitoring milestones.',
            ],
        },
        {
            heading: 'Three demand themes, unevenly distributed',
            body: [
                'Data centres, nuclear and water appear in every presentation here. They are real; the quality of exposure differs enormously.',
            ],
            points: [
                {
                    label: 'Nuclear — a duopoly forming just as the customer base widens',
                    text: 'The SHANTI Act of December 2025 ended NPCIL\'s monopoly on operating nuclear plants. India is building ten 700 MW reactors in fleet mode and targets 100 GW by 2047, with Adani, Jindal and NTPC announcing intent at scale. **Every reactor needs primary coolant pumps and there are two credible Indian suppliers.** KSB has the certification and a ₹1,235cr nuclear book; Kirloskar Brothers is arriving as the second source exactly as the buyer base widens. That widening is good for both and slightly reduces what KSB\'s monopoly is worth.',
                },
                {
                    label: 'Data centres — crowded, real, and concentrated',
                    text: 'Kirloskar Oil has a 192 MW AI data-centre order, roughly a tenth of India\'s entire operating data-centre capacity. Powerica has a ₹900cr data-centre book where capacity, not demand, is the constraint. Kirloskar Brothers is moving from selling pumps to selling $7.5-10m plug-and-play cooling and fire packages per site and is finalising a framework contract with a global operator; KSB\'s new FM/UL certification opens the same door. **With the Indian genset market growing only around 7% a year, the 18-26% growth these companies report is mix and share, which is more fragile than market growth.**',
                },
                {
                    label: 'Water and irrigation — a funded boom, and a receivables trap',
                    text: 'Jal Jeevan Mission 2.0 was approved in March 2026 with an ₹8.69 lakh crore outlay, which is a durable tailwind for standard and municipal pumps at KSB and Kirloskar Brothers — though Kirloskar Brothers will deliberately under-participate because it refuses uncollateralised state orders. Solar irrigation is the opposite: **phase one of PM-KUSUM expires on 30 September 2026 and phase two, expected at around ₹50,000cr, has cleared the Expenditure Finance Committee but has not been notified.** Shakti\'s order book has drained from ₹2,100cr to ₹1,000cr; Oswal holds 22,025 pumps against 43,000 installed in the prior quarter.',
                },
            ],
        },
        {
            heading: 'Five of the nine are sums of parts',
            body: [
                'A single multiple misleads for more than half this list, because the consolidated number blends businesses that deserve very different valuations.',
            ],
            points: [
                {
                    label: 'Powerica — a wind utility wearing a genset company\'s clothes',
                    text: 'Wind generation is 11.5% of revenue but, at 80-83% margins on 25-year fixed-tariff contracts, roughly half or more of group EBITDA on a full-year view. Management intends to take owned capacity from 331 MW to 634 MW, which at current benchmarks implies about ₹2,200cr of capital against ₹450cr of net cash. **The genset business, meanwhile, has no product IP — the engine is Cummins\' — so its defence is a forty-year channel relationship and in-house packaging.**',
                },
                {
                    label: 'Kirloskar Oil — an engine company with a lender inside',
                    text: 'Arka Fincap runs a ₹7,651cr loan book. Its capital sits in the consolidated base and drags reported return on capital to 14.6%, understating an engine business that holds ₹485cr of standalone net cash and a 25-day cash cycle. A hive-off is being prepared; until it happens the market is valuing a lender on an engine multiple.',
                },
                {
                    label: 'Greaves Cotton — a profitable engine business funding an electric-vehicle start-up',
                    text: 'Consolidated profit was ₹6cr on ₹975cr of revenue because the electric arm consumed nearly all the core\'s earnings. Excel Controlinkage, the components business, runs above 25% margins. The planned electric-vehicle listing was shelved and the parent injected ₹331cr of its roughly ₹426cr of cash, buying about two years.',
                },
                {
                    label: 'KSB and Kirloskar Brothers — whose technology, and whose subsidiary',
                    text: 'KSB\'s moat is licensed from its German parent, which sets royalties and will charge a group software rollout to the Indian company in the first half of calendar 2027. Kirloskar Brothers owns SPP in the UK and US, currently the drag on consolidated margins. **In both cases the Indian operating business is better than the consolidated print — but in KSB\'s case the intellectual property is not the shareholders\'.**',
                },
            ],
        },
        {
            heading: 'Governance: three of the nine are on opposite sides of a family dispute',
            body: [
                'Kirloskar Brothers, led by Sanjay Kirloskar, has been litigating since 2018 against Kirloskar Proprietary — controlled by the side of the family that runs Kirloskar Oil and Kirloskar Pneumatic — over the trademark user agreement. The Supreme Court made an interim stay absolute in Kirloskar Brothers\' favour in January 2026 and asked the Bombay High Court to decide quickly.',
                '**The operating risk is low but the point is worth holding onto: these three are competitors and adversaries, not a group,** and the right to use the shared brand is formally in litigation. Separately, KSB\'s competitive position depends on continued technology transfer from a parent that can reprice royalties, and Powerica\'s genset business depends on Cummins\' channel strategy. **In a sector where the moat is often certification or a brand, it matters who legally owns them.**',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** PM-KUSUM 2.0 notified, which immediately re-rates Shakti and Oswal; the Arka hive-off at Kirloskar Oil, which would let the engine business be valued cleanly; nuclear testing at Tarapur converting into billing for KSB; Kirloskar Pneumatic\'s Middle East oil and gas packages unfreezing; Elgi\'s low-cost Tier 4 range succeeding against Chinese competition without damaging the brand.',
                '**For the worse:** a prolonged commodity or freight shock that outruns the next round of price increases, which hurts everyone except the integrated compressor makers; evidence that battery storage is cutting genset run-hours faster than expected, which attacks the aftermarket annuity at Kirloskar Oil and Powerica; further slippage in nuclear timelines, where KSB has roughly 45% of its order book; and state payment cycles lengthening further for the solar-pump pair.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Elgi Equipments',
            stance: 'COMPOUNDER',
            what: 'Industrial air compressors sold globally under its own brand, with an aftermarket tail and a small automotive equipment business.',
            view: 'The only genuine global challenger on this list, and the moat is measurable in the customer\'s electricity bill: best-in-class efficiency on about 70% of models, defect rates low enough to offer ten-year and lifetime warranties profitably, and 95% of motors made in-house with a three-day lead time against three to six months from China. That combination lets it sell total cost of ownership rather than price, which is how it takes share from Atlas Copco and Ingersoll Rand. Half of revenue is international and every region is growing — India 28%, North America 37% despite a 25% tariff, Europe 21% and now at breakeven. Net cash, conservative accounting, and essentially all of EBITDA converting to cash.',
            watch: 'The moat stops in the bottom fifth of the market where Chinese pricing rules; the new low-cost Tier 4 range is a test of whether Elgi can fight there without damaging its brand. It misjudged Q1 input inflation and carries a one-to-two-quarter pricing lag, and a US industrial slowdown alongside tariffs would hit its fastest-growing region. Our database\'s latest profit figure for Elgi looks like a data error.',
        },
        {
            company: 'Kirloskar Pneumatic',
            stance: 'COMPOUNDER',
            what: 'Air, refrigeration and process-gas compressors, CNG and biogas systems, and an operations-and-maintenance business.',
            view: 'It owns its cost stack in a way nobody else here does — backward integration into forgings and castings cut raw material cost 370 basis points during the shock, while peers lost margin — and it is deliberately converting lumpy oil and gas packages into two annuities: maintenance of more than 1,000 CNG stations growing 25-30% a year, and proprietary products that replace imports (KHOLOS centrifugal compressors in steel and cement, the A800 in the smallest class, 35 new patent filings in one quarter). Debt-free with a ratings upgrade, the highest return on capital in the sector, and a granular ₹1,854cr order book.',
            watch: 'Q1 grew 10.3% against a full-year target above 20%, so the second half must accelerate — plausible in a business that did ₹706cr in Q4 against ₹300cr in Q1, but not yet proved. Middle East oil and gas packages are frozen with no date. Ziffra, its ammonia chiller, faces genuine perception problems in occupied buildings and is an FY28 revenue event at best. It sits on one side of the family trademark dispute.',
        },
        {
            company: 'Kirloskar Brothers',
            stance: 'COMPOUNDER',
            what: 'India\'s largest pump maker — engineered pumps for nuclear, thermal, water and building services, standard pumps, and SPP in the UK and US.',
            view: 'The cheapest access to the two hardest qualifications in this sector. In nuclear it designed the fast breeder reactor\'s sodium pumps in-house and its 700 MW primary circuit pumps have cleared hydraulic and mechanical testing, arriving as a second source exactly as the SHANTI Act widens the buyer base beyond NPCIL. In data centres it has moved from selling pumps to selling $7.5-10m modular cooling and fire packages per hyperscale site, with a global framework agreement being finalised. Its concrete volute pumps lose only about 2% efficiency over thirty years, which is the kind of engineering that gets specified. Commercially it is the most disciplined company here: no order without an advance or letter of credit, which is why cash converts.',
            watch: 'SPP in the UK is the drag, at 5.1% margins, and the pivot to UK water utilities has to restore it as guided. Foundry modernisation left ₹82cr of half-finished inventory and pushed finance costs up 31%. The same discipline that protects cash means it will under-participate in the state-funded water boom, and it is the plaintiff in the family trademark case.',
        },
        {
            company: 'KSB',
            stance: 'PRICED',
            what: 'Indian subsidiary of Germany\'s KSB SE — engineered pumps, standard pumps, valves and the SupremeServ aftermarket.',
            view: 'A genuinely rare asset: the only ISO-19443 certified pump maker in India, with a near-monopoly in nuclear primary coolant pumps that must run 500 hours continuously before commissioning — about as absolute a switching cost as industrial equipment offers. It holds a ₹1,235cr nuclear order book, has expanded Shirwal capacity 20% to serve it, and has localised 700 MW boiler feed pumps. SupremeServ is 16% of order intake and lifting returns towards 24%, and new FM/UL certification opens data centres.',
            watch: 'The delivery does not currently match the price: guidance cut from 15-20% growth to about 15% in value, and 2.5% revenue growth in the latest quarter. Nuclear is roughly 45% of the book and moves at NPCIL\'s pace — Tarapur testing only began in March 2026 — so excluding nuclear the book covers perhaps six to seven months. The technology is licensed from a parent that sets royalties and is charging a group software rollout to the subsidiary, and Kirloskar Brothers is arriving as a second nuclear source.',
        },
        {
            company: 'Kirloskar Oil',
            stance: 'PRICED',
            what: 'Industrial and power-generation engines and gensets up to 10 MW, a large distribution and aftermarket arm, a pumps subsidiary and an NBFC.',
            view: 'It has moved from commodity small engines to work only a handful of companies can do: a 192 MW AI data-centre order, ₹798cr of 6.3 MW gensets for NPCIL, CPCB IV+ gas gensets opening oil and gas, marine up 125% and railways up 62%. Crucially it owns its engine platforms rather than packaging someone else\'s, and its distribution and aftermarket arm — ₹268cr a quarter, growing 20% — is being built into lifecycle management, including India\'s first end-to-end 10,000 kVA repowering. Standalone net cash of ₹485cr and a 25-day cash cycle.',
            watch: 'Margins have fallen three quarters running from 13.4% to 11.3% while employee costs rose 40%. The NBFC inside the consolidated accounts obscures the engine business until the hive-off happens. At the top of its range it competes with Caterpillar, Cummins and Kohler. And the battery-plus-smaller-genset design pattern attacks precisely the aftermarket revenue it is trying to grow.',
        },
        {
            company: 'Powerica',
            stance: 'SCALEUP',
            what: 'Cummins-based genset maker and integrator for data centres and industry, and a wind independent power producer.',
            view: 'Two businesses, and the market prices only one. The wind fleet — 331 MW at 80-83% margins on 25-year fixed-tariff contracts — supplies roughly half or more of group EBITDA and is utility-like annuity income, with management planning to nearly double capacity. The genset business grew 26% with a ₹900cr data-centre book constrained by industry capacity rather than demand, and its defence is a forty-year Cummins relationship that secures allocation when engines are scarce, plus everything except the engine and alternator made in-house, which is what buys delivery certainty.',
            watch: 'It owns no engine technology — if Cummins changes channel strategy or pricing, the genset business has no product defence. Genset margins of 5.6% reflect legacy orders with no escalation clauses, and the recovery is guided from Q3 rather than shown. Doubling the wind fleet needs roughly ₹2,200cr against ₹450cr of net cash, so the balance sheet re-levers by design.',
        },
        {
            company: 'Shakti Pumps',
            stance: 'CYCLICAL',
            what: 'India\'s leading solar irrigation pump maker, selling mainly to state agencies under PM-KUSUM, with in-house inverters and a move into modules, cells, rooftop solar and electric-vehicle motors.',
            view: 'The strongest brand in a business with no pricing power. Farmer pull is real — a Maharashtra allocation of 25,000 pumps was fully subscribed in 25 minutes — and its in-house inverters generate roughly 10% more power than peers. Volumes rose 57% to a record 27,678 units. The most important strategic decision is the 2.2 GW of solar cells pulled forward to September 2027: **cells, not modules, are the binding constraint under the domestic-content rules, and domestic-content modules command a ₹7-10 per watt premium** — so unlike its peer, Shakti is building into a shortage.',
            watch: 'Earnings are set by a scheme and the lowest bidder. Margin has fallen to 9.6%, the order book has drained from ₹2,100cr to ₹1,000cr — about four months of revenue — phase one of PM-KUSUM ends on 30 September 2026 with phase two un-notified, and receivables of roughly ₹1,770cr equal 60% of a year\'s sales. It is committing ₹1,500-1,700cr of capital into that gap. Right strategy, wrong moment.',
        },
        {
            company: 'Greaves Cotton',
            stance: 'TURNAROUND',
            what: 'Diesel and multi-fuel engines, gensets and components, funding an electric two- and three-wheeler business.',
            view: 'Parts of this are genuinely good: the core engine business grew 18% with auto engines up 36%, medium-horsepower gensets rose 32% on end-to-end institutional installations, and Excel Controlinkage runs above 25% margins at 70-75% utilisation while adding global customers such as Caterpillar UK and TAFE. The electric arm doubled revenue to ₹270cr, lifted share to 5.6% and doubled its dealer network.',
            watch: 'Consolidated profit was ₹6cr on ₹975cr of revenue — the electric business is consuming almost all of the core\'s earnings, and its planned listing was abandoned in favour of a ₹331cr injection from the parent\'s roughly ₹426cr of cash. Electric two- and three-wheelers have no structural moat beyond brand and distribution, and the core three-wheeler diesel engine is being displaced by the very transition Greaves is funding. The investable event is electric breakeven inside the funded runway.',
        },
        {
            company: 'Oswal Pumps',
            stance: 'AVOID',
            what: 'Turnkey solar pumping systems for state schemes, integrated into structures, modules and balance of system, moving into rooftop solar and cables.',
            view: 'The price has done a lot of work — down about two-thirds from its high at roughly 9x trailing earnings — and the operating base is real: more than 106,000 systems installed across 15 states, genuine vertical integration, and in-house inverters six months from production. If PM-KUSUM 2.0 is notified, volumes refill directly.',
            watch: 'The balance sheet is moving the wrong way faster than the price is falling: receivable days went from 155 to 229 in a single quarter, net debt doubled from ₹135cr to ₹266cr, EBITDA fell from ₹128cr to ₹74cr over three quarters, and pumps in hand cover about half of last quarter\'s installations. Management cut margin guidance from 22-23% to 15-17% within a quarter of promising value engineering would protect it, and is filling the gap with lower-margin rooftop contracting and cable trading. Unlike Shakti it is building modules into a glut rather than cells into a shortage. Revisit on three conditions: the scheme notified, receivable days back near 155, and net debt stable.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**Elgi Equipments is the largest position.** It is the only company here that would be a good business in any country: it wins on the customer\'s electricity bill rather than on price, makes its own motors, converts essentially all its profit to cash, and is taking share from Atlas Copco and Ingersoll Rand in every region including North America through a tariff. The thing to watch is the low-cost Tier 4 launch, because competing at the bottom without damaging a premium brand is the hardest trick in industrial products.',
            '**Kirloskar Pneumatic is the clearest mispricing.** The highest return on capital in the sector, the only company that expanded gross margin through the commodity shock, debt-free, with an annuity business growing 25-30% a year and proprietary products replacing imports — trading down heavily because its smallest quarter grew 10%. I would own it and treat Ziffra and precision engineering as free options.',
            '**Kirloskar Brothers is my preferred route to nuclear, data centres and water,** at roughly two-thirds of KSB\'s multiple with faster recent growth and accounting conservative enough to understate its own order book. The UK subsidiary is a real but temporary drag. I would want the Bombay High Court trademark decision before making it a top-three position.',
            '**KSB I want at a lower price.** The nuclear certification is the rarest asset in this sector and the SHANTI Act turns one slow customer into several — but a company that has just cut guidance and grown 2.5% leaves no room for the delays NPCIL reliably produces, and the intellectual property belongs to its German parent, not to minority shareholders.',
            '**Kirloskar Oil has the right strategy and the wrong margin trend.** The 192 MW and NPCIL orders are genuine achievements and owning its engine platforms matters. But three quarters of falling margins, a 40% jump in employee costs, and a lender embedded in the accounts mean I would wait for the margin turn or the Arka hive-off — the second would let the engine business be valued properly for the first time.',
            '**Powerica is the most interesting valuation question on the list:** pay for a genset assembler, receive a wind utility. I like the annuity and the early pricing action, and I would own a small position, adding when genset margins recover as guided and the financing for the next 300 MW is clear.',
            '**Greaves Cotton I would not own until the electric arm shows a path to breakeven within its funded runway.** The core engine business and Excel are worth more than the consolidated line, but most of the parent\'s cash is now committed to a business with no structural moat that is displacing the parent\'s own product.',
            '**On solar pumps: Shakti Pumps over Oswal Pumps, and neither until the scheme is notified.** Shakti has the brand, the better inverters and — decisively — is building cells into a shortage rather than modules into a glut. Oswal is cheaper, but the argument is no longer valuation; it is a balance sheet that deteriorated sharply in one quarter. Notification of PM-KUSUM 2.0 is a dated, observable event, and I would rather pay 20% more after it than guess before it.',
            'The test I would keep applying across this sector: who certified the product, who pays for the spares, and who sets the price. Where all three answers favour the company — Elgi, Kirloskar Pneumatic, and in nuclear KSB and Kirloskar Brothers — the margin is structural. Where the answer to the third is "a tender", it never is.',
        ],
        bottomLine:
            'Pay for certification, annuity and pricing power: Elgi Equipments sells on lifecycle cost, Kirloskar Pneumatic owns its cost stack and its service base, and Kirloskar Brothers is buying into the nuclear and hyperscale qualifications at two-thirds of KSB\'s price. Treat Kirloskar Oil, KSB and Powerica as quality waiting for a trigger, Greaves Cotton as an option on electric breakeven, and Shakti Pumps and Oswal Pumps as bets on a government notification that has not yet happened.',
    },

    sources: [
        {
            label: 'India pump market: size, structure and shares — Mordor Intelligence',
            url: 'https://www.mordorintelligence.com/industry-reports/india-industrial-pump',
        },
        {
            label: 'India air compressor market: leading players and growth — Next Move Strategy Consulting',
            url: 'https://www.nextmsc.com/report/india-air-compressor-market',
        },
        {
            label: 'PM KUSUM 2.0: expected size and timing — Reslink Energy',
            url: 'https://www.reslink.org/blogs/pm-kusum-2-0-is-coming-india-s-rs-50-000-crore-agricultural-solar-push/',
        },
        {
            label: 'India\'s SHANTI Bill completes legislative process — World Nuclear News',
            url: 'https://www.world-nuclear-news.org/articles/indias-shanti-bill-completes-legislative-process',
        },
        {
            label: 'Solar module overcapacity to squeeze margins, drive consolidation: ICRA — Energetica India',
            url: 'https://www.energetica-india.net/news/solar-module-overcapacity-to-squeeze-oem-margins-drive-industry-consolidation-icra',
        },
        {
            label: 'SC makes interim stay absolute in Kirloskar trademark dispute — ANI',
            url: 'https://www.aninews.in/news/national/general-news/sc-makes-interim-stay-absolute-in-kirloskar-trademark-dispute-seeks-speedy-high-court-decision20260113154703/',
        },
        {
            label: 'India diesel generator market size and growth — Mordor Intelligence',
            url: 'https://www.mordorintelligence.com/industry-reports/india-diesel-generator-market',
        },
        {
            label: 'Demand for Grants 2026-27 analysis: Jal Shakti — PRS India',
            url: 'https://prsindia.org/budgets/parliament/demand-for-grants-2026-27-analysis-jal-shakti',
        },
    ],
};
