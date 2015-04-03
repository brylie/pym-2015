/*
Count the number or linens requests.
*/
Meteor.publish('linensCount', function() {
    Counts.publish(this,
                   'linensCount',
                   Registrants.find({'linens': true}));
});
