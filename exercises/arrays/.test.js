var help = require("../.sys/test-help");

let a,b,c;
let object;
let withNull;

describe("arrays", function() {
    help.importAndTest(__dirname, function(exported) {
        beforeEach(function () {
            [a, b, c] = [help.rstring(), help.rstring(), help.rstring()];
            object = {[a]: {[b]: {[c]: "got it"}}};
            withNull = {[a]: null};
        });

        it("can look up multiple properties deep in objects", function () {
            assert.equal(exported.dig(object, [a, b, c]), "got it");
        })

        it("returns default value if it can't dig further", function () {
            assert.equal(exported.dig(object, [a, 'z', 'z'], 'Backup'), 'Backup');
        })

        it("works with no properties provided", function () {
            const object = {a: 1};
            assert.equal(exported.dig(object, [], 'Backup'), object);
        })

        it("returns null if hits a null", function () {
            assert.equal(exported.dig({z: null}, ['z']), null);
        })
    })
})

