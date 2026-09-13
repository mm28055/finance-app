import type { Prisma } from '@prisma/client';

// ZPortfolio is not a real sector. It lists the companies flagged `inPortfolio`,
// which also stay under their own sector — so it is a second view of the same
// rows and must never add to a company count. The Z keeps it last in the list.
export const PORTFOLIO_SECTOR = 'ZPortfolio';

export const isPortfolioSector = (sector: string) => sector === PORTFOLIO_SECTOR;

/** Which companies belong to a sector name, ZPortfolio included. */
export function sectorCompanyWhere(sector: string): Prisma.CompanyWhereInput {
    return isPortfolioSector(sector)
        ? { inPortfolio: true, isVisible: true }
        : { sector, isVisible: true };
}
