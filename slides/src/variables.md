## Variables
{title:1}

## Two ages

- Pre-ES.next: `var`
- Post: `let`, `const`

## `var`

```javascript
var someVariable;
var anotherVariable = "hello";
```

## `undefined` vs undeclared

```javascript
var notDefined;

console.log(notDefined); // ?
```

## Undeclared

```javascript
var someVar;

console.log(smeVar); // typo, what happens??
```

## `const`
{es6:1}

```javascript
const doesNotChange = "hi";

// throws TypeError
doesNotChange = "I'll try my luck";
```

## Rule: use `const` if possible
{rule:1}

- one less source of bugs
- variables stand out

## `let`
{es6:1}

```javascript
let hiThere = "hello";

if(true) {
  let hiThere = "GOODBYE";
}

console.log(hiThere) // which?
```

## Block scope
{es6:1}

```javascript
for(let i = 0; i++; i < 10) {
  console.log(i);
}

// reference error
console.log(i);
```

## Diagram of block scope
{notitle:1}

<img src="media/block-scopes.png">

## Rule: use `let` in loops etc 
{rule:1}

- one less source of bugs
- clearer where variables belong

## What about `var`?

## `var` = function scoped

## Function scope

## Diagram of function scope
{notitle:1}

<img src="media/function-scopes.png">

## One weird quirk


```javascript
function main() {
  // what happens here?
  console.log(i);

  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
```

## Hoisting

```javascript
function main() {
  ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
  # this is the 'hoisting zone', where 
  # all var statements are hoisted before invocation
  SCOPE := { i: undefined }

  # NOTE: JUST for intuition - lightning bolt sections
  # are to give intuition for interpreter actions
  ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

  console.log(i);

  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
```

## Global scope

```javascript
// browser - sloppy mode
something = "I am global";


// browser - strict mode
window.something = "I am global";

// node
global.something = "I am global";
```

## Acessing global object

```javascript
this; // sloppy, outside functions

window; // browser
global; // node
```

## Exercise!
{exercise:1}

    exercises/variables


## Primitives
{title: 1}

## String
```javascript
var name = 'Tim';
var opinion = "Double quotes: they're worth it";

var complete = \`${name}: ${opinion}\`;
```

## Template strings

```javascript
var complete = `${name}: ${opinion}`;

var es5Html = "<h1>Ugh</h1>" +
  "<p>This is horrid</p>";

var html = \`
  <h1>Writing HTML with ES.Next</h1>
  <p>Much nicer</p>
\`;
```

## `Number`

```javascript
var floaty = 1;

var floatsAreApproximate = 0.1 + 0.2; // ?
```

## Boolean

```javascript
var t = true;
```

## Quiz: truthy vs falsy

```javascript
var empty = Boolean(""); // true

Boolean("hello"); // ?

Boolean(0); // ?
Boolean(1); // ?
Boolean(7); // ?

Boolean(true); // ?
```


## Quiz

```javascript
var booly = new Boolean(false);

Boolean(booly);
```

## Rule: never wrap primitives
{rule:1}

```javascript
// ARRRRRGGGHHHH!!!!!
var x = new String("");
var 1 = new Number("");
```

## Rule: use `Boolean`
{rule:1}

```javascript
var x = "";
var coerced = Boolean(x);

// NOOOOOOOOOO - never wrap primitives
var evil = new Boolean(false);
```

## `undefined` and `null`

```javascript
var x; // ?

var y = null;
```

## `null` & `undefined`

A nuisance since 1995.

## Comparison

## Yes `==` has issues

## Rule: always use `===`
{rule:1}

## But *ONE* time to use `==`

## Detecting `null` or `undefined`

```
var undefinedNotEqeqeqNull = undefined === null; // false

// what a chore!
if(x === null || x === undefined) {
}

var nullish = x == null;
```

## Rule: use `== null`
{rule:1}

```javascript
var nullish = x == null;
```

## `===`

1. Same type?
1. Same value?

1. Special cases: `NaN !== NaN`
1. Objects (non primitives): compares by identity, not value



