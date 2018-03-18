// the greeter function returns a simple message.
//
// use default parameters to fulfil the contract. The default
// greeting should be 'hi'
//
// type greeter = (person: string, greeting?: string) => string
// 
//     greeter("amy")          // => 'hi amy'
//     greeter("amy", "hola")  // => 'hola amy'
//
//
//     // make this throw an error - required argument missing
//     greeter();
//
//  

/* eslint no-undef:0 */

export function greeter(/* TODO define parameters */) {
  return `${greeting} ${person}`;
}


// TODO your job is to write a helpful method to create
// a gramatical english list
//
//
// It'll be used like this:
//
//   englishList(["one","two","three"], { oxford: false }) // "one, two and three"
//
// if oxford is true, put an additional comma before the and in lists of 3 + items
//
//   "one, two, and three"
//   "one, two and three"
//
// default oxford to false.
//
// @type englishList = (items: Array<string>, { oxford?: Boolean }) => string


// eslint no-unused-vars:0

export function englishList(/* params */) {
  // TODO use destructuring to pull out values
  // TODO use destructuring to define defaults
}
