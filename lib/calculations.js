/*
Determine if registrant is first time attender or not
return apropriate discount
  40 for first time attender
  0 if not first time attender
*/
var calculateFirstTimeAttenderDiscount = function (firstTimeAttender) {
    // Set discount if registrant is first time attender, otherwise zero
    if (firstTimeAttender) {
        return firstTimeAttenderDiscount;
    } else {
        return 0;
    }
};

/*
Count the number of discount days
provided an array of days
return the number of days that qualify for discount pricing
*/
var countDiscountDays = function (days) {
    // number of discount days placeholder
    var numberOfDiscountDays;

    // Get an array of selected discount days
    if (days ) {
        var discountDays = days.filter(function(day) {
            return _.contains(halfDays, day);
        });

        // Set number of days to length of selected discount days array
        numberOfDiscountDays = discountDays.length;
    } else {
        numberOfDiscountDays = 0;
    }

    return numberOfDiscountDays;
};

/*
Calculate discount for selected half days (Monday and Saturday)
*/
var calculateDiscount = function (firstTimeAttender, days) {
    // Determine first time discount amount
    var firstTimeDiscount = calculateFirstTimeAttenderDiscount(firstTimeAttender);

    // Placeholder for number of discount days
    try {
        var numberOfDiscountDays = countDiscountDays(days);
    } catch (error) {
        console.log(error);
    }

    // Calculate the daily discount
    var discountDaysTotalDiscount = numberOfDiscountDays * halfDayDiscountAmount;

    // Add discount days and first time discount values
    var calculatedDiscount =  discountDaysTotalDiscount + firstTimeDiscount;

    return calculatedDiscount;
};

/*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations, and
    *    days
    *    date created (early or late discount)
    */
calculateRegistrationPrice = function (registration) {
    var total = 0; // Used for total registration fee
    var accommodationsFee; // Used for accommodations price
    var calculatedDiscount; // Used for discount price
    var linens; // used for overnight registrations

    if (registration.type === 'commuter') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            var dayFee = prices[registration.ageGroup][registration.type];

            // set the number of days
            var numberOfDays = registration.days.length;

            // calculate the accommodations fee
            accommodationsFee = dayFee * numberOfDays;
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

            // calculate the accommodations fee
            accommodationsFee = dayFee * numberOfDays;
        }
    }

    if (registration.type === 'weekly') {
        // Make sure age group, registration type, and accommodations are available
        if (registration.ageGroup && registration.type && registration.accommodations) {
            // Set accommodations fee directly from prices object
            accommodationsFee = prices[registration.ageGroup][registration.type][registration.accommodations];
        }
    }

    // Determine linens fee
    if (registration.linens) {
        linens = linensFee;
    } else {
        linens = 0;
    }

    // Calculate discount based on half days
    calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

    if (accommodationsFee + linens > calculatedDiscount) {
        return accommodationsFee + linens - calculatedDiscount;
    } else {
        return 0;
    }
};
