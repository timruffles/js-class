/**
 * demonstrating composing multiple components with d3
 */
(function() {
"use strict";

window.compositionDemo = compositionDemo;

function compositionDemo(el, slideEl, bbox) {

  var data = [
    {},
    {},
    {},
    {},
  ];


  setTimeout(render, 125);

  d3.select(el).attr(_.pick(bbox, "width", "height"))

  return cleanup;

  function render() { 
    var alternate = alternatingColours()
      .scale(
        d3.scale.ordinal()
        .domain([0,1,2])
        .range(["red","blue","green"])
      );

    xyPlot(el, data)
    .call(alternate)
  }

  function xyPlot(root, data) {
    var r = 40;

    var xScale = d3.scale.linear()
      .domain([0, data.length])
      .range([r, bbox.width - r])

    var update = d3.select(root).selectAll(".xy")
    .data(data)

    update
    .enter()
    .append("circle")
    .attr("r", r)
    .attr("cx", function(d, i) {
      return xScale(i);
    })
    .attr("cy", r)

    return update;
  }

  function alternatingColours() {

    self.scale = getterSetter(self, d3.scale.identity())

    return self;

    function self(selection) {
      var scale = self.scale();
      selection
      .each(function(d, i) {
        d3.select(this).attr("fill", function() {
          return scale(i);
        })
      })
    }
  }


  function getterSetter(self, dv) {
    var v = dv;
    return function(to) {
      if(arguments.length === 0) {
        return v;
      }
      v = to;
      return self;
    }
    
  }

  function cleanup() {
    d3.select(el).html("");
  }
}

  
})();
