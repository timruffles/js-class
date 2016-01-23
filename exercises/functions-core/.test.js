var help = require("../.sys/test-help");

describe("englishList", function() {

    help.importAndTest(__dirname, function(exported) {

      it("works with no input", function() {
        match([], "");
      });

      it("works with 1 item", function() {
        var s = help.rstring(); 
        match([s], s);
      })

      it("works with 2 items", function() {
        var s = help.rstring(); 
        var t = help.rstring(); 
        match([s,t], s + ", " + t);
      })

      it("works with 3 items", function() {
        var s = help.rstring(); 
        var t = help.rstring(); 
        var u = help.rstring(); 
        match([s,t,u], s + ", " + t + " and " + u);
      });

      it("works with 5 items", function() {
        var s = help.rstring(); 
        var t = help.rstring(); 
        var u = help.rstring(); 
        var v = help.rstring(); 
        var w = help.rstring(); 
        match([s,t,u,v,w], [s,t,u,v].join(", ") + " and " + w);
      });

      function match(input, expected) {
        assert.equal(exported.englishList(...input) , expected);
      }

    });


});
