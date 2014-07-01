/**
 * quick visual demo of d3's grouping, using d3
 */
(function() {
"use strict";

var elements = [1,2];
var data = [1,2,3,4];
var rawEl;

main(document.querySelector(".contexts-explained"));

return;

function I(x) { return "x" }

function main(element) {
  rawEl = element;
  draw();
}

function draw() {

  var el = d3.select(rawEl);

  var d = el.select(".data")
    .selectAll(".data")
    .data(data);

  d.enter()
    .append("span")
    .classed("data",true)
    .text("{}");

  d.exit()
   .remove();

  var e = el.select(".elements")
    .selectAll(".el")
    .data(elements);

  e.enter()
    .append("span")
    .classed("el",true)
    .html("&lt;el&gt;")

  e.exit()
   .remove();
  
  el.selectAll(".contexts .track").html("");

  addEls(".update");
  addEls(".enter");
  addEls(".exit");

  var u = el.select(".update")
    .selectAll(".item")
    .data(data)
    .classed("hidden",false);
  
 var e = el.select(".enter")
    .selectAll(".item")
    .data(data)
    .enter()
    .append("span")
    .classed("item",true)
 
 var e = el.select(".exit")
    .selectAll(".item")
    .data(data)
    .exit()
    .classed("hidden",false);

 buttons(rawEl.querySelector(".situation"));
}

function buttons(el) {
  var btns = {
    El: {
      add: addElement,
      del: removeElement,
    },
    Data: {
      add: addData,
      del: removeData,
    }
  };
  Object.keys(btns).forEach(function(groupName) {
    var group = btns[groupName];
    Object.keys(group).forEach(function(methodName) {
      el.querySelector("." + methodName + groupName).addEventListener("click",group[methodName]);
    });
  });
}

function addEls(sel) {
  d3.select(sel)
    .selectAll(".item")
    .data(elements)
    .enter()
    .append("span")
    .attr("class","item hidden");
}

function addElement() {
  elements.push(1);
  draw();
}

function addData() {
  data.push(1);
  draw();
}

function removeElement() {
  elements.shift();
  draw();
}

function removeData() {
  data.shift();
  draw();
}

})();
