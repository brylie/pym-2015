Template.editRegistration.rendered = function () {
    setReactiveVars();
};

Template.editRegistration.events({
    'change form': function() {
        setReactiveVars();
    }
});
