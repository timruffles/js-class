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

  const m = new Map;

  incoming((event) => {
    const count = (m.get(event) || 0) + 1;
    m.set(event, count);
    return count;
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

  const m = {};

  incoming((event, ip) => {
    const ips = m[event] = m[event] || [];
    if(ips.indexOf(ip) === -1) {
      ips.push(ip);
    }
    return [...ips];
  });
};


function getIpSets(incoming) {

  const m = new Map;

  incoming((event, ip) => {
    const ips = m.get(event) || new Set;
    m.set(event, ips);
    ips.add(ip);

    return [...ips];
  });
};

