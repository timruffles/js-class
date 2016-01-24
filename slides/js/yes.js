/**
 * letters
 */
(function() {
"use strict";

window.yesDemo = yes;

function yes(el, slideEl, bbox) {

  var letterPoints = getLetterPoints();
  var points = makePoints(550, letterPoints);
  var stopForce = _.noop;

  cleanup();

  setTimeout(render, 125);

  var letters = pointCloud(bbox)

  d3.select(el).attr({
    width: bbox.width,
    height: bbox.height,
  });

  return cleanup;

  function render() {
    var sel = d3.select(el)
    stopForce = letters(sel, points, letterPoints);
  }

  function cleanup() {
    stopForce();
    d3.select(el).html("");
  }

  function getLetterPoints() {
    var padding = 150;
    var xScale = d3.scale.linear()
      .range([padding, bbox.width- padding])

    var yScale = d3.scale.linear()
      .range([padding, bbox.height - padding])
    return rawLetterPoints().map(function(d) {
      d.x = xScale(d.x);
      d.y = 0.5-d.y;
      d.y = yScale(d.y);
      return d;
    })
  }

  function makePoints(n, focis) {
    var points = new Array(n);
    var fociLastIndex = focis.length - 1;
    var startRadius = 900;
    var m = -1;
    var cx = bbox.width /2;
    var cy = bbox.height /2;

    while(++m < n) {
      var point = new Point;
      point.foci = focis[Math.round(Math.random() * fociLastIndex)]
      var angle = Math.random() * Math.PI * 2;
      point.x = point.px = cx + Math.cos(angle) * startRadius;
      point.y = point.py = cy + Math.sin(angle) * startRadius;
      points[m] = point;
    }
    return points;
  }
}

function pointCloud(bbox) {

  var w = bbox.width;
  var h = bbox.height;

  return self;

  function self(selection, points, foci) {
    //debug();
    var ended = false;

    var force = d3.layout.force()
    .nodes(points)
    .links([])
    .charge(-3.5)
    .gravity(0)
    .size([w, h])
    .on("tick", tick)
    .on("end", function() {
      ended = true;
      explode();
    })

    var explosions = [];

    var pointRoot = selection.append("g")
      //.style({visibility: "hidden"})

    var pointSelection = pointRoot
    .selectAll(".point")
    .data(points)

    pointSelection
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("cx", getX)
    .attr("cy", getY)
    .attr("fill", function() {
      return "hsl(" + (Math.random() * 90  + 270 )+ ", 80%, 50%)";
    });

    var nTicks = 0;
    var explodeSpeed = 250;
    force.start();

    return function cleanup() {
      force.stop();
    }

    function tick(e) {
      nTicks += 1;
      if(nTicks === 30) {
        pointSelection
        .style({visibility: "visible"})
      }

      // var k = 0.085 * e.alpha;
      var k = 0.085 * e.alpha;
      if(e.alpha < 0.05) {
        force.stop();
        return;
      }

      points.forEach(function(o, i) {
        o.y += (o.foci.y - o.y) * k;
        o.x += (o.foci.x - o.x) * k;
        if(ended) {
          randomNudge(o);
        }
      });

      explosions.forEach(function(explosion) {
       explosion.dt += k;
       if(explosion.dt > 0.1) {
         explosion.nodes = [];
       }
       explosion.nodes.forEach(function(d) {
         d.x += d.explodeCos * k * explodeSpeed;
         d.y += d.explodeSin * k * explodeSpeed;
       })
      })

      pointSelection.attr("cx", getX)
           .attr("cy", getY)

      // to stop things getting boring at end
      function randomNudge(d) {
        if(Math.random() > 0.5) {
          return;
        }
        var angle = Math.random() * Math.PI * 2;
        d.x += Math.cos(angle) * k * 20;
        d.y += Math.sin(angle) * k * 20;
      }

    }

    function explode() {
      _.times(_.random(1, 5, false)).forEach(function(el, i) {
        setTimeout(function() {
          addExplosion(); 
        }, i * (Math.random() * 300 + 50));
      });
    }

    function addExplosion() {
      var exploder = _.sample(points);
      var distance = 50;
      var distance2 = distance * distance;

      var close = _.filter(points, function(d) {
        var dx = exploder.x-d.x;
        var dy = exploder.y-d.y;
        var exploding = (dx * dx + dy * dy) < distance2
        if(exploding) {
          var angle = Math.atan2(dy, dx);
          d.explodeSin = Math.sin(angle)
          d.explodeCos = Math.cos(angle)
          return true;
        }
      })

      exploder.explodeAngle = Math.random() * Math.PI * 2;

      explosions.push({
        nodes: [exploder].concat(close),
        dt: 0,
      })

      force.alpha(0.1);
    }

    
    function getX(d) { return d.x; }
    function getY(d) { return d.y; }


    function debug() {
      var r = 20;

      selection
      .selectAll(".foci")
      .data(foci)
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr("cx", getX)
      .attr("cy", getY)

    }
  }


}


// unvarying object for faster accessors
function Point(x, y) {
  this.x = x; 
  this.y = y; 
  this.index = null;
  this.foci = null;
  this.px = null;
  this.py = null;
  this.fixed = null;
  this.weight = null;
  this.explodeSin = null;
  this.explodeCos = null;
}


function rawLetterPoints() {
  return [{"x":0,"y":0.4841289536745684},{"x":0.017799354000066617,"y":0.39707063459870734},{"x":0.06957930962019912,"y":0.31638244349081585},{"x":0.13915860085846565,"y":0.33761620338404785},{"x":0.19093855647859817,"y":0.4076875145453233},{"x":0.21844664066873176,"y":0.4926224576318612},{"x":0.1019417680963325,"y":0.23781762837224757},{"x":0.1019417680963325,"y":0.1613761892430025},{"x":0.10355989285833243,"y":0.08705812610308065},{"x":0.10355989285833243,"y":0.012740062963158794},{"x":0.28478968238299845,"y":0.284531900137358},{"x":0.3268608894311314,"y":0.32275266794517565},{"x":0.3867314688612635,"y":0.3333695478917917},{"x":0.4449838867655306,"y":0.32062929195585244},{"x":0.46116513438552986,"y":0.2441878528266074},{"x":0.4288026391455313,"y":0.18261004562262476},{"x":0.3770226835253988,"y":0.18261004562262476},{"x":0.32200647838126645,"y":0.18048666963330154},{"x":0.2653721852389993,"y":0.21446068546247277},{"x":0.2653721852389993,"y":0.13589587034390452},{"x":0.3090615170491322,"y":0.06794793517195226},{"x":0.3608414726692647,"y":0.01061687994661601},{"x":0.42071201533553165,"y":0.016987007914585617},{"x":0.47572818371579884,"y":0.06157790369037286},{"x":0.6812298079065986,"y":0.3546035007578041},{"x":0.6229773900023315,"y":0.3312463648752489},{"x":0.5938512178140632,"y":0.28028534113149206},{"x":0.6165048909543318,"y":0.20809065398089338},{"x":0.6779935583825988,"y":0.18898027007698456},{"x":0.7265372277148662,"y":0.18048676611969175},{"x":0.7605177741891344,"y":0.1231556144079653},{"x":0.7297734037111357,"y":0.06794793517195226},{"x":0.686084108664868,"y":0.012740255935939212},{"x":0.6310679402846009,"y":0.014863631925262414},{"x":0.5873786452383332,"y":0.05520777572240325},{"x":0.5873786452383332,"y":0.05520777572240325},{"x":0.7411003505728656,"y":0.3418632448218649},{"x":0.04368935019206546,"y":0.35247983530931026},{"x":0.008090642191932229,"y":0.42467452245990894},{"x":0.003236267905932445,"y":0.4586485382890802},{"x":0.09385118105019805,"y":0.29514878008397405},{"x":0.11165055343219725,"y":0.31001241200923646},{"x":0.1537217604803302,"y":0.35885005976367007},{"x":0.16990300810032946,"y":0.37371369168893254},{"x":0.20873796562446256,"y":0.45864863477547035},{"x":0.10194180486019769,"y":0.19959705353721036},{"x":0.10032368009819775,"y":0.14014262232255092},{"x":0.10032368009819775,"y":0.05733105522533625},{"x":0.10032368009819775,"y":0.05733105522533625},{"x":0.2750809338109989,"y":0.2505578843081868},{"x":0.2588996861909996,"y":0.16986969320029532},{"x":0.29126214466713296,"y":0.19535020507217374},{"x":0.2831715208571333,"y":0.10192175802834307},{"x":0.32362460314326635,"y":0.044590702803006824},{"x":0.32362460314326635,"y":0.044590702803006824},{"x":0.3867314688612635,"y":0},{"x":0.44822013628953045,"y":0.025480511871878424},{"x":0.4077670907672626,"y":0.17411673463811236},{"x":0.40938521552926255,"y":0.31213607745773025},{"x":0.31067971533886246,"y":0.3185062054256999},{"x":0.4466020850552609,"y":0.2208310064032228},{"x":0.362459670958995,"y":0.34186334130825513},{"x":0.6051781646757931,"y":0.3100127014684071},{"x":0.5987056656277934,"y":0.24631151827510123},{"x":0.6472493349600609,"y":0.18898046304976499},{"x":0.7119742519123275,"y":0.04034424028353105},{"x":0.7491911214383259,"y":0.14014281529533132},{"x":0.7087380759160581,"y":0.3397399653189319},{"x":0.6100325389617929,"y":0.04034424028353105}]
}

  
})();


