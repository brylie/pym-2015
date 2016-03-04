DashboardController = AppController.extend({
    onBeforeAction: function (pause) {
        AccountsTemplates.ensureSignedIn.call(this, pause);
    },
    onAfterAction: function () {
        Meta.setTitle('Registrants Dashboard');
    }
});
