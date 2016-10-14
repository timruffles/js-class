
// TODO implement the 'dig' function, that looks up
// deeply nested properties. it should be 'safe' - if
// we hit undefined/null we should stop
//
//
// const source = { a: { b:  { c: "hello" } } };
// dig(source, "a", "b", "c") // hello
// dig(source, "c") // undefined
//
//    dig({ a: { b: "hi" } }, "a", "b") // 'hi' -> equivalent to o.a.b
//    dig({ a: { b: "hi" } }, "a") // { b: "hi" }
//    dig({ a: { b: "hi" } }, "z", "z") // undefined o.z.z
//
// Try first with for of, then with a reduce
//
// @type dig = (object: Object, ...properties: Array<string>) => any
//
/* eslint no-unused-vars:0 */

export { digReduce as dig };

function dig(object, ...props) {
  for(const prop of props) {
    if(object != null) {
      object = object[prop];
    }
  }

  return object;
}

// array.reduce( ((valueSoFar, element) => newValueSoFar), startValue)

function digReduce(object, ...keys) {
  return keys.reduce((valueSoFar, key) => {
    return valueSoFar != null ? valueSoFar[key] : valueSoFar;
  }, object);
}

function dig(object, ...props) {

  return idig(object, props);
  
  function idig(object, [next, ...rest]) {
    if(object) {
      return idig(object[next], rest);
    } else {
      return object;
    }
  }
}
