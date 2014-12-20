// Housing accommodations during the event
Accommodations = new Meteor.Collection("accommodations");
Accommodations.attachSchema(new SimpleSchema({

}));

// Registrant age groups, used for pricing calculations, etc.
AgeGroups = new Meteor.Collection("ageGroups");
AgeGroups.attachSchema(new SimpleSchema({

}));

// Individual registrant details
Registrants = new Meteor.Collection("registrants");
Registrants.attachSchema(new SimpleSchema({

}));

// Event registrations, consisting of one or more registrants
Registrations = new Meteor.Collection("registrations");
Registrations.attachSchema(new SimpleSchema({

}));
