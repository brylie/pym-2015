/*
Determine if registrant is first time attender or not
return appropriate discount
  - 40 for first time attender
  - 0 if not first time attender
*/
calculateFirstTimeAttenderDiscount = function (firstTimeAttender) {
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
countDiscountDays = function (days) {
    // number of discount days placeholder
    var numberOfDiscountDays;

    // Get an array of selected discount days
    if (days ) {
        var discountDays = days.filter(function(day) {
            return _.contains(halfDays, day);
        });

        // Set number of days to length of selected discount days array
        numberOfDiscountDays = discountDays.length;
    } else {
        numberOfDiscountDays = 0;
    }

    return numberOfDiscountDays;
};

/*
Calculate discount
based on selected half days and first time attender
return calculated discount as number
*/
calculateDiscount = function (registration) {
    // Placeholder for number of discount days
    var numberOfDiscountDays;
    // Determine first time discount amount
    var firstTimeDiscount = calculateFirstTimeAttenderDiscount(registration.firstTimeAttender);

    if (registration.type === "commuter") {
      // Placeholder for number of discount days
      try {
          numberOfDiscountDays = countDiscountDays(registration.days);
      } catch (error) {
          console.log(error);
      }
    } else {
      numberOfDiscountDays = 0;
    }

    // Calculate the daily discount
    var discountDaysTotalDiscount = numberOfDiscountDays * halfDayDiscountAmount;

    // Add discount days and first time discount values
    var calculatedDiscount =  discountDaysTotalDiscount + firstTimeDiscount;

    return calculatedDiscount;
};
