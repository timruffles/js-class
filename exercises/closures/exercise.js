// return a 'spiedFunction', which wraps originalFn and:
//
// TODO - calls originalFn with arguments that our spiedFunction is called with
// TODO - calls 'logger' with the count of calls, and the arguments
//
// @type function loggerFunction(args: Array<any>, callCount: number): void
// @type function spy(originalFn: Function, logger: loggerFunction, count? : number): spiedFunction
export function spy(originalFn, logger, count = 0) {
};


// TODO fix the following code, using ES6
export function listenForClickEs6(elements, onClicked) {
  // What is wrong here? Work through how the interpreter will run the 'clickHandler'
  // function in response to click events
  //
  // How can we solve using ES6? Is there more than one way?
  for(var i = 0; i < elements.length; i++) {
    var element = elements[i];

    element.addEventListener("click", function clickHandler() {
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

