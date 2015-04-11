/*
Calculate linens fee
based on registration and linens price
return the linens fee as number
*/
calculateLinensFee = function (registration) {
    // Placeholder variable for possible linens fee
    var linens;

    // Determine linens fee, if applicable
    if (registration.linens) {
        // Linens needed, so charge linens fee
        linens = linensFee;
    } else {
        // Linens not selected, no fee
        linens = 0;
    }

    return linens;
};
