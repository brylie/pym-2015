Template.dashboard.helpers({
    'registrants': function () {
        return Registrants.find();
    }
});

Template.dashboardRegistrant.events({
    'click .deleteRegistration': function () {
        if (confirm("Delete this registration?")) {
            Registrants.remove(this._id);
        }
    }
});
