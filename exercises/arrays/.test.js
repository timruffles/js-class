var help = require("../.sys/test-help");
var _ = require("lodash");

describe("arrays", function() {
    var self = this;

    help.importAndTest(__dirname, function(exported) {

      describe('englishList', function() {
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
      })

      describe('dig', function() {

        var a,b,c;
        var object;

        beforeEach(function() {
          [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
          object =  {[a]: {[b]: {[c]: "got it" } } };
        })

        it('can recurse through objects', function() {
          expectDigsTo("got it", a, b, c);
        })

        it('works with no properties', function() {
          expectDigsTo(object);
        })

        it("safely returns null-ish value when can't dig further", function() {
          expectDigsTo(undefined, "z", "z", "z");
        })

        function expectDigsTo(value, ...props) {
          assert.equal(exported.dig(object, ...props), value);
        }
            
          
      })




    });


});
