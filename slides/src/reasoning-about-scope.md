## Demystifying scopes
{title:1}

## Variables exist in scopes

- Why?

## Understanding scope

- Necessary to be confident JS coders

## Two things we want to be able to say

- 'a scope'
- 'in scope'

## What is going on here?

```javascript
let A = 10;

function alpha(A) {
    A = 20;
}

alpha(A);
console.log(A);
```

## 'A scope'

## Spot the scopes

```javascript
// some-file.js
export function alpha(x) {
    if(x > 5) {
        return 'high';
    } else {
        const msg = low(x);
        return msg;
    }

    // ...
    function low(lo) {
        return lo + ' was too low';
    }
}

const gamma = 1;
alpha(gamma);
```

## There are 6

- 4 types

## 1. Functions scopes

## At what time?

## Created per invocation
{notitle:1}

```javascript
function main(A) {
  console.log(A);
}

main(10);
main("hello " + 5);
```

## Intuitive
{notitle:1}

```javascript
function main(A) {
  console.log(A);
}

let A = 10;
main(A);
main(A + 5);
```

## 2. Global scope?

## Tricky!

```javascript
export // ... we're in a module!

// so this is not a global, it's a module-level var
let something = 'hi';
```

## Global scope

```javascript
// browser - strict mode
window.something = "I am global";

// is now referencable anywhere in program via global scope
console.log(something);

// node
global.something = "I am global";
```

## Acessing global object?

## Just refer to property

```javascript
Array;


// final check will be on global object, if not
// there will throw
anything;
```

## Getting global itself?

```javascript
// browser
window;
self;

// node
global;

// sloppy, outside functions
this;
```

<aside>
    https://github.com/tc39/proposal-global
</aside>

## 3. Module scope

```javascript
// some module.js

const someName = 1;
export { someName };

// what scope is this variable defined in?
otherName = 2;
```

## Which files are modules?

- browser
    - `<script type=module>`, or imported via `import`
- node
    - new `.mjs` (AKA Michael Jackson Solution)
- transpiled
    - whatever you configure!

## Module scoped variables

- Modules are evaluated once, on demand
- Modules live forever



## 4. Block scope
{es6:1}

```javascript
    // ...
    } else {
        const msg = low(x);
        return msg;
    }
```

## Cleans up loops

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

```javascript
function main() {
  // what happens here?
  console.log(i);

  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
```

## What can block scopes replace?

## IIFE

```javascript
// nonModuleScript.js
'use strict';

const topLevel = 'hi';

!(function() {
    // all this effort just to get a scope!
    const iife = 'hello';
})()

{
    // ahhhh
    const block = 'hello';
}

// ?
console.log(
    typeof topLevel,
    typeof iife,
    typeof block)
```

## 'In scope'
{subtitle: 1}

## Let's check reasoning
{notitle:1}

```javascript
function main() {
  let A = 'hello';
  let B = 'hi';

  function one(A, C) {
    let D = 'hola';
    console.log(A,B,C,D);
  }

  one(A, 'yo');
  one(A);
  one(B,A);

  console.log(D); // <- what happens here?
}
```

## Using scopes for expression
{subtitle:1}

## Organisation

## Low-level: helper functions

```javascript
// makes role of first/second/third very clear: only
// used in complexProcess
function complexProcess(a,b,c) {
    const d = first(a,b);
    const e = second(c);
    return third(d,e);

    function first() { /\* ... \*/ }
    function second() { /\* ... \*/ }
    function third() { /\* ... \*/ }
}
```

## High level

## Script organisation

```javascript
main(process.argv[2], process.env.SOME_FLAG);

function main(targetFile, flag) {
    const config = getConfig(flag);

    const result = stepOne(targetFile, config);

    console.error(notify(result));

    output(result);
}

function stepOne() {
    // ...
    veryBoringDetail();
    // ...
}

function veryBoringDetail() {}
```

## Important to trivial

```javascript
// this file takes CLI args and does something
main(process.argv[2], process.env.SOME_FLAG);

function main(targetFile, flag) {}
function stepOne() {}

// ...
// hundreds of lines later
function veryBoringDetail() {}
```

## Trivial to important

```javascript
const veryBoringDetail = () => {};
const anotherBoringDetail = () => {};
const stepOne = () => {}
// ...
// hundreds of lines later
const main = () => {}

// last line of the file
main(process.argv[2], process.env.SOME_FLAG);
```

## `var`
{subtitle:1}

## Still necessary for JS devs

- Old runtimes, or weird ones: databases etc
- Issues in transpiled code 😱


## Hoisting & `var`

```javascript
function main() {
  console.log(i);

  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
```

```javascript
// visualising the 'hoisting zone'
function main() {
  var i;
  ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
  console.log(i);

  for(var i = 0; i<10; i++) {
    console.log(i);
  }
}
```


## Let's try
{exercise:true}

    exercises/variables-and-scopes






