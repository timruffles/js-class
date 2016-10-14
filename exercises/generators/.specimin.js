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
export function * objectEntries(o = {}) {
  const keys = Object.keys(o);

  for(const k of keys) {
    yield [k, o[k]];
  }
}


