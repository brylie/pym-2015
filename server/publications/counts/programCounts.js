/*
Count the number or Children's program registrants.
*/
Meteor.publish('childrenProgramCount', function() {
  Counts.publish(this,
    'childrenProgramCount',
    Registrants.find({ childrenProgram: "yes"})
  );
});

/*
Count the number or Junior Yearly Meeting registrants.
*/
Meteor.publish('jymCount', function() {
  Counts.publish(this,
    'jymCount',
    Registrants.find({ jymProgram: "yes"})
  );
});

/*
Count the number or Young Adult Friends registrants.
*/
Meteor.publish('yafCount', function() {
  Counts.publish(this,
    'yafCount',
    Registrants.find({ yafProgram: "yes"})
  );
});
