-- Own visitor log: unique visitors and cities (Vercel's counter has countries only).
CREATE TABLE "SiteVisit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitorId" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "city" TEXT,
    "region" TEXT,
    "country" TEXT,
    "device" TEXT,
    CONSTRAINT "SiteVisit_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "SiteVisit_createdAt_idx" ON "SiteVisit"("createdAt");
CREATE INDEX "SiteVisit_visitorId_idx" ON "SiteVisit"("visitorId");
