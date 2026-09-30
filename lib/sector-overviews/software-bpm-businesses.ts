import { BusinessProfile, OverviewSection } from './types';
import { softwareCharts } from './card-data/software';

// Tab 2 of the Software note, BPM (business process management) group: what each company
// actually does. Revenue totals are the filed consolidated figures (Screener). Segment,
// client and geography numbers come from each company's latest presentations, calls and
// annual reports; where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, ranked as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures from Screener; splits are from each company's latest call, presentation or annual report. These are outsourcing businesses with no single raw material with a price index, so there is no cost-versus-input chart: their real cost driver is staff (wages and headcount), Indian wage rules, and the rupee, since the two healthcare specialists bill entirely in dollars while paying staff in rupees.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Four outsourcing companies that do office and administrative work for other businesses, in two groups with very different economics.",
        ],
        points: [
            {
                label: 'US healthcare outsourcing',
                text: "Sagility works for US health insurers (payers): processing claims, enrolling members and reviewing whether treatments should be paid for. Inventurus Knowledge Solutions (IKS) works for US hospitals and doctor groups (providers): billing patients and insurers, coding medical records and chasing payment, and was paid mostly a share of what it collects, before buying TruBridge, a similarly sized rural-hospital records and billing company, in mid-2026. **Both sell skilled, regulated work to US healthcare clients and earn the richest margins in this group, 24–35%.**",
            },
            {
                label: 'Mixed Indian and Western back-office outsourcing',
                text: "Datamatics processes publishing content for the world's largest publishers, plus finance, document and IT-project work, mostly for US and European clients. Digitide runs call centres, loan collections, back-office work and payroll mostly for Indian banks and insurers, plus a small insurance-software business. **Datamatics earns more because publishing is a specialist, higher-value niche; Digitide's Indian call-centre and collections work is a lower-margin, more commoditised business being squeezed by new wage rules.**",
            },
        ],
    },
    {
        heading: 'Three ways of earning',
        body: [
            "How each business is paid decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A share of what is collected (outcome pricing)**', 'Inventurus Knowledge Solutions', 'A percentage of the client’s collections or savings, so productivity gains stay with the outsourcer', 'Paid as claims and bills are collected; can lag if collections are slow, but incentives are aligned with the client'],
                    ['**A price per claim, per seat or per transaction**', 'Sagility, Digitide', 'A fixed unit price for processing, largely unrelated to how good the outcome is', 'Paid monthly in arrears, so the business carries about two to three months of revenue as receivables'],
                    ['**Project and licence fees, plus a stake in its own products**', 'Datamatics', 'Fees per project or per user, plus a cut of its own software products (TruAI, KAiBRE)', 'Commercial work pays in weeks to months; government fare-collection contracts pay slowly, in deferred annual instalments'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Sagility',
        inShort: ["**A US-healthcare-only outsourcer** processing claims, enrolment, member service and clinical reviews for American health insurers, from India and the Philippines.", "**Good:** it grew about 15% organically, twice its industry, while holding a 24–25% margin. **Watch:** its top three clients are 60% of revenue, its private-equity owner EQT has been selling down its stake, and new wage rules costing about 1.2 points of margin a year are offset only by the weak rupee.", "**Verdict: own.** Taking share at a fair price; add on any fall caused by EQT's share sales."],
        tagline: "A US-healthcare-only outsourcer, carved out of Hinduja Global Solutions, processing insurance claims, enrolment, member service and clinical reviews for American health insurers.",
        revenue: '₹7,193cr (FY26, consolidated)',
        products: [
            { name: 'Payer operations', text: "Processing claims, enrolling members, running member and provider service lines, and clinical reviews (utilisation and care management) for US health insurers; about 90% of revenue." },
            { name: 'Provider services', text: "Revenue-cycle management (billing and collections) for US hospital and doctor groups; about 10% of revenue." },
            { name: 'Quality reporting (CareSeed)', text: "A HEDIS quality-reporting platform bought in June 2026, serving 30 smaller insurers, used to cross-sell into Sagility's larger client base." },
        ],
        revenueText: "**Payers were 89.6% of Q1 FY27 revenue and providers 10.4%.** All revenue is billed in the US: Sagility serves seven of the ten largest US health insurers, and its largest client groups have stayed for an average of 18 years.",
        mixes: [
            { caption: 'Revenue by client type, Q1 FY27', parts: [{ label: 'Payers (insurers)', share: 90 }, { label: 'Providers (hospitals, doctors)', share: 10 }] },
        ],
        customers: ["**US health insurers**, including seven of the ten largest, together about 90% of revenue.", "**Its top three clients are 59.9% of FY26 revenue and its top ten 83.9%**, a level of concentration the company is slowly reducing."],
        difficulty: { level: 'High', text: "Processing insurance claims and clinical reviews correctly matters because mistakes bring penalties from the US Medicare regulator (CMS); this needs trained staff, including nurses, and years of a client's specific rules and systems." },
        moat: "Sagility's largest client relationships average 18 years, and once it is running a payer's claims and clinical processes, moving that work elsewhere is costly and risky for the client. The weakness: pricing runs the wrong way — management says there is 'more pricing pressure than any price increases', with about 2% of revenue a year given back through automation.",
        salesDrivers: ["**US healthcare cost growth**, which keeps insurers' administrative workloads rising faster than they can staff for.", "**Taking share**: organic growth of about 15% against an industry growing 7–8%, and revenue from its top five clients up 16.7% in FY26.", "**Small acquisitions**: CareSeed (closed June 2026) and a second clinical deal in progress, used to cross-sell into its large client base.", "**Wage and AI pressure on margins**: new Indian minimum-wage rules cost about 1.2 points of margin a year, offset for now by a weaker rupee, while AI-led price deflation is expected to rise toward 2% a year."],
        inputs: "**Trained staff, including nurses and clinical reviewers**, are almost the whole cost base; staff was 63% of revenue in FY26 and hardware or licences bought were negligible.",
        costEffect: "**Mostly insulated from materials, entirely driven by staff costs, wages and the rupee.** There is no materials price index for claims processing; the margin moves with wage rules, where staff are based, and how much of the work is automated. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 6 points (25% to 19%). **What happened:** new Karnataka and Telangana minimum-wage rules will cost about 1.2 points of margin a year, but the adjusted margin still held near 24–25% because the rupee weakened enough to offset it — a gift that would reverse if the rupee recovered.",
        competitors: [{ name: 'R1 RCM, Optum (UnitedHealth), Firstsource', note: "US and Indian rivals in health-insurance and provider outsourcing, though none is named on Sagility's calls." }, { name: "Insurers' own in-house teams and AI note-taking or claims tools", note: "The longer-term threat to hour- and transaction-based pricing." }],
        position: "**One of the largest India-based outsourcers focused only on US healthcare payers**, serving seven of the ten biggest US insurers.",
        money: "Net debt was ₹207cr on Screener (mostly a promoter loan due to be repaid within FY27; the company's own figure is ₹111cr). ₹6,039cr of goodwill sits against ₹9,660cr of equity. Promoters (EQT, through Sagility B.V.) hold **50.95%**, down sharply from 82.39% at the end of 2024 as EQT has sold down its stake.",
        watch: ["Q2 adjusted margin at 24% or better with the full wage hit included, and what a stronger rupee would do to it.", "Any change at a top-three client.", "The size and timing of EQT's next share sale.", "The ₹92.6cr of new tax demands, not provided for."],
        charts: softwareCharts['Sagility'],
    },
    {
        company: 'Inventurus Knowledge Solutions',
        inShort: ["**Takes over billing, coding, clinical paperwork and approvals for about 600 US hospital and doctor groups**, paid mostly as a share of what it collects for them.", "**Good:** the core business grew 12% in Q1 while staff grew only 5%, at about a 35% margin. **Watch:** it just bought TruBridge, a rural-hospital software firm nearly its own size, mostly with debt, and cut its revenue base by $40m within a month. On filed figures it turns only about 56% of operating profit into cash.", "**Verdict: follow.** The best business here, priced for its biggest bet; buy when TruBridge's margin starts to rise."],
        tagline: "IKS Health takes over billing, coding, clinical documentation and prior approvals for US hospital and doctor groups, paid mostly as a share of what it collects for them, and has just bought a rural-hospital records and billing company of similar size.",
        revenue: '₹3,194cr (FY26, consolidated)',
        products: [
            { name: 'Revenue-cycle management', text: "Billing and chasing payment from insurers on behalf of US hospital and doctor groups, paid mostly as a share of what it collects." },
            { name: 'Medical coding and clinical documentation', text: "Coding patient records correctly for billing and compliance, including AI-assisted scribe tools (Scribble) that write clinical notes." },
            { name: 'Prior authorisation and patient access', text: "Getting insurer approval before treatment, and tools such as MyCare Hub that manage patients' path through the system." },
            { name: 'TruBridge (from July 2026)', text: "A US electronic-health-record and billing system used by about 700 of America's roughly 2,200 rural hospitals, bought for up to $565m, mostly with debt." },
        ],
        revenueText: "**Legacy IKS runs at about $388m a year and TruBridge, added in July 2026, at about $300m a year (cut from an initial $340m within a month of closing)**, giving a combined business of about $688m. About 90% of revenue is repeat business from existing clients, and IKS's top ten clients were 37% of FY26 revenue.",
        mixes: [
            { caption: 'Annualised revenue after the TruBridge deal, FY27', parts: [{ label: 'Legacy IKS', share: 56 }, { label: 'TruBridge', share: 44 }] },
        ],
        customers: ["**About 600 US hospital and doctor groups**, mostly large enterprises, with the top ten clients about 37% of FY26 revenue.", "**TruBridge's roughly 700 rural-hospital clients**, a new set IKS is now trying to sell its own services into."],
        difficulty: { level: 'High', text: "Billing and coding for US healthcare needs deep knowledge of insurer rules and compliance requirements, where mistakes cost clients money and bring regulatory risk; IKS is paid on outcomes, so it also needs to be genuinely faster and more accurate than a client's own staff." },
        moat: "IKS is paid mostly as a share of what it collects for clients rather than by the hour, so productivity gains from automation stay with IKS instead of flowing to the client — the reason its margin has risen from 29% to 34% in two years. Around 90% of revenue is repeat business, and its top-ten clients stay an average of nearly six years. The weakness: about 30 AI point-solution start-ups, including one IKS itself has invested in, are trying to unbundle pieces of this work.",
        salesDrivers: ["**US provider administrative spending**, over $260bn and growing about 8% a year, of which the outsourced portion (about $35bn) is growing about 12% a year.", "**Growing faster than headcount**: Q1 revenue grew 12% in constant currency while staff grew only 4.8%, the reason its margin keeps rising.", "**Cross-selling TruBridge's roughly 700 rural hospitals** IKS's own billing and coding services, and lifting TruBridge's margin from 22–23% toward the low 30s.", "**A 'True North' target of at least ₹3,000cr of EBITDA by FY30**, about 30% a year of growth from around ₹1,000cr today, with net debt back near zero.", "**AI products** (Scribble note-taking, MyCare Hub, ARAI) meant to defend pricing rather than add much new revenue yet."],
        inputs: "**Trained billing, coding and clinical staff** are almost the entire cost base; staff was 51% of revenue in FY26 and delivery and running costs a further 8%, with almost no hardware or materials cost.",
        costEffect: "**Mostly insulated from materials, and better protected on staff costs than most peers because it is paid on outcomes.** There is no materials price index for billing and coding; the margin depends on staff productivity and how much of revenue is automated. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 5 points (34% to 29%). **What happened:** rather than costs rising, IKS's margin rose from 29% to 34% over two years because revenue grew faster than headcount as work moved offshore and onto its own technology — the opposite of the usual story, though this reverses to 26–27% at first as TruBridge's lower-margin business is added in.",
        competitors: [{ name: 'About 30 AI point-solution start-ups, including Abridge', note: "Each try to automate one piece of billing, coding or documentation; IKS holds a stake in Abridge itself." }, { name: 'Epic and other electronic-health-record vendors', note: "Building native AI tools that could reduce the need for an outside vendor." }],
        position: "**Ranked first in AI-driven revenue-cycle management by Black Book**, and near the top of KLAS's ambulatory rankings, among the largest India-based US-provider outsourcers.",
        money: "Net debt fell from ₹563cr to ₹252cr in FY26 from its own cash flow, before rising again for the debt-funded TruBridge purchase (about three times EBITDA at closing). No dividend is paid; cash goes to deleveraging. Promoters hold **63.72%**, unchanged over the past two years.",
        watch: ["TruBridge's margin rising from 22–23%.", "Core constant-currency growth staying at 12% or more.", "Net debt falling toward 2x EBITDA by FY28.", "Operating cash keeping pace with profit."],
        charts: softwareCharts['Inventurus Knowledge Solutions'],
    },
    {
        company: 'Datamatic Global Ser',
        inShort: ["**A family-run mix of publishing services, finance and document processing, IT projects and call centres**, serving nine of the ten largest global publishers.", "**Good:** the margin reached a record 18.7% in FY26 and about 20% in Q1, with about ₹500cr of net cash. **Watch:** organic growth is guided at only about 8%, two of its three divisions shrank in FY26, and a promised order-book figure has still not been given.", "**Verdict: follow.** A steadier, richer business that grows slowly; follow it for a better price or proof its AI products earn real revenue."],
        tagline: "A Kanodia-family-run mix of publishing-services technology, finance and document processing, IT projects and call centres, serving mostly US and European clients.",
        revenue: '₹1,987cr (FY26, consolidated)',
        products: [
            { name: 'Digital Operations', text: "Publishing content services (through Lumina Datamatics and TNQTech) for nine of the ten largest global publishers, plus finance, accounting and document processing; 58% of Q1 FY27 revenue and the highest-margin division." },
            { name: 'Digital Technologies', text: "App development, cloud and Salesforce work (through Dextara), automated fare-collection systems for transport agencies, and AI products such as TruAI (insurance underwriting) and KAiBRE (rewriting old software code); 30% of Q1 FY27 revenue." },
            { name: 'Digital Experiences', text: "Call centres in India, the Philippines and the US; 12% of Q1 FY27 revenue and the weakest division, losing work to clients' own in-house teams." },
        ],
        revenueText: "**Digital Operations (publishing, finance and documents) was 58% of Q1 FY27 revenue**, Digital Technologies 30% and Digital Experiences 12%. By geography, the **US was 54% of FY26 revenue**, the UK and Europe 22% and India 16%.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Digital Operations', share: 58 }, { label: 'Digital Technologies', share: 30 }, { label: 'Digital Experiences', share: 12 }] },
        ],
        customers: ["**Nine of the ten largest global publishers**, through its Lumina Datamatics and TNQTech publishing units.", "**US and European banks, retailers and other companies** for finance, document and IT-project work; top five clients were 30% of Q1 revenue, rising from 26% a quarter earlier."],
        difficulty: { level: 'Medium', text: "Publishing-content and document-processing work needs specialist tools and trained staff but is not safety-critical or heavily regulated; the IT-project and call-centre work faces more direct competition and lower barriers to entry." },
        moat: "It serves nine of the ten largest publishers in the world and ranks among the top digital-content outsourcers, a scale advantage few rivals match in that niche. The weakness: outside publishing, its call-centre and IT-project work faces clients moving work to their own in-house teams (GCCs), which already shrank its call-centre division in FY26.",
        salesDrivers: ["**Publishing and finance demand**, the steadiest and highest-margin part of the business, lifted further by TNQTech (bought in FY25, earning about 24–25%).", "**AI products becoming real revenue**: TruAI (insurance underwriting, first customer SBI Life) and KAiBRE (legacy code modernisation); about 60% of FY27 deals won so far are described as AI-led.", "**A new goal of about ₹3,000cr of revenue within about three years**, from around ₹2,000cr today, which needs acquisitions on top of about 8% organic growth.", "**Clients moving work to their own in-house centres (GCCs)**, the main reason its call-centre and IT-project divisions have shrunk."],
        inputs: "**Trained staff and, in publishing, specialist software tools** are the main costs; staff was 62% of revenue in FY26 and delivery and running costs a further 10%.",
        costEffect: "**Mostly insulated from materials, driven by staff costs and wage rounds.** There is no materials price index for publishing and document work; the margin depends on staff costs and how much of revenue is higher-margin publishing versus lower-margin call-centre work. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 6 points (19% to 13%). **What happened:** April 2026 wage rises cut the margin from 21.3% to 19.7% in one quarter, but the underlying trend has still been upward — the FY26 margin of 18.7% was a record, up from 13.3% the year before, mostly because the newly bought, higher-margin TNQTech business changed the mix.",
        competitors: [{ name: "Other publishing-services and BPM outsourcers", note: "Compete for content and document work, though Datamatics claims scale in serving the largest publishers." }, { name: "Clients' own in-house teams (GCCs)", note: "The main competitor named by management, especially in call centres and IT projects." }],
        position: "**Among the top digital-content outsourcers for global publishers**, with a smaller, more competitive position in general IT and call-centre work.",
        money: "Net cash was about ₹710cr at June 2026, before paying roughly ₹200cr in July for the remaining 20% of TNQTech, leaving about ₹500cr. It carries a ₹150cr acquisition loan for TNQTech and holds ICRA's A+/Stable rating. Promoters (the Kanodia family) hold **66.33%**, essentially unchanged over three years.",
        watch: ["A disclosed order book, promised but not yet given.", "Call-centre revenue growing again.", "TruAI and KAiBRE producing named, growing revenue."],
        charts: softwareCharts['Datamatic Global Ser'],
    },
    {
        company: 'Digitide Solutions',
        inShort: ["**India's largest domestic outsourcer**, running call centres, loan collections, back offices and payroll for Indian banks and insurers, plus insurance software.", "**Bad:** the margin has slid from about 15% before its 2025 demerger to 9.9%, profit is close to nil, and the CEO who set the FY27 plan resigned twelve days after presenting it. Since then bookings fell from ₹620cr to ₹205cr, revenue guidance was withdrawn, and the revenue chief and CFO have moved on.", "**Verdict: pass.** Shrinking margins and a new team; pass until the promised margin recovery shows up."],
        tagline: "India's largest domestic outsourcer of call centres, loan collections, back-office work and payroll, plus insurance software, demerged from Quess Corp in 2025.",
        revenue: '₹3,080cr (FY26, consolidated)',
        products: [
            { name: 'Business process management (BPM)', text: "Call centres, loan collections (about 15,000 field staff covering 95% of India's postal codes), back-office processing and payroll/HR outsourcing for Indian banks, insurers and other companies; about 69% of Q1 FY27 revenue." },
            { name: 'Tech & Digital', text: "Insurance IT platforms, cloud and AI services, and payroll software-as-a-service; about 31% of Q1 FY27 revenue and the faster-growing division, though still low-margin." },
            { name: 'Alldigi Tech (73% owned, separately listed)', text: "International customer-lifecycle-management and payroll outsourcing, and a small but growing US healthcare billing business of about $25m." },
        ],
        revenueText: "**Business process management was 69% of Q1 FY27 revenue and Tech & Digital 31%.** By client industry, **banks and insurers (BFSI) were 51% of revenue** and healthcare 17%. **International clients were 38% of revenue**, mostly through Alldigi.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Business process management', share: 69 }, { label: 'Tech & Digital', share: 31 }] },
        ],
        customers: ["**Indian banks and insurers**, about 51% of revenue, cost-focused and pushing back on repricing.", "**300-plus customers**, with the top ten now 37.4% of revenue, a concentration that has been rising rather than falling."],
        difficulty: { level: 'Low', text: "Call-centre, collections and back-office work needs scale and process discipline rather than deep technical skill, which is why it is the first work clients try to automate or bring in-house, and why margins here are thin." },
        moat: "It is India's largest India-to-India BPM operator, with about 15,000 collections staff reaching 95% of the country's postal codes, and about 70% of revenue is repeat business. The weakness: scale has not brought pricing power — its own segment margin fell from 16.3% to 13.5% in a single quarter, and it is negotiating new wage costs with clients rather than passing them straight through.",
        salesDrivers: ["**Repricing and exiting low-margin accounts**: the new CEO is walking away from 'margin-dilutive' India BPM work rather than chasing revenue.", "**US healthcare billing**, a small (about $25m) but growing business targeted at 12–15% of revenue by FY31.", "**AI overlaid on delivery**: headcount is falling as bots take on more interactions (about 80–85% containment), which should eventually help margins but is shrinking revenue for now.", "**A leadership team that has almost entirely turned over** since May 2026: the CEO, chief revenue officer and CFO have all left or are leaving."],
        inputs: "**Call-centre, collections and back-office staff** are almost the whole cost base; staff was 74% of revenue in FY26, the highest share in this group, alongside sizeable office-lease costs that sit below the operating-profit line.",
        costEffect: "**Not protected: new wage costs are being negotiated with clients, not simply passed on, and office rent eats most of what is left.** There is no materials price index for BPM work; the margin depends on staff costs, seat pricing and lease costs. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 7 points (11% to 4%). **What happened:** new labour-code and minimum-wage rules added about ₹10cr a quarter in costs from April 2026, and the margin slid from about 15% before the 2025 demerger to 9.9%, with roughly ₹175–180cr a year of office rent absorbing most of the gap between EBITDA and actual operating profit.",
        competitors: [{ name: "Other Indian BPM and collections firms", note: "Compete for the same bank and insurer outsourcing contracts; none named by management." }, { name: "Clients' own in-house call centres and collections teams", note: "The main threat as banks and insurers look to cut costs." }],
        position: "**India's largest domestic (India-to-India) BPM operator**, but scale here has not translated into a strong margin.",
        money: "Net cash was ₹182cr at March 2026 on the company's own count, but Screener shows net debt of about ₹272cr once lease liabilities are counted. No dividend is paid. Promoters (the Ajit Isaac group) hold **57.33%**, little changed over the past year.",
        watch: ["The promised 2-point margin gain showing up in Q2–Q3.", "Quarterly bookings back above ₹500cr.", "Wage-code costs being passed through to clients.", "A settled management team, and the business outside Alldigi making money."],
        charts: softwareCharts['Digitide Solutions'],
    },
];

export const softwareBpmBusinesses = { intro, profiles };
