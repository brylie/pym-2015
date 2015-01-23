Template.editRegistration.helpers({
    // Get the current registration from the URL path
    getRegistration: function () {
        var registrationId = Router.current().params._id;
        return Registrations.findOne(registrationId);
    }
});
