## Module systems
{title:true}

## Structuring an application

> Make smaller things.

Sandii Metz

## Lots of small bits

## AKA modules!

## Simplest

```javascript
// greetings.en.js
export var informal = "hi";
```

```javascript
// run.js
import { informal } from "./greetings.en";

console.log(informal + " amy") // hi amy
```

## Default export

```javascript
// greetings.es.js
export default "hola";
```

```javascript
// greetings.es.js
var greeting = "hola";
export default greeting;
```

```javascript
// greetings.es.js
var greeting = "hola";
export { greeting as default };
```

```javascript
// run.js
import defaultSpanish from "./greetings.es";

console.log(defaultSpanish + " amy"); // prints 'hola amy'
```

## Named exports, and renaming

```javascript
var cake = "sponge";
var tea = "darjeeling";


export { tea, cake as treat };
```

## Import default, and renaming

```javascript
import { tea as drink, treat } from "./teaParty";
```

```javascript
import { default as host } from "./teaParty";
```

```javascript
// default + values
import party, { tea, treat } from "./teaParty";
```

## Import as object

```javascript
import * as party from "./teaParty";

var cake = party.cake;

export { party as default, cake as treat };
```

## Don't worry

- just learn a few - you are only saving a couple of keystrokes

## Let's have a go!
{exercise:true}

    exercises/modules;

## CommonJS

Node's module system

## Very comparable syntax


## Export

```javascript
// export { mainMethod as default }
module.exports = exports = mainMethod;

// export function someFunction() {}
exports.someFunction = function() {}

function mainMethod() {
} 
```

## Import

```javascript
// relative or absolute path
var myModule = require("./my/module");
```

## Import

```javascript

// what's this?
var aModule = require("./some/other/module");

// third party?
var fs = require("fs");
var readFile = fs.readFile;

// third party?
var someModule = require("lodash");
```

- how can we tell standard lib vs 3rd party?

## Third-party code

```javascript

// this is from core library
var fs = require("fs");

// this is looked up from node_modules folders in current,
// and parent directories
var anNpmModule = require("from-npm");
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
    Original <code>exports</code> object is no longer in module object.
  </li>
</ul>

## Let's have a go!
{exercise:true}

    exercises/commonjs

