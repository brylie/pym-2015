Template.dashboardRegistrantTable.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Field types that need special formatting
  instance.arrayFields = ["foodPreference", "days"];
  instance.booleanFields = ["linens"];
  instance.optionalFields = [
    "specialNeeds",
    "postalAddress",
    "telephone",
    "carbonTax",
    "registrantAffiliation",
    "gradeInSchool",
    "jymProgram",
    "yafProgram"
  ];
  instance.dateFields = ["createdAt"];

  // Set up instance functions

  instance.flattenArrayFields = function (registrant) {
    /*
    * Takes a registrant object
    * If value is present, flattens array to comma delimited string
    * Otherwise sets to empty string
    */

    _.each(instance.arrayFields, function (field) {
      if (registrant[field]) {
        registrant[field] = registrant[field].join(", ");
      } else {
        registrant[field] = "";
      }
    });

    return registrant;
  };

  instance.booleanFieldsToYesNo = function (registrant) {
    /*
    * Takes a registrant object
    * converts boolean field value into 'yes' 'no'
    */
    _.each(instance.booleanFields, function (field) {
      if (registrant[field]) {
        registrant[field] = "yes";
      } else {
        registrant[field] = "no";
      }
    });

    return registrant;
  };

  instance.ensureOptionalFieldsHaveValues = function (registrant) {
    /*
    * Takes a registrant object, looks at a given field
    * If the field is undefined, sets the value to an empty string
    */
    _.each(instance.optionalFields, function (field) {
      // If the field is undefined
      if (!registrant[field]) {
        // Set the field to an empty string
        registrant[field] = "";
      }
    });

    return registrant;
  };

  instance.unixToISO = function (registrant) {
    /*
    * Takes a registrant object
    * Converts a date field from Unix format to ISO 8601
    */
    _.each(instance.dateFields, function (field) {
      // Get the registration date, using moment
      var originalDate = moment(registrant[field]);

      // Convert the registration date to ISO format
      var isoDate = originalDate.format();

      // Update the registrant field with ISO date
      registrant[field] = isoDate;
    });

    return registrant;
  };

  instance.ensureFieldFormatting = function (registrantsJSON) {
    // Flatten registrant array fields to strings
    registrantsJSON = _.map(registrantsJSON, instance.flattenArrayFields);

    // Convert boolean values into yes/no
    registrantsJSON = _.map(registrantsJSON, instance.booleanFieldsToYesNo);

    // Ensure that all optional fields have values for export
    registrantsJSON = _.map(registrantsJSON, instance.ensureOptionalFieldsHaveValues);

    // Adjust unix times to ISO
    registrantsJSON = _.map(registrantsJSON, instance.unixToISO);

    return registrantsJSON;
  }
});

Template.dashboardRegistrantTable.events({
  'click #download-csv': function (event, instance) {
    // Get current date for filename
    const dateNow = moment().format('YYYY-MM-DD');

    // Fetch all registrants
    let registrantsJSON = Registrants.find().fetch();

    registrantsJSON = instance.ensureFieldFormatting(registrantsJSON);

    // Convert JSON to CSV
    // making sure to set field order
    const registrantsCSV = Papa.unparse({
      quotes: true,
      fields: [
        "last_name",
        "first_name",
        "age",
        "ageGroup",
        "jymProgram",
        "yafProgram",
        "gradeInSchool",
        "registrantEmail",
        "postalAddress",
        "telephone",
        "registrantAffiliation",
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
    const registrantsBLOB = new Blob([registrantsCSV], {type: "text/csv"});

    // Download the file
    saveAs(registrantsBLOB, "pym-registrants-export-" + dateNow + ".csv");
  }
});
