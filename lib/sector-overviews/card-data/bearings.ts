import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const bearingsCharts: Record<string, ProfileCharts> = {
    "Timken India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                18.9,
                19.9,
                16.7,
                22.2,
                18.0,
                17.7,
                15.9,
                22.3,
                17.6,
                17.9,
                12.6,
                21.9,
                18.5
            ],
            "index": [
                100,
                97,
                97,
                94,
                96,
                94,
                91,
                91,
                92,
                89,
                90,
                93,
                99
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
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
                511.0,
                560.0,
                572.0,
                592.0,
                612.0
            ],
            "ocf": [
                33.0,
                341.0,
                340.0,
                387.0,
                437.0
            ],
            "fcf": [
                -47.0,
                279.0,
                78.0,
                9.0,
                140.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹389cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
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
                89,
                85
            ],
            "inventoryDays": [
                171,
                136
            ],
            "payableDays": [
                100,
                105
            ],
            "cycleDays": [
                160,
                116
            ],
            "absorbed5y": -690,
            "receivables5y": -423,
            "inventory5y": -410,
            "payables5y": 257
        }
    },
    "SKF India (Industrial)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                22.3,
                11.4,
                13.3,
                12.4,
                8.6,
                9.1
            ],
            "index": [
                100,
                101,
                98,
                98,
                102,
                108
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY25",
                "FY26"
            ],
            "ebitda": [
                161.0,
                390.0
            ],
            "ocf": [
                -18.0,
                164.0
            ],
            "fcf": [
                -28.0,
                70.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "35.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹564cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                269,
                88
            ],
            "inventoryDays": [
                450,
                84
            ],
            "payableDays": [
                389,
                116
            ],
            "cycleDays": [
                329,
                56
            ],
            "absorbed5y": -74,
            "receivables5y": -346,
            "inventory5y": -73,
            "payables5y": 292
        }
    },
    "SKF India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                17.7,
                11.0,
                15.8,
                17.7,
                16.1,
                10.0,
                9.6,
                23.5,
                13.0,
                12.7,
                14.2,
                5.5,
                15.0
            ],
            "index": [
                100,
                97,
                97,
                94,
                96,
                94,
                91,
                91,
                92,
                89,
                90,
                93,
                99
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
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
                555.0,
                749.0,
                718.0,
                745.0,
                449.0
            ],
            "ocf": [
                57.0,
                690.0,
                624.0,
                203.0,
                363.0
            ],
            "fcf": [
                -35.0,
                583.0,
                494.0,
                72.0,
                134.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹306cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                68,
                70
            ],
            "inventoryDays": [
                110,
                52
            ],
            "payableDays": [
                83,
                89
            ],
            "cycleDays": [
                96,
                33
            ],
            "absorbed5y": -503,
            "receivables5y": -775,
            "inventory5y": -386,
            "payables5y": 550
        }
    },
    "Harsha Engineers Int": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 15
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                12.1,
                10.3,
                12.3,
                14.5,
                16.0,
                11.9,
                12.7,
                9.4,
                15.1,
                14.3,
                13.9,
                15.4,
                14.7
            ],
            "index": [
                100,
                98,
                96,
                98,
                109,
                108,
                107,
                110,
                114,
                117,
                124,
                140,
                149
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
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
                169.0,
                190.0,
                171.0,
                175.0,
                240.0
            ],
            "ocf": [
                36.0,
                137.0,
                136.0,
                206.0,
                68.0
            ],
            "fcf": [
                -14.0,
                63.0,
                61.0,
                -3.0,
                -52.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹146cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "62%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                78,
                85
            ],
            "inventoryDays": [
                185,
                169
            ],
            "payableDays": [
                90,
                83
            ],
            "cycleDays": [
                173,
                171
            ],
            "absorbed5y": -234,
            "receivables5y": -187,
            "inventory5y": -126,
            "payables5y": 68
        }
    },
    "NRB Bearing": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 39
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                16.5,
                16.5,
                14.0,
                16.5,
                14.5,
                17.2,
                16.1,
                18.2,
                16.5,
                16.6,
                18.3,
                18.0,
                17.3
            ],
            "index": [
                100,
                97,
                97,
                94,
                96,
                94,
                91,
                91,
                92,
                89,
                90,
                93,
                99
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
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
                147.0,
                176.0,
                176.0,
                199.0,
                232.0
            ],
            "ocf": [
                16.0,
                61.0,
                115.0,
                84.0,
                241.0
            ],
            "fcf": [
                -14.0,
                20.0,
                66.0,
                2.0,
                136.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹121cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                83,
                67
            ],
            "inventoryDays": [
                305,
                302
            ],
            "payableDays": [
                113,
                88
            ],
            "cycleDays": [
                275,
                281
            ],
            "absorbed5y": -277,
            "receivables5y": -59,
            "inventory5y": -241,
            "payables5y": 24
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const bearingsValuationInputs: Record<string, ValuationInput> = {
    "Timken India": {
        "netDebt": -389,
        "ttmEbitda": 642.0,
        "mcapAtWriting": 24529.0,
        "peAtWriting": 60.0
    },
    "SKF India (Industrial)": {
        "netDebt": -564,
        "ttmEbitda": 384.0,
        "mcapAtWriting": 14161.0,
        "peAtWriting": 36.9
    },
    "Harsha Engineers Int": {
        "netDebt": -146,
        "ttmEbitda": 252.0,
        "mcapAtWriting": 4218.0,
        "peAtWriting": 27.2
    },
    "NRB Bearing": {
        "netDebt": 121,
        "ttmEbitda": 245.0,
        "mcapAtWriting": 5276.0,
        "peAtWriting": 35.3
    },
    // Added 7 Nov 2026, once the last four quarters (Dec 2025 to Sep 2026) were all after the demerger.
    // Screener consolidated: operating profit 82 + 33 + 88 + 57; net cash at 30 Sep 2026 = cash 113 + investments 9 − borrowings 2.
    // Market value and P/E from companies.json on 7 Nov 2026. Trailing profit still carries the ₹61.5cr Mar 2026 tax charge.
    "SKF India": {
        "netDebt": -120,
        "ttmEbitda": 260.0,
        "mcapAtWriting": 7048.0,
        "peAtWriting": 44.2
    }
};
