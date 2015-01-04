Template.register.events({
    'change select': function () {
        registration_type = $('#registration_type').val();
        age_group = $('#age_group').val();
        console.log("Age group value: " + age_group);
    }
});
