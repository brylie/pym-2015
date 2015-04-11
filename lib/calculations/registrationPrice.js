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
