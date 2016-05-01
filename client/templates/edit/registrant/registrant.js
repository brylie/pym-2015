Template.registrantDetails.helpers({
    'registrationTypeOptions': function () {
        // registration types used on the registration form
        return [
            {label: "Commuter (sleeping elsewhere)", value: "commuter"},
            {label: "Daily (staying overnight)", value: "daily"},
            {label: "Full Week (staying overnight all nights)", value: "weekly"}
        ];
    },
    "registrantAgeIsBelow": function (ageThreshold) {
      // Get current age value from form
      let age = AutoForm.getFieldValue("age")

      if (age) {
        // Compare current value versus desired age threshold
        return age < ageThreshold;
      }
    },
    "registrantAgeIs": function (age) {
      // Get current age value from form
      let registrantAge = AutoForm.getFieldValue("age")

      if (age) {
        // Compare current value versus desired age threshold
        return registrantAge === age;
      }
    },
    "yesNoOptions": function () {
      return [
        {label: "Yes", value: "yes"},
        {label: "No", value: "no"}
      ];
    }
});

Template.registrantDetails.events({
    'change #registration_type': function () {
        // clean up form values for accommodations and days
        // to make sure no erroneous values remain

        resetReactiveVars();

        // Clear the accommodations selection
        //$("#accommodations").val("");

        // Clear all day checkboxes
        $('input[name="days"]').each(function() {
            // make sure day is not checked
            this.checked = false;
        });
    },
    'change #age': function () {
        // Get the value of the age field
        var ageValue = $('#age').val();

        // Calculate the age group based on the age value
        var ageGroup = calculateAgeGroup(ageValue);

        // Reset the accommodations selection
        // as accommodations depend on age group
        $("#accommodations").val("");

        // Set the age group reactive variable
        // for price calculations
        ageGroupVar.set(ageGroup);
    },
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
