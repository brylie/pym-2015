Template.dashboardCounts.created = function () {
    this.subscribe("linensCount");
    this.subscribe("jymCount");
    this.subscribe("yafCount");
};

Template.dashboardCounts.helpers({
    'linensCount': function () {
        // Return the linens count
        return Counts.get('linensCount');
    },
    'jymCount': function () {
        // Return the linens count
        return Counts.get('jymCount');
    },
    'yafCount': function () {
        // Return the linens count
        return Counts.get('yafCount');
    }
});
