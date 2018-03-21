var help = require("../.sys/test-help");
var assert = require("chai").assert;

describe("object sytem tests", function() {

    help.importAndTest(__dirname, function(exported) {


        describe("howFarUpTheChain", () => {

            const { howFarUpTheChain } = exported;

            it("return 0 when present on object", function() {
                assert.equal(howFarUpTheChain({a:1}, 'a'), 0);
            });

            it("return undefined when not present on object", function() {
                assert.equal(howFarUpTheChain({a:1}, 'z'), undefined);
            });

            it("return undefined when present on object", function() {
                const object = Object.create(
                    Object.create(
                        Object.create(
                            {a: 1}
                        )
                    )
                )
                assert.equal(howFarUpTheChain(object, 'a'), 3);
            });

        });

    });


});


