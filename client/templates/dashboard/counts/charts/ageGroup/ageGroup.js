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
      // Clear previous SVG in case of reactive update
      d3.selectAll("#chartContainer svg").remove();

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

      // Get an array of all age group count values
      const ageGroupCountValues = _.map(parsedAgeGroupData, function (ageGroupObject) {
        // Get the count for current age group
        return ageGroupObject.count;
      });

      // Determine the minimum and maximum age group count
      const minimumAgeGroupCount = d3.min(ageGroupCountValues);
      const maximumAgeGroupCount = d3.max(ageGroupCountValues);

      // Create a tickmarks placeholder
      let numberOfTickMarks;

      // Set chart tickmark number based on difference between min and max count
      if (maximumAgeGroupCount - minimumAgeGroupCount < 10) {
        numberOfTickMarks = maximumAgeGroupCount - minimumAgeGroupCount;
      } else {
        // Chart has a maximum of ten tick marks
        numberOfTickMarks = 10;
      }

      // Get reference to template svg placeholder
      const svg = dimple.newSvg("#chartContainer", "100%", "100%");

      // Construct a dimple chart
      const ageGroupChart = new dimple.chart(svg, parsedAgeGroupData);
      ageGroupChart.setBounds("7%", "5%", "90%", "80%")

      // Add x and y axis values to chart
      const xAxis = ageGroupChart.addCategoryAxis("x", "ageGroup");
      const yAxis = ageGroupChart.addMeasureAxis("y", "count");

      // Adjust y axis settings

      // Show only integer tick marks
      yAxis.tickFormat = "d";

      // Capitalize the y axis label
      yAxis.title = "Count";

      // Remove grid lines from chart
      yAxis.showGridlines = false;

      // Set tick marks to value calculated above
      yAxis.ticks = numberOfTickMarks;

      // Render the bar plot
      ageGroupChart.addSeries(null, dimple.plot.bar);
      ageGroupChart.draw();
    }
  });
});
