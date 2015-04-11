/*
Calculate discount
based on selected half days and first time attender
return calculated discount as number
*/
calculateDiscount = function (firstTimeAttender, days) {
    // Determine first time discount amount
    var firstTimeDiscount = calculateFirstTimeAttenderDiscount(firstTimeAttender);

    // Placeholder for number of discount days
    try {
        var numberOfDiscountDays = countDiscountDays(days);
    } catch (error) {
        console.log(error);
    }

    // Calculate the daily discount
    var discountDaysTotalDiscount = numberOfDiscountDays * halfDayDiscountAmount;

    // Add discount days and first time discount values
    var calculatedDiscount =  discountDaysTotalDiscount + firstTimeDiscount;

    return calculatedDiscount;
};
