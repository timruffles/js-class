// TODO function passed to incoming will be called
// a number of times with different event strings
//
// return the number of times an event has been
// called on each event
//
//
// try ES5 and ES6 implementations
//
exports.getCount = function(incoming) {

  incoming(function(event) {

    // TODO
    return 0;
  })
  
};

// TODO function passed to incoming will be called
// a number of times with different event/ip combinations
//
// return the unique set of IPs for each event on each event,
// as maps or arrays
//
// try ES5 and ES6 implementations
//
exports.getIpSets = function(incoming) {


  incoming(function(event, ip) {

    // TODO
    return [];
  })
};

