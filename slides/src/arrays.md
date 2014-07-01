## Ordered data-structures
{title:1}

## `Array`

## For ordered data

## Ordered

```script
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters[0] // Cameron;
primeMinisters[primeMinisters.length - 1] // Major - no negative indexes :(

console.log(primeMinisters.length) // 4
```

## Extension

```script
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters.unshift("Fry"); // at start
primeMinisters.push("Thatcher"); // at end


// what did we learn about const?
console.log(primeMinisters.length) // 6

primeMinisters.pop(); // drops end
primeMinisters.shift(); // drops start

console.log(primeMinisters.length) // 4
```

## Subsets

```script
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

const lastLabourGovernment = primeMinisters.slice(1, 3);
lastLabourGovernment.reverse().join(" then ") // Blair then Brown


primeMinisters.sort();

// what can we tell about .sort() and mutation?
console.log(primeMinisters) // [ 'Blair', 'Brown', 'Cameron', 'Major' ]

// and sort order?
primeMinisters.sort((a,b) => a.length - b.length)
console.log(primeMinisters) // [ 'Blair', 'Brown', 'Major', 'Cameron' ]
```

## `for`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

const initials = [];
for(let i = 0, l = primeMinisters.length; i < l; i++) {
  initials[i] = primeMinisters[i][0];
}
```

## `Array`-likes

- In JS, `arguments` object
- In DOM, `NodeList`

## `for ... in`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

// what... is this allowed?
primeMinisters.metaData = "hi";

// for ... in will go over all properties of arrays
const initials = [];
for(let i in primeMinisters) {
  initials[i] = primeMinisters[i][0];
}
```

## `for .. of`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];
primeMinisters.metaData = "hi";

// ES6 `for ... of` goes over VALUES of iterables
const initials = [];
for(let pm of primeMinisters) {
  initials.push(pm[0]);
}
```

## Rule: avoid `for ... in/of` on arrays
{rule:1}

## Functional iteration

```javascript
// ES5 'array additions'
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters.filter((p) => p[0] === "B") // ["Brown","Blair"];

primeMinisters.map((p) => p[0]) // [ 'B', 'B', 'M', 'C' ]

primeMinisters.reduce((s, e) => s + ":" + e) // 'Blair:Brown:Major:Cameron'
```

## Rule: prefer functional iterators
{rule:1}

- intention revealing
- shorter, less error-prone

## Remember: compares by identity

```javascript
const byValue = [1,2] === [1,2]; // false

const couldStringify = JSON.stringify([1,2]) 
  === JSON.stringify([1,2]); // true
```

## Exercise
{exercise: 1}

    exercises/arrays
