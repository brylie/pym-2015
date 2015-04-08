// First time attender discount
firstTimeAttenderDiscount = 40; // $40 USD

// Discount for half days (Monday and Saturday)
halfDayDiscountAmount = 10; // $10 USD

// Percentage for early discount and late fee
// Defined as decimal, for simple multiplication
earlyDiscountOrLateFeePercentage = 0.05; // 5%

// Linens
linensFee = 25 // $25

// This object will contain registration prices for 2015 PYM
// The hierarchy for prices is as follows
//  age group -> registration type -> accommodations -> days attending
prices = {
    /*
    * Adult prices
    */
    'adult': {
        'commuter': 65, // daily commuter fee
        'daily': {
            'semiprivate': 165, // semiprivate lodgings
            'dorm': 130, // dorm
            'camping': 110 // daily camping
        },
        'weekly': {
            'semiprivate': 795, // weekly semiprivate
            'dorm': 595, // dorm
            'camping': 480, // weekly camping
            'yaf': 205, // weekly yaf
            'jym': 205 // weekly jym
        }
    },
    /*
    * Young adult prices
    */
    'youngAdult': {
        'commuter': 49,
        'daily': {
            'semiprivate': 159,
            'dorm': 89,
            'camping': 59,
            'yaf': 49,
            'jym': 39
        },
        'weekly': {
            'semiprivate': 409,
            'dorm': 359,
            'camping': 209,
            'yaf': 229,
            'jym': 219
        }
    },
    /*
    * Teen prices
    */
    'teen': {
        'commuter': 33,
        'daily': {
            'semiprivate': 153,
            'dorm': 103,
            'camping': 53,
            'jym': 43,
            'yaf': 33
        },
        'weekly': {
            'semiprivate': 403,
            'dorm': 303,
            'camping': 203,
            'yaf': 203,
            'jym': 203
        }
    },
    /*
    * Youth prices
    */
    'youth': {
        'commuter': 55,
        'daily': {
            'semiprivate': 75,
            'dorm': 102,
            'camping': 60,
            'jym': 42
        },
        'weekly': {
            'semiprivate': 345,
            'dorm': 302,
            'camping': 300,
            'yaf': 202,
            'jym': 202
        }
    },
    /*
    * Child prices
    */
    'child': {
        'commuter': 25,
        'daily': {
            'semiprivate': 65,
            'dorm': 45,
            'camping': 35
        },
        'weekly': {
            'semiprivate': 300,
            'dorm': 185,
            'camping': 140
        }
    }
};

