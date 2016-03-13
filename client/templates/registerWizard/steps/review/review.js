Template.wizardReview.onCreated(function () {
  // Get reference to template instance
  const instance = this;

  // Get form data as instance variable
  instance.registration = instance.data.wizard.mergedData();
});

Template.wizardReview.helpers({
  'registration': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get registration from template instance
    return instance.registration;
  }
});
