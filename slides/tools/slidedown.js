"use strict";
`requires es6`;

const marked = require("marked");
const _ = require("lodash");
const uuid = require('node-uuid');
const md5 = require('MD5');
const sh = require("shelljs");
const path = require("path");

var QUESTION_FILE_RE = /\.md$/;

exports.toHtml = function(source) {
  return marked.Parser.parse(exports.parse(source), {});
}

exports.parse = function(source) {
  // annoying bug where list terminates at end of file
  var newlineEnsure = "\n\n";
  var components = marked.Lexer.lex(source + newlineEnsure);

  var GRAMMAR = {
    slideFile: function() {
      var slides = acceptMany("slide");

      if(slides === false) {
        throw new Error("Not a slide file");
      }

      return _.flatten(slides);
    },
    slide: function() {
      var heading = accept({ type: "heading", depth: 2 });
      if(!heading) {
        return;
      }
      take();

      // take metadata if there
      const metaNode = GRAMMAR.metaData();
      
      const metaData = _.defaults(metaNode || {}, {
        class: "",
        tags: {},
      })

      tag("title")
      tag("sub")
      tag("notitle")
      tag("bad")

      const body = [heading].concat(takeUntil({ type: "heading", depth: 2 }));
      body.links = components.links;

      let html;
      try {
        html = marked.Parser.parse(body);
      } catch(e) {
        throw new Error(`couldn't parse slide '${heading.text}': ` + JSON.stringify(body, null, 4) + "\n" + e.stack);
      }
      const tags = _.map(metaData.tags, (v, k) => `data-${k}='${v}'`);

      const slideHtml = `<section ${tags} class="${metaData.class}">${html}</section>`;

      return { type: 'html', pre: false, text: slideHtml + '\n\n' };

      function tag(t) {
        if(metaData[t]) {
          metaData.tags.state = t;
          metaData.class += " " + t;
        }
      }
    },
    metaData: function() {
      var node = accept({ type: "paragraph" });

      if(node) {
        try {
          var data = eval("(" + node.text + ")");
        } catch(e) {
          return false;
        }
        take();
        return data;
      }

    },
  };

  const transformed = GRAMMAR.slideFile();
  transformed.links = components.links;

  return transformed;

  // returns a node if matched, doesn't take
  function accept() {
    if(empty()) return;
    for(var i = 0; i < arguments.length; i++) {
      var result = match(arguments[i]);
      if(result) {
        return result;
      }
    }
    return false;
  }

  function acceptMany() {
    var result;
    var results = [];
    while(result = accept.apply(null, arguments)) {
      results.push(result);
    }
    return results.length > 0 ? results : false;
  }

  function peek() {
    return components[0];
  }

  function take() {
    return components.shift();
  }

  function acceptAndTake() {
    const result = accept.apply(null, arguments);
    if(result) {
      take();
    }
    return result;
  }

  function empty() {
    return components.length === 0;
  }

  function match(expected) {
    switch(typeof expected) {
    case "string":
      var item = GRAMMAR[expected];
      assert(item, "Unknown grammar item " + item);
      return item();
    case "object":
      return matchNode(peek(), expected);
    }
  }

  function matchNode(actual, expected) {
    for(var p in expected)
      if(expected[p] !== actual[p]) return false;
    return actual;
  }

  // accept that throws if not matching
  function demand() {
    var result = accept.apply(null, arguments);
    assert(result, "Cannot continue, required " + [].map.call(arguments, JSON.stringify) + " next was: " + JSON.stringify(peek()));
    return result;
  }

  // take many accepts only node matchers
  function takeMany() {
    var items = [];
    while(!empty() && accept.apply(null, arguments)) {
      items.push(take());
    }
    return items;
  }

  // take nodes until
  function takeUntil() {
    var items = [];
    while(!empty() && !accept.apply(null, arguments)) {
      items.push(take());
    }
    return items;
  }

  // accept + take, with throw
  function snatch(matcher) {
    demand(matcher);
    return take(matcher);
  }

}

function assert(t, msg) {
  if(!t) throw new Error(msg);
}

function debug(msg) {
  console.info(msg);
}
function db(m) { debug(m) }

