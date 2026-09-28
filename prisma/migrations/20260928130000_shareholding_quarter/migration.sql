-- Quarterly shareholding pattern per company, read from the Screener page the
-- daily price sync already downloads; `pledged` (share of the promoter holding
-- pledged) comes from the company's NSE shareholding filing. Last 12 kept.
CREATE TABLE "ShareholdingQuarter" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "periodEnd" DATE NOT NULL,
    "promoter" DECIMAL NOT NULL,
    "fii" DECIMAL NOT NULL,
    "dii" DECIMAL NOT NULL,
    "government" DECIMAL NOT NULL,
    "public" DECIMAL NOT NULL,
    "shareholders" INTEGER,
    "pledged" DECIMAL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ShareholdingQuarter_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "ShareholdingQuarter_companyId_period_key" ON "ShareholdingQuarter"("companyId", "period");
CREATE INDEX "ShareholdingQuarter_companyId_periodEnd_idx" ON "ShareholdingQuarter"("companyId", "periodEnd");
ALTER TABLE "ShareholdingQuarter" ADD CONSTRAINT "ShareholdingQuarter_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
