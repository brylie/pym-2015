Registrants = new Meteor.Collection("registrants");

/*
List of all monthly meetings and worship groups
used for registrant meeting options
*/
var meetingArray = [
    "Appleseed Meeting",
    "Berkeley Meeting",
    "Big Island Meeting",
    "Central Coast Meeting",
    "Conejo Valley Worship Group",
    "Chico Meeting",
    "Claremont Monthly Meeting",
    "Davis Meeting",
    "Delta Meeting",
    "Fresno Meeting",
    "Friends House Worship Group",
    "Friends of Soledad",
    "Grass Valley Meeting",
    "Guatemala Monthly Meeting",
    "Honolulu Meeting",
    "Humboldt Meeting",
    "Inland Valley Friends Meeting",
    "Kauai Worship Group",
    "La Jolla Monthly Meeting",
    "Lake County Worship Group",
    "Las Vegas Worship Group",
    "Live Oak Monthly Meeting",
    "Livermore",
    "Marin Meeting",
    "Marloma Long Beach Monthly Meeting",
    "Maui Worship Group",
    "Mendocino Meeting",
    "Mexico City Monthly Meeting",
    "Modesto Worship Group",
    "Molokai Worship Group",
    "Monterey Peninsula Meeting",
    "Napa Sonoma Meeting",
    "Oakland Worship Group",
    "Ojai Friends Worship Group",
    "Orange Grove Monthly Meeting",
    "Palo Alto Meeting",
    "Redding Meeting",
    "Redwood Forest Meeting",
    "Reno Meeting",
    "Sacramento Meeting",
    "San Diego Monthly Meeting",
    "San Francisco Meeting",
    "San Jose Meeting",
    "Santa Barbara Monthly Meeting",
    "Santa Cruz Meeting",
    "Santa Monica Monthly Meeting",
    "Southern Humboldt Worship Group",
    "Strawberry Creek Meeting",
    "Ukiah Worship Group",
    "Visalia Meeting",
    "Whitleaf Worship Group"
];

/*
Take a string and convert it to an object in the form:
{label: string, value: string}
Used by autoform select menu
*/
var createAutoformSelectObject = function (string) {
    var autoformSelectObject = {label: string, value: string};
    return autoformSelectObject;
};

/*
Meeting options list
created by mapping all meetings in meeting array
to objects conforming to the {label: label, value: value}
required by autoform
*/
var registrantMeetingOptions = meetingArray.map(createAutoformSelectObject);

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
            'dorm',
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
    registrantMeeting: {
        type: String,
        optional: true,
        autoform: {
            type: "select",
            options: registrantMeetingOptions
        },
        label: "Registrant Meeting"
    },
    'firstTimeAttender': {
        type: Boolean,
        optional: true,
        defaultValue: false,
        label: "First time attender?"
    },
    'linens': {
        type: Boolean,
        optional: true,
        defaultValue: false,
        label: "Will you need linens? ($25 extra)"
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
            registration.firstTimeAttender = this.field("firstTimeAttender").value;
            registration.linens = this.field("linens").value;

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
