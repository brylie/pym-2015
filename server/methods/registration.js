Meteor.methods({
//    'calculateRegistrationCost': function (ageGroup, registrationType, accommodations, days) {
//        return 200;
//    }
  "cancelRegistration": function (registrationId) {
    // Set the registration type to "cancelled"
    Registrants.update(registrationId, {$set: {registrationType: "cancelled"}});
  }
});
