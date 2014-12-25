ageGroupsOptions = [
    '0-5',
    '6-10',
    '11-15',
    '16-20',
    '20-30',
    '30+'
];

// Housing accommodations during the event
accommodationsOptions = [
    'Private',
    'Semi-private',
    'Dorm',
    'Camping',
    'Young Adult Friends',
    'Junior Yearly Meeting'
];
//Accommodations = new Meteor.Collection("Accommodations");
//Accommodations.attachSchema(new SimpleSchema({
//    title: {
//        type: String,
//        label: "Title",
//        max: 200
//    }
//}));


//AgeGroups = new Meteor.Collection("Age Groups");
//AgeGroups.attachSchema(new SimpleSchema({
//    title: {
//        type: String,
//        label: "Title",
//        max: 200
//    }
//}));

// Individual registrant details
//Registrants = new Meteor.Collection("registrants");
//Registrants.attachSchema(new SimpleSchema({
//    first_name: {
//        type: String,
//        label: "First Name",
//        max: 200
//    },
//    last_name: {
//        type: String,
//        label: "Last Name",
//        max: 200
//    },
//    age_group: {
//        type: AgeGroups,
//        label: "Age Group"
//    },
//    accommodations: {
//        type: Accommodations,
//        label: "Accommodations"
//    }
//}));

// Event registrations, consisting of one or more registrants
Registrations = new Meteor.Collection("registrations");
Registrations.attachSchema(new SimpleSchema({
    'registration.registrants': {
        type: [Object],
        optional: false
    },
    'registration.registrants.$.first_name' :{
        type: String,
        label: "First Name",
        max: 200
    },
    'registration.registrants.$.last_name': {
        type: String,
        label: "Last Name",
        max: 200
    },
    'registration.registrants.$.age_group': {
        type: String,
        allowedValues: ageGroupsOptions
        optional: false,
        label: "Age Group"
    },
    'registration.registrants.$.accommodations': {
        type: String,
        allowedValues: accommodationsOptions,
        optional: false,
        label: "Accommodations"
    }
}));
