Meteor.startup(function () {
    if (Meteor.users.find({'email': 'registrar@example.com'}).fetch().length === 0) {
        // Create a registrar user object
        var registrarUser = {
            name: "Registrar Test",
            email: 'registrar@example.com',
            password: 'testing123'
        };

        // Create user in database
        var id = Accounts.createUser(registrarUser);

        // Assign registrar user to registrar role
        Roles.addUsersToRoles(id, 'registrar');
    }
});
