var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");

describe("closures", function() {

    help.importAndTest(__dirname, function(exported) {

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

      describe("listening for clicks", function() {
          
        it("es5 works", function() {
          testElements(exported.listenForClickEs5);
        });

        it("es6 works", function() {
          testElements(exported.listenForClickEs6);
        });
      })


      function testElements(fn) {
        const els = _.range(1, 100).map((n) => createEl(`Element ${n} <${help.rstring()}>`))

        const clickSpy = sinon.spy();

        fn(els, clickSpy);
        const el = _.sample(els);
        el.emit("click");

        assert.spyCalledWith(clickSpy, el);
        assert.spyCalledOnce(clickSpy, el);
      }

      function createEl(content) {
        var el = new EventEmitter; 
        el.addEventListener = el.addListener;
        el.innerHTML = content;
        return el;
      }


    });


});
