var help = require("../.sys/test-help");

describe("destructures values", function() {

    help.importAndTest(__dirname, function(exported) {

      describe("banishing temp vars", function() {

        it("flipped", function() {
          assert.deepEqual([exported.up,exported.down], ["Down!", "Up!"]);
        })
          
      })

      describe("arrays", function() {

        it("exported head", function() {
          assert.equal(exported.winner, "Hare");
        })

        it("exported rest", function() {
          assert.deepEqual(exported.others, ["Alice", "Cheshire Cat"]);
        })
          
      })

      describe("objects", function() {

        it("exported guestName", function() {
          assert.equal(exported.guestName, "Hare");
        })

          
      })

    });


});
