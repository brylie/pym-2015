AutoForm.addHooks('edit-registration-form', {
  onSuccess: function(operation, resultId, template) {
    Router.go('/dashboard');

    // Tell the user the registration was successful
    FlashMessages.sendSuccess('<i class="fa fa-check"></i> Successfully edited registrant.');
  }
});
