import { SectorOverview } from './types';

export const industrialRailway: SectorOverview = {
    sector: 'Industrial - Railway',
    title: 'Industrial — Railway',
    standfirst:
        'Six suppliers to Indian Railways, sitting at very different heights in the same value chain. Bending steel into wagons is a business anyone with a shed and a licence can enter, and the buyer sets the price. Making the propulsion, the safety electronics and the wheels requires approvals that take three to ten years to earn, and those are the only places in this chain where a durable margin can exist. The question for each company is not how fast it is growing, but which layer it is climbing towards.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**The money in Indian railways is migrating from steel to electronics, and the portfolio should follow it.** A freight wagon is about ₹41 lakh of fabricated steel on which a maker earns 10-13%; the electronics on a single new locomotive is worth ₹5.5cr to its supplier at roughly twice that margin, a MEMU motor coach ₹15cr, a Vande Metro trainset about ₹60cr. The same train set that pays a wagon builder once pays an electronics supplier more, at a better margin, and behind a qualification wall that takes years to climb.',
                '**Hind Rectifiers** is the clearest way to own that shift. It is the dominant supplier of traction transformers — the heavy, safety-critical heart of an electric locomotive — and is using that position to climb into converters, train control and complete propulsion. Its risk is a loss-making French acquisition and flat order intake, not its competitive position. **Concord Control** owns the fastest-growing slice (train-safety electronics and distributed power control) and earns 30% on capital, but has not yet shown that its profits turn into cash; a small position only. **Titagarh Railsystems** is the best all-round franchise — the only Indian company making aluminium coach bodies, plus wagons, propulsion and a wheel plant — and is the one I would buy heavily when the delayed wagon tender finally lands.',
                '**Texmaco Rail and Jupiter Wagons** are competent companies in the weakest layer. Texmaco has done the smartest thing available to a wagon builder: it has moved 96% of its wagon book to private and export customers and attached 15-year maintenance to its South African order, which is worth more than the steel. Jupiter is trying to escape the same trap by building a wheel plant and a battery-storage business, which is the right idea funded at an uncomfortable cost. **MV Electrosystems** has the qualification (one of nine or ten propulsion designers in the world) but has not yet manufactured at scale; it is a bet on a production ramp that starts this month.',
            ],
        },
        {
            heading: 'The value chain, and where the profit actually sits',
            body: [
                'Every rupee Indian Railways spends on rolling stock passes through five layers. They look similar from outside and are completely different as businesses.',
            ],
            points: [
                {
                    label: 'Layer 1 — Steel and castings (bogies, couplers, draft gear)',
                    text: 'Texmaco runs its own foundry (5,148 tonnes in the quarter) and Titagarh has 50,000 tonnes a year of melting capacity. **This layer protects you from suppliers but earns nothing extra on its own;** its value is that it removes the bogie and casting bottleneck that stopped Texmaco from building wagons this quarter.',
                },
                {
                    label: 'Layer 2 — Wagon and coach fabrication',
                    text: 'Cutting, welding and painting to an RDSO-approved drawing. Texmaco can build 15,000-16,000 wagons a year and holds about 30% of the market; Titagarh about 12,000 and 25%; Jupiter and Braithwaite and several smaller yards make up the rest. **Industry capacity is far larger than the tender flow, the design is the customer\'s, and price is decided by the lowest bid.** That combination caps margins at roughly 10-13% no matter how well the company is run. Titagarh is currently running at 600-650 wagons a month against a capacity of 1,000, purely to make its backlog last.',
                },
                {
                    label: 'Layer 3 — Running gear (wheels, axles, brakes)',
                    text: 'India imports essentially all its passenger-coach wheels. Two consortiums are fixing that: Titagarh with Ramkrishna Forgings (228,000 wheels of capacity, with a 20-year Railways contract for 80,000 a year at roughly ₹1 lakh a wheel) and Jupiter with Italy\'s Lucchini RS (100,000 wheelsets, ₹2,600cr plant in Odisha, of which Jupiter funds ₹600cr of equity). **This is a genuinely high barrier — forging technology, metallurgy, a decade of qualification — with a long-dated payoff.** Jupiter also owns Stone India for freight brakes, which becomes fully captive by the end of 2026.',
                },
                {
                    label: 'Layer 4 — Traction and propulsion electronics',
                    text: 'The transformer, converter, traction motor and control software that make the train move. Worldwide there are only nine or ten companies that design propulsion systems; in India that means Siemens, Alstom, ABB, Medha, BHEL, plus Hind Rectifiers and the newly approved MV Electrosystems. **Approval requires a prototype, RDSO clearance and a 50,000 km field trial;** Hind is only 9-10,000 km into its trial, and MV needs roughly 15-16 months to add an EMU platform (development, then three months of depot validation, then field trials over 30,000 km or four months). That wall is why this layer earns better margins than fabrication.',
                },
                {
                    label: 'Layer 5 — Safety, signalling and train intelligence',
                    text: 'Kavach anti-collision, axle counters, distributed power wireless control for long freight trains, diagnostics. **Only three companies are fully approved for Kavach — Medha Servo, HBL and Kernex — against a programme worth ₹25,000-30,000cr across 35,000 km,** which is as close to a protected oligopoly as Indian railway supply gets. Concord participates through its 46.5% stake in ProGOTA, which has cleared the RDSO prototype for Kavach 4.0 and holds a field-trial order; it is not yet in the approved three.',
                },
            ],
        },
        {
            heading: 'What a moat looks like when you have only one customer',
            body: [
                'Indian Railways is a monopsony: one buyer, publishing its own designs, awarding by lowest price, and deliberately keeping several suppliers alive. MV Electrosystems made the point plainly — in its last propulsion tender there were seven bidders and even the seventh-lowest was given a quantity, because the country wants the capacity to exist. **That policy is a gift to a new entrant and a ceiling for an incumbent.** It means no supplier is ever squeezed out, and no supplier ever earns monopoly economics.',
                'Within that constraint, three things do create durable advantage, and they are worth more than any order book:',
                '**First, an approval that is expensive in years rather than rupees.** A propulsion platform, a Kavach installation, an aluminium car body, a forged wheel: each takes three to ten years of prototypes, trials and audits. Titagarh says it is the only Indian company to have built aluminium coach bodies, and it is bringing that line in-house at Pune by early FY28 instead of importing flat packs from Italy. **Second, being designed into the platform.** Hind\'s transformers and Pitti-style traction components are specified into a locomotive type; once in, the supplier is re-ordered for the life of the fleet. **Third, the maintenance contract.** Texmaco\'s South African order carries 15 years of maintenance worth 30-35% of the contract; Concord and Subros-style annual maintenance contracts do the same. **Maintenance revenue is where this industry\'s only recurring, high-margin income lives.**',
                'What does not create advantage: capacity, an order book, or a press release. Every company in this sector has more capacity than the tender flow supports.',
            ],
        },
        {
            heading: 'Are the margins structural?',
            body: [
                'This is the most useful question to ask about a railway supplier, and the answer differs by layer.',
            ],
            points: [
                {
                    label: 'Wagons: capped, and currently below normal',
                    text: 'Jupiter earned 9.7% this quarter against an FY26 average of 12.4%, because it was switching lines to new private designs. Texmaco earned 10.8% on volumes that halved from the previous quarter. **These margins are not depressed by bad management; they are what a price-taking fabricator earns when volumes fall.** The only structural improvements available are mix (private and export instead of Railways), attached maintenance, and captive castings and brakes.',
                },
                {
                    label: 'Passenger coaches and metros: better, but lumpy',
                    text: 'A metro or Vande Bharat coach carries far more engineering content than a wagon, and the buyer list (metro corporations, Railways, export) is wider. Titagarh guides about 200 coaches this year against 63 in all of FY26, and its Vande Bharat sleeper consortium with BHEL gives it roughly 51% of the value of each car over a five-year supply. **The economics improve with each step from steel box to complete train.**',
                },
                {
                    label: 'Electronics: genuinely higher, and rising with content',
                    text: 'Concord earned a 29.5% EBITDA margin in FY26 and guides 22-25%; Hind earns 10.6% standalone, held down by a loss-making French unit rather than by its core. The structural driver is content per train: Hind puts ₹5.5cr of equipment on a locomotive, about ₹15cr on a MEMU motor coach, and roughly ₹60cr on a Vande Metro trainset. **The same number of trains therefore produces several times the revenue for an electronics supplier over the next decade.** The risk is that as Kavach moves from nominated trials to open tenders, prices fall — exactly what happened in smart meters.',
                },
                {
                    label: 'The cash question that decides everything',
                    text: 'Railway customers bill and pay in an annual cycle, with a heavy fourth quarter. Concord\'s receivables and short-term debt jumped at the year end and an investor pointed out on the call that most of its reported profit had not been collected; management answered "it is just the cycle". MV needs about ₹200cr of working capital to run at ₹1,000cr of sales. **In this sector a profit is only real once it has been collected, and a big order book with no cash is how railway suppliers have historically failed** — Kernex and Ircon were both named by investors on Concord\'s call as the cautionary examples.',
                },
            ],
        },
        {
            heading: 'Where growth actually comes from',
            body: [
                'Three engines, with different degrees of certainty.',
                '**The delayed freight tender.** Indian Railways is expected to tender about 1 lakh wagons, roughly ₹40,000cr, and it has not appeared. It will come — the freight target is 3 billion tonnes against about 1.5 billion today — and when it does, Titagarh, Jupiter and Texmaco all have idle capacity to fill immediately. **This is a timing question, not a demand question,** which is why the wagon names are worth owning at the right price rather than at the right moment.',
                '**Electrification and modernisation content.** More electric locomotives, the shift from locomotive-hauled rakes to distributed-power trainsets (EMU, MEMU, Vande Bharat, Vande Metro), Kavach across 35,000 km, and refurbishment of about 25,000 older coaches. Each of these raises the electronics and interiors content of the same fleet. Hind, Concord and MV are the direct beneficiaries; Titagarh gains through its propulsion and coach lines.',
                '**Import substitution and export.** Wheels (Titagarh, Jupiter), propulsion (Hind, MV), and wagons sold abroad — Texmaco\'s ₹4,100cr South African order and a Cameroon contract, with a possible local plant. **Exports are the only escape from the monopsony,** and Texmaco is furthest down that road.',
                'What is not a growth engine, despite the enthusiasm on calls: diversification into unrelated areas. Jupiter\'s battery-storage business needs ₹400cr of build-own-operate funding for a 15-year West Bengal contract at a claimed "15%+" return and will not make an operating profit before FY28. Hind\'s "$1bn in five years" from a base of about $75m is not supported by railway demand alone, as an analyst pointed out on its call.',
            ],
        },
        {
            heading: 'Competition, honestly described',
            body: [
                '**Wagons:** Texmaco (about 30% share), Titagarh (25%), Jupiter, Braithwaite and several smaller yards, with total capacity far above normal tender flow. Competition is on price and delivery, not technology.',
                '**Wheels:** two new consortiums plus imports; the real competitor is the Chinese and European wheel makers who currently supply India, and the risk is that both Indian plants arrive together.',
                '**Propulsion:** Siemens, Alstom and ABB with global platforms; Medha as the entrenched Indian incumbent; BHEL; then Hind and MV as developmental sources. A developmental source is eligible for about 20% of a tender quantity — Hind\'s management said it would rather stay at 20% as a developmental vendor than join six or seven approved sources fighting for the other 80%, which tells you how price competition works once approval is common.',
                '**Safety electronics:** Medha, HBL and Kernex are approved for Kavach; Quadrant Future Tek is adjacent; Concord is at the trial stage through ProGOTA. Siemens and other global signalling firms bid for the larger integrated projects. **Concord\'s advantage is that it makes its own electronics (through the Fusion flex-PCB acquisition) and could be the low-cost approved vendor; its disadvantage is that it is not yet one of the three.**',
                '**Interiors and sub-systems:** a long tail of small suppliers, which is why Titagarh and Jupiter are pulling brakes, propulsion and coach shells in-house rather than buying them.',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** the 1 lakh wagon tender being issued (all three fabricators, immediately); Hind completing its 50,000 km propulsion trial and Elventer reaching breakeven; ProGOTA joining the approved Kavach list and Concord collecting its receivables; the two wheel plants commissioning on time; more export orders on the Texmaco model, with maintenance attached.',
                '**For the worse:** a repeat of the Mumbai suburban tender, which was cancelled and insourced to the Railways\' own Integral Coach Factory — the standing risk in a monopsony is that the customer decides to make it itself; Kavach moving to open tender and prices collapsing; a cash crunch at a company funding a large order book with short-term debt; or the wheel plants landing into a market that both of them have doubled.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Hind Rectifiers',
            stance: 'SCALEUP',
            what: 'Traction transformers, converters, train control and HVAC for locomotives and trainsets — the electrical heart of the train, not the body.',
            view: 'The strongest competitive position in this group: a dominant share of locomotive traction transformers, capacity going from 60 to 75 units a month, and a captive copper-conductor plant that adds about two points of gross margin. Content per train is the growth engine (₹5.5cr a locomotive, ₹15cr a MEMU motor coach, ₹60cr a Vande Metro set, with the first orders for each already won). Propulsion would be the next step up the chain, but it is only 9-10,000 km into a 50,000 km trial.',
            watch: 'Order intake was flat this quarter and management would not quantify the backlog. The French electronics acquisition (Elventer) cut the group margin to 5.4% against 10.6% standalone and must reach breakeven in three to five quarters.',
        },
        {
            company: 'Titagarh Railsystems',
            stance: 'SCALEUP',
            what: 'Wagons, metro and passenger coaches, propulsion, shipbuilding and a wheel joint venture — the broadest position in the chain.',
            view: 'The only Indian company that has built aluminium car bodies, and it is bringing that line in-house at Pune by early FY28 instead of importing Italian flat packs. Passenger coaches (about 200 planned this year against 63 last year), metro orders in Bangalore and Gujarat, and roughly 51% of the car value in the BHEL Vande Bharat sleeper consortium move it up the value chain, away from price-taking fabrication. The wheel venture with Ramkrishna Forgings carries a 20-year Railways contract.',
            watch: 'Wagon lines are deliberately throttled to 600-650 a month while the tender is awaited, and the Mumbai suburban order was cancelled and insourced. Our database has no quarterly profit and loss for Titagarh, so the financial picture here is incomplete.',
        },
        {
            company: 'Concord Control',
            stance: 'SCALEUP',
            what: 'Railway electronics: distributed power wireless control for long freight trains, Kavach through a 46.5% stake in ProGOTA, axle counters, diagnostics and a diesel-to-battery locomotive retrofit.',
            view: 'It sits in the highest-margin layer (29.5% EBITDA, 30% return on capital) with a ₹697cr order book at 3.3 times revenue, and the Fusion flex-PCB acquisition gives it something rare here: it makes its own electronics rather than assembling someone else\'s. If ProGOTA joins the three approved Kavach vendors, the addressable market is very large.',
            watch: 'Cash, not orders. Receivables and short-term debt jumped at the year end, operating cash flow is negative, and management would not give a peak-debt number. Disclosure is thin and the language is promotional.',
        },
        {
            company: 'Texmaco Rail',
            stance: 'CYCLICAL',
            what: 'India\'s largest wagon builder (about 30% share, 15,000-16,000 wagons of capacity), with its own foundry, a rail infrastructure arm and an electrical projects business.',
            view: 'It has done the one structurally smart thing available in fabrication: 96% of its wagon order book is now private and export rather than Indian Railways, including a ₹4,100cr South African order whose 15-year maintenance component is worth 30-35% of the contract. That is a real shift from selling steel to selling a serviced asset. Joint ventures with Wabtec (brakes), Touax (leasing) and Nymwag (European tank wagons) extend the same idea.',
            watch: 'Wagon output halved quarter on quarter on component shortages, and the roughly ₹700cr provision with an auditor qualification from Q4 was not discussed on this call. That needs an answer before the cheapness means anything.',
        },
        {
            company: 'Jupiter Wagons',
            stance: 'CYCLICAL',
            what: 'Wagons (80% private customers), freight brakes (Stone India), commercial vehicle bodies, a wheel plant with Lucchini RS and a battery-storage venture.',
            view: 'The strategy is right — escape fabrication by owning brakes, wheels and axles, where the barriers are metallurgical and the customer list is global (Tatravagonka offtake, Lucchini marketing, about half for export). But the cost is heavy: ₹2,600cr for the Odisha wheel plant, and a battery-storage arm that will not make an operating profit before FY28 and needs build-own-operate funding that is still undecided.',
            watch: 'Wagon volumes and margin (9.7% this quarter) until the tender arrives, and whether the wheel plant stays on budget and finds buyers alongside Titagarh\'s.',
        },
        {
            company: 'MV Electrosystems',
            stance: 'SCALEUP',
            what: 'Indigenous locomotive propulsion systems (6,000 HP platform) and overhead-line fault locators; newly listed.',
            view: 'It has cleared the hardest gate in this sector — an RDSO-approved, Indian-designed propulsion platform, making it one of a handful worldwide — and won about a quarter of the last tender against Siemens, Alstom, ABB, Medha and BHEL, for a ₹1,075cr order book. Because Railways spreads awards across bidders, an approved vendor gets repeat quantity almost by policy.',
            watch: 'Execution, entirely. There were no deliveries in July or August; the plan is 10 systems in September, 25 in November and 40 a month by January, against a ₹400cr revenue target. Management was also unaware of a cancelled 127-set tender that an analyst raised on the call.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**Own the electronics content, not the steel.** Hind Rectifiers is the core holding here: a real franchise in traction transformers, rising content per train, and a self-inflicted problem (the French acquisition) rather than a competitive one. Concord Control belongs in the portfolio in small size for the same structural reason — it is in the highest-margin layer with approvals behind it — but only in small size until its profits show up as cash.',
            '**Titagarh Railsystems is the one to buy heavily when the wagon tender lands.** It is the only company here present in every layer from castings to aluminium car bodies to propulsion to wheels, and the layer mix improves every year as coaches grow and wagons stagnate. Today it is deliberately running its wagon lines slow, which is the right operating decision and a poor quarter to buy into.',
            '**Texmaco Rail and Jupiter Wagons are competent companies in a capped layer.** Texmaco has the better answer (private and export customers, attached maintenance) and the bigger unanswered question (the ₹700cr provision). Jupiter has the better long-term assets (brakes, wheels) and the bigger funding bill. Both are worth owning only when the wagon cycle turns, and sized as cyclicals rather than compounders.',
            '**MV Electrosystems is a qualification in search of a factory.** The approval is genuinely valuable and hard to copy; nothing about the manufacturing ramp has been demonstrated yet. Watch the monthly delivery numbers from September before taking it seriously.',
            'The single thing that would change my mind about the whole sector: evidence that Indian Railways is willing to let suppliers earn good returns rather than competing them away. So far it is not — even the seventh-lowest bidder gets a share. That is exactly why the portfolio should sit in the layers where approval, not price, decides the winner.',
        ],
        bottomLine:
            'In Indian railways, fabrication is a licence to work hard for 10-12% margins at the customer\'s price, while approvals in propulsion, safety electronics, wheels and aluminium bodies are worth years of protected supply. Own the companies climbing towards the approvals — Hind Rectifiers now, Titagarh when the tender lands, Concord in small size — and treat the wagon builders as cyclicals, not compounders.',
    },

    sources: [
        {
            label: 'Titagarh Rail holds wagon output at 600-650 monthly — Railway Supply',
            url: 'https://www.railway.supply/titagarh-deliberately-caps-wagon-output-at-650/',
        },
        {
            label: 'Indian Railways plans ₹40,000 crore tender for 1 lakh freight wagons — Trak.in',
            url: 'https://trak.in/stories/indian-railways-plans-rs-40000-crore-mega-tender-for-1-lakh-freight-wagons/',
        },
        {
            label: 'Titagarh Rail vs Texmaco Rail: wagon market shares and capacity — Trade Brains',
            url: 'https://tradebrains.in/titagarh-rail-vs-texmaco-rail-who-dominates-the-wagons-market/',
        },
        {
            label: 'Kavach: approved vendors and programme scope — Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Kavach_(train_protection_system)',
        },
        {
            label: 'Kavach 4.0 rollout delayed by slow vendor approvals — Swarajya',
            url: 'https://swarajyamag.com/news-brief/kavach-40-rollout-delayed-due-to-slow-vendor-approvals-indian-railways-extends-deadline-to-december-2025',
        },
    ],
};
