
// TODO function passed to incoming will be called
// a number of times with different event strings
//
// return the number of times an event has been
// called on each event
//
exports.getCount = function(incoming) {

  const events = new Map;

  incoming(function(event) {
    events.set(event, 
      (events.get(event) || 0) + 1);
    
    return events.get(event);
  })
  
};

// TODO function passed to incoming will be called
// a number of times with different event/ip combinations
//
// return the unique set of IPs for each event on each event
//
exports.getIpSets = function(incoming) {

  const events = new Map;

  incoming(function(event, ip) {
    const s = events.get(event) || new Set;
    s.add(ip);
    events.set(event, s);
    
    return s;
  })
  
};


