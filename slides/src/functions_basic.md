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
// note: lack of `return`
var add = (a, b) => a + b;
```

## Evaluating functions

- for pure functions, evaluate to value of `return`

```javascript
var result = add(add(10, 5), add(5, add(-5, 5)));

// steps for JS to evaluate right-hand-side of `var result =`
add(add(10, 5), add(5, add(-5, 5)));
add(15 ,        add(5, add(-5, 5)));
add(15 ,        add(5, 0         ));
add(15 ,        5                 );
20
```

## Why so important?

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

## Could we write programs?

```javascript
while / do / for / try
```

## Let's make them

```javascript
function while_(test, block) {
  if(test()) {
    block();
    return while_(test, block); 
  }
}

var x = 10;
while_(() => x, () => {
  console.log("X: " + x);
})
```

## Functions <3

## The root

<video width="475" height="352" controls>
  <source src="slides-theme/movies/spirit-of-the-computer.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
</video>

## A language to describe problems

> Establishing languages controls complexity

SICP

