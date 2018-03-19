## Object system
{title:1}

## Object system is ubiquitous

## Understanding how it works is vital

## What are JS objects?

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

## Symbols?

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

## What extensions are already defined?

## Quite a few

- iteration
- regex methods
- spread

## Tip: only extension you'll want to write currently is `Symbol.iterator`

```javascript
const a = ['🐳'];
// '🐳'
for(const x of a) console.log(x)

delete Array.prototype[Symbol.iterator];

// TypeError: a is not iterable
for(const x of a) console.log(x)

// woohoo, we broke the language!
```

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

## What happens next?

## Reason about property lookup

```javascript
const animals = ['🐢', '🐳', '🐫'];
// ok, is there a 'slice' in the array instance?
animals.hasOwnProperty('slice'); // false

// what about in the prototype?
z.__proto__.hasOwnProperty('slice') // true
```

## Lookup algorithm
{code:1}

```javascript
// always at run-time
function getProperty(object, prop) {
  if(object.hasOwnProperty(prop)) {
    return object[prop];
  } else {
    if(object.\_\_proto\_\_) {
      getProperty(object.\_\_proto\_\_, prop);
    } else {
      return undefined;
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

