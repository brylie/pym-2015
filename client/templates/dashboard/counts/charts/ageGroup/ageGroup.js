Template.dashboardChartsAgeGroup.onCreated(function () {
  this.subscribe('childRegistrantCount');
  this.subscribe('youthRegistrantCount');
  this.subscribe('teenRegistrantCount');
  this.subscribe('youngAdultRegistrantCount');
  this.subscribe('adultRegistrantCount');
});
Template.dashboardChartsAgeGroup.onRendered(function () {
  // Get reference to template instance
  const instance = this;

  instance.autorun(function () {
    if (instance.subscriptionsReady()){
      // Create an empty counts object
      const ageGroupData = {};

      // Get the values for each count
      ageGroupData.child = Counts.get('childRegistrantCount');
      ageGroupData.youth = Counts.get('youthRegistrantCount');
      ageGroupData.teen = Counts.get('teenRegistrantCount');
      ageGroupData.youngAdult = Counts.get('youngAdultRegistrantCount');
      ageGroupData.adult = Counts.get('adultRegistrantCount');

      // Get all age groups
      const ageGroupKeys = _.keys(ageGroupData);

      // Create an object with ageGroup and count keys
      const parsedAgeGroupData = _.map(ageGroupKeys, function (ageGroup) {
        // Create a placeholder object
        const ageGroupCount = {};

        // Humanize the age group
        const humanizedAgeGroup = S(ageGroup).humanize().s

        // Set ageGroup value to humanized age group
        ageGroupCount.ageGroup = humanizedAgeGroup;

        // Set age group count to corresponding value from ageGroupData
        ageGroupCount.count = ageGroupData[ageGroup];

        return ageGroupCount;
      });

      // Get reference to template svg placeholder
      const svg = dimple.newSvg("#chartContainer", "100%", "100%");

      // Construct a dimple chart
      const ageGroupChart = new dimple.chart(svg, parsedAgeGroupData);
      ageGroupChart.setBounds("7%", "5%", "90%", "80%")
      ageGroupChart.addCategoryAxis("x", "ageGroup");
      const yAxis = ageGroupChart.addMeasureAxis("y", "count");
      yAxis.tickFormat = "d";
      ageGroupChart.addSeries(null, dimple.plot.bar);
      ageGroupChart.draw();
    }
  });
});
