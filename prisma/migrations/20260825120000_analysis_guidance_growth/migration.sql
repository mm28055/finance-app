-- Forward revenue guidance extracted from investorBrief, kept per quarter.
ALTER TABLE "Analysis" ADD COLUMN "guidanceGrowthMin" DECIMAL;
ALTER TABLE "Analysis" ADD COLUMN "guidanceGrowthMax" DECIMAL;
ALTER TABLE "Analysis" ADD COLUMN "guidanceFy" TEXT;
ALTER TABLE "Analysis" ADD COLUMN "guidanceBasis" TEXT;
ALTER TABLE "Analysis" ADD COLUMN "guidanceQuote" TEXT;
