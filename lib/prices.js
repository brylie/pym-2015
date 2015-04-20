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
            'camping': 110, // daily camping
            'yaf': 60 // daily YAF space
        },
        'weekly': {
            'semiprivate': 795, // weekly semiprivate
            'dorm': 595, // dorm
            'camping': 480, // weekly camping
            'yaf': 295, // weekly yaf
            'jym': 295 // weekly jym
        }
    },
    /*
    * Young adult prices
    */
    'youngAdult': {
        'commuter': 55,
        'daily': {
            'semiprivate': 165,
            'dorm': 60,
            'camping': 60,
            'yaf': 60,
            'jym': 60
        },
        'weekly': {
            'semiprivate': 795,
            'dorm': 295,
            'camping': 295,
            'yaf': 295,
            'jym': 295
        }
    },
    /*
    * Teen prices
    */
    'teen': {
        'commuter': 55,
        'daily': {
            'semiprivate': 75,
            'dorm': 60,
            'camping': 60,
            'jym': 60,
            'yaf': 60
        },
        'weekly': {
            'semiprivate': 345,
            'dorm': 295,
            'camping': 295,
            'yaf': 295,
            'jym': 295
        }
    },
    /*
    * Youth prices
    */
    'youth': {
        'commuter': 25,
        'daily': {
            'semiprivate': 65,
	    'dorm': 45,
	    'camping': 35,
            'yaf': 45,
            'jym': 45
        },
        'weekly': {
            'semiprivate': 300,
            'dorm': 185,
            'camping': 140,
            'yaf': 185,
            'jym': 185
        }
    },
    /*
    * Child prices
    */
    'child': {
        'commuter': 0,
        'daily': {
            'semiprivate': 0,
            'dorm': 0,
            'camping': 0
        },
        'weekly': {
            'semiprivate': 0,
            'dorm': 0,
            'camping': 0
        }
    }
};

