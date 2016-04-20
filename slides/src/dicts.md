## Key-value data-structures
{title:1}

<!-- TODO why do we care? -->

## `Object` used as dictionary

```javascript
const enToFr = {};

enToFr.hello = "bonjour";
enToFr.cheese = "fromage";

// equivalent
console.log(enToFr.hello);
console.log(enToFr["hello"]);

```

AKA hashmap, associative array, table.

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

// Object.entries(obj) is proposed for future ECMA
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

for(let i in m) {
  console.log(i) // not called! why?
}

for(let i of m) {
  console.log(i) // ["A", 1], ...
}

for(let i of m.keys()) {
  console.log(i) // "A", "B"
}

for(let i of m.values()) {
  console.log(i) // 1, 2
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
