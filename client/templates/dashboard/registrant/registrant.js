Template.dashboardRegistrant.events({
  'click .deleteRegistration': function () {
    // Make sure the user wants to delete the registration
    if (confirm("Delete this registration?")) {
      Registrants.remove(this._id);
    }
  }
});
