Meteor.publish('registrants', function () {
    var user = this.userId;

    // Make sure the user is a registrar
    if (Roles.userIsInRole(user, ['registrar']))
    {
        return Registrants.find();
    } else {
        return [];
    }
});

// Registrations for a given user
Meteor.publish('myRegistrants', function () {
    // Check if the user is signed in
    if (this.userId) {
        // return registrations created by this user
        return Registrants.find({'createdById': this.userId});
    }
});

// Count of registrations for a given user
Meteor.publish('myRegistrantCount', function() {
    Counts.publish(this, 'myRegistrantCount', Registrants.find({'createdById': this.userId}));
});
