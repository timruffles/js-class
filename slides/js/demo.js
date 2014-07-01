var app = getApp();

function getApp() {
  "use strict";

  // prune out tagged slides if desired
  if(qString()["prune"]) {
    pruneOutByTag.apply(null, qString()["prune"].split(","));
  }

  var app = angular.module("slides",["ngModelClockDemo"]);

  var controllerProvider;
  var compileProvider;
  app.config(function($controllerProvider, $compileProvider) {
    controllerProvider = $controllerProvider;
    compileProvider = $compileProvider;
  });

  /**
   * code sample lives on a script element and takes template
   * code from there and turns in into a live code example
   */
  app.directive("codeSample",function($compile) {
    var tpl = "<div class=code-sample><div class='target'></div><pre><code>{{ code }}</code></pre><pre><code class=javascript ng-show='javascriptCode != null'>{{javascriptCode}}</code></pre></div>";

    var samples = 0;
    var $ = angular.element
    return {
      scope: {},
      restrict: "A",
      compile: function(el,attr) {
        var parsed = $("<div>" + el.html() + "</div>")
        var javascript = angular.element(parsed[0].querySelector('code')).remove()
        var code = parsed.html().replace(/&quot;/g,'"')
        code = formatLines(code)

        return function(scope, $element, attr) {
          scope.code = code

          var templateLink = $compile(tpl);
          var contentLink = $compile(parsed)
          var tplEl = templateLink(scope)
          var contentEl = contentLink(scope)

          // need to replace the script tag
          var parent = $element.parent()
          $element.replaceWith(tplEl);
          var p = parent[0]

          angular.element(p.querySelector('.target')).replaceWith(contentEl)

          // run JS code after DOM is available
          if(javascript.length > 0) {
            var javascriptCode = javascript.html()
            scope.javascriptCode = formatLines(javascriptCode)
            var name = "demo" + (samples++);
            var fn = new Function(javascriptCode);
            fn();
          } 

          waitForDom(function() {
            ;[].forEach.call(tplEl[0].querySelectorAll("code"), function(el) {
              hljs.highlightBlock(el);
            });
          });
        }
      }
    }
  });

  function waitForDom(fn) {
    setTimeout(fn); 
  }

  /*
   * code example turns awkward HTML into a code example
   */
  app.directive("codeExample",function($compile) {
    return function(scope,el) {
      var code = angular.element("<div class=code-example><pre><code></code></pre></div>")
      var src = formatLines(el[0].innerHTML)
      
      // TODO marked (or something else) seems to add a closing 'p' to end of code examples, not sure why/how
      src = src.replace(/^<\/p>\n|<\/p>$/, "");
      code[0].querySelector("code").innerText = src;
      el.replaceWith(code)
      hljs.highlightBlock( code[0] );
    }
  });

  return app;

  function formatLines(src) {
    var lines = src.split("\n")
    lines = lines.filter(function(l) {
      return !/^\s*$/.test(l)
    })
    var ws = lines.map(function(line) {
      return line.match(/^\s*/)[0].length
    })
    var min = Math.min.apply(null,ws)
    if(!min === 0) return lines
    return lines.map(function(line) {
      return line.slice(min)
    }).join("\n")
  }

  function qString() {
    return location.search.substr(1).replace(/\/$/,'').split("&").reduce(function(all,pair) {
      pair = pair.split("=");
      all[pair[0]] = pair[1];
      return all;
    }, {});
  }

  function pruneOutByTag() {
    [].slice.call(arguments).forEach(function(tag) {
      [].forEach.call(document.querySelectorAll("section[data-tags*=" + tag + "]"),function(el) {
        el.parentElement.removeChild(el);
      });
    });
  }

}
