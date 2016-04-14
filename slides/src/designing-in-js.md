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

## TODO

1. renaming
1. destructuring
1. more on export?

1. fix exercise - it uses closures that aren't introduced!
1. another exercise on args

## Summary: modules
{summary:true}

- small modules = simpler, better
- break program into high-level modules
- export single functions, or namespaces
- `import x from "../y"`



