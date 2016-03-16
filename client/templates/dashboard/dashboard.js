Template.dashboard.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  instance.subscribe('registrants');
});

Template.dashboard.helpers({
  'registrants': function () {
    return Registrants.find().fetch();
  }
});
