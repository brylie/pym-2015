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

calculateRegistrationPrice = function (ageGroup, registrationType, accommodations, days) {
    /*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations, and
    *    number of days
    */


    var total = 0;

    // Convert the input from reactive variables if needed
    try{
        ageGroup = ageGroup.get();
        registrationType = registrationType.get();
        accommodations = accommodations.get();
    } catch (e) {
        console.log(e);
    }

    //console.log("Days input: " + days);
    if (registrationType) {
        if (registrationType === 'commuter') {
            console.log("Commuter registration");
            return 'commuter';
            // dayFee = prices[ageGroup][registrationType]
            // for each selected days
            // check to see if any day should be discounted
            // total += dayFee
        }

        if (registrationType === 'daily') {
            console.log("Daily registration");
            return 'daily';
            // dayFee = prices[ageGroup][registrationType][accommodations]
            // for each selected days
            // if day should be discounted
            //total += day * discount (e.g. 0.5)
            // else
            // total += day
        }

        if (registrationType === 'weekly') {
            console.log("Weekly registration");
            if (ageGroup && registrationType && accommodations) {
                total = prices[ageGroup][registrationType][accommodations];
                return total;
            } else {
                console.log("Not enough detail.");
                return;
            }
        }
    }
};
