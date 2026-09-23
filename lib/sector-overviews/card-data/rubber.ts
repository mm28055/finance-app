import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const rubberCharts: Record<string, ProfileCharts> = {
    "Apcotex Inds": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Synthetic rubber price",
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
                9.4,
                11.5,
                9.7,
                10.0,
                9.5,
                7.7,
                7.6,
                10.9,
                10.4,
                12.2,
                13.3,
                13.8,
                22.2
            ],
            "index": [
                100,
                101,
                99,
                103,
                109,
                122,
                113,
                115,
                118,
                118,
                115,
                120,
                128
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
                140.0,
                159.0,
                114.0,
                125.0,
                177.0
            ],
            "ocf": [
                48.0,
                121.0,
                40.0,
                85.0,
                203.0
            ],
            "fcf": [
                -20.0,
                -66.0,
                12.0,
                35.0,
                159.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹67cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
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
                62,
                62
            ],
            "inventoryDays": [
                53,
                49
            ],
            "payableDays": [
                61,
                70
            ],
            "cycleDays": [
                54,
                40
            ],
            "absorbed5y": -125,
            "receivables5y": -184,
            "inventory5y": -72,
            "payables5y": 151
        }
    },
    "Tinna Rubber": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rubber crumb price",
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
                15.0,
                16.2,
                17.2,
                20.0,
                18.4,
                16.1,
                12.2,
                14.0,
                16.2,
                17.5,
                15.8,
                17.8,
                21.8
            ],
            "index": [
                100,
                100,
                99,
                104,
                111,
                115,
                114,
                115,
                114,
                114,
                112,
                116,
                127
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
                37.0,
                37.0,
                63.0,
                77.0,
                94.0
            ],
            "ocf": [
                19.0,
                32.0,
                59.0,
                36.0,
                57.0
            ],
            "fcf": [
                9.0,
                25.0,
                -14.0,
                -33.0,
                -52.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹125cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                52,
                45
            ],
            "inventoryDays": [
                115,
                99
            ],
            "payableDays": [
                93,
                80
            ],
            "cycleDays": [
                74,
                64
            ],
            "absorbed5y": -75,
            "receivables5y": -50,
            "inventory5y": -54,
            "payables5y": 48
        }
    },
    "GRP": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 20
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Reclaimed rubber price",
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
                6.6,
                9.7,
                9.5,
                16.5,
                10.1,
                7.4,
                9.6,
                20.5,
                8.0,
                8.0,
                8.0,
                6.2,
                10.8
            ],
            "index": [
                100,
                100,
                101,
                102,
                100,
                101,
                103,
                104,
                107,
                108,
                116,
                118,
                125
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
                24.0,
                25.0,
                51.0,
                69.0,
                41.0
            ],
            "ocf": [
                2.0,
                25.0,
                27.0,
                45.0,
                30.0
            ],
            "fcf": [
                -22.05,
                -5.190000000000001,
                -30.29,
                -20.870000000000005,
                -16.090000000000003
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "156.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹207cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                81,
                75
            ],
            "inventoryDays": [
                107,
                69
            ],
            "payableDays": [
                50,
                38
            ],
            "cycleDays": [
                138,
                105
            ],
            "absorbed5y": -63,
            "receivables5y": -73,
            "inventory5y": -8,
            "payables5y": 18
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const rubberValuationInputs: Record<string, ValuationInput> = {
    "Apcotex Inds": {
        "netDebt": -67,
        "ttmEbitda": 256.0,
        "mcapAtWriting": 3157.0,
        "peAtWriting": 19.6
    },
    "Tinna Rubber": {
        "netDebt": 125,
        "ttmEbitda": 106.0,
        "mcapAtWriting": 1822.0,
        "peAtWriting": 29.5
    },
    "GRP": {
        "netDebt": 207,
        "ttmEbitda": 47.0,
        "mcapAtWriting": 1067.0,
        "peAtWriting": 156.0
    }
};
