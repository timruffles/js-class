
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

export { dig };

function dig(/* TODO define params */) {
  // TODO implement with for ... of etc
}

function digReduce(/* TODO define params */) {
  // TODO implement with a reduce
}
