Template.dashboard.helpers({
    'registrants': function () {
        return Registrants.find();
    }
});

Template.dashboard.events({
    'click #download-csv': function () {
        // Get current date for filename
        var dateNow = moment().format('YYYY-MM-DD');

        // Fetch all registrants
        registrantsJSON = Registrants.find().fetch();

        // Flatten Registrants array fields
        // TODO: can this be done in a single function, e.g. map?
        flattenFoodChoices();
        flattenDaysChoices();

        // Convert linens boolean into yes/no
        linensYesNo();

        // Special needs must be present or empty string
        getSpecialNeeds();

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
    /*
    * Takes a registrant object
    * flattens the food choices array
    * updates the global registrants JSON
    */
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
    /*
    * Takes a registrant object
    * flattens the days array
    * updates the global registrants JSON
    */
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

var linensYesNo = function () {
    /*
    * Takes a registrant object
    * converts linens boolean into 'yes' 'no'
    * updates the global registrants JSON
    */
    var count = 0;
    _.each(registrantsJSON, function (registrant) {
        if (registrant.linens) {
            registrantsJSON[count].linens = "yes";
        } else {
            registrantsJSON[count].linens = "no";
        }
        count ++;
    });
};

var getSpecialNeeds = function () {
    /*
    * Takes a registrant object
    * gets the special needs; or an empty string
    * updates the global registrants JSON
    */
    var count = 0;
    _.each(registrantsJSON, function (registrant) {
        if (registrant.specialNeeds) {
            registrantsJSON[count].specialNeeds = registrant.specialNeeds;
        } else {
            registrantsJSON[count].specialNeeds = "";
        }
        count ++;
    });
};
