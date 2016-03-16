Template.dashboardRegistrantTable.events({
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
      "registrantAffiliation",
      "grade"
    ];
    _.each(optionalFields, ensureFieldHasValue);

    var dateFields = ["createdAt"];
    _.each(dateFields, unixToISO);

    // Convert JSON to CSV
    // making sure to set field order
    var registrantsCSV = Papa.unparse({
      quotes: true,
      fields: [
        "last_name",
        "first_name",
        "age",
        "ageGroup",
        "grade",
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
    saveAs(registrantsBLOB, "pym2015-registrants-export-" + dateNow + ".csv");
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
  _.each(registrantsJSON, function (registrant) {
    if (registrant[field]) {
      registrant[field] = "yes";
    } else {
      registrant[field] = "no";
    }
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

var unixToISO = function (field) {
  /*
  * Takes a registrant object
  * Converts a date field from Unix format to ISO 8601
  */
  _.each(registrantsJSON, function (registrant) {
    // Get the registration date, using moment
    var registrationDate = moment(registrant[field]);

    // Convert the registration date to ISO format
    var isoDate = registrationDate.format();

    // Update the registrant field with ISO date
    registrant[field] = isoDate;
  })
};
