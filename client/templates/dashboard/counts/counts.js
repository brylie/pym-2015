Template.dashboardCounts.created = function () {
    this.subscribe("linensCount");
    this.subscribe("jymCount");
    this.subscribe("yafCount");
    this.subscribe("childrenProgramCount");
};

Template.dashboardCounts.helpers({
    'linensCount': function () {
        // Return the linens count
        return Counts.get('linensCount');
    },
    'childrenProgramCount': function () {
        // Return the Children's Program registrant count
        return Counts.get('childrenProgramCount');
    },
    'jymCount': function () {
        // Return the Junior Yearly Meeting registrant count
        return Counts.get('jymCount');
    },
    'yafCount': function () {
        // Return the Young Adult Friends registrant count
        return Counts.get('yafCount');
    }
});
