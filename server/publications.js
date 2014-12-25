Meteor.publish('registrations', function () {
    return Registrations.find();
});
