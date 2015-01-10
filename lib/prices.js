// This object will contain registration prices for 2015 PYM
// The hierarchy for prices is as follows
//  age group -> registration type -> accommodations -> days attending
prices = {
    /*
    * Adult prices
    */
    'adult': {
        'commuter': 50,
        'daily': {
            'private': 100,
            'semiPrivate': 75,
            'dorm': 50,
            'camping': 25
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
            'dorm': 300,
            'camping': 200,
            'yaf': 200,
            'jym': 200
        }
    },
    'youngAdult': {
        'commuter': {
            'monday': 50,
            'tuesday': 50,
            'wednesday': 50,
            'thursday': 50,
            'friday': 50,
            'saturday': 50
        },
        'daily': {
            'private': {},
            'semiPrivate': {},
            'dorm': {},
            'camping': {}
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
            'dorm': 300,
            'camping': 200,
            'yaf': 200,
            'jym': 200
        }
    },
    /*
    * Teen prices
    */
    'teen': {
        'commuter': {
            'monday': 50,
            'tuesday': 50,
            'wednesday': 50,
            'thursday': 50,
            'friday': 50,
            'saturday': 50
        },
        'daily': {
            'private': {},
            'semiPrivate': {},
            'dorm': {},
            'camping': {}
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
            'dorm': 300,
            'camping': 200,
            'yaf': 200,
            'jym': 200
        }
    },
    /*
    * Youth prices
    */
    'youth': {
        'commuter': {
            'monday': 50,
            'tuesday': 50,
            'wednesday': 50,
            'thursday': 50,
            'friday': 50,
            'saturday': 50
        },
        'daily': {
            'private': {},
            'semiPrivate': {},
            'dorm': {},
            'camping': {}
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
            'dorm': 300,
            'camping': 200,
            'yaf': 200,
            'jym': 200
        }
    },
    /*
    * Child prices
    */
    'child': {
        'commuter': {
            'monday': 50,
            'tuesday': 50,
            'wednesday': 50,
            'thursday': 50,
            'friday': 50,
            'saturday': 50
        },
        'daily': {
            'private': {},
            'semiPrivate': {},
            'dorm': {},
            'camping': {}
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
            'dorm': 300,
            'camping': 200,
            'yaf': 200,
            'jym': 200
        }
    }
};

calculatePrices = function (ageGroup, registrationType, accommodations, days) {
    // Calculate registration type based on Age, registration type, accommodations, and number of days


    // var total = 0;

    // if registration type is commuter
        // dayFee = prices[ageGroup][registrationType]
        // for each selected days
            // check to see if any day should be discounted
            // total += dayFee

    // if registration type is daily
        // dayFee = prices[ageGroup][registrationType][accommodations]
        // for each selected days
            // if day should be discounted
                //total += day * discount (e.g. 0.5)
            // else
                // total += day

    // if registration type is weekly
    // total = prices[ageGroup][registrationType][accommodations]

    // return total
};
