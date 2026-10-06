# Build: promoter trades and pledges as material filings (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit or push. Repo: `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`.
Edit only scripts/sync-filings.ts and, if useful, lib/filings/nse.ts (shared NSE reader; keep its existing exports
working — scripts/sync-exchange-transcripts.ts and scripts/sync-corporate-actions.ts use it). Another helper is
editing sync-finance.js, sync-corporate-actions.ts, data-service, CompanyRow and SectorList — do not touch those.
Do not touch the database schema. Owner is non-technical; report to me.

## Goal
The owner wants to know quickly when a promoter sells or pledges a major stake. Promoters must disclose:
- **Insider trades (SEBI PIT Reg 7(2))** within 2 trading days — NSE publishes these in a separate feed, e.g.
  https://www.nseindia.com/api/corporates-pit?index=equities&from_date=DD-MM-YYYY&to_date=DD-MM-YYYY (verify the real
  endpoint and fields: acquirer name, category e.g. "Promoters"/"Promoter Group", buy/sell, number and value of shares,
  shares before/after %, mode e.g. market sale / pledge / invocation, dates). Same cookie/Referer approach as the other
  NSE calls.
- **Takeover-code disclosures (SAST Reg 29 and Reg 31 pledges)** — these are in the corporate-announcements feed the
  digest already reads, but `SKIP_CATEGORIES` in scripts/sync-filings.ts currently skips
  'Disclosure under SEBI Takeover Regulations'. Stop skipping it; let the materiality step judge it.

## Rules for "major" (add to the Gemini prompt and apply deterministically where the numbers are structured)
- Material: a promoter / promoter-group SALE or PLEDGE of ≥0.5% of the company's shares or ≥₹10cr in value;
  ANY pledge invocation (lenders selling pledged shares); promoter BUYING of ≥0.25% of shares or ≥₹5cr;
  any non-promoter crossing 5% / 10% (a new large holder) or exiting below 5%.
- Not material: trades below those sizes, pledge releases on repayment (unless ≥2% of shares — then "good"),
  inter-se transfers between promoter-group members, ESOP-related trades by employees, gifts within the family.
- Aggregate: several PIT rows for the same person/company in the window are one event (sum them).
- Tone: selling, pledging, invocation → "watch" (shows light purple); promoter buying → "good"; large holder
  entering → "info"; exit → "info".
- Headline examples: "Promoter sold 1.8% (₹212cr) at about ₹1,640", "Promoter group pledged 3.2% of shares",
  "Lenders invoked pledge on 1.1% of promoter shares". State % of total shares, value, price vs current price, and the
  promoter's holding before → after when available. Category "Promoter trade" or "Pledge".
- Use the structured PIT numbers directly for the headline figures where available (no need to read a PDF); Gemini
  can write the one-to-two-sentence summary from those numbers. Keep the existing 3-day same-event dedupe.

## Test
- `npx tsc --noEmit -p .` clean.
- Dry run over 01-09-2026 → 28-09-2026 (`--dry-run --from=... --to=...`; do NOT write lib/filings/filings.json in the dry
  run): list what would be added from PIT and SAST, with tone and headline. Sanity-check sizes. Show 10 examples and
  the count of PIT rows seen vs events kept.
- Do not run a live (writing) run; I will.

Report in under 200 words: endpoint used, rules implemented, dry-run counts and examples, anything risky.
