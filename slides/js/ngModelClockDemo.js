(function() {
"use strict";

angular.module("ngModelClockDemo", [])
.directive("clockInput", clock)
.controller("TimeCtrl", TimeCtrl)

// not ideal
window.TimeCtrl = TimeCtrl;

function clock() {
  return {
    // we require an instance of ng-model to work
    require: "ngModel",
    restrict: "E",
    templateUrl: "js/ngModelClockDemo.html",
    link: function(scope, el, attrs, ngModel) {

      // initialize the non-angular widget, and
      // pass in our model updating fn
      var clock = donutClock({
        onInput: view2model,
        el: el[0].querySelector("svg g"),
      });

      // when angular detects a change to the model,
      // we update our widget
      ngModel.$render = model2view;
        
      function model2view(time) {
        clock.set(ngModel.$viewValue);
      }

      function view2model(fromView) {
        ngModel.$setViewValue(fromView);
      }

    }
  }
}



function TimeCtrl($scope, $interpolate, $interval) {
  var MINUTE = 60 * 1000;
  var HOUR = 60 * MINUTE;
  var DAY = 24 * HOUR;
  var CIRCLE = Math.PI * 2;
  var COLOUR_TIME_OFFSET = Math.PI / 2;
  var self = this;

  self.item = { time: new Date(0) };
  var ticker;

  var h = 201;
  var s = 80;
  var hsl = $interpolate("hsl({{h}}, {{s}}%, {{l}}%)");

  self.timeToColour = function(time) {
    var ratio = Math.sin((time / DAY) * CIRCLE - COLOUR_TIME_OFFSET);
    var l = 20 + (70 * ratio);
    return hsl({h:h,s:s,l:l});
  };


  self.label = function() {
    return ticker ? "Stop" : "Start" 
  }

  self.toggle = function() {
    if(ticker) {
      $interval.cancel(ticker);
      ticker = null;
    } else {
      ticker = $interval(function() {
        self.item.time = new Date(+self.item.time + 5 * MINUTE);
      }, 16);
    }
  }
}

function donutClock(options) {

  var CIRCLE = Math.PI * 2;
  var DAY = 24 * 60 * 60 * 1000;

  options = _.defaults(options, {
    r: 150,
    ringWidth: 25,
  })

  assert(typeof options === "object", "pass object of options");
  options.change = options.change || Function.prototype;

  var pointerHandlerR = options.ringWidth / 2;

  var el = assert(options.el instanceof Element, "missing element") && options.el;
  el.innerHTML += template();

  var pointerHander = qs(el, "#hand-for-pointer");
  attr(pointerHander,"r", pointerHandlerR);

  var face = el.querySelector("#face");
  attr(face,"r", options.r)("cx",options.r)("cy",options.r);

  var removeMask = qs(el, "#remove-centre circle");
  attr(removeMask, "cx", options.r)("cy", options.r)("r", options.r - options.ringWidth);


  var r = +attr(face, "r");
  var handCircuitR = r - pointerHandlerR;

  pointerHander.addEventListener("mousedown", mousedown);

  return {
    set: function(v) {
      renderAngle(timeToAngle(v));
    }
  };

  function qs(el, css) {
    return el.querySelector(css);
  }

  function attr(el, k, v) {
    if(v == null)
      return el.getAttribute(k)
    else {
      el.setAttribute(k,v);
      return attr.bind(null, el);
    }
  }

  // event handlers
  function mousedown() {
    document.body.addEventListener("mousemove", update);
    document.body.addEventListener("mouseup", disable);
  }

  function disable() {
    document.body.removeEventListener("mousemove", update);
    document.body.removeEventListener("mouseup", disable);
  }

  // conversion
  function angleToTime(angle) {
    var ratio = angle / CIRCLE;
    ratio = ratio + 0.25;
    ratio = ratio < 0 ? 1 + ratio : ratio;
    return ratio * DAY;
  }

  function timeToAngle(time) {
    var ratio = timeOnly(time) / DAY;
    if(ratio >= 0.75) {
      ratio = -(1 - ratio);
    }
    ratio -= 0.25;
    ratio *= CIRCLE;
    return ratio;
  }

  function timeOnly(date) {
    var mid = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    return date - mid;
  }

  function update(event) {

    var rect = el.getBoundingClientRect();
    var diffX = event.clientX - (rect.left + rect.width / 2);
    var diffY = event.clientY - (rect.top + rect.height / 2);

    var angle = Math.atan2(diffY, diffX);

    options.onInput( new Date(angleToTime(angle)) );
    renderAngle(angle);
  }

  function renderAngle(angle) {
    var x = r + Math.cos(angle) * handCircuitR;
    var y = r + Math.sin(angle) * handCircuitR;

    pointerHander.setAttribute("cx", x);
    pointerHander.setAttribute("cy", y);
  }

  function assert(t, msg) {
    if(!t) throw new Error(msg);
    return t;
  }

  function template() {
    return [
      '<defs>',
      '  <mask id="remove-centre">',
      '    <rect width=100% height=100% fill=#fff />',
      '    <circle />',
      '  </mask>',
      '</defs>',
      '<circle mask="url(#remove-centre)" id=face />',
      '<circle id=hand-for-pointer />',
    ].join("");
  }
}


  
})()
