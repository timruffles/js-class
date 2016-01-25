// TODO your job is to write a helpful method to create
// a gramatical english list
//
//
// It'll be used like this:
//
//   englishList(["one","two","three"]) // "one, two and three"
//
// @type englishList = (items: Array<string>) => string

exports.englishList = function(args) {
  // TODO
};

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

exports.dig = function(object, ...properties) {
  // TODO
};
