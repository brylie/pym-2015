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
    if (!Meteor.user() ||
        !Meteor.user().roles ||
        !Meteor.user().roles.registrar)
    {
        this.render('notFound');
    } else {
        this.next();
    }
};

// User login required for event registration
Router.onBeforeAction(requiresUserLogin, {only: ['register']});

// Admin-only access to certain routes
Router.onBeforeAction(requiresRegistrarAccess, {only: ['dashboard']});
