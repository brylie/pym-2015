Registrants = new Meteor.Collection("registrants");

Registrants.allow({
    // User must be logged in to register
    insert: function (userId, doc) {
        return !! userId;
    }
});

Registrants.attachSchema(new SimpleSchema({
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
    'ageGroup': {
        type: String,
        allowedValues: [
            'child',
            'youth',
            'teen',
            'youngAdult',
            'adult'
        ],
        optional: true,
        autoValue: function (doc) {
            // calculate age group based on age field
            return calculateAgeGroup(this.field("age").value);
        }
    },
    'jymProgram': {
      type: Boolean
    },
    'gradeInSchool': {
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
    },
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
            'semiprivate'
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
                  {label: "Wednesday", value: "Wednesday"}
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
    'registrantEmail': {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "Registrant E-mail address",
        optional: true
    },
    'registrantAffiliation': {
        type: String,
        optional: true,
        label: "Affiliated Quaker meeting, worship group, or organization"
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
        label: "Tell us about any special needs that we can accommodate.",
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    'carbonTax': {
        type: Number,
        label: "Voluntary carbon tax ($USD)",
        optional: true
    },
    'donation': {
        type: Number,
        label: "Optional donation ($USD)",
        optional: true
    },
    'fee' : {
        type: Number,
        decimal: true,
        label: "Fee",
        optional: true,
        autoValue: function (doc) {
            // Set up an empty registration object
            // to hold values from the submitted registration
            var registration = {};

            // get values from submitted registration and
            // set attributes on the registration object
            registration.age = this.field("age").value;
            registration.ageGroup = calculateAgeGroup(registration.age);
            registration.type = this.field("registrationType").value;
            registration.accommodations = this.field("accommodations").value;
            registration.days =  this.field("days").value;
            registration.firstTimeAttender = this.field("firstTimeAttender").value;
            registration.linens = this.field("linens").value;
            registration.carbonTax = this.field("carbonTax").value;

            // calculate the registration fee
            // based on the submitted registration
            return calculateRegistrationPrice(registration);
        }
    }
}));

Registrants.before.insert(function (userId, doc){
    // set registration created date to current date
    doc.createdAt = Date.now();

    //  Attach registration to Meteor user
    // for reporting, access control, etc
    doc.createdById = userId;

    // Add user email address to registration document
    doc.createdByEmail = Meteor.users.findOne(userId).emails[0].address;
});
