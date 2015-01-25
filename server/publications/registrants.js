Meteor.publish('registrants', function () {
    return Registrants.find();
});