Template.dashboardChartsAccommodations.onCreated(function () {
  this.subscribe('campingRegistrantAccommodationCount');
  this.subscribe('semiprivateRegistrantAccommodationCount');
  this.subscribe('dormRegistrantAccommodationCount');
});

Template.dashboardChartsAccommodations.onRendered(function () {

  // Get reference to template instance
  const instance = this;

  instance.autorun(function () {
    if (instance.subscriptionsReady()){
      // Clear previous SVG in case of reactive update
      d3.selectAll("#accommodationsChartContainer svg").remove();

      // Create an empty counts object
      const accommodationCounts = {};

      // Get the values for each count
      accommodationCounts.camping = Counts.get('campingRegistrantAccommodationCount');
      accommodationCounts.dorm = Counts.get('dormRegistrantAccommodationCount');
      accommodationCounts.semiprivate = Counts.get('semiprivateRegistrantAccommodationCount');

      // Get all accommodations types
      const accommodationsKeys = _.keys(accommodationCounts);

      // Create an object with accommodationType and count keys
      const parsedAccommodationsData = _.map(accommodationsKeys, function (accommodationType) {
        // Create a placeholder object
        const accommodationCount = {};

        // Set accommodation type value
        accommodationCount.accommodationType = accommodationType;

        // Set age group count to corresponding value from ageGroupData
        accommodationCount.count = accommodationCounts[accommodationType];

        return accommodationCount;
      });

      // Get an array of all accommodation type count values
      const accommodationCountValues = _.map(parsedAccommodationsData, function (accommodationObject) {
        // Get the count for current accommodation type
        return accommodationObject.count;
      });

      // Determine the minimum and maximum accommodation type counts
      const minimumAccommodationTypeCount = d3.min(accommodationCountValues);
      const maximumAccommodationTypeCount = d3.max(accommodationCountValues);

      // Create a tickmarks placeholder
      let numberOfTickMarks;

      // Set chart tickmark number based on difference between min and max count
      if (maximumAccommodationTypeCount - minimumAccommodationTypeCount < 10) {
        numberOfTickMarks = maximumAccommodationTypeCount - minimumAccommodationTypeCount;
      } else {
        // Chart has a maximum of ten tick marks
        numberOfTickMarks = 10;
      }

      // Get reference to template svg placeholder
      const svg = dimple.newSvg("#accommodationsChartContainer", "100%", "100%");

      // Construct a dimple chart
      const ageGroupChart = new dimple.chart(svg, parsedAccommodationsData);
      ageGroupChart.setBounds("20%", "5%", "75%", "65%")

      // Add x and y axis values to chart
      const xAxis = ageGroupChart.addMeasureAxis("x", "count");
      const yAxis = ageGroupChart.addCategoryAxis("y", "accommodationType");

      // Adjust y axis settings

      // Show only integer tick marks
      xAxis.tickFormat = "d";

      // Capitalize the y axis label
      xAxis.title = "Count";
      yAxis.title = "Accommodations";

      // Remove grid lines from chart
      xAxis.showGridlines = false;

      // Set tick marks to value calculated above
      xAxis.ticks = numberOfTickMarks;

      // Render the bar plot
      ageGroupChart.addSeries(null, dimple.plot.bar);
      ageGroupChart.draw();
    }
  });
});
