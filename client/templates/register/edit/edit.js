Template.editRegistration.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get reference to router
  var router = Router.current();

  // Get registrant ID from router parameters
  var registrantId = router.params._id;

  // Subscribe to current registrant
  instance.subscribe("singleRegistrant", registrantId);
};

Template.editRegistration.rendered = function () {
    setReactiveVars();
};

Template.editRegistration.events({
    'change form': function() {
        setReactiveVars();
    }
});
