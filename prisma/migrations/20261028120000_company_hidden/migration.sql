-- Hidden from the everyday view but still tracked; the "Show hidden" switch brings these back.
ALTER TABLE "Company" ADD COLUMN "hidden" BOOLEAN NOT NULL DEFAULT false;
