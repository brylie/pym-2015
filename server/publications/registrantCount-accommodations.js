/*
* These publications provide a count of various Accommodations options chosen by registrants.
*/

// Accommodations count publications
Meteor.publish('campingRegistrantAccommodationCount', function() {
    Counts.publish(this,
                   'campingRegistrantAccommodationCount',
                   Registrants.find({'accommodations': 'camping'}));
});

Meteor.publish('dormRegistrantAccommodationCount', function() {
    Counts.publish(this,
                   'dormRegistrantAccommodationCount',
                   Registrants.find({'accommodations': 'dorm'}));
});

Meteor.publish('semiprivateRegistrantAccommodationCount', function() {
    Counts.publish(this,
                   'semiprivateRegistrantAccommodationCount',
                   Registrants.find({'accommodations': 'semiprivate'}));
});

Meteor.publish('jymRegistrantAccommodationCount', function() {
    Counts.publish(this,
                   'jymRegistrantAccommodationCount',
                   Registrants.find({'accommodations': 'jym'}));
});

Meteor.publish('yafRegistrantAccommodationCount', function() {
    Counts.publish(this,
                   'yafRegistrantAccommodationCount',
                   Registrants.find({'accommodations': 'yaf'}));
});
