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
    var subtotal; // Hold subtotal prior to discount
    var earlyDiscountOrLateFee; // holds early discount or late fee, if any
    var total; // Hold total registration price
    var carbonTax; // Get the optional carbon tax amount
    var donation; // Used for optional donation field

        // Get the subtotal used for final calculations
    // based on accommodations, linens, and first time attender/half day discounts
    try {
      subtotal = calculateRegistrationSubtotal(registration);
    } catch (error) {
        console.log(error.message);
    }

    // Determine if the registration qualifies for early discount or late fee
    try {
        var earlyOrLate = determineEarlyOrLate(registration.createdAt);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate the percentage-based fee used for early discount or late fee, if applicable
    try {
        var earlyOrLateFee = calculateEarlyOrLatePercentage(subtotal);
    } catch (error) {
        console.log(error.message);
    }

    // Calculate total to include early or late fee, if applicable
    if (earlyOrLate === 'early') {
        // subtract early discount from subtotal
        total = subtotal - earlyOrLateFee;
    } else if (earlyOrLate === 'late') {
        // add late fee to subtotal
        total = subtotal + earlyOrLateFee;
    } else if (earlyOrLate === 'regular') {
        // regular registration fee calculation
        total = subtotal;
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

    // Add donation and carbon tax to total
    total += donation + carbonTax;

    // Make sure we don't have a negative, or undefined total
    if (!total || total < 0) {
        return 0;
    } else {
        return total;
    }
};
