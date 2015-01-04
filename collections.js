// Combined list of accommodations and age group options
// displayed in registration form
// used as basis for auto-value computations
//ageGroups = {
//    adult: '26+',
//    youngAdult: '18-25',
//    teen: '13-18',
//    youth: '6-12',
//    child: '0-5'
//};

// Housing accommodations during the event
//accommodationsOptions = [
//    'Private',
//    'Semi-private',
//    'Dorm',
//    'Camping',
//    'Young Adult Friends',
//    'Junior Yearly Meeting'
//];


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
    },
    accommodations: {
        type: String,
        allowedValues: [
            'camping',
            'semi-private',
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
//SimpleSchema.messages({
//    departAfterArrive: "The departure date must be after the arrival date."
//});
