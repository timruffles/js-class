// return a 'spiedFunction', which wraps originalFn and:
//
// - calls originalFn with arguments that our spiedFunction is called with
// - calls 'logger' with the count of calls, and the arguments
//
// It'll be used like this
//
//     function add(a,b) { return a + b }
//     function logArg(args, count) { console.log(`on call ${count} I received ${args}`) }
//
//     const spiedAdd = spy(add, logArg);
//     const result = spiedAdd(2, 2); // will result in 'on call 1 I received 2,2' being logged
//
// This allows us to create a wrapped version of any function that can be used in its place. From
// the outside world it behaves exactly the same, but our 'spyingFunction' function will receive
// all arguments on each call, as well as the number of times the function has been called.
//
// @type function SpyingFunction(args: Array<any>, callCount: number): void
// @type function spy(originalFn: Function, spyingFunction: SpyingFunction): Function
export function spy(originalFn, spyingFunction) {


  return function workAsOriginalButSpiedOn() {
    // TODO call logger
    // TODO increase count
  };
}





