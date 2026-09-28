-- The owner's own labels for companies, used as a dashboard filter.
CREATE TABLE "CompanyTag" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CompanyTag_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CompanyTag_companyId_tag_key" ON "CompanyTag"("companyId", "tag");
CREATE INDEX "CompanyTag_tag_idx" ON "CompanyTag"("tag");
ALTER TABLE "CompanyTag" ADD CONSTRAINT "CompanyTag_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
