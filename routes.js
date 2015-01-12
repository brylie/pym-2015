Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.route('/', function () {
    //this.render('welcome', {data: {title: '2015 PYM Registration'}});
    this.render('registration', {data: {title: '2015 Pacific Yearly Meeting'}});
});

Router.route('/register');

Router.route('/registration/:_id', function () {
    this.render('registration');
});
