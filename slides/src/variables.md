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

## TODO

- destructuring




