Template.wizardRegistrant.helpers({
  "registrantAgeIsBelow": function (ageThreshold) {
    // // Get current age value from form
    let age = AutoForm.getFieldValue("age")

    if (age) {
      // Compare current value versus desired age threshold
      return age < ageThreshold;
    }
  }
});
