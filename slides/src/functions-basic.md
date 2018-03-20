## Pro-level functions
{title:1}

<img src="slides-theme/img/eval-apply.jpg" style='width:476px; display:block; margin: 0 auto'>

## Three ways to define
{note:"don't mention `this`"}

## Declare

```javascript
function add(a,b) {
  return a + b;
} // <- no semi-colon required
```

## Expression

```javascript
const add = function(a, b) {
  return a + b;
};
```

- (expression: evaluates to a value)

## Fat-arrow

```javascript
const add = (a, b) => {
    return a + b;
};
```

## Why?

## Shorthand for legibility

```javascript
const idsA = users.map(function (user) { return user.id });

// fat arrow, curly bracket form
const idsA = users.map((user) => { return user.id });

// drop parens for single argument
const idsB = users.map(user => { return user.id });

// bracketless form - no return, single expression
const idsB = users.map(user => user.id);
```

## Rules on shorthands

## Multiple statements

```javascript
// note: multiple statements requires {} form
const twoStep = (a, b) => { console.log(a); return b }
```

## Returning an object

```javascript
// returning just an object requires you provide brackets
const object = (a, b) => ({a:1, b:2})
```

<p class=fragment>
- Is a fat-arrow an expression?
</p>

## Destructure in arrow functions

```javascript
const addCounts = ({count}, {count: countB}) => count + countB;
```

## Declarations

- special
- hoisting power!

```javascript
main();
function main() {}
function important() {}
function fairlyImportant() {}
function boring() {}
function trivial() {}
function reallyNotThatInteresting() {}
```


## Default parameters

```javascript
// default parameters
function log(n, base = 10, opts = {}) {
  // ...
}
```

## 'Required' parameters trick

```javascript
// default parameters
function log(n = required("number"), base = 10) {
  // ...
}

function required(name) {
  throw new Error(name + " is a required argument");
}
```

## Named parameters via destructuring

```javascript
function log({ n, base }) {
  return Math.log(n) / Math.log(base);
}


log({ n: 64, base: 4 }) // 3
log({ n: 90, base: 10 }) // 1.954...
```


<pre class=fragment>
<code class="lang-javascript ">
// team up with required!
function log({ n = required("n"), base = required("base") }) {
  return Math.log(n) / Math.log(base);
}

function required(name) {
  throw new Error(name + " is a required argument");
}
</code></pre>


## Named parameters defaults

```javascript
function log({ n, base = 2 }) {
  return Math.log(n) / Math.log(base);
}


console.log(log({ n: 8 })) // 3
log() // TypeError: Cannot match against 'undefined' or 'null'

// How to fix?
```

## Complete named parameters

```javascript
function log({ n, base = 2 } = {}) {
  return Math.log(n) / Math.log(base);
}


console.log(log({ n: 8 })) // 3
log() // NaN
```


## Variable length

```javascript
// variable length functions
function sprintf(format, ...args) {
  console.log(format, ...args);
}

const pair = [1,2];

// can use ... in calls too!
sprint("%s %s", ...pair);
```

## Calling with spread

```javascript
const things = ['🏆','🎨'];

// 🏆 🎨 🚀
console.log(...things, '🚀');

// 🚀 🏆 🎨
console.log('🚀', ...things);
```


## Exercise!
{title: 1}

    exercises/functions-core

