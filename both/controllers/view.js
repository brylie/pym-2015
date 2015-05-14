RegistrantsViewController = AppController.extend({
    subscriptions: function() {
        // Subscribe to user registrations
        return this.subscribe('myRegistrants');
    },
    action: function () {
        // Make sure subscriptions are available before rendering
        // Otherwise, show loading template
        if (this.ready()) {
            this.render();
        } else {
            this.render('loading');
        }
    },
    data: function () {
        return Registrants.find();
    }
});
