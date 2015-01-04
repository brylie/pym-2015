Template.register.events({
    'change select': function () {
        logValues();
    }
});

logValues = function () {
    registrationType = $('#registration_type').val();
    ageGroup = $('#age_group').val();
    console.log("Age group: " + ageGroup);
    console.log("Registration type: " + registrationType);
}

calculatePrice = function (ageGroup, registrationType, days) {
    // calculate the registration price based on age group, registration type
    // if applicable, based on days attending
    // also add extras such as linens, etc.
}
