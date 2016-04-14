var help = require("../.sys/test-help");

describe("variables and scopes", function() {

    help.importAndTest(__dirname, function(exported) {
       
      for(let scenario in exported) {
        if(!/^scenario/.test(scenario)) {
          continue;
        }

        let answered = exported.ANSWERS[scenario];

        it(`${scenario} - correct answer`, function() {
          if(answered === "TODO") {
            throw new Error("unanswered");
            return;
          }

          try {
            var actual = exported[scenario]();
          } catch(e) {
            assert(answered == undefined, "should have been null");
            assert(answered == undefined, "incorrect");
          }
          assert.equal(answered, actual, "incorrect");
          assert(answered === actual, "incorrect");
        });
      }



    });


});
