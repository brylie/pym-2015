calculateRegistrationSubtotal = function (registration) {
  var accommodationsFee; // Used for accommodations price
  var calculatedDiscount; // Used for discount price
  var linens; // used for overnight registrations
  var subtotal; // Hold subtotal prior to discount

  // Calculate accommodations fee
  try {
    accommodationsFee = calculateAccommodationsFee(registration);
  } catch (error) {
    console.log(error.message);
  }

  // Calculate linens fee, if applicable
  try {
    linensFee = calculateLinensFee(registration);
  } catch (error) {
    console.log(error.message);
  }

  // Calculate discount based on half days
  try {
    calculatedDiscount = calculateDiscountDaysDiscount(registration);
  } catch (error) {
    console.log(error.message);
  }

  // Get the subtotal used for final calculations
  // based on accommodations, linens, and first time attender/half day discounts
  subtotal = accommodationsFee + linensFee - calculatedDiscount;

  return subtotal;
};
