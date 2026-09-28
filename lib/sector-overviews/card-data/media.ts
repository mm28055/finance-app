import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const mediaCharts: Record<string, ProfileCharts> = {
    "Saregama India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 32
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 34
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
                199.0,
                221.0,
                249.0,
                277.0,
                337.0
            ],
            "ocf": [
                94.0,
                93.0,
                93.0,
                331.0,
                100.0
            ],
            "fcf": [
                21.0,
                -10.0,
                1.0,
                169.0,
                -114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹76cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "34%"
            }
        ],
        "statsAsOf": "28 Sep 2026"
    },
    "Tips Music": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 73
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
                86.0,
                102.0,
                158.0,
                207.0,
                276.0
            ],
            "ocf": [
                29.0,
                81.0,
                233.0,
                120.0,
                197.0
            ],
            "fcf": [
                29.0,
                80.0,
                230.0,
                118.0,
                191.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹153cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "80%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "73%"
            }
        ],
        "statsAsOf": "28 Sep 2026"
    },
    "Basilic Fly Studio": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 64
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                2.0,
                38.0,
                49.0,
                72.0,
                85.0
            ],
            "ocf": [
                1.0,
                11.0,
                -28.0,
                20.0,
                23.0
            ],
            "fcf": [
                0.0,
                9.0,
                -29.0,
                -80.0,
                -50.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹32cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "11%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "28 Sep 2026"
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const mediaValuationInputs: Record<string, ValuationInput> = {
    "Saregama India": {
        "netDebt": -76,
        "ttmEbitda": 374.0,
        "mcapAtWriting": 9444.0,
        "peAtWriting": 41.4
    },
    "Tips Music": {
        "netDebt": -153,
        "ttmEbitda": 273.0,
        "mcapAtWriting": 8493.0,
        "peAtWriting": 39.6
    },
    "Basilic Fly Studio": {
        "netDebt": 32,
        "ttmEbitda": 79.0,
        "mcapAtWriting": 421.0,
        "peAtWriting": 8.76
    }
};
