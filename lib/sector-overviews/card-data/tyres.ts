import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const tyresCharts: Record<string, ProfileCharts> = {
    "Apollo Tyres": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Natural rubber price",
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
                16.8,
                18.5,
                18.3,
                16.4,
                14.3,
                13.6,
                13.7,
                13.0,
                13.2,
                14.9,
                15.3,
                14.6,
                11.7
            ],
            "index": [
                100,
                96,
                98,
                107,
                121,
                146,
                125,
                124,
                129,
                128,
                120,
                133,
                163
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
                2595.0,
                3333.0,
                4468.0,
                3595.0,
                4170.0
            ],
            "ocf": [
                2154.0,
                2137.0,
                3440.0,
                1823.0,
                3667.0
            ],
            "fcf": [
                308.0,
                1360.0,
                2710.0,
                1054.0,
                2264.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,631cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                36,
                41
            ],
            "inventoryDays": [
                122,
                128
            ],
            "payableDays": [
                104,
                76
            ],
            "cycleDays": [
                54,
                93
            ],
            "absorbed5y": -2256,
            "receivables5y": -1170,
            "inventory5y": -1628,
            "payables5y": 293
        }
    },
    "CEAT": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Natural rubber price",
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
                13.2,
                14.9,
                14.1,
                13.1,
                12.0,
                11.0,
                10.3,
                11.3,
                11.0,
                13.3,
                13.6,
                14.1,
                8.5
            ],
            "index": [
                100,
                96,
                98,
                107,
                121,
                146,
                125,
                124,
                129,
                128,
                120,
                133,
                163
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
                721.0,
                974.0,
                1653.0,
                1475.0,
                2064.0
            ],
            "ocf": [
                619.0,
                1205.0,
                1719.0,
                1092.0,
                1786.0
            ],
            "fcf": [
                -340.0,
                326.0,
                852.0,
                149.0,
                639.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,229cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "93%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                45,
                43
            ],
            "inventoryDays": [
                79,
                68
            ],
            "payableDays": [
                131,
                132
            ],
            "cycleDays": [
                -6,
                -21
            ],
            "absorbed5y": 62,
            "receivables5y": -899,
            "inventory5y": -653,
            "payables5y": 1602
        }
    },
    "JK Tyre & Indust": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Natural rubber price",
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
                12.3,
                15.1,
                14.9,
                13.0,
                13.7,
                11.6,
                8.5,
                9.7,
                10.4,
                13.0,
                13.5,
                12.7,
                6.5
            ],
            "index": [
                100,
                96,
                98,
                107,
                121,
                146,
                125,
                124,
                129,
                128,
                120,
                133,
                163
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
                1073.0,
                1298.0,
                2091.0,
                1599.0,
                2031.0
            ],
            "ocf": [
                346.0,
                1224.0,
                1614.0,
                716.0,
                1444.0
            ],
            "fcf": [
                32.0,
                761.0,
                840.0,
                77.0,
                20.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,581cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                60,
                72
            ],
            "inventoryDays": [
                110,
                96
            ],
            "payableDays": [
                99,
                78
            ],
            "cycleDays": [
                71,
                90
            ],
            "absorbed5y": -1679,
            "receivables5y": -1623,
            "inventory5y": -726,
            "payables5y": 671
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const tyresValuationInputs: Record<string, ValuationInput> = {
    "Apollo Tyres": {
        "netDebt": 2631,
        "ttmEbitda": 4143.0,
        "mcapAtWriting": 25772.0,
        "peAtWriting": 12.1
    },
    "CEAT": {
        "netDebt": 3229,
        "ttmEbitda": 2025.0,
        "mcapAtWriting": 13854.0,
        "peAtWriting": 21.8
    },
    "JK Tyre & Indust": {
        "netDebt": 4581,
        "ttmEbitda": 1887.0,
        "mcapAtWriting": 10233.0,
        "peAtWriting": 14.3
    }
};
