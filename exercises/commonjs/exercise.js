
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

// TODO export the Hatter as default! remember to use CommonJS syntax
// (require(), module.exports, exports) not ECMAScript modules!
module.exports = exports = Hatter;
Hatter.treat = hattersTreat;


/**
 * 2) learning to import with the March hare
 */

// TODO import the MarchHare's default, and its treat

// TODO rexport as MarchHare and MarchHareTreat

var MarchHare = require("./MarchHare");
exports.MarchHare = MarchHare;
exports.MarchHareTreat = MarchHare.treat;


