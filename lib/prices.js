// First time attender discount
firstTimeAttenderDiscount = 40; // $40 USD

// Discount for half days (Monday and Saturday)
halfDayDiscountAmount = 10; // $10 USD

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
            //'private': 105, // private lodgings
            'semiprivate': 75, // semiprivate lodgings
            'dorm-proximate-bathroom': 60, // dorm - bathroom same building
            'dorm-distant-bathroom': 55, // dorm - bathroom different building
            'camping': 25 // daily camping
        },
        'weekly': {
            //'private': 505, // weekly private lodgings
            'semiprivate': 405, // weekly semiprivate
            'dorm-proximate-bathroom': 300, // dorm - bathroom same building
            'dorm-distant-bathroom': 250, // dorm - bathroom different building
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
            //'private': 209,
            'semiprivate': 159,
            'dorm-proximate-bathroom': 89, // dorm - bathroom same building
            'dorm-distant-bathroom': 109, // dorm - bathroom different building
            'camping': 59,
            'yaf': 49,
            'jym': 39
        },
        'weekly': {
            //'private': 509,
            'semiprivate': 409,
            'dorm-proximate-bathroom': 359, // dorm - bathroom same building
            'dorm-distant-bathroom': 309, // dorm - bathroom different building
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
            //'private': 203,
            'semiprivate': 153,
            'dorm-proximate-bathroom': 103, // dorm - bathroom same building
            'dorm-distant-bathroom': 77, // dorm - bathroom different building
            'camping': 53,
            'jym': 43,
            'yaf': 33
        },
        'weekly': {
            //'private': 503,
            'semiprivate': 403,
            'dorm-proximate-bathroom': 303, // dorm - bathroom same building
            'dorm-distant-bathroom': 253, // dorm - bathroom different building
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
            //'private': 202,
            'semiprivate': 152,
            'dorm-proximate-bathroom': 102, // dorm - bathroom same building
            'dorm-distant-bathroom': 72, // dorm - bathroom different building
            'camping': 52,
            'jym': 42
        },
        'weekly': {
            //'private': 502,
            'semiprivate': 402,
            'dorm-proximate-bathroom': 302, // dorm - bathroom same building
            'dorm-distant-bathroom': 272, // dorm - bathroom different building
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
            //'private': 201,
            'semiprivate': 151,
            'dorm-proximate-bathroom': 101, // dorm - bathroom same building
            'dorm-distant-bathroom': 71, // dorm - bathroom different building
            'camping': 51
        },
        'weekly': {
            //'private': 501,
            'semiprivate': 401,
            'dorm-proximate-bathroom': 301, // dorm - bathroom same building
            'dorm-distant-bathroom': 281, // dorm - bathroom different building
            'camping': 201
        }
    }
};

