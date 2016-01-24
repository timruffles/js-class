## Functions
{title:1}

<img src="slides-theme/img/eval-apply.jpg" style='width:476px; display:block; margin: 0 auto'>

## Three ways to define
{note:"don't mention this"}

## Declare

```javascript
function add(a,b) {
  return a + b;
}
```

## Expression

```javascript
var add = function(a, b) {
  return a + b;
}
```

## Fat-arrow

```javascript
// note: lack of \`return\`
var add = (a, b) => a + b;
```

## Evaluating functions

```javascript
var result = add(add(10, 5), add(5, add(-5, 5)));

// steps for JS to evaluate right-hand-side
add(add(10, 5), add(5, add(-5, 5)));
add(15 ,        add(5, add(-5, 5)));
add(15 ,        add(5, 0         ));
add(15 ,        5                 );
20
```

## Why are functions important?

##  

> Establishing languages is a powerful way to control complexity

## Languages?

## Imagine if JS had only one more feature...

## `if`

```javascript
if(testedForTruthy) {
  console.log("was truthy");
} else {
  console.log("was falsy");
}
```

## Would we have enough to write programs?

## Yes!

## Wouldn't we be missing?

```javascript
while / do / for / try
```

## Sure, but...

## ...we can make them

```javascript
function while\_(test, block) {
  if(test()) {
    block();
    return while\_(test, block); 
  }
}

var x = 10;
while_(() => { x = x - 1 }, 
  () => {
    console.log("X: " + x);
  })
```

## Functions = the core

<video width="475" height="352" controls>
  <source src="slides-theme/movies/spirit-of-the-computer.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>

## A language to describe problems

> Establishing languages controls complexity

SICP

## Exercise!
{title: 1}

    exercises/functions-core

