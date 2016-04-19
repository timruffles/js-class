/* TODO in the below scenarios, give the value
 * of A returned from the function. e.g if you think
 * scenarioOne returns "apple", then
 *
 *   ANSWERS.scenarioOne = "apple";
 *
 * Think it through each time. Come up with a
 * reasoned argument for 'A' being a certain
 * value in terms of:
 *
 * - order of execution
 * - function scope
 * - block scope
 *
 * Just guessing until it works won't help you learn it!
 *
 * if you think the scenario returns nothing, or will
 * throw an error, return nothing (null/undefined or no return)
 *
 * only modify code inside 'exports'
 */

// config for exercises
/* eslint no-unused-vars:0 no-unreachable:0 */

const ANSWERS = {};

function scenarioOne() {

  var robot = { name: 'Stone' };
  var {name: A } = robot;

  return A;
}

ANSWERS.scenarioOne = 'TODO';

function scenarioTwo() {

  var obj = { X: "ABC", Y: false};
  var {X: A, Y: B} = obj;

  return A;

}

ANSWERS.scenarioTwo = 'TODO';

function scenarioThree() {
  var [,,A] = func();

  function func() {
    return [1,2,3,4];
  }
}

ANSWERS.scenarioThree = 'TODO';

function scenarioFour() {
  let A = sum({x: 1, y:2});

  return A;

  function sum({x, y, w = 10, h = 20}) {
    return x + y + w + h;
  }

}

ANSWERS.scenarioFour = 'TODO';




// ignore this :)

export { ANSWERS };
[scenarioOne,
  scenarioTwo, scenarioThree, scenarioFour
].forEach(function (s) {
  exports[s.name] = s;
});
