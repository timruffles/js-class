



## Scope is ONLY affected by functions

## Variables

```javascript
function sayHi(to,greeting,times) {
  var i = times;
  while(i--) {
    console.log("%s %s",greeting,to);
  }
}

var greeting;
var i = 100;

sayHi("bob", "hello", 50);
```

## `var` is not block scoped

```javascript
// all refer to same 'i', it will end up as 50 or 20
var i = 10;

if(x) {
  var i = 50;
} else {
  var i = 20;
}
```

## `undefined` vs undeclared

```javascript
// Uncaught ReferenceError: start is not defined
start();
```

```javascript
var start;
// TypeError: undefined is not a function
start();
```

## `undefined` is a value

- `undefined` is a value of a variable
- undeclared is a state of a variable in a scope

## `undefined`

- placeholder value for uninitialised variables
- or arguments not provided in a function

```javascript
function hi(x) {
  console.log('hi ' + x);
}

// 'hi undefined'
hi();
```

## Always declare with var

## Avoid creating global variables

```javascript
function A(arg) {
  x = arg;
}
function B(arg) {
  var x = arg;
}

// x; // would be 'ReferenceError: x is not defined'

A("hello");
console.log( x ); // hello
console.log( window.x ); // hello

// has not affected/created global
B("bye");
console.log( x ); // hello
```

## Hoisting

What happens?

```javascript
console.log(greeting);
var greeting = "hello";
```

## Hoisting, part II

What happens?

```javascript
sayHi();

function sayHi() {
  console.log("Hello");
}
```

## `var` hoisting

- hoisted to top of enclosing scope (function)
- has value of `undefined` until assigned a value

## Function declaration hoisting

- hoisted to top of enclosing scope (function)
- is initialised as function throughout scope

## Benefits: readability

```javascript
// reads high-level to low-level: important stuff first
function main() {
  interestingHighLevelTaskA();
  interestingHighLevelTaskB();
}

function interestingHighLevelTaskA() {
  boringFiddlyHelper();
}

function interestingHighLevelTaskB() {
  moreImplementationDetails();
}

function boringFiddlyHelper() {
}

function moreImplementationDetails() {
}
```

## Benefits: locality

```javascript
// keeps its helper functions in own scope: makes it clear
// that only 'interestingHighLevelTask' is using them
function interestingHighLevelTask() {

  boringFiddlyHelper();
  moreImplementationDetails();
  // ...


  function boringFiddlyHelper() {
  }
  function moreImplementationDetails() {
  }
}
```

## Plus de change...

Not everything varies - let your readers (if not the interpreter) know.

```javascript
var A_CONSTANT_VALUE = "something";
var CONSTANTS = {
  NORTH: "north", // don't use numbers please,
  SOUTH: "south", // trailing commas encouraged - less version-control noise
};
```

## Control-flow

## Familiar faces

```javascript
for(var i = 0; i < 100; i++) {
}
// remember, not all blocks req'd, and
// can use comma operator to do > 1 thing in each
for(; node; node = node.next) {
}

// length caching: (only for old interpreters)
for(var i=0, len=xs.length; i < len; i++) {
}

while(node = node.next) {
}

do {
} while (node = node.next);
```

## Comparators

## Yes `==` has issues
<h2>Comparison</h2>
<p>If you can't be bothered to remember, use <code>===</code>.</p>

<div class=little-console></div>

## NaN !== NaN for a reason

- NaN means "category error", it can't meaningfully be equal to anything
- this is why the `isNaN()` exists

## Functions

## Two ways of defining

```javascript
var fn = function() {};

function another() {};
```

## Function hoisting is great

```javascript

main(document.querySelector("#something"));

function main(el) {
  var val = otherThing(el);
}

function otherThing() {
  someHelper();

  function someHelper() {
  }
}
```

## First-class

First class: use wherever you can use other values

```javascript
function doTwice(fn) {
  fn() // fn has been passed in as an argument
  fn()
}

doTwice(function() {
  console.log("Hello!")
})

function doubleFn(fn) {
  return function() { // with FCFs we can return functions
    doTwice(fn)
  }
}

var doubleTalk = doubleFn(function() {
  console.log("I'm going to be saying this twice")
})

doubleTalk()
```

## FCF = higher order functions

- we can pass functions to functions to functions...

```javascript
function loop(fn) {
  fn()
  loop(fn)
}

loop(function() {
  console.log("We'll be here for some time")
})
```

## Importance of var

```javascript
var greeting;
var i = 100;

sayHi("javascript","hello",10);

console.log(i);

function sayHi(to,greeting,times) {
  i = times;
  while(i--) {
    console.log("%s %s",greeting,to);
  }
}
```

## Missing features: default/optional and kwargs

## Interlude: logical operators

Short-circuit, work on returning operands.

```javascript
var shorts = true || alert("won't see me");
var moreShorts = false && alert("or me");

someVar && doSomething(); // please don't use as control-flow

var oneOrTheOther = one || theOther; // only for assignments
(one || theOther).doSomething(); // or this (within reason)
```

## Optional implementation

```javascript
function takeOptional(name, greeting) {
  greeting = greeting || "hi";

  console.log(greeting + " " + name)
}

takeOptional("tom", "hello");
takeOptional("tom");
```

## kwargs implementation

```javascript
function takeKeywords(name,opts) {
  opts = opts || {};
  greeting = opts.greeting || "hi";
  console.log(greeting + " " + name)
}

takeKeywords("tom");
```

## Varargs

`arguments`: for each function call.

```javascript
function englishList() {
  var items = [].slice.call(arguments);
  if(items.length <= 2) {
    return items.join(" and ");
  } else {
    var commas = items.slice(0, items.length - 1);
    return commas.join(", ")
      + " and " + items[items.length - 1];
  }
}

```

## Many idioms...

## "Array likes"

- `arguments`, `NodeList`
- subscriptable (`[3] = "foo"` etc), have `.length`
- but don't have `Array.prototype` - e.g `slice`, `indexOf`
- `slice` them to fix - via `[].slice.call` or lib

## `.call`

JS's FP/OOP hybrid model to thank

```javascript
Function.prototype.call = function(thisValue,args...) {
  // runs the function (this), setting this = thisValue,
  // and args = args
}

// e.g

[].slice.call(["a","b","c","d"],2) // ["c","d"];
/* some fn */.call(/*this*/,/* arg, ... argN */);

```

## Data-structures

## Two types

## Ordered

- `Array`

## Array

```javascript
// use literals in nearly every case
var anArray = [];

// only one good use for this constructor
var knownLengthInPerformanceCriticalCode = 16;
var another = new Array(knownLengthInPerformanceCriticalCode);

var joined = anArray.concat([1,2,3]); // non-destructive
var tail = anArray.slice(1);          // non-destructive
anArray.splice(0,1);                  // destructive, can replace

// in-place (stability unspecified)
var ascending = tail.sort(function(a,b) {
  return a - b;
});
```

## One good use for `new Array`

Avoids resize when length is known.

```sh
> benchmark 'var i = 16, a = []; while(i--) a[i] = i'

One million iterations...

real	0m0.628s
user	0m0.610s
sys	0m0.025s

> benchmark 'var i = 16, a = new Array(16); while(i--) a[i] = i'

One million iterations...

real	0m0.388s
user	0m0.370s
sys	0m0.022s
```

## Yes - v8 is fast...

## Key-value

## Objects, abused as maps

Misses lots of the niceities of a real map.

```javascript
var myMap = {};

myMap["1"] = "hello";
console.log(myMap[1]);

delete myMap[1];

myMap[{}] = {};
console.log(myMap[{}]);
```

## Map

Coming in ES6, keys via object identity.

```javascript
var myMap = new Map;

var a = {};
myMap.set(a,"hi");
console.log(myMap.get(a));

console.log(myMap.length);
```

## Set

ES6: when we just care about membership.

```javascript
var set = new Set;

var a = {};
set.add(a);
console.log(set.has(a));
console.log(set.has({}));

console.log(set.length);
```

## Where can you use?

- IE 11/Chrome/FF only? Now!
- Node - now! (with --harmony)

## The JS object system

## OOP, hand-rolled

- or more

## Objects in JS

- Have string properties whose values can be any JS type.

```javascript
var turtle = {x: 10, y: 20};
```

## Methods

- We want to have a consistent set of methods, with shorthand access to object

```javascript
var move = function(dx,dy) {
  this.x += dx;
  this.y += dy;
};

var turtle = {x: 10, y: 20};
turtle.move = move;
turtle.move(10,10);
```

## How does this work?

- `someObject.property()` will set `this` to `someObject` while running function returned from `someObject.property`

```javascript
turtle.move(10,10);

// =
turtle.move.call(turtle,10,10);

function move(dx,dy) {
  this.x += dx;
  this.y += dy;
};
```

## Implications

- JS will only set the right value of `this` when immediately calling methods
- passing a method as an argument, storing it in a variable, etc, therefore requires more work


## e.g

```javascript
var obj = {
  count: 0,
  increment: function() {
    this.count += 1;
  },
};

// 1
obj.increment();

var inc = obj.increment;
inc();

obj.count === 1
// true
isNaN(window.count) && 'count' in window;

```



## Bind

```javascript
var obj = {
  count: 0,
  increment: function() {
    this.count += 1;
  },
};

// 1
obj.increment();

var inc = obj.increment.bind(obj);
inc();

obj.count === 2
// false
isNaN(window.count) && 'count' in window;

```

## `.bind`

```javascript
Function.prototype.bind = function(thisValue, args...) {
  // returns a new function that always runs with `this`
  // set to `thisValue`
}

// e.g
function myName() { return this.name };

var bob = { name: "bob" };
var getBobsName = myName.bind(bob);

// bob
getBobsName();

/* some fn */.bind(/*this*/,/* arg, ... argN */);
```

## We want constructors

```javascript
function createTurtle(x,y) {
  var turtle = {x: x, y: y, move: turtleMove};
  return turtle;
}

function turtleMove(dx,dy) {
  this.x += dx;
  this.y += dy;
}
```

## Standardise: constructor

```javascript
function Turtle(x,y) {
  this.x = x; // 'this' ready-allocated
  this.y = y;
  // no return required
}

```

## Will this work?

```javascript
var aSweetTurtle = Turtle();
```

## `new` is the power

```javascript
function Turtle(x,y) {
  this.x = x;
  this.y = y;
}

// clear that new is not a standard fn call
var aSweetTurtle = new Turtle;
```

## Sharing methods

```javascript
function Turtle(x,y) {
  this.x = x;
  this.y = y;
}

Turtle.prototype.move = function(dx,dy) {
  this.x += dx;
  this.y += dy;
};
```

## Prototype chains

- Objects are bags of properties
- `object.property` asks for value of `property`
- If `object` lacks property, we restart questioning at `object.prototype`
- Once we've run out of prototypes (`O.pt.pt`) we get `undefined`

## `new` operator

```javascript
function Turtle(x,y) {
  this.x = x;
  this.y = y;
}

Turtle.prototype.move = function(dx,dy) {
  this.x += dx;
  this.y += dy;
};

function newOperator(constructor) {
  var instance = Object.create(constructor.prototype);
  var returnVal = constructor.apply(instance,slice(arguments,1));
  return typeof returnVal == "object" ? returnVal : instance;
}
```

## `new`'s final trick

```javascript
function Turtle(x,y) {
  this.x = x;
  this.y = y;
  return { haha: "didn't expect this" };
}

var turtle = new Turtle;
console.log(turtle.haha);
```

## Useful

- Refactor constructor to factory
- Quite powerful voodoo

## Sneaky trick

```javascript
function User(id) {
  this.id = id;
}

User.prototype.toString = function() {
  return "User<" + this.id + ">";
}

var userScores = {};
var tim = new User("tim");
var sarah = new User("sarah");

userScores[tim] = 10;
userScores[sarah] = 20;

console.log(userScores[tim]) // 10
```
<h2>Property descriptors</h2>
<p>Add properties and control writes/modification</p>

<script type=console-setup>
  durations = {};

  Object.defineProperties(durations,{
    hour: {
      value: 3600 * 1000,
      writable: false
    }
  });
</script>
<div class=little-console></div>

<script type=cheat>
</script>

## Safe(er) monkey patch

```javascript
Object.defineProperty(Object.prototype,"awesomeify",{
  enumerable: false, // actually default
  value: function() {
    this.awesome = true;
  }
});

var anObject = [];
anObject.awesomeify();
anObject.awesome // true

var props = [];
for(var prop in anObject) props.push(prop);
console.log(props.length) // 0
```

## Preventing change

All shallow

```javascript
Object.preventExtension // can't add properties
Object.seal             // above, + can't configure properties
Object.freeze           // immutable

Object.is{Extensible,Sealed,Frozen} // check
```

## Strict mode

No `with`.

```javascript
var someVar = 10;
spmeVar = 20 // catches typos, rather than adding globals!

var constants = {};
Object.freeze(constants);
constants.foo = "bar"; // throws, rather than silently failing

var withDupes = {a: 1, a: 2};

eval("b = 'howdy'");
console.log(typeof b) // 'undefined'
```

## OOP in JS

## Use prototypes

```javascript
function ClassName() {
}

ClassName.prototype = {
};
ClassName.constructor = ClassName;
```

## Inheritance

There are edge-cases if you do lots of work in constructor - this is gist, but use a library.

```javascript
function ClassName(arg,subClassArg) {
  SuperClass.call(this,arg);
}

ClassName.prototype = new SuperClass;
ClassName.constructor = ClassName;
```

## Calling 'super'

Could add a `__super__` to prototype.

```javascript
ClassName.prototype.something = function(arg1,argN) {
  SuperClass.prototype.something.call(this,arg1,argN);
}
```

## Composition over inheritance

## Example

Inheritance is very tight coupling: many reasons to change.

```javascript
Widget > Table > PagedTable > EditablePagedTable
```

## Via composition

```javascript
function PagedTable(el,table) {
  var pagerWidget = new PagerWidget;
  el.appendChild(pagerWidget.el);
  el.appendChild(table.el);
}
```

## Duck typing
<h2>Duck-typing</h2>

<p>In classical OOP languages, you can `isA` check for supertypes/interfaces</p>

<script type=console-setup>
  TypeA = function() {}
  TypeB = function() {}
  TypeB.prototype = new TypeA;
</script>

<div class=little-console></div>

## Works ok

```javascript
var X = Backbone.Model.extend();
var x = new X;

console.log(x instanceof Backbone.Model);
```

## But... inflexible

- must have that constructor in prototype chain
- harder to reuse code
- much harder to test (passing mocks/stubs)

## Duck type!

```javascript
function withModel(model) {
  // determine objects 'type' via checking its API,
  // rather than how it got its API (prototype chain)
  if(typeof model.get === "function") {

  } else if(typeof model.get === "string") {

  }
}
```

## Quirks
```javascript
if(new Boolean(false)) {
  console.log("this is why we avoid new Boolean");
}

if(Boolean(1)) {
  console.log("Good way to coerce to boolean");
}

if(!!unknown) {
  console.log("Another - perhaps less explicit");
}

if(new String("hi") !== "hi") {
  console.log("ugh - just avoid object wrappers for 'primitives'");
}

if((3.14159).toFixed(5) === "3.14159") {
  console.log("there is no benefit to object wrappers: the 'primitives'" +
     " still have access to prototype methods");
}
```

## Fin!
