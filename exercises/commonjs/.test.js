var help = require("../.sys/test-help");
const hareDefault = Symbol.for("MarchHare");
const hareTreat = Symbol.for("MarchHare's treat");

describe("organising the tea party", function() {

    help.importAndTest(__dirname, function(exported) {

      describe("making sure the host arrives", function() {
        it("exercise: exports the correct default value", function() {
          assert.equal(exported.name, "The Mad Hatter!!!", "you haven't exported the 'Hatter' variable  as default- the Mad Hatter is missing his own party"); 
        });

        it("exports A", function() {
          assert.equal(exported.treat, "darjeeling in a conch-shell", "you havne't exported the Mad Hatter's treat: the Mad Hatter always brings darjeeling in an conch-shell!"); 
        });
      })

      describe("invite our old friend the March Hare", function() {
        it("imports MarchHare's default, and re-exports as MarchHare", function() {
          assert.equal(exported.MarchHare.name, hareDefault, "wrong guest: not the MarchHare!"); 
        });

        it("imports MarchHare's treat, and re-exports as MarchHareTreat", function() {
          assert.equal(exported.MarchHareTreat, hareTreat, "MarchHare should have brought some delicious sponge cake"); 
        });
      })


    });


});
