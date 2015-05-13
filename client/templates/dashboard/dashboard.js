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

    // Convert boolean values into yes/no
    booleanToYesNo("linens");
    booleanToYesNo("firstTimeAttender");

    // Special needs, postal address, carbon tax, and telephone must be present or empty string
    getSpecialNeeds();
    getPostalAddress();
    getTelephone();
    getCarbonTax();
    getAffiliation();

    // Convert JSON to CSV
    // re-order fields
    var registrantsCSV = Papa.unparse({
      quotes: true,
      fields: [
        "last_name",
        "first_name",
        "age",
        "ageGroup",
        "registrantEmail",
        "postalAddress",
        "telephone",
        "registrantAffiliation",
        "firstTimeAttender",
        "registrationType",
        "accommodations",
        "days",
        "linens",
        "foodPreference",
        "specialNeeds",
        "carbonTax",
        "fee",
        "createdAt",
        "_id",
        "createdByEmail"
      ],
      data: registrantsJSON
    });

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

var booleanToYesNo = function (field) {
  /*
  * Takes a registrant object field
  * converts boolean value into 'yes' 'no'
  * updates the global registrants JSON
  */
  var count = 0;
  _.each(registrantsJSON, function (registrant) {
    if (registrant[field]) {
      registrantsJSON[count][field] = "yes";
    } else {
      registrantsJSON[count][field] = "no";
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

var getPostalAddress = function () {
  /*
  * Takes a registrant object
  * gets the postal or sets an empty string
  * updates the global registrants JSON
  */
  var count = 0;
  _.each(registrantsJSON, function (registrant) {
    if (registrant.postalAddress) {
      registrantsJSON[count].postalAddress = registrant.postalAddress;
    } else {
      registrantsJSON[count].postalAddress = "";
    }
    count ++;
  });
};

var getTelephone = function () {
  /*
  * Takes a registrant object
  * gets the telephone or sets an empty string
  * updates the global registrants JSON
  */
  var count = 0;
  _.each(registrantsJSON, function (registrant) {
    if (registrant.telephone) {
      registrantsJSON[count].telephone = registrant.telephone;
    } else {
      registrantsJSON[count].telephone = "";
    }
    count ++;
  });
};

var getAffiliation = function () {
  /*
  * Takes a registrant object
  * gets the affiliation; or an empty string
  * updates the global registrants JSON
  */
  var count = 0;
  _.each(registrantsJSON, function (registrant) {
    if (registrant['registrantAffiliation']) {
      registrantsJSON[count]['registrantAffiliation'] = registrant['registrantAffiliation'];
    } else {
      registrantsJSON[count]['registrantAffiliation'] = "";
    }
    count ++;
  });
};

var getCarbonTax = function () {
  /*
  * Takes a registrant object
  * gets the carbon tax; or an empty string
  * updates the global registrants JSON
  */
  var count = 0;
  _.each(registrantsJSON, function (registrant) {
    if (registrant.carbonTax) {
      registrantsJSON[count].carbonTax = registrant.carbonTax;
    } else {
      registrantsJSON[count].carbonTax = "";
    }
    count ++;
  });
};
