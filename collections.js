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
        allowedValues: ageGroupsOptions,
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
Registrations.allow({
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
