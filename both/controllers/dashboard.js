DashboardController = AppController.extend({
    waitOn: function() {
        return this.subscribe('registrants');
    },
    data: {
        items: Registrants.find({})
    },
    onBeforeAction: function (pause) {
        AccountsTemplates.ensureSignedIn.call(this, pause);
    },
    onAfterAction: function () {
        Meta.setTitle('Registrants Dashboard');
    }
});
