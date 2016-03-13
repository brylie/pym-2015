Template.wizardReview.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Get form data as instance variable
  instance.registration = instance.data.wizard.mergedData();
});

Template.wizardReview.helpers({
  'registration': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration from template instance
    return instance.registration;
  },
  'accommodationsFee': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration data
    const registration = instance.registration;

    // Adjust attributes of registration data to match accommodations fee function
    registration.type = registration.registrationType;
    registration.ageGroup = calculateAgeGroup(registration.age);

    // Calculate accommodations fee
    const accommodationsFee = calculateAccommodationsFee(registration);

    return accommodationsFee;
  },
  'linensFee': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration from template instance
    const registration = instance.registration;

    // Check if linens are needed
    if (registration.linens) {
      // If so, return linens fee
      return linensFee;
    }
  },
  'firstTimeAttenderDiscount': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration
    const registration = instance.registration;

    // Calculate first time attender discount
    if (registration.firstTimeAttender) {
      return firstTimeAttenderDiscount;
    }
  },
  'halfDayDiscount': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration from template instance
    const registration = instance.registration;

    // Get registration days
    const days = registration.days;

    // Check if there are any days
    if (days) {
      // If so, count the number of discount days
      const discountDays = countDiscountDays(days);

      // Return the calculated half day discount
      return discountDays * halfDayDiscountAmount;
    }
  }
});
