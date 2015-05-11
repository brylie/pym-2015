Template.registrantDetails.helpers({
    'registrationTypeOptions': function () {
        // registration types used on the registration form
        return [
            {label: "Commuter (sleeping elsewhere)", value: "commuter"},
            {label: "Daily (staying overnight)", value: "daily"},
            {label: "Full Week (staying overnight all nights)", value: "weekly"}
        ];
    },
    /*
    Determine if registrant is school aged
    by checking age group
    return true if age group is child, youth, or teen
    */
    'schoolAgeGroup': function () {
        var ageGroup = ageGroupVar.get();

        if (ageGroup) {
            // look at the value of age group
            switch (ageGroup) {
                    // if child, youth or teen
                    // return true
                case 'child':
                    return true;
                    break;
                case 'youth':
                    return true;
                    break;
                case 'teen':
                    return true;
                    break;
                default:
                    return false;
                    break;
            };
        } else {
            return false;
        }
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
    }
});
