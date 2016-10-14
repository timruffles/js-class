

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

export const settleAll = co.wrap(function * (...promises) {

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

