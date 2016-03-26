Template.wizardRegistrant.helpers({
  "registrantAgeIsBelow": function (ageThreshold) {
    // Get current age value from form
    let age = AutoForm.getFieldValue("age")

    if (age) {
      // Compare current value versus desired age threshold
      return age < ageThreshold;
    }
  },
  "registrantAgeIsBetween": function (lowerAge, upperAge) {
    /*
    Check if registrant age is within lower age and upper age limits (inclusive)
    */

    // Get current age value from form
    let age = AutoForm.getFieldValue("age")

    if (age) {
      // Compare current value versus desired age range
      return (lowerAge <= age) && (age <= upperAge);
    }
  }
});
