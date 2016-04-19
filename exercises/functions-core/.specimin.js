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

export function englishList(args, { oxford = false } = {}) {
  const trailing = oxford ? "," : "";
  switch(args.length) {
    case 0: return "";
    case 1: return args[0];
    case 2: 
      const [a,b] = args;
      return `${a} and ${b}`;
    default:
      const [last, ...initial] = args.reverse();
      return initial.reverse().join(", ") + trailing + " and " + last;
  }
};


