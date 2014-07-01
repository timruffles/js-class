var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");

describe("closures", function() {

    help.importAndTest(__dirname, function(exported) {

      it("es5 works", function() {
        testElements(exported.listenForClickEs5);
      });

      it("es6 works", function() {
        testElements(exported.listenForClickEs6);
      });

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
