Template.wizardAccommodations.helpers({
  "requiresAccommodations": function () {
    /*
    * Determine if registration type requires accommodations.
    * If accommodations are required, return true.
    */
    // // Get current age value from form
    let registrationType = AutoForm.getFieldValue("registrationType");

    // If daily or weekly, return true, otherwise return false
    if (registrationType === 'daily' || registrationType === 'weekly') {
        return true;
    } else {
        return false;
    }
  },
  'registrationTypeOptions': function () {
      // registration types used on the registration form
      return [
          {label: "Commuter (sleeping elsewhere)", value: "commuter"},
          {label: "Daily (staying overnight)", value: "daily"},
          {label: "Full Week (staying overnight all nights)", value: "weekly"}
      ];
  }
});
