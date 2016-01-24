function DonutChartCtrl(
  $scope
  , $element
) {
  var self = this;

  $scope.$watchCollection(function() {
    return self.data; 
  }, render);


  var root = d3.select($element[0])
    .append("svg")
    .attr({
      width: 50,
      height: 50,
    })
    .append("g")
    .attr("transform", "translate(25,25)")

  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) {
      return d.value; 
    })

  var arc = d3.svg.arc()
    .innerRadius(10)
    .outerRadius(25)

  var color = d3.scale.category20();

  function render() {
    var update = root 
      .selectAll("path")
      .data(pie(self.data || []))


    update.enter()
      .append("path")

    update
      .attr("d", arc)
      .attr("fill", function(d, i) {
        return color(i); 
      })
  }
  
}
