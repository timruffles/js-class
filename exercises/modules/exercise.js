
// We are helping the Mad Hatter organise his tea party.
//
// We need to gather our friends and the items they're bringing, via
// the magic of es6 modules!
//
// Each attendee's default export will be themselves. They'll
// bring along a treat too - that should be exported as 'treat'
//

/* eslint no-unused-vars:0 */

var Hatter = 'The Mad Hatter!!!';

var hattersTreat = 'darjeeling in a conch-shell';


/** only change code below here **/

/**
 * 1) learning to export with the Hatter
 */

// TODO export the Hatter as default!
// TODO export the hattersTreat as treat
export { Hatter as default, hattersTreat as treat };



/**
 * 2) learning to import with the March hare
 */

// TODO import the MarchHare's default, and its treat
import * as MarchHare from "./MarchHare";

var mDefault = MarchHare.default;
var mTreat = MarchHare.treat;
// TODO rexport as MarchHare and MarchHareTreat
export { mDefault as MarchHare, mTreat as MarchHareTreat };

/**
 * 3) learning to re-export with the Alice
 */
// TODO rexport the default export of ./Alice as Alice
// TODO rexport the treat name export of ./Alice as AliceTreat

export {
  default as Alice,
  treat as AliceTreat,
} from "./Alice";

foo = x == void 0;












