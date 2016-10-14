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
 * throw an error, assign that to the answer property (null/undefined)
 *
 * only modify the ANSWERS.scenario = 'TODO' lines
 */

// config for exercises
/* eslint no-unused-vars:0 no-unreachable:0 */

const ANSWERS = {};

function scenarioOne() {
  // hoisting zone: A: undefined
  var A = 'scenario';
  inner();

  return A;

  function inner() {
    // innerScope: {}
    A = 'inner';
  }
}

ANSWERS.scenarioOne = 'inner';

function scenarioTwo() {
  var A = 'out';

  return A;


}

ANSWERS.scenarioTwo = 'out';

function scenarioThree() {
  var A = 'outer';

  inner();

  return A;

  function inner() {
    function helper() {
      A = 'helper';
    }

    helper();

    return;

  }

}

ANSWERS.scenarioThree = 'helper';

function scenarioFour() {
  const A = 'outer';

  {
    let A = 'inner';
  }

  return A;

}

ANSWERS.scenarioFour = 'outer';

function scenarioFive() {
  let A = 'outer';

  if (true) {
    let A = 'inner';
    return A;
  }

  A = 'outer';
  return A;
}

ANSWERS.scenarioFive = 'inner';

function scenarioSix() {
  var A;
  loop();

  return A;

  function loop() {
    for (A = 0; A < 10; A++) {
      A;
    }
  }
}

ANSWERS.scenarioSix = 10;

function scenarioSeven() {

  let A;
  let B = 5;

  {
    for (B = 0; B < 10; B++) {
      inner();
      if (B > 5) {
        A = B;
        return A;
      }

      inner();
      A = B;
    }

    return A;
  }

  return A;

  function inner(A, B) {
    B = 100;
    A = 'inner';
  }
}

ANSWERS.scenarioSeven = 6;















// ignore this :)

export { ANSWERS };
[scenarioOne,
  scenarioTwo, scenarioThree, scenarioFour,
  scenarioFive, scenarioSix, scenarioSeven,
].forEach(function (s) {
  exports[s.name] = s;
});
