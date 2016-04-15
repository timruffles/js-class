/**
 * Exercise 1
 * 
 * Create a helper that iterates over the keys and values of an object
 *
 * It'll be used as follows:
 *
 *    const object = { a: 1, b: 2, c: 3};
 *
 *    for(const [k,v] of exports.objectEntries(object)) {
 *      console.log(k, v);
 *    }
 *
 * TODO make sure your design isn't affected by keys being added
 *      during iteration
 * TODO yield up key value pairs as arrays
 */
export function *objectEntries(o = {}) {
  const keys = Object.keys(o);

  for(const k of keys) {
    yield [k, o[k]];
  }
}


/**
 * Exercise 2
 *
 * Create a helper that *accepts* generator functions to
 * make sequencing events much easier:
 *
 * It'll be used as follows:
 *
 *       const moveDistance = exported.events(someElement, function*() {
 *         const over = yield "mousedown";
 *         const out = yield "mouseup";

 *         return {
 *           dx: out.clientX - over.clientX, 
 *           dy: out.clientY - over.clientY, 
 *         };
 *       });
 *
 * You need to implement the `events` function to be used in this way. The
 * generator function you'll be passed will only even `yield` an event string.
 *
 *
 * TODO create the generator (remember generator function vs generator distinction)
 * TODO get an initial event string
 * TODO listen, and resume once the event fires
 * TODO when the generator is done, return the final value
 */
export function events(emitter, makeGen) {

  return new Promise(function(resolve, reject) {
    const gen = makeGen();

    loop();
    
    function loop(lastEvent) {
      const { done, value } = gen.next(lastEvent);

      if(done) {
        return resolve(value);
      }

      if(typeof value !== "string") {
        throw Error("must be an event string");
      }

      emitter.once(value, loop);
    }
  })

}


/**
 * Exercise 3
 *
 * Write a function that takes a variable
 * number of promises and is resolved
 * with an array containing their values or
 * the errors they were rejected with.
 *
 * Read up the documentation on `co.wrap()`.
 *
 * TODO rensure you wait for result of each promise
 * TODO handle any rejected promises
 * TODO return list of - rejection reasons or resolution values
 */

import co from "co";

export const settleAll = co.wrap(function*(...promises) {

  const results = [];

  for(const promise of promises) {
    try {
      results.push(yield promise);
    } catch(e) {
      results.push(e);
    }
  }

  return results;
  
});

/**
 * Exercise 4
 *
 * Enable this Stack class to be used as
 * an iterator.
 *
 * TODO find out how to tell the interpreter this
 *      object can be iterated
 *
 * TODO consider how the interation needs to occur
 *
 */


export class Stack {
  constructor() {
    this._values = [];
  }

  get size() {
    return this._values.length;
  }

  pop() {
    return this._values.pop();
  }

  push(v) {
    return this._values.push(v);
  }

  *[Symbol.iterator]() {
    while(this._values.length) {
      yield this.pop();
    }
  }
}

