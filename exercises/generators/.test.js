var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");

describe("generators", function() {

    this.timeout(500);

    help.importAndTest(__dirname, function(exported) {


      describe("object entries generator", function() {

        it("iterates for correct duration", function() {
          let its = 0;


          for(const [k, v] of exported.objectEntries({a:1,b:2,c:3})) {
            its += 1;
          }

          assert.equal(its, 3);
        });

        it("iterates as [k,v] pairs", function() {
          const strings = [help.rstring(), help.rstring() + "b"];
          const [A,B] = strings;
          let first;

          for(const pair of exported.objectEntries({
            [A]: A + "-value",
            [B]: B + "-value",
          })) {
            first = pair;
            break;
          }

          assert.lengthOf(first, 2);
        });

        it("allows for iteration over object properties", function() {
          const strings = [help.rstring(), help.rstring() + "b"];
          const [A,B] = strings;

          let i = 0;
          for(const [k, v] of exported.objectEntries({
            [A]: A + "-value",
            [B]: B + "-value",
          })) {
            assert.equal(k, strings[i], "should have provided key");
            assert.equal(v, strings[i] + "-value", "should have provided value");
            i += 1;
          }

          assert.equal(i, 2);
        });

        it("is not affected by additional properties during iteration", function() {
          const strings = [help.rstring(), help.rstring() + "b"];
          const [A,B] = strings;

          let i = 0;
          let target = {a: 1, b:2, c:3};
          let add = 5;
          for(const [k, v] of exported.objectEntries(target)) {
            i += 1;
            if(add--) {
              target["added-" + add] = "added";
            }
          }

          assert.equal(i, 3);
        });


          
      })


      describe("events", function() {

        it("returns promise", function() {

          const prom = exported.events(new EventEmitter, function*() {
            yield "hi";
          });


          assert.property(prom, "then", "should be a promise");
          assert.isFunction(prom.then, "should be a promise");
        });

        it("passes yielded values to emitter", function(done) {

          const emitter = new EventEmitter;
          emitter.on = emitter.once = sinon.spy();

          const event = help.rstring();
          const prom = exported.events(emitter, function*() {
            yield event;
          });

          setTimeout(function() {
            assert.spyCalledOnce(emitter.on, "should have started listening for event");
            assert.equal(emitter.on.getCall(0).args[0], event, "should have listened for yielded event name");
            done();
          }, 25);

        });

        it("resolved promise with value provided to return", function() {

          const emitter = new EventEmitter;

          const event = help.rstring();
          const prom = exported.events(emitter, function*() {
            yield event;
            return event;
          });

          setTimeout(() => emitter.emit(event))

          return prom.then((r) => assert.equal(r, event));

        });



        
        it("returns the final value", function() {

          const { el, promise } = moveDistance();

          const dx = help.rint();
          const dy = help.rint();

          process.nextTick(function() {
            el.emit("mousedown", { clientX: 10, clientY: 15 });
            process.nextTick(function() {
              el.emit("mouseup", { clientX: 10 + dx, clientY: 15 + dy });
            })
          })

          
          return promise.then(function(distance) {
            assert.isObject(distance, "should have returned object");
            assert.property(distance, "dx");
            assert.property(distance, "dy");

            assert.equal(distance.dy, dy);
          })

        })

        function moveDistance() {
          const el = mockElement();

          const prom =  exported.events(el, function*() {
            const over = yield "mousedown";
            const out = yield "mouseup";

            return {
              dx: out.clientX - over.clientX, 
              dy: out.clientY - over.clientY, 
            };
          });

          return { el, promise: prom }
        }

          
        function mockElement() {
          return new EventEmitter;
        }
      })

      describe("async generators", function() {

        it("catches errors - should always resolve", function() {
          const e1 = Error(help.rstring());

          // shouldn't be rejected
          return exported.settleAll(e1)
        })

        it("returns resolved value for resolved promises", function() {
          const [s1,s2,s3] = [help.rstring(), help.rstring(), help.rstring()];

          const e1 = Error(s1);
          const rj1 = Promise.reject(e1);
          const r1 = Promise.resolve(s2);
          const r2 = Promise.resolve(s3);

          return exported.settleAll(r1, rj1, r2)
            .then(function([v1,_,v3]) {
              assert.equal(v1, s2, "first promise resolved with wrong value");
              assert.equal(v3, s3, "last promise resolved with wrong value");
            })
        })

        it("returns error for rejected promises", function() {
          const [s1,s2,s3] = [help.rstring(), help.rstring(), help.rstring()];
          const e1 = Error(s1);
          const rj1 = Promise.reject(e1);
          const r1 = Promise.resolve(s2);
          const r2 = Promise.resolve(s3);

          return exported.settleAll(r1, rj1, r2)
            .then(function([_, e, _2]) {
              assert.equal(e.name, e1.name, "unexpected value returned instead of rejection value");
            })
        })


      })

      describe("Custom iterators", function() {

        let s1,s2,s3,s4;

        beforeEach(function() {
          const strings = [s1,s2,s3,s4] = _.range(0, 4).map(help.rstring);
          this.stack = new exported.Stack;

          for(const s of strings) {
            this.stack.push(s);
          }
        })

        it("allows for iteration over stack values in last-in, first-out order", function() {
          const values = [];

          for(const v of this.stack) {
            values.push(v);
          }

          assert.sameMembers(values, [s4,s3,s2,s1], "incorrect values yielded");
          assert.deepEqual(values, [s4,s3,s2,s1], "incorrect order of iteration");
        })

        it("pops only as much as necessary", function() {
          let count = 2;
          for(const v of this.stack) {
            count -= 1;
            if(count === 0) {
              break;
            }
          }

          assert.equal(this.stack.size, 2, "wrong number of stack items removed: length should end up as 2");
        })
          
      })
    });


});
