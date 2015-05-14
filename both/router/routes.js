Router.route('/', {
    name: 'home'
});

Router.route('/dashboard', {

});

Router.route('/register');

Router.route('/edit/:_id', {
    name: 'editRegistration'
});

// Route for individuals to review their registration(s)
Router.route('/view', {

});

var requiresUserLogin = function () {
    if (!Meteor.user()) {
        this.render('login');
    } else {
        this.next();
    }
};

// Make sure user is logged in with registrar role
var requiresRegistrarAccess = function () {
    var user = Meteor.user()._id;
    if (Roles.userIsInRole(user, ['registrar']))
    {
        this.next();
    } else {
        this.render('notFound');
    }
};

// User login required for event registration
Router.onBeforeAction(requiresUserLogin, {only: ['register', 'view']});

// Admin-only access to certain routes
Router.onBeforeAction(requiresRegistrarAccess, {only: ['dashboard', 'editRegistration']});
