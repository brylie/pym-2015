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
  },
  'accommodationsOptions': function () {
    // TODO: determine whether it is necessary to show age/age group specific options
    return [
      {label: "Camping", value: "camping"},
      {label: "Dorm", value: "dorm"},
      {label: "Semi-private", value: "semiprivate"},
      {label: "Junior Yearly Meeting", value: "jym"},
      {label: "Young Adult Friends", value: "yaf"}
    ];
  }
});
