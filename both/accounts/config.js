AccountsTemplates.configure({
    // Behaviour
    // confirmPassword: true,
    "showForgotPasswordLink": true
});

AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});

AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

AccountsTemplates.configureRoute('forgotPwd', {
    layoutTemplate: 'appLayout'
});

AccountsTemplates.configureRoute('resetPwd', {
    layoutTemplate: 'appLayout',
    path: 'reset-password'
});
