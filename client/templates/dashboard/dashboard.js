Template.dashboard.helpers({
    'registrants': function () {
        return Registrants.find();
    },
     'childRegistrantCount': function () {
        return Counts.get('childRegistrantCount');
    },
     'youthRegistrantCount': function () {
        return Counts.get('youthRegistrantCount');
    },
     'teenRegistrantCount': function () {
        return Counts.get('teenRegistrantCount');
    },
     'youngAdultRegistrantCount': function () {
        return Counts.get('youngAdultRegistrantCount');
    },
    'adultRegistrantCount': function () {
        return Counts.get('adultRegistrantCount');
    }
});

Template.dashboardRegistrant.events({
    'click .deleteRegistration': function () {
        if (confirm("Delete this registration?")) {
            Registrants.remove(this._id);
        }
    }
});
