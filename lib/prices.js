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
            'private': 105, // daily private lodgings
            'semiprivate': 75, // daily semiprivate lodgings
            'dorm': 55, // daily dorm lodgings
            'camping': 25 // daily camping
        },
        'weekly': {
            'private': 505, // weekly private lodgings
            'semiprivate': 405, // weekly semiprivate
            'dorm': 305, // weekly dorm
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
            'private': 209,
            'semiprivate': 159,
            'dorm': 109,
            'camping': 59,
            'yaf': 49,
            'jym': 39
        },
        'weekly': {
            'private': 509,
            'semiprivate': 409,
            'dorm': 309,
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
            'private': 203,
            'semiprivate': 153,
            'dorm': 103,
            'camping': 53,
            'jym': 43,
            'yaf': 33
        },
        'weekly': {
            'private': 503,
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
            'private': 202,
            'semiprivate': 152,
            'dorm': 102,
            'camping': 52,
            'jym': 42
        },
        'weekly': {
            'private': 502,
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
            'private': 201,
            'semiprivate': 151,
            'dorm': 101,
            'camping': 51
        },
        'weekly': {
            'private': 501,
            'semiprivate': 401,
            'dorm': 301,
            'camping': 201
        }
    }
};

calculateRegistrationPrice = function (registration) {
    /*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations, and
    *    days
    */

    var total = 0;

    // Convert the input from reactive variables if needed
    try{
        registration.ageGroup = registration.ageGroup.get();
        registration.type = registration.type.get();
        registration.accommodations = registration.accommodations.get();
        registration.days = registration.days.get();
    } catch (e) {
        // console.log(e);
    }

    if (registration.type === 'commuter') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            var dayFee = prices[registration.ageGroup][registration.type];

            // set the number of days
            var numberOfDays = registration.days.length;

            //calculate the fee
            return dayFee * numberOfDays;
        } else {
            // not enough detail
            return;
        }
    }

    // Daily fee calculation
    if (registration.type === 'daily') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            var dayFee = prices[registration.ageGroup][registration.type][registration.accommodations];

            // set the number of days
            var numberOfDays = registration.days.length;

            //calculate the fee
            return dayFee * numberOfDays;
        } else {
            // not enough detail
            return;
        }
    }

    if (registration.type === 'weekly') {
        console.log("Weekly registration");
        if (registration.ageGroup && registration.type && registration.accommodations) {
            total = prices[registration.ageGroup][registration.type][registration.accommodations];
            return total;
        } else {
            // Not enough detail.
            return;
        }
    }

    // otherwise return nothing
    return;
};
