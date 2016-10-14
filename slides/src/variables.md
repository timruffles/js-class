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

## `undefined`

```javascript
var notDefined;

console.log(notDefined); // ?
```

## Undeclared

```javascript
var someVar;

console.log(smeVar); // typo, what happens??
```


## `var` = function scoped

## Function scope

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

var A = 10;
main(A);
main(A + 5);
```

## More complex
{notitle:1}

```javascript
function main() {
  var A = 'hello';
  var B = 'hi';

  function one(A, C) {
    var D = 'hola';
    console.log(A,B,C,D);
  }

  one(A, 'yo');
  one(A);
  one(B,A);

  console.log(D); // <- what happens here?
}
```


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

// is now referencable anywhere in program
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

## `const`
{es6:1}

```javascript
const doesNotChange = "hi";

// throws TypeError - Assignment to constant
doesNotChange = "I'll try my luck";
```

## `const`

```javascript
const counter = { count: 0 };

// what happens here?
counter.count += 1;
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

## Rule: pick `const`, then `let` over `var`
{rule:1}

- one less source of bugs
- clearer where variables belong


## Exercise!
{exercise:1}

    exercises/variables-and-scopes


