/**
 * Exercise 1
 *
 * Export a generator function called 'objectEntries' that
 * iterates over the keys and values of an object
 *
 * It'll be used as follows:
 *
 *    const object = { a: 1, b: 2, c: 3};
 *
 *    for(const [k,v] of objectEntries(object)) {
 *      console.log(k, v);
 *    }
 *
 *
 */

// TODO export our 'objectEntries' generator function
// TODO make sure your design isn't affected by keys being added
//     during iteration - Object.keys()

// TODO yield up key value pairs as arrays - [k1, v1]..., [k2, v2]...
export function *objectEntries(object) {
  for(const key in object) {
    yield [key, object[key]];
  }

  //yield* Object.keys(object).map(k => [k, object[k]]);
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
 *       moveDistance.then(function({dx,dy}) {
 *         // should have values
 *       });
 *
 * You need to implement the `events` function to be used in this way. The
 * generator function you'll be passed will `yield` event strings as above.
 *
 *
 */
export function events(emitter, makeGen) {
  const g = makeGen();

  return new Promise(function (resolve, reject) {

    step();

    function step(event) {
      const yielded = g.next(event); // { done, value }

      if(yielded.done) {
        resolve(yielded.value);
      } else {
        emitter.once(yielded.value, (event) => {
          step(event);
        })
      }
    }

  });
}


/**
 * Exercise 3
 *
 * Write a function that takes a variable
 * number of promises and is resolved
 * with an array containing their values or
 * the errors they were rejected with.
 *
 * It'll be used as follows:
 *
 *
 *     exported.settleAll(promise1, promise2)
 *     .then(function([valueOrError1, valueOrError2]) {
 *
 *     });
 *
 *
 */

// TODO import 'co' module
// TODO Read up the documentation on `co.wrap()`.
// TODO export your helper method, accepting a variable number of promise arguments
// TODO rensure you wait for result of each promise
// TODO handle any rejected promises
// TODO return list of - rejection reasons or resolution values


/**
 * Exercise 4
 *
 * Enable this Stack class below to be used as
 * an iterator.
 *
 * Like a physical stack of books, the easiest way to
 * get items out is from the top - this is called last-in, first-out
 * order (LIFO). We want to enable the stack to be iterated
 * in LIFO order, removing each item we iterate over
 *
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

  // TODO find out how to tell the interpreter this
  //      object can be iterated (it's defining a method with a special name)
  // TODO consider how the interation needs to occur

}

