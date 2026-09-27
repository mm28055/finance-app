import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const electAndRefracCharts: Record<string, ProfileCharts> = {
    "HEG": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 24
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Petroleum coke price",
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
                22.5,
                16.6,
                15.5,
                7.5,
                6.8,
                17.1,
                14.0,
                -11.4,
                17.3,
                16.9,
                21.8,
                -24.5,
                22.2
            ],
            "index": [
                100,
                85,
                95,
                85,
                82,
                80,
                74,
                84,
                87,
                85,
                93,
                96,
                124
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
                530.0,
                619.0,
                382.0,
                260.0,
                399.0
            ],
            "ocf": [
                -141.0,
                113.0,
                612.0,
                280.0,
                213.0
            ],
            "fcf": [
                -501.0,
                -367.0,
                240.0,
                98.0,
                -40.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.5x",
                "note": "Market value minus net cash, ÷ operating profit over the last year excluding the ~₹230cr loss on the GrafTech stake in Q4 FY26."
            },
            {
                "label": "Net debt",
                "value": "₹312cr net cash",
                "note": "Borrowings of ₹796cr minus ₹250cr of cash and the ₹858cr treasury the company reports (FY26). The GrafTech and Bhilwara Energy stakes are not counted."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "49%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                98,
                71
            ],
            "inventoryDays": [
                431,
                389
            ],
            "payableDays": [
                197,
                138
            ],
            "cycleDays": [
                331,
                323
            ],
            "absorbed5y": -1087,
            "receivables5y": -198,
            "inventory5y": -569,
            "payables5y": 200
        }
    },
    "RHI Magnesita": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 9
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
            "input": "Alumina price",
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
                14.3,
                15.0,
                12.7,
                15.7,
                17.5,
                12.3,
                12.4,
                10.1,
                10.6,
                10.5,
                13.1,
                9.3,
                13.6
            ],
            "index": [
                100,
                98,
                98,
                98,
                101,
                118,
                135,
                131,
                107,
                103,
                102,
                99,
                102
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
                390.0,
                361.0,
                555.0,
                482.0,
                443.0
            ],
            "ocf": [
                27.0,
                238.0,
                271.0,
                373.0,
                409.0
            ],
            "fcf": [
                -35.0,
                193.0,
                189.0,
                254.0,
                273.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹57cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "59%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                89,
                64
            ],
            "inventoryDays": [
                186,
                163
            ],
            "payableDays": [
                161,
                101
            ],
            "cycleDays": [
                114,
                126
            ],
            "absorbed5y": -602,
            "receivables5y": -10,
            "inventory5y": -308,
            "payables5y": -73
        }
    },
    "IFGL Refractories": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alumina price",
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
                -1.1,
                8.9,
                11.1,
                8.0,
                4.5,
                7.3,
                7.9,
                7.8,
                4.9,
                8.1,
                7.2
            ],
            "index": [
                100,
                98,
                98,
                98,
                101,
                118,
                135,
                131,
                107,
                103,
                102,
                99,
                102
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
                143.0,
                153.0,
                155.0,
                130.0,
                137.0
            ],
            "ocf": [
                4.0,
                6.0,
                152.0,
                28.0,
                63.0
            ],
            "fcf": [
                -62.0,
                -131.0,
                17.0,
                -45.0,
                -1.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹87cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "35%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                79,
                82
            ],
            "inventoryDays": [
                154,
                152
            ],
            "payableDays": [
                111,
                86
            ],
            "cycleDays": [
                122,
                148
            ],
            "absorbed5y": -387,
            "receivables5y": -249,
            "inventory5y": -231,
            "payables5y": 94
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const electAndRefracValuationInputs: Record<string, ValuationInput> = {
    "RHI Magnesita": {
        "netDebt": 57,
        "ttmEbitda": 477.0,
        "mcapAtWriting": 7951.0,
        "peAtWriting": 42.5
    },
    "IFGL Refractories": {
        "netDebt": 87,
        "ttmEbitda": 137.0,
        "mcapAtWriting": 1403.0,
        "peAtWriting": 32.8
    }
};
