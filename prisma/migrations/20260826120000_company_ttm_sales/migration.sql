-- Trailing-twelve-month sales from Screener's quarterly table, so the row can
-- show P/S for every company rather than only those with four stored quarters.
ALTER TABLE "Company" ADD COLUMN "ttmSales" DECIMAL;
ALTER TABLE "Company" ADD COLUMN "lastSalesSync" TIMESTAMPTZ(6);
