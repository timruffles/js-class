## Object system
{title:1}

## Object system is ubiquitous

## Understanding how it works is vital

## What uses the object system?

## Well...

## Everything not null or undefined

## e.g

```javascript
const thingsYouMightNotFeelAreObjects = [
    true,
    false,
    0,
    Infinity,
    NaN,
    / /,
    [],
];

// true "true" ƒ Boolean() { [native code] }
// false "false" ƒ Boolean() { [native code] }
// 0 "0" ƒ Number() { [native code] }
// Infinity "Infinity" ƒ Number() { [native code] }
// NaN "NaN" ƒ Number() { [native code] }
// / / "/ /" ƒ RegExp() { [native code] }
// [] "" ƒ Array() { [native code] }
for(const thing in thingsYouMightNotFeelAreObjects) {
    console.log(thing, thing.toString(), thing.constructor);
}
```

## But... primitives?

```javascript
const number = 10.2;
const string = 'hi';

// How?
number.toFixed(2) // 10.20
```

## Converted to object

- Primitives (aside from `null`/`undefined`) have wrappers
- Invoking methods on primitives is same as invoking on wrapper

## Wrapper objects

```javascript
const number = 10.2;

number.toFixed(2)

// NEVER use wrapper objects
Number(number).toFixed(2)

// exception: casting to boolean
const trueOrFalse = Boolean(somethingTruthyOrFalse);
```

## Objects

- Objects have properties
- Interact with via `.` or `[]`, `in` and `delete`


## Quiz

```javascript
const a = {};
a[1] = '🐷';
a['1'] = '🐢';

console.log(a); // ?
```

## Object literal - dynamic key

```javascript
function kv(key, value) {
    return {[key]: value};
}

// {whale: '🐳'}
console.log(kv('whale', '🐳'))
```

## Keys are mostly strings

## Non-string keys get converted to strings

## ...mostly?

- What else?

## Symbols

## Best explanation: why

## Safe language extensibility

- avoid the Mootools/Prototype.js woe

```javascript
// some library
if(!('contains' in String.prototype)) {
    String.prototype.contains = containsPolyfill;
}
```

## Why?

- anything else that's a key in an object is a string
- anyone can define any string, so you'll get clashes

## How?

## A symbol is unique, and only equal to itself

```javascript
const a = Symbol();
const b = Symbol();
console.log(a === b) // false

// given a name, will show up in string representation,
// no change in behaviour
console.log(Symbol('hat') === Symbol('hat')) // false
```

## A symbol is unique, and only equal to itself

```javascript
console.log(Symbol('hat') === Symbol('hat')) // false
const hat = Symbol('hat');

const a = {};
a[hat] = '🎩';

console.log(a[Symbol('hat')], a.hat); // ?
```

## Safe!

```javascript
// browser.js
const browserCoolMethod = Symbol('coolMethod');
String.prototype[browserCoolMethod] = () => {
    // standard library implementation
};

// library.js
const coolMethod = Symbol('coolMethod');

if(!(coolMethod in String.prototype)) {
    String.prototype[coolMethod] = () => {};
}

console.log(
    String.prototype[browserCoolMethod]
    === String.prototype[coolMethod]
); // false
```

## Shared symbols

```javascript
// uses global symbol repository
Symbol.for('egg') === Symbol.for('egg');

// useful for?
```

## Could symbols be useful for anything else?

## Not privacy! :)

```javascript
// [Symbol(Symbol.iterator), Symbol(Symbol.unscopables)]
console.log(Object.getOwnPropertySymbols(Array.prototype));
// "symbol"
console.log(typeof Object.getOwnPropertySymbols(Array.prototype)[0])
```

## Tip: don't use symbols in application code

## Maybe in your own libraries...

- possibly sign you're doing something un-Javascripty though?
- overeaching, Ruby style extension to objects



## Where do methods come from?
{subtitle:1}

```javascript
const animals = ['🐢', '🐳', '🐫'];
// what happens here?
console.log(animals.slice(-2));
```

## Reason about property lookup

```javascript
const animals = ['🐢', '🐳', '🐫'];
// ok, is there a 'slice' in the array instance?
animals.hasOwnProperty('slice'); // false
```

## Why?

## Efficiency

- would be hugely expensive for every array to have its own copy of each array method

## How do we solve?

## Sharing!

- every array shares same slice method

## How?

## We'll define prototype objects

## If an object doesn't have a method, it asks its prototype

## Looks up the prototype chain

```javascript
const animals = ['🐢', '🐳', '🐫'];
// ok, is there a 'slice' in the array instance?
animals.hasOwnProperty('slice'); // false

// what about in the prototype?
Object.getPrototypeOf(animals)
    .hasOwnProperty('slice') // true
```

## Lookup algorithm
{code:1}

```javascript
// always at run-time
function getProperty(object, prop) {
  if(object.hasOwnProperty(prop)) {
    return object[prop];
  } else {
    const prototype = Object.getPrototypeOf(object);
    if(prototype) {
      getProperty(prototype, prop);
    } else {
      // and here is the source of
      // 'undefined is not a function' 🤔
      return;
    }
  }
}
```

## Happens however the lookup occurs

```javascript
someObject.someProperty;
someObject['someProperty'];
const prop = someProperty;
someProperty[prop];
```

## Other lookups

```javascript
const hasKeyOrPrototypeHasKey = 'x' in someObject;

// only affects the object itself
delete someObject.x;
```

## What happens if...

```javascript
const arrayOne = [1,2];
const arrayTwo = [4,7];

arrayOne.slice = () => { throw Error('hi') };

// what happens here?
arrayTwo.slice(-1);
```

## Because

- assignment/delete affects instance
- prototype is unaffected!

<!-- TODO object system exercise -->