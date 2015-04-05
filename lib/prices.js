// First time attender discount
firstTimeAttenderDiscount = 40; // $40 USD

// Half days, used for discount calculation
halfDays = ["Monday", "Saturday"];

// Discount for half days (Monday and Saturday)
halfDayDiscountAmount = 10; // $10 USD

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
        'commuter': 55, // daily commuter fee
        'daily': {
            'semiprivate': 75, // semiprivate lodgings
            'dorm': 60, // dorm
            'camping': 25 // daily camping
        },
        'weekly': {
            'semiprivate': 405, // weekly semiprivate
            'dorm': 300, // dorm
            'camping': 205, // weekly camping
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
        'commuter': 22,
        'daily': {
            'semiprivate': 152,
            'dorm': 102,
            'camping': 52,
            'jym': 42
        },
        'weekly': {
            'semiprivate': 402,
            'dorm': 302,
            'camping': 202,
            'yaf': 202,
            'jym': 202
        }
    },
    /*
    * Child prices
    */
    'child': {
        'commuter': 11,
        'daily': {
            'semiprivate': 151,
            'dorm': 101,
            'camping': 51
        },
        'weekly': {
            'semiprivate': 401,
            'dorm': 301,
            'camping': 201
        }
    }
};

