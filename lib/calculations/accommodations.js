/*
Calculate accommodations fee based on
    - registration type,
    - age goup,
    - days (if applicable), and
    - accommodations
return accommodations fee as number
*/
calculateAccommodationsFee = function (registration) {
    // Placeholder for accommodations fee
    var accommodationsFee;

    if (registration.registrationType === 'commuter') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            var dayFee = prices[registration.ageGroup][registration.registrationType];

            // set the number of days
            var numberOfDays = registration.days.length;

            // calculate the accommodations fee
            accommodationsFee = dayFee * numberOfDays;
        }
    }

    // Daily fee calculation
    if (registration.registrationType === 'daily') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            var dayFee = prices[registration.ageGroup][registration.registrationType][registration.accommodations];

            // set the number of days
            var numberOfDays = registration.days.length;

            // calculate the accommodations fee
            accommodationsFee = dayFee * numberOfDays;
        }
    }

    if (registration.registrationType === 'weekly') {
        // Make sure age group, registration type, and accommodations are available
        if (registration.ageGroup && registration.registrationType && registration.accommodations) {
            // Set accommodations fee directly from prices object
            accommodationsFee = prices[registration.ageGroup][registration.registrationType][registration.accommodations];
        }
    }
    //console.log(accommodationsFee)
    return accommodationsFee;
};
