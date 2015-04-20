Template.register.rendered = function () {
    /*
    * Reset form select field values
    * to prevent an edge case bug for code push
    * where accommodations value was undefined
    */

    $('#age').val('');
    $('#registration_type').val('');
    $('#accommodations').val('');
    $('#carbon-tax').val('');
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
                createdAt: new Date(),
                carbonTax: carbonTaxVar.get()
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
    },
    'keyup #carbon-tax': function () {
        setReactiveVars();
    }
});
