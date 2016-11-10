// the greeter function returns a simple message.
//
// use default parameters to fulfil the contract. The default
// greeting should be 'hi'
//
// @type greeter = (person: string, greeting?: string) => string

/* eslint no-undef:0 */

export function greeter(person, greeting = 'hi') {
  return `${greeting} ${person}`;
};


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
//
// default oxford to false.
//
// @type englishList = (items: Array<string>, { oxford?: Boolean }) => string


// eslint no-unused-vars:0

export function englishList(
  words = [],
  { oxford = false } = {}
) {
  const [first, second] = words;
  const [tail, ...backwardsWords] = words.reverse();
  const suffix = oxford ? "," : "";

  switch(words.length) {
    case 0: return "";
    case 1: return first;
    case 2: return `${first} and ${second}`;
    default:
      const start = backwardsWords.reverse().join(", ");
      return `${start}${suffix} and ${tail}`;
  }
};















