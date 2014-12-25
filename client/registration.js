// Subscribe to registrations.
// TODO: Filter to only authorized registrations.
Meteor.subscribe('registrations');

Template.registration.helpers({
    // Get the current registration from the URL path
    getRegistration: function () {
        var registrationId = Router.current().params._id;
        return Registrations.findOne(registrationId);
    }
});
