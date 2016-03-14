Template.dashboardCounts.created = function () {
    this.subscribe("linensCount");
};

Template.dashboardCounts.helpers({
    'linensCount': function () {
        // Return the linens count
        return linensCount = Counts.get('linensCount');
    }
});
