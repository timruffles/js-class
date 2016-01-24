## Key-value data-structures
{title:1}

## Objects, used as dictionaries

```javascript
const enToFr = {};

enToFr.hello = "bonjour";
enToFr.cheese = "fromage";

// equivalent
console.log(enToFr.hello);
console.log(enToFr["hello"]);

```

## Keys are strings, values = any

```javascript
const dict = {};

dict[10] = "ten";

dict["10"] // "ten"

// general rule: calls toString on non-strings
const convertsToTen = {
  toString: () => "10"
};

dict[convertsToTen] // "ten"
```

## ES6 - dynamic keys

```javascript
// ES6
function create(property, value) {
  return {["id:" + property]: value}
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
dict.length // undefined

Object.keys(dict).length // costs O(N)
```

## `Map`: ES6 to rescue

```javascript

const m = new Map;
const o = {};

m.size // 0

const a = [1,2];
const b = [1,2];

o = {[a]: "A", [b]: "B"}

Object.keys(o).length // 1

m.set(a, "A");
m.set(b, "B");

m.size // 2

// can you see why this is happening?
m.get(a) // A
o[a] // B
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
s.add([1,2]);
s.has([1,2]) // false


s.add(1);
s.has(1); // true

s.size // 2
s.add(1);
s.add(1);
s.size // 2
```

## Exercise

    exercises/maps-objects-sets
