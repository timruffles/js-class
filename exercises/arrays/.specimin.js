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
const NOT_PROVIDED = {};

export function dig(object, properties, defaultValue = NOT_PROVIDED) {
  const found = properties.reduce(function(value, prop) {
    return value == null ? value : value[prop];
  }, object);

  if(found == null) {
    return defaultValue === NOT_PROVIDED
          ? found
          : defaultValue
  } else {
    return found;
  }
}
