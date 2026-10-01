import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const healthcareDiagnosticCharts: Record<string, ProfileCharts> = {
    "Dr Lal PathLabs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 19
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 19
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 16
                },
                {
                    "label": "Operating profit",
                    "share": 28
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
                561.0,
                490.0,
                609.0,
                698.0,
                783.0
            ],
            "ocf": [
                447.0,
                456.0,
                535.0,
                569.0,
                636.0
            ],
            "fcf": [
                -29.0,
                411.0,
                478.0,
                515.0,
                463.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "57.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,134cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "28%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                15,
                15
            ],
            "inventoryDays": [
                38,
                30
            ],
            "payableDays": [
                107,
                123
            ],
            "cycleDays": [
                -54,
                -79
            ],
            "absorbed5y": 82,
            "receivables5y": -64,
            "inventory5y": -2,
            "payables5y": 68
        }
    },
    "Vijaya Diagnostic Centre": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 12
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 41
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
                204.0,
                182.0,
                221.0,
                273.0,
                337.0
            ],
            "ocf": [
                158.0,
                165.0,
                183.0,
                224.0,
                271.0
            ],
            "fcf": [
                36.0,
                40.0,
                95.0,
                128.0,
                88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "86.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "45.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹370cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "41%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                8,
                9
            ],
            "inventoryDays": [
                22,
                19
            ],
            "payableDays": [
                110,
                145
            ],
            "cycleDays": [
                -81,
                -117
            ],
            "absorbed5y": -23,
            "receivables5y": -15,
            "inventory5y": -2,
            "payables5y": 14
        }
    },
    "Metropolis Health.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 20
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 27
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
                348.0,
                293.0,
                288.0,
                308.0,
                406.0
            ],
            "ocf": [
                253.0,
                247.0,
                264.0,
                263.0,
                351.0
            ],
            "fcf": [
                222.0,
                194.0,
                200.0,
                194.0,
                300.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "58.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹170cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                40,
                38
            ],
            "inventoryDays": [
                68,
                51
            ],
            "payableDays": [
                136,
                146
            ],
            "cycleDays": [
                -29,
                -57
            ],
            "absorbed5y": -73,
            "receivables5y": -45,
            "inventory5y": 10,
            "payables5y": -13
        }
    },
    "Thyrocare Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 26
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 32
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
                236.0,
                123.0,
                140.0,
                190.0,
                263.0
            ],
            "ocf": [
                113.0,
                129.0,
                168.0,
                191.0,
                213.0
            ],
            "fcf": [
                75.17,
                85.35,
                106.42,
                146.11,
                192.12
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹194cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                58,
                33
            ],
            "inventoryDays": [
                53,
                81
            ],
            "payableDays": [
                36,
                109
            ],
            "cycleDays": [
                75,
                4
            ],
            "absorbed5y": -38,
            "receivables5y": -59,
            "inventory5y": -25,
            "payables5y": 40
        }
    },
    "Suraksha Diagnostic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Reagents, consumables and goods bought",
                    "share": 12
                },
                {
                    "label": "Lab, clinic and running costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 34
                },
                {
                    "label": "Operating profit",
                    "share": 31
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
                49.0,
                47.0,
                73.0,
                82.0,
                96.0
            ],
            "ocf": [
                42.0,
                44.0,
                60.0,
                63.0,
                82.0
            ],
            "fcf": [
                23.0,
                31.0,
                15.0,
                21.0,
                15.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "51.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹104cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "31%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                12,
                27
            ],
            "inventoryDays": [
                38,
                81
            ],
            "payableDays": [
                84,
                209
            ],
            "cycleDays": [
                -34,
                -101
            ],
            "absorbed5y": -13,
            "receivables5y": -20,
            "inventory5y": -4,
            "payables5y": 7
        }
    },
    "Krsnaa Diagnostics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Lab, clinic and running costs",
                    "share": 29
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 26
                },
                {
                    "label": "Operating profit",
                    "share": 27
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
                132.0,
                122.0,
                144.0,
                190.0,
                212.0
            ],
            "ocf": [
                128.0,
                76.0,
                24.0,
                87.0,
                143.0
            ],
            "fcf": [
                -4.0,
                -65.0,
                -170.0,
                -40.0,
                -76.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹173cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "27%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                46,
                140
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
                46,
                140
            ],
            "absorbed5y": -274,
            "receivables5y": -222,
            "inventory5y": -20,
            "payables5y": -32
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const healthcareDiagnosticValuationInputs: Record<string, ValuationInput> = {
    "Dr Lal PathLabs": {
        "netDebt": -1134,
        "ttmEbitda": 838.0,
        "mcapAtWriting": 32299.0,
        "peAtWriting": 57.4
    },
    "Vijaya Diagnostic Centre": {
        "netDebt": 370,
        "ttmEbitda": 362.0,
        "mcapAtWriting": 16178.0,
        "peAtWriting": 86.3
    },
    "Metropolis Health.": {
        "netDebt": 170,
        "ttmEbitda": 422.0,
        "mcapAtWriting": 12146.0,
        "peAtWriting": 58.4
    },
    "Thyrocare Technologies": {
        "netDebt": -194,
        "ttmEbitda": 282.0,
        "mcapAtWriting": 9132.0,
        "peAtWriting": 50.5
    },
    "Suraksha Diagnostic": {
        "netDebt": 104,
        "ttmEbitda": 102.0,
        "mcapAtWriting": 1851.0,
        "peAtWriting": 51.7
    },
    "Krsnaa Diagnostics": {
        "netDebt": 173,
        "ttmEbitda": 218.0,
        "mcapAtWriting": 1817.0,
        "peAtWriting": 18.6
    }
};
