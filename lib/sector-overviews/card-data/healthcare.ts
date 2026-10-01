import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const healthcareCharts: Record<string, ProfileCharts> = {
    "Syngene International": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 25
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 30
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 25
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                743.0,
                942.0,
                1017.0,
                1045.0,
                921.0
            ],
            "ocf": [
                581.0,
                824.0,
                1042.0,
                1168.0,
                915.0
            ],
            "fcf": [
                105.0,
                306.0,
                531.0,
                398.0,
                547.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "52.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,116cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "25%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                71,
                50
            ],
            "inventoryDays": [
                87,
                56
            ],
            "payableDays": [
                113,
                138
            ],
            "cycleDays": [
                45,
                -32
            ],
            "absorbed5y": 168,
            "receivables5y": -56,
            "inventory5y": -107,
            "payables5y": 559
        }
    },
    "Molbio Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 40
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 23
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                234.0,
                260.0,
                320.0
            ],
            "ocf": [
                10.0,
                287.0,
                50.0
            ],
            "fcf": [
                -6.0,
                232.0,
                0.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "47.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹83cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                186,
                103
            ],
            "inventoryDays": [
                338,
                285
            ],
            "payableDays": [
                101,
                126
            ],
            "cycleDays": [
                423,
                261
            ],
            "absorbed5y": -502,
            "receivables5y": -239,
            "inventory5y": -210,
            "payables5y": 111
        }
    },
    "Indegene": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 63
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                287.0,
                396.0,
                505.0,
                548.0,
                619.0
            ],
            "ocf": [
                297.0,
                130.0,
                508.0,
                442.0,
                651.0
            ],
            "fcf": [
                272.0,
                111.0,
                497.0,
                412.0,
                607.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,338cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "18%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                97,
                102
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                97,
                102
            ],
            "absorbed5y": 104,
            "receivables5y": -314,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Nephrocare Health": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 28
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 32
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                16.0,
                49.0,
                101.0,
                167.0,
                225.0
            ],
            "ocf": [
                14.0,
                11.0,
                72.0,
                135.0,
                233.0
            ],
            "fcf": [
                -65.0,
                -63.0,
                -8.0,
                34.0,
                114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "87.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹353cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                123,
                116
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                103,
                116
            ],
            "absorbed5y": -154,
            "receivables5y": -277,
            "inventory5y": -12,
            "payables5y": 97
        }
    },
    "Vimta Labs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 13
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 28
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 35
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                80.0,
                94.0,
                94.0,
                122.0,
                142.0
            ],
            "ocf": [
                59.0,
                87.0,
                61.0,
                94.0,
                147.0
            ],
            "fcf": [
                20.0,
                37.0,
                -16.0,
                15.0,
                47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹62cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "35%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                102,
                95
            ],
            "inventoryDays": [
                154,
                203
            ],
            "payableDays": [
                108,
                79
            ],
            "cycleDays": [
                147,
                219
            ],
            "absorbed5y": -22,
            "receivables5y": -54,
            "inventory5y": -15,
            "payables5y": -3
        }
    },
    "3B Blackbio Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 40
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                37.0,
                29.0,
                33.0,
                50.0,
                57.0
            ],
            "ocf": [
                37.0,
                20.0,
                27.0,
                43.0,
                52.0
            ],
            "fcf": [
                34.74,
                17.98,
                26.49,
                42.1,
                26.49
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹256cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "40%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                136,
                129
            ],
            "inventoryDays": [
                164,
                187
            ],
            "payableDays": [
                69,
                70
            ],
            "cycleDays": [
                136,
                245
            ],
            "absorbed5y": -15,
            "receivables5y": 0,
            "inventory5y": -14,
            "payables5y": -2
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const healthcareValuationInputs: Record<string, ValuationInput> = {
    "Syngene International": {
        "netDebt": -1116,
        "ttmEbitda": 803.0,
        "mcapAtWriting": 15414.0,
        "peAtWriting": 52.0
    },
    "Molbio Diagnostics": {
        "netDebt": 83,
        "ttmEbitda": 320.0,
        "mcapAtWriting": 15133.0,
        "peAtWriting": 60.6
    },
    "Indegene": {
        "netDebt": -1338,
        "ttmEbitda": 638.0,
        "mcapAtWriting": 14417.0,
        "peAtWriting": 34.6
    },
    "Nephrocare Health": {
        "netDebt": -353,
        "ttmEbitda": 236.0,
        "mcapAtWriting": 7460.0,
        "peAtWriting": 87.7
    },
    "Vimta Labs": {
        "netDebt": -62,
        "ttmEbitda": 145.0,
        "mcapAtWriting": 2730.0,
        "peAtWriting": 33.8
    },
    "3B Blackbio Diagnostics": {
        "netDebt": -256,
        "ttmEbitda": 53.0,
        "mcapAtWriting": 1229.0,
        "peAtWriting": 22.1
    }
};
