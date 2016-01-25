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

      describe('spy', function() {

        const self = this;

        beforeEach(function() {
          self.fnSpy = sinon.spy();   
          self.logSpy = sinon.spy();
        });

        it('returns a new function', function() {
          const userSpied = exported.spy(self.fnSpy, self.logSpy);
          
          assert.isFunction(userSpied);
          assert.notEqual(userSpied, self.fnSpy);
        })

        it('calls `fn` whenever the created function is called', function() {
          const userSpied = exported.spy(self.fnSpy, self.logSpy);
          
          assert.spyNotCalled(self.fnSpy);
          userSpied();
          assert.spyCalledOnce(self.fnSpy);
        })

        it('passes on the arguments to `fn`', function() {
          const userSpied = exported.spy(self.fnSpy, self.logSpy);
          
          const args = [help.rint(), help.rint()];
          userSpied.apply(null, args);
          assert.spyCalledWith(self.fnSpy, ...args);
        })

        it('reports the number of times called to logger', function() {
          const userSpied = exported.spy(self.fnSpy, self.logSpy);
          
          assert.spyNotCalled(self.logSpy);
          userSpied();
          assert.spyCalledOnce(self.logSpy);
          assert.spyCalledWithMatch(self.logSpy, {}, 1);
          assert.spyNeverCalledWithMatch(self.logSpy, {}, 2);
          userSpied();
          assert.spyCalledWithMatch(self.logSpy, {}, 2);
        })

        it('passes on the arguments to `logger`', function() {
          const userSpied = exported.spy(self.fnSpy, self.logSpy);
          
          const args = [help.rint(), help.rint()];
          userSpied.apply(null, args);
          assert.spyCalledWithMatch(self.logSpy, {0:args[0], 1: args[1]}, 1);
            
        })
          
      })


    });


});
