AutoForm.addHooks('registration-form', {
    onSuccess: function(operation, result, template) {
        // Make sure all reactive vars are up to date.
        resetReactiveVars();
    }
});
