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
  'firstTimeAttender': {
      type: Boolean,
      optional: true,
      defaultValue: false,
      label: "First time attender?"
  },
  'childrenProgram': {
    type: String,
    label: "Children's program",
    optional: true
  },
  'jymProgram': {
    type: String,
    label: "Junior Yearly Meeting",
    optional: true
  },
  'yafProgram': {
    type: String,
    label: "Young Adult Friends",
    optional: true
  },
  'gradeInSchool': {
    type: String,
    optional: true,
    label: "School grade",
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

// Accommodations
WizardSchemas.accommodations = new SimpleSchema({
  'registrationType': {
      type: String,
      allowedValues: [
          'commuter',
          'daily',
          'weekly',
          'cancelled'
      ]
  },
  'accommodations': {
      type: String,
      allowedValues: [
          'camping',
          'dorm',
          'semiprivate',
          'private'
      ],
      optional: true,
      custom: function () {
          // Required if registration is daily or weekly
          if ( !this.isSet
              &&
              (
              this.field('registrationType').value === "daily"
              ||
              this.field('registrationType').value === "weekly")
             ) {
              return "required";
          }
      }
  },
  days: {
      type: [String],
      optional: true,
      autoform: {
          type: "select-checkbox-inline",
          options: function () {
              return [
                {label: "Friday", value: "Friday"},
                {label: "Saturday", value: "Saturday"},
                {label: "Sunday", value: "Sunday"},
                {label: "Monday", value: "Monday"},
                {label: "Tuesday", value: "Tuesday"},
                {label: "Wednesday", value: "Wednesday"},
              ];
          }
      }
  },
  foodPreference: {
      type: [String],
      optional: true,
      autoform: {
          type: "select-checkbox-inline",
          allowedValues: [
              'Omnivore',
              'Vegetarian',
              'Vegan',
              'Gluten-free',
              'Dairy-free',
              'Sugar-free',
              'Soy-free',
              'Raw vegetables',
              'Low-salt'
          ],
          options: function () {
              return [
                  {label: "Omnivore", value: "Omnivore"},
                  {label: "Vegetarian", value: "Vegetarian"},
                  {label: "Vegan", value: "Vegan"},
                  {label: "Gluten-free", value: "Gluten-free"},
                  {label: "Dairy-free", value: "Dairy-free"},
                  {label: "Sugar-free", value: "Sugar-free"},
                  {label: "Soy-free", value: "Soy-free"},
                  {label: "Raw vegetables", value: "Raw vegetables"},
                  {label: "Low-salt", value: "Low-salt"}
              ];
          }
      }
  },
  'linens': {
      type: Boolean,
      optional: true,
      defaultValue: false,
      label: "Will you need linens? ($25 extra)"
  },
  'specialNeeds': {
      type: String,
      optional: true,
      label: "Tell us about any special needs that we can accommodate",
      autoform: {
          afFieldInput: {
              type: "textarea"
          }
      }
  }
});

// Contributions
WizardSchemas.contributions = new SimpleSchema({
  'carbonTax': {
      type: Number,
      label: "Voluntary carbon tax ($USD)",
      optional: true
  },
  'donation': {
      type: Number,
      label: "Optional donation ($USD)",
      optional: true
  }
});
