ViewController = AppController.extend({
    waitOn: function() {
        return this.subscribe('myRegistrants');
    },
    data: {

    }
});
