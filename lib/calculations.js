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
            return (day === "Monday" || day === "Saturday");
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
    console.log("Discount days:", numberOfDiscountDays);

    // Calculate the daily discount
    var discountDaysTotalDiscount = numberOfDiscountDays * halfDayDiscountAmount;

    // Add discount days and first time discount values
    var calculatedDiscount =  discountDaysTotalDiscount + firstTimeDiscount;

    return calculatedDiscount;
};

/*
    * Calculate registration type based on
    *    Age,
    *    registration type,
    *    accommodations, and
    *    days
    */
calculateRegistrationPrice = function (registration) {
    var total = 0; // Used for total registration fee
    var dayFee; // Used for daily registration day price
    var accommodationsFee; // Used for accommodations price
    var calculatedDiscount; // Used for discount price
    var linens; // used for overnight registrations

    if (registration.type === 'commuter') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            dayFee = prices[registration.ageGroup][registration.type];

            // set the number of days
            var numberOfDays = registration.days.length;

            // Calculate discount based on half days
            calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

            //calculate the fee
            accommodationsFee = dayFee * numberOfDays;

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }

        } else {
            // not enough detail
            return;
        }
    }

    // Daily fee calculation
    if (registration.type === 'daily') {
        // Check for required information
        if (registration.ageGroup && registration.days) {
            // retrieve the day fee from the prices list
            dayFee = prices[registration.ageGroup][registration.type][registration.accommodations];

            // set the number of days
            var numberOfDays = registration.days.length;

            // Determine linens fee
            if (registration.linens) {
                linens = linensFee;
            } else {
                linens = 0;
            }

            // Calculate discount based on half days
            calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

            // calculate the fee
            accommodationsFee = (dayFee * numberOfDays) + linens;

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }

        } else {
            // not enough detail
            return;
        }
    }

    if (registration.type === 'weekly') {

        if (registration.ageGroup && registration.type && registration.accommodations) {
            var accommodationsPrice = prices[registration.ageGroup][registration.type][registration.accommodations];

            var calculatedDiscount = calculateDiscount(registration.firstTimeAttender, registration.days);

            // Determine linens fee
            if (registration.linens) {
                linens = linensFee;
            } else {
                linens = 0;
            }

            // Determine full fee amount (accommodations + linens)
            accommodationsFee = accommodationsPrice + linens;

            if (accommodationsFee > calculatedDiscount) {
                return accommodationsFee - calculatedDiscount;
            } else {
                return 0;
            }
        } else {
            // Not enough detail.
            return;
        }
    }

    // otherwise return nothing
    return;
};
