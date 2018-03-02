
module.exports = exports = [
    {
        setup: function() {
            const [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
            const object =  {[a]: {[b]: {[c]: "got it" } } };
        },
        'can recurse through objects': function () {
            assert.equal(solution.dig(object, a,b,c), "got it");
        },
        'works with no properties': function() {
            assert.equal(solution.dig(object), undefined);
        },
        "safely returns null-ish value when can't dig further": function() {
            assert.equal(solution.dig(object, 'z','z','z'), undefined);
        }
    },
]

