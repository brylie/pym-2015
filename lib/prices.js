// This object will contain registration prices for 2015 PYM
// The hierarchy for prices is as follows
//  age group -> registration type -> accommodations -> days attending
prices = {
    /*
    * Adult prices
    */
    adult: {
        commuter: {
            monday: 50,
            tuesday: 50,
            wednesday: 50,
            thursday: 50,
            friday: 50,
            saturday: 50
        },
        daily: {
            private: {},
            semiPrivate: {},
            dorm: {},
            camping: {}
        },
        weekly: {}
    },
    youngAdult: {
        commuter: {
            monday: 50,
            tuesday: 50,
            wednesday: 50,
            thursday: 50,
            friday: 50,
            saturday: 50
        },
        daily: {
            private: {},
            semiPrivate: {},
            dorm: {},
            camping: {}
        },
        weekly: {}
    },
    /*
    * Teen prices
    */
    teen: {
        commuter: {
            monday: 50,
            tuesday: 50,
            wednesday: 50,
            thursday: 50,
            friday: 50,
            saturday: 50
        },
        daily: {
            private: {},
            semiPrivate: {},
            dorm: {},
            camping: {}
        },
        weekly: {}
    },
    /*
    * Youth prices
    */
    youth: {
        commuter: {
            monday: 50,
            tuesday: 50,
            wednesday: 50,
            thursday: 50,
            friday: 50,
            saturday: 50
        },
        daily: {
            private: {},
            semiPrivate: {},
            dorm: {},
            camping: {}
        },
        weekly: {}
    },
    /*
    * Child prices
    */
    child: {
        commuter: {
            monday: 50,
            tuesday: 50,
            wednesday: 50,
            thursday: 50,
            friday: 50,
            saturday: 50
        },
        daily: {
            private: {},
            semiPrivate: {},
            dorm: {},
            camping: {}
        },
        weekly: {}
    }
}

calculatePrices = function (ageGroup, registrationType, accommodations, days) {
    // var total

    // if registration type is commuter
    // sum up registration fees for all selected days

    // if registration type is daily
    // sum up the day fees for all selected days/accommodations

    // if registration type is weekly
    // set the sum to the free for the specific accommodation type

    // return total
};
