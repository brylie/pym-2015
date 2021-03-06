Template.wizardRegistrant.events({
  "change #children-program": function (event, instance) {
    const childrenProgramSelection = event.target.value;

    if (childrenProgramSelection === "yes") {
      // Set JYM program value to "No"
      $("[name=jymProgram]").val(["no"]);
    } else if (childrenProgramSelection === "no") {
      // Set JYM program value to "Yes"
      $("[name=jymProgram]").val(["yes"]);
    }
  },
  "change #jym-program": function (event, instance) {
    const jymProgramSelection = event.target.value;

    if (jymProgramSelection === "yes") {
      // Set Children's program value to "No"
      $("[name=childrenProgram]").val(["no"]);;
    } else if (jymProgramSelection === "no") {
      // Set Children's program value to "Yes"
      $("[name=childrenProgram]").val(["yes"]);
    }
  }
});

Template.wizardRegistrant.helpers({
  "registrantAgeIs": function (age) {
    // Get current age value from form
    let registrantAge = AutoForm.getFieldValue("age")

    if (age) {
      // Compare current value versus desired age threshold
      return registrantAge === age;
    }
  },
  "registrantAgeIsEqualToOrAbove": function (ageThreshold) {
    // Get current age value from form
    let age = AutoForm.getFieldValue("age")

    if (age) {
      // Compare current value versus desired age threshold
      return age >= ageThreshold;
    }
  },
  "registrantAgeIsBelow": function (ageThreshold) {
    // Get current age value from form
    let age = AutoForm.getFieldValue("age")

    // Compare current value versus desired age threshold
    return age < ageThreshold;
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
  },
  "yesNoOptions": function () {
    return [
      {label: "Yes", value: "yes"},
      {label: "No", value: "no"}
    ];
  }
});
