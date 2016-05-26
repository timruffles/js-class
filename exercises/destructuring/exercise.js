'use strict';
/* eslint no-unused-vars:0 */

// part 1: getting rid of temporary vars

let up = 'Up!';
let down = 'Down!';

// TODO make Alice drink a potion - switch up and down in one line!
// this is tricky - perhaps you could destructure an array some how?
// ({ up: down, down: up } = { up, down });



// part 2: arrays
//
const raceParticipants = ['Hare', 'Alice', 'Cheshire Cat'];

let winner;
let others;

// TODO destruture the winner into winner, and the rest into others


export { winner as raceWinner, others as raceOthers };

// part 3: objects

const guest = { name: 'Hare', treat: 'chocolate eggs' };

let guestName;

// TODO destruture the name into guestName in one line



export { guestName };


