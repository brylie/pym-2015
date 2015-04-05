Meteor.publish('registrants', function () {
    return Registrants.find();
});

Meteor.publish('myRegistrants', function () {
    // Check if the user is signed in
    if (this.userId) {
        // return registrations created by this user
        return Registrants.find({'createdById': this.userId});
    }
});
