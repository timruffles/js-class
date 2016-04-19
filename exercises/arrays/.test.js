var help = require("../.sys/test-help");
var _ = require("lodash");

describe("arrays", function() {
    var self = this;

    help.importAndTest(__dirname, function(exported) {

     
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
