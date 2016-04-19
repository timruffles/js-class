## Ordered data-structures
{title:1}

## `Array`

## For ordered data

## Ordered

```script
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters[0] // What would this be?

// ...and this?
primeMinisters[primeMinisters.length - 1] 

// ...and this?
primeMinisters[-1] 

console.log(primeMinisters.length) // 4
```

<ul>
  <li class=fragment>Cameron - Array is 0 indexed</li>
  <li class=fragment>Major</li>
  <li class=fragment>undefined - negative indexes not defined</li>
</ul>

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

// how does slice() work?
```

## Sorting

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

primeMinisters.sort();


// [ 'Blair', 'Brown', 'Cameron', 'Major' ]
console.log(primeMinisters)

// what can we tell about .sort() and mutation?

// and sort order?
primeMinisters.sort((a,b) => a.length - b.length)

// [ 'Blair', 'Brown', 'Major', 'Cameron' ]
console.log(primeMinisters)
```



## `for ... in`

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

<ul>
  <li class=fragment>C, B, B, M, h. Why?</li>
  <li class=fragment><code>Array</code> can have string properties!</li>
  <li class=fragment><code>for .. in</code> iterates string properties</li>
</ul>


## `for`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];

const initials = [];
for(let i = 0, l = primeMinisters.length; i < l; i++) {
  initials[i] = primeMinisters[i][0];
}
```

- likely always fastest
- but: ugly. Use *only* when forced to
- your time is much, much more valuable :)



## `for .. of`

```javascript
const primeMinisters = ["Cameron", "Brown", "Blair", "Major"];
primeMinisters.metaData = "hi";

// ES6 \`for ... of\` goes over VALUES of iterables
const initials = [];
for(let pm of primeMinisters) {
  initials.push(pm[0]);
}

console.log(initials) // ["C","B","B","M"]
```

- What problem is solved?

## Rule: avoid `for ... in` on arrays
{rule:1}

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
