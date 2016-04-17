## Designing in JS
{title:true}

## Structuring an application

> Make smaller things.

Sandii Metz

## Lots of small bits

## AKA modules!

## Simplest

```javascript
// A.js
export var hello = "hi";
```

```javascript
// B.js
import { hello } from "./A";

console.log("A says " + hello);
```

## More useful

```javascript
export function hi(name) {
  console.log("hi " + name);
}
```

```javascript
// B.js
import { hi } from "./A";

hi("amy"); // prints 'hi amy'
```

## Default export

```javascript
// hi.js
export default function(name) {
  console.log("hi " + name);
}
```

```javascript
// B.js
import hi from "./hi";

hi("amy"); // prints 'hi amy'
```

## Let's have a go!
{exercise:true}

<!-- TODO exercises/modules -->

## CommonJS

Node's module system

## Very comparable syntax

```javascript

var aModule = require("./some/other/module");

var fs = require("fs");
var anNpmModule = require("from-npm");

// export function mainMethod() {}
module.exports = exports = mainMethod;

// export function someFunction() {}
exports.someFunction = function() {}


function mainMethod() {
} 
```

## Third-party code

```javascript

// this is from core library
var fs = require("fs");

// this is looked up from node_modules folders in current, and parent
// directories
var anNpmModule = require("from-npm");
```

## import

```javascript
// relative or absolute path
var myModule = require("./my/module");
```

## export

```javascript
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
⭐️                                     ⭐️
⭐️      'Behind the scenes'            ⭐️
⭐️ var module = { exports: {} };       ⭐️
⭐️ var exports = module.exports;       ⭐️
⭐️                                     ⭐️
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

exports.helper = function() {
}

module.exports = function Main() {
}
```

<ul>
  <li>What's wrong with the code above?</li>
  <li class="fragment">
     We've redefined <code>module.exports</code>!
  </li>

  <li class="fragment">
    Old <code>exports</code> object is no longer in module object.
  </li>
</ul>

## TODO

1. renaming
1. destructuring
1. more on export?


## Summary: modules
{summary:true}

- small modules = simpler, better
- break program into high-level modules
- export single functions, or namespaces
- `import x from "../y"`



