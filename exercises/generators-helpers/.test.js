var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");

describe("generators", function() {

    this.timeout(500);
    help.importAndTest(__dirname, function(exported) {
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
              assert.spyCalledOnce(emitter.on);
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




  });
});

