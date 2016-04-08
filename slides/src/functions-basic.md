## Functions
{title:1}

<img src="slides-theme/img/eval-apply.jpg" style='width:476px; display:block; margin: 0 auto'>

## Three ways to define
{note:"don't mention this"}

## Declare

```javascript
function add(a,b) {
  return a + b;
}
```

## Expression

```javascript
var add = function(a, b) {
  return a + b;
}
```

## Fat-arrow

```javascript
// note: lack of \`return\`
var add = (a, b) => a + b;

// note: multiple expressions requires {} and \`return\`
var twoStep = (a, b) => { console.log(a); return b }

// returning just an object requires you provide brackets:
var object = (a, b) => {{a:1, b:2}}
```

## Evaluating functions

```javascript
var result = add(add(10, 5), 5); 

// steps for JS to evaluate right-hand-side:

//   add(add(10, 5), 5);
//   add(15, 5);
//   20
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

## Named parameters

```javascript
function log({ n, base }) {
  return Math.log(n) / Math.log(base);
}


log({ n: 64, base: 4 }) // 3
log({ n: 90, base: 10 }) // 1.954...

// team up with required!
function log({ n = required("n"), base = required("base") }) {
  return Math.log(n) / Math.log(base);
}

function required(name) {
  throw new Error(name + " is a required argument");
}
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

## Can do all this in ES5

## But *much* uglier
{bad:1}


## `arguments`

```javascript
function callMe() {
  // who needs parameters?
  console.log("Hello " + arguments[0]);
}

callMe("a");
```

## Variable length

```javascript
function describeRace(race, winner) {
  console.log(race + " was won by " + winner + ", beating " 
    + join(arguments, start, end));
}

function slice(arrayLike, start, end) {
  return [].slice.call(arrayLike, start, end);
}

callMe("a");
```

## Exercise!
{title: 1}

    exercises/functions-core

## Summary
{summary:true}

- functions can take a range of arguments
- default arguments should came last
- ~3 args max; avoid plain boolean args, prefer keywords if possible
- adopt conventions to create readability
- destructuring in API and call side
