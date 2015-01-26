// Age group publications
Meteor.publish('childRegistrantCount', function() {
    Counts.publish(this, 'childRegistrantCount', Registrants.find({'ageGroup': 'child'}));
});
Meteor.publish('youthRegistrantCount', function() {
    Counts.publish(this, 'youthRegistrantCount', Registrants.find({'ageGroup': 'youth'}));
});
Meteor.publish('teenRegistrantCount', function() {
    Counts.publish(this, 'teenRegistrantCount', Registrants.find({'ageGroup': 'teen'}));
});
Meteor.publish('youngAdultRegistrantCount', function() {
    Counts.publish(this, 'youngAdultRegistrantCount', Registrants.find({'ageGroup': 'youngAdult'}));
});
Meteor.publish('adultRegistrantCount', function() {
    Counts.publish(this, 'adultRegistrantCount', Registrants.find({'ageGroup': 'adult'}));
});
