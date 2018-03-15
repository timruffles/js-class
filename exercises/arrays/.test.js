
module.exports = exports = [
    {
        setup: function() {
            const [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
            const object =  {[a]: {[b]: {[c]: "got it" } } };
            const withNull =  {[a]: null };
        },
        'can look up multiple properties deep in objects': function () {
            assert.equal(solution.dig(object, [a,b,c]), "got it");
        },
        "returns default value when can't dig further": function() {
        },
        'works with no properties provided': function() {
        },
        'returns null if hits a null': function() {
            assert.equal(solution.dig(withNull, ['z']), null);
        },
    },
]

