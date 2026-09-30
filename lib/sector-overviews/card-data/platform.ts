import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const platformCharts: Record<string, ProfileCharts> = {
    "Swiggy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
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
                    "share": 52
                },
                {
                    "label": "Operating loss",
                    "share": 14
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
                -3650.0,
                -4273.0,
                -2199.0,
                -2788.0,
                -3235.0
            ],
            "ocf": [
                -3900.0,
                -4060.0,
                -1313.0,
                -2169.0,
                -2898.0
            ],
            "fcf": [
                -4191.0,
                -4228.0,
                -1665.0,
                -2919.0,
                -3817.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7,526cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                71,
                64
            ],
            "inventoryDays": [
                4,
                3
            ],
            "payableDays": [
                154,
                83
            ],
            "cycleDays": [
                -79,
                -16
            ],
            "absorbed5y": -1895,
            "receivables5y": -4029,
            "inventory5y": -42,
            "payables5y": 1956
        }
    },
    "Urban Company": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 21
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 29
                },
                {
                    "label": "Other costs",
                    "share": 61
                },
                {
                    "label": "Operating loss",
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
                -549.0,
                -364.0,
                -146.0,
                -40.0,
                -254.0
            ],
            "ocf": [
                -315.0,
                -238.0,
                -86.0,
                55.0,
                -99.0
            ],
            "fcf": [
                -326.0,
                -253.0,
                -95.0,
                43.0,
                -140.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,658cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                6,
                9
            ],
            "inventoryDays": [
                118,
                103
            ],
            "payableDays": [
                393,
                204
            ],
            "cycleDays": [
                -269,
                -93
            ],
            "absorbed5y": 71,
            "receivables5y": -51,
            "inventory5y": -71,
            "payables5y": 135
        }
    },
    "Pine Labs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 14
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 39
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                5.0,
                -25.0,
                218.0,
                358.0
            ],
            "ocf": [
                -79.0,
                -152.0,
                -229.0,
                50.0,
                395.0
            ],
            "fcf": [
                -410.0,
                -519.0,
                -495.0,
                -100.0,
                157.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "168.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7,813cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-2%",
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
                116,
                140
            ],
            "inventoryDays": [
                134,
                32
            ],
            "payableDays": [
                693,
                382
            ],
            "cycleDays": [
                116,
                -210
            ],
            "absorbed5y": -1351,
            "receivables5y": -751,
            "inventory5y": 40,
            "payables5y": 203
        }
    },
    "TBO Tek": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 63
                },
                {
                    "label": "Operating profit",
                    "share": 15
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
                19.4,
                19.9,
                17.1,
                17.9,
                18.9,
                16.6,
                13.0,
                14.6,
                14.5,
                15.5,
                12.8,
                12.9,
                14.9
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
                32.0,
                189.0,
                261.0,
                285.0,
                378.0
            ],
            "ocf": [
                198.0,
                237.0,
                226.0,
                289.0,
                -21.0
            ],
            "fcf": [
                184.0,
                230.0,
                188.0,
                236.0,
                -88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "68.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "40.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹785cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "81%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                401,
                724
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
                401,
                724
            ],
            "absorbed5y": -172,
            "receivables5y": -3693,
            "inventory5y": null,
            "payables5y": 3484
        }
    },
    "Cartrade Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 40
                },
                {
                    "label": "Other costs",
                    "share": 19
                },
                {
                    "label": "Operating profit",
                    "share": 33
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
                -133.0,
                34.0,
                80.0,
                152.0,
                258.0
            ],
            "ocf": [
                63.0,
                48.0,
                16.0,
                171.0,
                257.0
            ],
            "fcf": [
                57.0,
                41.0,
                13.0,
                166.0,
                230.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "61.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "49.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹811cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "142%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "33%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                48,
                44
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
                44
            ],
            "absorbed5y": -4,
            "receivables5y": -46,
            "inventory5y": 19,
            "payables5y": -20
        }
    },
    "BlackBuck": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 24
                },
                {
                    "label": "Staff",
                    "share": 25
                },
                {
                    "label": "Other costs",
                    "share": 26
                },
                {
                    "label": "Operating profit",
                    "share": 26
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
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
                -52.5,
                -58.7,
                -13.6,
                -93.5,
                8.7,
                15.2,
                26.3,
                32.8,
                27.8,
                24.5,
                26.2,
                24.3,
                24.5
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
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
                -231.0,
                -232.0,
                -158.0,
                93.0,
                167.0
            ],
            "ocf": [
                -78.0,
                -119.0,
                45.0,
                58.0,
                169.0
            ],
            "fcf": [
                -100.0,
                -145.0,
                21.0,
                14.0,
                57.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "65.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "60.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹629cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "26%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                656,
                15
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
                656,
                15
            ],
            "absorbed5y": 89,
            "receivables5y": 74,
            "inventory5y": null,
            "payables5y": 36
        }
    },
    "Macfos": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
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
                9.7,
                10.9,
                12.1,
                15.3,
                9.4,
                9.9,
                8.2,
                10.4,
                12.5,
                10.5,
                10.2,
                14.3,
                10.6
            ],
            "index": [
                100,
                97,
                99,
                94,
                95,
                98,
                97,
                99,
                94,
                99,
                97,
                95,
                98
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
                9.0,
                11.0,
                16.0,
                24.0,
                38.0
            ],
            "ocf": [
                -1.0,
                6.0,
                4.0,
                -25.0,
                -8.0
            ],
            "fcf": [
                -1.5,
                0.8700000000000001,
                2.15,
                -29.86,
                -10.51
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹34cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-24%",
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
                11,
                16
            ],
            "inventoryDays": [
                112,
                122
            ],
            "payableDays": [
                23,
                26
            ],
            "cycleDays": [
                100,
                113
            ],
            "absorbed5y": -100,
            "receivables5y": -12,
            "inventory5y": -74,
            "payables5y": 15
        }
    },
    "Matrimony.com": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 33
                },
                {
                    "label": "Other costs",
                    "share": 53
                },
                {
                    "label": "Operating profit",
                    "share": 12
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
                67.0,
                72.0,
                58.0,
                51.0
            ],
            "ocf": [
                78.0,
                57.0,
                61.0,
                57.0,
                75.0
            ],
            "fcf": [
                70.0,
                51.0,
                41.0,
                44.0,
                64.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹154cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "98%",
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
                7,
                1
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
                7,
                1
            ],
            "absorbed5y": 51,
            "receivables5y": 0,
            "inventory5y": 0,
            "payables5y": 30
        }
    },
    "One Mobikwik Systems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 68
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating loss",
                    "share": 4
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
                -132.0,
                -78.0,
                22.0,
                -102.0,
                -40.0
            ],
            "ocf": [
                -321.0,
                27.0,
                -22.0,
                -68.0,
                -78.0
            ],
            "fcf": [
                -324.0,
                26.0,
                -28.0,
                -77.0,
                -90.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "105.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹626cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-4%"
            }
        ],
        "statsAsOf": "28 Sep 2026"
    },
    "AvenuesAI": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 93
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 4
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
                145.0,
                175.0,
                252.0,
                316.0,
                351.0
            ],
            "ocf": [
                122.0,
                113.0,
                728.0,
                72.0,
                537.0
            ],
            "fcf": [
                80.0,
                50.0,
                436.0,
                -304.0,
                196.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,312cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "127%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "4%"
            }
        ],
        "statsAsOf": "28 Sep 2026"
    },
    "Aurum Proptech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 26
                },
                {
                    "label": "Other costs",
                    "share": 39
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
                -19.0,
                -16.0,
                3.0,
                40.0,
                84.0
            ],
            "ocf": [
                -24.0,
                -50.0,
                20.0,
                28.0,
                63.0
            ],
            "fcf": [
                -33.0,
                -70.0,
                -84.0,
                11.0,
                47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "1707.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹65cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "40%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                180,
                50
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
                180,
                50
            ],
            "absorbed5y": -100,
            "receivables5y": -36,
            "inventory5y": null,
            "payables5y": 15
        }
    },
    "Shiprocket": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 1
                },
                {
                    "label": "Power and factory costs",
                    "share": 75
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating loss",
                    "share": 4
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
                -79.0,
                -283.0,
                -293.0,
                -60.0,
                -67.0
            ],
            "ocf": [
                -43.0,
                -138.0,
                -216.0,
                2.0,
                53.0
            ],
            "fcf": [
                -55.0,
                -169.0,
                -241.0,
                -5.0,
                35.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹141cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-3%"
            }
        ],
        "statsAsOf": "30 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                28,
                43
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
                -40,
                43
            ],
            "absorbed5y": -146,
            "receivables5y": -252,
            "inventory5y": -1,
            "payables5y": 142
        }
    },
    "Turtlemint Fintech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 90
                },
                {
                    "label": "Operating loss",
                    "share": 12
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
                -171.0,
                -314.0,
                -211.0,
                -188.0,
                -130.0
            ],
            "ocf": [
                -186.0,
                -286.0,
                -242.0,
                -216.0,
                -182.0
            ],
            "fcf": [
                -192.0,
                -298.0,
                -243.0,
                -218.0,
                -185.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹107cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-12%"
            }
        ],
        "statsAsOf": "30 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                95,
                53
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
                95,
                53
            ],
            "absorbed5y": -166,
            "receivables5y": -109,
            "inventory5y": null,
            "payables5y": -18
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const platformValuationInputs: Record<string, ValuationInput> = {
    "Swiggy": {
        "netDebt": -7526,
        "ttmEbitda": -2931.0,
        "mcapAtWriting": 76847.0,
        "peAtWriting": null
    },
    "Urban Company": {
        "netDebt": -1658,
        "ttmEbitda": -338.0,
        "mcapAtWriting": 26603.0,
        "peAtWriting": null
    },
    "Pine Labs": {
        "netDebt": -7813,
        "ttmEbitda": 409.0,
        "mcapAtWriting": 21739.0,
        "peAtWriting": 168.0
    },
    "TBO Tek": {
        "netDebt": -785,
        "ttmEbitda": 432.0,
        "mcapAtWriting": 18449.0,
        "peAtWriting": 68.6
    },
    "Cartrade Tech": {
        "netDebt": -811,
        "ttmEbitda": 276.0,
        "mcapAtWriting": 14580.0,
        "peAtWriting": 61.3
    },
    "BlackBuck": {
        "netDebt": -629,
        "ttmEbitda": 176.0,
        "mcapAtWriting": 11190.0,
        "peAtWriting": 65.1
    },
    "Macfos": {
        "netDebt": 34,
        "ttmEbitda": 38.0,
        "mcapAtWriting": 1171.0,
        "peAtWriting": 44.1
    },
    "Matrimony.com": {
        "netDebt": -154,
        "ttmEbitda": 65.0,
        "mcapAtWriting": 1126.0,
        "peAtWriting": 25.1
    },
    "One Mobikwik Systems": {
        "netDebt": -626,
        "ttmEbitda": 9.0,
        "mcapAtWriting": 1571.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "AvenuesAI": {
        "netDebt": -1312,
        "ttmEbitda": 376.0,
        "mcapAtWriting": 5404.0,
        "peAtWriting": 18.2
    },
    "Aurum Proptech": {
        "netDebt": 65,
        "ttmEbitda": 106.0,
        "mcapAtWriting": 1604.0,
        "peAtWriting": 1707.0
    },
    "Shiprocket": {
        "netDebt": 141,
        "ttmEbitda": -60.0,
        "mcapAtWriting": 8727.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Turtlemint Fintech": {
        "netDebt": -107,
        "ttmEbitda": -117.0,
        "mcapAtWriting": 2256.0,
        "peAtWriting": null,
        "lossMaking": true
    }
};
