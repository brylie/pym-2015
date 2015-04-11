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
