// This object will contain registration prices for 2015 PYM
// The hierarchy for prices is as follows
//  age group -> registration type -> accommodations -> days attending
prices = {
    /*
    * Adult prices
    */
    'adult': {
        'commuter': 50, // daily commuter fee
        'daily': {
            'private': 100, // daily private lodgings
            'semiprivate': 75, // daily semiprivate lodgings
            'dorm': 50, // daily dorm lodgings
            'camping': 25 // daily camping
        },
        'weekly': {
            'private': 500, // weekly private lodgings
            'semiprivate': 400, // weekly semiprivate
            'dorm': 300, // weekly dorm
            'camping': 200, // weekly camping
            'yaf': 200, // weekly yaf
            'jym': 200 // weekly jym
        }
    },
    /*
    * Young adult prices
    */
    'youngAdult': {
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiprivate': 150,
            'dorm': 100,
            'camping': 50
        },
        'weekly': {
            'private': 500,
            'semiprivate': 400,
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiprivate': 150,
            'dorm': 100,
            'camping': 50,
            'jym': 49,
            'yaf': 48
        },
        'weekly': {
            'private': 500,
            'semiprivate': 400,
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiprivate': 150,
            'dorm': 100,
            'camping': 50,
            'jym': 50
        },
        'weekly': {
            'private': 500,
            'semiprivate': 400,
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiprivate': 150,
            'dorm': 100,
            'camping': 50
        },
        'weekly': {
            'private': 500,
            'semiprivate': 400,
            'dorm': 300,
            'camping': 200
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
