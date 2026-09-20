import { SectorOverview } from './types';

export const industrialMachinery: SectorOverview = {
    sector: 'Industrial Machinery',
    title: 'Industrial Machinery',
    standfirst:
        'Four machine builders: two in metal-cutting machine tools, one in textile spinning machinery, one in plastics packaging machines. India still imports roughly 60-65% of the machine tools it uses, so the growth is real. But a machine is only as defensible as the part of it you actually own, and in metal cutting the most valuable part — the control system — is still bought from Japan or Germany. The three questions that matter here are how much of the machine is theirs, who the customer is, and whether the customer can be sold something again.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**LMW has the strongest structural position of the four and is at the worst point in its cycle.** Textile spinning machinery is a global oligopoly — Rieter, Trützschler, Toyota, Saurer and LMW — because a spinning line is a complete integrated process that mills buy once and then feed with spares for twenty years. LMW has roughly two-thirds of the Indian market and an installed base of 40-44 million spindles, which produces steady spares and service revenue (26% of its textile division) regardless of new orders. It is also quietly building a genuine second business in aerospace parts, where the order book has grown from ₹360cr to about ₹1,000cr. What it does not have is a cycle: the division is running at about 60% utilisation and management calls the recovery "gradual, not a hockey stick".',
                '**Jyoti CNC is the best growth franchise and the one with the most to prove.** It is India\'s largest machine-tool maker, with its own foundry, a 6,000-to-16,000 machine capacity expansion, and a deliberate mix shift towards aerospace and defence (38% of its order book), which is where machine tools earn real margins. Its 27% standalone margin is unusual for the industry and is evidence of that mix rather than of cleverness. Against that sit a French export-control investigation at its Huron subsidiary, a mid-stream change in how it recognises revenue there, and about ₹100cr of finished machines waiting for licences.',
                '**Macpower is the best-run small company in this group** — it builds nothing without an advance, refuses credit-hungry customers, and cut receivables while doubling output — but it sells ₹20 lakh machines to small job shops, which is the most competitive and least differentiated part of the market. **Mamata Machinery** is a real technology owner (an EU patent on its cross-sealing device, the only Indian maker of pre-USFDA dairy-standard machines) trapped in a bad year: its US business halved on tariffs and its margin fell from 21% to 8%.',
                'On balance: own LMW for the franchise if you can wait out the cycle, put Jyoti on the list for a price that reflects the Huron risk, and treat Macpower and Mamata as good small businesses that are either sold out of capacity or waiting for America to come back.',
            ],
        },
        {
            heading: 'What you actually own when you own a CNC machine maker',
            body: [
                'A metal-cutting machine is an assembly of five things, and Indian companies own very different shares of them.',
            ],
            points: [
                {
                    label: 'The casting and structure (20-30% of cost)',
                    text: 'The iron bed and column that hold the machine rigid and stable. **Jyoti casts its own** (its foundry expansion completes in October), which is a real advantage in cost, quality control and lead time. Macpower buys castings.',
                },
                {
                    label: 'Motion hardware — spindles, ball screws, linear guideways (25-35%)',
                    text: 'Mostly imported from Taiwan and Japan (Hiwin, PMI, THK and similar). Macpower holds a full year of Taiwanese ball-screw and guideway inventory, which is why the war did not disrupt it, and makes spindles in-house — but only 1,700-1,800 of them against 2,500 machines, so it must outsource at higher cost. **Spindle and coating capacity is Macpower\'s current bottleneck, and the main reason its margin is 16% rather than 20%.**',
                },
                {
                    label: 'The control system — controller, drives, motors (20-30%)',
                    text: '**This is the technology chokepoint, and almost nobody in India owns it.** Fanuc, Siemens and Mitsubishi supply the controllers. It is why 5-axis machines are effectively export-controlled: Macpower says it cannot get Fanuc or Mitsubishi controllers for 5-axis and must use Chinese, Taiwanese or Siemens units, with 300-page end-use agreements and the risk of a machine reaching a defence user by mistake — so it sells one or two a year and calls it a Ferrari, not a business. Jyoti is developing its own controller, drives and motors under the production-linked incentive scheme with roughly 25% central and 25% state capital subsidy; commercial use is about two years away. **If that works, it is the single biggest change in competitive position available to an Indian machine-tool company.**',
                },
                {
                    label: 'Assembly, geometry and accuracy',
                    text: 'Scraping, alignment and thermal management — where an experienced builder separates itself from an assembler. Macpower is spending 20-25% extra to make its new plant fully air-conditioned precisely because temperature affects accuracy, and because customers in aerospace and joint-venture partners demand that standard.',
                },
                {
                    label: 'Application engineering and service',
                    text: 'The part customers actually re-buy. Macpower runs 10 branches and 8 technology centres; Jyoti sells applications into aerospace and defence rather than machines. **In machine tools, service density is the closest thing to a moat at the entry level,** because a small job shop cannot afford downtime and will not buy from a supplier who cannot reach it quickly.',
                },
            ],
        },
        {
            heading: 'The market: big, import-fed, and split in two',
            body: [
                'India consumed roughly $3.7bn of machine tools in 2025, growing at about 11% a year, and imports were ₹21,628cr in FY26 — up 16% — with China at 30%, Japan 21% and Germany 12%. Domestic production grew about 19% to ₹17,387cr. **That gap is the whole investment case: a domestic maker does not need to win share from another Indian company, only to replace an import.**',
                'But the market is really two markets. **The entry and mid segment** (₹10-30 lakh turning centres and vertical machining centres) is where Macpower, Ace Micromatic (6,000 turning and 3,200 milling machines a year), Bharat Fritz Werner, Lokesh and dozens of smaller builders compete, mostly on price, delivery and service. Volumes are large — of about 32,000 turning machines made in India, roughly 14,000 sell below ₹15 lakh — and differentiation is thin. **The high end** (₹1cr-plus multi-axis, 5-axis and multi-tasking machines for aerospace, defence and dies) is dominated by Japanese, German, Korean and Taiwanese imports; India makes perhaps 1,000-1,500 machines above ₹1cr a year and fewer than ten above ₹3cr.',
                'Jyoti is deliberately climbing into the second market, which is why it bought Huron in France and why aerospace and defence are 37-38% of its business. Macpower is deliberately staying in the first, where it has 2% of consumption and says the market is "wide open" — a reasonable strategy, but one that caps what the business can ever be worth per unit sold. **Meanwhile capacity is being added by everyone:** a competitor has built a 10,000-machine plant at Hosur, Jyoti is going to 16,000 and Macpower to a new site by FY28. Import substitution has to be fast enough to absorb it.',
            ],
        },
        {
            heading: 'Textile and packaging machinery: different moats entirely',
            body: [
                '**LMW sells a process, not a machine.** A spinning mill buys blow room, carding, drawing, combing, roving and ring frames as one line, matched and commissioned together, and then runs it for two decades. That creates two forms of lock-in: the buyer will not mix suppliers within a line, and the installed base (40-44 million spindles) consumes spares and service every year whatever the capex cycle is doing. Spares are 26% of the textile division\'s revenue and they do not disappear in a downturn. **The moat is real; the demand is not, right now** — utilisation is about 60%, delivery times have collapsed from 12-15 months, and recovery depends on state subsidy schemes in Gujarat, Odisha and Madhya Pradesh and on trade agreements. Its other two businesses matter more than investors assume: machine tools and foundry grew 37% (56% automotive, new J-series machines for electronics manufacturing), and the aerospace unit exports 90% of what it makes with an order book approaching ₹1,000cr over three to three and a half years and a new ₹150cr facility coming.',
                '**Mamata sells a converted-film process with patents around it.** Its moat is narrow but genuine: a European patent granted in January 2026 on the cross-sealing device (it controls temperature, time and pressure digitally, which is what allows recyclable mono-material films to be sealed properly), the only Indian machines built to pre-USFDA dairy 3A hygiene standards, and top-five global brand recall in bag-and-pouch converting across 84 countries. Its new RecTech recyclable film technology is genuinely well-timed against India\'s packaging-waste rules, but needs 12-18 months of brand trials and certification before orders follow. **The weakness is customer economics, not technology:** it is a pure capital-goods business with no consumable attached, and its highest-margin market, the US (60% gross margin against 42-43% domestic), halved when tariffs froze customer capital spending.',
            ],
        },
        {
            heading: 'Are the margins structural?',
            body: [
                'The four companies earn very different margins, and each difference has a cause you can track.',
            ],
            points: [
                {
                    label: 'Jyoti: 27% standalone, and mostly earned',
                    text: 'Mix (aerospace and defence at 37-38%), scale, an in-house foundry and controller development, plus a genuine brand in India. **This should hold if the mix holds** — but note the consolidated margin is 21.4% because Huron, the French 5-axis unit, is losing about ₹30cr and guides only 8-10%. Owning a European aerospace machine maker is expensive and, as the export-control investigation shows, risky.',
                },
                {
                    label: 'Macpower: 16%, capped by what it does not make',
                    text: 'The gap to 20% is explained precisely: spindles and powder coating are made for only 1,200-1,800 machines against 2,500 sold, so the balance goes to outside job work at higher cost; logistics rise with volume; and pre-operating costs for the next plant are being absorbed now. **Backward integration from 40-45% to 75-80% of components is the stated path to 20%,** and it needs the new plant. The discipline is real — price rises of 4-6%, no machine without an advance, receivables down from ₹46cr to ₹33cr — but discipline does not change what an entry-level machine can earn.',
                },
                {
                    label: 'LMW: operating leverage in reverse',
                    text: 'At about 60% utilisation with a large fixed cost base, textile machinery margins are compressed by volume, not by pricing. Machine tools are below their historic 12-14% because the cost base grew and imported parts cost more in a weak rupee. **This is the classic case where margin recovery is a function of the cycle turning, and very little else** — which is also why the reported 104x earnings is misleading in both directions.',
                },
                {
                    label: 'Mamata: geography decides the margin',
                    text: 'Gross margin fell from 60.8% to 54.6% almost entirely because high-margin US revenue disappeared and domestic (42-43% gross margin) took its place. Add a one-off ₹3.05cr labour-code provision and ₹10.2cr of trade-show costs in a year when several big exhibitions coincided, and the EBITDA margin fell from 21.4% to 8.2%. **Most of that is genuinely temporary; the part that is not is the mix — if the US does not come back, the structural margin is lower.**',
                },
            ],
        },
        {
            heading: 'Where the next five years of growth come from',
            body: [
                '**Replacement, not just expansion.** A large installed base of Indian machines bought in 2000-05 is reaching the end of its life, and Jyoti explicitly credits replacement demand for its record order month (more than 1,000 machines in India in a single month, 250 in Rajkot alone). Replacement demand is steadier than greenfield capex and favours suppliers with service networks.',
                '**Defence, aerospace and electronics.** These are the segments where a machine-tool maker can charge for capability rather than compete on price — Jyoti has MBDA orders and 38% of its book in aerospace and defence; Macpower has ₹304cr of defence tenders under evaluation against a ₹20cr defence order book today; LMW\'s aerospace unit is 90% export. Electronics manufacturing is the newest pull, and the ₹40,000cr component incentive scheme is the trigger both Jyoti and Macpower are waiting on.',
                '**Import substitution at the high end is the big prize and the slow one.** It requires controllers, five-axis competence and customer confidence. Jyoti\'s own controller programme and its Huron technology are the only two credible Indian attempts here; both are two years or more from mattering.',
                '**For LMW and Mamata, the growth is a cycle turning, plus a second business.** LMW\'s aerospace arm could re-rate the whole company if it reaches the ₹2,000cr of visibility management has hinted at; Mamata\'s RecTech and its German distribution tie-up are worth perhaps $2-3m a year in Europe within three to five years, which management said plainly rather than dressing up — a good sign about the management, a sobering one about the size.',
            ],
        },
        {
            heading: 'What would change the picture',
            body: [
                '**For the better:** Jyoti\'s controller programme working, or the French investigation closing cleanly and the ₹100cr of held machines shipping; a textile capex revival (state schemes, trade agreements) that lifts LMW\'s utilisation from 60% towards 80%; Macpower\'s new plant opening on time so it stops turning away orders; a US tariff settlement that restores Mamata\'s highest-margin market.',
                '**For the worse:** Chinese machine imports resuming their price pressure (Carborundum notes China has withdrawn some export benefits, which is currently helping Indian makers); a capex pause among small job shops, which would hit Macpower first; a prolonged textile downturn that keeps LMW\'s fixed costs unabsorbed; or an escalation of export controls that makes high-end technology harder for Indian companies to buy at any price.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'LMW',
            stance: 'CYCLICAL',
            what: 'Lakshmi Machine Works: complete textile spinning lines (about two-thirds of the Indian market), plus CNC machine tools, a foundry and an aerospace components unit.',
            view: 'The best moat in this group and the worst timing. Spinning machinery is a five-company global oligopoly because mills buy an integrated line, not a machine, and LMW\'s 40-44 million spindle installed base produces spares and service revenue (26% of the division) through the cycle. The aerospace unit — 90% export, order book up from ₹360cr to about ₹1,000cr, a new ₹150cr plant — is a genuine second engine that the market treats as a rounding error.',
            watch: 'Textile utilisation is about 60% and the recovery is "gradual"; the Dubai and China subsidiaries lose money; an enabling resolution to explore electric vehicles, pharma and specialty chemicals is a diversification risk worth watching.',
        },
        {
            company: 'Jyoti CNC Auto.',
            stance: 'PRICED',
            what: 'India\'s largest metal-cutting machine tool maker, with its own foundry, plus Huron in France for 5-axis aerospace machines.',
            view: 'The only Indian machine-tool company attacking the high end on two fronts at once: mix (aerospace and defence are 37-38% of revenue and 38% of the order book, which is why standalone margins are 27%) and technology (its own controller, drives and motors under the incentive scheme, roughly two years out). Capacity goes from 6,000 to 16,000 machines a year, and a ₹4,848cr order book plus record domestic intake says the demand is there.',
            watch: 'The French export-control investigation at Huron, the switch to recognising Huron revenue only on dispatch, and about ₹100cr of finished machines awaiting licences for customers in China and Turkey. Net debt is around ₹700cr and inventory is built nine months ahead.',
        },
        {
            company: 'Macpower CNC',
            stance: 'PRICED',
            what: 'Entry and mid-range CNC turning and machining centres averaging about ₹20 lakh, sold mainly to small job shops, die-and-mould and general engineering.',
            view: 'Exceptionally disciplined for its size: no machine built without an advance, no chasing bulk orders on credit, receivables down from ₹46cr to ₹33cr, a year of critical imported inventory, and prices raised 4-6%. The premium Nexa range is now 40% of the order book, lifting realisation. But it competes in the least differentiated part of the market with 2% of consumption, and its margin gap to 20% is a physical one: it makes spindles for only 1,700-1,800 of the 2,500 machines it sells.',
            watch: 'The 13-acre plant opening on time (Q2 FY28) — the existing site is above 90% utilisation — and the still-pending 60-acre government land allotment behind the longer-term 10,000-machine plan.',
        },
        {
            company: 'Mamata Machinery',
            stance: 'CYCLICAL',
            what: 'Bag and pouch converting machines (a top-five global brand across 84 countries), vertical form-fill-seal packaging machines for food companies, and blown-film extrusion lines.',
            view: 'A real technology owner: an EU patent on its cross-sealing device, the only Indian machines meeting pre-USFDA dairy 3A standards, and the new RecTech recyclable mono-material film, which is well aligned with India\'s packaging-waste rules. Debt-free with ₹69cr of cash and an order book up 34%. The problem is customer geography, not capability — US, Canadian and Mexican revenue halved on tariffs and the margin fell from 21.4% to 8.2%, of which the labour provision and clustered trade-show costs are genuinely one-off.',
            watch: 'US orders returning in FY27 and the 12-18 month brand trials that decide whether RecTech becomes revenue. Domestic packaging (30-40% growth, 18 machines for one snacks brand) is the bridge until then.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**LMW is the franchise, and the patience trade.** Nothing else in this group has a two-decade installed base feeding spares through a downturn, and nothing else has a hidden second business — aerospace exports with an order book approaching ₹1,000cr — that could change what the company is. Buy it for the franchise and the aerospace arm, accept that the textile cycle sets the timing, and do not read too much into a reported multiple built on trough profits.',
            '**Jyoti CNC Auto. is the growth story worth waiting for a price on.** The mix shift into aerospace and defence is exactly the right strategy, the foundry and the controller programme are the right investments, and the order book supports the capacity. But owning a French aerospace machine maker under an export-control investigation, with revenue recognition changed mid-stream and ₹100cr of machines stuck, is a real risk that the current price does not compensate for.',
            '**Macpower CNC is well-run and structurally limited.** I would rather own a disciplined company in a hard segment than a careless one in an easy segment, and its cash discipline is genuinely unusual. But an entry-level machine sold to a job shop will not earn a premium margin however well it is built; the case rests on backward integration lifting margins towards 20% and on the new plant opening before demand is turned away.',
            '**Mamata Machinery owns technology and is waiting for a customer.** The patents, the hygiene standards and RecTech are worth something; the current earnings are not the right base to judge it on, in either direction. It is a recovery holding, not a compounder.',
            'The test I would apply to all four over the next two years is simple: how much of the machine do they own, and how much can they sell the same customer again? Jyoti\'s controller, Macpower\'s spindles, LMW\'s spares and Mamata\'s film technology are all answers to that question. Progress on those matters more than any single quarter of orders.',
        ],
        bottomLine:
            'India imports two-thirds of its machine tools, so growth is not the scarce thing here — defensibility is. Own the companies that own more of the machine and can sell the same customer again: LMW for its installed base and aerospace arm, Jyoti CNC Auto. once the Huron risk is priced, with Macpower CNC and Mamata Machinery as good small businesses whose ceilings are set by what they buy rather than what they make.',
    },

    sources: [
        {
            label: 'India machine tool market size, players and growth — Ken Research',
            url: 'https://www.kenresearch.com/industry-reports/india-machine-tool-market',
        },
        {
            label: 'Indian machine tool industry production and imports FY26 — IPF Online',
            url: 'https://www.ipfonline.com/news/detail/machinetoolsaccessories/indian-machine-tool-industry-expected-to-grow-10-in-fy26-jibak-dasgupta/18075',
        },
        {
            label: 'Machine tools market in India: key companies and outlook — Technavio',
            url: 'https://www.technavio.com/report/machine-tools-market-in-india-industry-analysis',
        },
    ],
};
