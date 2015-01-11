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
            'semiPrivate': 75, // daily semi-private lodgings
            'dorm': 50, // daily dorm lodgings
            'camping': 25 // daily camping
        },
        'weekly': {
            'private': 500, // weekly private lodgings
            'semiPrivate': 400, // weekly semi-private
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
            'semiPrivate': 150,
            'dorm': 100,
            'camping': 50
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiPrivate': 150,
            'dorm': 100,
            'camping': 50
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiPrivate': 150,
            'dorm': 100,
            'camping': 50,
            'jym': 50
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
        'commuter': 50,
        'daily': {
            'private': 200,
            'semiPrivate': 150,
            'dorm': 100,
            'camping': 50
        },
        'weekly': {
            'private': 500,
            'semiPrivate': 400,
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

     // Testing variable input
    console.log("Age group input: " + ageGroup);
    console.log("Registration type input: " + registrationType);
    console.log("Accommodations input: " + accommodations);
    //console.log("Days input: " + days);

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

    //temporary test
    total = 200;
    return total;
};
