
// We are helping the Mad Hatter organise his tea party.
//
// We need to gather our friends and the items they're bringing, via
// the magic of es6 modules!
//
// Each attendee's default export will be themselves. They'll
// bring along a treat too - that should be exported as 'treat'
//

var Hatter = { name: "The Mad Hatter!!!" };

var hattersTreat = "darjeeling in a conch-shell";


/** only change code below here **/

/**
 * 1) learning to export with the Hatter
 */

// TODO export the Hatter as default!
module.exports = exports = Hatter;

// TODO export the hattersTreat as treat
exports.treat = hattersTreat;

/**
 * 2) learning to import with the March hare
 */

// TODO import the MarchHare's default, and its treat
var hare = require("./MarchHare");

// TODO rexport as MarchHare and MarchHareTreat
exports.MarchHare = hare;
exports.MarchHareTreat = hare.treat;


