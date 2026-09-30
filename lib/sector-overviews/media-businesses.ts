import { BusinessProfile, OverviewSection } from './types';
import { mediaCharts } from './card-data/media';

// Tab 2 of the Media and Entertainment note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, in the order of Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation, call or annual report. No official price index tracks these companies' main costs (music rights and people), so the cards show no input-price chart.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Two very different ways of earning from entertainment.",
        ],
        points: [
            {
                label: 'Music labels',
                text: "Buying the rights to songs (usually from film producers, once), then licensing them for ever to streaming apps, YouTube, social media, TV, radio, brands and venues. Each play earns a small royalty; a hit keeps earning for decades (Saregama, Tips).",
            },
            {
                label: 'Artists, events and short video',
                text: "Managing singers and influencers for a share of their fees, staging concerts and festivals, and making short videos for brands (Saregama).",
            },
            {
                label: 'Visual effects (VFX)',
                text: "Creating or cleaning up images for films and series: digital sets, creatures, crowds, de-ageing, removing wires and rigs. Paid per project by studios and streamers (Basilic Fly Studio).",
            },
        ],
    },
    {
        heading: 'Three ways of being paid',
        body: [
            "Who pays, and when, decides how steady the income is.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Royalty per stream or view**', 'Saregama, Tips', 'Share of platform subscription and advertising money, by share of listening', 'Monthly or quarterly'],
                    ['**Flat licence fees and sync deals**', 'Saregama, Tips', 'Negotiated yearly with short-video apps, broadcasters and brands', 'On signing or yearly; copyright societies once or twice a year'],
                    ['**Project fees for VFX work**', 'Basilic', 'Days of work per discipline, or fixed milestones for a series', 'On milestones approved by the client; about four months on average'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Tips Music',
        inShort: ["**A music label that owns 38,000-plus songs**, strongest in 1990s Hindi film music, and licenses them to YouTube, streaming apps, broadcasters, brands and venues.", "**Good:** a 73% margin, 118% return on capital and ₹345cr of cash, with nearly all profit paid out. **Watch:** content spending is rising and Q1 FY27 profit fell 4%, the CEO left in April, the YouTube Shorts renewal is still unsigned, and more music comes from the promoters' own film company.", "**Verdict: wait.** A superb business, but the price needs more growth than I expect."],
        tagline: "A catalogue-led music label (founded 1988, Taurani family) earning royalties and licence fees on 38,000-plus songs in 25-plus languages.",
        revenue: '₹376cr (FY26, standalone)',
        products: [
            { name: 'Catalogue music', text: "Songs from three decades of Hindi films (and regional music), streamed on YouTube, Spotify, JioSaavn, Apple and Amazon and used on Instagram and YouTube Shorts. Songs over three years old bring in 85% of revenue." },
            { name: 'New film music', text: "The rights to about five films' music a year, a third from outside producers, a third from Tips Films (a promoter-group company) and a third made in-house as non-film songs. The whole cost is expensed when the album is released." },
            { name: 'Publishing and public performance', text: "Fees when its songs are performed in hotels, restaurants, events and on TV, collected through Sony Music Publishing and copyright societies." },
            { name: 'Brand and sync licensing', text: "Licences to use its songs in adverts, films and shows." },
        ],
        revenueText: "Digital platforms brought in **about 75% of Q1 FY27 revenue** (70% for FY26); publishing, public performance, brands and TV the rest. Paid subscriptions are only **10–15% of digital revenue**. About 75% of receipts come in foreign currency because YouTube and Warner, its digital distributor, bill from abroad. The company does not split revenue by platform.",
        mixes: [
            { caption: 'Revenue by channel, Q1 FY27 (company, approximate)', parts: [{ label: 'Digital platforms', share: 75 }, { label: 'Non-digital (publishing, performance, brands, TV)', share: 25 }] },
            { caption: 'Revenue by age of song, Q1 FY27 (company)', parts: [{ label: 'Released over three years ago', share: 85 }, { label: 'Last three years', share: 15 }] },
        ],
        customers: ["**YouTube and audio streaming apps** (Spotify, JioSaavn, Apple, Amazon), reached through Warner Music; they pay a share of advertising and subscription money by listening share.", "**Social media and broadcasters**: Meta and YouTube Shorts pay flat yearly fees; TV channels such as B4U license songs.", "**Venues and brands**: hotels, restaurants and event organisers pay for public performance; advertisers pay for sync."],
        difficulty: { level: 'High', text: "A catalogue of popular old songs cannot be re-created; it took decades of film deals. New music is easy to buy but hard to buy profitably, because film producers auction the music of big films." },
        moat: "Nostalgia and ownership: its 1990s songs keep trending decades later, and it owns them for ever. The weakness is dependence on a few platforms that set payout rules, and a small share of new music.",
        salesDrivers: ["**Paid subscriptions**: growing 40–50% a year, per management, but only 10–15% of digital revenue today; global labels earn over half their revenue this way.", "**YouTube advertising and views**: 158.3m YouTube subscribers; annual views fell from 228bn (FY25) to 210bn (FY26) as Shorts views dropped.", "**Short video**: the YouTube Shorts renewal, due in June 2026, is still under negotiation; short-form apps pay flat fees, not an advertising share.", "**New releases**: two film albums in Q1 FY27 (Ishq Ho Na Jaye crossed 186m YouTube views); content budget ₹90–100cr for FY27.", "**Public performance**: management puts the industry at about ₹500cr and hopes for ₹3,000cr in three years as licences move online."],
        inputs: "**No materials.** Its main cost is new content (₹59.2cr, 16% of FY26 revenue, shown by Screener as factory costs), then staff (5%) and other costs (11%). Materials were nil in FY26.",
        costEffect: "**Mostly insulated from materials; exposed to what film music costs.** It can refuse expensive albums, and says it avoids bidding wars. **Rule of thumb:** materials are nil, so a 10% rise in material costs not passed on would cut the margin by about 0 points (73% stays 73%); a 10% rise in content cost would cut it by about 1.6 points. **What happened:** no price index applies. The margin rose from 55% (FY23) to 73% (FY26) as revenue doubled while content spending stayed around ₹60–70cr a year; in Q1 FY27 it fell to 50% when two film albums (₹44.6cr) were expensed at once.",
        competitors: [{ name: 'T-Series', note: 'The largest Indian label (unlisted), with a far bigger new-music output.' }, { name: 'Saregama', note: 'Larger catalogue and much bigger new-music spending; see the next card.' }, { name: 'Sony Music, Zee Music, Universal, Warner', note: 'Compete for new film albums; Tips uses Warner for distribution and Sony for publishing.' }],
        position: "**One of India's leading music labels by catalogue quality**, strongest in 1990s Hindi film music; smaller than T-Series and Saregama by revenue. It does not publish market share.",
        money: "Screener shows **₹153cr of net cash** (March 2026, cash and investment lines); the company counts about ₹345cr of cash and investments at June 2026 and no debt. Capex is almost nil. It paid ₹166cr of dividends in FY26 and promises to return all of FY26's ₹217cr profit this year, including an open-market buyback of up to ₹44.5cr at up to ₹750 a share. Promoters hold **64.15%**, down from 75% in Sep 2023 after block sales of 6.07% (Dec 2023) and 5.06% (Jan 2024). The FY26 annual report asks approval for up to ₹60cr of FY27 purchases from Tips Films (₹17.3cr of rights and ₹15.5cr of advances in FY26), where the Taurani brothers each own about 20%.",
        watch: ['Full-year margin holding at 65–70% with a bigger content budget.', 'The YouTube Shorts renewal and growth in paid subscriptions.', 'How much new music comes from Tips Films, and at what price.'],
        charts: mediaCharts['Tips Music'],
    },
    {
        company: 'Saregama India',
        inShort: ["**India's oldest music label and second-largest by revenue**, owning 1.8 lakh songs, and now also managing artists, staging live events and making short videos (RPSG group).", "**Good:** music revenue up 39% in Q1 FY27, first in new music across several languages, and exclusive rights to Bhansali films' music. **Bad:** ₹1,000cr of music buying has kept profit flat for three years, free cash flow was negative in FY26, and the auditors made the ₹325cr Bhansali stake a key audit matter.", "**Verdict: wait.** A strong label, but the price needs faster profit growth than I expect."],
        tagline: "A music label with India's largest archive of old film songs, a fast-growing new-music business, and artist, events and video arms around it.",
        revenue: '₹985cr (FY26, consolidated)',
        products: [
            { name: 'Music licensing', text: "Licenses 1.8 lakh songs (masters and compositions, owned for ever) to streaming apps, YouTube, social media, TV, films and brands, and adds 5,000–6,000 new releases a year. 60% of FY26 music revenue came from songs released after 2000." },
            { name: 'Retail (Carvaan, vinyl)', text: "Carvaan radios pre-loaded with old songs, now sold mainly online and in modern stores for margin, plus vinyl records for collectors." },
            { name: 'Artist management', text: "Manages 309 singers and influencers (440m+ followers), taking a share of their fees from weddings, events and brand deals; about ₹40cr a quarter at a margin near 10%." },
            { name: 'Live events', text: "Concerts, the UN40 music festival, devotional shows, stand-up comedy and Carvaan Live seated concerts; overseas tours with Indian stars." },
            { name: 'Video', text: "TV serials (mostly for Sun TV), Pocket Aces' FilterCopy short videos and digital series. Its own film production is being wound down; film music will come through its 28% stake in Bhansali Productions." },
        ],
        revenueText: "In FY26 **music (licensing and retail) was ₹684cr, 69% of revenue**, artist management ₹131cr, video ₹108cr and events ₹62cr (events were ₹285cr in FY25, when it ran Diljit Dosanjh's India tour). Music earns almost all the profit: a segment result of ₹364cr against ₹13cr for artists, ₹2cr for video and a ₹7cr loss on events. By source, 67% came from platforms, 19% from brands and 14% from consumers; 39% came from customers abroad.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (annual report)', parts: [{ label: 'Music (licensing and retail)', share: 69 }, { label: 'Artist management', share: 13 }, { label: 'Video', share: 11 }, { label: 'Live events', share: 6 }] },
            { caption: 'Revenue by payer, FY26 (company)', parts: [{ label: 'Platforms', share: 67 }, { label: 'Brands', share: 19 }, { label: 'Consumers', share: 14 }] },
        ],
        customers: ["**Platforms**: Spotify, YouTube, JioSaavn, Amazon, Netflix, JioHotstar, Sun TV and Instagram; one customer brought in ₹129cr (13% of revenue) in FY26.", "**Brands**: companies such as Visa, Hindustan Unilever, Myntra and Godrej buying song licences, artist appearances and short videos.", "**Consumers**: Carvaan and vinyl buyers and ticket buyers at its concerts and festivals."],
        difficulty: { level: 'High', text: "Its old-song archive cannot be rebuilt. Winning new film music needs capital and a record of making albums into hits; artist management and events are easy to enter and earn thin margins." },
        moat: "The deepest catalogue of old Indian film songs plus a leading share of new music and a guaranteed supply of Bhansali albums. The weakness is cost: it pays heavily for new music, and its newer businesses earn little.",
        salesDrivers: ["**Paid subscriptions**: management says all its audio-app growth is coming from paid users; free-tier revenue is flat.", "**New music**: ₹300–350cr to be spent in FY27 (most already committed); big albums due include Bhansali's Love & War (Q4 FY27), Naagzilla and Paradise.", "**Short video and brands**: short-form licences are flat yearly fees, which 'bothers' management; the brand team sells songs, artists, events and FilterCopy videos together.", "**Live events and artists**: 93 shows in Q1 FY27; UN40 to break even by FY28; artist growth slowing after the build-up.", "**Guidance**: music revenue +20–23% a year over three to five years at a 60–65% EBITDA margin."],
        inputs: "**Content, not materials.** Screener's 'materials' line (32% of FY26 sales) holds content charges, film and TV production and Carvaan radios; staff are 11% and other costs 22%. Part of the cost of bought music is written off below operating profit as amortisation over about ten years.",
        costEffect: "**Partly passed on.** It sets its own budget for new music and says it walks away from albums that cannot pay back in five years (it refused Dhurandhar 2). **Rule of thumb:** a 10% rise in material and content costs not passed on would cut the margin by about 3 points (34% to 31%). **What happened:** no price index applies. The margin fell from 31% (FY24) to 24% (FY25) because the low-margin Diljit tour swelled revenue, then rose to 34% in FY26 as it stopped making films; amortisation climbed from ₹36cr to ₹82cr over the same two years, which is why profit barely grew.",
        competitors: [{ name: 'T-Series', note: 'The largest label by revenue; Saregama says it is second after T-Series.' }, { name: 'Tips, Sony Music, Zee Music, Universal, Warner', note: 'Compete for new film albums and platform share.' }, { name: 'Artist agencies and event promoters', note: 'Standalone managers and promoters in its newer businesses, where Saregama says it avoids film actors.' }],
        position: "**India's second-largest music label by revenue and the leader in new music across several languages**, per management; it claims 25–30% of new film music and the largest non-digital music income.",
        money: "Screener shows **₹76cr of net cash** (March 2026: cash less ₹73cr of working-capital borrowings); CARE counts about ₹203cr of cash and liquid investments, including ₹101cr of unspent QIP money. It raised ₹750cr through a QIP in FY22 and has spent most of it on music, Pocket Aces (91%) and ₹325cr for 28% of Bhansali Productions (it can rise to 51%). Free cash flow was −₹114cr in FY26. Promoters hold **60.8%**, up from 59.1% in Sep 2023; CARE rates it AA- (Stable). It pays its promoter group about ₹15cr a year in brand royalty, and carries ₹128cr of disputed tax demands.",
        watch: ['Music net margin rising as content spending slows after FY27.', 'Bhansali releases, starting with Love & War in Q4 FY27.', 'Free cash flow turning positive.'],
        charts: mediaCharts['Saregama India'],
    },
    {
        company: 'Basilic Fly Studio',
        inShort: ["**A visual-effects (VFX) studio** creating digital sets, creatures, crowds and clean-ups for Netflix, Amazon and Hollywood, mostly from Chennai and Pune, with 70% of UK studio One of Us.", "**Good:** a record order book and bid pipeline, and India studios earning a 42% margin. **Bad:** group margin down to 14% in Q1 FY27 and profit down 44%, profits that do not turn into cash, ₹59cr of staff time capitalised, and an unaudited Canadian subsidiary.", "**Verdict: pass.** The price is low, but the cash and accounting questions come first."],
        tagline: "A VFX services company with studios in India, London, Paris and Vancouver, listed on NSE's SME board since 2023.",
        revenue: '₹408cr (FY26, consolidated)',
        products: [
            { name: 'Full VFX for series and films', text: "Through One of Us (London and Paris): creative supervision and complete VFX for whole series and films, such as The Crown, Mission: Impossible and Stranger Things 5, usually priced by milestones." },
            { name: 'Service work from India', text: "Rotoscoping, cleanup, matchmove and compositing for other studios and for its own UK arm, billed by time. The India studios earned a 42% margin in Q1 FY27." },
            { name: 'Domestic streaming work', text: "Full VFX for Indian originals on Netflix and Amazon; domestic revenue in Q1 FY27 was already twice FY26's." },
            { name: 'AI-assisted effects', text: "De-ageing, face and body work and digital creatures using in-house AI workflows." },
        ],
        revenueText: "Europe brought in **79% of Q1 FY27 revenue**, North America 10% and others 11% (FY26: Europe 60%, North America 21%). **Netflix and Amazon together are over half of revenue**, and the top five clients about 60%. The India studios' ₹120cr of FY26 revenue includes work for its own UK studio; the company does not split out external India revenue.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'Europe', share: 79 }, { label: 'North America', share: 10 }, { label: 'Others', share: 11 }] },
        ],
        customers: ["**Streamers**: Netflix and Amazon (over half of revenue), plus Apple TV, HBO and Paramount.", "**Film studios**: Disney, Sony, Warner Bros and Universal, directly or through their productions.", "**Other VFX studios** that sub-contract work to India when short of capacity."],
        difficulty: { level: 'Medium', text: "Studio-grade VFX needs skilled artists, security certifications to handle unreleased films and a pipeline linking sites. The basic service work is easy to copy and is being automated by AI." },
        moat: "India-led delivery 30–40% cheaper than Western studios, plus One of Us' creative reputation. The weakness: a few powerful buyers, prices cut after the Hollywood strikes, and AI shrinking the hours in basic work.",
        salesDrivers: ["**Streamer and studio budgets**: production is recovering from the 2023 strikes; Netflix and Amazon decide most of its work.", "**Tax credits**: France (40%), the UK and Ireland subsidise local VFX but allow part of the work to be done in India.", "**Order book**: ₹250–260cr to deliver in FY27 at end-July, ₹105cr won this year; bids of ₹700cr, 40% at an advanced stage.", "**Bigger jobs**: typical bids up from GBP 1–2m to GBP 4–5m after senior hires.", "**Offshoring**: moving roles from London and Paris to a new Bengaluru studio (150 seats from October)."],
        inputs: "**People.** Staff were 64% of FY26 sales; computing, storage and software licences come next. Materials were nil in FY26.",
        costEffect: "**Partly passed on.** Prices are set per project, so a pay rise or a stronger pound during a job squeezes that job's margin. **Rule of thumb:** materials are nil, so a 10% rise in material costs not passed on would cut the margin by about 0 points (21% stays 21%); a 10% rise in staff costs not recovered would cut it by about 6 points. **What happened:** no price index applies. The margin fell from 48% (FY24, India only) to 24% (FY25) and 21% (FY26) because the higher-cost UK studio was consolidated, prices were cut after the strikes and senior hires were made ahead of revenue; in Q1 FY27 a currency loss and migration costs took it to 13.9%.",
        competitors: [{ name: 'DNEG, Framestore, MPC, Rodeo FX, ILM', note: 'Large global studios, most with big Indian operations.' }, { name: 'Phantom FX, Prime Focus and other Indian studios', note: 'Compete for service and domestic work on cost.' }],
        position: "**A small global VFX studio**: about 800 people across six locations and ₹408cr of revenue, far smaller than the global leaders. Management says only a few studios in France (including One of Us and Rodeo) take large jobs.",
        money: "Screener shows **₹32cr of net debt** (March 2026: borrowings ₹106cr including leases, cash ₹74cr); a term loan of about ₹19cr is secured by deposits and a pledge of shares. It raised ₹85cr by a QIP in September 2025; ₹37cr of it and ₹21cr of IPO money are unused. Capex was ₹73cr in FY26, and ₹59cr of mostly internal staff time sits as intangible assets under development. Free cash flow was negative in FY24–FY26, and debtors were 124 days in FY26. It plans a ₹200–300cr North American acquisition paid from cash. Promoters hold **55.3%**, down from 59.9% in Sep 2023 (mostly QIP dilution). The auditor notes that the Canadian subsidiary's accounts (revenue ₹67cr, profit ₹10.1cr) were unaudited. CRISIL rates it A- (Stable).",
        watch: ['Second-half margin back above 20%, as promised.', 'Debtor days and free cash flow.', 'Audited accounts for every subsidiary, and the price of the acquisition.'],
        charts: mediaCharts['Basilic Fly Studio'],
    },
];

export const mediaBusinesses = { intro, profiles };
