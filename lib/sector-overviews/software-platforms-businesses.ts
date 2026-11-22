import { BusinessProfile, OverviewSection } from './types';
import { softwareCharts } from './card-data/software';

// Tab 2 of the Software · Messaging, adtech and AI infrastructure note: what each company actually does.
// Revenue totals are the filed figures (Screener). Segment, region, customer and order figures
// come from the companies' latest presentations, calls, annual reports and rating reports;
// where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Netweb and E2E standalone, the others consolidated); splits are from each company's latest call, presentation or annual report. The cost bars use four labels: **hardware, licences and goods bought**; **delivery, subcontract and running costs**; **staff**; and **other costs**. There is no cost-versus-input chart, because no official price index tracks what these companies really buy: telecom companies' SMS charges and Meta's and Google's fees per message (Tanla, Route Mobile), ad space and user data bought in auctions (Affle, Mobavenue), GPUs, memory and servers (Netweb, E2E), and technicians' pay and project equipment (Black Box). Each card says instead what moved the margin.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Seven companies that sell volume and capacity rather than programmers' hours, in three groups.",
        ],
        points: [
            {
                label: 'Business messaging — SMS, WhatsApp and RCS for banks and apps',
                text: "Tanla and Route Mobile send the OTPs, bank alerts, delivery updates and marketing messages that companies push to customers' phones. They buy each message from a telecom company or from Meta (WhatsApp) and Google (RCS), add their software and direct connections, and resell it. **Telecom companies and Meta take about four-fifths of each rupee**, so gross margins are about 20% and operating margins 9–17%; volume grows every year, but the price per message falls. Both are adding higher-margin software, such as anti-spam and firewall services for telecom companies, which is still under a tenth of revenue.",
            },
            {
                label: 'Mobile advertising paid per result',
                text: "Affle and the much smaller Mobavenue place ads inside apps, on connected TVs and on phones, but are paid only when a user installs an app, signs up or buys something. They buy the ad space and user data in real-time auctions and keep the spread: **about 60–63% of revenue goes on ad space and data**, leaving gross margins of 37–40% and operating margins of 20–23%. Their skill is predicting which users will act; Google, Meta and Apple's privacy rules limit how much of the spread they keep.",
            },
            {
                label: 'AI computers, GPU cloud and data-centre build-out',
                text: "Three ways to earn from the AI and data-centre boom. **Netweb** designs and builds GPU servers and supercomputers in Faridabad; about 79% of its sales is chips and parts bought in, so it keeps 13–15%. **E2E** owns Nvidia GPUs and rents them by the hour; its operating margin is 50–75%, but depreciation of the GPUs takes about half of that. **Black Box** cables, fits out and maintains data centres and networks, mostly in the US; its costs are split between equipment and technicians, and it keeps about 9%.",
            },
        ],
    },
    {
        heading: 'Five ways of earning',
        body: [
            "How each business earns decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A charge per message sent**', 'Tanla, Route Mobile', 'A price per SMS, WhatsApp or RCS message, keeping about 20% after telecom and Meta charges; software sold per subscriber per month', 'Clients pay in about 75–80 days; little capital needed, so most profit turns into cash'],
                    ['**A fee per result delivered**', 'Affle, Mobavenue', 'A fixed price per install, sign-up or purchase (about ₹60 at Affle, ₹50 at Mobavenue), keeping 37–40% after ad space and data', 'Affle collects in about 50 days; Mobavenue carries about 146 days of receivables and unbilled revenue'],
                    ['**A price per system sold**', 'Netweb', 'Order-by-order prices for servers and supercomputers, keeping 13–15% after bought-in chips', 'Slow: stock of 110 days and a 96-day cash cycle in June; growth eats working capital'],
                    ['**Rent per GPU-hour**', 'E2E Networks', 'Hourly rent, or prepaid 6–24-month contracts, on GPUs it owns', 'Customers pay quickly (about 25 days), but each new GPU batch is paid for up front, now partly with debt'],
                    ['**Project and maintenance fees**', 'Black Box', 'Cost-plus or fixed prices for data-centre and network projects, plus recurring maintenance contracts', 'Slow: large March billing, receivables of 67 days and ₹354cr more sold to banks'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Tanla Platforms',
        inShort: ["**India's largest business-messaging company by its own estimate**, sending bank OTPs, delivery alerts and marketing messages by SMS, WhatsApp and RCS for more than 3,200 customers, including 8 of the top 10 banks.", "**Good:** revenue up 18% in Q1, 74% of operating profit turned into cash over five years and ₹1,036cr of net cash (Screener). **Bad:** telecom companies and Meta set the price of each message, so the operating margin has slid from 22% in FY22 to 16%, and management keeps missing its own targets, including a deal date it ‘committed’ to. Its secretarial auditor recorded insider-trading breaches by staff.", "**Verdict: follow.** The price asks for less growth than I expect, but I want to see the ValueFirst deal done and the platforms growing again first."],
        tagline: "India's largest business-messaging (CPaaS) company, with a small, high-margin software arm that sells anti-spam and anti-phishing tools to telecom companies and banks.",
        revenue: '₹4,418cr (FY26, consolidated)',
        products: [
            { name: 'Enterprise messaging', text: "Sends OTPs, UPI and bank alerts, delivery updates and marketing messages over SMS, WhatsApp, Google's RCS and voice. It earned ₹1,123cr in Q1 FY27 (91.6% of revenue, up 18.4%) at about 20% gross margin." },
            { name: 'WhatsApp and RCS', text: "The app channels were about 31–32% of revenue in the nine months to December 2025, a run-rate near ₹1,000cr, more than 80% of it WhatsApp. SMS was about 60%, down from 68% in FY25." },
            { name: 'Wisely.ai and Wisely ATP', text: "Anti-spam software for telecom companies (live at Indonesia's Indosat for 100m+ users) and anti-phishing software for banks, including Bandhan Bank and Bank of Baroda. Billed per subscriber per month on contracts of five years or more." },
            { name: 'Trubloq and other platforms', text: "Runs the blockchain registry the regulator TRAI uses to approve senders and message templates, plus RCS software for telecoms. Digital Platforms together earned ₹103cr in Q1 at about 98.5% gross margin." },
        ],
        revenueText: "**Enterprise messaging was 91.6% of Q1 FY27 revenue** and Digital Platforms 8.4%, but platforms made **about 31% of gross profit** because almost nothing is bought in. Of the ₹186cr of extra revenue in Q1, ₹120cr came from existing customers and ₹66cr from customers won in the last year. The company does not split revenue by country.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company)', parts: [{ label: 'Enterprise messaging', share: 91.6 }, { label: 'Digital platforms', share: 8.4 }] },
            { caption: 'Gross profit by segment, Q1 FY27 (company, approximate)', parts: [{ label: 'Enterprise messaging', share: 69 }, { label: 'Digital platforms', share: 31 }] },
        ],
        customers: ["**Banks and payment apps**: 8 of the top 10 Indian banks, plus the Reserve Bank of India and Bank of Baroda as new wins, for OTPs, transaction alerts and UPI messages.", "**E-commerce, delivery and consumer brands**, including a large e-commerce client where Tanla's share of its messaging passed 50%. The top ~250 customers give 75–80% of enterprise revenue; a long tail of 50,000–60,000 firms gives the rest.", "**Telecom companies** buy the platforms. 353 customers pay more than ₹1cr a year (326 a year ago) and 21 pay more than ₹50cr (17)."],
        difficulty: { level: 'Medium', text: "Sending one message is easy. Sending billions a month for India's biggest banks, with direct telecom links, regulatory registration and near-perfect delivery, takes years of integration (10,000+ APIs deployed). The anti-spam and registry software is harder to copy but has few buyers." },
        moat: "Scale (30–35% share by its own estimate) and years of integration with banks keep customers: 13 of last year's top 20 are still in the top 20 and the rest in the top 30. The weakness is price: telecom companies and Meta set what each message costs, so the core business keeps only about a fifth of each rupee.",
        salesDrivers: ["**Digital payments and online shopping**: every UPI payment, login and delivery creates OTPs and alerts. Management puts industry growth at 8–10% a year and expects Tanla to grow 'definitely more than 10%'.", "**Price per message is falling**: Meta is moving business WhatsApp traffic from promotional to 'utility' messages that cost about a tenth as much, and SMS prices drift down. Volume has to grow faster than price falls.", "**A bigger share of big clients**: 21 customers now pay more than ₹50cr a year, up from 17, and the ₹10–50cr group grew 44%. Losing real-money gaming clients to the 2025 ban hurt FY26.", "**Platforms**: Wisely.ai and ATP deals with telecoms and banks are the route to a higher margin, but platform revenue (₹395cr in FY26) grew only in single digits and was flat in Q1.", "**ValueFirst Middle East**: the purchase signed on 28 July, due to complete by Q2, would add ₹150–170cr of revenue at about 22% gross margin."],
        inputs: "**Telecom companies' charges for each SMS, and Meta's and Google's fees for each WhatsApp and RCS message**, are the main cost: delivery, subcontract and running costs were 74% of sales in FY26. Staff (about 1,100 people) were 6% and other costs 4%.",
        costEffect: "**Partly passed on.** Most bank and e-commerce contracts are priced per message, so when a telecom company or Meta raises its charge Tanla usually raises its price; but big clients bargain hard, and the spread stays at about 20% gross margin in enterprise messaging. **Rule of thumb:** a 10% rise in message costs not passed on would cut the margin by about 7 points (16% to 9%). **What happened:** there is no official price index for message charges. The filed operating margin fell from 22% in FY22 to 16% in FY26 as cheaper WhatsApp and SMS prices, lost gaming clients and lower WhatsApp incentives squeezed the spread. It has held at 16–17% for five quarters, and company gross margin rose to 26.6% in Q1 from 25.0% a year earlier on customer mix.",
        competitors: [{ name: 'Route Mobile', note: 'The other large listed Indian messaging company, 75% owned by Proximus; stronger in international traffic, weaker in WhatsApp and RCS (about 8% of its revenue).' }, { name: 'Global messaging firms (Sinch, Infobip, Gupshup)', note: "Compete for WhatsApp and RCS business with Indian brands; Tanla was named Meta's and Google's 'partner of the year'." }],
        position: "**India's largest business-messaging company, with about 30–35% of the market by its own estimate**, serving 8 of the top 10 banks. Gartner rates it a 'Visionary' in CPaaS for 2026.",
        money: "Net cash of **₹1,036cr** (Screener). The company counts ₹1,197cr of cash and liquid investments in June, against a market value of {mcap:Tanla Platforms|₹6,507cr}, with no debt beyond about ₹50cr of leases. Capex is ₹100–150cr a year, mostly capitalised platform development, and ValueFirst Middle East costs ₹148.5cr, including ₹136.5cr of its liabilities taken on. It has returned ₹1,340cr to shareholders over eight years through dividends and buybacks. Promoters hold **46.2%**, up from 44.2% in Sep 2023 as buybacks shrank the share count.",
        watch: ["ValueFirst Middle East completed by Q2.", "Platform revenue growing again after a flat Q1.", "Operating margin holding at 16% as WhatsApp prices change."],
        charts: softwareCharts['Tanla Platforms'],
    },
    {
        company: 'Affle 3i',
        inShort: ["**A mobile-advertising platform paid only when an ad produces a result** (an install, sign-up or purchase), serving e-commerce, fintech, gaming and healthcare apps; about 72% of revenue comes from India and emerging markets.", "**Good:** about 20% growth for 14 straight quarters at a 22–23% margin, and ₹1,393cr of net cash. **Watch:** ₹165cr of development cost was capitalised in FY26, a ₹135.8cr stake in Bobble AI is not written down (the Supreme Court stayed Bobble's insolvency proceedings on 16 October 2026, pending appeal), gross margin has slipped about two points, and ₹1,100cr of warrants to the promoter will dilute other shareholders.", "**Verdict: follow.** The best business in the group, but the price asks for a little more growth than I expect."],
        tagline: "An advertising-technology platform that sells 'converted users' to app advertisers on a pay-per-result basis, in India, emerging markets and developed markets.",
        revenue: '₹2,709cr (FY26, consolidated)',
        products: [
            { name: 'Pay-per-result ads (CPCU)', text: "Advertisers pay only when a user installs, registers, buys or deposits (cost per converted user). 120.3m conversions at about ₹60 each made ₹721cr of the ₹724cr in Q4 FY26, about 99% of revenue." },
            { name: 'In-app and connected-TV reach', text: "Places ads inside mobile apps, on connected TVs and on phones through phone-maker partnerships, and claims 4bn+ reachable devices. More than 90% of its focus is in-app and connected TV." },
            { name: 'AdColony and new devices', text: "Bought the assets of US video-ad network AdColony for $4.7m (₹44.4cr) in 2026, targeting 100,000 apps and 500m developed-market devices, and is pushing into smart TVs, cars and retail screens." },
            { name: 'Fraud filtering and data tools', text: "18 patents granted and 21 filed, including filtering out non-human traffic, which matters when advertisers pay per result." },
        ],
        revenueText: "**India and emerging markets gave 72.2% of Q1 FY27 revenue** (up 20.2%) and developed markets 27.8% (up 20.7%). **About 79% came directly from advertisers** in Q1 (74% in FY26), the rest through agencies. In India, e-commerce is the largest vertical, then fintech, healthcare and gaming; the company gives no percentages and no customer concentration.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'India and emerging markets', share: 72.2 }, { label: 'Developed markets', share: 27.8 }] },
            { caption: 'Revenue by channel, Q1 FY27 (company)', parts: [{ label: 'Direct from advertisers', share: 79 }, { label: 'Through agencies', share: 21 }] },
        ],
        customers: ["**E-commerce and quick-commerce apps**, the largest vertical in India, followed by **fintech** (payments, lending and broking apps).", "**Healthcare, hospitality and gaming apps**; real-money gaming is still recovering after India's 2025 ban.", "**Developed-market advertisers**, mostly in the US and Europe. Only about 20% of the business is priced dollar for dollar; elsewhere prices are reset to each advertiser's local return target."],
        difficulty: { level: 'High', text: "Paying per result means Affle carries the risk: it must buy ad space and data, predict which users will convert and filter out fake traffic in milliseconds, or it loses money on the spread. That needs years of data, patents and links to advertisers' own customer data." },
        moat: "Links to advertisers' own customer data and a long pay-per-result record make it harder to replace than sellers of ads by the thousand views. But it does not own the ad space it sells, Google, Meta and AI-driven ad tools are getting stronger, and the two-point fall in gross margin shows the spread is under pressure.",
        salesDrivers: ["**Advertisers' growth budgets**: annual plans run 'Diwali to Diwali' and there is no order book. Pay-per-result spend tends to be the last budget a brand cuts.", "**Volume times price**: more conversions (120.3m in Q4 FY26) at a rate 'above ₹60' that has risen over ten years.", "**Developed markets and connected TV**: spending on premium users and connected TV is lifting growth but costing gross margin; management expects a recovery after about a year.", "**Regulation and privacy**: India's gaming ban and fintech rules, and Apple's and Google's privacy changes, decide how well users can be targeted.", "**Acquisitions**: about four targets are shortlisted, with the larger deal now due 'by early 2027'. Its $1bn revenue aim needs them, and promoter warrants worth about ₹1,100cr will pay for them."],
        inputs: "**Ad space and user data bought from app publishers, phone makers, SDKs and ad exchanges** are the main cost: delivery, subcontract and running costs were 62% of sales in FY26 (inventory and data cost was 63.2% of revenue in Q1 FY27). Staff were 9% and other costs 6%. About ₹165cr of development cost was capitalised in FY26 rather than charged against profit.",
        costEffect: "**Partly protected.** Affle bids for ad space in real-time auctions but is paid a fixed price per result, so it keeps the spread only if its models find users who convert; when ad space gets dearer it can bid less or reprice, but not at once. **Rule of thumb:** a 10% rise in ad-space and data costs not passed on would cut the margin by about 6 points (23% to 17%). **What happened:** there is no price index for ad space. Gross margin fell from about 39% to about 36.8% over seven or eight quarters as Affle paid up for premium users, connected TV and developed markets, yet the filed operating margin rose from 20% in FY24 to 23% in FY26 because staff and other costs grew more slowly than revenue.",
        competitors: [{ name: 'Google and Meta', note: 'The walled gardens that take most mobile ad budgets and control most user data.' }, { name: 'AppLovin, Unity, InMobi, The Trade Desk', note: 'Much larger global ad-tech platforms; The Trade Desk sells ads by views rather than by results.' }, { name: 'Mobavenue AI Tech', note: 'A much smaller Indian rival on the same pay-per-result model.' }],
        position: "**The largest Indian-listed ad-tech platform**, ranked among the top return-on-spend partners in the Singular ROI Index 2026, with 14 straight quarters of sequential growth.",
        money: "Net cash of **₹1,393cr** (Screener), with borrowings of only ₹15cr in March, before ₹275.1cr received from promoter warrants in Q1. The promoter company is buying warrants worth about ₹1,100cr in all to fund acquisitions. Capitalised development runs at ₹165–174cr a year. No dividend or buyback. Promoters hold **54.91%**, down from 59.89% in Sep 2023.",
        watch: ["Operating cash back to 80–85% of profit by Q3, from about 41% in Q1.", "Gross margin turning up in H2 FY27.", "The size and margin of the acquisition, and whether Bobble AI is written down.", "How much the promoter warrants dilute other shareholders."],
        charts: softwareCharts['Affle 3i'],
    },
    {
        company: 'Route Mobile',
        inShort: ["**A business-messaging company with 280+ direct telecom connections and 3,100+ clients** in India, Europe, Latin America and Asia, 75% owned by Belgium's Proximus group.", "**Good:** ₹1,364cr of net cash (Screener), close to half its market value, and FY26 operating cash above operating profit. **Bad:** FY26 revenue fell 3.7%, the price per message is falling, ₹135.9cr of supplier prepayments were written off in FY26, and the Q1 margin of 9.5% missed the ~12% guide.", "**Verdict: wait.** Cheap for the cash it holds, but I want gross margin back above 22% and no more write-offs."],
        tagline: "A global business-messaging (CPaaS) company that sends OTPs, alerts and marketing messages for companies and blocks unpaid 'grey-route' SMS for mobile operators.",
        revenue: '₹4,408cr (FY26, consolidated)',
        products: [
            { name: 'Enterprise messaging (SMS)', text: "OTPs, alerts and marketing messages sent through its own links to 280+ operators (450+ with sister company BICS): 174.9bn billable messages in FY26 and 45.8bn in Q1 FY27." },
            { name: 'International SMS into India', text: "Messages from global firms to Indian phones, 'one-fourth to one-third' of revenue at a lower percentage margin. This traffic is shrinking and being replaced by cheaper domestic traffic." },
            { name: 'WhatsApp, RCS, email and chatbots', text: "The newer products earned ₹94.5cr in Q1 (about 8% of revenue, up 14%) and about ₹350cr in FY26. Heltar, an AI chatbot platform, was bought in July." },
            { name: 'Operator firewalls', text: "Blocks unpaid grey-route SMS for telecom companies such as Claro in Latin America, at 30–70% margins. The revenue sits inside SMS and is not disclosed." },
        ],
        revenueText: "The company does not split revenue by product in its filings; **non-SMS products were about 8% of Q1 FY27 revenue**, against 30–35% at peers. By region, **India was 36%**, Europe 16% and Asia outside India 13%. By sector, financial services were 15%, digital natives 12% and telecom operators 10%. About **15% of FY26 revenue (₹659cr) came from Proximus-group companies**, mainly Telesign, at cost plus a mark-up.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company presentation)', parts: [{ label: 'India', share: 36 }, { label: 'Europe', share: 16 }, { label: 'Asia outside India', share: 13 }, { label: 'Other regions', share: 35 }], note: 'The presentation summary does not break down the remaining 35%.' },
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'SMS and firewalls', share: 92 }, { label: 'WhatsApp, RCS and other', share: 8 }] },
        ],
        customers: ["**Banks, fintechs and digital natives** (15% and 12% of revenue). One Indian bank's system upgrade disrupted traffic and turned the India business loss-making in Q1.", "**Global tech platforms and sister companies**: Proximus-group firms, mainly Telesign, bought about ₹659cr in FY26. The top 10 clients give 43% of revenue and the top 50 give 75%; net revenue retention is 98%.", "**Telecom operators** (10% of revenue) buy firewall services, including Claro in some Latin American markets."],
        difficulty: { level: 'Medium', text: "Direct links to 280+ operators, licences in many countries and the systems to route billions of messages cheaply take years to build. But the product itself is a commodity, and operators and Meta set the prices." },
        moat: "Direct operator connections give delivery and cost advantages that aggregators lack, and the firewall contracts are sticky. But it has no pricing power: revenue per billable message fell from about 29 paise to about 25 paise in FY26, and its WhatsApp and RCS share is far below its peers'.",
        salesDrivers: ["**Message volumes**: management expects volumes to rise 10–15% over the next couple of quarters; Q1 revenue grew 9.6% (company).", "**Mix and price**: high-priced international traffic into India is falling and cheaper domestic traffic replaces it; WhatsApp prices were cut during FY26.", "**Firewall deals**: the highest-margin contracts. The Claro deal described as 'now live' in May was still delayed in July.", "**The Proximus group**: sister companies BICS and Telesign are both sales channels and customers, about 15% of revenue.", "**Guidance**: in July management said it would 'hold that for now' but 'should not materially deviate from what we had guided' in May: FY27 revenue growth 'mid to high single digits' and an EBITDA margin 'around 12%'. Q1 was 9.5% on the company's adjusted basis and 9% filed."],
        inputs: "**Telecom operators' charges for delivering each SMS, and Meta's fees for WhatsApp messages**, are the main cost: delivery, subcontract and running costs were 78% of sales in FY26. Staff (783 people in Q1) were 7% and other costs 4%. It also prepays some suppliers for committed volumes, the practice behind the FY26 write-offs.",
        costEffect: "**Partly passed on.** Prices to clients move with operator charges, but competition keeps the spread thin: gross margin was 20.9% in Q1 FY27 (company). **Rule of thumb:** a 10% rise in message costs not passed on would cut the margin by about 8 points (12% to 4%). **What happened:** there is no official price index for message charges. Gross margin rose from 19.3% to 23.3% during FY26 as low-margin international traffic left, then fell back to 20.9% in Q1 when one Indian bank's traffic was disrupted. The filed operating margin went from 13% in FY24 to 12% in FY26 and 9% in Q1 FY27.",
        competitors: [{ name: 'Tanla Platforms', note: "India's largest, stronger in bank OTPs and WhatsApp; its enterprise messaging earns a similar ~20% gross margin." }, { name: 'Global messaging firms (Sinch, Infobip, Twilio)', note: "Larger rivals abroad; peers earn 30–35% of revenue from non-SMS products against Route's 8%." }],
        position: "**One of India's two large listed business-messaging companies**, with 280+ direct operator connections and a global reach through Proximus's BICS and Telesign; revenue per billable message is about 25 paise.",
        money: "Net cash of **₹1,364cr** (Screener); the company says ₹1,345cr in June, against a market value of {mcap:Route Mobile|₹2,818cr}, with borrowings of ₹42cr. Capex is 'not a meaningful number', and Heltar was bought from internal cash for an undisclosed sum. FY26 free cash was about ₹555cr, and the dividend was raised 50% to ₹16.5 a share a year. Promoters hold **74.85%**, up from 58.15% in Sep 2023, when the founders were the promoters; Proximus took control in 2024.",
        watch: ["Gross margin holding above 22% (22.4% in Q2 FY27, from 20.9%).", "No further prepayment write-offs, and the cost of the cyber incident at Masivian.", "Cash returned through a buyback or special dividend, rather than the acquisitions management is now evaluating."],
        charts: softwareCharts['Route Mobile'],
    },
    {
        company: 'Black Box',
        inShort: ["**A digital-infrastructure contractor** that cables, fits out and maintains data centres, networks and workplace technology in 35 countries for about 300 large clients; 69% of revenue is North American.", "**Good:** backlog nearly doubled in 15 months to $949m, a fourth big US cloud company was won, and the company EBITDA margin has doubled since FY23. **Bad:** only 11% of operating profit turned into cash over five years, ₹354cr of receivables were sold to banks, 'exceptional' charges come every year, the auditor flagged missed foreign-exchange-law deadlines, and the 10% margin goal was cut to 9.3–9.4%.", "**Verdict: wait.** The price needs more growth than I expect, and I want cash to follow profit first."],
        tagline: "An Essar-group systems integrator that builds and maintains data-centre, network and workplace-technology infrastructure for large companies, mostly in the US.",
        revenue: '₹6,322cr (FY26, consolidated)',
        products: [
            { name: 'Data-centre fit-out', text: "Cabling, fibre and fit-out of data centres for big cloud companies, on cost-plus terms for large jobs. About 17% of FY26 revenue, expected to be about 30% in FY27; it says it has executed 'close to a gigawatt'." },
            { name: 'Enterprise networks and security', text: "Designs, installs and runs office and campus networks, Wi-Fi, private LTE and managed security for banks and other large firms." },
            { name: 'Workplace technology', text: "Audio-visual, video-conferencing and unified-communications systems for offices, often maintained under recurring contracts." },
            { name: 'Technology Product Solutions', text: "Its own KVM switches, AV and IoT hardware: about $90m of revenue (about 14%) at about 40% gross margin, but still loss-making; the target is $200m by FY30." },
        ],
        revenueText: "**Global Solutions Integration was about 84% of FY26 revenue**, products about 14% and other services 2%. **North America gave 69% of Q1 FY27 revenue**, Europe 9%, Asia-Pacific 8%, India 6%, Latin America 6% and the Middle East and Africa 2%. The top 10 clients give 51%, and ten clients billed more than ₹100cr each in FY26. About 10–15% of finished projects turn into recurring maintenance contracts.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'North America', share: 69 }, { label: 'Europe', share: 9 }, { label: 'Asia-Pacific', share: 8 }, { label: 'India', share: 6 }, { label: 'Latin America', share: 6 }, { label: 'Middle East and Africa', share: 2 }] },
            { caption: 'Revenue by business line, FY26 (company)', parts: [{ label: 'Solutions integration', share: 84 }, { label: 'Products (TPS)', share: 14 }, { label: 'Other services', share: 2 }] },
        ],
        customers: ["**Big US cloud companies**: four of the top six are clients, including a new one that placed a $131m (₹1,240cr) order, all services, in Q1.", "**Banks**: four of the top five US banks. Its largest bank client has spent more than $1bn over 27 years and about $100m a year now.", "**Other large companies**: more than 120 Fortune 500 clients among about 300 strategic accounts, cut from 8,000 customers as low-value contracts were dropped. Top-10 clients have stayed more than 20 years on average."],
        difficulty: { level: 'Medium', text: "Running gigawatt-scale data-centre jobs needs thousands of certified technicians, a safety record and a history with the cloud companies, which choose on capability rather than price. But the work is people and relationships, not patented technology, and rivals exist in every market." },
        moat: "Clients stay for decades, and its win rate on large deals has more than doubled. But gross margin is about 30% and large jobs are cost-plus, so profit is capped: the quarterly operating margin has never passed 9.7%.",
        salesDrivers: ["**US data-centre building**: the cloud companies' AI spending drives the fastest-growing part; guidance assumes 'no significant customer-led delays'.", "**Backlog**: $949m (₹8,986cr) in June, up from $504m in March 2025. It runs about 18 months on average, and data-centre jobs 24–36 months, so much of it lands in FY28.", "**People**: capacity here means technicians. The plan takes staff from about 4,000 to 7,000, including 2,100 US data-centre hires.", "**Acquisitions**: Brazil's 2S (about $50m of revenue a year) joined in May; the plan is to buy $200–250m of revenue a year toward ₹18,000cr of revenue by FY30.", "**The rupee**: plans are built at ₹90–95 to the dollar, so a weaker rupee lifts reported revenue."],
        inputs: "**Cable, fibre, network and AV equipment bought for projects**, and **technicians' pay**, drive costs: hardware, licences and goods bought were 35% of sales in FY26, staff 35%, and delivery, subcontract and running costs 13%. Other costs were 7%.",
        costEffect: "**Mostly passed on.** Large data-centre jobs are cost-plus, with 'margins and costs… discussed upfront' and change orders covered; smaller projects are fixed-price, where overruns hurt. **Rule of thumb:** a 10% rise in equipment costs not passed on would cut the margin by about 3.5 points (9% to 5.5%). **What happened:** there is no single price index for its inputs. The company EBITDA margin rose from 4.3% in FY23 to 9.0% in FY26 as it cut from 8,000 customers to about 300 and dropped low-value contracts, while gross margin stayed near 30%. Hiring and training ahead of large sites keep the FY27 guide at 9.3–9.4%.",
        competitors: [{ name: 'Large IT integrators (NTT Data, CDW, Presidio)', note: 'Compete for enterprise network and workplace contracts; several are much larger.' }, { name: 'Specialist data-centre contractors', note: "Local electrical and cabling firms bid for cloud-company fit-outs; management admits 'you can't be the only one playing'." }],
        position: "**By its own account, the only India-origin firm running gigawatt-scale data-centre programmes**, with about 300 strategic accounts and 4,000 staff.",
        money: "Net debt of **₹613cr** including leases (Screener). On the company's March figures, borrowings were ₹827cr and cash ₹540cr, about ₹287cr of net debt before ₹326cr of leases, and it had also sold ₹354cr of receivables to banks. Capex is small (about ₹72cr in FY26), but it says acquisitions could take debt up to equal its equity. It raised ₹386cr through warrants to the promoter and other investors in FY25–FY26. CRISIL rates it BBB+ with a Positive outlook. Promoters (Essar) hold **69.95%**, down from 71.14% in Sep 2023.",
        watch: ["H2 revenue growth of 30–40% as the new US client starts in November.", "Operating cash above 60% of EBITDA.", "A full year without exceptional charges.", "Debt as acquisitions are funded, and the foreign-exchange-law lapses settled."],
        charts: softwareCharts['Black Box'],
    },
    {
        company: 'Netweb Technologies',
        inShort: ["**A Faridabad maker of GPU servers, supercomputers and private-cloud systems** under the Tyrone brand, selling to government research bodies, IndiaAI projects, Indian IT companies and GPU clouds.", "**Good:** revenue rose 4.4 times in Q2 FY27 to ₹1,323cr, H1 profit already beats all of FY26, and orders plus lowest-bidder positions are ₹3,282cr. **Bad:** it earns a 13–15% margin on bought-in chips, five customers give 65–70% of revenue, stock rose to 117 days, promoters sold about 4% in February, and it issued ₹1,200cr of new shares in Q2.", "**Verdict: wait.** The growth is real, but the price needs more than I expect from a hardware maker with lumpy orders."],
        tagline: "India's leading home-grown maker of high-performance computers: AI (GPU) servers, supercomputers and private-cloud systems, designed and built in Faridabad.",
        revenue: '₹2,184cr (FY26, standalone)',
        products: [
            { name: 'AI systems', text: "GPU-packed servers with liquid cooling and orchestration software for training and running AI models. ₹510.6cr in Q1 FY27: 62.3% of revenue, up 484%." },
            { name: 'Private cloud and HCI', text: "Ready-built data-centre stacks that let companies run their own cloud. ₹135.3cr in Q1 (16.5%)." },
            { name: 'Supercomputers (HPC)', text: "Built the PARAM and Kabru machines and 300+ high-performance systems for the National Supercomputing Mission, ISRO, IITs and C-DAC. ₹125.3cr in Q1 (15.3%)." },
            { name: 'Servers, storage and services', text: "Ordinary data-centre servers, storage and software make up the remaining 6% or so." },
        ],
        revenueText: "**AI systems were 62.3% of Q1 FY27 revenue** and 43.4% of FY26 revenue, which rose about 460% that year. Customers are roughly **half government, public-sector and research bodies, half companies**. Almost everything is sold in India: exports were ₹30.5cr in FY26 (1.4%). Usually 30–40% of a year's revenue lands in Q4.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'AI systems', share: 62.3 }, { label: 'Private cloud', share: 16.5 }, { label: 'Supercomputers (HPC)', share: 15.3 }, { label: 'Other', share: 5.9 }] },
            { caption: 'Revenue by customer type (company, approximate)', parts: [{ label: 'Government, public sector and research', share: 50 }, { label: 'Companies', share: 50 }] },
        ],
        customers: ["**Government and research bodies**: the National Supercomputing Mission, ISRO, IITs, C-DAC and IndiaAI projects, about half of revenue.", "**Indian IT companies and GPU clouds**, such as TCS, Infosys and Yotta.", "**Highly concentrated**: the five largest customers give 65–70% of revenue, and three each passed 10% of FY26 revenue."],
        difficulty: { level: 'High', text: "It designs its own motherboards, chassis and firmware and assembles liquid-cooled GPU racks, which few Indian companies can do; that qualifies it for 'design and make in India' tenders. But the chips themselves are bought from Nvidia, AMD and Intel." },
        moat: "Local design and a record of 300+ supercomputers give it an edge where government rules favour Indian makers, and it sees chip roadmaps 9–12 months early. In private-sector orders it competes with Dell, HPE and Supermicro, and customers can switch easily.",
        salesDrivers: ["**IndiaAI and sovereign-AI spending**: the government's ₹10,372cr mission and its GPU tenders; about half of revenue is government, public-sector and research.", "**Order book**: firm orders of ₹2,507cr plus ₹848cr where it is lowest bidder, and a pipeline 'upwards of ₹10,000cr' that converts about 60% over 18–24 months.", "**A few very large orders**: one strategic order of ₹1,600cr, of which about ₹430cr was delivered in Q1. Big orders make revenue lumpy, and 30–40% of a year lands in Q4.", "**Chip supply**: new Nvidia platforms (B300, Vera Rubin) and memory availability decide what it can ship; an order takes 16–20 weeks to deliver.", "**Capacity is not a limit**: current plants can support ₹3,000cr+ of revenue at 65–70% use, so growth needs working capital, not factories."],
        inputs: "**GPUs, processors, memory and other parts from Nvidia, AMD, Intel, Samsung and similar**, mostly shipped from Taiwan: hardware, licences and goods bought were 79% of sales in FY26. The top three suppliers give 65–70% of purchases, and only about 30% is bought in India. Staff were 4% and other costs 3%.",
        costEffect: "**Passed on, order by order.** Each bid is priced on current chip and memory costs, so a price rise hits only orders already signed; management held the margin while memory prices rose by repricing new bids, and stocked up ahead of shortages. **Rule of thumb:** a 10% rise in hardware costs not passed on would cut the margin by about 8 points (13% to 5%). **What happened:** there is no Indian price index for GPUs. The filed margin has stayed at 12–15%: 14% in FY24 and FY25 and 13% in FY26, dipping to 12% in the two quarters dominated by the big GPU order and back to 15% in Q1 FY27 on a broader mix.",
        competitors: [{ name: 'Dell and HPE', note: 'Global server makers with deep company relationships and far bigger scale; strongest in private-sector orders.' }, { name: 'Supermicro', note: 'US maker of GPU servers and a direct rival in AI systems; like Netweb, it builds on Nvidia chips.' }],
        position: "**One of the few Indian-origin makers that designs its own computers**; management says it ships 'the highest number of large GPU deals' in India, but gives no market-share figure.",
        money: "Net cash of **₹307cr** at March (Screener); the company puts it at ₹124cr, and says it became about **₹200cr of net debt** in June as stock rose to 110 days. It raised ₹1,200cr of new shares in Q2 FY27 (₹767cr used by September), leaving **₹14cr of net cash** at September with stock at 117 days and receivables at 62 days; routine capex is ₹20–25cr a year. Bank lines are ₹2,420cr and CRISIL rates it A+/Stable. Promoters hold **66.98%**, down from 75.45% in Sep 2023, including a sale of about 4% in February 2026.",
        watch: ["Stock back under 90 days (117 in Q2) and positive operating cash.", "New large orders from the ₹11,152cr pipeline now that the strategic order is mostly delivered.", "The margin holding at 13–14% as large deals bring lower gross margins."],
        charts: softwareCharts['Netweb Technologies'],
    },
    {
        company: 'Mobavenue Ai Tech',
        inShort: ["**A small Indian mobile-advertising platform paid per result** (install, purchase or lead) for 155+ brands in quick commerce, fintech and retail, listed through a former shell company.", "**Good:** revenue up 57% in Q1 at a steady 21% margin, and the price per result up 11%. **Bad:** the listed company bought the business from its own promoters for ₹59.68cr, still owed them ₹45.7cr in March, and lends to promoter-linked firms that are also its customers and suppliers. Its auditor flagged capitalised salaries, slow receivables and a Russian subsidiary.", "**Verdict: pass.** Strong numbers, but I will not pay a full price for a structure where money flows to and from the promoters."],
        tagline: "A programmatic advertising platform that bids for mobile, connected-TV and app-store ad slots and charges brands per install, purchase or lead delivered.",
        revenue: '₹218cr (FY26, consolidated)',
        products: [
            { name: 'Acquisition (SurgeX, PiiX, DiscoverX)', text: "Wins new users for apps on Android, through Apple Search Ads (PiiX, launched in Q1 FY27, revenue still 'negligible') and through phone makers' app stores." },
            { name: 'Activation (ResurgeX)', text: "Retargets an app's existing users to bring them back to buy again." },
            { name: 'Awareness (PrsmX)', text: "Brand ads on mobile, connected TV, streaming services and digital out-of-home screens." },
            { name: 'Neural Engine', text: "Its own bidding models, retrained hourly, which decide in under 15 milliseconds which ad slots to buy and reach about 2.6bn devices. These are management's claims." },
        ],
        revenueText: "It delivered **14.16m verified outcomes in Q1 FY27 at ₹49.94 each** (up 57% and 11%). **India gave 79.3% of Q1 revenue** and international 20.7%, up from 11.5% in FY26 after a ₹10.02cr order from a global client won by its UK arm through a reseller. **Direct advertisers gave 65.2%**, down from 73.9% in FY26. The top five sectors give 70–80% of revenue and the top 10 clients about 25%.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'India', share: 79.3 }, { label: 'International', share: 20.7 }] },
            { caption: 'Revenue by channel, Q1 FY27 (company)', parts: [{ label: 'Direct advertisers', share: 65.2 }, { label: 'Agencies and resellers', share: 34.8 }] },
        ],
        customers: ["**Quick-commerce, fintech and banking apps**, which with retail and travel form the top five sectors and 70–80% of revenue.", "**155+ active brands in 12 countries**: about 80% of revenue comes from returning clients, and an internal cap keeps each client to 6–7% (quick-commerce clients may exceed it).", "**Agencies and resellers** (34.8% of Q1 revenue), including the channel that brought its large global client."],
        difficulty: { level: 'Medium', text: "Real-time bidding models and data pipelines take skill, and paying per result means it carries the risk if users do not convert. But clients give no exclusivity and can move budgets to larger platforms quickly." },
        moat: "A rising price per result while volumes grow suggests its models find valuable users, and about 80% of revenue comes from returning clients. But it is tiny next to its rivals, clients also use other platforms, and a ~40% gross margin is thin for a platform.",
        salesDrivers: ["**Brand budgets in quick commerce and fintech**, the sectors whose ad spending swings most with funding and competition.", "**Volume and price per result**: outcomes up 57% and price per result up from ₹44.99 to ₹49.94 in a year.", "**Going abroad**: new offices in the US and Singapore, a Philippines launch and the UK order lifted international to 20.7% of revenue, but that leans on one reseller client.", "**'Rule of 50'**: management's aim of growth above 30% a year with a margin above 20%, which it calls directional rather than formal guidance.", "**Acquisitions**: the ₹50cr raised in February is unspent and held mainly for deals."],
        inputs: "**Ad space and user data bought from ad exchanges, publishers and phone makers** are the main cost: delivery, subcontract and running costs were 60% of sales in FY26 (supply and data cost was 60.4% of revenue in Q1 FY27, against 62.5% a year earlier). Staff (200+ people) were 12% and other costs 7%. ₹11cr of salaries, including directors' pay, was capitalised in FY26.",
        costEffect: "**Partly protected.** It agrees a price per result with each brand and buys ad slots in real-time auctions, so dearer ad space squeezes the spread until it bids lower or reprices. **Rule of thumb:** a 10% rise in ad-space and data costs not passed on would cut the margin by about 6 points (21% to 15%). **What happened:** there is no price index for ad space. Supply and data cost fell from 62.5% to 60.4% of revenue in the year to Q1 FY27 as the price per result rose, and the filed operating margin went from 17% in part-year FY25 to 21% in FY26 and has held at 20–22% for five quarters.",
        competitors: [{ name: 'AppLovin, Unity, The Trade Desk, InMobi', note: 'Global platforms named by management as rivals, all far larger.' }, { name: 'Affle 3i', note: "India's larger listed rival on the same pay-per-result model, with about 12 times its revenue." }],
        position: "**A small challenger**: ₹245cr of trailing revenue against Affle's ₹2,836cr, with trade awards such as gold at ad:tech India but no market-share figure.",
        money: "Net cash of **₹66cr** (Screener). The company had ₹39.9cr of cash and ₹30.8cr of investments against ₹8.5cr of borrowings in March, but still owed ₹45.7cr to the promoters for the business it bought from them. It raised ₹50cr from non-promoter investors in February, all unspent. Loans of ₹2.46cr and ₹4.0cr were outstanding to two promoter-linked firms. Promoters hold **65.6%**; they took over the listed shell in September 2024.",
        watch: ["The ₹45.7cr owed to promoters paid off, and linked-party loans and trades wound down.", "Direct-client share recovering from 65%.", "How the ₹50cr raise is spent."],
        charts: softwareCharts['Mobavenue Ai Tech'],
    },
    {
        company: 'E2E Networks',
        inShort: ["**An Indian GPU cloud that rents Nvidia chips by the hour** to AI start-ups, companies, researchers and IndiaAI allottees; L&T owns 18.45% and is also a partner and customer.", "**Good:** its monthly revenue run-rate nearly doubled to ₹71.8cr in Q1 and reached ₹75.1cr in September; Q2 FY27 profit was ₹73cr at a 77% operating margin, borrowing held at about ₹450cr, and its B200 cluster is now let on a ₹1,000cr contract to June 2029. **Bad:** depreciation takes about half of the operating profit, GPU rents fall when supply catches up, and management gives no guidance on revenue, capex or peak debt.", "**Verdict: own**, in small size. Q2 showed the Q1 profit repeats and debt stopped outrunning revenue, and the price fits my estimate; GPU rents are the risk."],
        tagline: "An Indian 'neocloud' that owns Nvidia GPUs in rented data-centre space and rents out computing power by the hour or on prepaid contracts, with its own TIR software platform.",
        revenue: '₹246cr (FY26, standalone)',
        products: [
            { name: 'GPU cloud', text: "About 5,100 Nvidia GPUs (H100, H200 and B200) at the end of Q1 FY27, including 1,024 B200s live since mid-May, with another 1,024 due. GPUs are to reach 85–90% of revenue." },
            { name: 'TIR platform and JarvisLabs', text: "Software for training, fine-tuning and running AI models; JarvisLabs.ai is a self-serve GPU service used mostly by overseas customers." },
            { name: 'CPU cloud and storage', text: "Ordinary cloud servers and storage, now 'not a very major volume'." },
            { name: 'Sovereign clusters (SovCloud)', text: "A subsidiary set up in June 2026 for large dedicated GPU clusters and the funding they need." },
        ],
        revenueText: "The company does not split revenue in its filings. On the Q1 call, **IndiaAI business was 'about 20%, 21%'** and **international about 37%**, mostly through JarvisLabs; the rest came from other Indian customers. **The monthly revenue run-rate went from ₹16.0cr in March 2025 to ₹37.4cr in March 2026, ₹71.8cr in June and ₹75.1cr in September**, about ₹900cr a year, against trailing revenue of ₹546cr. In Q2 FY27 IndiaAI customers were 13–15% of revenue and international customers 20–25%. It will not split training from inference or give contract lengths.",
        mixes: [
            { caption: 'Revenue by customer type, Q1 FY27 (management, approximate)', parts: [{ label: 'Other Indian customers', share: 43 }, { label: 'International', share: 37 }, { label: 'IndiaAI allottees', share: 20 }], note: 'Spoken estimates on the Q1 call, not filed figures.' },
        ],
        customers: ["**AI start-ups and software companies** training and running models, in India and, through JarvisLabs, abroad (about 37% of revenue).", "**IndiaAI Mission allottees** renting subsidised GPUs: about 20–21% of revenue in Q1, against a ceiling of 35–40% given at Q4, because allottees did not scale up as hoped.", "**Companies, research bodies and L&T**, which is shareholder, data-centre landlord, customer and partner at once."],
        difficulty: { level: 'Medium', text: "Anyone with capital can buy GPUs, but winning early allocations of scarce Nvidia chips, keeping them busy and building software that lets customers serve themselves takes skill. The large clouds run hundreds of thousands of GPUs against its 5,100." },
        moat: "Early access to scarce chips lets it charge well, and customers prepay 6–24-month contracts to lock in prices. But in Tarun Dua's own words it is 'almost first come first served', so the edge fades as supply grows and newer chips arrive every 12–18 months.",
        salesDrivers: ["**GPU scarcity and price**: rental prices rose 25–30% in April 2026, and E2E raised its CPU and GPU prices in July.", "**Capacity added**: revenue follows GPUs installed; the first 1,024 B200s ran at 'quite a maximal utilization' from launch, and the second lot of 1,024 is due to go live in Q3 FY27, with no contract decided for it yet.", "**IndiaAI and sovereign AI**: government tenders and subsidised rents of roughly ₹65–150 per GPU-hour (press reports differ).", "**Longer contracts**: demand for one-to-three-year prepaid contracts is rising; on 16 October 2026 it signed a binding term sheet worth about ₹1,000cr (before taxes) with an unnamed Indian sovereign-AI company for Blackwell GPUs through June 2029; on the Q2 call management said this moves the existing B200 cluster, now fully used, from pay-as-you-go to the multi-year contract.", "**No guidance**: management gives no run-rate, capex or peak-debt figure."],
        inputs: "**Nvidia GPUs, servers and memory** are the biggest spend, but they are bought as capital assets and charged as depreciation (₹169cr in FY26, ₹61cr in Q1 FY27), below operating profit. Within operating costs, hardware, licences and goods bought were 27% of sales in FY26, staff (207 people) 15% and other costs 6%; data-centre space is rented, partly from L&T.",
        costEffect: "**Mostly insulated day to day; exposed through capex.** Running costs are a small share of sales, which is why the operating margin is so high. The real cost risk is the price paid for each new batch of GPUs against the rent it can earn over a six-year write-off. **Rule of thumb:** a 10% rise in bought-in hardware and licence costs not passed on would cut the margin by about 3 points (51% to 48%). **What happened:** there is no price index for GPU rents. The filed margin went from 51% in FY24 to 59% in FY25 and back to 51% in FY26 as new GPUs were switched on before they filled, then rose from 61% in Q4 to 75% in Q1 FY27 as the B200s ran nearly full and prices rose. Memory-driven hardware inflation lets it raise rents for now.",
        competitors: [{ name: 'Yotta, Jio, Tata, CtrlS, NxtGen', note: 'Other Indian operators empanelled to supply IndiaAI GPUs; Yotta is also a Netweb customer.' }, { name: 'AWS, Microsoft Azure, Google Cloud', note: 'Global clouds with hundreds of thousands of GPUs and full software stacks.' }],
        position: "**One of India's few listed GPU clouds**, with about 5,100 GPUs and early B200 supply, but small against the global clouds.",
        money: "Screener gives no net-debt figure. Borrowings were about ₹103cr in March (plus ₹56cr of leases) and **₹450cr** at September 2026 (company), against equity of about ₹1,804cr; management expects more with the next GPU lot, says it sets no upper limit while cash flow can repay it, and has a ₹1,500cr enabling resolution to raise money. Operating cash has exceeded profit in every year since FY22 (₹315cr against ₹69cr of profit over five years); free cash is negative because of GPU buying. It raised ₹405.7cr and ₹1,079.3cr through preferential issues in 2024 (the second mainly from L&T) and ₹107cr through a QIP in February 2026. ICRA rates it A-/Stable. Promoters hold **39.45%**, down from 59.71% in Sep 2023 as new shares were issued.",
        watch: ["GPU rental prices after Nvidia's next chip generation.", "The second B200 lot going live in Q3 and whether it is let as quickly as the first.", "Debt against run-rate revenue as the next GPU lots are bought."],
        charts: softwareCharts['E2E Networks'],
    },
    {
        "company": "ESDS Software",
        "segment": "AI computers, GPU cloud and data-centre build-out",
        "inShort": [
            "**Rents out cloud computing, data-centre space and managed IT services** from five data centres (Nashik, Navi Mumbai, Bengaluru, Mohali, Noida) to about 2,500 government, bank and enterprise customers, and is moving into renting AI chips (GPUs).",
            "**Good:** revenue grew from ₹208cr in FY23 to ₹472cr in FY26 at a **50% operating margin**, and it has a ₹3,000cr domestic order book. **Bad:** FY26 included an ₹85cr one-off; it has committed to pay SharonAI about **US$1.25bn over five years** for GPU capacity it resells to one overseas client at a thin profit margin, which it cut on 21 Nov 2026 to an estimated US$4–5m a month (14–17%) after a press report; and the shares trade at about **129 times earnings**.",
            "**Verdict: pass.** A real and growing business, but the price already assumes the risky GPU deal works, and the deal's obligations dwarf the company's ₹544cr net worth."
        ],
        "tagline": "A Nashik-based cloud, data-centre and managed-services company founded by Piyush Somani in 2005, listed in September 2026, now building an AI-computing business in India and abroad.",
        "revenue": "₹472cr (FY26, consolidated)",
        "products": [
            {
                "name": "Infrastructure as a service",
                "text": "Its eNlight cloud, community cloud for government and banks, colocation in its five Tier III data centres (75,266 sq ft), and GPU-as-a-service. **43.9% of FY26 revenue, 51.2% in Q1 FY27**; margins above 50%."
            },
            {
                "name": "Managed services",
                "text": "Running customers' servers, databases (including SAP), security operations and backups. **41.2% of FY26 revenue** (including an ₹85cr one-off design fee for the Australian AI data centre), 31.3% in Q1 FY27."
            },
            {
                "name": "Software as a service",
                "text": "SWARAJ security and monitoring tools, eMagic, government and lending software and a low-code platform; **14.9% of FY26 revenue**, 17.5% in Q1 FY27, the most profitable line."
            }
        ],
        "revenueText": "**By customer type in FY26, enterprises were 55.1% of revenue, government 27.4% and banks and financial firms 17.5%**, against 47.7%, 34.0% and 18.3% in FY24. It had 2,501 customers in FY26, revenue retention of 94.9%, and existing customers gave 72.6% of revenue. Q1 FY27 revenue was ₹134cr, up 7% but down 20% from Q4 because the ₹85cr one-off did not recur. From Q3 FY27 the Australian GPU contract will dominate reported revenue.",
        "mixes": [
            {
                "caption": "Revenue by segment, FY26 (company, via broker)",
                "parts": [
                    {
                        "label": "Infrastructure (cloud, data centre, GPU)",
                        "share": 44
                    },
                    {
                        "label": "Managed services",
                        "share": 41
                    },
                    {
                        "label": "Software (SaaS)",
                        "share": 15
                    }
                ]
            },
            {
                "caption": "Revenue by customer type, FY26 (company, via broker)",
                "parts": [
                    {
                        "label": "Enterprise",
                        "share": 55
                    },
                    {
                        "label": "Government",
                        "share": 27
                    },
                    {
                        "label": "Banks and finance",
                        "share": 18
                    }
                ]
            }
        ],
        "customers": [
            "**About 2,500 Indian enterprises, government bodies and banks** using its cloud, colocation and managed services; government work tends to pay slowly (debtor days of 128–183 over FY22–FY26).",
            "**One overseas customer** for the 8,200-GPU cluster in Australia, which has paid about ₹1,177cr in advance; the capacity itself is bought from SharonAI."
        ],
        "difficulty": {
            "level": "High",
            "text": "Running certified, high-uptime data centres and a home-grown cloud for regulated customers takes years of approvals (MeitY empanelment, banking security standards). The GPU resale business is easier to copy: it needs capital and supplier access more than know-how."
        },
        "moat": "Government and bank empanelments, a sovereign 'SWARAJ' cloud and sticky managed-service contracts give it a defensible domestic niche. Against hyperscalers (AWS, Azure) and big Indian data-centre owners it is small, and in GPU renting it is a middleman.",
        "salesDrivers": [
            "**India's cloud and data-sovereignty push**: government and banks moving workloads to local clouds; the domestic order book is about ₹3,000cr over three years, growing 30–40% a year, management says.",
            "**AI computing**: the Australian 8,200-GPU cluster (billing from Q3 FY27) and an international pipeline it puts above 50,000 GPUs; its own GPUs rise to about 1,500 by early 2027.",
            "**GPU rental prices** (US$5–6 per GPU-hour, per management) and global chip shortages.",
            "**One-off design and build fees**, such as the ₹85cr booked in FY26, which make quarters lumpy."
        ],
        "inputs": "**Servers, GPUs, storage and networking equipment**, data-centre power and cooling, and engineers. For the Australian deal the main cost is SharonAI's fee for managed GPU capacity (about US$250m a year on the announced contract value).",
        "costEffect": "**Most costs are fixed (equipment depreciation, power, staff), so margins rise with utilisation**: operating margin went from 23% in FY23 to 50% in FY26. The Australian GPU deal is a resale at a targeted 15–20% net margin, so as it starts billing the company-wide margin will fall sharply even if profit rises. Power prices and GPU costs are the main swing factors; customer prices are set in multi-year contracts.",
        "competitors": [
            {
                "name": "AWS, Microsoft Azure, Google Cloud",
                "note": "Dominant public clouds; ESDS competes on local hosting, price and service for regulated customers."
            },
            {
                "name": "Sify, CtrlS, Yotta, NTT",
                "note": "Indian data-centre and cloud operators, mostly far larger in capacity."
            },
            {
                "name": "E2E Networks",
                "note": "Listed Indian GPU cloud rival; management says ESDS is one of two Indian firms offering the full range from GPU cloud to software."
            }
        ],
        "position": "**A mid-sized Indian cloud and managed-services provider** with five Tier III data centres and 2,501 customers; small next to hyperscalers and the large Indian data-centre builders.",
        "money": "Screener shows **₹96cr of borrowings** at March 2026 and the company held about ₹1,253cr of cash, almost all of it the **₹1,177cr advance from the overseas GPU customer**, which is owed back as service; excluding it, net debt was about ₹20cr. FY26 operating cash of ₹1,368cr is inflated by that advance; without it, five-year operating cash was about 81% of operating profit. The **September 2026 IPO raised ₹720cr of new money at ₹429** (listed at ₹757), mostly for servers, GPUs and data-centre equipment. Management plans about ₹3,000cr of capex including the GPU build-out, funded by customer advances, debt and IPO money in roughly equal parts. The SharonAI contract obliges it to post US$140m of letters of credit or guarantees and cannot be cancelled for 36 months. Promoters hold **39.46%**, with no pledge shown. It lost money in FY22 and FY23.",
        "watch": [
            "The Australian cluster billing on time from Q3 FY27, and how much profit it actually adds.",
            "Whether the overseas customer keeps paying; ESDS owes SharonAI regardless for three years.",
            "Domestic revenue growing 30% or more without the one-offs."
        ],
        charts: softwareCharts["ESDS Software"],
    },
];

export const softwarePlatformsBusinesses = { intro, profiles };
