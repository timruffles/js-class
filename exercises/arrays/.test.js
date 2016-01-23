var help = require("../.sys/test-help");
var _ = require("lodash");

describe("", function() {

    help.importAndTest(__dirname, function(exported) {

      var [s,t,u,v,w] = _.sampleSize(["pony","apple","snail","hedge hog", "mushroom", "bear", "hippo", "pillow", "piano"], 5);

      it("works with no input", function() {
        match([], "");
      });

      it("works with 1 item", function() {
        match([s], s);
      })

      it("works with 2 items", function() {
        match([s,t], s + ", " + t);
      })

      it("works with 3 items", function() {
        match([s,t,u], s + ", " + t + " and " + u);
      });

      it("works with 5 items", function() {
        match([s,t,u,v,w], [s,t,u,v].join(", ") + " and " + w);
      });

      function match(input, expected) {
        assert.equal(exported.englishList(input) , expected);
      }



    });


});
