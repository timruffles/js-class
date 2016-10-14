'use strict';
/* eslint no-unused-vars:0 */

// part 1: getting rid of temporary vars

let up = 'Up!';
let down = 'Down!';

// TODO make Alice drink a potion - switch up and down in one line!
// this is tricky - perhaps you could destructure an array some how?
//[up,down] = [down,up];
({ up: down, down: up } = { up, down });

export { up, down };

// part 2: arrays
//
const raceParticipants = ['Hare', 'Alice', 'Cheshire Cat'];

let winner;
let others;

[winner, ...others] = raceParticipants;

// someFunction(...others); // someFunction(others[0], others[1], ...)

export { winner as raceWinner, others as raceOthers };

// part 3: objects

const guest = { name: 'Hare', treat: 'chocolate eggs' };

let guestName;

({ name: guestName } = guest);


export { guestName };


