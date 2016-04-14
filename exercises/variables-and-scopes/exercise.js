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
const ANSWERS = {};

function scenarioOne() {

  var A = "scenario";
  inner();

  return A;

  function inner() {
    A = "inner";
  }
}

ANSWERS.scenarioOne = "TODO";




function scenarioTwo() {

  var A = "out";
  inner();

  return A;

  function inner() {
    var A = "inner";
  }

}

ANSWERS.scenarioTwo = "TODO";




function scenarioThree() {
  var A = "outer";

  inner();

  return A;

  function inner() {
    helper();

    return;

    function helper() {
      A = "helper";
    }

    A = "inner";
  }

}

ANSWERS.scenarioThree = "TODO";



function scenarioFour() {
  const A = "outer";

  {
    let A = "inner";
  }

  return A;


}

ANSWERS.scenarioFour = "TODO";



function scenarioFive() {
  let A = "outer"

  {
    let A = "inner";
    return A;
  }

  A = "outer";
  return A;
}

ANSWERS.scenarioFive = "TODO";




function scenarioSix() {
  var A;
  loop();

  return A;

  function loop() {
    for(A = 0; A < 10; A++) {
    }
  }
}

ANSWERS.scenarioSix = "TODO";



function scenarioSeven() {

  let A;
  let B = 5;

  {
    for(B = 0; B < 10; B++) {
      inner();
      if(B > 5) {
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
    A = "inner";
  }
}

ANSWERS.scenarioSeven = "TODO";















// ignore this :)

export { ANSWERS };
[scenarioOne, scenarioTwo, scenarioThree, scenarioFour, scenarioFive, scenarioSix, scenarioSeven].forEach(function(s) {
  exports[s.name] = s;
});
