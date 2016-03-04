Template.registrantsView.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Subscribe to registrants for current user
  instance.subscribe("myRegistrants");
});

Template.registrantsView.helpers({
  'registrants': function () {
    const currentUserId = Meteor.userId();

    if (currentUserId) {
      return Registrants.find({'createdById': currentUserId});
    }
  }
});
