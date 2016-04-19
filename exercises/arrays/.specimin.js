// TODO implement the 'dig' function, that looks up
// deeply nested properties. it should be 'safe' - if
// we hit undefined/null we should stop
//
//
//    dig({ a: { b: "hi } }, "a", "b") // 'hi'
//    dig({ a: { b: "hi } }, "a") // { b: "hi" }
//    dig({ a: { b: "hi } }, "z", "z") // undefined
//
// @type dig = (object: Object, ...properties: Array<string>) => any

export function dig(object, ...properties) {
  return properties.reduce(function(value, prop) {
    return value == null ? value : value[prop];
  }, object);
}
