import { SectorOverview } from './types';

export const aerospaceDefence: SectorOverview = {
    sector: 'Aerospace defence',
    title: 'Aerospace & Defence',
    standfirst:
        'Eighteen companies, almost none of which sell a finished aircraft, missile or radar. They supply parts, subsystems and materials into somebody else\'s programme — and in this industry that is the good position, provided you are qualified into it. A part number certified onto a flying engine or written into a weapon programme is re-ordered for a decade without a tender. The work of this note is to separate the companies that hold such positions from those that hold order pipelines, forecasts and press releases.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**Astra Microwave is the defence name I would own.** In July it won ₹2,205cr from HAL for Uttam active-array radar subsystems on the Tejas Mk1A — twelve units by September 2027, then about twenty-five a year to FY32 — taking its order book to roughly ₹4,300cr, close to four years of revenue. It is also L1 on the active array unit for the next-generation fighter programme. This is what a real defence franchise looks like: the radar front end is qualified into an airframe, the quantity is set by aircraft production rather than by annual budgets, and the supplier is effectively locked in for the life of the type.',
                '**Krishna Defence is the highest-return business in the list and the cleanest import-substitution story.** It makes the bulb bars that form warship hulls, low-magnetic ballast for submarines, tank armour profiles and Russian-certified welding consumables — every one of them previously imported from Russia, and every one of them requiring shipyard and classification-society approval. It earns 31% on capital with a doubled bulb-bar capacity that supports ₹400-500cr of revenue. The order book halved to ₹103cr while shipyards moved to batch ordering, which is the risk and, at a smaller size, the opportunity.',
                '**Raymond is the cheapest way to own the global aircraft-engine supply chain,** with 22 years of qualification behind it: more than 350 part numbers on the LEAP engine, moving up from the simplest classification towards more complex non-rotating parts. The catch is honest — about 80% of its revenue is still automotive components — but that is precisely why it trades at a fraction of the sector\'s multiples while its aerospace arm grows 40%.',
                '**Two things the Committee should hold onto before reading the rest.** First, **the label is misleading for the largest companies here.** Roughly 79% of Sansera is auto components, about 70% of MTAR is one American fuel-cell customer, roughly 79% of Azad is energy turbines, and about 80% of Raymond is auto. Second, **this sector\'s biggest names trade at 76 to 235 times earnings while earning 3-22% on capital.** That combination does not leave room for the delays this industry reliably produces. I would avoid **Apollo Micro Systems, AXISCADES, Rossell Techsys, Avantel and Aartech Solonics**, each for a specific reason set out below.',
            ],
        },
        {
            heading: 'Four different value chains wearing one label',
            body: [
                'Start by noticing who is missing: HAL, BEL, BDL, Mazagon Dock, Cochin Shipyard, GRSE, Solar Industries and Bharat Forge are not in this sector list. These eighteen mostly sell **to** those companies, or to foreign primes. Their economics depend on which chain they sit in.',
            ],
            points: [
                {
                    label: '1. The global aircraft and engine supply chain — Aequs, Unimech, Raymond, Sansera (in part), Azad (in part)',
                    text: 'Machined parts, forgings, aerostructures and engine tooling for Airbus, Boeing, Safran, Rolls-Royce, Pratt & Whitney and their Tier-1s. **The barrier is qualification, and it is brutal:** AS9100 and NADCAP accreditation, first-article inspection for every part number, then years before serial volume. Aequs makes 5,740 different parts and has a 15-year Safran contract to build complete A320 wheels in India, the first time that work has been outsourced; Raymond has 350-plus LEAP part numbers built over 22 years. Once qualified, the part is locked to the programme for its life, and aircraft backlogs run past 17,000 units.',
                },
                {
                    label: '2. The global energy and industrial turbine chain — Azad, MTAR, Sansera',
                    text: 'Turbine blades and vanes for GE, Siemens Energy, Mitsubishi and Baker Hughes (Azad), and fuel-cell hot boxes for Bloom Energy (MTAR). **These are aerospace-grade qualifications sold into power, not defence,** and right now they are the fastest-growing part of the sector because of AI data-centre electricity demand. Azad holds an eight-year single-source agreement with Mitsubishi and has dedicated plants per customer.',
                },
                {
                    label: '3. Indian defence electronics and systems — Data Patterns, Astra, Zen, Apollo, Avantel, Digilogic, ideaForge, AXISCADES',
                    text: 'Radars, electronic warfare, missile electronics, simulators, drones and test equipment for the Ministry of Defence, DRDO and the state-owned primes. **The structural barrier here is the development-cum-production partner route:** a company that co-develops a system with DRDO gets the transfer of technology at nil fee and nil royalty for Indian armed forces supply, and is then the natural production source. That is why Data Patterns\' 79% gross margin and Apollo\'s subsystem positions exist — and why a company without such a position is simply bidding.',
                },
                {
                    label: '4. Strategic materials and naval components — MIDHANI, Krishna Defence',
                    text: 'Superalloys, titanium and special steels (MIDHANI) and naval steel profiles, armour and welding consumables (Krishna). **The barrier is metallurgical qualification by the end user,** which takes years and is why both are replacing imports rather than competing with local rivals. MIDHANI, though, has lost its protection: nomination orders have ended and everything is now competitively bid.',
                },
            ],
        },
        {
            heading: 'The qualification barrier, graded — and what it is worth',
            body: [
                'Everything in this sector is described as "high entry barrier". Here is what the barriers actually are, hardest first.',
            ],
            points: [
                {
                    label: 'Hardest: a rotating or hot-section part on a flying engine or a power turbine',
                    text: 'Azad describes qualification cycles running close to a decade, customer-by-customer, before a blade or vane goes into serial production; it now runs eight dedicated customer plants and is building a hot-section facility for Mitsubishi. **Once inside, the supplier is effectively unreplaceable for the life of the engine model,** which is why Azad earns 37-38% EBITDA margins and why its raw-material cost fell from 12% to 5% of sales as it qualified Indian mills. The same logic explains Raymond\'s 22-year LEAP relationship and Sansera\'s 25-30% margins in aerospace and defence work.',
                },
                {
                    label: 'Very hard: co-developing a weapon system with DRDO',
                    text: 'The development-cum-production partner model brings industry in at the start of development, with technology transferred at nil fee and no royalty on supply to the Indian forces. In exchange the partner carries development cost and time. **This is the single most valuable position available in Indian defence,** because it converts into production orders without an open tender. Data Patterns holds it on multiple programmes (BrahMos fire control and seeker work, avionics, test equipment) and shows it in a 79% gross margin; Apollo claims it across many missile programmes; Digilogic has four to six such programmes at a much smaller scale.',
                },
                {
                    label: 'Hard: certified materials and naval qualification',
                    text: 'MIDHANI\'s superalloys and titanium are approved into specific defence and space applications, and about ₹8,000cr of imports still exist in its grades, blocked by customer-approved-source rules rather than by capability. Krishna\'s bulb bars, low-magnetic ballast and Russian-certified welding wires each required shipyard and classification approval, and it holds AS9100D, IRS, DNV and ABS certifications.',
                },
                {
                    label: 'Moderate: radar and communication subsystems in a competitive field',
                    text: 'Astra, Avantel and Digilogic all sell RF and microwave subsystems where DRDO and BEL set the specification. Astra\'s Uttam win shows what scale looks like when you own the subsystem; Avantel\'s collapse in profit — from about ₹60cr to ₹22.5cr — shows what happens when you match an L1 price on a "national interest" order.',
                },
                {
                    label: 'Low: build-to-print harnesses, engineering services and assembly',
                    text: 'Rossell makes wire harnesses to customer drawings for US platforms at 13-14% margins against a repeatedly promised 17-22%. AXISCADES has sold its engineering services business and is trying to rebuild around acquisitions. **Where the customer owns the design and the work is labour plus qualification, the margin is a wage arbitrage, not a moat.**',
                },
            ],
        },
        {
            heading: 'Read the order book carefully: firm, negotiated, or imagined',
            body: [
                'This sector uses at least four different words for very different things, and the difference decides the valuation.',
                '**Signed and firm.** Astra\'s ₹4,300cr after the ₹2,205cr HAL contract; Aequs\' $1.004bn aerospace book with five to seven years of visibility; MTAR\'s ₹5,143cr, mostly short-cycle Bloom orders; Azad\'s roughly ₹6,500cr across dedicated plants; Krishna\'s modest but real ₹103cr.',
                '**Negotiated but unsigned.** Data Patterns has ₹1,726cr of negotiated orders that were "one to two months" away in the fourth quarter and have since slipped "another two months" on top of six, while its firm book of ₹920cr is about a year of revenue. Apollo has been expecting a ₹3,500cr underwater-mine programme, of which it hopes to win 70%, since "any moment" several quarters ago.',
                '**Guidance that requires a step-change.** Zen has ₹1,239cr of orders plus ₹177cr won in July, and guides ₹4,000cr of revenue across FY27 and FY28 — roughly three times its current run rate — while quarterly order intake was ₹42.6cr and revenue fell 10.5%. ideaForge has ₹256.8cr of orders, all to be delivered by the third quarter, after which the book is empty unless the army\'s fast-track procurement lands.',
                '**Not an order book at all.** AXISCADES reports ₹4,557cr of "assured forecast visibility" and a ₹24,000cr pipeline while its continuing business does not yet cover its interest and depreciation, and its FY27 plan depends on acquisitions not yet completed.',
                '**The practical rule:** in Indian defence, a programme becomes revenue when the prime places a purchase order, not when a requirement is approved. Several companies here are valued as though those are the same event.',
            ],
        },
        {
            heading: 'Are the margins structural?',
            body: [
                'Margins in this sector are set by where the design sits, how specialised the process is, and whether the customer had an alternative.',
            ],
            points: [
                {
                    label: 'Structural and high: owned designs and hot-section machining',
                    text: 'Data Patterns\' 79% gross margin comes from owning the design of what it sells, funded by one of the highest research spends in the industry — but it also means a fixed cost base against lumpy revenue, which is why a quarter can print 27% EBITDA against 35-40% guidance. Azad (37-38%) and Unimech (36% with 65% gross margins) earn theirs from processes few can qualify for. **These margins should hold, provided volumes come.**',
                },
                {
                    label: 'Structural but thinner: subsystem manufacturing',
                    text: 'Astra at about 18%, Apollo\'s standalone at 21.5%, Krishna at 21% — real businesses with real approvals, where the customer negotiates hard and lifecycle profitability matters more than the first order. Astra was explicit that it trades initial margin against order size.',
                },
                {
                    label: 'Not structural: PSU pricing and build-to-print',
                    text: '**MIDHANI is the clearest case of a moat being legislated away:** it no longer receives nomination orders, everything is competitively bid, and management conceded margins could be structurally lower. It absorbed ₹13-14cr of adverse raw-material variance and ₹5cr of cooking-gas cost on fixed-price contracts in one quarter. Rossell\'s 13-14% on build-to-print harnesses, against a promise of 17-22%, has been deferred repeatedly.',
                },
                {
                    label: 'The hidden cost: working capital',
                    text: 'Defence customers pay slowly and programmes are lumpy. Data Patterns has historically run about 340 days of working capital; Zen is at 257 days and rising; Azad finances 170-180 day receivables down to 90 through bill discounting, which moves the cost into the interest line rather than removing it; Rossell is not yet cash-flow positive and has deferred a ₹300cr equity raise. **In this sector, a high margin and a long cash cycle can coexist for years — which is why return on capital, not margin, is the honest measure.**',
                },
            ],
        },
        {
            heading: 'The label problem: what these companies actually depend on',
            body: [
                'For the four largest companies here, the thing that moves the share price is not Indian defence.',
                '**MTAR is a bet on American AI electricity demand.** Roughly 70% of its revenue is hot boxes for Bloom Energy\'s solid-oxide fuel cells. Bloom is doubling its Fremont capacity from 1 GW to 2 GW by the end of 2026, has a master agreement with Oracle for up to 2.8 GW (1.2 GW already contracted), a $2.65bn twenty-year offtake with American Electric Power and a $5bn financing partnership with Brookfield. MTAR is scaling hot-box output from 8,000 to 12,000 units. **That is a genuine, funded boom — and it is one customer, in one country, in one technology.**',
                '**Azad is an energy company with an aerospace option.** About 79% of revenue is gas, steam and nuclear turbine parts for GE, Siemens Energy, Mitsubishi and Baker Hughes; defence and aerospace is roughly 21%. Its delivery of India\'s first indigenous expendable turbojet engine to DRDO in July is strategically important and commercially undefined — management said it has "no basis" for volumes and cannot cost the engine until five or six are built.',
                '**Sansera is an auto forger with a fast-growing second engine.** About 79% of revenue is automotive; the aerospace and defence arm tripled but is ₹145cr a quarter. Its most interesting recent win is not defence at all: a roughly $75m-a-year semiconductor equipment order from an existing customer, taking its five-year non-auto book to about ₹5,750cr.',
                '**Raymond is an auto component company with a 22-year aerospace franchise inside it.** Aerospace is ₹123cr of ₹628cr. **In each case, buy the company for what it actually does, and treat the defence label as marketing.**',
            ],
        },
        {
            heading: 'Where the next five years of growth come from',
            body: [
                '**Indian platform programmes moving from development to production.** Tejas Mk1A radars (Astra), the next-generation fighter\'s active array, quick-reaction missile regiments, the Su-30 upgrade and electronic warfare pods. Defence exports reached a record ₹38,424cr in FY26, up 63%. **These are multi-year, quantity-driven programmes, which is exactly the kind of demand a qualified subsystem supplier wants.**',
                '**The global aircraft backlog.** More than 17,000 aircraft are on order worldwide and Airbus alone targets 870 deliveries this year. Indian suppliers are being pulled in because the Western supply chain cannot keep up — which is how Aequs won a 15-year Safran contract for complete A320 wheels and why Raymond, Unimech and Sansera are all adding aerospace capacity.',
                '**AI data-centre power and semiconductors.** MTAR through Bloom; Sansera through a semiconductor-equipment customer that says it cannot meet demand until FY29-30; Unimech and Rossell through semiconductor tooling and harnesses. **This is currently the fastest-growing demand in the sector and the least connected to defence.**',
                '**Nuclear.** MTAR won record nuclear inflows including Kaiga 5 and 6, supplied most of the critical assemblies for the prototype fast breeder reactor, and sits in front of a 100 GW-by-2047 programme now open to private operators.',
                '**Drones and counter-drone, with a warning.** The army\'s fast-track procurement is worth up to ₹20,000cr and the Defence Acquisition Council has cleared ₹52,000cr including loitering munitions, but the tenders arrive slowly: ideaForge\'s revenue went from ₹141cr in a quarter to near breakeven two quarters later, and Zen says "the government has not floated many tenders" for anti-drone systems despite a pipeline of "a couple of thousand crores".',
            ],
        },
        {
            heading: 'Governance and disclosure: five specific reasons to stay away',
            body: [
                '**Apollo Micro Systems** is buying 41.33% of Premier Explosives for about ₹1,550cr in cash, with an open offer taking the total near ₹2,500cr, funded by a roughly ₹3,300cr preferential issue — while saying two or three more acquisitions are planned. Promoter pledge is around 39% with the clearing target missed and pushed to FY28, institutional shareholders rejected a ₹500cr related-party guarantee, and its research-spend figure changed three times on one call.',
                '**AXISCADES** trades at more than 200 times earnings with a 3.6% return on capital, has sold the businesses that carried its earnings, and presents an FY27 plan built on acquisitions that have not closed, alongside "visibility" rather than orders.',
                '**Rossell Techsys** is at roughly 196 times earnings and 33 times book with 13-14% margins, a loss-making Boeing programme with about ₹70cr left to run, inventory of nearly eight months, no positive cash flow, and a ₹300cr equity raise promised for December 2025 that has not happened.',
                '**Avantel** is at about 228 times earnings after profit fell 62%, partly because it matched an L1 price on a national-interest order, and runs a cash-consuming healthcare subsidiary alongside a promoter family management.',
                '**Aartech Solonics** is sub-scale — defence is about ₹1.5cr a quarter — and capitalises its research spending, which most of its peers expense.',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** Data Patterns converting its ₹1,726cr of negotiated orders and the BrahMos seeker; Zen winning the anti-drone tenders its pipeline implies; the army\'s drone fast-track procurement landing, which would refill ideaForge\'s book; Aequs\' consumer business reaching breakeven so the aerospace franchise shows through; MIDHANI\'s ₹1,000cr modernisation finally being approved.',
                '**For the worse:** a slowdown in AI data-centre capital spending, which would hit MTAR, Sansera, Unimech and Rossell simultaneously; further slippage in Indian order placement, which this quarter delayed Data Patterns, Apollo, Zen and Krishna at once; US tariff escalation, which has already deferred Sansera\'s American plant and hit Unimech\'s third quarter last year; and the market simply deciding to stop paying 80-230 times earnings for companies whose largest contracts are still being negotiated.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Astra Microwave Products',
            stance: 'SCALEUP',
            what: 'RF and microwave subsystems, active-array radar units, electronic warfare and missile seeker components for DRDO, HAL, BEL, BrahMos and ISRO.',
            view: 'The ₹2,205cr Uttam radar contract from HAL changes what this company is: twelve units by September 2027, then about twenty-five a year to FY32, tied to Tejas Mk1A production rather than to annual budget cycles, taking the order book to roughly ₹4,300cr — close to four years of revenue. It is L1 on the next-generation fighter\'s active array unit, supplies more than 45 Doppler weather radars, and its Rafael joint venture holds ₹836cr. Guidance of ₹1,350cr this year and ₹1,600cr next, with a "different trajectory" from FY29, is unusually specific for this sector.',
            watch: 'Quarters are lumpy — Q1 revenue was modest on approvals and last-stage technical issues. The space and meteorological business demerges into a separate listed company from April 2027 and the managing director leaves to run it. Order intake targets of ₹8,000-10,000cr over three to four years depend on QRSAM, the Su-30 radar and electronic warfare programmes arriving.',
        },
        {
            company: 'Krishna Defence & Allied Industries',
            stance: 'SCALEUP',
            what: 'Naval bulb bars for warship hulls, low-magnetic ballast for submarines, tank armour profiles and specialised welding consumables — all previously imported, mostly from Russia.',
            view: 'The best returns in the sector (31% on capital) from the simplest proposition: products that India used to buy from Russia, qualified through shipyards and classification societies, now made in Halol. Bulb bars are about 60% of revenue with capacity doubled to 4,500 tonnes, supporting ₹400-500cr of revenue against ₹245cr today; welding consumables and armour profiles add roughly 30%. It holds AS9100D, IRS, DNV and ABS approvals and is spreading into naval ammunition, autonomous underwater vehicles and composite hatches through minority stakes.',
            watch: 'The order book halved from ₹190cr to ₹103cr as shipyards paused after the conflict and moved to batch ordering with six-month deliveries, so the 30% growth guidance needs the ₹221cr of bid tenders to convert in the first half. Customers are five to seven shipyards with one at 35-40%. It is small and lumpy.',
        },
        {
            company: 'Raymond',
            stance: 'SCALEUP',
            what: 'Engineering group after the realty demerger: precision auto components (about 80% of revenue) and JK Maini Global Aerospace, with 22 years of qualification on the LEAP engine.',
            view: 'The cheapest entry to the global engine supply chain, because the market values it as the auto company it mostly is. The aerospace arm makes more than 350 LEAP components and is moving from the simplest classification towards more complex non-rotating parts — each step is years of qualification and each part number, once approved, runs for the life of the engine. Aerospace grew 40% with 21% margins and a target of about 25% at maturity; the order book was recast to ₹5,960cr on a ten-year horizon, with the comparable five-year figure up 17% in a quarter. The UK trade agreement removing up to 18% tariffs helps directly.',
            watch: 'Precision auto is 80% of revenue and cyclical; the aerospace greenfield near Bangalore airport produces only from late 2027 with revenue in FY28-29. Our database shows a quarterly loss and a 3.1% return on capital for Raymond that the call did not explain — likely demerger distortion, but check before acting.',
        },
        {
            company: 'Data Patterns (India)',
            stance: 'PRICED',
            what: 'Defence electronics designer-manufacturer: radars, electronic warfare, avionics, BrahMos fire-control and seeker work, and automatic test equipment for DRDO, HAL, BEL and the Ministry of Defence.',
            view: 'The most genuine intellectual-property franchise in the sector — a 79% gross margin is only possible because it owns the designs, funded by one of the industry\'s highest research spends, and holds development-cum-production positions that convert into production without an open tender. It is debt-free with ₹530cr of cash, is investing ₹200cr in clean rooms and integration capacity, and its Su-30 self-protection jammer pod, heading for flight trials, addresses 250-270 aircraft.',
            watch: 'Conversion keeps slipping. The ₹1,726cr of negotiated orders promised within "one to two months" two quarters ago have moved again, the firm order book of ₹920cr is barely a year of revenue, and the quarter printed 27% EBITDA against 35-40% guidance because the customer\'s inspection team did not arrive. At 93 times earnings with roughly 340 days of working capital, you are paying for conversion that has repeatedly not happened on schedule.',
        },
        {
            company: 'MTAR Technologies',
            stance: 'PRICED',
            what: 'Precision engineering for clean energy (about 70% — fuel-cell hot boxes for Bloom Energy), nuclear, space and defence.',
            view: 'Execution right now is exceptional: revenue up 130%, margins 23.6%, working capital cut from 172 days to 59, and an order book above ₹5,143cr. The demand behind it is real and funded — Bloom is doubling Fremont capacity from 1 GW to 2 GW by end-2026, with an Oracle agreement for up to 2.8 GW, a $2.65bn twenty-year AEP offtake and $5bn of Brookfield project financing — and MTAR is scaling hot boxes from 8,000 to 12,000 units and says it holds the majority share at the customer. Nuclear is a genuine second leg, with record inflows including Kaiga 5 and 6 and most of the critical assemblies for the fast breeder reactor.',
            watch: 'At about 161 times earnings you are paying a defence multiple for what is substantially a single-customer supplier to the American AI power build-out, on short-cycle orders. Bloom\'s own capacity plans imply volumes far beyond MTAR\'s guided 20,000 units, which cuts both ways — upside if it holds share, exposure if Bloom dual-sources.',
        },
        {
            company: 'Azad Engineering',
            stance: 'PRICED',
            what: 'Ultra-precision blades and vanes for gas, steam and nuclear turbines (about 79% of revenue) and for aero engines, with dedicated plants per customer.',
            view: 'The hardest qualification in this list, and the margins prove it: 37-38% EBITDA on parts that take close to a decade to qualify, with an eight-year single-source agreement from Mitsubishi and dedicated lines for GE, Siemens Energy and Baker Hughes. Raw material fell from 12% to 5% of sales by qualifying Indian mills. Eight customer-dedicated plants at Tumkur and Tunki Bollaram support roughly ₹1,200cr of peak revenue, and a hot-section facility opens the highest-value work. Delivery of India\'s first indigenous expendable turbojet engine to DRDO is a genuine capability milestone.',
            watch: '130 times earnings on a 12% return on capital, because capital has been spent years ahead of the revenue — ₹900cr over two years with another programme to be detailed. Working capital runs near 200 days and is managed down through bill discounting, which is financing rather than improvement. The turbojet engine has no volumes, no pricing and, in management\'s words, "nothing in writing".',
        },
        {
            company: 'Sansera Engineering',
            stance: 'PRICED',
            what: 'Precision forged and machined components: about 79% automotive, with a fast-growing aerospace, defence and semiconductor-equipment arm.',
            view: 'The best industrial executor in this list, and the second engine is real: non-automotive revenue doubled and the aerospace and defence business tripled to ₹145cr a quarter, at 25-30% margins with 2-2.25 times asset turns. The five-year non-auto order book is about ₹5,750cr after a roughly $75m-a-year semiconductor-equipment order from an existing customer, whose end demand it says cannot be met until FY29-30. Capacity plans take the aerospace and defence business towards ₹3,500cr by FY31.',
            watch: 'You are paying 76 times earnings and 8.7 times book for a company that is still four-fifths an auto component maker with a 13.7% return on capital. The quarter included a US tariff provision and a litigation settlement, cost pass-throughs have not yet been received, and the motorcycle business is growing well below the industry.',
        },
        {
            company: 'Zen Technologies',
            stance: 'PRICED',
            what: 'Training simulators for tanks, infantry, naval and now aircraft, plus anti-drone systems, drone propulsion, unmanned ground vehicles and border security systems.',
            view: 'A genuinely differentiated product set with 72.9% gross margins, ₹1,217cr of cash and no debt, and annual maintenance contracts at about 26% of the order book — simulators are sticky because they are built around a specific platform and its training doctrine. European interest is real because Zen simulates Russian-origin equipment that NATO forces now need to train against.',
            watch: 'Revenue fell 10.5% and quarterly order intake was ₹42.6cr against an order book of ₹1,239cr — while guidance implies about ₹4,000cr of revenue across FY27 and FY28, roughly three times the current run rate. Anti-drone demand exists but "the government has not floated many tenders". Working capital has risen to 257 days. At 84 times earnings with falling revenue, the guidance is a credibility test the company has not yet passed.',
        },
        {
            company: 'Unimech Aerospace',
            stance: 'PRICED',
            what: 'Aero-engine tooling — engine build and maintenance stands for engine makers and licensees — plus precision components for semiconductor, nuclear and aerospace customers, and a metallic bellows business.',
            view: 'A high-quality niche: 65% gross margins and 36% EBITDA on tooling that engine makers and their maintenance licensees must buy, with 165 first-article inspections cleared in one quarter and 80% of qualified precision parts moving to serial supply. The first recurring aerostructure contract (a five-year agreement with FACC in Austria), a Saudi joint venture and the Hobel bellows acquisition broaden it beyond project tooling.',
            watch: 'Tooling is purchase-order-to-purchase-order and consumed within the quarter, so revenue is lumpy — US tariffs alone collapsed a quarter\'s revenue to ₹34cr a year ago. At 113 times earnings on an 11-12% return, with utilisation at 58% and working capital heading past 160 days, the price assumes the serial-production transition happens quickly.',
        },
        {
            company: 'Mishra Dhatu Nigam (MIDHANI)',
            stance: 'PRICED',
            what: 'State-owned producer of superalloys, titanium alloys and special steels for defence (66% of the order book), space (21%) and energy.',
            view: 'A strategic asset with a genuine metallurgical moat: about ₹8,000cr of imports still exist in grades it can make, blocked mainly by customer-approved-source rules it is working through with AS9100 and NADCAP accreditation. New capabilities are arriving — isothermal forging of fighter-engine superalloys on a 6,000-tonne press, rolled 7000-series aluminium, nuclear steam-generator tubes — and the order book is ₹2,329cr.',
            watch: '**Its commercial protection has gone: nomination orders have ended and everything is competitively bid,** which management conceded could mean structurally lower margins. Fixed-price contracts meant it absorbed ₹13-14cr of raw-material variance and ₹5cr of cooking-gas costs in one quarter, it imports all its raw materials including titanium sponge from Russia and eastern Europe, and its ₹1,000cr modernisation is still awaiting ministry approval after being "one to two months" away last quarter.',
        },
        {
            company: 'Aequs',
            stance: 'TURNAROUND',
            what: 'Vertically integrated aerostructures — forging, machining, surface treatment and assembly — in a Belagavi special economic zone, plus a consumer contract-manufacturing business.',
            view: 'The aerospace business is a real franchise: 5,740 part numbers for Airbus, Boeing, Safran and their Tier-1s, a $1.004bn order book with five to seven years of visibility, 23% segment margins, and a 15-year Safran contract to build complete A320 wheels in India — the first time that work has been outsourced anywhere. Vertical integration from forging to assembly inside one campus is rare and is what wins those contracts.',
            watch: 'The consumer arm is the problem: ₹73cr of revenue at a ₹36cr EBITDA loss, 22% utilisation, and breakeven targeted only by the fourth quarter of FY27, which is why the group loses money and earns 1.7% on capital. Operating cash flow is negative, capital spending is ₹660cr this year with $350-400m planned to FY31 and a likely equity raise, and the chief financial officer left within months of the IPO.',
        },
        {
            company: 'ideaForge Technology',
            stance: 'CYCLICAL',
            what: 'Small tactical drones for the army, paramilitary and police, with in-house autopilot, communications and navigation that works without satellite signals.',
            view: 'The technology is genuinely owned — 112 patents, six civil aviation type certificates, 60-65% indigenisation, and navigation and electronic-warfare resilience that matter in contested airspace. The balance sheet is strong after a ₹500cr share placement, and the demand ahead is large: an army fast-track procurement worth up to ₹20,000cr, a ₹52,000cr acquisition-council clearance including loitering munitions, and doubled financial powers for field commanders.',
            watch: 'This is a feast-and-famine business. Revenue went from ₹141cr in the fourth quarter of FY26 to near breakeven in the first quarter of FY27, the ₹256.8cr order book is all deliverable by the third quarter, and new intake was weak. Competition now includes Adani, Tata and many start-ups, and the US route needs certification still pending. Buy it when orders arrive, not in anticipation.',
        },
        {
            company: 'Digilogic Systems',
            stance: 'SCALEUP',
            what: 'Test, measurement and simulation systems for DRDO, BEL and BDL — automatic test equipment, missile checkout systems and spectrum monitoring.',
            view: 'A small company in a defensible slot: checkout and test equipment is 4-6% of a missile programme\'s budget, it holds four to six development-cum-production positions that convert into production once qualified, and it earns 19.6% margins with positive cash flow and almost no debt after its listing.',
            watch: 'It missed its first guidance as a listed company — 8.4% growth against 20-25% promised — because imported American and European test hardware went from two to four months of lead time, and its tender pipeline halved to ₹110cr when government laboratory funding was re-prioritised. It is a systems integrator on imported hardware, which undercuts the indigenisation story, and it needs ₹100cr of orders by September to meet this year\'s guidance.',
        },
        {
            company: 'Apollo Micro Systems',
            stance: 'AVOID',
            what: 'Weapon-system electronics — guidance, onboard computers, actuators and fuzes — for DRDO missile programmes through BDL and BEL, plus an explosives subsidiary.',
            view: 'The underlying positions are real: development-cum-production partner status on multiple missile programmes, a standalone EBITDA margin above 30%, and content on QRSAM, Akash-NG and Pinaka. But standalone growth was only 17%; the headline 88% comes from consolidating an acquisition.',
            watch: 'The reasons to stay away are specific. It is paying about ₹1,550cr for 41.33% of Premier Explosives, near ₹2,500cr with the open offer, funded by a ₹3,300cr preferential issue, while saying more acquisitions are coming. Promoter pledge is around 39% with the clearing target missed and deferred to FY28; institutional shareholders rejected a ₹500cr related-party guarantee; the underwater-mine order has slipped repeatedly; and the research-spend figure was stated three different ways on one call. At 114 times earnings, that is too many unknowns.',
        },
        {
            company: 'AXISCADES Technologies',
            stance: 'AVOID',
            what: 'Defence electronics and aerospace manufacturing after selling its engineering services business to Akkodis for $237m.',
            view: 'The defence unit is growing quickly (₹125cr, up 112%) with credible content — anti-drone, BrahMos and anti-tank missile electronics, an antenna beam controller for the Uttam radar, a 30kW laser weapon technology transfer — and the sale proceeds give it capital to redeploy.',
            watch: 'It has sold the businesses that produced its earnings; the continuing operations do not yet cover their own interest and depreciation. The FY27 plan of ₹1,377cr of revenue and ₹135cr of profit depends on acquisitions that have not closed, and the headline ₹4,557cr is "assured forecast visibility", not orders. Sale proceeds have slipped from March to May to August. At more than 200 times earnings with a 3.6% return on capital, the price requires everything to go right.',
        },
        {
            company: 'Rossell Techsys',
            stance: 'AVOID',
            what: 'Wire harnesses and electrical interconnection systems built to customer drawings, 98% exported, mostly to North American defence and aerospace primes.',
            view: 'The customer list is excellent — Boeing\'s T-7 trainer under a $200m strategic agreement, Lockheed, and a growing semiconductor-equipment and space business including Amazon\'s Kuiper — and revenue grew 87% last year. Qualification into US military platforms is genuinely hard to obtain.',
            watch: 'Build-to-print harness work is labour plus qualification, and the economics show it: 13-14% margins against a repeatedly promised 17-22%, a loss-making Boeing programme with about ₹70cr still to run, inventory near eight months, cash flow not yet positive, and a ₹300cr equity raise promised for December 2025 that has not happened. At roughly 196 times earnings and 33 times book, the growth is priced several years ahead.',
        },
        {
            company: 'Avantel',
            stance: 'AVOID',
            what: 'Satellite communication terminals, software-defined radios and radar subsystems for the navy, coast guard and other services, plus ground stations and a railway contract.',
            view: 'A legitimate niche with a ₹1,000cr order book, a leading position in S-band naval satellite terminals, nine ground stations for the national space company with Safran, and a ₹460cr railway rate contract including five years of maintenance.',
            watch: 'Profit fell 62% to ₹22.5cr on revenue that declined 11%, largely because it matched an L1 price on a 32,000-unit national-interest order — a reminder that in this segment the customer can simply set the price. Research and depreciation are rising, receivables are stretched, a loss-making healthcare subsidiary is being shopped to investors, and management gives no margin guidance because it "depends how others bid". At about 228 times depressed earnings, there is no margin of safety.',
        },
        {
            company: 'Aartech Solonics',
            stance: 'AVOID',
            what: 'Bus transfer systems for power continuity in plants and refineries, ultracapacitor-based defence power modules, and control panels; a Bhopal micro-cap.',
            view: 'The bus transfer product is a genuine niche with real installations, and the defence work — ultracapacitors for tank engine starting and adaptive power modules under army trial — is interesting in principle.',
            watch: 'It is too small to matter: defence revenue is about ₹1.5cr a quarter and a quarter of revenue is trading. It capitalises its research spending where peers expense it, discloses little behind non-disclosure agreements, and its own management says technology being developed today applies in five years.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**Own the qualified positions, not the pipelines.** Astra Microwave Products is the core defence holding: the Uttam radar contract ties its revenue to aircraft production through FY32, which is a far better form of visibility than a pipeline of approvals. Krishna Defence & Allied Industries is the highest-return business here and replaces Russian imports in products that shipyards must qualify — small and lumpy, but genuinely defended. Raymond is the cheapest way to own a 22-year engine-supply-chain qualification, provided you accept that four-fifths of it is an auto components company and that our data for it needs checking.',
            '**The best businesses in this sector are also the most expensive, and three of them are not really defence at all.** MTAR Technologies is an excellent supplier to an American fuel-cell customer riding a funded AI power boom — at 161 times earnings, with the concentration that implies. Azad Engineering has the hardest qualification in the list and the margins to match, but earns 12% on capital because the capital came years before the revenue. Sansera Engineering is the best executor and four-fifths automotive. Data Patterns (India) owns its designs and shows it in a 79% gross margin, but has now slipped its largest order conversion three times. I would own all four at lower prices and none at these.',
            '**Three more are quality with a specific thing to prove.** Unimech Aerospace must convert lumpy tooling orders into serial component supply. Zen Technologies must win the anti-drone tenders that would justify guidance of roughly three times its current run rate. Mishra Dhatu Nigam (MIDHANI) is a strategic asset whose commercial protection has been withdrawn — competitive bidding on fixed-price contracts is a different business from nomination, and the price has not adjusted.',
            '**Two are turnarounds with real assets underneath.** Aequs has a genuine aerostructures franchise — a $1bn order book and the first outsourced Airbus wheel programme — hidden behind a consumer contract-manufacturing business losing ₹36cr a quarter at 22% utilisation; the investable event is consumer breakeven. ideaForge Technology owns its drone technology outright and has the cash, but its order book empties after the third quarter unless the army\'s fast-track procurement lands. Digilogic Systems is a credible small player that missed its first guidance and needs orders by September.',
            '**Avoid Apollo Micro Systems, AXISCADES Technologies, Rossell Techsys, Avantel and Aartech Solonics.** In order: an acquisition spree funded by dilution with a pledged promoter and a rejected related-party resolution; a company whose earnings were sold and whose plan depends on unsigned acquisitions; build-to-print work at 13-14% margins priced at 196 times earnings with no positive cash flow; a business that proved it cannot set its own price; and a micro-cap that capitalises its research.',
            'The single question I would ask of every company in this sector: is the thing you sell written into somebody\'s drawing, type certificate or programme — or are you bidding for it? Astra, Azad, Raymond, Aequs, Unimech, Data Patterns and Krishna can answer the first way. For the rest, the order book is a forecast, and forecasts in Indian defence have a long history of slipping by exactly one more quarter.',
        ],
        bottomLine:
            'In aerospace and defence the moat is a part number on a drawing or a development partnership with the customer — both of which produce a decade of re-orders without a tender. Own Astra Microwave Products for its Uttam-driven visibility, Krishna Defence & Allied Industries for returns and import substitution, and Raymond for cheap access to the engine chain; keep the genuinely excellent but expensive franchises (MTAR Technologies, Azad Engineering, Sansera Engineering, Data Patterns) on a watch list; and avoid the companies whose growth is bought with acquisitions, dilution or a forecast.',
    },

    sources: [
        {
            label: 'DRDO policy on selection of Development cum Production Partners (nil ToT fee, nil royalty)',
            url: 'https://orissadiary.com/drdo-has-introduced-a-policy-on-selection-of-the-development-cum-production-partner-dcpp-for-drdo-developed-systems/',
        },
        {
            label: 'Defence in Union Budget 2026-27 — Press Information Bureau',
            url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222601&reg=48&lang=2',
        },
        {
            label: 'India\'s defence exports hit record ₹38,424 crore in FY26, up 62.66% — Business Standard',
            url: 'https://www.business-standard.com/blueprint-defence-magazine/reports/india-s-defence-exports-hit-record-rs-38-424-crore-in-fy26-up-62-66-126040200445_1.html',
        },
        {
            label: 'Bloom Energy on track for 2 GW annual production capacity — Utility Dive',
            url: 'https://www.utilitydive.com/news/bloom-energy-says-its-on-track-for-2-gw-annual-production-capacity/804291/',
        },
        {
            label: 'Bloom Energy signs $5bn partnership with Brookfield for AI data centre fuel cells — Data Center Dynamics',
            url: 'https://www.datacenterdynamics.com/en/news/bloom-energy-signs-5bn-partnership-with-brookfield-to-deploy-fuel-cell-tech-across-ai-data-centers/',
        },
        {
            label: '17,000 aircraft on backlog: aviation\'s supply chain crisis — International Fastener Expo',
            url: 'https://fastenershows.com/news/17000-aircraft-on-backlog-aviations-supply-chain-crisis/145609',
        },
        {
            label: 'Airbus targets 870 deliveries in 2026 — CNBC',
            url: 'https://www.cnbc.com/2026/02/19/airbus-earnings-fy-q4-boeing-deliveries-a320-airbus-2026-boeing-recovery.html',
        },
    ],
};
