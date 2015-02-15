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
        accommodationCounts.dormDistant = Counts.get('dormDistantRegistrantAccommodationCount');
        accommodationCounts.dormProximate = Counts.get('dormProximateRegistrantAccommodationCount');
        accommodationCounts.semiprivate = Counts.get('semiprivateRegistrantAccommodationCount');
        accommodationCounts.yaf = Counts.get('yafRegistrantAccommodationCount');
        accommodationCounts.jym = Counts.get('jymRegistrantAccommodationCount');

        // return the registrant counts to the template
        return accommodationCounts;
    }
});

Template.dashboard.events({
    'click #download-csv': function () {
        // Get current date for filename
        var dateNow = moment().format('YYYY-MM-DD');

        // Fetch all registrants
        // TODO: fix this to work with subscription
        registrantsJSON = Registrants.find().fetch();

        // Flatten Registrants array fields
        flattenFoodChoices();
        flattenDaysChoices();

        // Convert JSON to CSV
        var registrantsCSV= Papa.unparse(registrantsJSON);

        // Add registrants to binary blob for downloading
        var registrantsBLOB = new Blob([registrantsCSV], {type: "text/csv"});

        // Download the file
        saveAs(registrantsBLOB, "pym2015-registrants-asOf-" + dateNow + ".csv");
    }
});

Template.dashboardRegistrant.events({
    'click .deleteRegistration': function () {
        if (confirm("Delete this registration?")) {
            Registrants.remove(this._id);
        }
    }
});

var flattenFoodChoices = function () {
    var count = 0;
    _.each(registrantsJSON, function (registrant) {
        if (registrant.foodPreference) {
            var foodPreference = registrant.foodPreference.join(", ");
            registrantsJSON[count].foodPreference = foodPreference;
        } else {
            registrantsJSON[count].foodPreference = "";
        }
        count ++;
    });
};

var flattenDaysChoices = function () {
    var count = 0;
    _.each(registrantsJSON, function (registrant) {
        if (registrant.days) {
            var days = registrant.days.join(", ");
            registrantsJSON[count].days = days;
        } else {
            registrantsJSON[count].days = "";
        }
        count ++;
    });
};
