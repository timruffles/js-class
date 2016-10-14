
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
