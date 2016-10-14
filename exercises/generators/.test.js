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

  })

});
