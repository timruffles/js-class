/**
 * demonstrating d3's contexts
 */
(function() {
"use strict";

window.contextsDemo = contextsDemo;

function contextsDemo(el, slideEl, bbox) {

  window.renderCircles = render;

  var data = [
    {id: 1}, {id: 2}, {id: 3}
  ];

  window.circleData = data;


  d3.select(el).attr({
    width: bbox.width,
  })

  return cleanup;

  function render(newData) { 
    data = newData;
    xyPlot(el, data)
  }

  function xyPlot(root, data) {
    var r = 100;

    var update = d3.select(root)
    .selectAll("g")
    .data(data)

    update
    .select("circle")
    .attr("fill", "darkorange")

    update.select("text")
    .text("update")

    var enter = update
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      var x = 2*r + (i * (2*r + 10))
      var y = r;
      return "translate(" + [x,y] + ")";
    })

    enter
    .append("circle")
    .attr("r", r)
    .attr("fill", "gold")

    enter.append("text")
    .text("enter")
    .style({
      "text-anchor": "middle",
    })

    var exit = update.exit()

    exit
    .select("text")
    .text("exit")

    exit
      .transition()
      .select("circle")
      .attr("fill", "crimson")
      .each("end", function() {
        var el = this;
        setTimeout(function() {
          d3.select(el.parentElement).remove(); 
        }, 500);
      })

    return update;
  }

  function cleanup() {
    d3.select(el).html("");
  }
}

  
})();

