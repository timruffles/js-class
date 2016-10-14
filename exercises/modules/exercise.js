
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

export {
  Hatter as default,
  hattersTreat as treat
};


/**
 * 2) learning to import with the March hare
 */

import { default as MarchHare, treat as MarchHareTreat } from './MarchHare';
export { MarchHare, MarchHareTreat };

/**
 * 3) learning to re-export with the Alice
 */
// TODO rexport the default export of ./Alice as Alice
// TODO rexport the treat name export of ./Alice as AliceTreat
