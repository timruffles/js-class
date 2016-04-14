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


    });

});
