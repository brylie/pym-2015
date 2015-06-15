Template.dashboardRegistrant.events({
  'click .cancelRegistration': function () {
    // Get current registration
    var registrationId = this._id;

    // Make sure the user wants to cancel the registration
    bootbox.dialog({
      message: "Note: This cannot be undone.",
      title: "Cancel this registration?",
      buttons: {
        cancelRegistration: {
          label: "Yes, cancel registration.",
          className: "btn-warning",
          callback: function() {
            // Call the cancel registration method for this registration ID
            Meteor.call("cancelRegistration", registrationId);
          }
        },
        doNotCancel: {
          label: "No, do not cancel registration.",
          className: "btn-success"
        }
      }
    });
  },
  'click .deleteRegistration': function () {
    // Make sure the user wants to delete the registration
    if (confirm("Delete this registration?")) {
      Registrants.remove(this._id);
    }
  }
});
