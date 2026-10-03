# Database backups

Weekly copy of the database's written material, made by `scripts/backup-db.ts` (on `master`)
through `.github/workflows/backup-db.yml`. Each commit is one week; check out an older commit to
see or restore that week.

- `Analysis.json` — call write-ups, scores, guidance (match `quarterId` with `Quarter.json`)
- `Company.json` — companies, profiles, conviction, target price, portfolio, notes
- `Note.json`, `note-images/` — the owner's notes and the images pasted into them
- `CompanyTag.json`, `SectorChat.json`, `SystemConfig.json`
- `manifest.json` — date and row counts

Not backed up: call transcripts and their search passages, PDFs, and the figures Screener refills.
This branch is never deployed (vercel.json).
