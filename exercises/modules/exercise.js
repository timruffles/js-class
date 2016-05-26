
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
export {
  Hatter as default,
  hattersTreat as treat
};



/**
 * 2) learning to import with the March Hare
 *
 * module is './MarchHare'
 */


import hareDefault from './MarchHare';
import * as wholeMarchHareModule from './MarchHare';
import { treat as MarchHareTreat } from './MarchHare';

// TODO import the March Hare's default, and its treat

// TODO rexport as MarchHare and MarchHareTreat
export { hareDefault as MarchHare, MarchHareTreat };



/**
 * 2) learning to import & export in one go with Alice
 *
 * module is './Alice'
 */

// TODO using the rexport syntax, import and rexport Alice (Alice module default) and AliceTreat

export { default as Alice, treat as AliceTreat } from './Alice';
