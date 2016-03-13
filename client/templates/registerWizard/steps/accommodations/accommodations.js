Template.wizardAccommodations.helpers({
  "requiresAccommodations": function () {
    /*
    * Determine if registration type requires accommodations.
    * If accommodations are required, return true.
    */
    // // Get current age value from form
    let registrationType = AutoForm.getFieldValue("registrationType")

    // If daily or weekly, return true, otherwise return false
    if (registrationType === 'daily' || registrationType === 'weekly') {
        return true;
    } else {
        return false;
    }
  }
});
