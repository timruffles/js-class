// the greeter function returns a simple message. 
//
// use default parameters to fulfil the contract. The default
// greeting should be 'hi'
//
// @type greeter = (person: string, greeting?: string) => string

/* TODO define parameters */
export function greeter(person, greeting = 'hi') {
  return `${greeting} ${person}`;
};


// return a function that will:
//
// TODO - call fn
// TODO - report to logger with the count of calls, and the arguments
//
// @type exports.spy = (fn: Function, logger: Function, count? : number) => Function
export function spy(fn, logger, count = 0) {
  return function(...args) {
    fn(...args);
    count += 1;
    logger(arguments, count);
  }
};


