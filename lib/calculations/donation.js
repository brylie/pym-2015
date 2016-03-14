/*
Calculate donation
based on donation input
return thedonation as Integer
*/
calculateDonation = function (registration) {
    // Placeholder variable for possible linens fee
    var donation;

    // Determine carbon tax, if applicable
    if (registration.donation) {
        // Linens needed, so charge linens fee
        donation = registration.donation;
    } else {
        // no carbon tax offered
        donation = 0;
    }

    return donation;
};
