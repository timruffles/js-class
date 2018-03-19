## Key-value data-structures
{title:1}

## We use a key/value data-structure constantly in JS

## Which is...?

## Object

## A plain object is a great key/value data-structure

- AKA dictionary, hashmap, associative array, table

## `Object` used as dictionary

```javascript
const enToFr = {};

enToFr.hello = "bonjour";
enToFr.cheese = "fromage";

// equivalent
console.log(enToFr.hello);
console.log(enToFr["hello"]);
```

## Most important place we'll use objects as KV data-structures?

## The most popular data-interchange format in the world is...?

## JSON

JavaScript Object Notation

![json spec fits on card](media/json-spec.png)

## Building block of JSON

```javascript
{
    "goal": "structuring data",
    "how": "associating values with keys, or position in arrays",
    "attributes": [
        "simple",
        "human readable",
        "human writable"
    ]
}
```

## Keys are strings, values = any

```javascript
const dict = {};

dict[10] = "ten";

console.log(dict["10"]); // "ten"

// general rule: calls toString on non-strings
const convertsToTen = {
  toString: () => "10"
};

console.log(dict[convertsToTen]); // "ten"
```

## Iterating objects

## `for ... in`

```javascript
for(const property in Object.values(object)) {
  const value = object[property];
  console.log(\`${property}: ${value}\`);
}
```

## `for ... of`

```javascript
// objects not iterable by default, so...
for(const [property, value] of entries(object)) {
  console.log(\`${property}: ${value}\`);
}

// Object.entries(obj) is ES2017
```

## ES6 - dynamic keys

```javascript
// ES6
function create(property, value) {
  return { ["id:" + property]: value };
}

// ES5
function create(property, value) {
  var o = {};
  o["id:" + property] = value;
  return o;
}
```

## Missing features

```javascript
const dict = {};

dict[1] = "hello";

// how to count?
console.log(dict.length); // undefined

console.log(Object.keys(dict).length); // slow for very large objects
```


## ES6 to the rescue!

```javascript
const m = new Map;
const o = {};

const a = [1,2];
const b = [1,2];

// assign
m.set(a, "A");
m.set(b, "B");

o = {[a]: "A", [b]: "B"}

console.log(Object.keys(o).length); // 1
console.log(m.size); // 2

// ...why?
```

## More `Map`

```javascript
const m = new Map;

const list = [1,2,3];

m.set(list, "A");
console.log(m.get(list)); // A

console.log(m.get([1,2,3])); // ...?

const m2 = new Map([
  ["list", "hello"],
  ["boo", "another key"],
]);
```


## Maps: `for .. of`

```javascript
const m = new Map;
m.set("A", 1);
m.set("B", 2);

for(const prop in m) {
  console.log(prop) // not called! why?
}

for(const kv of m) {
  console.log(kv) // ["A", 1], ...
}

for(const k of m.keys()) {
  console.log(k) // "A", "B"
}

for(const v of m.values()) {
  console.log(v) // 1, 2
}

m.forEach((v, k) => console.log(v, k))
```

## `Set`

```javascript
// ES6 only

const s = new Set;

s.add(1);
console.log(s.has(1)); // ...?

console.log(s.size); // ...?
s.add(1); s.add(1); s.add(1);
console.log(s.size); // ...?

const A = [1,2];
s.add(A);

console.log(s.has(A)); // ...?
console.log(s.has([1,2])); // ...?
```

## Exercise

    exercises/maps-objects-sets
