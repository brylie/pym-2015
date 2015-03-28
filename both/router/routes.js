Router.route('/', {
    name: 'home'
});

Router.route('/dashboard', {

});

//Router.route('/', function () {
//    //this.render('welcome', {data: {title: '2015 PYM Registration'}});
//    this.render('register', {data: {title: '2015 Pacific Yearly Meeting'}});
//});

Router.route('/register');


//Router.route('/registration/:_id', function () {
//    this.render('registration');
//});

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
Router.onBeforeAction(requiresUserLogin, {only: ['register']});

// Admin-only access to certain routes
Router.onBeforeAction(requiresRegistrarAccess, {only: ['dashboard']});
