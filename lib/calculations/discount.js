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

calculateDiscountDaysDiscount = function (registration) {
  // Discount days apply only to commuter registrants
  if (registration.type === "commuter") {
    // Count the number of discount days
    try {
        numberOfDiscountDays = countDiscountDays(registration.days);
    } catch (error) {
        console.log(error);
    }
  } else {
    numberOfDiscountDays = 0;
  }

  // Calculate the daily discount
  var discountDaysDiscount = numberOfDiscountDays * halfDayDiscountAmount;

  return discountDaysDiscount;
}
