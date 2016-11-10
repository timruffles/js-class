// TODO function passed to incoming will be called
// a number of times with different event strings
//
// return the number of times an event has been
// called on each event
//
//
// try ES5 and ES6 implementations
//
export function getCount(incoming) {

  const eventToCount = {};

  incoming((event) => {

    const count = eventToCount[event] || 0;
    const newCount = count + 1;
    eventToCount[event] = newCount;

    return newCount;
  });

};

// TODO function passed to incoming will be called
// a number of times with different event/ip combinations
//
// return the unique set of IPs for each event on each event,
// as maps or arrays
//
// try ES5 and ES6 implementations
//
export function getIpSets(incoming) {

  const eventToIps = new Map();

  incoming((event, ip) => {

    const set = eventToIps.get(event) || new Set();
    set.add(ip);
    eventToIps.set(event, set);

    return set;
  });
};

