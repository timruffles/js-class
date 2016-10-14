
// We are helping the Mad Hatter organise his tea party.
//
// We need to gather our friends and the items they're bringing, via
// the magic of CommonJS modules!
//
// Each attendee's default export will be themselves. They'll
// bring along a treat too - that should be exported as 'treat'
//

/* eslint no-unused-vars:0 */

var Hatter = { name: 'The Mad Hatter!!!' };

var hattersTreat = 'darjeeling in a conch-shell';


/** only change code below here **/

/**
 * 1) learning to export with the Hatter
 */

module.exports = exports = Hatter;
exports.treat = hattersTreat;

/**
 * 2) learning to import with the March hare
 */

console.log(prefix(require('./MarchHare'), 'MarchHare'));

function prefix(o, p) {
  return Object.keys(o).reduce((h, k) => {
    const [f] = k;
    h[p + f.toUpperCase() + k.slice(1)] = o[k];
    return h;
  }, {});
}
