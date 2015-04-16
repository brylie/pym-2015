Template.userToolbar.created = function () {
    // Subscribe to the registration count for current user
    this.subscribe('myRegistrantCount');
};

Template.userToolbar.helpers({
    'userHasRegistrants': function () {
        // Get the number of registrants for the current user
        var numberOfRegistrants = Counts.get('myRegistrantCount');

        // Return true if the number of registrants is more than zero
        // False otherwise
        return (numberOfRegistrants > 0);
    }
});
