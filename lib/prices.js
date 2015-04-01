// First time attender discount
var firstTimeAttenderDiscount = 40; // $40 USD

// Discount for half days (Monday and Saturday)
var discountAmount = 10; // $10 USD

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

/*
Calculate discount for selected half days (Monday and Saturday)
*/
var calculateDiscount = function (firstTimeAttender, days) {
    // Define placeholder for first time discount amount
     var firstTimeDiscount;

    // Get an array of selected discount days
    var discountDays = days.filter(function(day) {
        return (day === "Monday" || day === "Saturday");
    });

    // Set discount if registrant is first time attender, otherwise zero
    if (firstTimeAttender) {
        firstTimeDiscount = firstTimeAttenderDiscount;
    } else {
        firstTimeDiscount = 0;
    }

    // count the number of selected discount days
    var calculatedDiscount = discountDays.length * discountAmount + firstTimeDiscount;

    return calculatedDiscount;
};

/*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations, and
    *    days
    */
calculateRegistrationPrice = function (registration) {
    var total = 0; // Used for total registration fee
    var dayFee; // Used for daily registration day price
    var accommodationsFee; // Used for accommodations price
    var calculatedDiscount; // Used for discount price


    // Convert the input from reactive variables if needed
    try{
        registration.ageGroup = registration.ageGroup.get();
        registration.type = registration.type.get();
        registration.accommodations = registration.accommodations.get();
        registration.days = registration.days.get();
        registration.firstTimeAttender = registration.firstTimeAttenderVar.get();
    } catch (e) {
        // console.log(e);
    }

    if (registration.type === 'commuter') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            dayFee = prices[registration.ageGroup][registration.type];

            // set the number of days
            var numberOfDays = registration.days.length;

            // Calculate discount based on half days
            calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);
            console.log(calculatedDiscount);

            //calculate the fee
            accommodationsFee = dayFee * numberOfDays;
            console.log(accommodationsFee);

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }

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
            dayFee = prices[registration.ageGroup][registration.type][registration.accommodations];

            // set the number of days
            var numberOfDays = registration.days.length;

            // Calculate discount based on half days
            calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

            // calculate the fee
           accommodationsFee = dayFee * numberOfDays;

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }

        } else {
            // not enough detail
            return;
        }
    }

    if (registration.type === 'weekly') {

        if (registration.ageGroup && registration.type && registration.accommodations) {
            var accommodationsFee = prices[registration.ageGroup][registration.type][registration.accommodations];

            var calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }
        } else {
            // Not enough detail.
            return;
        }
    }

    // otherwise return nothing
    return;
};
