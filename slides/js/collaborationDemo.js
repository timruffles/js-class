/**
 * demonstrating composing multiple components with d3
 */
(function() {
"use strict";

window.collaborationDemo = collaborationDemo;

function collaborationDemo(el, slideEl, bbox) {

  window.pathData = data;
  window.switchCollaborator = switchCollaborator;
  window.renderCollaborator = renderCollaborator;

  var bbox = el.getBoundingClientRect();
  var root = el.querySelector("svg");

  var data = [
    {id: 1}, {id: 2}, {id: 3}
  ];

  window.colData = data;

  var plotter = xyPlot();
  var bars = barChart();
  var activeViz = plotter;

  var collaborators = [plotter, bars];
  var handovers = [deCircle, null];

  d3.select(root).attr({
    width: bbox.width,
  })

  setTimeout(renderCollaborator, 125, data);
  setTimeout(switchCollaborator, 500);

  return cleanup;

  function renderCollaborator(newData) {
    data = newData;
    activeViz(root, data);
  }

  function switchCollaborator() {
    var activeIndex = collaborators.indexOf(activeViz);
    var handover = handovers[activeIndex] || function(fn) { fn() };
    
    handover(function() {
      activeViz = collaborators[(activeIndex + 1) % collaborators.length];
      renderCollaborator(data);
    })
  }

  function xyPlot() {

    return self;

    function self(root, data) {

      var r = 50;

      var update = d3.select(root)
      .selectAll("g")
      .data(data)

      var enter = update
      .enter()
      .append("g")
      .attr("transform", position)
      .append("rect")
      .attr("fill", "gold")

      update
      .transition()
      .attr("transform", position)
      .select("rect")
      .attr({
        rx: r,
        ry: r,
        width: r,
        height: r,
      })

      update.exit()
      .remove();

      return update;

      function position(d, i) {
        var x = 2*r + (i * (2*r + 20))
        var y = r + 20;
        return "translate(" + [x,y] + ")";
      }
        
    }
  }

  function deCircle(fn) {
    d3.select(root)
    .selectAll("rect")
    .attr({
      rx: 0,
      ry: 0,
    })

    fn();
  }

  function barChart() {

    return self;

    function self(root, data) {

      var padding = 25;

      // for quick demo
      var dataByIndex = _.times(50, function() {
        return { y: Math.random() } 
      })

      // padding - both sides, and fence posted inside
      var dx = (bbox.width - padding * (2 + data.length - 1)) / data.length;

      data = _.map(data, function(d, i) {
        return dataByIndex[i];
      })

      var xScale = d3.scale.linear()
      .domain([0, data.length - 1])
      .range([padding, bbox.width - dx - padding])

      var yScale = d3.scale.linear()
      .domain([1, 0])
      .range([padding, bbox.height - padding])

      var update = d3.select(root)
      .selectAll("g")
      .data(data)

      var enter = update
      .enter()
      .append("g")
      .attr("transform", position)
      .append("rect")
      .attr("fill", "gold")

      update
      .transition()
      .attr("transform", position)
      .select("rect")
      .attr("width", dx)
      .attr("height", function(d) {
        return yScale(1 - d.y); 
      })

      update.exit()
      .remove();

      return update;

      function position(d, i) {
        return "translate(" + [xScale(i), yScale(d.y)] + ")";
      }
        
    }
  }

  function cleanup() {
    d3.select(el).html("");
  }
}

  
})();


