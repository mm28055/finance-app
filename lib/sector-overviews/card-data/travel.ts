import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const travelCharts: Record<string, ProfileCharts> = {
    "BLS International": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 47
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 28
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Jet fuel price",
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
                20.9,
                21.3,
                20.3,
                20.1,
                27.0,
                33.1,
                30.8,
                25.1,
                28.7,
                28.9,
                26.9,
                25.0,
                28.3
            ],
            "index": [
                100,
                106,
                119,
                107,
                105,
                101,
                94,
                98,
                89,
                94,
                99,
                96,
                212
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
                108.0,
                223.0,
                351.0,
                649.0,
                849.0
            ],
            "ocf": [
                185.0,
                261.0,
                350.0,
                829.0,
                903.0
            ],
            "fcf": [
                103.0,
                193.0,
                286.0,
                668.0,
                766.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,103cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "116%",
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
                10,
                21
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
                10,
                21
            ],
            "absorbed5y": 254,
            "receivables5y": -140,
            "inventory5y": 0,
            "payables5y": 174
        }
    },
    "Le Travenues Techno": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 77
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Jet fuel price",
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
                6.4,
                0.0,
                8.8,
                7.9,
                8.2,
                7.8,
                7.9,
                7.4,
                7.3,
                -1.8,
                7.5,
                6.5,
                5.6
            ],
            "index": [
                100,
                106,
                119,
                107,
                105,
                101,
                94,
                98,
                89,
                94,
                99,
                96,
                212
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
                -12.0,
                29.0,
                38.0,
                72.0,
                62.0
            ],
            "ocf": [
                -34.0,
                31.0,
                43.0,
                122.0,
                196.0
            ],
            "fcf": [
                -36.0,
                26.0,
                36.0,
                118.0,
                175.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "82.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "105.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹952cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "189%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                8,
                14
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
                8,
                14
            ],
            "absorbed5y": 53,
            "receivables5y": -17,
            "inventory5y": null,
            "payables5y": 125
        }
    },
    "Thomas Cook India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 74
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Jet fuel price",
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
                6.5,
                5.6,
                6.1,
                5.5,
                6.5,
                6.2,
                5.6,
                5.0,
                5.3,
                5.2,
                5.3,
                4.4,
                4.4
            ],
            "index": [
                100,
                106,
                119,
                107,
                105,
                101,
                94,
                98,
                89,
                94,
                99,
                96,
                212
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
                -187.0,
                178.0,
                437.0,
                478.0,
                428.0
            ],
            "ocf": [
                -139.0,
                649.0,
                829.0,
                717.0,
                643.0
            ],
            "fcf": [
                -201.0,
                583.0,
                725.0,
                600.0,
                517.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹842cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "202%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                45,
                29
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
                45,
                29
            ],
            "absorbed5y": 1238,
            "receivables5y": -551,
            "inventory5y": -33,
            "payables5y": 2025
        }
    },
    "Yatra Online": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 53
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 23
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Jet fuel price",
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
                14.5,
                -9.0,
                3.3,
                3.3,
                4.6,
                3.9,
                5.8,
                7.8,
                11.0,
                6.8,
                8.8,
                5.8,
                6.6
            ],
            "index": [
                100,
                106,
                119,
                107,
                105,
                101,
                94,
                98,
                89,
                94,
                99,
                96,
                212
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
                -9.0,
                37.0,
                15.0,
                44.0,
                80.0
            ],
            "ocf": [
                -83.0,
                -153.0,
                -142.0,
                -89.0,
                76.0
            ],
            "fcf": [
                -93.03999999999999,
                -168.42,
                -168.67000000000002,
                -118.45,
                30.83
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "49.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹12cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                358,
                194
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
                358,
                194
            ],
            "absorbed5y": -550,
            "receivables5y": -409,
            "inventory5y": 0,
            "payables5y": 146
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const travelValuationInputs: Record<string, ValuationInput> = {
    "BLS International": {
        "netDebt": -1103,
        "ttmEbitda": 867.0,
        "mcapAtWriting": 9472.0,
        "peAtWriting": 13.4
    },
    "Le Travenues Techno": {
        "netDebt": -952,
        "ttmEbitda": 59.0,
        "mcapAtWriting": 7196.0,
        "peAtWriting": 82.2
    },
    "Thomas Cook India": {
        "netDebt": -842,
        "ttmEbitda": 394.0,
        "mcapAtWriting": 4944.0,
        "peAtWriting": 22.0
    },
    "Yatra Online": {
        "netDebt": 12,
        "ttmEbitda": 70.0,
        "mcapAtWriting": 1707.0,
        "peAtWriting": 49.6
    }
};
