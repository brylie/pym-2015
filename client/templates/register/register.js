Template.register.created = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables may be used in dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar;
    daysVar = new ReactiveVar;
};

Template.register.rendered = function () {
    // Reset form select field values
    // to prevent an edge case bug for code push
    // where accommodations value was undefined
    $('#age_group').val('');
    $('#registration_type').val('');
    $('#accommodations').val('');
}
Template.register.helpers({
    'price': function () {
        return calculateRegistrationPrice(ageGroupVar, registrationTypeVar, accommodationsVar);
    }
});

Template.register.events({
    'change #age_group': function () {
        // Set the age group reactive variable
        ageGroupVar.set($('#age_group').val());
    },
    'change #registration_type': function () {
        // Set the registration type reactive variable
        registrationTypeVar.set($('#registration_type').val());
    },
    'change #accommodations': function () {
        // Set the accommodations reactive variable
        accommodationsVar.set($('#accommodations').val());
    }
});
