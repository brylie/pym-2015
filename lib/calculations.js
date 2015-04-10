calculateAccommodationsFee = function (registration) {
    // Placeholder for accommodations fee
    var accommodationsFee;

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

    return accommodationsFee;
};


/*
Calculate linens fee
based on registration and linens price
*/
var calculateLinensFee = function (registration) {
    // Placeholder variable for possible linens fee
    var linens;

    // Determine linens fee, if applicable
    if (registration.linens) {
        linens = linensFee;
    } else {
        linens = 0;
    }

    return linens
};

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
Calculate percentage used for early and/or late fees
based on numeric subtotal
*/
calculateEarlyOrLatePercentage = function (subtotal) {
    // calculate the percentage
    var percentage = subtotal * earlyDiscountOrLateFeePercentage;

    return percentage;
};

/*
Determine if a registrant qualifies for early discount or late fee
based on date of registration
return early, late, or regular depending on discount and late fee dates
*/
var determineEarlyOrLate = function (date) {
    // set up registration date using moment library
    // convert date to UTC
    var registrationDate = moment(date).utc();

    // Compare registration date with early and late registration dates (in UTC)
    if (registrationDate.isBefore(earlyRegistrationDeadline.utc())) {
        // early discount
        return 'early';
    } else if (registrationDate.isAfter(lateRegistrationBegins.utc())) {
        // late fee
        return 'late';
    } else {
        // regular registration rate
        return 'regular';
    }
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
    var accommodationsFee; // Used for accommodations price
    var calculatedDiscount; // Used for discount price
    var linens; // used for overnight registrations
    var earlyDiscountOrLateFee; // holds early discount or late fee, if any

    // Calculate accommodations fee
    accommodationsFee = calculateAccommodationsFee(registration);

    // Calculate linens fee, if applicable
    linens = calculateLinensFee(registration);

    // Calculate discount based on half days
    calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

    // Calculate the percentage-based fee used for early discount or late fee, if applicable
    var earlyOrLateFee = calculateEarlyOrLatePercentage(accommodationsFee);

    // Determine if the registration qualifies for early discount or late fee
    var earlyOrLate = determineEarlyOrLate(registration.createdAt);

    // Get the subtotal used for final calculations
    // based on accommodations, linens, and first time attender/half day discounts
    var subtotal = accommodationsFee + linens - calculatedDiscount;

    // Calculate total to include early or late fee, if applicable
    if (earlyOrLate === 'early') {
        // subtract early discount from subtotal
        var total = subtotal - earlyOrLateFee;
    } else if (earlyOrLate === 'late') {
        // add late fee to subtotal
        var total = subtotal + earlyOrLateFee;
    } else if (earlyOrLate === 'regular') {
        // regular registration fee calculation
        var total = accommodationsFee + linens - calculatedDiscount;
    }

    // Make sure we don't have a negative total
    if (total < 0) {
        return 0;
    } else {
        return total;
    }
};
