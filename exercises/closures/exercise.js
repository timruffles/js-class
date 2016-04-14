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


// TODO fix the following code, using ES6
export function listenForClickEs6(elements, onClicked) {
  // What is wrong here? How can we solve using ES6? Is there more than one way?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];

    element.addEventListener("click", function() {
      onClicked(element);
    });
  } 
}

// TODO fix the following code, using ES5 (no lets, consts etc)
export function listenForClickEs5(elements, onClicked) {

  // How can we solve using ES5?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.addEventListener("click", function() {
      onClicked(element);       
    });
  } 

}

