var help = require("../.sys/test-help");
var _ = require("lodash");

describe("functions-core", function() {

    help.importAndTest(__dirname, function(exported) {

      describe('greeting', function() {

        it('works with explicit paramters', function() {
          var s = help.rstring();
           assert.equal(exported.greeter(s, "hello"), "hello " + s); 
        })

        it('uses a default paramter if not provided', function() {
          var s = help.rstring();
           assert.equal(exported.greeter(s), "hi " + s); 
            
        })

          
      })

     
       describe('englishList', function() {
        var [s,t,u,v,w] = _.sampleSize(["pony","apple","snail","hedge-hog", "mushroom", "bear", "hippo", "pillow", "piano"], 5);

        it("works with no input", function() {
          match([], "");
        });

        it("works with 1 item", function() {
          match([s], s);
        })

        it("works with 2 items", function() {
          match([s,t], s + " and " + t);
        })

        it("works with 3 items", function() {
          match([s,t,u], s + ", " + t + " and " + u);
        });

        it("works with 5 items", function() {
          match([s,t,u,v,w], [s,t,u,v].join(", ") + " and " + w);
        });

        it("can accept no options", function() {
          exported.englishList([1,2,3], {})
        });

        it("works with oxford comma", function() {
          assert.equal(exported.englishList([s,t, v], {oxford: true}) , `${s}, ${t}, and ${v}`);
        });

        function match(input, expected) {
          assert.equal(exported.englishList(input, {}) , expected);
        }
      })


    });

});
