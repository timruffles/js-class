function sectorHistogram() {

    var width = 800;
    var height = 500;
    var BINS = 20;
    var DONUT_R = 25;

    // colours will relate to index
      var colors = d3.scale.linear()
      .domain([0, BINS/2, BINS - 1])
      .range(["hsl(198, 100%, 77%)", "hsl(213, 100%, 50%)", "hsl(198, 100%, 77%)"])
      .interpolate(d3.interpolateHsl);

    // we want our diagram constrained within the smallest dimension
    // and offset to be in the center
    var r = (Math.min(width, height) - 2 * DONUT_R) / 2;
    var xOffset = (width - 2*r) / 2 + r;
    var yOffset = (height - 2*r) / 2 + r;

    return render;

    function render(selection, rawData) {
      
      // create our histogram layout and configure
      var histogram = d3.layout.histogram()
          .bins(BINS);

      // apply it to our data
      var data = histogram(rawData);

      // height of bins becomes outer-radius of sector
      var y = d3.scale.linear()
          .domain(d3.extent(data, function(d) { return d.y }))
          .range([15, r]);

      var root = selection
          .attr({
            width: width,
            height: height,
          })
          .append("g")
          .attr("transform", "translate(" + xOffset + "," + yOffset + ")")

      // calculate the regular arc sizes based on width of bins
      var arcs = d3.layout.pie()
        .value(function(d) { return d.dx })
        (data);

      // want to animate around the circle, so sort the data
      arcs.sort(function(a,b) { return a.startAngle - b.startAngle });

      // our arc drawing function
      var arc = d3.svg.arc()
        .innerRadius(DONUT_R);

      var update = root.selectAll("path")
          .data(arcs)

      update
          .enter()
          .append("path")

      update
          .style("fill", function(_d, i) {
            return colors(i);
          })
          .transition()
          // setup a tween fn so we can animate the paths
          .tween("d", function(d) {
            var el = d3.select(this);
            return function(ratioOfTransitionTime) {
              // animate from 0 relative radius up to our full radius
              el.attr("d", arc
                .outerRadius(function(d) {
                  return DONUT_R + y(d.data.y) * ratioOfTransitionTime;
                })(d));
            }
          })
          // kick off the start of the arc's animations a little after one another
          .delay(function(d, i) {
            return i * 25;
          })
          // relative delays are less than duration so neighbours will animate together
          .duration(105)
  }
}

