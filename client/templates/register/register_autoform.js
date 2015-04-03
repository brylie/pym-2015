AutoForm.addHooks('registration-form', {
    onSuccess: function(operation, result, template) {
        // Make sure all reactive vars are up to date.
        resetReactiveVars();

        // Tell the user the registration was successful
        FlashMessages.sendSuccess('<i class="fa fa-check"></i> Registration success!');

        // Tell user to submit additional registrations if desired
        FlashMessages.sendInfo('<i class="fa fa-user"></i> Registering another person? Enter their details below.');
    }
});
