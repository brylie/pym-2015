Router.configure({
    layoutTemplate: 'baseLayout'
});

Router.route('/', function () {
    this.render('baseLayout', {data: {title: '2015 PYM Registration'}});
});
