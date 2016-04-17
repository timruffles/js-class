## Ordered data-structures
{title:1}

## `Array`

## For ordered data

## Ordered

```script
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters[0] // Cameron;

// Major
primeMinisters[primeMinisters.length - 1] 

// undefined - no negative indexes :(
primeMinisters[-1] 

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
 // Blair then Brown
lastLabourGovernment.reverse().join(" then ")


primeMinisters.sort();

// what can we tell about .sort() and mutation?

// [ 'Blair', 'Brown', 'Cameron', 'Major' ]
console.log(primeMinisters)

// and sort order?
primeMinisters.sort((a,b) => a.length - b.length)

// [ 'Blair', 'Brown', 'Major', 'Cameron' ]
console.log(primeMinisters)
```



## `for ... in`

<!-- TODO stinger: ask ppl to guess what happens -->

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

// what... is this allowed?
primeMinisters.metaData = "hi";

// for ... in will go over all properties of arrays
var initials = [];
for(let i in primeMinisters) {
  initials.push( primeMinisters[i][0] );
}

// what does initials end up as?
```


## `for`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

const initials = [];
for(let i = 0, l = primeMinisters.length; i < l; i++) {
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

console.log(initials) // ["C","B","B","M"]
```

## Rule: avoid `for ... in` on arrays
{rule:1}

## `Array`-likes

- In JS, `arguments` object
- In DOM, `NodeList`

## Functional iteration

```javascript
// ES5 'array additions'
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters.filter((p) => p[0] === "B") // ["Brown","Blair"];

primeMinisters.map((p) => p[0]) // [ "C", "B", "B", "M" ]

primeMinisters.reduce((s, e) => s + ":" + e) // 'Cameron:Brown:Blair:Major'
```

## Functional iterators

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
