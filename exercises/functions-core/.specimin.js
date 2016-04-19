// the greeter function returns a simple message. 
//
// use default parameters to fulfil the contract. The default
// greeting should be 'hi'
//
// @type greeter = (person: string, greeting?: string) => string

/* TODO define parameters */
export function greeter(person, greeting = 'hi') {
  return `${greeting} ${person}`;
};



/**
 * define a sorting utility that takes the following
 * named options:
 *
 * - array - required
 * - reverse (default: false)
 * - inPlace (default: false)
 * - comparator (default: a - b)
 */

export function sort({ array = required("must supply array"), reverse = false, inPlace = false, comparator =(a,b) => a-b }) {
  // TODO use destructuring to extract all
  //      options, and set defaults
  // TODO use defaults to ensure comparator has a default
  // TODO write a 'required(name)' helper function to ensure
  //      the array is provided


  // you shouldn't need to edit code below this line
  if(!inPlace) {
    array = array.slice();
  }

  const orderFactor = reverse ? -1 : 1;
  array.sort((a, b) => {
    const result = comparator(a, b);
    return result * orderFactor;
  });

  return array;
}
