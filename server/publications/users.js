Meteor.publish('userEmails', function () {
    if (Roles.userIsInRole(this.userId, ['registrars']) ) {
        return Meteor.users.find(
            {},
            {fields: {emails: 1}}
        );
    } else {
        this.stop();
        return;
    }
});
