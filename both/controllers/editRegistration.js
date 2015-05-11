EditRegistrationController = AppController.extend({
    waitOn: function() {
        return this.subscribe('registrants');
    },
    data: function () {
        return Registrants.findOne(this.params._id);
    }
});
