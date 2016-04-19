## Iterating custom data structures
{title:true}


## We can `for .. of` `Map`s etc

## What about our own data-structures?

## Yes we can!

```javascript
for(const [value, left, right] of myTree) {
  // pretty cooooool....
}
```

## OMG!
{notitle: true}

![yay](media/yay.png)

## How?

## An API

## We need to be safe here...

## Avoid name clashes with *any* existing code

## How?

## `Symbol`s

## Symbols = opaque, unique 'ID'

```javascript
const s1 = Symbol("A");
const s2 = Symbol("B");
const s3 = Symbol("B");

console.log(s2 === s3) // ?
```

<ul>
  <li class='fragment'>Are s2 and s3 the same?</li>
  <li class='fragment'>Why not?</li>
</ul>

## Prevents clashes

- e.g two libraries extend built-in Objects with methods

```javascript
// like unix 'tac' method
Object.defineProperty(String.prototype, "tac", {
  value: function(...others) {
    return others.slice().reverse().join("") + this;
  }
});

console.log("hello".tac("1","2","3")) // 321hello
```

## With symbols

```javascript
const tacOne = Symbol("tac");
const tacTwo = Symbol("tac");

Object.defineProperty(String.prototype, tacOne, {
  value: function(...others) {
    return others.slice().reverse().join("") + this;
  }
});

Object.defineProperty(String.prototype, tacTwo, {
  value: () => { throw Error("BROOOOKEN") }
});

console.log("hello"[tacOne]("1","2","3")) // 321hello
```

## Used a lot in new language features

- no risk of breaking old code via clashes

## Letting YOU define object iterators

## e.g a nice simple linked list

```javascript
function L(value, next) {
  return { value, next };
}

const list = L(1, L(2, L(3)));

const items = [];
for(let node = list; node; node = node.next) {
  items.push(node.value);
}

console.log(items); // [1, 2, 3]
``` 

## e.g a nice simple linked list

```javascript
// this is a bit faffy, and fragile
const items = [];
for(let node = list; node; node = node.next) {
  items.push(node.value);
}
``` 

## With custom iterators!

```javascript
const items = [];
// WOAH!!!
for(const value of list) {
  items.push(node.value);
}
``` 

- implementation detail hidden (`.next`, `.value`)
- generic - `list` could be replaced with `Array`, `Set`
- no boilerplate



## Language hook

- shared symbols are hooks for the newer features of ECMAScript

```javascript
{ 
  *[Symbol.iterator]() {
    // yields each value in data-structure in turn
  } 
}
``` 

## Defining

```javascript
function L(value, next) {
  return { value, next, 
    [Symbol.iterator]: iterateLinkedList };
}

function *iterateLinkedList() {
  for(let node = list; node; node = node.next) {
    yield node.value;
  }
}

const list = L(1, L(2, L("banana")));
for(const v of list) console.log(v);
``` 

## Your turn
{exercise:true}

    Exercise 4

    exercises/generators
