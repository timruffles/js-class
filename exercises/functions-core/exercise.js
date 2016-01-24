// the greeter function returns a simple message. 
//
// use default parameters to fulfil the contract. The default
// greeting should be 'hi'
//
// @type greeter = (person: string, greeting?: string) => string

/* TODO define parameters */
exports.greeter = function(person, greeting = 'hi') {
  return greeting + " " + person;
};


// return a function that will:
//
// TODO - call fn
// TODO - report to logger with the count of calls, and the arguments
//
// @type exports.spy = (fn: Function, logger: Function) => Function
exports.spy = function(fn, logger) {
  var count = 0;

  return function() {
    fn.apply(null, arguments); 
    count += 1;
    logger(arguments, count);
  }
};


