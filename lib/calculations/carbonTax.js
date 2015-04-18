/*
Calculate carbon
based on carbon tax input
return the carbon tax as Integer
*/
calculateCarbonTax = function (registration) {
    // Placeholder variable for possible linens fee
    var carbonTax;

    // Determine carbon tax, if applicable
    if (registration.carbonTax) {
        // Linens needed, so charge linens fee
        carbonTax = registration.carbonTax;
    } else {
        // no carbon tax offered
        carbonTax = 0;
    }

    return carbonTax;
};
