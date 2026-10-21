import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const realtyCharts: Record<string, ProfileCharts> = {
    "Brigade Enterprises": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 16
                },
                {
                    "label": "Project and site costs",
                    "share": 36
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 14
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
                770.0,
                866.0,
                1202.0,
                1421.0,
                1433.0
            ],
            "ocf": [
                1032.0,
                966.0,
                334.0,
                995.0,
                -137.0
            ],
            "fcf": [
                824.0,
                643.0,
                65.0,
                356.0,
                -1876.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,659cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                61,
                38
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                885,
                361
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -1279,
            "receivables5y": -70,
            "inventory5y": -6234,
            "payables5y": 316
        }
    },
    "Sobha": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 16
                },
                {
                    "label": "Project and site costs",
                    "share": 54
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 6
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
                533.0,
                370.0,
                277.0,
                294.0,
                310.0
            ],
            "ocf": [
                826.0,
                1150.0,
                647.0,
                200.0,
                430.0
            ],
            "fcf": [
                806.0,
                1027.0,
                522.0,
                69.0,
                222.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "56.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹447cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "182%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "6%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                50,
                19
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                688,
                365
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": 1759,
            "receivables5y": -168,
            "inventory5y": -5362,
            "payables5y": 394
        }
    },
    "Signatureglobal Ind.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 4
                },
                {
                    "label": "Project and site costs",
                    "share": 72
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating loss",
                    "share": 2
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
                -84.0,
                6.0,
                -28.0,
                44.0,
                -47.0
            ],
            "ocf": [
                205.0,
                -278.0,
                92.0,
                501.0,
                126.0
            ],
            "fcf": [
                116.0,
                -297.0,
                56.0,
                456.0,
                100.0
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
                "value": "₹242cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-2%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                2,
                9
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
                2,
                9
            ],
            "absorbed5y": 787,
            "receivables5y": -52,
            "inventory5y": -4704,
            "payables5y": 452
        }
    },
    "Sri Lotus": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 55
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 36
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
                12.0,
                28.0,
                158.0,
                289.0,
                281.0
            ],
            "ocf": [
                -88.0,
                65.0,
                46.0,
                -20.0,
                -326.0
            ],
            "fcf": [
                -88.0,
                64.0,
                45.0,
                -21.0,
                -326.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹718cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-42%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "37%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                42,
                156
            ],
            "inventoryDays": [
                717,
                717
            ],
            "payableDays": [
                33,
                33
            ],
            "cycleDays": [
                42,
                840
            ],
            "absorbed5y": -907,
            "receivables5y": -321,
            "inventory5y": -354,
            "payables5y": 36
        }
    },
    "Max Estates": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 2
                },
                {
                    "label": "Project and site costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 61
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
                31.0,
                32.0,
                18.0,
                44.0,
                24.0
            ],
            "ocf": [
                41.0,
                -456.0,
                271.0,
                225.0,
                -616.0
            ],
            "fcf": [
                -88.0,
                -978.0,
                -50.0,
                -452.0,
                -697.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "1657.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "640.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,797cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-359%",
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
                10,
                22
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
                85,
                22
            ],
            "absorbed5y": -534,
            "receivables5y": -7,
            "inventory5y": -5003,
            "payables5y": 2476
        }
    },
    "Mahindra Life. Dev": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 191
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating loss",
                    "share": 11
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
                -88.0,
                -110.0,
                -171.0,
                -170.0,
                -121.0
            ],
            "ocf": [
                -52.0,
                -148.0,
                -661.0,
                -542.0,
                -545.0
            ],
            "fcf": [
                -65.0,
                -162.0,
                -677.0,
                -557.0,
                -563.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "276.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹127cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                85,
                71
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
                85,
                71
            ],
            "absorbed5y": -1269,
            "receivables5y": -756,
            "inventory5y": -3500,
            "payables5y": 2989
        }
    },
    "Ganesh Housing": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 83
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
                134.0,
                252.0,
                624.0,
                779.0,
                423.0
            ],
            "ocf": [
                41.0,
                31.0,
                638.0,
                410.0,
                213.0
            ],
            "fcf": [
                36.0,
                24.0,
                610.0,
                405.0,
                209.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹467cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "83%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                111,
                209
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
                111,
                209
            ],
            "absorbed5y": -550,
            "receivables5y": -233,
            "inventory5y": -127,
            "payables5y": 13
        }
    },
    "Puravankara": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 2
                },
                {
                    "label": "Project and site costs",
                    "share": 56
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 19
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
                208.0,
                230.0,
                456.0,
                291.0,
                691.0
            ],
            "ocf": [
                134.0,
                145.0,
                896.0,
                -531.0,
                345.0
            ],
            "fcf": [
                124.0,
                113.0,
                841.0,
                -574.0,
                282.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,110cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "53%",
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
                93,
                77
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
                93,
                77
            ],
            "absorbed5y": -791,
            "receivables5y": -445,
            "inventory5y": -5650,
            "payables5y": 486
        }
    },
    "Raymond Realty": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 163
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
                    "share": 15
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
                -19.0,
                61.0,
                447.0
            ],
            "ocf": [
                -226.0,
                -237.0,
                -910.0
            ],
            "fcf": [
                -228.0,
                -238.0,
                -990.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹659cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                7,
                28
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
                28
            ],
            "absorbed5y": -1772,
            "receivables5y": -1500,
            "inventory5y": -3512,
            "payables5y": 2747
        }
    },
    "Keystone Realtors": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 14
                },
                {
                    "label": "Project and site costs",
                    "share": 67
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 5
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
                178.0,
                104.0,
                110.0,
                204.0,
                122.0
            ],
            "ocf": [
                -110.0,
                306.0,
                183.0,
                -11.0,
                -509.0
            ],
            "fcf": [
                -110.0,
                299.0,
                178.0,
                -30.0,
                -518.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹602cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-20%",
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
                33,
                47
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
                null,
                null
            ],
            "absorbed5y": -1196,
            "receivables5y": -299,
            "inventory5y": 478,
            "payables5y": 702
        }
    },
    "Sunteck Realty": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 50
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 12
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
                95.0,
                64.0,
                118.0,
                186.0,
                305.0
            ],
            "ocf": [
                -30.0,
                283.0,
                111.0,
                190.0,
                -432.0
            ],
            "fcf": [
                -48.0,
                265.0,
                48.0,
                157.0,
                -589.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹679cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "16%",
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
                192,
                37
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
                192,
                37
            ],
            "absorbed5y": -539,
            "receivables5y": 227,
            "inventory5y": -987,
            "payables5y": 63
        }
    },
    "Ashiana Housing": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 3
                },
                {
                    "label": "Project and site costs",
                    "share": 69
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                -9.0,
                30.0,
                97.0,
                18.0,
                130.0
            ],
            "ocf": [
                -61.0,
                12.0,
                212.0,
                234.0,
                342.0
            ],
            "fcf": [
                -66.0,
                -4.0,
                180.0,
                194.0,
                314.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹302cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "278%",
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
                41,
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
                41,
                14
            ],
            "absorbed5y": 348,
            "receivables5y": -29,
            "inventory5y": -1960,
            "payables5y": 62
        }
    },
    "Arvind SmartSpaces": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 161
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 19
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
                49.0,
                49.0,
                112.0,
                168.0,
                152.0
            ],
            "ocf": [
                161.0,
                -101.0,
                30.0,
                -84.0,
                -170.0
            ],
            "fcf": [
                152.0,
                -112.0,
                14.0,
                -100.0,
                -217.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹409cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-31%",
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
                2,
                10
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
                2,
                10
            ],
            "absorbed5y": -552,
            "receivables5y": -14,
            "inventory5y": -1505,
            "payables5y": 149
        }
    },
    "Marathon NextgenReal": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 64
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                74.0,
                246.0,
                233.0,
                173.0,
                121.0
            ],
            "ocf": [
                76.0,
                315.0,
                22.0,
                -25.0,
                -54.0
            ],
            "fcf": [
                75.0,
                315.0,
                21.0,
                -28.0,
                -57.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹36cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "39%",
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
                45,
                42
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
                42
            ],
            "absorbed5y": -352,
            "receivables5y": 3,
            "inventory5y": -337,
            "payables5y": 4
        }
    },
    "Ajmera Realty": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 58
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 26
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
                116.0,
                124.0,
                201.0,
                231.0,
                299.0
            ],
            "ocf": [
                -64.0,
                135.0,
                220.0,
                8.0,
                69.0
            ],
            "fcf": [
                -66.37,
                130.62,
                217.32,
                2.3899999999999997,
                40.230000000000004
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹624cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "38%",
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
                200,
                142
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
                200,
                142
            ],
            "absorbed5y": -464,
            "receivables5y": -245,
            "inventory5y": -553,
            "payables5y": 40
        }
    },
    "Arkade": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and site costs",
                    "share": 70
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 4
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
                54.0,
                60.0,
                168.0,
                206.0,
                189.0
            ],
            "ocf": [
                -125.0,
                -99.0,
                101.0,
                -218.0,
                -119.0
            ],
            "fcf": [
                -127.0,
                -100.0,
                89.0,
                -227.0,
                -150.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹74cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-68%",
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
                9,
                11
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
                9,
                11
            ],
            "absorbed5y": -835,
            "receivables5y": -11,
            "inventory5y": -706,
            "payables5y": 22
        }
    },
    "Shriram Properties": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 5
                },
                {
                    "label": "Project and site costs",
                    "share": 67
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                74.0,
                43.0,
                81.0,
                30.0,
                85.0
            ],
            "ocf": [
                124.0,
                5.0,
                221.0,
                154.0,
                -16.0
            ],
            "fcf": [
                123.0,
                -1.0,
                212.0,
                148.0,
                -20.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "43.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹465cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "156%",
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
                91,
                20
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
                null,
                null
            ],
            "absorbed5y": 29,
            "receivables5y": 105,
            "inventory5y": 132,
            "payables5y": 55
        }
    },
    "Arihant Superstruct.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 60
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                70.0,
                78.0,
                108.0,
                104.0,
                127.0
            ],
            "ocf": [
                21.0,
                -12.0,
                -126.0,
                -178.0,
                -71.0
            ],
            "fcf": [
                19.03,
                -15.11,
                -127.21,
                -254.26,
                -101.28
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹854cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-75%",
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
                66,
                67
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                98,
                98
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -790,
            "receivables5y": 0,
            "inventory5y": -542,
            "payables5y": null
        }
    },
    "Suraj Estate": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 64
                },
                {
                    "label": "Operating profit",
                    "share": 39
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
                151.0,
                233.0,
                203.0,
                218.0
            ],
            "ocf": [
                70.0,
                190.0,
                9.0,
                -306.0,
                -54.0
            ],
            "fcf": [
                68.72,
                189.23,
                -16.35,
                -306.65,
                -57.47
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹595cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-10%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "39%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                125,
                77
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
                125,
                77
            ],
            "absorbed5y": -959,
            "receivables5y": -641,
            "inventory5y": -379,
            "payables5y": 59
        }
    },
    "Eldeco Housing & Ind": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Land, construction and materials",
                    "share": 44
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 28
                },
                {
                    "label": "Operating profit",
                    "share": 19
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
                60.0,
                50.0,
                39.0,
                26.0,
                31.0
            ],
            "ocf": [
                17.0,
                20.0,
                -128.0,
                -7.0,
                104.0
            ],
            "fcf": [
                16.66,
                18.66,
                -128.09,
                -7.07,
                103.77
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹107cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "3%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                18,
                2
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                70,
                70
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -145,
            "receivables5y": 10,
            "inventory5y": -487,
            "payables5y": -11
        }
    },
    "Horizon Industrial Parks": {
        "stats": [
            {
                "label": "P/E",
                "value": "n.m.",
                "note": "Loss-making after tax (FY26 loss ₹204cr; Q1 FY27 loss ₹12cr)."
            },
            {
                "label": "EV/EBITDA",
                "value": "26.2x",
                "note": "Market value ₹13,212cr plus the company's pro forma net debt after the IPO (about ₹2,500cr at June 2026), ÷ last-four-quarter operating profit of ₹599cr. About 20x on the ~₹770cr operating profit implied by contracted rent."
            },
            {
                "label": "Net debt",
                "value": "₹2,500cr",
                "note": "Company's pro forma figure at June 2026 after IPO repayments; Screener shows ₹6,904cr of borrowings at March 2026, before the IPO."
            },
            {
                "label": "Operating margin FY26",
                "value": "77%",
                "note": "Screener basis, excluding other income; the RHP's 79% includes other income. Q1 FY27: 80%."
            },
            {
                "label": "Contracted rent",
                "value": "₹967cr",
                "note": "Annual rent run-rate on signed leases at June 2026, against FY26 revenue of ₹691cr."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Operating and maintenance",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 77
                }
            ],
            "note": "Restated consolidated expense split from the RHP (₹53cr, ₹31cr and ₹76cr on ₹691cr of revenue), matching Screener's ₹160cr of expenses. Interest (₹539cr) and depreciation (₹266cr) come after operating profit."
        },
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                20,
                18
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
                20,
                18
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                19,
                137,
                290,
                531
            ],
            "ocf": [
                89,
                129,
                235,
                464
            ],
            "fcf": [
                -320,
                -662,
                -1348,
                -4276
            ],
            "note": "Screener consolidated. Free cash here is operating cash minus all investing cash (land, buildings and acquisitions of parks), because Screener's own free-cash line does not capture the spending on investment property. Only four years are filed."
        }
    },
    "Kalpataru": {
        "stats": [
            {
                "label": "P/E",
                "value": "42.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "132x",
                "note": "Market value plus net debt, ÷ filed operating profit over the last four quarters (₹101cr). Filed profit is depressed by interest charged into project costs, so this overstates the multiple; it is still very high."
            },
            {
                "label": "Net debt",
                "value": "₹8,106cr",
                "note": "Company figure, March 2026 (Screener borrowings ₹9,168cr); ₹8,229cr at June 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "3.5%",
                "note": "Filed (Screener). The company's adjusted EBITDA margin, before interest charged into projects, was 29.8%."
            },
            {
                "label": "Net debt to equity",
                "value": "2.0x",
                "note": "Company, March and June 2026."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project and construction costs (incl. land and interest charged to projects)",
                    "share": 80
                },
                {
                    "label": "Staff and other costs",
                    "share": 16
                },
                {
                    "label": "Operating profit",
                    "share": 4
                }
            ],
            "note": "Cost of revenue (₹2,764cr) from the filed FY26 income statement as shown by StockAnalysis; staff and other costs are the rest of filed expenses (Screener, ₹3,317cr), not split further in the sources read."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                249,
                68
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
                null,
                null
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
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
                -48,
                -80,
                -129,
                57,
                119
            ],
            "ocf": [
                402,
                2139,
                376,
                488,
                848
            ],
            "fcf": [
                385,
                2123,
                391,
                449,
                742
            ],
            "note": "Filed operating cash runs far ahead of filed operating profit because customer advances come in before revenue is booked and interest paid is counted under financing; borrowings still rose over the period."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const realtyValuationInputs: Record<string, ValuationInput> = {
    "Brigade Enterprises": {
        "netDebt": 3659,
        "ttmEbitda": 1464.0,
        "mcapAtWriting": 19507.0,
        "peAtWriting": 28.6
    },
    "Sobha": {
        "netDebt": -447,
        "ttmEbitda": 364.0,
        "mcapAtWriting": 13116.0,
        "peAtWriting": 56.9
    },
    "Signatureglobal Ind.": {
        "netDebt": 242,
        "ttmEbitda": -126.0,
        "mcapAtWriting": 11098.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Sri Lotus": {
        "netDebt": -718,
        "ttmEbitda": 299.0,
        "mcapAtWriting": 10654.0,
        "peAtWriting": 41.5
    },
    "Max Estates": {
        "netDebt": 1797,
        "ttmEbitda": 18.0,
        "mcapAtWriting": 9727.0,
        "peAtWriting": 1657.0
    },
    "Mahindra Life. Dev": {
        "netDebt": 127,
        "ttmEbitda": 28.0,
        "mcapAtWriting": 7614.0,
        "peAtWriting": 24.5
    },
    "Ganesh Housing": {
        "netDebt": 467,
        "ttmEbitda": 404.0,
        "mcapAtWriting": 6127.0,
        "peAtWriting": 23.1
    },
    "Puravankara": {
        "netDebt": 4110,
        "ttmEbitda": 813.0,
        "mcapAtWriting": 5072.0,
        "peAtWriting": 31.6
    },
    "Raymond Realty": {
        "netDebt": 659,
        "ttmEbitda": 478.0,
        "mcapAtWriting": 4735.0,
        "peAtWriting": 15.7
    },
    "Keystone Realtors": {
        "netDebt": 602,
        "ttmEbitda": 189.0,
        "mcapAtWriting": 4627.0,
        "peAtWriting": 39.4
    },
    "Sunteck Realty": {
        "netDebt": 679,
        "ttmEbitda": 323.0,
        "mcapAtWriting": 4156.0,
        "peAtWriting": 19.5
    },
    "Ashiana Housing": {
        "netDebt": -302,
        "ttmEbitda": 125.0,
        "mcapAtWriting": 3917.0,
        "peAtWriting": 33.1
    },
    "Arvind SmartSpaces": {
        "netDebt": 409,
        "ttmEbitda": 287.0,
        "mcapAtWriting": 2820.0,
        "peAtWriting": 15.3
    },
    "Marathon NextgenReal": {
        "netDebt": -36,
        "ttmEbitda": 138.0,
        "mcapAtWriting": 2777.0,
        "peAtWriting": 14.2
    },
    "Ajmera Realty": {
        "netDebt": 624,
        "ttmEbitda": 311.0,
        "mcapAtWriting": 2378.0,
        "peAtWriting": 15.4
    },
    "Arkade": {
        "netDebt": 74,
        "ttmEbitda": 183.0,
        "mcapAtWriting": 2330.0,
        "peAtWriting": 13.1
    },
    "Shriram Properties": {
        "netDebt": 465,
        "ttmEbitda": 39.0,
        "mcapAtWriting": 1215.0,
        "peAtWriting": 13.3
    },
    "Arihant Superstruct.": {
        "netDebt": 854,
        "ttmEbitda": 117.0,
        "mcapAtWriting": 1050.0,
        "peAtWriting": 26.3
    },
    "Suraj Estate": {
        "netDebt": 595,
        "ttmEbitda": 221.0,
        "mcapAtWriting": 1059.0,
        "peAtWriting": 11.5
    },
    "Eldeco Housing & Ind": {
        "netDebt": -107,
        "ttmEbitda": 45.0,
        "mcapAtWriting": 753.0,
        "peAtWriting": 20.8
    },
    "Horizon Industrial Parks": {
        "netDebt": 2500,
        "ttmEbitda": 599,
        "mcapAtWriting": 13212,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Kalpataru": {
        "netDebt": 8106,
        "ttmEbitda": 101,
        "mcapAtWriting": 5198,
        "peAtWriting": 42.3
    }
};
