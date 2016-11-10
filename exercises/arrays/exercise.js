
// TODO implement the 'dig' function, that looks up
// deeply nested properties. it should be 'safe' - if
// we hit undefined/null we should stop
//
//
//    dig({ a: { b: "hi" } }, "a", "b") // 'hi' // o.a.b
//    dig({ a: { b: "hi" } }, "a") // { b: "hi" }
//    dig({ a: { b: "hi" } }, "z", "z") // undefined o.z.z
//
// Try first with for of, then with a reduce
//
// @type dig = (object: Object, ...properties: Array<string>) => any
//
/* eslint no-unused-vars:0 */

export { digReduce as dig };

const object = {user: { account: { status: "valid" }}};
const v = digReduce(object, "user", "account", "status");
console.log(v);
const v = digReduce(object, "z", "z", "z");

function digReduce(object, ...props) {
  return props.reduce((current, prop) => 
    current != null && current[prop], 
  object);
}

function dig(object = {}, ...props) {
  for(const prop of props) {
    // iterative step - work per step
    const value = object[prop];
    if(value == null) {
      return undefined;
    }
    // sets up next value of 'current', or 'state'
    object = value;
  }
  return object;
}




const STOP = {};

function reduce(xs, fn, current) {
  for(const v of xs) {
    current = xs(current, v);
    if(current === STOP) return;
  }
  return current;
}











