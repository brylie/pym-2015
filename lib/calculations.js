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
