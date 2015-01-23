Template.registrantDetails.helpers({
    'registrationTypeOptions': function () {
        // registration types used on the registration form
        return [
            {label: "Commuter", value: "commuter"},
            {label: "Daily", value: "daily"},
            {label: "Full Week", value: "weekly"}
        ];
    }
});

Template.registrantDetails.events({
    'change #registration_type': function () {
        // clean up form values for accommodations and days
        // to make sure no erroneous values remain

        resetReactiveVars();

        // Clear the accommodations selection
        $("#accommodations").val("");

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
        console.log("Age group calculation: " + ageGroupVar.get());
    }
});
