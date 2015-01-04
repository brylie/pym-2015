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
