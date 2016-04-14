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

