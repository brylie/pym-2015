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

    // Flatten registrant array fields to strings
    var arrayFields = ["foodPreference", "days"]
    _.each(arrayFields, flattenArray);

    // Convert boolean values into yes/no
    var booleanFields = ["linens", "firstTimeAttender"];
    _.each(booleanFields, booleanToYesNo);

    // Ensure that all optional fields have values for export
    var optionalFields = [
      "specialNeeds",
      "postalAddress",
      "telephone",
      "carbonTax",
      "registrantAffiliation"
    ];
    _.each(optionalFields, ensureFieldHasValue);

    // Convert JSON to CSV
    // making sure to set field order
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

var flattenArray = function (field) {
  /*
  * Takes a registrant object
  * If value is present, flattens array to comma delimited string
  * Otherwise sets to empty string
  */
  _.each(registrantsJSON, function (registrant) {
    if (registrant[field]) {
      registrant[field] = registrant[field].join(", ");
    } else {
      registrant[field] = "";
    }
  });
};

var booleanToYesNo = function (field) {
  /*
  * Takes a registrant object
  * converts boolean field value into 'yes' 'no'
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

var ensureFieldHasValue = function (field) {
  /*
  * Takes a registrant object, looks at a given field
  * If the field is undefined, sets the value to an empty string
  */
  _.each(registrantsJSON, function (registrant) {
    // If the field is undefined
    if (!registrant[field]) {
      // Set the field to an empty string
      registrant[field] = "";
    }
  });
};
