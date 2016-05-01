Template.editRegistration.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get reference to router
  var router = Router.current();

  // Get registrant ID from router parameters
  instance.registrantId = router.params._id;

  // Subscribe to current registrant
  instance.subscribe("singleRegistrant", instance.registrantId);
};

Template.editRegistration.rendered = function () {
  setReactiveVars();
};

Template.editRegistration.events({
    'change form': function() {
      setReactiveVars();
    }
});

Template.editRegistration.helpers({
  registrant: function () {
    // Get reference to template instance
    var instance = Template.instance();

    // Get registrant
    var registrant = Registrants.findOne(instance.registrantId);

    return registrant;
  }
});
