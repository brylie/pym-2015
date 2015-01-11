Template.register.created = function () {
    // Set up reactive variables to temporarily hold the values of registration form fields
    // These variables may be used in dynamic calculations
    ageGroupVar = new ReactiveVar;
    registrationTypeVar = new ReactiveVar;
    accommodationsVar = new ReactiveVar
};

Template.register.helpers({
    'price': function () {
        return;
    }
});
