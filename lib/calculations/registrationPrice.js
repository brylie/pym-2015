/*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations,
    *    days,
    *    date created (early or late discount),
    *   carbon tax
    */
calculateRegistrationPrice = function (registration) {
    var accommodationsFee; // Used for accommodations price
    var calculatedDiscount; // Used for discount price
    var linens; // used for overnight registrations
    var earlyDiscountOrLateFee; // holds early discount or late fee, if any
    var subtotal; // Hold subtotal prior to discount
    var total; // Hold total registration price
    var carbonTax; // Get the optional carbon tax amount
    var donation; // Used for optional donation field

    // Calculate accommodations fee
    try {
        accommodationsFee = calculateAccommodationsFee(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate linens fee, if applicable
    try {
        linens = calculateLinensFee(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate discount based on half days
    try {
        calculatedDiscount = calculateDiscount(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate the percentage-based fee used for early discount or late fee, if applicable
    try {
        var earlyOrLateFee = calculateEarlyOrLatePercentage(accommodationsFee);
    } catch (error) {
        console.log(error.message);
    }

    // Determine if the registration qualifies for early discount or late fee
    try {
        var earlyOrLate = determineEarlyOrLate(registration.createdAt);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate carbon tax
    try {
        carbonTax = calculateCarbonTax(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate donation
    try {
        donation = calculateDonation(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Get the subtotal used for final calculations
    // based on accommodations, linens, and first time attender/half day discounts
    subtotal = accommodationsFee + linens - calculatedDiscount + carbonTax;

    // Calculate total to include early or late fee, if applicable
    if (earlyOrLate === 'early') {
        // subtract early discount from subtotal
        total = subtotal - earlyOrLateFee + donation;
    } else if (earlyOrLate === 'late') {
        // add late fee to subtotal
        total = subtotal + earlyOrLateFee + donation;
    } else if (earlyOrLate === 'regular') {
        // regular registration fee calculation
        total = accommodationsFee + linens - calculatedDiscount + donation;
    }

    // Make sure we don't have a negative, or undefined total
    if (!total || total < 0) {
        return 0;
    } else {
        return parseInt(total);
    }
};
