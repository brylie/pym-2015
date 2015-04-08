Template.register.rendered = function () {
    /*
    * Reset form select field values
    * to prevent an edge case bug for code push
    * where accommodations value was undefined
    */

    $('#age_group').val('');
    $('#registration_type').val('');
    $('#accommodations').val('');

    // Set up autorun function to show/hide register button
    this.autorun(function () {
        // Get reactive forms to represent form state
        var accommodationsSelected = accommodationsVar.get(),
            ageGroupSelected = ageGroupVar.get(),
            daysSelected = daysVar.get(),
            registrationTypeSelected = registrationTypeVar.get(),
            // Placeholder to make sure user selects one or more days
            oneOrMoreDaysSelected,
            // placeholder to make sure necessary registration information is given
            registrationRequirement;

        try {
            // try to get the length of days selected
            // return true if more than zero
            oneOrMoreDaysSelected = (daysSelected.length > 0);
        } catch (e) {
            // no days are selected (undefined)
            // so return false
            oneOrMoreDaysSelected = false;
        }


        // Check requirements for the three registrant types
        // set true or false for each, depending on form state
        if (ageGroupSelected) {
            // Check the requirements for selected registration type
            if (registrationTypeSelected === 'commuter') {
                // Commuter registration requires one or more day to be selected
                var commuterRequirement = (oneOrMoreDaysSelected);
            } else if (registrationTypeSelected === 'daily') {
                // Daily registration requires accommodations and one or more days to be selected
                var dailyRequirement = (accommodationsSelected && oneOrMoreDaysSelected);
            } else if (registrationTypeSelected === 'weekly') {
                // Weekly registration requires accommodations
                var weeklyRequirement = (accommodationsSelected);
            }
        }

        // Make sure one set of registration requirements was met
        registrationRequirement = (commuterRequirement || dailyRequirement || weeklyRequirement);

        // Show or hide the 'Register' button
        // based on registration requirements
        if (registrationRequirement) {
            $('button[type="submit"]').show();
        } else {
            $('button[type="submit"]').hide();
        }
    });
};

Template.register.helpers({
    'price': function () {
        /*
        * Get the dynamically calculated registration fee.
        */

        //Set the registration object
        // from current registration details.
        try {
            var registration = {
                ageGroup: ageGroupVar.get(),
                type: registrationTypeVar.get(),
                accommodations: accommodationsVar.get(),
                days: daysVar.get(),
                firstTimeAttender: firstTimeAttenderVar.get(),
                linens: linensVar.get(),
                createdAt: new Date()
            };
        } catch (error) {
            console.log(error.message);
        }

        // Calculate the price
        try {
            var registrationPrice = calculateRegistrationPrice(registration);
        } catch (error) {
            console.log(error.message);
        }

        return registrationPrice;
    }
});

Template.register.events({
    'change form': function () {
        // Make sure all reactive vars are up to date.
        setReactiveVars();
    }
});
