// Combined list of accommodations and age group options
// displayed in registration form
// used as basis for auto-value computations
ageGroups = {
    adult: '26+',
    youngAdult: '18-25',
    teen: '13-18',
    youth: '6-12',
    child: '0-5'
};
// first day of the event, used for date choices
firstDay = new Date(2015, 06, 14); // Month is zero based in JS, day needed one extra for the select form
lastDay = new Date(2015, 06, 19); // Month is zero based in JS, day needed one extra for the select form

// Housing accommodations during the event
accommodationsOptions = [
    'Private',
    'Semi-private',
    'Dorm',
    'Camping',
    'Young Adult Friends',
    'Junior Yearly Meeting'
];


Registrants = new Meteor.Collection("registrants");
Registrants.attachSchema(new SimpleSchema({
    'first_name' :{
        type: String,
        label: "First Name",
        max: 200
    },
    'last_name': {
        type: String,
        label: "Last Name",
        max: 200
    },
    ageGroup: {
        type: String,
        allowedValues: [
            'child',
            'youth',
            'teen',
            'youngAdult',
            'adult'
        ]
    },
    registrationType: {
        type: String,
        allowedValues: [
            'commuter',
            'daily',
            'weekly'
        ]
    }
//    arrival: {
//        type: Date,
//        min: firstDay,
//        max: lastDay
//    },
//    departure: {
//        type: Date,
//        min: firstDay,
//        max: lastDay,
//        custom: function () {
//            if (this.value < this.field('arrival').value) {
//                return "departAfterArrive";
//            }
//        }
//    }
}));
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
