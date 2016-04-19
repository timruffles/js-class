## Build tools
{title: 1}

## Modules

- still not native

## Frontend build

- combine modules to single file
- minify to reduce size
- Source Maps to retain debuggability

## Backend build

- simply transpile

## Babel

- most popular, big community
- other options: Traceur, Closure

## Transpiler

- converts from ES6 code to ES5
- plugin architecture: opt in

<!-- TODO nice image -->

## Fewest plugins as possible

- faster transpilation
- faster code!

##   
{notitle: true}

```javascript
function x([a,b]) {
  return (...args) => args.map(x => x + a + b);
}
```

vs

```javascript
"use strict";

var _slicedToArray = function () { /\* 0.7kb of JS... \*/ }

function x(_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var a = _ref2[0];
  var b = _ref2[1];

  return function () {
    for (var _len = arguments.length, args = Array(_len),
       _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.map(function (x) {
      return x + a + b;
    });
  };
}
```

## e.g

- Node 5 passes 56% of ES6 test suite, so:

```sh
> node -v
5.5.0
> npm install --save babel-preset-node5
```

