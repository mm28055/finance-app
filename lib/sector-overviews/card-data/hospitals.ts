import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const hospitalsCharts: Record<string, ProfileCharts> = {
    "Narayana Hrudayalaya": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 19
                },
                {
                    "label": "Power and hospital running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 28
                },
                {
                    "label": "Operating profit",
                    "share": 21
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
                664.0,
                987.0,
                1168.0,
                1298.0,
                1641.0
            ],
            "ocf": [
                485.0,
                1085.0,
                1067.0,
                986.0,
                1621.0
            ],
            "fcf": [
                234.0,
                563.0,
                96.0,
                -96.0,
                746.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,156cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                43,
                30
            ],
            "inventoryDays": [
                30,
                42
            ],
            "payableDays": [
                180,
                248
            ],
            "cycleDays": [
                -108,
                -176
            ],
            "absorbed5y": -72,
            "receivables5y": -321,
            "inventory5y": -93,
            "payables5y": 405
        }
    },
    "Global Health (Medanta)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 23
                },
                {
                    "label": "Power and hospital running costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 25
                },
                {
                    "label": "Other costs",
                    "share": 28
                },
                {
                    "label": "Operating profit",
                    "share": 21
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
                458.0,
                637.0,
                809.0,
                886.0,
                930.0
            ],
            "ocf": [
                311.0,
                645.0,
                612.0,
                624.0,
                714.0
            ],
            "fcf": [
                37.0,
                409.0,
                333.0,
                107.0,
                -124.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "70.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "41.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹57cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                30,
                34
            ],
            "inventoryDays": [
                36,
                29
            ],
            "payableDays": [
                90,
                89
            ],
            "cycleDays": [
                -24,
                -26
            ],
            "absorbed5y": -195,
            "receivables5y": -142,
            "inventory5y": -39,
            "payables5y": 132
        }
    },
    "Krishna Inst.Medi": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Running costs, incl. medicines and doctors’ fees",
                    "share": 58
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). This company’s accounts group medicines, consumables and doctors’ fees with running costs."
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
                524.0,
                611.0,
                648.0,
                793.0,
                815.0
            ],
            "ocf": [
                324.0,
                432.0,
                521.0,
                582.0,
                511.0
            ],
            "fcf": [
                154.0,
                -143.0,
                -126.0,
                -427.0,
                -917.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "161.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "45.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,075cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                28,
                52
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
                -67,
                52
            ],
            "absorbed5y": -355,
            "receivables5y": -387,
            "inventory5y": -59,
            "payables5y": 178
        }
    },
    "Dr Agarwal's Health Care": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 9
                },
                {
                    "label": "Power and hospital running costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 26
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
                186.0,
                275.0,
                367.0,
                463.0,
                577.0
            ],
            "ocf": [
                164.0,
                233.0,
                346.0,
                357.0,
                519.0
            ],
            "fcf": [
                93.0,
                75.0,
                114.0,
                36.0,
                58.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "106.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹785cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
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
                30,
                28
            ],
            "inventoryDays": [
                144,
                178
            ],
            "payableDays": [
                389,
                283
            ],
            "cycleDays": [
                -215,
                -76
            ],
            "absorbed5y": -169,
            "receivables5y": -179,
            "inventory5y": -62,
            "payables5y": 66
        }
    },
    "Rainbow Children's Medicare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 13
                },
                {
                    "label": "Power and hospital running costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 32
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
                308.0,
                400.0,
                432.0,
                494.0,
                548.0
            ],
            "ocf": [
                224.0,
                329.0,
                321.0,
                396.0,
                420.0
            ],
            "fcf": [
                162.0,
                188.0,
                -33.0,
                250.0,
                204.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹453cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "77%",
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
                15,
                22
            ],
            "inventoryDays": [
                28,
                67
            ],
            "payableDays": [
                121,
                162
            ],
            "cycleDays": [
                -78,
                -73
            ],
            "absorbed5y": -82,
            "receivables5y": -70,
            "inventory5y": -32,
            "payables5y": 59
        }
    },
    "Yatharth Hospital": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 19
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 37
                },
                {
                    "label": "Operating profit",
                    "share": 24
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
                112.0,
                135.0,
                182.0,
                225.0,
                292.0
            ],
            "ocf": [
                60.0,
                64.0,
                -3.0,
                150.0,
                205.0
            ],
            "fcf": [
                21.0,
                44.0,
                -96.0,
                -161.0,
                -112.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "61.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "36.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "24%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                83,
                113
            ],
            "inventoryDays": [
                32,
                32
            ],
            "payableDays": [
                171,
                171
            ],
            "cycleDays": [
                83,
                -26
            ],
            "absorbed5y": -289,
            "receivables5y": -356,
            "inventory5y": -18,
            "payables5y": 81
        }
    },
    "Jupiter Life Line Hospitals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 19
                },
                {
                    "label": "Power and hospital running costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 29
                },
                {
                    "label": "Operating profit",
                    "share": 23
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
                153.0,
                201.0,
                242.0,
                303.0,
                343.0
            ],
            "ocf": [
                137.0,
                176.0,
                115.0,
                267.0,
                268.0
            ],
            "fcf": [
                45.0,
                99.0,
                30.0,
                -61.0,
                -234.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "47.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹40cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
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
                14,
                18
            ],
            "inventoryDays": [
                39,
                49
            ],
            "payableDays": [
                157,
                121
            ],
            "cycleDays": [
                -104,
                -54
            ],
            "absorbed5y": -98,
            "receivables5y": -60,
            "inventory5y": -23,
            "payables5y": 32
        }
    },
    "Artemis Medicare": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Running costs, incl. medicines and doctors’ fees",
                    "share": 63
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). This company’s accounts group medicines, consumables and doctors’ fees with running costs."
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
                68.0,
                94.0,
                133.0,
                152.0,
                188.0
            ],
            "ocf": [
                60.0,
                127.0,
                109.0,
                156.0,
                132.0
            ],
            "fcf": [
                -49.0,
                -19.0,
                36.0,
                63.0,
                27.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "46.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹56cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "92%",
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
                48,
                40
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
                48,
                40
            ],
            "absorbed5y": -37,
            "receivables5y": -77,
            "inventory5y": -4,
            "payables5y": 46
        }
    },
    "Shalby": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Medicines and consumables",
                    "share": 13
                },
                {
                    "label": "Running costs, incl. medicines and doctors’ fees",
                    "share": 49
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
                    "share": 13
                }
            ],
            "note": "Filed expense split (Screener). This company’s accounts group medicines, consumables and doctors’ fees with running costs."
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
                122.0,
                138.0,
                179.0,
                135.0,
                145.0
            ],
            "ocf": [
                19.0,
                68.0,
                20.0,
                -4.0,
                -0.0
            ],
            "fcf": [
                -56.0,
                50.0,
                -27.0,
                -75.0,
                -149.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹511cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "14%",
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
                53,
                73
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                621,
                310
            ],
            "cycleDays": [
                495,
                692
            ],
            "absorbed5y": -507,
            "receivables5y": -143,
            "inventory5y": -355,
            "payables5y": 3
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const hospitalsValuationInputs: Record<string, ValuationInput> = {
    "Narayana Hrudayalaya": {
        "netDebt": 3156,
        "ttmEbitda": 1742.0,
        "mcapAtWriting": 39230.0,
        "peAtWriting": 45.5
    },
    "Global Health (Medanta)": {
        "netDebt": 57,
        "ttmEbitda": 979.0,
        "mcapAtWriting": 40233.0,
        "peAtWriting": 70.3
    },
    "Krishna Inst.Medi": {
        "netDebt": 4075,
        "ttmEbitda": 833.0,
        "mcapAtWriting": 33491.0,
        "peAtWriting": 161.0
    },
    "Dr Agarwal's Health Care": {
        "netDebt": 785,
        "ttmEbitda": 612.0,
        "mcapAtWriting": 15675.0,
        "peAtWriting": 106.0
    },
    "Rainbow Children's Medicare": {
        "netDebt": 453,
        "ttmEbitda": 575.0,
        "mcapAtWriting": 14316.0,
        "peAtWriting": 50.0
    },
    "Yatharth Hospital": {
        "netDebt": -1,
        "ttmEbitda": 310.0,
        "mcapAtWriting": 11194.0,
        "peAtWriting": 61.8
    },
    "Jupiter Life Line Hospitals": {
        "netDebt": 40,
        "ttmEbitda": 344.0,
        "mcapAtWriting": 9009.0,
        "peAtWriting": 47.1
    },
    "Artemis Medicare": {
        "netDebt": 56,
        "ttmEbitda": 203.0,
        "mcapAtWriting": 5405.0,
        "peAtWriting": 46.6
    },
    "Shalby": {
        "netDebt": 511,
        "ttmEbitda": 143.0,
        "mcapAtWriting": 1568.0,
        "peAtWriting": 39.9
    }
};
