## How variables *really* work
{title:1}

## Variables

- A place for values to live

## Values

- Primitives or objects
- Primitives: numbers, strings, `null`, etc
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

## Two things happened to variables with ES6

## One: most variables are now constant

```
const aConstVariable = "how weird... I'm a constant variable";
```

## Always use `const`, `let` if you can't

- ~98% of variables in last three codebases were `const`

## Rule: when `let`?

- 'Library'/helper code
    - Where a function has internal state
    - Why? This is not application logic, it's computation
- Old-school loops: `for(let i = 0` (after measuring performance)

## `const`

## How does `const` work?

```javascript
const tasty = ['ice cream', 'pizza'];
const tastyTwo = tasty;
tasty[0] = 'cake';

console.log(tasty, tastyTwo);
```

## `const` is about assignment

- Will always refer to the same *value*
- But that value can change internally (AKA be mutated)

<!-- story continues: 'two' is destructuring -->
