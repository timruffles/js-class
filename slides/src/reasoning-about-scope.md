## Reasoning about variables
{title:1}

## Variables

- A place for values to live
- A way to refer ('get') to values

## Values

- Primitives or objects
- Primitives: `null`, numbers, strings
- Objects: arrays, regex, DOM nodes, etc

## Let's declare some variables

```javascript
let a = 1;
let b;
```

## `undefined` vs undeclared

## `undefined`

```javascript
let notDefined;

console.log(notDefined); // ?
```

## Undeclared

```javascript
let someVar;

console.log(smeVar); // typo, what happens??
console.log(notHere); // and here?
```

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

## Functions & scope

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

## Global scope?

## Module scope

- ES6 introduced modules
- module: file with import/export
    - or `<script type="module">`
- lifetime?
- Modules are evaluated once

## Module scoped variables

- Live forever

## 'In scope'

## More complex
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

## Block scope
{es6:1}

```javascript
for(let i = 0; i++; i < 10) {
  console.log(i);
}

// reference error
console.log(i);
```

## Block scope
{es6:1}

```javascript
const values
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

## Using scopes for expression
{title:1}

## Organisation

## Low-level: helper functions

```javascript
// makes role of first/second/third very clear: only
// used in complexProcess
function complexProcess(a,b,c) {
    const d = first(a,b);
    const e = second(c);
    return third(d,e);

    function first() { /* ... */ }
    function second() { /* ... */ }
    function third() { /* ... */ }
}
```

## High level

## Script organisation

```javascript
// bin/some-bin
#!/usr/bin/env node

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
// bin/some-bin
#!/usr/bin/env node

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
// bin/some-bin
#!/usr/bin/env node

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

## Still necessary for JS devs

- Old runtimes, or weird ones: databases etc
- Issues in transpiled code 😱


## `var` statements are hoisted

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

## Global scope

```javascript
// browser - strict mode
window.something = "I am global";

// is now referencable anywhere in program via global scope
console.log(something);

// node
global.something = "I am global";
```

## Acessing global object

```javascript
this; // sloppy, outside functions

window; // browser
global; // node
```

