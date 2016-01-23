// TODO your job is to write a helpful method to create
// a gramatical english list
//
//
// It'll be used like this:
//
//   englishList("one","two","three") // one, two and three
//

exports.englishList = function(args) {
  switch(args.length) {
  case 0: return "";
  case 1: return args[0];
  case 2: return args.join(", ");
  default: return args.slice(0, args.length - 1).join(", ")  + " and " + args[args.length - 1];
  }
};

