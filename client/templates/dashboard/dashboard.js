Template.dashboard.helpers({
    'registrants': function () {
        return Registrants.find();
    },
    'registrantCounts': function () {
        // Create an empty counts object
        var registrantCounts = {};

        // Get the values for each count
        registrantCounts.child = Counts.get('childRegistrantCount');
        registrantCounts.youth = Counts.get('youthRegistrantCount');
        registrantCounts.teen = Counts.get('teenRegistrantCount');
        registrantCounts.youngAdult = Counts.get('youngAdultRegistrantCount');
        registrantCounts.adult = Counts.get('adultRegistrantCount');

        // return the registrant counts to the template
        return registrantCounts;
    },
    'accommodationCounts': function () {
        // Create an empty counts object
        var accommodationCounts = {};

        // Get the values for each count
        accommodationCounts.camping = Counts.get('campingRegistrantAccommodationCount');
        accommodationCounts.semiprivate = Counts.get('semiprivateRegistrantAccommodationCount');
        accommodationCounts.private = Counts.get('privateRegistrantAccommodationCount');
        accommodationCounts.yaf = Counts.get('yafRegistrantAccommodationCount');
        accommodationCounts.jym = Counts.get('jymRegistrantAccommodationCount');

        // return the registrant counts to the template
        return accommodationCounts;
    }
});

Template.dashboardRegistrant.events({
    'click .deleteRegistration': function () {
        if (confirm("Delete this registration?")) {
            Registrants.remove(this._id);
        }
    }
});
