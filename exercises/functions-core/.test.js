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

      describe('sort', function() {

        beforeEach(function() {
          this.items = [1,1,1,1,1].map(help.rint);

          // not supposed to be a nicely random short :)
          this.items.sort((a,b) => Math.random() - 0.5)

          this.sorted = this.items.slice().sort();
        });

        it('can work with defaults', function() {
          assert.deepEqual(exported.sort({ array: this.items }), this.sorted);
        })

        it('accepts named args', function() {
          const sorted = exported.sort({ array: this.items, inPlace: false })
          assert.notEqual(sorted, this.items, "didn't handle named arg");
        })

        it('accepts function as named arg', function() {
          const sorted = exported.sort({
            array: this.items,
            inPlace: false,
            comparator: (a,b) => b - a
          })
          assert.deepEqual(sorted, this.items.reverse(), "comparator wasn't accepted");
        })

          
      })


    });

});
