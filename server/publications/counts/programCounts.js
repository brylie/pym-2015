/*
Count the number or Junior Yearly Meeting registrants.
*/
Meteor.publish('jymCount', function() {
  Counts.publish(this,
    'jymCount',
    Registrants.find({ jymProgram: "yes"})
  );
});
