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
  }
});
