var help = require("../.sys/test-help");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");

describe("generator iterators", function() {

    help.importAndTest(__dirname, function(exported) {

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
