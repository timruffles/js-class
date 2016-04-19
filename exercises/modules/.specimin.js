
// We are helping the Mad Hatter organise his tea party.
//
// We need to gather our friends and the items they're bringing, via
// the magic of es6 modules!
//
// Each attendee's default export will be themselves. They'll
// bring along a treat too - that should be exported as 'treat'
//

var me = "The Mad Hatter!!!";

var hattersTreat = "darjeeling in a conch-shell";


/** only change code below here **/

/**
 * 1) learning to export with the Hatter
 */

// TODO export the Hatter as default!
export default me;

// TODO export the hattersTreat as treat
export { hattersTreat as treat };


/**
 * 2) learning to import with the March hare
 */


// TODO import the MarchHare's default, and its treat
import MarchHare, { treat as MarchHareTreat } from "./MarchHare";

// TODO rexport as MarchHare and MarchHareTreat
export { MarchHare, MarchHareTreat };



/**
 * 2) learning to import & export in one go with Alice
 */

// TODO import Alice, and using the rexport syntax, rexport Alice and AliceTreat
export { default as Alice, treat as AliceTreat } from "./Alice";

