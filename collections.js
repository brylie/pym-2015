Registrants = new Meteor.Collection("registrants");
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
    'registrationType': {
        type: String,
        allowedValues: [
            'commuter',
            'daily',
            'weekly'
        ]
    },
    'accommodations': {
        type: String,
        allowedValues: [
            'camping',
            'semiprivate',
            'private',
            'jym',
            'yaf'
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
                    {label: "Monday", value: "Monday"},
                    {label: "Tuesday", value: "Tuesday"},
                    {label: "Wednesday", value: "Wednesday"},
                    {label: "Thursday", value: "Thursday"},
                    {label: "Friday", value: "Friday"},
                    {label: "Saturday", value: "Saturday"}
                ];
            }
        }
    },
    'fee' : {
        type: Number,
        label: "Fee",
        optional: true,
        autoValue: function (doc) {
            // Set up an empty registration object
            // to hold values from the submitted registration
            var registration = {};

            // get values from submitted registration and
            // set attributes on the registration object
            registration.ageGroup = this.field("ageGroup").value;
            registration.type = this.field("registrationType").value;
            registration.accommodations = this.field("accommodations").value;
            registration.days =  this.field("days").value;

            // calculate the registration fee
            // based on the submitted registration
            return calculateRegistrationPrice(registration);
        }
    }
}));

// Permissions
Registrants.allow({
    insert: function () {
        // TODO: consider whether user should be logged in to register
        // otherwise, collect registration details on registration form
        return true;
    },
    update: function () {
        // TODO: change permissions
        // e.g. if user.role === 'registrair' or user._id === registration.ownerId
        return true;
    },
    remove: function () {
        // TODO: change permissions
        // e.g. if user.role === 'registrair' or user._id === registration.ownerId
        return true;
    }
});

SimpleSchema.messages({
    departAfterArrive: "The departure date must be after the arrival date."
});
