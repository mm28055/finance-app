import { ProfileCharts, ValuationInput } from '../types';

// Built from filed figures (Screener) and company calls. Lenders carry only key numbers and the income split.
export const financeCharts: Record<string, ProfileCharts> = {
    "HDFC Bank": {
        "stats": [
            {
                "label": "P/E",
                "value": "14.4x"
            },
            {
                "label": "P/B",
                "value": "1.9x"
            },
            {
                "label": "Return on equity",
                "value": "14%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "1.17%",
                "note": "Q1 FY27"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "7.8x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 48
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 26
                },
                {
                    "label": "Tax",
                    "share": 6
                },
                {
                    "label": "Net profit",
                    "share": 20
                }
            ],
            "note": "Filed profit and loss (Screener, standalone), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "ICICI Bank": {
        "stats": [
            {
                "label": "P/E",
                "value": "17.2x"
            },
            {
                "label": "P/B",
                "value": "2.7x"
            },
            {
                "label": "Return on equity",
                "value": "16%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "1.38%",
                "note": "Q1 FY27"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "7.0x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 41
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 26
                },
                {
                    "label": "Tax",
                    "share": 8
                },
                {
                    "label": "Net profit",
                    "share": 25
                }
            ],
            "note": "Filed profit and loss (Screener, standalone), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "State Bank of India": {
        "stats": [
            {
                "label": "P/E",
                "value": "10.8x"
            },
            {
                "label": "P/B",
                "value": "1.5x"
            },
            {
                "label": "Return on equity",
                "value": "16%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "1.47%",
                "note": "Q1 FY27"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "14.0x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 56
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 25
                },
                {
                    "label": "Tax",
                    "share": 5
                },
                {
                    "label": "Net profit",
                    "share": 14
                }
            ],
            "note": "Filed profit and loss (Screener, standalone), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "OnEMI Technology": {
        "stats": [
            {
                "label": "P/E",
                "value": "19.7x"
            },
            {
                "label": "P/B",
                "value": "2.8x"
            },
            {
                "label": "Return on equity",
                "value": "24%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "2.25%",
                "note": "Q1 FY27, company call"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "3.0x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 15
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 68
                },
                {
                    "label": "Tax",
                    "share": 4
                },
                {
                    "label": "Net profit",
                    "share": 13
                }
            ],
            "note": "Filed profit and loss (Screener, consolidated), FY26. Income includes fees from loans held by partner banks and NBFCs. Costs include staff, marketing, collection and bad-loan losses."
        }
    },
    "Northern ARC Capital": {
        "stats": [
            {
                "label": "P/E",
                "value": "11.6x"
            },
            {
                "label": "P/B",
                "value": "1.3x"
            },
            {
                "label": "Return on equity",
                "value": "11%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "1%",
                "note": "Q1 FY27, company call"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "4.3x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 33
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 47
                },
                {
                    "label": "Tax",
                    "share": 5
                },
                {
                    "label": "Net profit",
                    "share": 15
                }
            ],
            "note": "Filed profit and loss (Screener, consolidated), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "Manba Finance": {
        "stats": [
            {
                "label": "P/E",
                "value": "14x"
            },
            {
                "label": "P/B",
                "value": "1.7x"
            },
            {
                "label": "Return on equity",
                "value": "12%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "3.41%",
                "note": "Q1 FY27"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "4.8x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 46
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 35
                },
                {
                    "label": "Tax",
                    "share": 5
                },
                {
                    "label": "Net profit",
                    "share": 14
                }
            ],
            "note": "Filed profit and loss (Screener, standalone), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "SG Finserve": {
        "stats": [
            {
                "label": "P/E",
                "value": "26.6x"
            },
            {
                "label": "P/B",
                "value": "2.8x"
            },
            {
                "label": "Return on equity",
                "value": "10%",
                "note": "FY26: net profit ÷ average net worth; 14% annualised in Q1 FY27 (company)"
            },
            {
                "label": "Gross bad loans",
                "value": "0%",
                "note": "Q1 FY27, company call"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "2.9x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "2 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 40
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 9
                },
                {
                    "label": "Tax",
                    "share": 13
                },
                {
                    "label": "Net profit",
                    "share": 38
                }
            ],
            "note": "Filed profit and loss (Screener, standalone), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    },
    "Paisalo Digital": {
        "stats": [
            {
                "label": "P/E",
                "value": "29x"
            },
            {
                "label": "P/B",
                "value": "4.1x"
            },
            {
                "label": "Return on equity",
                "value": "14%",
                "note": "FY26: net profit ÷ average net worth"
            },
            {
                "label": "Gross bad loans",
                "value": "0.7%",
                "note": "Q1 FY27, company call"
            },
            {
                "label": "Assets ÷ net worth",
                "value": "3.5x",
                "note": "Mar 2026"
            }
        ],
        "statsAsOf": "2 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "base": "income",
            "parts": [
                {
                    "label": "Interest paid to depositors and lenders",
                    "share": 40
                },
                {
                    "label": "Staff, branches, other costs and bad-loan provisions",
                    "share": 25
                },
                {
                    "label": "Tax",
                    "share": 9
                },
                {
                    "label": "Net profit",
                    "share": 26
                }
            ],
            "note": "Filed profit and loss (Screener, consolidated), FY26. Income = interest earned plus other income (fees, treasury). Costs include provisions for bad loans."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page. Book value is consolidated net worth
// at March 2026 (OnEMI: after its May 2026 listing, as reported by the company).
export const financeValuationInputs: Record<string, ValuationInput> = {
    "HDFC Bank": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 1137908,
        "peAtWriting": 14.4,
        "bookValue": 586059
    },
    "ICICI Bank": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 962652,
        "peAtWriting": 17.2,
        "bookValue": 363060
    },
    "State Bank of India": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 911077,
        "peAtWriting": 10.8,
        "bookValue": 596131
    },
    "OnEMI Technology": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 6245,
        "peAtWriting": 19.7,
        "bookValue": 2245
    },
    "Northern ARC Capital": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 5111,
        "peAtWriting": 11.6,
        "bookValue": 3896
    },
    "Manba Finance": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 683,
        "peAtWriting": 14,
        "bookValue": 410
    },
    "SG Finserve": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 4164,
        "peAtWriting": 26.6,
        "bookValue": 1460
    },
    "Paisalo Digital": {
        "netDebt": null,
        "ttmEbitda": null,
        "mcapAtWriting": 7304,
        "peAtWriting": 29,
        "bookValue": 1793
    }
};
