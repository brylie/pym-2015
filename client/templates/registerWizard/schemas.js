WizardSchemas = {};

// Registrant
WizardSchemas.registrant = new SimpleSchema({
  'first_name' : {
      type: String,
      label: "First Name",
      max: 200
  },
  'last_name': {
      type: String,
      label: "Last Name",
      max: 200
  },
  'firstTimeAttender': {
      type: Boolean,
      optional: true,
      defaultValue: false,
      label: "First time attender?"
  },
  'age': {
      label: "Age at time of event",
      type: Number,
      max: 115,
      min: 0
  },
  'registrantAffiliation': {
      type: String,
      optional: true,
      label: "Affiliated Quaker meeting, worship group, or organization"
  },
  'grade': {
    type: String,
    optional: true,
    label: "School grade in Fall",
    allowedValues: [
      "K",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "K", value: "K"},
          {label: "1", value: "1"},
          {label: "2", value: "2"},
          {label: "3", value: "3"},
          {label: "4", value: "4"},
          {label: "5", value: "5"},
          {label: "6", value: "6"},
          {label: "7", value: "7"},
          {label: "8", value: "8"},
          {label: "9", value: "9"},
          {label: "10", value: "10"},
          {label: "11", value: "11"},
          {label: "12", value: "12"},
        ];
      }
    }
  }
});


// Contact
WizardSchemas.contact = new SimpleSchema({
  'postalAddress': {
      type: String,
      optional: true,
      label: "Primary postal address",
      autoform: {
          afFieldInput: {
              type: "textarea"
          }
      }
  },
  'telephone': {
      type: String,
      optional: true,
      label: "Primary telephone number",
      max: 20
  },
  'registrantEmail': {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      label: "Registrant E-mail address",
      optional: true
  }
});
