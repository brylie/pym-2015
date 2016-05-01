Template.editRegistration.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get reference to router
  var router = Router.current();

  // Get registrant ID from router parameters
  instance.registrantId = router.params._id;

  // Subscribe to current registrant
  instance.subscribe("singleRegistrant", instance.registrantId);
};

Template.editRegistration.rendered = function () {
    setReactiveVars();
};

Template.editRegistration.events({
    'change form': function() {
        setReactiveVars();
    }
});

Template.editRegistration.helpers({
  registrant: function () {
    // Get reference to template instance
    var instance = Template.instance();

    // Get registrant
    var registrant = Registrants.findOne(instance.registrantId);

    return registrant;
  },
  'price': function () {
    /*
    * Get the dynamically calculated registration fee.
    */

    //Set the registration object
    // from current registration details.
    try {
      var registration = {
        ageGroup: ageGroupVar.get(),
        type: registrationTypeVar.get(),
        accommodations: accommodationsVar.get(),
        days: daysVar.get(),
        firstTimeAttender: firstTimeAttenderVar.get(),
        linens: linensVar.get(),
        createdAt: new Date(),
        carbonTax: carbonTaxVar.get(),
        donation: donationVar.get()
      };
    } catch (error) {
      console.log(error.message);
    }

    // Calculate the price
    try {
      var registrationPrice = calculateRegistrationPrice(registration);
    } catch (error) {
      console.log(error.message);
    }

    return registrationPrice;
  }
});
