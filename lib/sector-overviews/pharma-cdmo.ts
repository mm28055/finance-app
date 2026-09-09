import { SectorOverview } from './types';

export const pharmaCdmo: SectorOverview = {
    sector: 'Pharma CDMO',
    title: 'Pharma CDMO',
    standfirst:
        'Sixteen companies sold to you under one label, running four genuinely different businesses. ' +
        'The whole game is telling them apart before you pay.',
    lastUpdated: '2026-09-09',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'What this sector actually is',
            body: [
                'A CDMO makes drugs that somebody else owns. The customer keeps the molecule, the patent and the brand; the CDMO supplies the chemistry, the plant and the regulatory paperwork. You are buying a **supplier to the pharmaceutical industry**, never a pharmaceutical company — nothing here depends on a drug you have heard of succeeding, and nothing here captures the upside if one does.',
                'The trouble is that the label covers four unrelated businesses, and the spread across these sixteen is extreme. Last quarter **Anthem earned a 42% EBITDA margin on a 30% return on capital. Windlas earned 13.7% on 15.9%. Cohance earned 2.2% on 5.8%.** Same sector tag, same "China+1 CDMO" pitch in every presentation, three completely different securities. Before anything else is decided, each name has to be put in the right box.',
            ],
            points: [
                {
                    label: 'Innovator CRDMO — Anthem, Sai Life, Neuland, Cohance, Piramal',
                    text: 'Works on drugs still in development for Western pharma and biotech. Long contracts, high margins, genuinely hard to displace once the site is written into a regulatory filing. This is where the 26-42% margins live. It is also where a quarter can fall 23% because a client rescheduled a shipment, as Cohance\'s just did.',
                },
                {
                    label: 'Complex fill-finish — Gland, Onesource, Jubilant Pharmova',
                    text: 'Owns hard-to-build sterile capacity: injectables, pens, cartridges, freeze-drying. Sells scarcity rather than science. Onesource maxed out Line 1 and expanded margins 600bps in a single quarter purely because it was the only compliant line available; Gland is taking cartridge capacity to 140m units for the same reason.',
                },
                {
                    label: 'Domestic contract manufacturing — Akums, Innova Captab, Windlas',
                    text: 'Makes ordinary tablets and syrups for Indian pharma brands on a cost-plus conversion fee. Akums is the outright leader with ₹1,167cr of quarterly revenue and zero debt. All three earn 15-16% on capital and 13-16% margins, and none of them will ever earn much more. Predictable, cash-generative, structurally capped.',
                },
                {
                    label: 'Chemistry wearing a CDMO label — Jubilant Ingrevia, Aarti Pharmalabs, Aether',
                    text: 'Sells chemicals and reports a contract-manufacturing line alongside. Aarti\'s CDMO segment is 7% of sales while caffeine is 67%. Ingrevia\'s headline growth last quarter came from a 240% EBITDA spike in commodity intermediates while its flagship CDMO contract stopped shipping. Aether is a genuinely good specialty chemicals company that sells to Dow and Baker Hughes, not to pharma. The CDMO story is real in all three and material in none.',
                },
            ],
        },
        {
            heading: 'How the money is actually made',
            body: [
                'Four economics sit inside this list, and reading a company against the wrong one is how people overpay here.',
                '**Conversion economics — Akums, Innova, Windlas.** You are paid a fee to turn the client\'s raw material into their finished product, with input costs passing straight through. Revenue therefore moves with chemical prices and tells you very little. Margins sit in the low-to-mid teens and stay there, because the customer knows exactly what your cost is. What you get instead is stability: Windlas has now printed 14 consecutive record quarters and grew core CDMO 29% against 3.4% industry volume growth; Innova\'s Jammu plant crossed breakeven at only 25-30% utilisation against ₹1,000-1,200cr of peak revenue potential. These are good businesses. They are simply not worth a science multiple, and Akums at 38x is about as much as the model supports.',
                '**Science economics — Anthem, Neuland, Sai, Cohance.** You are paid for solving a chemistry problem the customer cannot solve, and then for being the name in the drug\'s regulatory filing. Replacing you costs the client years and a re-approval, so pricing power is real. **Anthem earns 42.1% margins and 30.4% on capital; Neuland 35.5% and 26.5%; Sai 26.8% and 19.6%.** Those are not manufacturing numbers, and the gap between them and the domestic trio is the entire investment case for the top tier. Cohance is the warning: the same model, the same platforms, executed badly, currently earning 2.2%.',
                '**Scarcity economics — Gland, Onesource, Jubilant Pharmova.** Nothing clever is being invented; the world is simply short of compliant sterile capacity. When that happens the operating leverage is violent in both directions. Onesource went from a company the market doubted to 37% growth and a 600bps margin jump in one quarter, having absorbed a competitor\'s supply disruption on fungible capacity. Gland runs 27.9% margins on ₹6,725cr of sales and is the only one of the three earning a respectable 15.1% on capital while it does so.',
                '**Commodity economics — Ingrevia, Aarti, Aether.** Earnings are set by prices, not contracts. Aarti\'s 25.4% margin looks like a specialty business until you notice two-thirds of revenue is caffeine enjoying a windfall from Chinese export rebate removals, and that spot prices had already begun cooling by mid-2026 just as 9,500 MTPA of new capacity arrives. Aether is the honourable exception in quality — 31.5% margins, an exclusive Dow silicones partnership, semiconductor materials — but it should be judged as a chemicals platform, not filed here.',
                'Cutting across all four is **lumpiness, and it is not one thing.** Anthem\'s Q1 fell year-on-year purely because clients deferred into H2, with roughly 60% of the annual order book already covered — that is timing. Dishman was pushed into a pre-tax loss by a single ~CHF 10m order sliding a quarter, because European fixed costs leave no room — that is fragility. Both will be described as "CDMO lumpiness" on the call. Only one of them is.',
            ],
        },
        {
            heading: 'What is driving the sector right now',
            body: [
                'Four things are moving at once. None of them lifts all sixteen, and it is worth being specific about who each one actually reaches.',
            ],
            points: [
                {
                    label: 'China is being legislated out',
                    text: 'The BIOSECURE Act became law in December 2025, and WuXi AppTec was added to the Pentagon\'s 1260H list in June 2026, placing it inside the "company of concern" definition. Implementation still has to grind through OMB guidance and procurement rules, so this is a multi-year redirection rather than a switch. It reaches Anthem, Sai, Neuland and Cohance directly — small molecules, peptides and ADCs are exactly where India substitutes for China — and Onesource is already seeing it, with biologics RFPs up fourfold year-on-year. It does precisely nothing for Akums, Innova or Windlas, who sell to Indian pharma companies and should never be bought on this argument.',
                },
                {
                    label: 'The peptide and GLP-1 supercycle',
                    text: 'Semaglutide is coming off patent and the world does not have enough compliant peptide or sterile fill-finish capacity to serve it; executives expect the bottleneck to last years. The important thing is separating who is in it now from who is talking about it. **In it now:** Onesource is the exclusive supplier for the first three Canadian approvals and took an estimated 40% of the Indian generic market on day one; Neuland\'s commercial peptide facility was commissioned in 2026 with Module 1 booked before validation; Gland is scaling cartridges to 140m units and has signed for semaglutide and tirzepatide. **Not yet:** Sai\'s dedicated peptide plant is a 2028 event, so it misses this wave entirely — which matters when you are paying 95x today.',
                },
                {
                    label: 'US tariffs, which invert the usual logic',
                    text: 'Section 232 tariffs landed on patented pharma and APIs in April 2026 and generics were pulled in from August on a staged schedule — zero for two years, then steeply higher from 2028. Policy this fluid should not be modelled precisely, but the direction quietly rewards the companies whose Western plants everyone has spent a decade calling dead weight. **Hedged:** Piramal (Lexington, Riverview), Jubilant Pharmova (Spokane, Montreal), Gland (Cenexi in France), Senores (a USFDA-approved US plant), Dishman (Switzerland, France). **Exposed:** Anthem, Sai, Neuland and Aarti, who manufacture in India and ship to the US. **Indifferent:** Akums, Innova and Windlas, who barely export. Note that this cuts against the ranking on almost every other metric.',
                },
                {
                    label: 'A disciplined but uneven funding recovery',
                    text: 'Biotech money is returning and going to de-risked, late-stage assets; early-stage funding is near post-pandemic lows. That helps anyone with commercial and Phase 3 molecules — Sai with 33 commercial and 14 late-phase, Cohance with 10 in Phase 3, Piramal converting an expanded RFP pipeline into 19% CDMO growth. It actively hurts the part of Cohance that depends on small biotechs starting new ADC programmes: NJ Bio lost ₹33cr of EBITDA in a single quarter for exactly this reason. Analysts have called 2026 a "reset year" for Indian CDMOs on slower client decision-making, and the Q1 FY27 prints on this list — Cohance down 23%, Dishman down 4%, Anthem down year-on-year, Sai up only 12% — are consistent with that.',
                },
            ],
        },
        {
            heading: 'Five tests, applied to these sixteen',
            body: [
                'Every company here will tell you about China+1, peptides and a robust pipeline. These five questions separate them, and the answers are already on the page.',
            ],
            points: [
                {
                    label: '1. Is the margin structural or borrowed?',
                    text: 'Anthem\'s 42% and Neuland\'s 35.5% come from innovator contracts and process chemistry — structural. Aarti\'s 25.4% comes substantially from a caffeine price spike, and Ingrevia\'s consolidated 36% EBITDA growth came from a 240% cyclical windfall in acetyls while the CDMO contract sat paused. Same optics, opposite durability. Ask what the margin is made of before extrapolating it.',
                },
                {
                    label: '2. Does the capex have a customer?',
                    text: 'Nearly everyone here is mid-expansion, so the only distinction that matters is whether the capacity is already spoken for. Sai\'s new discovery block sold out on commissioning and Neuland\'s peptide module was booked before FDA validation — demand-led. Aarti\'s ₹149cr dedicated CDMO block starts operating toward the end of FY28 for a segment currently at 7% of sales, and Anthem is running Units 2 and 3 at 30-50% while committing ₹1,200cr to Unit 4. Both may work; neither is sold yet.',
                },
                {
                    label: '3. How clean is the regulatory record?',
                    text: 'This is the one risk that permanently impairs a business rather than costing it a year. Piramal\'s sustained zero-OAI record across its whole global network is a genuine commercial asset and part of why clients pay up. Cohance is simultaneously carrying a warning letter at Nacharam and a fresh Form 483 with five observations at Pashamylaram. Dishman, for all its financial problems, has clean recent USFDA and Korean MFDS clearances at Naroda. The market treats this far too casually.',
                },
                {
                    label: '4. Who is the customer, really?',
                    text: 'Sai\'s top client at ~12% of revenue is a risk you can live with. Neuland\'s commercial revenue concentrated in three molecules is a different security. Ingrevia\'s specialty margin is currently held up by take-or-pay clauses because its $300m anchor customer stopped taking volume — the contract worked, which is to management\'s credit, but the business did not. Aether has taken Baker Hughes from zero to 20% of revenue in two years, which is both the achievement and the exposure. Onesource depends on Dr Reddy\'s resuming normally.',
                },
                {
                    label: '5. What is the return on capital?',
                    text: 'The cleanest filter on the whole list. **Anthem 30.4%, Neuland 26.5%, Sai 19.6%, Windlas 15.9%, Senores and Gland 15.1%, Innova 15.0%, Akums 14.9%** — those are businesses. **Piramal 2.5%, Onesource 0.6%, Dishman 3.2%, Cohance 5.8%** are either early in a build or simply not earning their cost of capital, and each needs a specific, dated reason to change. Ask for the date.',
                },
            ],
        },
        {
            heading: 'The risks that actually matter, and who carries them',
            body: [
                'Generic risk lists are useless here because the sixteen carry completely different exposures. These are the ones I would actually underwrite, with names attached.',
            ],
            points: [
                {
                    label: 'Expensive and not yet profitable — Onesource, Cohance, Dishman',
                    text: 'The single most dangerous cell on this list. **Onesource trades at 691x on a 0.6% return on capital, Cohance at 161x on 5.8%, Dishman at 150x on 3.2%.** Each has a real story — GLP-1 capacity, ADC platforms, Swiss-to-India transfers — and each may work. But the price offers no protection whatsoever if the story slips a year, and in this industry stories slip a year routinely. If you own these, own them knowing the valuation is the risk, not the business.',
                },
                {
                    label: 'Regulatory action, which is permanent — Cohance now, Jubilant and Innova next',
                    text: 'Cohance is the live case: a warning letter at Nacharam requiring costly remediation and a fresh 483 at Pashamylaram, at exactly the moment it needs a flawless H2 to hit guidance. Jubilant Pharmova\'s entire CDMO thesis rests on Spokane staying clean while 10+ molecules go through tech transfer on Line 3 — a 483 there would be the difference between a re-rating and a write-off. Innova (UK MHRA, PIC/S) and Senores (a newly acquired US site) are both operating freshly certified facilities with no track record yet.',
                },
                {
                    label: 'Everyone is building at once — Sai, Onesource, Anthem, Aether, Neuland',
                    text: 'The most underpriced risk here, because it is invisible in any single company and only appears when you add it up. **Thirteen of these sixteen are spending roughly ₹6,600cr of capex in FY27 against a combined revenue base of ₹53,500cr — about 12.4% of sales, when maintenance capex for manufacturing runs 3-5%.** At the asset turns these companies quote themselves (Aarti says 1.0x, Aether 1.5-1.75x), one year of that spending needs 12-19% of incremental revenue simply to fill, and FY28 carries more behind it. The sector is currently printing about 17% revenue-weighted growth, so it keeps pace on paper — but only just, and that figure leans on Onesource +37%, Senores +36% and Innova +34% off small bases while Cohance is -23%.',
                },
                {
                    label: 'And the spending is wildly uneven',
                    text: 'The aggregate hides who is actually betting the company. As a share of their own annual sales: **Onesource 57%, Sai 53%, Anthem 30%, Aether 26%, Neuland 21% — against Gland at 8%.** Gland is the only one of the quality names not funding this thesis with its balance sheet, which is a large part of why I would start there. The deeper problem is timing rather than size: CDMO capacity takes three to five years to fill from commissioning, so depreciation lands in FY27-28 and the revenue lands in FY29-31. Returns on capital fall first whether or not the demand ultimately shows up.',
                },
                {
                    label: 'Balance sheets, which split the list in two',
                    text: 'On one side: **Anthem with ₹1,720cr net cash funding its entire expansion internally, Akums with ₹1,616cr and zero debt, Gland with over ₹3,000cr.** These companies cannot be forced into a bad decision. On the other: **Piramal at 3.6x net debt to EBITDA**, expected to stay there through FY27 while it finishes the Lexington capex — a recovering business with a financing clock attached — and **Dishman retiring Indian bank debt with a 10-year unsecured loan from a promoter entity** rather than refinancing conventionally. The interest saving is real; the dependency is a governance fact worth watching.',
                },
                {
                    label: 'Concentration, in four different shapes',
                    text: 'Molecule concentration at Neuland, where three commercial products carry the CMS segment. Client concentration at Onesource, where Dr Reddy\'s is the anchor, and at Aether, where Baker Hughes is 20% of revenue. Contract concentration at Ingrevia, where one paused $300m agreement determines whether the specialty segment grows. Segment concentration at Aarti, where 67% of revenue is a single commodity. All four are survivable and all four are the thing that actually moves the share price.',
                },
                {
                    label: 'People and governance — Cohance, Ingrevia',
                    text: 'Cohance is attempting the hardest turnaround on this list with a CFO who resigned effective September 2026, shortly after a CEO change. Turnarounds are executed by people, and this one is short of them at the critical moment. Ingrevia\'s related-party dealings with Jubilant Pharmova need periodic checking for arm\'s-length pricing, given both sit in the same group and on this same list.',
                },
                {
                    label: 'The mistake, rather than the risk',
                    text: 'Paying a science multiple for conversion economics. Akums, Innova and Windlas are honest, well-run businesses whose margins are structurally capped in the mid-teens by the pass-through model itself. At 35-44x they are fully priced for what they are. There is nothing wrong with owning them — there is a great deal wrong with owning them because you believed the China+1 slide.',
                },
            ],
        },
        {
            heading: 'How I would frame the sixteen',
            body: [
                'Held for years rather than quarters, the list sorts into a fairly clear order.',
                '**The businesses worth owning through the noise** are Anthem, Neuland and Gland. All three earn their returns from something hard to copy — Anthem from best-in-class economics funded entirely by its own cash, Neuland from process chemistry now extending into commercial peptides, Gland from sterile capacity plus a European release footprint competitors cannot assemble quickly. Gland is the one where the price is not yet asking for perfection.',
                '**Excellent businesses where the price is the problem** are Sai Life and, on a different reading, Aether. Nothing is wrong with either. You are being asked to pay in advance for several years of flawless execution, which in a lumpy industry is a real risk rather than a theoretical one.',
                '**Recoveries that need evidence** are Piramal, Jubilant Pharmova, Cohance and Onesource. Each has a specific, dateable event that would confirm or kill the case — a margin ramp, a Montreal fix, a clean H2, a commercial line. None require faith; they require patience and a willingness to buy later at a higher price once the proof arrives.',
                '**Sound but ordinary** are Akums, Innova and Windlas. Good operators, honest disclosure, capped economics. Own them at a sensible multiple for steady domestic volume growth, not as a way to play China+1.',
                '**Mispriced by category** are Jubilant Ingrevia and Aarti Pharmalabs. Both are chemical companies with a CDMO option attached, and both should be bought on chemical-cycle logic — which is to say, cheaply and out of favour.',
                '**Dishman is the one I would leave alone.** The technology is genuinely rare and the returns have not been there for years; a 3% return on capital with promoter-funded refinancing is not a valuation opportunity, it is a pattern.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Anthem Biosciences',
            stance: 'COMPOUNDER',
            what: 'Pure innovator CRDMO — custom synthesis, fermentation, ADC payloads and peptides for Western pharma and biotech.',
            view: 'The best economics on this list by some distance: ~42% EBITDA margins and a 30% return on capital, with the ₹1,200cr Unit 4 expansion funded entirely from a growing net cash pile. Over 100 early-stage programmes and 10 in late phase means the pipeline converts mechanically rather than heroically. This is what the top of the sector is supposed to look like.',
            watch: 'You are paying roughly 90x for it, and Units 2 and 3 are running at 30-50% utilisation. The quality is not in question; the entry price is the entire decision.',
        },
        {
            company: 'Gland Pharma',
            stance: 'COMPOUNDER',
            what: 'Sterile injectables at scale for global pharma, plus Cenexi in France for European manufacture and release.',
            view: 'The most sensibly priced quality asset here — 42x for 20% growth, a 15% return on capital and 28% margins. Cenexi, long treated as a mistake, is what won a 55-SKU consolidation contract worth $90-100m a year from CY29 and is now a tariff hedge as well. Cartridge capacity scaling to 140m units puts it directly in the GLP-1 bottleneck. Net cash of over ₹3,000cr.',
            watch: 'The big contracts commercialise in CY29-FY30, so several years of capex land before the revenue does. Any FDA delay on those tech transfers pushes the whole curve right.',
        },
        {
            company: 'Sai Life Sciences',
            stance: 'PRICED',
            what: 'End-to-end CRDMO — discovery chemistry through to commercial API, moving into peptides, ADCs and early-phase formulation.',
            view: 'Genuinely one of the better businesses in the sector: 90%+ repeat revenue, 33 commercial and 14 late-phase molecules, a 20% return on capital, and a discovery block that sold out the moment it was commissioned. The model of winning early-stage work and escorting it to commercial scale is the right one and is visibly working.',
            watch: 'The most stretched risk/reward on this list once the capex is sized properly. **That ₹1,100-1,300cr of FY27 spending is 53% of a full year of revenue** — the second-heaviest here — laid out across peptides, ADCs and formulation at once, against 12% growth and roughly 95x earnings, with the peptide plant a 2028 event that misses the current GLP-1 wave entirely. Superb company; the price and the build are both asking for perfection at the same time.',
        },
        {
            company: 'Neuland Laboratories',
            stance: 'COMPOUNDER',
            what: 'Complex chemistry CDMO with a legacy generic API business underneath it funding the transition.',
            view: 'The mix shift has already happened — custom manufacturing is now over half of revenue, margins are 35.5% and return on capital is 26.5%, second only to Anthem. The commercial peptide facility commissioned in 2026 arrives precisely as the world runs short of peptide capacity, and the Gland tie-up buys entry into sterile APIs without funding a sterile plant. Working capital days fell from 137 to 84, which is the sort of detail that separates a real operator from a story.',
            watch: 'Commercial revenue leans heavily on three molecules, and management has openly warned that return on capital dips during the current build. Concentration is the live risk, not demand.',
        },
        {
            company: 'Piramal Pharma',
            stance: 'TURNAROUND',
            what: 'Global CDMO with US and UK sites, plus complex hospital generics and a small Indian consumer brand portfolio.',
            view: 'The recovery is real — 19% CDMO growth, EBITDA up 72% and margins up 400bps in Q1 FY27 — and the zero-OAI record across the whole network is a commercial asset in a sector where quality failures cause shortages. Owning US onshore capacity was a liability for years and is now, on the current tariff path, a genuine advantage.',
            watch: 'Net debt at 3.6x EBITDA and a 2.5% return on capital mean the operating recovery has to keep compounding for another two years before the balance sheet stops dictating the story. Cheap for a reason that is fixable, not imaginary.',
        },
        {
            company: 'Aether Industries',
            stance: 'PRICED',
            what: 'Specialty chemicals and contract exclusive manufacturing — oil and gas, silicones and semiconductor materials, not pharma.',
            view: 'A good company filed in the wrong drawer. The Dow silicones partnership and the Baker Hughes relationship — nothing to zero to 20% of revenue in two years — are serious validations of its process engineering, and 31.5% margins with 27% growth back that up. Judge it as a specialty chemical platform, because that is what it is.',
            watch: 'About 90x earnings for a 12% return on capital, with working capital still bloated and four major projects running concurrently. The execution list is longer than the management team is wide.',
        },
        {
            company: 'Onesource Specialty',
            stance: 'SCALEUP',
            what: 'Sterile fill-finish for drug-device combinations — the pens and cartridges generic GLP-1s are delivered in.',
            view: 'Sitting in the tightest bottleneck in global pharma with capacity already maxed out, 37% growth and margins up 600bps in a quarter. Exclusive supplier for the first three Canadian semaglutide approvals and roughly 40% of the Indian generic market on day one. Line 2 doubling sterile capacity is the near-term unlock.',
            watch: 'A 0.6% return on capital and a 691x multiple mean you are buying the FY28 target of $400m revenue and $160m EBITDA outright, with no support underneath if it slips. High-conviction or nothing — there is no cautious way to own this.',
        },
        {
            company: 'Cohance Lifesciences',
            stance: 'TURNAROUND',
            what: 'CRDMO built around ADC payload-linkers and oligonucleotides, with a generic API and specialty chemicals base.',
            view: 'The platforms are real and hard to replicate, and management called Q1 FY27 as the bottom before it happened — restocking orders for the large commercial molecule are now secured for Q4 FY27 and FY28, and the Sapala oligo business tripled. A credible group CEO is resetting the operating base.',
            watch: 'Everything about the current picture is stressed: revenue down 23%, EBITDA margin at 2.2%, NJ Bio losing ₹33cr a quarter, a warning letter at Nacharam, a fresh 483 at Pashamylaram and a departing CFO — all at 161x. Wait for one clean quarter; the re-rating will still be in front of you.',
        },
        {
            company: 'Jubilant Pharmova',
            stance: 'TURNAROUND',
            what: 'Four businesses in one holding — US sterile injectables CDMO, radiopharmaceuticals, generics and APIs, and a drug discovery CRO.',
            view: 'Priced as a legacy generics company while quietly becoming a US-based complex biologics manufacturer. Spokane Line 3 is onboarding 10+ complex molecules with $60-80m of tech transfer revenue expected in FY27 and peak revenue arriving well ahead of schedule, and the radiopharma pipeline carries orphan-designation optionality. Major capex is ending. At 41x with US manufacturing, the tariff backdrop helps rather than hurts.',
            watch: 'Montreal is losing around ₹200cr of EBITDA a year with no meaningful relief until FY28, and radiopharma takes a $14m hit in H1 FY27. Good sum of the parts, genuinely poor housekeeping in one of them.',
        },
        {
            company: 'Akums Drugs',
            stance: 'SCALEUP',
            what: 'India\'s largest domestic formulations contract manufacturer, making other companies\' branded medicines.',
            view: 'The cleanest balance sheet in the sector — zero debt, ₹1,616cr net cash — attached to a genuinely dominant domestic position and 15-year MNC relationships. The interesting part is what is being bolted on: an EU contract running to 2032 at roughly €35m a year, a Zambian government supply deal, and Oriflame\'s India plants opening a higher-margin cosmeceutical line. At 38x with a 15% return on capital, it is not expensive for what it is.',
            watch: 'Fundamentally a conversion-margin business — pricing power is limited by design, and margins live at 15%. The cash pile is an M&A risk as much as a comfort.',
        },
        {
            company: 'Jubilant Ingrevia',
            stance: 'CYCLICAL',
            what: 'Vertically integrated life sciences chemicals — pyridines, vitamin B3, acetyls — with a growing CDMO order funnel.',
            view: 'The Q1 FY27 headline was excellent and the composition was not: consolidated EBITDA rose 36%, but chemical intermediates contributed a 240% spike driven by crude-linked pricing, while the flagship $300m agro-CDMO contract stopped shipping physical volume and is being held up by take-or-pay clauses. That those clauses worked is a real credit to the contracting; it is not the same as the CDMO business growing.',
            watch: 'At 34x this is priced sensibly, and management refusing to raise guidance after a large beat is a mark in their favour. Buy it as a chemical cyclical at a cyclical price — the CDMO pivot is optionality, not the case.',
        },
        {
            company: 'Aarti Pharmalabs',
            stance: 'CYCLICAL',
            what: 'World-scale caffeine and xanthine producer with an API business and a small, aspirational CDMO arm.',
            view: 'Two-thirds of revenue is xanthine derivatives, currently enjoying a windfall from Chinese export rebate removals and geopolitics; CDMO is 7% of sales and collapsed sequentially. The strategy — use the cash cow to fund a dedicated ₹149cr CDMO block — is sensible and honest. It is also a 2028-29 story, and management has already pushed the $100m CDMO target out to 2029-30.',
            watch: 'Xanthine spot prices had begun cooling by mid-2026 just as 9,500 MTPA of new capacity arrives. If prices fall while the CDMO catch-up slips, the operating leverage runs in reverse. Own it for caffeine, priced as caffeine.',
        },
        {
            company: 'Senores Pharmaceutic',
            stance: 'SCALEUP',
            what: 'Complex generics with its own ANDA portfolio, manufacturing in both India and the US, plus a CDMO service line.',
            view: 'Less a CDMO than a small, fast complex-generics owner: 58 approved ANDAs with only 23 commercialised, 36% growth, 35.6% margins and a 15% return on capital. Owning a USFDA-approved US plant alongside Indian capacity is a structural hedge against exactly the tariff path now unfolding, and the Zorex launch is an attempt to capture distribution margin directly.',
            watch: 'Small, acquisitive and dependent on launch execution; margins already normalised from ~40% to ~30%. A single FDA observation at either site would be disproportionately damaging at this scale.',
        },
        {
            company: 'Innova Captab',
            stance: 'SCALEUP',
            what: 'Domestic contract manufacturer for large Indian pharma companies, with a branded generics arm alongside.',
            view: 'Straightforward and well executed: 34% revenue growth on 22% volume growth, profit growing faster than sales, and the Jammu plant past EBITDA breakeven at only 25-30% utilisation against a ₹1,000-1,200cr peak revenue potential. The heavy capital is spent and the operating leverage from here is arithmetic rather than hope. UK MHRA approval opens regulated markets.',
            watch: 'Cost-plus economics cap margins around 16-18%, and switching costs for generic formulations are moderate at best. This is a good execution story, not a moat story — price it that way.',
        },
        {
            company: 'Dishman Carbogen (Carbogen Amcis)',
            stance: 'AVOID',
            what: 'High-potency API and ADC specialist with premium Swiss and French development sites and Indian manufacturing.',
            view: 'The capability is genuinely elite — ADC payloads and linkers are among the hardest things in the industry to make, and the regulatory record is clean. The financial record is the problem: a 3.2% return on capital, 8.9% margins, revenue down 4%, and a single ~CHF 10m order deferral enough to push a quarter into a pre-tax loss. Indian debt is being retired with a promoter loan rather than a bank refinancing.',
            watch: 'What would change this: two consecutive quarters of double-digit segment margins after the Swiss-to-India transfers land, and the Japanese ADC facility contributing. Until then the pattern, not the technology, is the signal.',
        },
        {
            company: 'Windlas Biotech',
            stance: 'SCALEUP',
            what: 'Domestic solid-dosage contract manufacturer for Indian pharma brands, deliberately outside the US market.',
            view: 'An unusually honest small company. It has explicitly chosen not to chase US approvals, which caps the multiple and removes the tail risk that has damaged larger peers. Core CDMO grew 29% against 3.4% industry volume growth — that is share gain, not market. Capex is finished, free cash flow is coming through as buybacks and dividends, and management refuses to give guidance while delivering 14 record quarters.',
            watch: 'Adjusted margins are structurally capped around 13-14%, the codeine syrup ban left a hole in trade generics that will take several quarters to refill, and Plant 6 is not built to US or EU standards. Reliable compounding, low ceiling.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            'If I were putting money into this sector today rather than admiring it, I would own **Gland Pharma** first and size it largest. It is the only name on the list where the quality argument and the price argument point the same way: 42x for a business growing 20%, earning 15% on capital at 28% margins, with over ₹3,000cr of net cash, contracted revenue visible to CY29, sterile capacity pointed straight at the GLP-1 shortage, and — almost by accident — European manufacturing that turns the tariff schedule from a threat into an advantage. Everywhere else on this list I have to choose between the business and the entry price. Here I do not.',
            'I would own **Neuland** second. The mix shift to custom manufacturing has already happened rather than being promised, the peptide facility was booked before it was validated, and the working capital cycle collapsing from 137 days to 84 is the kind of unglamorous detail that tells you the operator is real. Three molecules carrying commercial revenue is a genuine risk and the reason it is a second position rather than a first.',
            '**Anthem** is the best business here and I would want it — but not at 90x with two of its three units running half empty. The thing I would wait for is utilisation, not price: once Units 2 and 3 are absorbing their fixed costs and Unit 4 has customers attached, the multiple takes care of itself. **Sai Life** is the same argument with less patience required from the company and more from me — a superb franchise that has to grow into 95x while its peptide plant sits two years out. Both are watchlist names where I would rather pay 20% more after a bad quarter than pay this now.',
            'I would **not** own the expensive-and-unprofitable trio — Onesource at 691x, Cohance at 161x, Dishman at 150x, all earning under 6% on capital. Not because the stories are wrong. Onesource in particular may well hit its FY28 target and look cheap in hindsight. But when the price already assumes flawless execution and the balance sheet or the regulator can force a delay, you are underwriting the timetable rather than the business, and this industry misses timetables for entirely innocent reasons. If Cohance prints one clean quarter with margins back near the mid-teens, I will happily pay more for the certainty.',
            '**Piramal** is the one I keep coming back to and keep not buying. Everything operational is going right — 19% CDMO growth, 400bps of margin, an unmatched compliance record, US plants that have quietly become an asset. The 3.6x leverage is what stops me, because it means the recovery has to keep working for two more years without interruption. It is the highest-quality cheap thing here and a genuinely reasonable place to be wrong.',
            'For exposure without paying for the narrative, **Akums** is the honest answer: dominant domestically, zero debt, ₹1,616cr of cash, a European contract to 2032, at 38x. Just be clear that you are buying a well-run manufacturing business at a fair price, not a China+1 growth story.',
            'The thing that would change my mind on the whole sector is capacity. Sai, Anthem, Gland, Neuland and Aarti are all building simultaneously into the same thesis, and if the "reset year" turns out to be a real slowdown rather than deferred orders, depreciation arrives before revenue across the board and the premium tier de-rates together. That would be uncomfortable and it would also be the best buying opportunity this sector has offered in years. **I would rather own less of it now and have cash available for that.**',
        ],
        bottomLine:
            'Gland for size, Neuland alongside it, Anthem and Sai on the watchlist until the price does some of the work. Nothing at 150x on a 3% return on capital, however good the chemistry.',
    },

    sources: [
        {
            label: 'India CDMO faces a "reset" year as global pharma shifts to specialisation — Business Today',
            url: 'https://www.businesstoday.in/industry/pharma/story/indias-cdmo-sector-faces-reset-year-as-global-pharma-shifts-focus-to-specialisation-499933-2025-10-28',
        },
        {
            label: 'WuXi AppTec added to Pentagon 1260H list, facing BIOSECURE ban — Fierce Pharma',
            url: 'https://www.fiercepharma.com/pharma/wuxi-apptec-lands-us-government-list-companies-china-military-ties',
        },
        {
            label: 'WuXi AppTec\'s 1260H listing brings the BIOSECURE Act back to centre stage — FDA Law Blog',
            url: 'https://www.thefdalawblog.com/2026/06/wuxi-apptecs-1260h-listing-brings-the-biosecure-act-back-to-center-stage/',
        },
        {
            label: 'Section 232 tariffs on pharmaceutical imports, tiered rates from July 2026 — Crowell & Moring',
            url: 'https://www.crowell.com/en/insights/client-alerts/trump-administration-imposes-section-232-tariffs-on-patented-pharmaceutical-imports-tiered-rate-structure-takes-effect-beginning-july-31-2026',
        },
        {
            label: 'US proposal to tariff generic medicines could impact India — Business Standard',
            url: 'https://www.business-standard.com/industry/news/us-proposal-to-impose-tariffs-on-generic-medicines-could-impact-india-gtri-126072200704_1.html',
        },
        {
            label: 'GLP-1 rush exposes capacity crunch at India\'s CDMOs — Business Standard',
            url: 'https://www.business-standard.com/industry/news/glp-1-boom-exposes-capacity-crunch-at-india-cdmos-126062800353_1.html',
        },
        {
            label: 'Biopharma funding to see a "continued, albeit disciplined" recovery in 2026 — Fierce Biotech',
            url: 'https://www.fiercebiotech.com/biotech/biopharma-funding-experience-continued-albeit-disciplined-recovery-2026-pitchbook',
        },
        {
            label: 'CDMO capex vs valuation: where the market is pricing execution risk',
            url: 'https://compoundingai.substack.com/p/cdmo-capex-vs-valuation-where-the',
        },
    ],
};
