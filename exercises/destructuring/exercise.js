/* eslint no-unused-vars:0 */

// part 1: getting rid of temporary vars

let up = 'Up!';
let down = 'Down!';

[down, up] = [up, down];

export { up, down };

// part 2: arrays
//
const raceParticipants = ['Hare', 'Alice', 'Cheshire Cat'];

let winner;
let others;

[winner, ...others] = raceParticipants;

export { winner as raceWinner, others as raceOthers };

// part 3: objects

const guest = { name: 'Hare', treat: 'chocolate eggs' };

let guestName;

// TODO destruture the name into guestName in one line
({ name: guestName } = guest);


export { guestName };


