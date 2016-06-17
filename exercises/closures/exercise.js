// return a 'spiedFunction', which wraps originalFn and:
//
// TODO - calls originalFn with arguments that our spiedFunction is called with
// TODO - calls 'logger' with the count of calls, and the arguments
//
// @type function loggerFunction(args: Array<any>, callCount: number): void
// @type function spy(originalFn: Function, logger: loggerFunction): spiedFunction
export function spy(originalFn, logger) {
  let count = 0;


  return function workAsOriginalButSpiedOn() {
    // TODO call logger
    // TODO increase count
  }
}





