Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.route('/', function () {
    this.render('welcome', {data: {title: '2015 PYM Registration'}});
});

Router.route('/register');

Router.route('/registration/:_id', function () {
    this.render('registration');
});
