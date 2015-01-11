Template.register.created = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables may be used in dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar
};

Template.register.helpers({
    'price': function () {
        return calculateRegistrationPrice();
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
