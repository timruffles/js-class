//
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

