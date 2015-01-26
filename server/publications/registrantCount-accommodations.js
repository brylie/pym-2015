// Accommodations count publications
Meteor.publish('campingRegistrantAccommodationCount', function() {
    Counts.publish(this, 'campingRegistrantAccommodationCount', Registrants.find({'accommodations': 'camping'}));
});
Meteor.publish('semiprivateRegistrantAccommodationCount', function() {
    Counts.publish(this, 'semiprivateRegistrantAccommodationCount', Registrants.find({'accommodations': 'semiprivate'}));
});
Meteor.publish('privateRegistrantAccommodationCount', function() {
    Counts.publish(this, 'privateRegistrantAccommodationCount', Registrants.find({'accommodations': 'private'}));
});
Meteor.publish('jymRegistrantAccommodationCount', function() {
    Counts.publish(this, 'jymRegistrantAccommodationCount', Registrants.find({'accommodations': 'jym'}));
});
Meteor.publish('yafRegistrantAccommodationCount', function() {
    Counts.publish(this, 'yafRegistrantAccommodationCount', Registrants.find({'accommodations': 'yaf'}));
});
